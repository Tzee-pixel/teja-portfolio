import React, { useEffect, useRef, useState } from 'react';

export interface PageMascotProps {
  directions?: string;
  reactions?: string;
  size?: number;
  className?: string;
  label?: string;
}

// Direction frame names mapped to 3x3 sprite sheet grid
const DIRECTIONS_GRID = [
  'up-left', 'up', 'up-right',
  'left', 'center', 'right',
  'down-left', 'down', 'down-right',
] as const;

// Reaction frame names mapped to 3x3 sprite sheet grid
const REACTIONS_GRID = [
  'blink', 'heart', 'sparkle',
  'surprised', 'wink', 'bashful',
  'sleepy', 'dizzy', 'delighted',
] as const;

// 8 radial direction sectors starting from 0 radians (right) clockwise
const SECTOR_DIRECTIONS = [
  'right', 'down-right', 'down', 'down-left',
  'left', 'up-left', 'up', 'up-right',
] as const;

const SECTOR_ANGLE = (Math.PI * 2) / SECTOR_DIRECTIONS.length; // 45 degrees in radians
const HYSTERESIS_BUFFER = 0.12; // Angular buffer in radians to prevent jitter on boundaries
const DEAD_ZONE_RADIUS = 70; // Pixels from mascot center to trigger "center" frame

// Poke reaction sequence constants
const REACTION_CYCLE = ['heart', 'sparkle', 'delighted'] as const;
const BLINK_TO_REACTION_DELAY = 120; // ms before showing expression
const REACTION_TOTAL_DURATION = 560; // ms before returning to cursor tracking
const SQUISH_ANIMATION_DURATION = 420; // ms for squash & stretch
const COMBO_STREAK_THRESHOLD = 4; // Clicks within window to trigger dizzy
const COMBO_WINDOW_MS = 1600; // ms window for combo counting
const DIZZY_DURATION_MS = 1100; // ms dizzy reaction lasts

// Keyframe squash & stretch animation with spring physics
const SQUISH_KEYFRAMES: Keyframe[] = [
  { transform: 'scale(1, 1)', easing: 'ease-in' },
  { transform: 'scale(1.10, 0.86)', offset: 0.18, easing: 'ease-out' },
  { transform: 'scale(0.95, 1.08)', offset: 0.45, easing: 'ease-in-out' },
  { transform: 'scale(1.03, 0.97)', offset: 0.72, easing: 'ease-in-out' },
  { transform: 'scale(1, 1)' },
];

function getSpritePosition(index: number) {
  const col = index % 3;
  const row = Math.floor(index / 3);
  return { backgroundPosition: `${col * 50}% ${row * 50}%` };
}

function normalizeAngle(angle: number) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

const LAYER_STYLE: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  backgroundSize: '300% 300%',
  backgroundRepeat: 'no-repeat',
  pointerEvents: 'none',
  transition: 'opacity 120ms ease-out',
};

export const PageMascot: React.FC<PageMascotProps> = ({
  directions = '/mascots/cat-directions.webp',
  reactions = '/mascots/cat-reactions.webp',
  size = 115,
  className = '',
  label = 'mascot',
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const squishRef = useRef<HTMLSpanElement>(null);
  const timeoutsRef = useRef<number[]>([]);
  const streakRef = useRef<{ count: number; at: number }>({ count: 0, at: 0 });

  const [direction, setDirection] = useState<typeof DIRECTIONS_GRID[number]>('center');
  const [reaction, setReaction] = useState<typeof REACTIONS_GRID[number] | null>(null);

  // Mouse & scroll tracking with hysteresis
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let currentSectorIndex = -1;
    let mousePos: { x: number; y: number } | null = null;

    const recalculate = () => {
      const buttonEl = buttonRef.current;
      if (!buttonEl || !mousePos) return;

      const rect = buttonEl.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = mousePos.x - centerX;
      const dy = mousePos.y - centerY;

      // When cursor is close to mascot center, look directly at user
      if (Math.hypot(dx, dy) < DEAD_ZONE_RADIUS) {
        currentSectorIndex = -1;
        setDirection('center');
        return;
      }

      const angle = Math.atan2(dy, dx);

      // Hysteresis: only switch sector if angular difference exceeds half-sector + buffer
      if (
        currentSectorIndex !== -1 &&
        Math.abs(normalizeAngle(angle - currentSectorIndex * SECTOR_ANGLE)) <
          SECTOR_ANGLE / 2 + HYSTERESIS_BUFFER
      ) {
        return;
      }

      currentSectorIndex =
        (Math.round(angle / SECTOR_ANGLE) + SECTOR_DIRECTIONS.length) %
        SECTOR_DIRECTIONS.length;

      setDirection(SECTOR_DIRECTIONS[currentSectorIndex]);
    };

    const handlePointerMove = (e: PointerEvent) => {
      mousePos = { x: e.clientX, y: e.clientY };
      recalculate();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', recalculate, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', recalculate);
    };
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(window.clearTimeout);
    };
  }, []);

  // Handle Mascot Click / Poke ("Boop")
  const handleClick = () => {
    timeoutsRef.current.forEach(window.clearTimeout);
    timeoutsRef.current = [];

    const schedule = (ms: number, reactType: typeof REACTIONS_GRID[number] | null) => {
      timeoutsRef.current.push(
        window.setTimeout(() => setReaction(reactType), ms)
      );
    };

    const now = Date.now();
    const streak = streakRef.current;

    streak.count = now - streak.at < COMBO_WINDOW_MS ? streak.count + 1 : 1;
    streak.at = now;

    if (streak.count >= COMBO_STREAK_THRESHOLD) {
      streak.count = 0;
      setReaction('dizzy');
      schedule(DIZZY_DURATION_MS, null);
    } else {
      setReaction('blink');
      schedule(
        BLINK_TO_REACTION_DELAY,
        REACTION_CYCLE[(streak.count - 1) % REACTION_CYCLE.length]
      );
      schedule(REACTION_TOTAL_DURATION, null);
    }

    // Squash & Stretch web animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && squishRef.current) {
      squishRef.current.animate(SQUISH_KEYFRAMES, {
        duration: SQUISH_ANIMATION_DURATION,
        easing: 'linear',
      });
    }
  };

  const directionIndex = DIRECTIONS_GRID.indexOf(direction);
  const reactionIndex = REACTIONS_GRID.indexOf(reaction ?? 'blink');

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={handleClick}
      aria-label={`Boop the ${label}`}
      className={className}
      style={{
        position: 'relative',
        display: 'block',
        flexShrink: 0,
        width: `${size}px`,
        height: `${size}px`,
        padding: 0,
        border: 0,
        background: 'transparent',
        appearance: 'none',
        cursor: 'pointer',
        userSelect: 'none',
        outline: 'none',
      }}
    >
      <span
        ref={squishRef}
        style={{
          position: 'relative',
          display: 'block',
          width: '100%',
          height: '100%',
          transformOrigin: '50% 78%',
        }}
      >
        {/* Directions Sheet Layer */}
        <span
          style={{
            ...LAYER_STYLE,
            backgroundImage: `url(${directions})`,
            ...getSpritePosition(directionIndex >= 0 ? directionIndex : 4),
            opacity: reaction ? 0 : 1,
          }}
        />

        {/* Reactions Sheet Layer */}
        <span
          style={{
            ...LAYER_STYLE,
            backgroundImage: `url(${reactions})`,
            ...getSpritePosition(reactionIndex >= 0 ? reactionIndex : 0),
            opacity: reaction ? 1 : 0,
          }}
        />
      </span>
    </button>
  );
};

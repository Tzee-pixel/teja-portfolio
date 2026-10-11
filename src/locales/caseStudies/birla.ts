export const birlaContent = {
  en: {
    nav: {
      introduction: 'Introduction',
      results: 'Results',
      problem: 'The Problem',
      users: 'User Roles & Needs',
      workflow: 'Workflow & Interface',
      finalExperience: 'Final Experience',
      reflections: 'Reflections',
    },
    hero: {
      badge: 'Web Application',
      livePrototype: 'Live Prototype',
      title: 'Birla Estates Agile - improving team workflow through a centralized task management system',
      description: 'Birla Estates is the real estate division of the Aditya Birla Group, developing premium residential and commercial properties across major Indian cities. As their portfolio of development projects grew, we designed a centralized task management system to eliminate communication bottlenecks, speed up daily assignments, and clarify project ownership for their internal teams.',
      meta: {
        industryLabel: 'Industry',
        industryValue: 'Real Estate',
        roleLabel: 'Role',
        roleValue: 'UI/UX Designer',
        teamLabel: 'Team',
        teamValue: '3 Members',
      },
    },
    introduction: {
      title: 'Making task management easier to act on',
      p1: 'Birla Estates Agile is an internal task management system that helps teams create, assign, receive, and track tasks across multiple real estate projects.',
      p2: 'Managers can assign work and monitor progress, while employees can see their responsibilities, deadlines, priorities, and status in one place.',
      p3: 'The system also connects assignments with Email + WhatsApp notifications.',
      confidentialityNote: 'Note: To respect client confidentiality, the interactive prototype below is a recreated version showcasing the core workflow rather than the live product. Feel free to click through and explore the experience.',
      prototypeButton: 'Live Prototype',
      prototypeHint: 'Click to interact with the dashboard',
      openLink: 'Open',
    },
    results: {
      title: 'Results',
      subtitle: 'By standardizing assignment and connecting it to automated notifications, the new workflow created measurable operational efficiency.',
      metrics: [
        { value: '60%', label: 'Reduction in task assignment time' },
        { value: '50%', label: 'Reduction in manual follow-ups' },
        { value: '25+', label: 'Active tasks visible in real time' },
        { value: '100%', label: 'Dual-channel notification delivery' },
      ],
    },
    problem: {
      title: "The problem wasn't creating tasks. It was keeping everyone aligned.",
      description: 'Tasks were assigned across multiple property locations (Birla Navya, Tisya, Alokya) with no centralized system. Senior managers wasted time constantly tracking progress, while junior employees missed assignments and struggled to prioritize.',
      frictionTitle: 'Three recurring friction points:',
      frictionPoints: [
        {
          label: 'Assign',
          desc: 'Managers needed a faster way to create and assign.',
        },
        {
          label: 'Understand',
          desc: 'Employees needed to know what to do and when, immediately.',
        },
        {
          label: 'Track',
          desc: 'Managers needed visibility without constant follow-ups.',
        },
      ],
    },
    users: {
      title: 'Two users. Two different needs.',
      description: 'The system needed to support a hierarchical workflow, so I started by looking at the needs of the people using it. The challenge was to create one system that supports both roles without giving everyone the same interface.',
      manager: {
        badge: 'Management',
        sub: 'Operations & Strategy',
        title: 'Senior Manager',
        quote: '“I need to track multiple tasks without constant follow-ups.”',
        needsTitle: 'Key Needs',
        needs: [
          'Quick overview of task status',
          'Easy task assignment',
          'Visibility across projects',
          'Less manual follow-up',
        ],
      },
      employee: {
        badge: 'Execution',
        sub: 'Daily Deliverables',
        title: 'Junior Employee',
        quote: '“I miss task assignments and struggle to prioritize my work.”',
        needsTitle: 'Key Needs',
        needs: [
          'Immediate task notifications',
          'Clear deadlines',
          'Priority information',
          'Simple task status',
        ],
      },
    },
    workflow: {
      title: 'The workflow shaped the interface',
      subtitle: 'Through user interviews, two important needs emerged:',
      managerCard: {
        tag: 'Executive View',
        title: 'Managers needed an overview',
        desc: 'They needed to understand the health and status of multiple concurrent tasks without clicking into individual tickets or chasing teams.',
        footer: 'High-scannability dashboard metrics',
      },
      employeeCard: {
        tag: 'Actionable Alert',
        title: 'Employees needed immediacy',
        desc: 'They needed instant clarity the moment a task was assigned, including clear priority levels, deadlines, and expected outcomes.',
        footer: 'Instant alerts & priority indicators',
      },
    },
    finalExperience: {
      title: 'The final experience',
      subtitle: 'A centralized system for assigning, receiving, and tracking work.',
      p1: 'Birla Estates Agile brings the entire task lifecycle into one place. Managers can create and assign tasks, employees receive the assignment through Email + WhatsApp, and everyone can follow progress through a centralized task view.',
      ribbon: 'Create → Notify → Work → Track',
      p2: 'The interface keeps project, assignee, priority, deadline, and status connected, making it easy to understand what needs to be done, who owns it, and what happens next.',
      whatChanged: {
        title: 'What changed',
        subtitle: 'The new workflow connected task creation, communication, and progress tracking in one system.',
        cards: [
          {
            stat: '60%',
            title: 'Faster task assignment',
            desc: 'The structured form and automated workflow reduced the time required to create and assign tasks.',
          },
          {
            stat: '50%',
            title: 'Fewer manual follow-ups',
            desc: 'The dashboard gave managers a centralized view of task progress.',
          },
          {
            stat: '25+',
            title: 'Active tasks visible',
            desc: 'Managers could monitor multiple active tasks and their current status.',
          },
          {
            stat: '100%',
            title: 'Notification delivery*',
            desc: 'The dual-channel system supported reliable communication of task assignments.',
          },
        ],
      },
    },
    reflections: {
      title: 'Reflections',
      subtitle: 'What I learned',
      learnings: [
        {
          bold: '01 — The workflow comes before the interface:',
          desc: 'The most important decisions came from understanding how managers and employees actually worked, rather than starting with dashboard components.',
        },
        {
          bold: '02 — Different users need different levels of control:',
          desc: 'Role-based views helped keep the interface focused while still supporting a hierarchical organization.',
        },
        {
          bold: '03 — Communication is part of the product experience:',
          desc: "The task doesn't end when a manager clicks Assign. The employee needs to receive, understand, and act on that assignment.",
        },
        {
          bold: '04 — Visibility can reduce communication overhead:',
          desc: 'When the right information is visible at a glance, managers have less need to rely on repeated follow-ups to understand task progress.',
        },
      ],
    },
    footer: {
      moreProjects: 'Explore more projects',
      viewAll: 'View all',
    },
  },
  ja: {
    nav: {
      introduction: '概要とプロトタイプ',
      results: '導入成果・数値',
      problem: '課題と現場の摩擦',
      users: '役割別のペルソナと要望',
      workflow: '業務フローとUI設計',
      finalExperience: '主要UI体験',
      reflections: '学びと考察',
    },
    hero: {
      badge: '社内業務Webアプリケーション',
      livePrototype: '実動プロトタイプを見る',
      title: 'Birla Estates Agile — 開発現場のタスクを一元管理し、チームの業務効率と連動性を高める業務管理システム',
      description: 'Birla Estatesは、インドの大手コングロマリットAditya Birla Groupの不動産開発部門であり、主要都市でプレミアムな住宅・商業施設を展開しています。開発プロジェクトの急拡大に伴い、現場と管理職間のコミュニケーション遅延を解消し、日々の業務指示を迅速化して責任範囲を明確化する専用タスク管理システムを設計しました。',
      meta: {
        industryLabel: '業界',
        industryValue: '不動産開発 / プロパティマネジメント',
        roleLabel: '担当役割',
        roleValue: 'UI/UXデザイナー',
        teamLabel: 'チーム体制',
        teamValue: '3名（プロダクトマネージャー, UI/UXデザイナー, フルスタックエンジニア）',
      },
    },
    introduction: {
      title: '現場が迷わず即座に行動できるタスク管理へ',
      p1: 'Birla Estates Agileは、複数の不動産開発プロジェクトを跨ぐ業務の起票・割り当て・受領・進捗追跡を一元管理する社内業務支援システムです。',
      p2: 'マネージャーは各現場の進捗を一目で把握して即座にタスクを指示でき、実務担当者は自身の担当業務、期限、優先順位、完了ステータスをダッシュボード上で迷わず確認できます。',
      p3: 'さらに業務のアサインと同時に、現場で最も日常的に使われているEメールおよびWhatsAppへ自動通知を連携させました。',
      confidentialityNote: '※クライアントとの守秘義務（NDA）に配慮し、以下のインタラクティブプロトタイプは実運用データを伏せ、主要ワークフローを忠実に再現したデモ画面です。実際にクリックして操作感をお試しいただけます。',
      prototypeButton: 'プロトタイプを操作する',
      prototypeHint: 'クリックしてダッシュボードを直接操作できます',
      openLink: '別タブで開く',
    },
    results: {
      title: '成果・業務インパクト',
      subtitle: 'タスク起票の標準化とチャネル連携通知の自動化により、現場オペレーションの飛躍的な効率化を実現しました。',
      metrics: [
        { value: '60%', label: 'タスク割り当て所要時間の削減' },
        { value: '50%', label: '進捗確認の催促連絡を削減' },
        { value: '25+', label: 'リアルタイム可視化された並行タスク' },
        { value: '100%', label: 'メール＆WhatsApp通知到達率' },
      ],
    },
    problem: {
      title: '課題の本質はタスクの作成ではなく、現場の足並みを揃え続けることにあった',
      description: 'Birla Navya、Tisya、Alokyaなど複数の遠隔不動産プロジェクトにおいて、一元化された管理基盤がなくタスクが個別に割り振られていました。シニアマネージャーは各所への電話や確認連絡に膨大な時間を奪われ、現場スタッフは指示の埋もれや優先度の判断に苦慮していました。',
      frictionTitle: '現場で日常化していた3つの摩擦点：',
      frictionPoints: [
        {
          label: '起票と指示（Assign）',
          desc: 'マネージャー側：現場のスタッフへ素早くタスクを作成・割り当てる手段の欠如',
        },
        {
          label: '把握と着手（Understand）',
          desc: 'スタッフ側：何をいつまでに、どの優先度で完了すべきかが即座に伝わらない',
        },
        {
          label: '追跡と共有（Track）',
          desc: '双方：何度も進捗を電話で確認し合わなければ全体の進行状況が見えない',
        },
      ],
    },
    users: {
      title: '異なる視点を持つ2つの立場と、それぞれの要件',
      description: '組織の階層的な業務フローに寄り添うため、利用者の行動特性と心理的負荷の分析から着手しました。単一の同一画面を全員に押し付けるのではなく、役割ごとに最適な情報密度を提供するUIの設計を目指しました。',
      manager: {
        badge: 'マネジメント層',
        sub: '統括・プロジェクト推進',
        title: 'シニアマネージャー',
        quote: '「個別のチャットで進捗をいちいち追いかけることなく、全体状況を俯瞰したい。」',
        needsTitle: '主な要件・ニーズ',
        needs: [
          'タスク全体の健康状態の一括把握',
          '迷いのないスムーズなタスク割り当て',
          '複数プロジェクト間の進捗可視化',
          '手動によるリマインド業務の削減',
        ],
      },
      employee: {
        badge: '実務・実行層',
        sub: '現場オペレーション担当',
        title: 'ジュニアスタッフ',
        quote: '「指示を見落としやすく、どの業務から優先して着手すべきか判断に迷う。」',
        needsTitle: '主な要件・ニーズ',
        needs: [
          '新規アサインの即時通知の受領',
          '明確な完了期日と目標の可視化',
          '直感的に理解できる優先度表示',
          'ワンタップで更新できるステータス管理',
        ],
      },
    },
    workflow: {
      title: '業務フローがUIの造形を決める',
      subtitle: '現場ヒアリングを通じて、対照的な2つの本質的ニーズが浮き彫りになりました。',
      managerCard: {
        tag: 'マネジメント向けビュー',
        title: 'マネージャーが求めた「一覧性（Overview）」',
        desc: '個々のチケットを都度開いたり担当者を問い詰めることなく、並行して走る複数タスクの健全度と停滞箇所を一目で把握できる構造。',
        footer: '流し読みでも状態が掴めるダッシュボード指標',
      },
      employeeCard: {
        tag: '現場スタッフ向けビュー',
        title: '実務スタッフが求めた「即時性（Immediacy）」',
        desc: 'タスクが割り当てられた瞬間に通知が届き、優先度・納期・期待される成果物が明確に伝わる迷いのない情報提示。',
        footer: '即時アラートと明瞭な優先度バッジ',
      },
    },
    finalExperience: {
      title: '完成したプロダクト体験',
      subtitle: '起票から通知、実行、追跡までが一本に繋がる集中管理基盤',
      p1: 'Birla Estates Agileは、タスクのライフサイクル全体をひとつのプラットフォームに統合しました。マネージャーがタスクを起票すると同時に現場スタッフのEmailおよびWhatsAppへ即座に通知が届き、共通のタスクボード上で全員が最新進捗を共有できます。',
      ribbon: 'タスク起票 → 自動通知 → 現場実行 → 進捗追跡',
      p2: 'プロジェクト名、担当者、優先度、納期、進捗ステータスが密接に紐付けられ、「誰が、何を、いつまでに完遂すべきか」が一目で把握できます。',
      whatChanged: {
        title: 'リニューアルによる変革',
        subtitle: '分断されていたタスク作成・連絡・追跡の各ステップを統合したことで、現場の生産性に明確な改善がもたらされました。',
        cards: [
          {
            stat: '60%',
            title: 'タスク割り当ての高速化',
            desc: '構造化された入力フォームと自動割り当てフローにより、起票から指示完了までの時間を大幅に短縮。',
          },
          {
            stat: '50%',
            title: '進捗確認コールの削減',
            desc: 'ダッシュボード上でステータスが即座に共有されるため、電話や個別チャットによる催促確認が半減。',
          },
          {
            stat: '25+ 件',
            title: '同時進行タスクの常時可視化',
            desc: '各現場で動く25件以上のタスク進行状況を、マネージャーが1画面からストレスなく監視可能に。',
          },
          {
            stat: '100%',
            title: 'デュアル通知到達率',
            desc: 'メールと現場で最も見られるWhatsAppの2系統通知により、指示の見落としを完全に防止。',
          },
        ],
      },
    },
    reflections: {
      title: 'プロジェクトの総括と学び',
      subtitle: '実践を通じて得られた知見',
      learnings: [
        {
          bold: '01 — UIコンポーネントより前に、まず業務フローを理解する:',
          desc: 'ダッシュボードのパーツを並べる前に、マネージャーとスタッフが現場で実際にどのように会話・作業しているのかを突き詰めたことが、最大の成功要因でした。',
        },
        {
          bold: '02 — 役割に応じた情報開示と権限の切り分け:',
          desc: '組織階層のニーズを尊重し、役割ごとに最適化した画面ビューを提供することで、多機能でありながら認知負荷の低いUIを実現しました。',
        },
        {
          bold: '03 — 「通知」も重要なプロダクト体験の一部である:',
          desc: 'マネージャーが画面上でアサインボタンを押しただけで仕事は終わりません。現場スタッフが確実に受け取り、理解し、行動に移せる導線までを設計することが不可欠です。',
        },
        {
          bold: '04 — 適切な可視化がコミュニケーションコストを削ぎ落とす:',
          desc: '必要な情報が一目で伝わるダッシュボードがあれば、進捗確認のための不要な会議や個別の催促連絡は自然と淘汰されます。',
        },
      ],
    },
    footer: {
      moreProjects: 'その他のプロジェクト',
      viewAll: 'すべて見る',
    },
  },
};

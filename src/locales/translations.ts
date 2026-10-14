export type Language = 'en' | 'ja';

export interface Translations {
  sidebar: {
    greeting: string;
    bio: string;
    seeProjects: string;
    aboutMe: string;
    gallery: string;
    readBlog: string;
    linkedIn: string;
    copied: string;
    menuOpen: string;
    menuClose: string;
  };
  headline: {
    prefix: string;
    intention: string;
    speed: string;
    obsess: string;
    suffix: string;
  };
  metaStats: {
    experienceLabel: string;
    experienceValue: string;
    specialisedLabel: string;
    specialisedValue: string;
    basedLabel: string;
    basedValue: string;
  };
  projects: {
    cloudpanelTag: string;
    cloudpanelTitle: string;
    localbiteTag: string;
    localbiteTitle: string;
    birlaTag: string;
    birlaTitle: string;
    magentoTag: string;
    magentoTitle: string;
  };
  testimonials: {
    tag: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    card1Role: string;
    card2Role: string;
    card3Role: string;
    card1Quote: string;
    card2Quote: string;
    card3Quote: string;
  };
  blog: {
    badge: string;
    text: string;
  };
  social: {
    badge: string;
    mediumLabel: string;
    linkedInLabel: string;
  };
  caseStudy: {
    backToHome: string;
    tag: string;
    externalLink: string;
    nav: {
      results: string;
      challenges: string;
      role: string;
      process: string;
      reflections: string;
    };
    title: string;
    summary: string;
    mockupBadgeName: string;
    resultsHeading: string;
    resultsText: string;
    challengesHeading: string;
    challengesText: string;
    roleHeading: string;
    roleText: string;
    processHeading: string;
    processText: string;
    reflectionsHeading: string;
    reflectionsText: string;
  };
  footer: {
    headingPrefix: string;
    headingHighlight: string;
    linkedIn: string;
    copied: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    sidebar: {
      greeting: "Hi! I am Tejashree",
      bio: "A hybrid designer working across UI/UX, product design, design systems, web, and AI. I go deep into the problem and wide into the possibilities.",
      seeProjects: "See all projects",
      aboutMe: "About me",
      gallery: "Gallery",
      readBlog: "Read blog",
      linkedIn: "My LinkedIn",
      copied: "Copied to Clipboard",
      menuOpen: "menu",
      menuClose: "close",
    },
    headline: {
      prefix: "I design with",
      intention: "intention",
      speed: "speed",
      obsess: "obsess",
      suffix: "over the details",
    },
    metaStats: {
      experienceLabel: "Experience/",
      experienceValue: "5+ years",
      specialisedLabel: "Specialised at/",
      specialisedValue: "UX/UI & product design",
      basedLabel: "Based in/",
      basedValue: "Tokyo, Japan",
    },
    projects: {
      cloudpanelTag: "Website Redesign",
      cloudpanelTitle: "A CloudPanel website redesign that lifted engagement by 30%",
      localbiteTag: "UX Research",
      localbiteTitle: "Helping people discover the local specialities of any place they visit",
      birlaTag: "Product design",
      birlaTitle: "One dashboard to track 8 property projects and their tasks",
      magentoTag: "Website Redesign",
      magentoTitle: "MGT-Commerce redesign: Making Magento hosting plans easy to compare",
    },
    testimonials: {
      tag: "Testimonials",
      headingPrefix: "Words from",
      headingHighlight: "colleagues",
      subtitle: "Feedback from people I've had the pleasure of working\u00A0with.",
      card1Role: "AI Artist & Senior Designer at i2e consulting pvt ltd",
      card2Role: "System Administrator Team Lead at MGT-Commerce",
      card3Role: "UI/UX Designer Team Lead at Somaiya University",
      card1Quote: "She is an exceptionally talented creative professional with extensive expertise in graphic design and UI/UX.\n\nWhat I admire most about Tejashree is her exceptional eye for detail, creative thinking, and ability to solve design challenges effectively. Her technical expertise, clear communication, and ability to explain concepts thoughtfully make her an excellent mentor and leader.",
      card2Quote: "What makes Tejashree stand out as a designer is her unique ability to collaborate with engineering and master complex technical concepts.\n\nShe was quick to understand technical terms and logic and designed completely accurate, development-ready solutions based on them. Her cross-functional communication is excellent, and she showed incredible leadership potential by bridging the gap between design and engineering.",
      card3Quote: "She is a quick learner with a positive attitude and a genuine interest in UI/UX design. She consistently demonstrated creativity, eagerness to learn new concepts, and the ability to adapt to feedback.\n\nTejashree handled assigned projects independently, completed her work on time, and showed responsibility throughout her internship. I appreciate her dedication, willingness to improve, and commitment to delivering quality work.",
    },
    blog: {
      badge: "In progress",
      text: "This portfolio is currently under development. I'm actively adding more content and projects. Check back soon for updates!",
    },
    social: {
      badge: "Visit me",
      mediumLabel: "Articles on",
      linkedInLabel: "DM me on",
    },
    footer: {
      headingPrefix: "Created with",
      headingHighlight: "love",
      linkedIn: "My LinkedIn",
      copied: "Copied to Clipboard",
    },
    caseStudy: {
      backToHome: "Back to home page",
      tag: "Product design",
      externalLink: "CloudPanel",
      nav: {
        results: "Results",
        challenges: "Challenges",
        role: "My role",
        process: "Design process",
        reflections: "Reflections",
      },
      title: "cloudpanel - website, server management & design system from scratch",
      summary: "CloudPanel is an open-source PHP server management control panel designed for speed and simplicity. In this project, we re-architected the website, developer onboarding flow, and visual design system to deliver an intuitive experience for technical users.",
      mockupBadgeName: "Teja",
      resultsHeading: "Results",
      resultsText: "The redesign achieved significant improvements in self-service server setup and user satisfaction across the developer community.",
      challengesHeading: "Challenges",
      challengesText: "Complex technical configurations, scattered documentation, and the need to cater to both novice webmasters and experienced DevOps engineers without adding friction.",
      roleHeading: "My role",
      roleText: "Led the end-to-end product design lifecycle: user research, UX architecture, UI design system creation in Figma, prototyping, and close developer handoff.",
      processHeading: "Design process",
      processText: "Iterative design sprints focused on simplifying multi-step server provisioning, establishing clear typography hierarchies, and conducting rapid usability validation.",
      reflectionsHeading: "Reflections",
      reflectionsText: "Designing for developer tools requires balancing power with clarity. Creating unified design system components drastically accelerated development and maintenance.",
    },
  },
  ja: {
    sidebar: {
      greeting: "こんにちは、テジャシュリーです",
      bio: "UI/UX、プロダクトデザイン、デザインシステム、Web、AI領域を横断するハイブリッドデザイナー。本質的な課題に深く向き合い、可能性をどこまでも広げます。",
      seeProjects: "プロジェクトを見る",
      aboutMe: "自己紹介",
      gallery: "ギャラリー",
      readBlog: "ブログを読む",
      linkedIn: "LinkedIn",
      copied: "クリップボードにコピーしました",
      menuOpen: "メニュー",
      menuClose: "閉じる",
    },
    headline: {
      prefix: "意図を持って",
      intention: "デザイン",
      speed: "迅速",
      obsess: "細部",
      suffix: "にこだわり抜く",
    },
    metaStats: {
      experienceLabel: "経験年数/",
      experienceValue: "5年以上",
      specialisedLabel: "専門分野/",
      specialisedValue: "UI/UX・プロダクトデザイン",
      basedLabel: "現在地/",
      basedValue: "東京",
    },
    projects: {
      cloudpanelTag: "Webリニューアル",
      cloudpanelTitle: "エンゲージメント率を30%向上させた、CloudPanel Webサイトリニューアル",
      localbiteTag: "UXリサーチ",
      localbiteTitle: "訪れる場所のローカルな特産品を発見できるアプリ",
      birlaTag: "プロダクトデザイン",
      birlaTitle: "8つの不動産プロジェクトとタスクを一元管理するダッシュボード",
      magentoTag: "Webリニューアル",
      magentoTitle: "MGT-Commerceリニューアル : Magentoホスティングのプランを比較しやすく",
    },
    testimonials: {
      tag: "推薦の言葉",
      headingPrefix: "共に働いた仲間からの",
      headingHighlight: "メッセージ",
      subtitle: "これまでにプロジェクトをご一緒した同僚やクライアントからの推薦の声。",
      card1Role: "i2e consulting pvt ltd AIアーティスト 兼 シニアデザイナー",
      card2Role: "MGT-Commerce システム管理者チームリード",
      card3Role: "ソマイヤ大学 UI/UXデザイナー チームリード",
      card1Quote: "グラフィックデザインとUI/UXの両面で卓越した専門性を持つ、非常に優秀なクリエイティブのプロフェッショナルです。\n\n細部への鋭いこだわり、独創的な発想力、そしてデザインの課題を的確に解決する力には目を見張るものがあります。高い技術力と明快なコミュニケーション、概念を論理的に言語化する力も備えており、メンターとしてもリーダーとしても頼もしい存在です。",
      card2Quote: "デザイナーとしての彼女の際立った強みは、複雑な技術概念を深く理解し、エンジニアと高精度に協働できる点にあります。\n\n技術用語やシステムロジックの呑み込みが非常に早く、開発実装をそのまま見据えた正確なソリューションを提示してくれました。部署の垣根を越えたコミュニケーションが抜群で、デザインと開発の架け橋として確かなリーダーシップを発揮しています。",
      card3Quote: "前向きな姿勢とUI/UXへの探究心にあふれ、吸収力が非常に高いデザイナーです。常にクリエイティビティを発揮し、新しい学びを貪欲に取り入れながら、フィードバックを柔軟に昇華させていきました。\n\n任せたプロジェクトを自律的に推進し、納期を守る責任感も抜群です。質の高いアウトプットへのこだわりと誠実な姿勢を、心から高く評価しています。",
    },
    blog: {
      badge: "準備中",
      text: "現在ポートフォリオをアップデート中です。制作実績や記事を順次追加していますので、ぜひまたチェックしてみてください。",
    },
    social: {
      badge: "SNS・リンク",
      mediumLabel: "記事・執筆",
      linkedInLabel: "メッセージはこちら",
    },
    footer: {
      headingPrefix: "想いから生まれる",
      headingHighlight: "デザイン",
      linkedIn: "LinkedIn",
      copied: "クリップボードにコピーしました",
    },
    caseStudy: {
      backToHome: "ホームに戻る",
      tag: "プロダクトデザイン",
      externalLink: "CloudPanel",
      nav: {
        results: "成果",
        challenges: "課題",
        role: "担当領域",
        process: "プロセス",
        reflections: "学びと振り返り",
      },
      title: "CloudPanel — Webサイト刷新、サーバー管理UI、デザインシステムのゼロからの構築",
      summary: "CloudPanelは、PHPに特化した高速・シンプルなオープンソースのサーバー管理プラットフォームです。本プロジェクトでは、Webサイトの刷新、開発者のオンボーディング設計、包括的なデザインシステム構築をリードしました。",
      mockupBadgeName: "Tejashree",
      resultsHeading: "主な成果",
      resultsText: "セルフサービスでのセットアップ完了率が向上し、グローバルのエンジニアコミュニティから高い評価を獲得しました。",
      challengesHeading: "直面した課題",
      challengesText: "複雑なインフラ設定と散在していた情報を整理し、初心者と熟練DevOpsエンジニアの双方が迷わず扱える直感的なUI構造をつくる必要がありました。",
      roleHeading: "担当領域",
      roleText: "ユーザーリサーチからUX情報設計、Figmaでのデザインシステム構築、プロトタイピング、エンジニアへの実装ハンドオフまで、プロダクトデザイン全般をリード。",
      processHeading: "デザインプロセス",
      processText: "複数ステップにわたるサーバー構築フローを徹底的にシンプル化。明確なタイポグラフィ階層を設計し、迅速なユーザビリティテストを重ねてブラッシュアップしました。",
      reflectionsHeading: "学びと振り返り",
      reflectionsText: "開発者向けツールにおいては「高機能」と「わかりやすさ」の両立が不可欠です。一貫したデザインシステムを構築したことで、開発スピードと保守性が劇的に向上しました。",
    },
  },
};

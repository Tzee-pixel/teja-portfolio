export const cloudpanelContent = {
  en: {
    nav: {
      introduction: 'Introduction',
      results: 'Results',
      challenge: 'The Challenge',
      research: 'Research & Insights',
      designSystem: 'Design System',
      finalExperience: 'Final Experience',
      reflections: 'Reflections',
    },
    hero: {
      badge: 'Website Redesign',
      liveLink: 'cloudpanel.io',
      title: 'CloudPanel - simplifying the cloud-hosting experience through a website redesign',
      description: 'CloudPanel is an open-source server management platform used by 100,000+ developers and businesses worldwide. As the product grew, we redesigned its website to better communicate its value, simplify navigation, and make installation easier.',
      meta: {
        industryLabel: 'Industry',
        industryValue: 'Cloud Hosting',
        roleLabel: 'Role',
        roleValue: 'UI/UX Designer',
        timelineLabel: 'Timeline',
        timelineValue: '3 months',
        teamLabel: 'Team',
        teamValue: '5 Members',
      },
    },
    results: {
      title: 'Results',
      subtitle: "The redesign focused on making CloudPanel's product value easier to understand and creating a clearer path from discovery to installation.",
      metrics: [
        { value: '+30%', label: 'User engagement' },
        { value: '-25%', label: 'Bounce rate' },
        { value: '2,000+', label: 'Weekly installs' },
      ],
      footnote: '*Measured through GA4 comparisons between equivalent pre- and post-launch periods.',
    },
    challenge: {
      title: 'The challenge',
      p1: 'CloudPanel had a powerful technical product, but its website made it difficult for first-time visitors to quickly understand:',
      bullets: [
        'What is CloudPanel?',
        'What can I do with it?',
        'Where do I start?',
      ],
      p2: 'Users were also reporting confusing navigation and difficulty finding installation information.',
      oldDesignCaption: 'Old design',
      quote: '"The challenge was not simply to make the website look more modern. It was to make the product story easier to understand."',
    },
    research: {
      title: 'Finding where the experience broke down',
      p1: 'I combined user feedback, GA4 behavioral data, and competitor analysis to understand where the website was failing. Community feedback revealed recurring issues with navigation, unclear product value, technical language, and finding the installation guide. GA4 showed where users dropped off, with low engagement, shallow scrolling, and exits before installation. Competitor analysis of cPanel, Plesk, and DirectAdmin helped identify clearer patterns for navigation and product communication.',
      iaTitle: 'Rebuilding the information architecture',
      sitemap: {
        homepage: 'Homepage',
        product: {
          title: 'Product',
          items: ['Features', 'Technology Stack', 'Supported Applications', 'Supported Clouds'],
        },
        resources: {
          title: 'Resources',
          items: ['Documentation', 'Blog', 'Tutorials'],
        },
        company: {
          title: 'Company',
          items: ['Live Demo', 'Contact Us', 'Discord', 'Get Involved', 'About Us'],
        },
        partners: {
          title: 'Partners',
          items: ['Become a Partner', 'Find a Partner'],
        },
        legal: {
          title: 'Legal',
          items: ['Imprint', 'License Terms', 'Privacy Policy', 'GDPR'],
        },
      },
      quote: '"I reorganized the content around the information users needed before they were ready to install."',
    },
    designSystem: {
      title: 'Design System',
      description: 'To support rapid expansion across all web properties and technical documentation, I established a comprehensive typography hierarchy and semantic color palette. The system balances high-contrast developer clarity with a welcoming, modern aesthetic.',
      typographyTitle: 'Typography scale:',
      typographyDesc: 'Structured using Inter across display, multi-level headings, and functional code/body styles for effortless scanning and technical readability.',
      colorTitle: 'Color foundation:',
      colorDesc: 'Defined primary and secondary neutrals alongside vibrant UI accents and gradient sets for status tags, documentation callouts, and key CTA touchpoints.',
    },
    finalExperience: {
      title: 'The final experience',
      mobileTitle: 'Designing for mobile',
      mobileDesc: 'During usability testing, the primary CTA was not prominent enough on mobile, so I adjusted its placement and visual hierarchy before launch.',
    },
    reflections: {
      title: 'The result',
      metrics: [
        { label: 'User engagement increased by', value: '+30%' },
        { label: 'Bounce rate decreased by', value: '−25%' },
        { label: 'Supported weekly installs', value: '2,000+' },
      ],
      takeaways: [
        {
          bold: 'Structure before styling:',
          text: 'The biggest opportunities were found in the information architecture and content hierarchy, not simply the visual style.',
        },
        {
          bold: 'Data gives direction:',
          text: 'Combining user feedback with behavioral data helped turn assumptions into clearer design priorities.',
        },
        {
          bold: 'Design is collaborative:',
          text: 'Working with development, SEO, project management, and QA helped connect the experience across content, design, and implementation.',
        },
        {
          bold: '',
          text: 'The redesign improved overall engagement and reduced early drop-off while successfully supporting more than 2,000 weekly CloudPanel installs.',
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
      introduction: '概要',
      results: '成果・数値',
      challenge: '課題と背景',
      research: 'リサーチと情報設計',
      designSystem: 'デザインシステム',
      finalExperience: '主要UI体験',
      reflections: '学びと考察',
    },
    hero: {
      badge: 'Webサイトリニューアル',
      liveLink: 'cloudpanel.io',
      title: 'CloudPanel — Webサイト刷新によるサーバー運用の体験設計と導線最適化',
      description: 'CloudPanelは、世界10万人以上の開発者や企業に利用されているオープンソースのサーバー管理プラットフォームです。プロダクトの急速な成長に伴い、提供価値を直感的に伝え、迷いのないナビゲーションとスムーズな導入フローを実現するため、Webサイト全体の全面リニューアルを主導しました。',
      meta: {
        industryLabel: '業界',
        industryValue: 'クラウドホスティング / サーバー管理',
        roleLabel: '担当役割',
        roleValue: 'UI/UXデザイナー',
        timelineLabel: '制作期間',
        timelineValue: '3ヶ月',
        teamLabel: 'チーム体制',
        teamValue: '5名（PM, エンジニア, SEO, QA）',
      },
    },
    results: {
      title: '成果・インパクト',
      subtitle: '専門的な技術価値を瞬時に直感理解できるよう再定義し、トップ来訪からインストール実行に至るコンバージョン導線を最適化しました。',
      metrics: [
        { value: '+30%', label: 'ユーザーエンゲージメント率' },
        { value: '-25%', label: '初期直帰率（Bounce Rate）' },
        { value: '2,000+', label: '週間インストール数' },
      ],
      footnote: '*GA4におけるローンチ前後同一期間のアクセスログ比較データに基づく計測値。',
    },
    challenge: {
      title: '課題と背景',
      p1: 'CloudPanelは技術的に非常に高性能なプロダクトであった一方、既存のWebサイトでは新規来訪者が以下の本質的な疑問を瞬時に把握しづらい構造になっていました。',
      bullets: [
        'CloudPanelとはどのようなプロダクトなのか？',
        '自社のインフラ運用にどのような恩恵をもたらすのか？',
        '何から始めれば導入できるのか？',
      ],
      p2: 'さらにユーザーからは、ナビゲーションが複雑で迷いやすく、必要なインストール手順を見つけにくいという課題が浮き彫りになっていました。',
      oldDesignCaption: 'リニューアル前の旧Webサイト',
      quote: '「単に見た目を現代的に刷新するだけでなく、プロダクトが持つ真の価値を誰にでも直感的に伝わるストーリーへと再構築することが求められました。」',
    },
    research: {
      title: 'ユーザー体験におけるボトルネックの特定',
      p1: 'ユーザーからのフィードバック、GA4の行動データ解析、競合ベンチマーク分析を多角的に統合し、体験の離脱要因を特定しました。コミュニティの声からはナビゲーションの複雑さや難解な専門用語、導入ガイドへのアクセスの悪さが顕在化。GA4の分析ではスクロール到達率の低さや導入手前での離脱が判明しました。さらにcPanel、Plesk、DirectAdmin等の競合比較を通じ、開発者が信頼を置く情報開示のベストプラクティスを抽出しました。',
      iaTitle: '情報アーキテクチャ（IA）の再設計',
      sitemap: {
        homepage: 'トップページ',
        product: {
          title: 'プロダクト',
          items: ['機能一覧', 'テクノロジースタック', '対応アプリケーション', '対応クラウド環境'],
        },
        resources: {
          title: 'リソース',
          items: ['公式ドキュメント', '技術ブログ', 'チュートリアル'],
        },
        company: {
          title: '企業・コミュニティ',
          items: ['デモ体験', 'お問い合わせ', 'Discordコミュニティ', 'コントリビュート', '運営会社'],
        },
        partners: {
          title: 'パートナー',
          items: ['パートナー募集', 'パートナー一覧'],
        },
        legal: {
          title: '法的情報',
          items: ['運営者情報', 'ライセンス規約', 'プライバシーポリシー', 'GDPR対応'],
        },
      },
      quote: '「インストールを決断するまでに開発者が必要とする情報の優先度に基づき、コンテンツ構造を根本から組み替えました。」',
    },
    designSystem: {
      title: 'デザインシステム',
      description: '全Webプロパティおよび技術ドキュメントの迅速なスケールと一貫性を担保するため、堅牢なタイポグラフィ階層とセマンティックなカラーパレットを定義しました。開発者ツールの実用的な高コントラストと、親しみやすくモダンな洗練さを両立させています。',
      typographyTitle: 'タイポグラフィ設計:',
      typographyDesc: '可読性に優れた「Inter」を採用。見出しからコードブロック、本文まで緻密な階層を設計し、流し読みでも要点が即座に把握できるレイアウトを徹底。',
      colorTitle: 'カラー基盤:',
      colorDesc: '堅牢なニュートラルカラーをベースに、ステータスタグや重要なCTA、ドキュメントのハイライトに視認性の高いアクセントカラーとグラデーションを定義。',
    },
    finalExperience: {
      title: '完成したプロダクト体験',
      mobileTitle: 'モバイル環境での最適化',
      mobileDesc: 'ユーザビリティテストにおいて、モバイル閲覧時に主要CTAの視認性が不足していることが判明したため、導線配置と視覚的階層を最適化してから正式ローンチしました。',
    },
    reflections: {
      title: '総括と成果',
      metrics: [
        { label: 'ユーザー滞在・関心度向上', value: '+30%' },
        { label: '直帰率の低減', value: '−25%' },
        { label: '週間インストール支援数', value: '2,000+ 件' },
      ],
      takeaways: [
        {
          bold: '見た目の前に構造を設計する:',
          text: '最も大きな体験改善のレバーは、表面的なビジュアルではなく、情報アーキテクチャとコンテンツの優先順位付けにありました。',
        },
        {
          bold: '定量・定性データが示す方向性:',
          text: 'ユーザーからの生の声とGA4の行動ログを照らし合わせることで、主観的な仮説を確度の高いデザイン要件へと昇華できました。',
        },
        {
          bold: '職種を超えた共創プロセス:',
          text: 'エンジニア、SEOスペシャリスト、PM、QAと緊密に連携することで、設計から実装まで妥協のない体験の具現化が叶いました。',
        },
        {
          bold: '',
          text: 'このリニューアルによりサイト全体のエンゲージメントが大幅に改善し、初期離脱を低減させながら週2,000件を超える新規インストールの創出を安定して支援しています。',
        },
      ],
    },
    footer: {
      moreProjects: 'その他のプロジェクト',
      viewAll: 'すべて見る',
    },
  },
};

export const magentoContent = {
  en: {
    nav: {
      introduction: 'Introduction',
      results: 'Results',
      challenge: 'The Challenge',
      objectives: 'Objectives & Needs',
      research: 'Research & Insights',
      structure: 'Architecture & Journey',
      interface: 'Interface Decisions',
      collaboration: 'Cross-functional Flow',
      reflections: 'Reflections',
    },
    hero: {
      badge: 'Website Redesign',
      liveLink: 'mgt-commerce.com',
      title: 'MGT-Commerce - simplifying hosting plans, features, and technical information',
      description: 'MGT-Commerce is a Berlin-based Magento hosting company serving 5,000+ customers worldwide with 40+ engineers. As its services grew, we redesigned the website to simplify navigation, clarify hosting plans, and make complex technical information easier to understand.',
      meta: {
        industryLabel: 'Industry',
        industryValue: 'Cloud Hosting',
        roleLabel: 'Role',
        roleValue: 'UI/UX Designer',
        timelineLabel: 'Timeline',
        timelineValue: '6 months',
        teamLabel: 'Team',
        teamValue: '5 members',
      },
    },
    introduction: {
      title: 'A clearer experience for a complex product',
      p1: 'MGT-Commerce provides managed cloud hosting for Magento-based e-commerce businesses. The redesign aimed to boost user experience, SEO, and conversions by building a more modern and trustworthy website, while making services, pricing, and technical content easier to understand.',
      p2: 'We restructured the experience across 40+ pages, improving the information architecture, content hierarchy, visual design, and responsive experience.',
    },
    results: {
      title: 'Results',
      subtitle: 'Restructuring the architecture and aligning technical content with user needs delivered measurable growth in discovery and on-site engagement.',
      metrics: [
        { value: '+20%', label: 'Organic SEO traffic' },
        { value: '+2 min', label: 'Avg. engagement time per visit' },
        { value: '40+', label: 'Pages restructured' },
      ],
    },
    challenge: {
      title: 'The challenge',
      subtitle: 'The service was complex. The website made it harder to understand.',
      p1: 'The existing website contained a large amount of technical information, but the structure made it difficult for visitors to quickly understand:',
      bullets: [
        'What does MGT-Commerce offer?',
        'Which hosting solution is right for me?',
        'Why should I trust this provider?',
      ],
      p2: 'The experience also had several usability and business challenges.',
      caption: 'The goal was not simply to redesign individual pages.',
      quote: '"We needed to rethink how the entire website helped users move from understanding → comparison → trust → inquiry."',
    },
    objectives: {
      title: 'Understanding the people and the business',
      intro: 'Before redesigning the interface, I looked at both sides of the problem: what the business needed to communicate and what users needed to understand.',
      businessTitle: 'Business objectives',
      businessPoints: [
        {
          title: '01 — Communicate value',
          desc: "Make MGT-Commerce's managed Magento hosting expertise easier to understand.",
        },
        {
          title: '02 — Improve discovery',
          desc: 'Help visitors find relevant services, plans, pricing, and technical information more easily.',
        },
        {
          title: '03 — Build trust',
          desc: 'Create a more professional and consistent experience that communicates technical expertise.',
        },
      ],
      userTitle: 'User needs',
      userPoints: [
        {
          title: '01 — Compare options',
          desc: 'Quickly understand different hosting plans and features.',
        },
        {
          title: '02 — Understand pricing',
          desc: 'Find pricing information without having to search through multiple pages.',
        },
        {
          title: '03 — Find information quickly',
          desc: 'Access technical and service information with less effort.',
        },
      ],
    },
    research: {
      title: 'Finding the gaps',
      subtitle: 'Research across the product, users, and market',
      intro: 'I combined several research methods to understand where the existing experience was falling short.',
      methods: [
        {
          title: 'Competitor analysis',
          desc: 'Studied how other hosting providers presented services, pricing, features, and trust signals.',
        },
        {
          title: 'Heuristic evaluation',
          desc: 'Reviewed the existing website for navigation, hierarchy, consistency, usability, and responsive issues.',
        },
        {
          title: 'Customer support insights',
          desc: 'Used recurring questions and feedback from the customer support team to understand where users needed more clarity.',
        },
      ],
      revealedTitle: 'What the research revealed',
      revealedSubtitle: 'Users needed less complexity, not more information.',
      revealedIntro: 'The research highlighted several recurring opportunities:',
      findings: [
        {
          title: 'Navigation was difficult to follow',
          desc: 'Important services and information were spread across a complex structure.',
        },
        {
          title: 'Pricing needed more clarity',
          desc: 'Users needed an easier way to compare plans and understand what each option offered.',
        },
        {
          title: 'Technical content was difficult to scan',
          desc: 'The website contained useful information, but hierarchy and presentation made it harder to digest.',
        },
        {
          title: 'Trust needed to be communicated earlier',
          desc: 'Testimonials, expertise, certifications, and service benefits could play a stronger role in helping users evaluate MGT-Commerce.',
        },
      ],
    },
    structure: {
      title: 'Turning research into structure',
      subtitle: 'I started with the information architecture, not the visual design.',
      p1: 'With more than 40 pages to organize, improving individual screens would not solve the underlying problem.',
      p2: 'I restructured the sitemap to create clearer relationships between:',
      ribbon: 'Services → Hosting Plans → Features → Pricing → Resources → Contact',
      sitemap: {
        homepage: 'Homepage',
        categories: {
          hosting: 'Magento Hosting',
          features: 'Features',
          tools: 'Tools',
          addons: "Add-On's",
          resources: 'Resources',
          aws: 'Managed AWS',
          additional: 'Additional',
          tech: 'Technologies',
          cms: 'CMS',
        },
      },
      journeyTitle: 'Designing a clearer path',
      journeyIntro: 'The new structure was designed around the questions visitors needed answered before contacting the company.',
      journeySteps: [
        { step: '01', title: 'Understand', question: 'What does MGT offer?' },
        { step: '02', title: 'Explore', question: 'Which plan fits my needs?' },
        { step: '03', title: 'Compare', question: 'What are the specs & price?' },
        { step: '04', title: 'Trust', question: 'Why choose MGT-Commerce?' },
        { step: '05', title: 'Contact', question: 'How do I get started?' },
      ],
    },
    interface: {
      title: 'From wireframes to visual design',
      subtitle: 'I tested the structure before investing in the final visual language.',
      p1: 'The homepage and key service pages went through multiple iterations to improve hierarchy, content grouping, and information discovery.',
      pricingTitle: 'Making hosting plans easier to compare',
      pricingSubtitle: 'Pricing should answer questions, not create more of them.',
      pricingIntro: 'One of the key opportunities was improving how hosting plans and features were presented. Instead of making visitors search through long pages of technical information, the redesigned layouts created clearer visual groups for:',
      pricingBullets: [
        'Plan type',
        'Pricing',
        'Key features',
        'Technical capabilities',
        'Next steps',
      ],
      pricingCaption: 'Before and After comparison',
      visualTitle: 'Building a consistent visual language',
      visualDesc: 'The redesign also established a more consistent visual system across the website. The goal was to make different pages feel like parts of the same product rather than independent pages.',
    },
    collaboration: {
      title: 'Working across design, development, and SEO',
      p1: "This project involved more than interface design. I worked with the development and SEO teams to make sure the new structure could work technically while supporting the site's content and search strategy.",
      roles: [
        { title: 'UX / UI Design', desc: 'Page layouts, visual hierarchy, responsive design' },
        { title: 'Information Architecture', desc: 'Sitemap and page relationships across 40+ pages' },
        { title: 'SEO collaboration', desc: 'Content structure and page organization' },
        { title: 'Development collaboration', desc: 'Design handoff, implementation discussions, and responsive behavior' },
        { title: 'QA', desc: 'Reviewing implemented pages and resolving visual and usability issues' },
      ],
    },
    reflections: {
      title: 'The impact & reflections',
      metrics: [
        { label: 'Organic SEO traffic', value: '+20%' },
        { label: 'Avg. engagement time per visit', value: '+2 min' },
        { label: 'Pages restructured', value: '40+' },
      ],
      summary: 'The results showed that improving the experience was not only about visual modernization. Better information architecture, content organization, responsive design, and SEO structure helped make the website easier to discover and navigate.',
      learningsTitle: 'What I learned',
      learnings: [
        {
          bold: '01 — Large websites need structure before styling:',
          desc: 'With 40+ pages, improving individual screens would only solve part of the problem. The information architecture had to be addressed first.',
        },
        {
          bold: '02 — Technical products need different levels of information:',
          desc: 'Users may need detailed technical information, but they should not have to understand everything before finding the information relevant to them.',
        },
        {
          bold: '03 — Good web design is cross-functional:',
          desc: 'The final experience depended on close collaboration between design, development, SEO, and QA.',
        },
        {
          bold: '04 — Consistency builds trust:',
          desc: 'For a technical service where users are making a significant business decision, a clear and consistent experience can make the company feel more reliable and easier to understand.',
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
      objectives: '目的とニーズ',
      research: 'リサーチと発見',
      structure: '情報設計と導線',
      interface: 'UI設計と価格比較',
      collaboration: '多職種連携プロセス',
      reflections: '成果と学び',
    },
    hero: {
      badge: 'Webサイトリニューアル',
      liveLink: 'mgt-commerce.com',
      title: 'MGT-Commerce — 複雑なホスティングプランと技術仕様を整理し、信頼性とCVを高めるWebリニューアル',
      description: 'MGT-Commerceは、ドイツ・ベルリンを拠点に世界5,000社以上のMagento導入EC事業者を支えるマネージドクラウドホスティング企業です。事業の多角化に伴い、迷いのないナビゲーション、料金プランの明瞭化、高度な技術情報の可視化を目的に、40ページを超えるWebサイト全体の全面リニューアルを遂行しました。',
      meta: {
        industryLabel: '業界',
        industryValue: 'クラウドホスティング / ECインフラ',
        roleLabel: '担当役割',
        roleValue: 'UI/UXデザイナー',
        timelineLabel: '制作期間',
        timelineValue: '6ヶ月',
        teamLabel: 'チーム体制',
        teamValue: '5名（エンジニア, SEO, ディレクター, QA）',
      },
    },
    introduction: {
      title: '高度で専門的なプロダクトを、誰にでも伝わる体験へ',
      p1: 'MGT-Commerceは、Magento基盤の大規模EC事業者に向けて最適化されたフルマネージドクラウドインフラを提供しています。本リニューアルでは、信頼性の高いブランドデザインの確立、ユーザー体験およびSEOの抜本的改善を通じ、サービス・料金・技術仕様を直感的に把握できる導線を設計しました。',
      p2: '40ページ以上に及ぶWebサイト全体の情報構造を根本から見直し、コンテンツ階層、ビジュアルデザイン、マルチデバイスでのレスポンシブ体験を刷新しました。',
    },
    results: {
      title: '成果・ビジネスインパクト',
      subtitle: '情報アーキテクチャの再構築とユーザーインサイトに根ざしたコンテンツ整理により、オーガニック流入とサイト内滞在時間の双方で顕著な改善を達成しました。',
      metrics: [
        { value: '+20%', label: 'オーガニック検索流入（SEO）' },
        { value: '+2分', label: '1訪問あたりの平均滞在時間' },
        { value: '40+', label: '全面再設計した総ページ数' },
      ],
    },
    challenge: {
      title: '課題と背景',
      subtitle: 'サービスは極めて優れている一方、従来のWebサイトはその価値を伝えきれていなかった',
      p1: '既存のWebサイトには豊富な技術情報が掲載されていたものの、情報の階層化が不十分であったため、来訪者が以下の本質的な疑問を即座に解決できない構造になっていました。',
      bullets: [
        'MGT-Commerceはどのような強みを持つホスティング会社なのか？',
        '自社のEC規模に最適なプランはどれか？',
        'なぜ他社ではなくMGT-Commerceを信頼すべきなのか？',
      ],
      p2: 'さらに、ナビゲーションの階層が深すぎて迷いやすく、商談への問い合わせ導線も十分に機能していませんでした。',
      caption: '目指したのは、単なる個別ページの表層的なリフレッシュではありません。',
      quote: '「Webサイト全体を通じて、来訪者が『理解 → プラン比較 → 信頼獲得 → 問い合わせ』へと迷いなく進めるジャーニーの再構築が求められました。」',
    },
    objectives: {
      title: 'ビジネス目標とユーザー課題の統合',
      intro: 'UIデザインに着手する前に、企業側が伝えるべき提供価値と、ユーザー側が求める情報の優先度を整理し、両者の接点を定義しました。',
      businessTitle: '事業側の目標（Business Objectives）',
      businessPoints: [
        {
          title: '01 — 技術的優位性の訴求',
          desc: 'Magentoに特化したインフラ設計の専門性と実績を直感的に伝達する。',
        },
        {
          title: '02 — 情報到達率の向上',
          desc: '求めているサービスプラン、料金体系、技術ドキュメントへ迷わずアクセスできるようにする。',
        },
        {
          title: '03 — エンタープライズの信頼獲得',
          desc: '大手EC事業者にも選ばれる洗練された世界観と堅牢なセキュリティ体制を提示する。',
        },
      ],
      userTitle: 'ユーザー側のニーズ（User Needs）',
      userPoints: [
        {
          title: '01 — プランの容易な比較',
          desc: '自社のPV規模やサーバー負荷に合うプランのスペック差をひと目で把握したい。',
        },
        {
          title: '02 — 料金体系の透明性',
          desc: '複数ページを探し回ることなく、明確な月額費用と追加オプションの価格を知りたい。',
        },
        {
          title: '03 — 技術仕様のスムーズな確認',
          desc: '開発者やインフラ担当者が求める技術スタックの仕様へ素早くアクセスしたい。',
        },
      ],
    },
    research: {
      title: 'ボトルネックの特定とリサーチ',
      subtitle: '市場・ユーザー・自社プロダクトの3方向からの分析',
      intro: '複数の調査手法を組み合わせ、既存サイトが抱えていた離脱要因を浮き彫りにしました。',
      methods: [
        {
          title: '競合ベンチマーク分析',
          desc: 'グローバルの主要クラウドホスティング企業におけるプラン提示方法、価格表、信頼性の演出手法を比較分析。',
        },
        {
          title: 'ヒューリスティック評価',
          desc: '導線設計、情報階層、UIの一貫性、アクセシビリティ、モバイル表示のレスポンシブ崩れを徹底的に検証。',
        },
        {
          title: 'CS・サポートログの分析',
          desc: '顧客サポートチームに頻繁に寄せられる質問や迷いやすいポイントを抽出し、事前開示すべき情報を特定。',
        },
      ],
      revealedTitle: 'リサーチから導き出された示唆',
      revealedSubtitle: 'ユーザーが求めていたのは、情報量の多さではなく「整理された明瞭さ」',
      revealedIntro: '調査の結果、以下の改善ポイントが明確になりました：',
      findings: [
        {
          title: 'ナビゲーション構造の複雑さ',
          desc: '主要サービスが分散し、目的のコンテンツに辿り着くまでに多くのクリックを要していた。',
        },
        {
          title: '料金プラン比較の不透明さ',
          desc: '各プランの差分や機能制限が一覧化されておらず、選定の心理的ハードルが高かった。',
        },
        {
          title: '技術コンテンツの可読性不足',
          desc: '重要な専門情報がテキスト中心で平坦に並び、流し読みで要点が掴めなかった。',
        },
        {
          title: '信頼シグナルの提示タイミングの遅さ',
          desc: '導入事例や認証、実績データが奥深いページに埋もれ、初期の信頼形成に寄与していなかった。',
        },
      ],
    },
    structure: {
      title: 'リサーチ結果を情報アーキテクチャへと具現化',
      subtitle: 'ビジュアル装飾の前に、まず情報構造（IA）の設計を徹底',
      p1: '40ページを超える大規模サイトにおいて、個別の画面を手直しするだけでは本質的な課題は解決できません。',
      p2: '来訪者の関心の流れに合わせてサイトマップを再定義し、コンテンツ同士の論理的な関係性を構築しました。',
      ribbon: 'サービス概要 → ホスティングプラン → 特徴・仕様 → 料金体系 → リソース → お問い合わせ',
      sitemap: {
        homepage: 'トップページ',
        categories: {
          hosting: 'Magentoホスティング',
          features: '機能・特徴',
          tools: '開発ツール',
          addons: 'アドオン機能',
          resources: 'ナレッジ・リソース',
          aws: 'AWSマネージド',
          additional: '追加サービス',
          tech: 'テクノロジースタック',
          cms: '企業・法的情報',
        },
      },
      journeyTitle: '検討フローに寄り添うユーザージャーニー',
      journeyIntro: '来訪者が問い合わせを決断するまでに抱く疑問を先回りして解消する導線を設計しました。',
      journeySteps: [
        { step: '01', title: '理解する', question: 'MGT-Commerceは何ができるのか？' },
        { step: '02', title: '探索する', question: '自社にマッチするプランはどれか？' },
        { step: '03', title: '比較する', question: '詳細スペックと月額費用はどうなっているか？' },
        { step: '04', title: '信頼する', question: 'なぜMGTを選ぶべきなのか？（実績・セキュリティ）' },
        { step: '05', title: '問い合わせ', question: 'どのような手順で導入・移行できるか？' },
      ],
    },
    interface: {
      title: 'ワイヤーフレームからUIデザインへの昇華',
      subtitle: 'ビジュアルを作り込む前に、レイアウトと情報階層の骨格を検証',
      p1: 'トップページおよび主要なサービス詳細ページについて幾度もワイヤーフレームのイテレーションを重ね、コンテンツのグルーピングと視線誘導を洗練させました。',
      pricingTitle: '比較しやすい料金・プランテーブルの設計',
      pricingSubtitle: '料金表は、疑問を生む場所ではなく疑問を解消する場所であるべき',
      pricingIntro: '最も大きな成果を上げたのは、ホスティングプラン一覧とスペック対照表の再設計です。長大なテキストを読み込ませるのではなく、視覚的なカード単位で整理しました：',
      pricingBullets: [
        'プランの種別と対象規模',
        '明確な価格体系',
        '主要機能とパフォーマンス指標',
        '技術的ケイパビリティ',
        '次のアクション（無料相談・申し込み）',
      ],
      pricingCaption: '料金ページのリニューアル前後比較',
      visualTitle: '一貫性のあるデザインシステムの確立',
      visualDesc: 'Webサイト全体の体験を統一するため、再利用可能なコンポーネント体系とタイポグラフィ、カラーパレットを定義。どのページを訪れても同一の信頼感と操作性を保てるようにしました。',
    },
    collaboration: {
      title: 'デザイン、開発、SEOの三位一体による共創',
      p1: '本プロジェクトは単なるUI制作にとどまらず、技術的な実装可能性と検索エンジン最適化（SEO）戦略を高い水準で両立させるため、エンジニアやSEO専門家と密接に協働しました。',
      roles: [
        { title: 'UI/UXデザイン', desc: 'ページレイアウト、視覚的階層構造、マルチデバイスでのレスポンシブ設計' },
        { title: '情報アーキテクチャ（IA）', desc: '40ページ以上に及ぶサイトマップ構造とURL・リンク導線の整理' },
        { title: 'SEOスペシャリストとの連携', desc: '検索流入を最大化する見出し構造（Hタグ）とコンテンツ配置の最適化' },
        { title: 'エンジニアとの実装連携', desc: 'Figmaトークンの引き渡し、レスポンシブ挙動の調整、実装レビュー' },
        { title: '品質管理（QA）', desc: '実装後の各画面におけるレイアウト崩れや操作性の検証と微調整' },
      ],
    },
    reflections: {
      title: '成果と振り返り',
      metrics: [
        { label: 'オーガニック検索流入（SEO）', value: '+20%' },
        { label: '1訪問あたりの平均滞在時間', value: '+2分' },
        { label: '全面再設計した総ページ数', value: '40+ ページ' },
      ],
      summary: '得られた成果は、表面的な見た目のモダン化だけでなく、情報構造、コンテンツの優先度、レスポンシブ設計、SEO基盤を包括的に設計し直したことの結晶でした。',
      learningsTitle: 'プロジェクトからの学び',
      learnings: [
        {
          bold: '01 — 大規模サイトはスタイリングの前に構造設計:',
          desc: '40ページを超えるサイトでは、個々の画面を綺麗にするだけでは不十分です。まず情報アーキテクチャ（IA）の骨組みを整えることが成否を分けます。',
        },
        {
          bold: '02 — 技術情報には多段階の情報開示（Progressive Disclosure）が必要:',
          desc: '専門的な仕様は不可欠ですが、すべてを一度に押し付けず、ユーザーの検討深度に合わせて段階的に詳細を見せる工夫が有効でした。',
        },
        {
          bold: '03 — 優れたWebデザインは職種横断の共創から生まれる:',
          desc: 'デザイン、エンジニアリング、SEO、QAが初期段階から同じ目線で議論を重ねたことで、妥協のないクオリティに到達できました。',
        },
        {
          bold: '04 — デザインの一貫性が企業の信頼を形作る:',
          desc: '高額なインフラ選定を行うエンタープライズ顧客にとって、Webサイト全体の統一感と洗練された使い心地こそが、信頼を寄せる最大の要因となります。',
        },
      ],
    },
    footer: {
      moreProjects: 'その他のプロジェクト',
      viewAll: 'すべて見る',
    },
  },
};

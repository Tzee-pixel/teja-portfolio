export interface AboutContent {
  headingPrefix: string;
  headingHighlight: string;
  lead: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
}

export const aboutContent: Record<'en' | 'ja', AboutContent> = {
  en: {
    headingPrefix: 'About',
    headingHighlight: 'me',
    lead: "Hi there 👋 I’m Tejashree, a UI/UX and Product Designer with 5+ years of experience creating intuitive digital experiences across B2B SaaS, e-commerce, and enterprise products.",
    p2: "My journey in design started with a curiosity about how people interact with digital products and how thoughtful design can make complex things feel simple. Since then, I’ve worked across the entire design process, from understanding user needs and structuring information to creating interfaces, design systems, prototypes, and working closely with developers to bring ideas to life.",
    p3: "For the past several years, I’ve worked at MGT-Commerce, where I’ve designed websites, SaaS products, marketing experiences, and digital systems. I’ve also helped build and mentor a design team of 8 designers, establishing design guidelines, review processes, and quality standards. One of the projects I’m particularly proud of was redesigning CloudPanel, a complex cloud-hosting product, where the goal was to make the product easier to understand, explore, and install.",
    p4: "Today, I’m based in Japan and looking to bring my experience into a Japanese product team. I’m especially interested in products where design, technology, and business come together. I also enjoy exploring how AI can improve the way designers research, prototype, build, and collaborate with developers.",
    p5: "Outside of design, I’m studying Japanese and have passed JLPT N2 while continuing to work toward N1. I enjoy cooking, journaling, making things, and staying active through kickboxing. I’m also a big fan of manga, anime, movies, music, and video games.",
    p6: "Design is more than just my profession. I’m constantly curious about how things work, why people behave the way they do, and how small details can create a better experience. I’m always learning, experimenting, and looking for new ways to make digital products simpler, more useful, and more enjoyable.",
  },
  ja: {
    headingPrefix: '私に',
    headingHighlight: 'ついて',
    lead: "こんにちは 👋 テジャシュリー（Tejashree）です。B2B SaaS、EC、エンタープライズ領域において、直感的で使いやすいデジタルプロダクトの体験設計に5年以上携わっているUI/UX・プロダクトデザイナーです。",
    p2: "私のデザインへの旅は、「人はどのようにデジタル製品と向き合うのか」「思慮深いデザインによって、複雑な仕組みをどこまでシンプルにできるか」という純粋な探究心から始まりました。それ以来、ユーザー理解や情報構造の整理から、UI設計、デザインシステムの構築、プロトタイピング、そしてエンジニアと密に連携した実装に至るまで、デザインプロセスの全領域を一貫して担ってきました。",
    p3: "これまでの数年間はMGT-Commerceに在籍し、Webサイト、SaaSプロダクト、マーケティング体験、各種デジタルシステムの設計をリードしてきました。また、8名規模のデザインチームの立ち上げとメンター業務にも携わり、デザインガイドラインやレビュー体制、品質基準の確立を推進しました。特に思い入れのあるプロジェクトのひとつが、クラウドホスティング製品『CloudPanel』のリニューアルです。専門的で複雑な製品を、誰にとっても理解しやすく、探索しやすく、導入しやすいものへと生まれ変わらせることに注力しました。",
    p4: "現在は日本（東京）を拠点とし、日本のプロダクトチームでこれまでの知見と情熱を発揮できる機会を探しています。特に、デザイン・テクノロジー・ビジネスが高度に交差するプロダクトに強い関心を寄せています。また、AIを活用してリサーチやプロトタイピング、開発者との協働フローをより豊かにアップデートしていく実験にも精力的に取り組んでいます。",
    p5: "デザイン以外の時間では、日本語の学習に励んでおり、日本語能力試験（JLPT）N2に合格、現在はN1取得に向けて勉強を続けています。料理やジャーナリング（日記）、ものづくり、キックボクシングで身体を動かすことが好きです。また、漫画やアニメ、映画、音楽、ゲームも大好きなカルチャーファンでもあります。",
    p6: "デザインは私にとって、単なる職業以上のものです。物事の仕組みや人の行動原理への好奇心、そして細部へのこだわりがどのように優れた体験を紡ぎ出すかという探求が、私の日々の原動力です。常に学び、試し、デジタルプロダクトをよりシンプルで、価値があり、心地よいものへと昇華させる方法を探究し続けています。",
  },
};

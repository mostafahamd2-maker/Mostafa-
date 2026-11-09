export type Lang = 'ar' | 'en';

export interface ServiceCard {
  icon: string;
  badge: string;
  title: string;
  desc: string;
  bullets: string[];
}

export interface SiwertellFeature {
  title: string;
  desc: string;
}

export interface IndustryItem {
  title: string;
  desc: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FieldLabel {
  label: string;
  placeholder: string;
}

export interface TitledItem {
  icon: string;
  title: string;
  desc: string;
}

export interface Translation {
  dir: 'rtl' | 'ltr';
  topStrip: {
    agency: string;
    scope: string;
  };
  nav: {
    about: string;
    siwertell: string;
    services: string;
    sectors: string;
    workflow: string;
    rfq: string;
    langToggle: string;
  };
  navItems: NavItem[];
  brandTagline: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaRfq: string;
    ctaServices: string;
  };
  metrics: { value: string; label: string }[];
  about: {
    title: string;
    p1: string;
    p2: string;
  };
  mission: {
    badge: string;
    title: string;
    quote: string;
    quoteBy: string;
    vision: { title: string; text: string };
    mission: { title: string; text: string };
    values: { title: string; items: string[] };
  };
  siwertell: {
    tag: string;
    title: string;
    desc: string;
    cta: string;
    features: SiwertellFeature[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    cards: ServiceCard[];
    lifting: {
      title: string;
      desc: string;
    };
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    items: TitledItem[];
  };
  why: {
    badge: string;
    title: string;
    subtitle: string;
    items: TitledItem[];
  };
  workflow: {
    badge: string;
    title: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  sectors: {
    badge: string;
    title: string;
    subtitle: string;
    items: IndustryItem[];
  };
  rfq: {
    title: string;
    text: string;
    btnWhatsapp: string;
    btnEmail: string;
    formHeader: string;
    lblName: FieldLabel;
    lblCompany: FieldLabel;
    lblEmail: FieldLabel;
    lblPhone: FieldLabel;
    lblType: { label: string };
    typeOptions: string[];
    lblScope: FieldLabel;
    btnSubmit: string;
    sending: string;
    success: string;
    successAgain: string;
    error: string;
    submitFailed: string;
    consent: string;
  };
  footer: {
    copyright: string;
    hseNote: string;
    quickLinks: string;
    contactTitle: string;
    location: string;
    legalName: string;
    legalPlaceholder: string;
    disclaimer: string;
  };
}

export const translations: Record<Lang, Translation> = {
  ar: {
    dir: 'rtl',
    topStrip: {
      agency: 'وكالة وتوزيع Siwertell: جمهورية مصر العربية فقط',
      scope: 'نقطة الانطلاق: مصر | نطاق المشاريع والخدمات: الشرق الأوسط وأفريقيا',
    },
    nav: {
      about: 'عن الشركة',
      siwertell: 'وكالة Siwertell',
      services: 'الخدمات الفنية',
      sectors: 'القطاعات',
      workflow: 'دورة العمل',
      rfq: 'طلب تسعير (RFQ)',
      langToggle: 'English',
    },
    navItems: [
      { label: 'عن الشركة', href: '#about' },
      { label: 'وكالة Siwertell', href: '#siwertell' },
      { label: 'الخدمات الفنية', href: '#services' },
      { label: 'القطاعات', href: '#sectors' },
      { label: 'دورة العمل', href: '#workflow' },
      { label: 'طلب تسعير (RFQ)', href: '#rfq' },
    ],
    brandTagline: 'BULK HANDLING & INDUSTRIAL MAINTENANCE',
    hero: {
      badge: 'صيانة متقدمة • سلاسل توريد • موثوقية المعدات الصناعية والموانئ',
      title: 'هندسة متكاملة لمناولة المواد الصبّية ورفع كفاءة معدات الموانئ والمصانع',
      subtitle:
        'نقدم حلول صيانة كهروميكانيكية متخصصة، توريد قطع الغيار الصناعية الحيوية، ودعم تشغيل المحطات لتقليل فترات التوقف ورفع جاهزية الأصول في مصر مع التوسع الإقليمي.',
      ctaRfq: 'طلب عرض سعر وتفتيش (RFQ)',
      ctaServices: 'استعراض حزمة الخدمات',
    },
    metrics: [
      { value: 'تفريغ سفن مستمر', label: 'حلول Siwertell المغلقة والصديقة للبيئة في مصر' },
      { value: 'تحكم وأتمتة شاملة', label: 'برمجة وصيانة أنظمة PLC وVFD وSCADA' },
      { value: 'توريد قطع غيار', label: 'محركات، مخفضات سرعة، ورولمانات بلي معتمدة' },
      { value: 'كوادر تشغيل وصيانة', label: 'فرق فنية متخصصة ومراقبة حالة المعدات' },
    ],
    about: {
      title: 'نبذة عن Portix',
      p1: 'انطلقت Portix من جمهورية مصر العربية بهدف تقديم نموذج هندسي يعتمد على تخصص دقيق في صيانة وتشغيل منظومات مناولة المواد الصبّية (Bulk Material Handling) والمعدات الثقيلة في الموانئ والمصانع الكبرى. نجمع بين الفهم العميق للأنظمة الكهروميكانيكية المعقدة وتأمين قطع الغيار المتوافقة مع معايير المصنعين الأصليين (OEM).',
      p2: 'نركز على استدامة جاهزية الأصول ومواجهة تحديات التآكل والتشغيل الشاق في الأرصفة البحرية ومحطات الحبوب ومصانع الأسمنت، مع التزام صارم بمعايير السلامة المهنية وحماية البيئة.',
    },
    mission: {
      badge: 'القيادة والقيم',
      title: 'رسالة من الإدارة',
      quote:
        'في Portix نؤمن بأن سلاسل التوريد الموثوقة والدعم الفني المعتمد هما أساس النجاح الصناعي. التزامنا تقديم منتجات عالية الجودة وخدمة سريعة وقيمة طويلة الأمد لكل عميل نخدمه.',
      quoteBy: 'الإدارة — Portix',
      vision: {
        title: 'الرؤية',
        text: 'أن نصبح الشريك الإقليمي الرائد في توريد الحلول الصناعية وخدمات الدعم الفني.',
      },
      mission: {
        title: 'الرسالة',
        text: 'تقديم منتجات وحلول موثوقة تدعم تشغيلاً آمناً وفعالاً ومستداماً.',
      },
      values: {
        title: 'قيمنا',
        items: ['الموثوقية', 'النزاهة', 'الجودة', 'السلامة', 'الشراكة', 'التحسين المستمر'],
      },
    },
    siwertell: {
      tag: 'وكالة وتوزيع معتمد — جمهورية مصر العربية فقط',
      title: 'منظومات وتكنولوجيا تفريغ السفن Siwertell',
      desc: 'تمثيل شركة Siwertell السويدية الرائدة في تصنيع مفرغات السفن الحلزونية المستمرة. نقدم الدعم الفني الكامل داخل مصر لتفريغ الحبوب، الأسمنت، والمواد الصبّية بأعلى طاقة إنتاجية مع الحفاظ التام على البضائع من التكسير وانعدام انبعاث الغبار والفاقد.',
      cta: 'طلب استشارة فنية لمفرغات السفن',
      features: [
        {
          title: 'التغذية الحلزونية الملتقطة',
          desc: 'تقنية حركة عكسية تغذي البريمة الرأسية من أسفل سطح الشحنة لتقليل الغبار والوصول لأركان العنبر.',
        },
        {
          title: 'نظام نقل محكم ومغلق تماماً',
          desc: 'تفريغ نظيف وصديق للبيئة يمنع انسكاب المواد ويحمي الموانئ من التلوث الجوي والبحري.',
        },
        {
          title: 'قطع الغيار والدعم الهندسي بمصر',
          desc: 'تأمين مستلزمات الصيانة والقطع الأصلية وإشراف هندسي ميداني داخل الموانئ المصرية.',
        },
      ],
    },
    services: {
      badge: 'الخدمات الأساسية',
      title: 'حلول شاملة لدعم الرافعات في كل مراحل عملها',
      subtitle: 'من الأعطال الطارئة إلى الصيانة المخططة، نوفر لك الفريق والقطع والخبرة اللازمة',
      cards: [
        {
          icon: 'Wrench',
          badge: 'الخدمة الميدانية (Field Service)',
          title: 'مهندسون ميدانيون حول العالم',
          desc: 'نرسل مهندسينا المؤهلين من شبكتنا العالمية مباشرة إلى موقع رافعتك، للأعطال الطارئة والإصلاحات والفحوصات.',
          bullets: ['استجابة سريعة للأعطال الطارئة', 'فحوصات وتقييمات فنية', 'دعم فني وتدريب'],
        },
        {
          icon: 'Cog',
          badge: 'ورش الإصلاح (Workshop Repairs)',
          title: 'إصلاح المكونات في ورشنا',
          desc: 'نصلح الرافعات ومكوناتها في ورشنا المنتشرة حول العالم لتعود كما كانت جديدة.',
          bullets: ['إصلاح المكونات والوحدات', 'اختبار وتشغيل بعد الإصلاح', 'تقارير فنية مفصلة'],
        },
        {
          icon: 'PackageSearch',
          badge: 'توريد قطع الغيار (Parts Supply)',
          title: 'توريد قطع الغيار من كل مكان',
          desc: 'نوفر قطع الغيار من مصادرها العالمية، ونسلمها في الوقت المناسب وبالسعر المناسب.',
          bullets: ['قطع غيار لمعظم الماركات', 'إصلاح قطع الغيار وإعادة تأهيلها', 'توريد سريع حول العالم'],
        },
        {
          icon: 'Cpu',
          badge: 'تحديث الأنظمة (System Upgrades)',
          title: 'تحديث الأنظمة والمعدات',
          desc: 'حافظ على معداتك محدثة بأحدث الأنظمة والمتطلبات، لإطالة عمرها التشغيلي.',
          bullets: ['تحديث أنظمة التحكم', 'ترقية وفق المتطلبات الحالية', 'تحديث بعد التعديلات'],
        },
        {
          icon: 'ClipboardCheck',
          badge: 'الهندسة (Engineering)',
          title: 'هندسة التصميم وإدارة المشاريع',
          desc: 'كوادر هندسية متخصصة في تصميم الحلول وإدارة المشاريع.',
          bullets: ['تصميم وتطوير الحلول', 'إدارة المشاريع الهندسية', 'دراسات الجدوى الفنية'],
        },
        {
          icon: 'Users',
          badge: 'عقود إدارة الرافعات (Managed Contracts)',
          title: 'إدارة شاملة لعمليات الرافعات',
          desc: 'إدارة متكاملة لعمليات الرافعات وخدمات الصيانة بعقد واحد.',
          bullets: ['جدولة الصيانة الدورية', 'إدارة الأداء والتقارير', 'فريق مخصص لمشروعك'],
        },
      ],
      lifting: {
        title: 'تنبيه هام ومحدد بخصوص نطاق أعمال الرفع (Lifting Scope)',
        desc: 'تنفيذ عمليات الرفع غير متاح حاليًا: نود التأكيد لعملائنا وشركائنا أن خدمات Portix الحالية في مجال معدات الرفع تقتصر حصراً على أعمال الصيانة الميكانيكية والكهربائية، وتوريد قطع الغيار ومستلزمات الصيانة فقط. أما تنفيذ أو إدارة عمليات الرفع الميدانية والرافعات فهو مدرج ضمن خطط التوسع المستقبلية للشركة، ولا يُعرض كخدمة متاحة للتعاقد في المرحلة الحالية.',
      },
    },
    products: {
      badge: 'المنتجات والتوريد',
      title: 'فئات المنتجات والتوريد',
      subtitle: 'قطع أصلية من مصنّعين موثوقين، مختارة لتناسب بيئة تشغيلكم',
      items: [
        { icon: 'Cog', title: 'قطع غيار ميكانيكية', desc: 'محامل وأعمدة ووصلات وقطع تآكل لمعدات المصانع.' },
        { icon: 'Zap', title: 'مكونات كهربائية', desc: 'كونتاكتورات وقواطع وكابلات ومكونات تحكم.' },
        { icon: 'Fan', title: 'المحركات والمحولات', desc: 'محركات كهربائية ومخفضات سرعة ومحولات تردد متغير.' },
        { icon: 'CircleDot', title: 'المحامل ونقل الحركة', desc: 'محامل وسيور وسلاسل وعناصر نقل القدرة.' },
        { icon: 'Cpu', title: 'الأتمتة والقياس', desc: 'وحدات PLC وحساسات وأجهزة قياس وتحكم.' },
        { icon: 'Droplets', title: 'المضخات والصمامات', desc: 'مضخات طرد مركزي وصمامات ومعدات نقل السوائل.' },
        { icon: 'Wrench', title: 'العدد الصناعية', desc: 'أدوات دقيقة وثقيلة لفرق الصيانة.' },
        { icon: 'ShieldCheck', title: 'معدات السلامة المهنية', desc: 'معدات حماية تحافظ على سلامة فريقكم في الموقع.' },
        { icon: 'PackageSearch', title: 'مستهلكات صناعية', desc: 'زيوت وفلاتر وجوانات ومستلزمات صيانة.' },
      ],
    },
    why: {
      badge: 'لماذا Portix',
      title: 'لماذا تختار Portix',
      subtitle: 'كل ما تحتاجه لاستمرار التشغيل، من التوريد حتى التسليم',
      items: [
        { icon: 'Handshake', title: 'شبكة توريد موثوقة', desc: 'وصول إلى شبكة موردين مؤهلين يمكن الاعتماد عليهم.' },
        { icon: 'Clock', title: 'استجابة سريعة', desc: 'سرعة في الرد على عروض الأسعار والتوريد والأعطال الطارئة.' },
        { icon: 'BadgeCheck', title: 'منتجات مضمونة الجودة', desc: 'منتجات تُفحص وفق معايير الجودة قبل التسليم.' },
        { icon: 'Settings2', title: 'خبرة فنية', desc: 'مهندسون يفهمون المعدة والعملية الصناعية معاً.' },
        { icon: 'Tag', title: 'أسعار تنافسية', desc: 'توريد مُحسّن يحقق القيمة دون التنازل عن الجودة.' },
        { icon: 'Layers', title: 'حلول مرنة', desc: 'باقات مصممة حسب حجم مشروعك وميزانيتك.' },
        { icon: 'ClipboardCheck', title: 'دعم متكامل', desc: 'من طلب التسعير ومتابعة التسليم حتى خدمة ما بعد البيع.' },
        { icon: 'Award', title: 'شراكة طويلة الأمد', desc: 'نسعى لأن نكون شريك التوريد المفضل لسنوات طويلة.' },
      ],
    },
    workflow: {
      badge: 'الدورة المستندية والتشغيل',
      title: 'من الاستفسار حتى التسليم',
      subtitle: 'خطوات واضحة وشفافة تضمن الالتزام بالجودة والسلامة في كل مرحلة',
      steps: [
        { title: 'الاستفسار', desc: 'استلام تفاصيل المعدة والمتطلبات الفنية من العميل.' },
        { title: 'المعاينة', desc: 'فحص ميداني وتحديد نطاق العمل وقطع الغيار المطلوبة.' },
        { title: 'عرض السعر', desc: 'تقديم عرض واضح يشمل التكلفة والجدول الزمني وخطة السلامة.' },
        { title: 'التنفيذ', desc: 'إرسال الفريق الفني وتوفير القطع وتنفيذ الصيانة أو الإصلاح.' },
        { title: 'التقرير والتسليم', desc: 'تسليم تقرير خدمة مفصل وشهادة إنجاز.' },
      ],
    },
    sectors: {
      badge: 'قطاعات الأعمال',
      title: 'القطاعات التي نخدمها',
      subtitle: 'خبرة عملية في البيئات البحرية والصناعية الشاقة',
      items: [
        {
          title: 'الملاحة البحرية والمواني',
          desc: 'رافعات السفن التجارية والمواني، ورافعات الأرصفة والمحطات البحرية.',
        },
        {
          title: 'البحر المفتوح والأحواض',
          desc: 'رافعات المنصات البحرية، ورافعات الأحواض وأعمال بناء وإصلاح السفن.',
        },
        {
          title: 'البناء والصناعة',
          desc: 'الرافعات المتنقلة والصناعية وخدمات الصيانة للمشاريع الإنشائية والمصانع.',
        },
        {
          title: 'النفط والغاز',
          desc: 'مضخات وصمامات وأجهزة قياس وقطع غيار لمنشآت النفط والغاز.',
        },
        {
          title: 'الأسمنت والمطاحن',
          desc: 'محركات ومحامل وقطع تآكل لمصانع الأسمنت ومطاحن الحبوب.',
        },
        {
          title: 'التصنيع والمرافق',
          desc: 'مكونات كهربائية ومحركات ومستلزمات صيانة للمصانع والبنية التحتية.',
        },
      ],
    },
    rfq: {
      title: 'ابدأ التواصل لطلب عرض سعر (RFQ)',
      text: 'فريقنا الهندسي مستعد لمراجعة المواصفات الفنية، جدولة زيارات الفحص الميداني، وتقديم حلول الصيانة وقطع الغيار المناسبة لمنشأتكم.',
      btnWhatsapp: 'محادثة واتساب سريعة',
      btnEmail: 'مراسلة بالبريد الرسمي',
      formHeader: 'طلب دراسة فنية / تسعير',
      lblName: { label: 'الاسم الكامل', placeholder: 'اسمك' },
      lblCompany: { label: 'اسم المنشأة / الشركة', placeholder: 'مثال: محطة صب جاف / مطحن' },
      lblEmail: { label: 'البريد الإلكتروني', placeholder: 'name@company.com' },
      lblPhone: { label: 'رقم الهاتف', placeholder: '+20 ...' },
      lblType: { label: 'نوع الخدمة المطلوبة' },
      typeOptions: [
        'صيانة وعمرة منظومات مناولة صبّية',
        'حلول ومفرغات سفن Siwertell (مصر فقط)',
        'توريد قطع غيار ومكونات ميكانيكية/كهربائية',
        'صيانة معدات رفع (صيانة وقطع غيار فقط)',
        'كوادر تشغيل وصيانة (O&M)',
      ],
      lblScope: { label: 'وصف موجز للمعدة أو العطل', placeholder: 'مواصفات المعدة أو التحدي الفني...' },
      btnSubmit: 'إرسال طلب التسعير الهندسي',
      sending: 'جارٍ الإرسال...',
      success: 'تم استلام طلبك، سيقوم فريق الهندسة بمراجعته.',
      successAgain: 'إرسال طلب آخر',
      error: 'يرجى تعبئة جميع الحقول المطلوبة بشكل صحيح.',
      submitFailed: 'تعذّر إرسال طلبك في الوقت الحالي، يرجى المحاولة مرة أخرى.',
      consent: 'أوافق على التواصل بشأن هذا الطلب',
    },
    footer: {
      copyright: '© 2026 Portix. جميع الحقوق محفوظة — مقر الانطلاق: جمهورية مصر العربية | وكالة Siwertell داخل مصر فقط.',
      hseNote: 'معايير هندسية متقدمة • التزام تام بالسلامة والصحة المهنية (HSE)',
      quickLinks: 'روابط سريعة',
      contactTitle: 'تواصل معنا',
      location: 'الإسكندرية، مصر',
      legalName: 'الاسم القانوني',
      legalPlaceholder: 'يُستكمل لاحقاً',
      disclaimer: 'الاسم مؤقت إلى حين حسم الاسم التجاري والقانوني.',
    },
  },
  en: {
    dir: 'ltr',
    topStrip: {
      agency: 'Siwertell Representative & Distributor: Egypt Only',
      scope: 'Origin: Egypt | Project & Service Scope: Middle East & Africa',
    },
    nav: {
      about: 'About',
      siwertell: 'Siwertell Agency',
      services: 'Services',
      sectors: 'Sectors',
      workflow: 'Workflow',
      rfq: 'Request RFQ',
      langToggle: 'العربية',
    },
    navItems: [
      { label: 'About', href: '#about' },
      { label: 'Siwertell Agency', href: '#siwertell' },
      { label: 'Services', href: '#services' },
      { label: 'Sectors', href: '#sectors' },
      { label: 'Workflow', href: '#workflow' },
      { label: 'Request RFQ', href: '#rfq' },
    ],
    brandTagline: 'BULK HANDLING & INDUSTRIAL MAINTENANCE',
    hero: {
      badge: 'Advanced Maintenance • Supply Chain • Port & Plant Reliability',
      title: 'Integrated Engineering for Bulk Material Handling & Port Machinery',
      subtitle:
        'Specialized electromechanical maintenance, mission-critical spare parts procurement, and operational support to eliminate downtime and maximize asset readiness across Egypt and the MEA region.',
      ctaRfq: 'Request RFQ & Inspection',
      ctaServices: 'Explore Services Scope',
    },
    metrics: [
      { value: 'Continuous Unloading', label: 'Clean enclosed Siwertell technology in Egypt' },
      { value: 'Full Automation', label: 'PLC, VFD drives & SCADA engineering' },
      { value: 'Certified Spares', label: 'OEM motors, gearboxes & precision bearings' },
      { value: 'O&M Manpower', label: 'Specialized field engineers & condition monitoring' },
    ],
    about: {
      title: 'About Portix',
      p1: 'Founded in Egypt, Portix delivers dedicated engineering support tailored to bulk material handling systems and heavy industrial machinery in marine terminals and manufacturing plants. We combine rigorous electromechanical troubleshooting with OEM-compliant spare parts management.',
      p2: 'Our mission is to sustain terminal asset uptime amidst harsh, continuous operations, with uncompromising safety (HSE) and environmental responsibility.',
    },
    mission: {
      badge: 'Leadership & Values',
      title: 'A Message From Management',
      quote:
        'At PORTIX, we believe that reliable supply chains and trusted technical support are essential to industrial success. Our commitment is to provide quality products, responsive service, and long-term value to every client we serve.',
      quoteBy: 'Management, Portix',
      vision: {
        title: 'Vision',
        text: 'To become a leading regional partner in industrial supply and technical services.',
      },
      mission: {
        title: 'Mission',
        text: 'Deliver dependable products and solutions that support safe, efficient, and sustainable operations.',
      },
      values: {
        title: 'Our Values',
        items: ['Reliability', 'Integrity', 'Quality', 'Safety', 'Partnership', 'Continuous Improvement'],
      },
    },
    siwertell: {
      tag: 'Authorized Commercial Representation — Egypt Only',
      title: 'Siwertell Continuous Ship Unloader Technology',
      desc: 'Representing Sweden\u2019s world-renowned Bruks Siwertell screw-type ship unloaders. We deliver comprehensive local technical support in Egypt for high-capacity grain, cement, and dry bulk discharging with zero spillage and complete dust containment.',
      cta: 'Request Ship Unloader Consultation',
      features: [
        {
          title: 'Counter-Rotating Inlet Feeder',
          desc: 'Draws bulk cargo from below the surface, reaching every corner of the hold with maximum through-ship capacity.',
        },
        {
          title: 'Totally Enclosed Conveying',
          desc: 'Protects delicate cargo, prevents fugitive dust emissions, and safeguards the marine terminal environment.',
        },
        {
          title: 'Genuine Spares & Local Engineering',
          desc: 'Field installation supervision, scheduled maintenance, and OEM parts supply within Egypt.',
        },
      ],
    },
    services: {
      badge: 'Core Services',
      title: 'Crane Support Across the Full Lifecycle',
      subtitle: 'From emergency breakdowns to planned maintenance, we provide the people, parts and expertise you need',
      cards: [
        {
          icon: 'Wrench',
          badge: 'Field Service',
          title: 'Engineers Deployed Worldwide',
          desc: 'We send competent engineers from our global network directly to your equipment for breakdowns, repairs and inspections.',
          bullets: ['Rapid response to emergency breakdowns', 'Inspections and technical assessments', 'Technical support and training'],
        },
        {
          icon: 'Cog',
          badge: 'Workshop Repairs',
          title: 'Components Fixed In Our Workshops',
          desc: 'We repair equipment and components in our workshops, making them as good as new.',
          bullets: ['Component and unit overhaul', 'Testing and commissioning after repair', 'Detailed technical reports'],
        },
        {
          icon: 'PackageSearch',
          badge: 'Parts Supply',
          title: 'Spare Parts From Around the Globe',
          desc: 'We source spare parts globally, delivering them on time and at the right price.',
          bullets: ['Parts for most major brands', 'Spare part repair and refurbishment', 'Fast worldwide delivery'],
        },
        {
          icon: 'Cpu',
          badge: 'System Upgrades',
          title: 'Keep Equipment Up to Date',
          desc: 'Keep your equipment current with the latest systems and requirements, extending its working life.',
          bullets: ['Control system upgrades', 'Upgrades to current requirements', 'Post-modification updates'],
        },
        {
          icon: 'ClipboardCheck',
          badge: 'Engineering',
          title: 'Design Engineering & Project Management',
          desc: 'Highly skilled engineers providing design engineering and project management services.',
          bullets: ['Solution design and development', 'Engineering project management', 'Technical feasibility studies'],
        },
        {
          icon: 'Users',
          badge: 'Managed Contracts',
          title: 'Full Management of Equipment Operations',
          desc: 'Comprehensive management of equipment operations and maintenance under one contract.',
          bullets: ['Planned maintenance scheduling', 'Performance management and reporting', 'A dedicated team for your project'],
        },
      ],
      lifting: {
        title: 'Important Scope Clarification Regarding Lifting Operations',
        desc: 'Execution of lifting operations is NOT currently available: Portix explicitly notes that current lifting-related services are strictly confined to mechanical/electrical maintenance, inspection, and spare parts supply. Field execution and crane lifting management are planned strictly as future expansion and are not open for contracting at this stage.',
      },
    },
    products: {
      badge: 'Products & Supply',
      title: 'Products & Supply Categories',
      subtitle: 'Genuine components from reputable manufacturers, sourced for your operating environment',
      items: [
        { icon: 'Cog', title: 'Mechanical Spare Parts', desc: 'Bearings, shafts, couplings and wear parts for plant machinery.' },
        { icon: 'Zap', title: 'Electrical Components', desc: 'Contactors, breakers, cables and control components.' },
        { icon: 'Fan', title: 'Motors & Drives', desc: 'Electric motors, gearboxes and variable frequency drives.' },
        { icon: 'CircleDot', title: 'Bearings & Power Transmission', desc: 'Bearings, belts, chains and power transmission elements.' },
        { icon: 'Cpu', title: 'Automation & Instrumentation', desc: 'PLCs, sensors, instruments and control hardware.' },
        { icon: 'Droplets', title: 'Pumps & Valves', desc: 'Centrifugal pumps, valves and fluid handling equipment.' },
        { icon: 'Wrench', title: 'Industrial Tools', desc: 'Precision and heavy-duty tools for maintenance crews.' },
        { icon: 'ShieldCheck', title: 'PPE & Safety Equipment', desc: 'Protective gear that keeps your team safe on site.' },
        { icon: 'PackageSearch', title: 'Industrial Consumables', desc: 'Lubricants, filters, gaskets and maintenance consumables.' },
      ],
    },
    why: {
      badge: 'Why Portix',
      title: 'Why Choose Portix',
      subtitle: 'Everything you need to keep operations running, from sourcing to delivery',
      items: [
        { icon: 'Handshake', title: 'Reliable Supply Network', desc: 'Access to a dependable network of qualified suppliers.' },
        { icon: 'Clock', title: 'Fast Response Time', desc: 'Quick turnaround on quotes, sourcing and urgent breakdowns.' },
        { icon: 'BadgeCheck', title: 'Quality-Assured Products', desc: 'Products checked against quality standards before delivery.' },
        { icon: 'Settings2', title: 'Technical Expertise', desc: 'Engineers who understand both the equipment and the process.' },
        { icon: 'Tag', title: 'Competitive Pricing', desc: 'Sourcing optimized to deliver value without compromising quality.' },
        { icon: 'Layers', title: 'Flexible Solutions', desc: 'Tailored packages sized to your project and budget.' },
        { icon: 'ClipboardCheck', title: 'End-to-End Support', desc: 'From RFQ and delivery follow-up to after-sales service.' },
        { icon: 'Award', title: 'Long-Term Partnership', desc: 'We aim to become your preferred supply partner for years.' },
      ],
    },
    workflow: {
      badge: 'Documented Workflow',
      title: 'From enquiry to handover',
      subtitle: 'Clear, transparent steps that keep quality and safety in focus at every stage',
      steps: [
        { title: 'Enquiry', desc: 'We capture equipment details and your technical requirements.' },
        { title: 'Inspection', desc: 'On-site assessment to define the scope and the parts required.' },
        { title: 'Quotation', desc: 'A clear proposal covering cost, timeline and safety plan.' },
        { title: 'Execution', desc: 'Our field team deploys, parts are fitted and the work is completed.' },
        { title: 'Report & Handover', desc: 'A detailed service report and formal completion sign-off.' },
      ],
    },
    sectors: {
      badge: 'Target Sectors',
      title: 'Industries We Serve',
      subtitle: 'Hands-on experience in demanding marine and industrial environments',
      items: [
        {
          title: 'Merchant Shipping & Ports',
          desc: 'Cranes on merchant vessels, port cranes and quayside and terminal equipment.',
        },
        {
          title: 'Offshore & Shipyards',
          desc: 'Offshore platform cranes, shipyard cranes and vessel build and repair operations.',
        },
        {
          title: 'Construction & Industrial',
          desc: 'Mobile and industrial cranes, plus maintenance for construction projects and plants.',
        },
        {
          title: 'Oil & Gas',
          desc: 'Pumps, valves, instrumentation and spare parts for oil & gas facilities.',
        },
        {
          title: 'Cement & Grain Mills',
          desc: 'Drives, bearings and wear parts for cement plants and grain mills.',
        },
        {
          title: 'Manufacturing & Utilities',
          desc: 'Electrical components, motors and maintenance supplies for plants and infrastructure.',
        },
      ],
    },
    rfq: {
      title: 'Initiate Your Request for Quotation (RFQ)',
      text: 'Our engineering specialists are ready to evaluate your equipment requirements, plan site visits, and quote genuine components.',
      btnWhatsapp: 'Instant WhatsApp Message',
      btnEmail: 'Official RFQ Email',
      formHeader: 'Technical Study / RFQ Request',
      lblName: { label: 'Full Name', placeholder: 'Your name' },
      lblCompany: { label: 'Company / Facility Name', placeholder: 'e.g., Dry Bulk Terminal / Flour Mill' },
      lblEmail: { label: 'Email', placeholder: 'name@company.com' },
      lblPhone: { label: 'Phone', placeholder: '+20 ...' },
      lblType: { label: 'Service Category Required' },
      typeOptions: [
        'Bulk Material Handling Overhaul & Maintenance',
        'Siwertell Unloader Solutions (Egypt Only)',
        'Industrial Spare Parts & Motors Procurement',
        'Lifting Equipment Maintenance (Spares & Overhaul Only)',
        'Technical Manpower & O&M Contracts',
      ],
      lblScope: { label: 'Brief Description of Asset / Challenge', placeholder: 'Equipment specs or technical challenge...' },
      btnSubmit: 'Submit Engineering RFQ',
      sending: 'Sending...',
      success: 'RFQ Received. Our engineering team will review it.',
      successAgain: 'Send another RFQ',
      error: 'Please fill in all required fields correctly.',
      submitFailed: 'We could not send your request right now. Please try again.',
      consent: 'I consent to be contacted about this enquiry',
    },
    footer: {
      copyright: '© 2026 Portix. All rights reserved — Origin: Egypt | Siwertell representation is strictly within Egypt.',
      hseNote: 'Advanced Engineering Standards • Strict Commitment to Safety & HSE',
      quickLinks: 'Quick Links',
      contactTitle: 'Contact',
      location: 'Alexandria, Egypt',
      legalName: 'Legal Name',
      legalPlaceholder: 'To be completed',
      disclaimer: 'Name is temporary pending finalization of the commercial and legal name.',
    },
  },
};

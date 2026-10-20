export type Bi = { en: string; ar: string };
export type Spec = { label: Bi; value: Bi };

export type Product = {
  slug: string;
  /** Key used to pick the built-in branded illustration (used as the photo). */
  art: string;
  /** Optional real photo URL. When set, it replaces the illustration. */
  image?: string;
  name: Bi;
  short: Bi;
  description: Bi;
  specs: Spec[];
};

export type Sector = {
  id: string;
  name: Bi;
  tagline: Bi;
  description: Bi;
  products: Product[];
};

export const catalogue: Sector[] = [
  // ======================= TRUCKS =======================
  {
    id: "trucks",
    name: { en: "Trucks", ar: "الشاحنات" },
    tagline: {
      en: "Heavy-duty transport you can rely on",
      ar: "نقل ثقيل يمكنك الاعتماد عليه",
    },
    description: {
      en: "A full range of commercial and heavy-duty trucks from China's leading manufacturers, configured to your market and regulations.",
      ar: "مجموعة كاملة من الشاحنات التجارية والثقيلة من أبرز المصنّعين الصينيين، مهيأة وفق أنظمتك ومواصفاتك.",
    },
    products: [
      {
        slug: "dump-truck",
        art: "dump-truck",
        name: { en: "Articulated Dump Truck", ar: "شاحنة قلابة" },
        short: {
          en: "Rugged off-road hauling for mining and earthworks",
          ar: "نقل ثقيل خارج الطرق للتعدين والأعمال الأرضية",
        },
        description: {
          en: "Heavy-duty articulated dump trucks built for the toughest terrain. Ideal for mining, quarry and large earthmoving projects, with high payload capacity and excellent off-road mobility.",
          ar: "شاحنات قلابة ثقيلة مصمّمة لأصعب التضاريس. مثالية للتعدين والمحاجر ومشاريع الحفر الكبرى، بسعة حمولة عالية وحركة ممتازة خارج الطرق.",
        },
        specs: [
          { label: { en: "Payload", ar: "سعة الحمولة" }, value: { en: "25–55 t", ar: "25–55 طن" } },
          { label: { en: "Engine", ar: "المحرك" }, value: { en: "380–560 hp", ar: "380–560 حصان" } },
          { label: { en: "Drive", ar: "نظام الدفع" }, value: { en: "6×6 off-road", ar: "6×6 للطرق الوعرة" } },
          { label: { en: "Emissions", ar: "الانبعاثات" }, value: { en: "Euro V", ar: "يورو V" } },
        ],
      },
      {
        slug: "tractor-head",
        art: "tractor-head",
        name: { en: "Tractor Head & Trailer", ar: "مقفل ومقطورة" },
        short: {
          en: "Prime movers for long-haul container transport",
          ar: "مركبات رئيسية لنقل الحاويات لمسافات طويلة",
        },
        description: {
          en: "Powerful tractor heads paired with semi-trailers for container and long-haul freight. Fuel-efficient engines and reinforced chassis for reliable cross-border logistics.",
          ar: "مقفلات قوية مع مقطورات نصفية لنقل الحاويات والبضائع لمسافات طويلة. محركات اقتصادية وهيكل مقوّى للوجستيات العابرة للحدود.",
        },
        specs: [
          { label: { en: "Engine", ar: "المحرك" }, value: { en: "350–480 hp", ar: "350–480 حصان" } },
          { label: { en: "GVW", ar: "الوزن الإجمالي" }, value: { en: "25–49 t", ar: "25–49 طن" } },
          { label: { en: "Cab", ar: "المقصورة" }, value: { en: "Sleeper / high roof", ar: "نايم / سقف عالٍ" } },
          { label: { en: "Transmission", ar: "ناقل الحركة" }, value: { en: "12-speed AMT", ar: "12 سرعة أوتوماتيك" } },
        ],
      },
      {
        slug: "box-truck",
        art: "box-truck",
        name: { en: "Cargo & Box Truck", ar: "شاحنة نقل بضائع" },
        short: {
          en: "Enclosed urban and regional distribution",
          ar: "توزيع مغلق داخل المدن والمناطق",
        },
        description: {
          en: "Enclosed box trucks for secure urban and regional distribution. Available in multiple body lengths with lift-gate options for easy loading.",
          ar: "شاحنات نقل مغلقة للتوزيع الآمن داخل المدن والمناطق. متوفرة بطولات هيكل متعددة مع خيارات رافعة خلفية لتسهيل التحميل.",
        },
        specs: [
          { label: { en: "Payload", ar: "سعة الحمولة" }, value: { en: "1.5–10 t", ar: "1.5–10 طن" } },
          { label: { en: "Cargo volume", ar: "حجم الحمولة" }, value: { en: "12–45 m³", ar: "12–45 م³" } },
          { label: { en: "Options", ar: "الخيارات" }, value: { en: "Lift gate / refrigerated", ar: "رافعة / تبريد" } },
          { label: { en: "Emissions", ar: "الانبعاثات" }, value: { en: "Euro IV / V", ar: "يورو IV / V" } },
        ],
      },
      {
        slug: "tanker-truck",
        art: "tanker-truck",
        name: { en: "Fuel Tanker Truck", ar: "شاحنة نقل وقود" },
        short: {
          en: "Safe transport of fuel and liquids",
          ar: "نقل آمن للوقود والسوائل",
        },
        description: {
          en: "Compartmentalized fuel tankers with safety valves and anti-static systems. Designed for safe delivery of petrol, diesel and other fluids.",
          ar: "شاحنات نقل وقود بأقسام مع صمامات أمان وأنظمة مانعة للكهرباء الساكنة. مصمّمة لتسليم آمن للبنزين والديزل والسوائل الأخرى.",
        },
        specs: [
          { label: { en: "Capacity", ar: "السعة" }, value: { en: "15–40 m³", ar: "15–40 م³" } },
          { label: { en: "Compartments", ar: "الأقسام" }, value: { en: "1–6 bays", ar: "1–6 أقسام" } },
          { label: { en: "Tank", ar: "الخزان" }, value: { en: "Carbon steel / aluminum", ar: "فولاذ كربوني / ألومنيوم" } },
          { label: { en: "Safety", ar: "السلامة" }, value: { en: "Anti-static, shut-off valves", ar: "مانع للكهرباء، صمامات إغلاق" } },
        ],
      },
      {
        slug: "mixer-truck",
        art: "mixer-truck",
        name: { en: "Concrete Mixer Truck", ar: "شاحنة خلط الإسمنت" },
        short: {
          en: "Transit mixers for continuous fresh concrete",
          ar: "خلاطات نقل للإسمنت الطازج المستمر",
        },
        description: {
          en: "Transit mixer trucks that keep concrete agitated and fresh en route to the site. High-capacity drums with hydraulic drive for consistent quality.",
          ar: "شاحنات خلط تُبقي الإسمنت متحركًا وطازجًا في طريقه إلى الموقع. أسطوانات عالية السعة بدفع هيدروليكي لجودة ثابتة.",
        },
        specs: [
          { label: { en: "Drum capacity", ar: "سعة الأسطوانة" }, value: { en: "6–16 m³", ar: "6–16 م³" } },
          { label: { en: "Drive", ar: "الدفع" }, value: { en: "Hydraulic", ar: "هيدروليكي" } },
          { label: { en: "Chassis", ar: "الهيكل" }, value: { en: "6×4 / 8×4", ar: "6×4 / 8×4" } },
          { label: { en: "Slump", ar: "التسامح" }, value: { en: "Up to 210 mm", ar: "حتى 210 مم" } },
        ],
      },
      {
        slug: "crane-truck",
        art: "crane-truck",
        name: { en: "Crane Truck", ar: "شاحنة ذات رافعة" },
        short: {
          en: "Mobile loading and lifting capability",
          ar: "قدرة تحميل ورفع متنقلة",
        },
        description: {
          en: "Truck-mounted knuckle-boom cranes for lifting and transporting materials in one vehicle. Ideal for construction, utilities and logistics.",
          ar: "رافعات مثبتة على شاحنات لرفع ونقل المواد بمركبة واحدة. مثالية للإنشاءات والمرافق والوجستيات.",
        },
        specs: [
          { label: { en: "Crane capacity", ar: "سعة الرافعة" }, value: { en: "3–30 t·m", ar: "3–30 طن·م" } },
          { label: { en: "Reach", ar: "المدى" }, value: { en: "8–28 m", ar: "8–28 م" } },
          { label: { en: "Rotation", ar: "الدوران" }, value: { en: "360° continuous", ar: "360° متصل" } },
          { label: { en: "Control", ar: "التحكم" }, value: { en: "Remote + cab", ar: "عن بُعد + المقصورة" } },
        ],
      },
    ],
  },

  // =================== CONSTRUCTION ===================
  {
    id: "construction",
    name: { en: "Construction Machinery", ar: "المعدات الإنشائية" },
    tagline: {
      en: "Built for the toughest jobsites",
      ar: "مصمّمة لأصعب مواقع العمل",
    },
    description: {
      en: "Reliable earthmoving and construction equipment sourced from certified OEM factories with full spare-part support.",
      ar: "معدات حفر وإنشائية موثوقة من مصانع معتمدة مع دعم كامل لقطع الغيار.",
    },
    products: [
      {
        slug: "excavator",
        art: "excavator",
        name: { en: "Hydraulic Excavator", ar: "حفارة هيدروليكية" },
        short: {
          en: "Versatile digging and loading machine",
          ar: "آلة حفر وتحميل متعددة الاستخدامات",
        },
        description: {
          en: "Crawler excavators delivering strong breakout force and precise control for digging, trenching and loading. Multiple sizes and attachments available.",
          ar: "حفارات على وسائط تقدم قوة كسر عالية وتحكمًا دقيقًا للحفر والأنفاق والتحميل. مقاسات وملحقات متعددة متوفرة.",
        },
        specs: [
          { label: { en: "Operating weight", ar: "الوزن التشغيلي" }, value: { en: "1.8–90 t", ar: "1.8–90 طن" } },
          { label: { en: "Bucket capacity", ar: "سعة الدولاب" }, value: { en: "0.08–6.0 m³", ar: "0.08–6.0 م³" } },
          { label: { en: "Engine", ar: "المحرك" }, value: { en: "Diesel, Tier 4 / Euro V", ar: "ديزل، تير 4 / يورو V" } },
          { label: { en: "Attachments", ar: "الملحقات" }, value: { en: "Breaker, thumb, auger", ar: "كاسر، إبهام، مثقاب" } },
        ],
      },
      {
        slug: "wheel-loader",
        art: "wheel-loader",
        name: { en: "Wheel Loader", ar: "حمّالة عجلات" },
        short: {
          en: "Fast material handling and stockpiling",
          ar: "تحميل وتخزين المواد بسرعة",
        },
        description: {
          en: "Agile wheel loaders for loading trucks, stockpiling and material handling. Quick cycle times with a wide range of buckets and forks.",
          ar: "حمّالات عجلات رشيقة لتحميل الشاحنات وتكديس المواد ومعالجتها. دورات سريعة مع تشكيلة واسعة من الأدوات.",
        },
        specs: [
          { label: { en: "Operating weight", ar: "الوزن التشغيلي" }, value: { en: "6–30 t", ar: "6–30 طن" } },
          { label: { en: "Bucket", ar: "الدولاب" }, value: { en: "1.5–5.0 m³", ar: "1.5–5.0 م³" } },
          { label: { en: "Breakout force", ar: "قوة الكسر" }, value: { en: "up to 200 kN", ar: "حتى 200 كيلونيوتن" } },
          { label: { en: "Options", ar: "الخيارات" }, value: { en: "Forks, grapple", ar: "شوكة، مخلب" } },
        ],
      },
      {
        slug: "bulldozer",
        art: "bulldozer",
        name: { en: "Bulldozer", ar: "دوزر" },
        short: {
          en: "Heavy pushing and land clearing",
          ar: "دفع ثقيل وتجهيز الأراضي",
        },
        description: {
          en: "Track-type bulldozers with high drawbar pull for heavy pushing, grading and land clearing in demanding conditions.",
          ar: "دوزرات على وسائط بقوة سحب عالية للدفع الثقيل وتسوية الأرض وتجهيزها في ظروف صعبة.",
        },
        specs: [
          { label: { en: "Operating weight", ar: "الوزن التشغيلي" }, value: { en: "8–90 t", ar: "8–90 طن" } },
          { label: { en: "Blade", ar: "الشفرة" }, value: { en: "Semi-U / U-blade", ar: "نصف-U / شفرة U" } },
          { label: { en: "Drawbar pull", ar: "قوة السحب" }, value: { en: "up to 700 kN", ar: "حتى 700 كيلونيوتن" } },
          { label: { en: "Ripper", ar: "المخرز" }, value: { en: "Single / multi-shank", ar: "سن واحد / متعدد" } },
        ],
      },
      {
        slug: "motor-grader",
        art: "motor-grader",
        name: { en: "Motor Grader", ar: "ماندة" },
        short: {
          en: "Precision grading and road finishing",
          ar: "تسوية دقيقة وإنهاء الطرق",
        },
        description: {
          en: "Motor graders for precise surface grading, road building and finishing. Adjustable moldboard with accurate blade control.",
          ar: "ماندات لتسوية الأسطح الدقيقة وبناء الطرق والتشطيب. لوح قابل للتعديل مع تحكم دقيق بالشفرة.",
        },
        specs: [
          { label: { en: "Blade width", ar: "عرض الشفرة" }, value: { en: "2.5–4.3 m", ar: "2.5–4.3 م" } },
          { label: { en: "Engine", ar: "المحرك" }, value: { en: "180–300 hp", ar: "180–300 حصان" } },
          { label: { en: "Circle", ar: "الدائرة" }, value: { en: "360° rotation", ar: "دوران 360°" } },
          { label: { en: "Ripper", ar: "المخرز" }, value: { en: "Rear-mounted option", ar: "خيار خلفي" } },
        ],
      },
      {
        slug: "road-roller",
        art: "road-roller",
        name: { en: "Road Roller", ar: "كاسحة طرق" },
        short: {
          en: "Compaction for roads and foundations",
          ar: "دك للطرق وأساسات البناء",
        },
        description: {
          en: "Vibratory road rollers for compacting soil, gravel and asphalt. Smooth-drum and padfoot options for different applications.",
          ar: "هراطم اهتزازية لدك التربة والحصى والإسفلت. خيارات أسطوانة ناعمة ومسنّنة لتطبيقات مختلفة.",
        },
        specs: [
          { label: { en: "Operating weight", ar: "الوزن التشغيلي" }, value: { en: "6–30 t", ar: "6–30 طن" } },
          { label: { en: "Drum width", ar: "عرض الأسطوانة" }, value: { en: "1.5–2.2 m", ar: "1.5–2.2 م" } },
          { label: { en: "Vibration", ar: "الاهتزاز" }, value: { en: "Dual / single", ar: "مزدوج / مفرد" } },
          { label: { en: "Type", ar: "النوع" }, value: { en: "Static / vibratory", ar: "ثابت / اهتزازي" } },
        ],
      },
      {
        slug: "mobile-crane",
        art: "mobile-crane",
        name: { en: "Mobile Crane", ar: "رافعة متنقلة" },
        short: {
          en: "High-capacity lifting on the move",
          ar: "رفع عالي السعة أثناء التنقل",
        },
        description: {
          en: "Truck and all-terrain cranes for rapid deployment and heavy lifting. Long telescopic booms with advanced safety systems.",
          ar: "رافعات شاحنات وطرق وعرة للنشر السريع والرفع الثقيل. أذرع تلسكوبية طويلة مع أنظمة سلامة متقدمة.",        },
        specs: [
          { label: { en: "Lift capacity", ar: "قدرة الرفع" }, value: { en: "25–700 t", ar: "25–700 طن" } },
          { label: { en: "Boom length", ar: "طول الذراع" }, value: { en: "30–80 m", ar: "30–80 م" } },
          { label: { en: "Axles", ar: "المحاور" }, value: { en: "2–9 axles", ar: "2–9 محاور" } },
          { label: { en: "Control", ar: "التحكم" }, value: { en: "Full-power boom", ar: "ذراع بقوة كاملة" } },
        ],
      },
    ],
  },

  // =================== AGRICULTURE ===================
  {
    id: "agriculture",
    name: { en: "Agricultural Machinery", ar: "المعدات الزراعية" },
    tagline: {
      en: "Modern tools for better harvests",
      ar: "أدوات حديثة لمحاصيل أفضل",
    },
    description: {
      en: "Efficient farming machinery that boosts productivity, from land preparation to harvest and irrigation.",
      ar: "آلات زراعية فعّالة تعزّز الإنتاجية، من تهيئة الأرض إلى الحصاد والري.",
    },
    products: [
      {
        slug: "tractor",
        art: "tractor",
        name: { en: "Farm Tractor", ar: "جرّارة زراعية" },
        short: {
          en: "Reliable prime power for every task",
          ar: "قوة رئيسية موثوقة لكل المهام",
        },
        description: {
          en: "Multipurpose farm tractors with comfortable cabins and versatile hydraulics for ploughing, hauling and PTO-driven implements.",
          ar: "جرّارات زراعية متعددة الاستخدامات بمقصورات مريحة وهيدروليكية متعددة للحراثة والنقل والمعدات المدفوعة بالعمود.",
        },
        specs: [
          { label: { en: "Power", ar: "القوة" }, value: { en: "20–260 hp", ar: "20–260 حصان" } },
          { label: { en: "Drive", ar: "الدفع" }, value: { en: "2WD / 4WD", ar: "2WD / 4WD" } },
          { label: { en: "PTO", ar: "العمود" }, value: { en: "540 / 1000 rpm", ar: "540 / 1000 لفة" } },
          { label: { en: "Transmission", ar: "ناقل الحركة" }, value: { en: "8–24 speeds", ar: "8–24 سرعة" } },
        ],
      },
      {
        slug: "harvester",
        art: "harvester",
        name: { en: "Grain Harvester", ar: "حاصدة غلال" },
        short: {
          en: "Combine harvesting for cereals",
          ar: "حصاد موحّد للحبوب",
        },
        description: {
          en: "Combine harvesters that cut, thresh and clean grain in one pass. Adjustable headers for wheat, rice, corn and more.",
          ar: "حاصدات موحّدة تجزّ وترشّ وتنظّف الحبوب في مرة واحدة. رؤوس قابلة للتعديل للأرز والقمح والذرة وغيرها.",
        },
        specs: [
          { label: { en: "Header width", ar: "عرض الرأس" }, value: { en: "2.0–9.0 m", ar: "2.0–9.0 م" } },
          { label: { en: "Grain tank", ar: "خزان الحبوب" }, value: { en: "3–12 m³", ar: "3–12 م³" } },
          { label: { en: "Engine", ar: "المحرك" }, value: { en: "150–450 hp", ar: "150–450 حصان" } },
          { label: { en: "Crops", ar: "المحاصيل" }, value: { en: "Wheat, rice, corn", ar: "قمح، أرز، ذرة" } },
        ],
      },
      {
        slug: "tiller",
        art: "tiller",
        name: { en: "Rotary Tiller", ar: "محراث دوّار" },
        short: {
          en: "Fast seedbed preparation",
          ar: "تجهيز بذور سريع",
        },
        description: {
          en: "Tractor-mounted rotary tillers for fine seedbed preparation and soil mixing. Durable blades for efficient operation.",
          ar: "محارث دوّارة تُثبت على الجرارة لتجهيز التربة الدقيقة وخلطها. شفرات متينة لتشغيل فعّال.",
        },
        specs: [
          { label: { en: "Working width", ar: "عرض العمل" }, value: { en: "1.2–3.0 m", ar: "1.2–3.0 م" } },
          { label: { en: "Rotation", ar: "الدوران" }, value: { en: "200–300 rpm", ar: "200–300 لفة" } },
          { label: { en: "Blades", ar: "الشفرات" }, value: { en: "Heat-treated steel", ar: "فولاذ معالج حراريًا" } },
          { label: { en: "Mount", ar: "التثبيت" }, value: { en: "3-point hitch", ar: "وصلة ثلاثية" } },
        ],
      },
      {
        slug: "seeder",
        art: "seeder",
        name: { en: "Seed Planter", ar: "بذّارة وغرّازة" },
        short: {
          en: "Precision sowing at scale",
          ar: "بذور دقيقة على نطاق واسع",
        },
        description: {
          en: "Precision planters for uniform seed spacing and depth. Suitable for corn, soybean, wheat and other row crops.",
          ar: "غرّازات دقيقة لتوافر متساوٍ للبذور وعمق ثابت. مناسبة للذرة وفول الصويا والقمح ومحاصيل الصفوف الأخرى.",
        },
        specs: [
          { label: { en: "Rows", ar: "عدد الصفوف" }, value: { en: "4–24 rows", ar: "4–24 صفًا" } },
          { label: { en: "Row spacing", ar: "تباعد الصفوف" }, value: { en: "45–75 cm", ar: "45–75 سم" } },
          { label: { en: "Hopper", ar: "الإناء" }, value: { en: "30–60 L/row", ar: "30–60 لتر/صف" } },
          { label: { en: "Drive", ar: "الدفع" }, value: { en: "Ground / pneumatic", ar: "أرضي / هوائي" } },
        ],
      },
      {
        slug: "irrigation",
        art: "irrigation",
        name: { en: "Irrigation System", ar: "نظام ري" },
        short: {
          en: "Efficient water delivery for fields",
          ar: "توصيل مياه فعّال للحقول",
        },
        description: {
          en: "Complete irrigation solutions including center-pivot, drip and sprinkler systems to maximize water efficiency across fields.",
          ar: "حلول ري متكاملة تشمل المنشور المركزي ونظام التنقيط والرش لتعظيم كفاءة المياه في الحقول.",
        },
        specs: [
          { label: { en: "Type", ar: "النوع" }, value: { en: "Pivot / drip / sprinkler", ar: "منشور / تنقيط / رش" } },
          { label: { en: "Coverage", ar: "التغطية" }, value: { en: "up to 50 ha", ar: "حتى 50 هكتار" } },
          { label: { en: "Pump", ar: "المضخة" }, value: { en: "Centrifugal / submersible", ar: "طرد مركزي / غاطسة" } },
          { label: { en: "Control", ar: "التحكم" }, value: { en: "Automatic / manual", ar: "أوتوماتيكي / يدوي" } },
        ],
      },
      {
        slug: "sprayer",
        art: "sprayer",
        name: { en: "Crop Sprayer", ar: "رشّاشة محاصيل" },
        short: {
          en: "Even application of crop protection",
          ar: "تطبيق متساوٍ لحماية المحاصيل",
        },
        description: {
          en: "Boom and trailer sprayers for uniform application of pesticides and fertilizers. Adjustable nozzles and rate control.",
          ar: "رشّاشات على ذراع ومقطورة لتطبيق متساوٍ للمبيدات والأسمدة. فوهات قابلة للتعديل وتحكم في الكمية.",
        },
        specs: [
          { label: { en: "Tank capacity", ar: "سعة الخزان" }, value: { en: "200–3000 L", ar: "200–3000 لتر" } },
          { label: { en: "Boom width", ar: "عرض الذراع" }, value: { en: "12–36 m", ar: "12–36 م" } },
          { label: { en: "Nozzles", ar: "الفوهات" }, value: { en: "Adjustable", ar: "قابلة للتعديل" } },
          { label: { en: "Mount", ar: "التركيب" }, value: { en: "Trailer / mounted", ar: "مقطورة / مثبتة" } },
        ],
      },
    ],
  },

  // =================== MEDICAL ===================
  {
    id: "medical",
    name: { en: "Medical Supply", ar: "المستلزمات الطبية" },
    tagline: {
      en: "Dependable equipment for better care",
      ar: "معدات موثوقة لرعاية أفضل",
    },
    description: {
      en: "Hospital, clinic and laboratory supplies sourced from certified manufacturers meeting international standards.",
      ar: "تجهيزات للمستشفيات والعيادات والمختبرات من مصنّعين معتمدين وفق المعايير الدولية.",
    },
    products: [
      {
        slug: "hospital-bed",
        art: "hospital-bed",
        name: { en: "Hospital Bed", ar: "سرير مستشفى" },
        short: {
          en: "Electric and manual care beds",
          ar: "أسرّة رعاية كهربائية ويدوية",
        },
        description: {
          en: "Adjustable hospital beds with electric or manual controls, side rails and IV poles for patient comfort and safety.",
          ar: "أسرّة مستشفى قابلة للتعديل بتحكم كهربائي أو يدوي مع حواجز جانبية وحوامل محاليل لراحة وسلامة المريض.",
        },
        specs: [
          { label: { en: "Functions", ar: "الدوال" }, value: { en: "2–5 function electric", ar: "2–5 دوال كهربائية" } },
          { label: { en: "Load", ar: "الحمل" }, value: { en: "up to 250 kg", ar: "حتى 250 كجم" } },
          { label: { en: "Frame", ar: "الهيكل" }, value: { en: "Steel, epoxy coated", ar: "فولاذ مطلي بالإيبوكسي" } },
          { label: { en: "Accessories", ar: "الملحقات" }, value: { en: "Side rails, IV pole", ar: "حواجز، حامل محاليل" } },
        ],
      },
      {
        slug: "patient-monitor",
        art: "patient-monitor",
        name: { en: "Patient Monitor", ar: "جهاز مراقبة المرضى" },
        short: {
          en: "Multi-parameter vital signs monitoring",
          ar: "مراقبة متعددة المعايير للعلامات الحيوية",
        },
        description: {
          en: "Multi-parameter monitors tracking ECG, SpO2, NIBP, temperature and respiration with clear displays and alarm systems.",
          ar: "أجهزة مراقبة متعددة المعايير تتبع تخطيط القلب والأكسجين وضغط الدم ودرجة الحرارة والتنفس مع شاشات واضحة وأنظمة إنذار.",
        },
        specs: [
          { label: { en: "Parameters", ar: "المعايير" }, value: { en: "ECG, SpO2, NIBP, TEMP", ar: "ECG, SpO2, NIBP, حرارة" } },
          { label: { en: "Display", ar: "الشاشة" }, value: { en: "10.4″ TFT", ar: "10.4 بوصة TFT" } },
          { label: { en: "Battery", ar: "البطارية" }, value: { en: "≥ 2.5 h", ar: "≥ 2.5 ساعة" } },
          { label: { en: "Alarms", ar: "الإنذار" }, value: { en: "Triple-level", ar: "ثلاثي المستويات" } },
        ],
      },
      {
        slug: "ultrasound",
        art: "ultrasound",
        name: { en: "Ultrasound Scanner", ar: "جهاز موجات فوق صوتية" },
        short: {
          en: "Diagnostic imaging for clinics",
          ar: "تصوير تشخيصي للعيادات",
        },
        description: {
          en: "Portable and console ultrasound systems for abdominal, obstetric, cardiac and vascular imaging with clear resolution.",
          ar: "أنظمة موجات فوق صوتية محمولة وثابتة للتصوير البطني والولائي والقلبي والأوعية بدقة عالية.",
        },
        specs: [
          { label: { en: "Type", ar: "النوع" }, value: { en: "Portable / console", ar: "محمول / ثابت" } },
          { label: { en: "Display", ar: "الشاشة" }, value: { en: "15″ LCD", ar: "15 بوصة LCD" } },
          { label: { en: "Probes", ar: "المسبار" }, value: { en: "Convex, linear, cardiac", ar: "convex، خطي، قلبي" } },
          { label: { en: "Modes", ar: "الأنماط" }, value: { en: "B, M, PW, CW", ar: "B, M, PW, CW" } },
        ],
      },
      {
        slug: "surgical-instruments",
        art: "surgical-instruments",
        name: { en: "Surgical Instruments", ar: "أدوات جراحية" },
        short: {
          en: "Stainless steel instrument sets",
          ar: "طقم أدوات من الفولاذ المقاوم",
        },
        description: {
          en: "Comprehensive sets of stainless steel surgical instruments, sterilization-ready and manufactured to international standards.",
          ar: "طقم شامل من الأدوات الجراحية الفولاذية، جاهزة للتعقيم ومصنّعة وفق المعايير الدولية.",
        },
        specs: [
          { label: { en: "Material", ar: "المادة" }, value: { en: "German stainless steel", ar: "فولاذ ألماني" } },
          { label: { en: "Sterilization", ar: "التعقيم" }, value: { en: "Autoclavable", ar: "قابل للتعقيم بالبخار" } },
          { label: { en: "Sets", ar: "الأطقم" }, value: { en: "General, ortho, OB/GYN", ar: "عامة، عظمية، نساء" } },
          { label: { en: "Certification", ar: "الشهادة" }, value: { en: "CE / ISO", ar: "CE / ISO" } },
        ],
      },
      {
        slug: "wheelchair",
        art: "wheelchair",
        name: { en: "Wheelchair", ar: "كرسي متحرك" },
        short: {
          en: "Manual and powered mobility",
          ar: "تنقل يدوي وكهربائي",
        },
        description: {
          en: "Durable manual and electric wheelchairs designed for comfort, safety and easy transport for patients and elderly.",
          ar: "كراسٍ متحركة يدوية وكهربائية متينة مصمّمة للراحة والسلامة وسهولة النقل للمرضى وكبار السن.",
        },
        specs: [
          { label: { en: "Type", ar: "النوع" }, value: { en: "Manual / electric", ar: "يدوي / كهربائي" } },
          { label: { en: "Load", ar: "الحمل" }, value: { en: "up to 150 kg", ar: "حتى 150 كجم" } },
          { label: { en: "Wheels", ar: "العجلات" }, value: { en: "Quick-release", ar: "فائق سريع الفك" } },
          { label: { en: "Frame", ar: "الهيكل" }, value: { en: "Aluminium alloy", ar: "سبيكة ألومنيوم" } },
        ],
      },
      {
        slug: "ppe",
        art: "ppe",
        name: { en: "PPE & Consumables", ar: "معدات واقية ومستهلكات" },
        short: {
          en: "Protection supplies for healthcare",
          ar: "مستلزمات حماية للرعاية الصحية",
        },
        description: {
          en: "Personal protective equipment and medical consumables including gowns, masks, gloves and protective eyewear.",
          ar: "معدات الحماية الشخصية والمستهلكات الطبية بما في ذلك المعاطف والكمامات والقفازات وواقيات العين.",
        },
        specs: [
          { label: { en: "Products", ar: "المنتجات" }, value: { en: "Masks, gowns, gloves", ar: "كمامات، معاطف، قفازات" } },
          { label: { en: "Standard", ar: "المعيار" }, value: { en: "EN / ASTM certified", ar: "معتمد EN / ASTM" } },
          { label: { en: "Sterility", ar: "التعقيم" }, value: { en: "Sterile / non-sterile", ar: "معقّم / غير معقّم" } },
          { label: { en: "Packaging", ar: "التعبئة" }, value: { en: "Bulk / individually packed", ar: "بالجملة / مفرد" } },
        ],
      },
    ],
  },
];

export function getSector(id: string): Sector | undefined {
  return catalogue.find((s) => s.id === id);
}

export function getProduct(sectorId: string, slug: string) {
  const sector = getSector(sectorId);
  if (!sector) return undefined;
  const index = sector.products.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  const product = sector.products[index];
  const prev = sector.products[index - 1];
  const next = sector.products[index + 1];
  return { sector, product, index, prev, next };
}

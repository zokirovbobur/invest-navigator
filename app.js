/* ============================================================
   INVEST NAVIGATOR — KATALOG
   ============================================================ */

const I18N = {
  uz: {
    "head.eyebrow": "Yo'nalish · MVP",
    "head.title": "Investitsiya instrumentlari <em>yo'nalishlari</em>",
    "head.stat.count": "Yo'nalishlar soni",
    "head.stat.markets": "Bozorlar",
    "head.stat.markets.v": "Lokal · Xalqaro",
    "head.stat.minentry": "Eng past kirish",
    "head.stat.minentry.v": "$ 50",

    "search.ph": "Yo'nalish nomi yoki kalit so'z…",

    "sort.relevance": "Tartib: Tavsiya etilgan",
    "sort.return.desc": "Daromad: yuqoridan pastga",
    "sort.return.asc":  "Daromad: pastdan yuqoriga",
    "sort.risk.asc":    "Risk: pastdan yuqoriga",
    "sort.risk.desc":   "Risk: yuqoridan pastga",
    "sort.cap.asc":     "Kirish summasi: kichikdan kattaga",
    "sort.cap.desc":    "Kirish summasi: kattadan kichikka",

    "filter.risk.all": "Risk: barchasi",
    "filter.risk.low": "Risk: past",
    "filter.risk.mid": "Risk: o'rta",
    "filter.risk.hi":  "Risk: yuqori",

    "filter.cap.all": "Kapital: har qanday",
    "filter.cap.low": "Kapital: kichik (< $100)",
    "filter.cap.mid": "Kapital: o'rta ($100–$2K)",
    "filter.cap.hi":  "Kapital: katta ($2K+)",

    "filter.liq.all": "Likvidlik: har qanday",
    "filter.liq.hi":  "Likvidlik: yuqori",
    "filter.liq.mid": "Likvidlik: o'rta",
    "filter.liq.low": "Likvidlik: past",

    "tog.incomeType": "Daromad turi",
    "tog.market":     "Bozor",
    "tog.currency":   "Valyuta",
    "tog.online":     "Online harid",
    "tog.tangible":   "Real aktiv",
    "tog.all":        "Barchasi",
    "tog.active":     "Aktiv boshqaruv",
    "tog.passive":    "Passiv daromad",
    "tog.local":      "Lokal",
    "tog.intl":       "Xalqaro",
    "tog.uzs":        "UZS",
    "tog.usd":        "USD",
    "tog.yes":        "Ha",
    "tog.no":         "Yo'q",

    "catalog.title": "Yo'nalish",
    "catalog.clear": "Filtrlarni tozalash",
    "catalog.count": "ta",
    "catalog.empty.title": "Mos instrument topilmadi",
    "catalog.empty.body": "Filtrlarni o'zgartirib qayta urinib ko'ring.",

    "metric.return": "Daromad",
    "metric.liq":    "Likvidlik",
    "metric.mincap": "Min. kirish",
    "metric.risk":   "Risk",
    "metric.cx":     "Murakkablik",
    "metric.online": "Online harid",

    "tag.local":    "Lokal",
    "tag.intl":     "Xalqaro",
    "tag.active":   "Aktiv",
    "tag.passive":  "Passiv daromad",
    "tag.tangible": "Real aktiv",
    "tag.fintech":  "Fintech",
    "tag.compliant": "Shariat moskligi: bor",
    "tag.partial":   "Shariat moskligi: qisman",
    "tag.absent":    "Shariat moskligi: yo'q",

    "online.yes": "Online",
    "online.no":  "Offline",

    "risk.low": "Past",
    "risk.mid": "O'rta",
    "risk.hi":  "Yuqori",
    "liq.hi":   "Yuqori",
    "liq.mid":  "O'rta",
    "liq.low":  "Past",
    "cx.low":   "Oson",
    "cx.mid":   "O'rta",
    "cx.hi":    "Murakkab",

    "card.detail": "Batafsil",

    "disclaimer.title": "Bu moliyaviy maslahat emas",
    "disclaimer.body": "Katalog faqat ta'lim va informatsion maqsadda taqdim etilgan. Investitsiya qarorlarini qabul qilishdan oldin mustaqil tahlil qiling yoki litsenziyalangan mutaxassis bilan maslahat qiling.",
    "footer.note": "© 2026 Invest Navigator · O'zbekiston",
    "footer.version": "Yo'nalish v0.1 · MVP",
  },

  ru: {
    "head.eyebrow": "Направления · MVP",
    "head.title": "Направления инвестиционных <em>инструментов</em>",
    "head.stat.count": "Количество направлений",
    "head.stat.markets": "Рынки",
    "head.stat.markets.v": "Локальный · Международный",
    "head.stat.minentry": "Минимальный вход",
    "head.stat.minentry.v": "$ 50",

    "search.ph": "Название направления или ключевое слово…",

    "sort.relevance": "Сортировка: Рекомендованное",
    "sort.return.desc": "Доходность: по убыванию",
    "sort.return.asc":  "Доходность: по возрастанию",
    "sort.risk.asc":    "Риск: от меньшего к большему",
    "sort.risk.desc":   "Риск: от большего к меньшему",
    "sort.cap.asc":     "Сумма входа: от меньшей",
    "sort.cap.desc":    "Сумма входа: от большей",

    "filter.risk.all": "Риск: все",
    "filter.risk.low": "Риск: низкий",
    "filter.risk.mid": "Риск: средний",
    "filter.risk.hi":  "Риск: высокий",

    "filter.cap.all": "Капитал: любой",
    "filter.cap.low": "Капитал: малый (< $100)",
    "filter.cap.mid": "Капитал: средний ($100–$2K)",
    "filter.cap.hi":  "Капитал: крупный ($2K+)",

    "filter.liq.all": "Ликвидность: любая",
    "filter.liq.hi":  "Ликвидность: высокая",
    "filter.liq.mid": "Ликвидность: средняя",
    "filter.liq.low": "Ликвидность: низкая",

    "tog.incomeType": "Тип дохода",
    "tog.market":     "Рынок",
    "tog.currency":   "Валюта",
    "tog.online":     "Онлайн-покупка",
    "tog.tangible":   "Реальный актив",
    "tog.all":        "Все",
    "tog.active":     "Активный",
    "tog.passive":    "Пассивный доход",
    "tog.local":      "Локальный",
    "tog.intl":       "Международный",
    "tog.uzs":        "UZS",
    "tog.usd":        "USD",
    "tog.yes":        "Да",
    "tog.no":         "Нет",

    "catalog.title": "Направления",
    "catalog.clear": "Сбросить фильтры",
    "catalog.count": "шт.",
    "catalog.empty.title": "Подходящих инструментов не найдено",
    "catalog.empty.body": "Попробуйте изменить фильтры.",

    "metric.return": "Доходность",
    "metric.liq":    "Ликвидность",
    "metric.mincap": "Мин. вход",
    "metric.risk":   "Риск",
    "metric.cx":     "Сложность",
    "metric.online": "Онлайн-покупка",

    "tag.local":    "Локальный",
    "tag.intl":     "Международный",
    "tag.active":   "Активный",
    "tag.passive":  "Пассивный доход",
    "tag.tangible": "Реальный актив",
    "tag.compliant": "Соответствие шариату: есть",
    "tag.partial":   "Соответствие шариату: частично",
    "tag.absent":    "Соответствие шариату: нет",

    "online.yes": "Онлайн",
    "online.no":  "Оффлайн",

    "risk.low": "Низкий",
    "risk.mid": "Средний",
    "risk.hi":  "Высокий",
    "liq.hi":   "Высокая",
    "liq.mid":  "Средняя",
    "liq.low":  "Низкая",
    "cx.low":   "Просто",
    "cx.mid":   "Средне",
    "cx.hi":    "Сложно",

    "card.detail": "Подробнее",

    "disclaimer.title": "Это не финансовая консультация",
    "disclaimer.body": "Каталог предоставлен исключительно в образовательных и информационных целях. Перед принятием инвестрешений проведите самостоятельный анализ или проконсультируйтесь с лицензированным специалистом.",
    "footer.note": "© 2026 Invest Navigator · Узбекистан",
    "footer.version": "Направления v0.1 · MVP",
  },

  en: {
    "head.eyebrow": "Directions · MVP",
    "head.title": "Investment instrument <em>directions</em>",
    "head.stat.count": "Directions listed",
    "head.stat.markets": "Markets",
    "head.stat.markets.v": "Local · International",
    "head.stat.minentry": "Lowest entry",
    "head.stat.minentry.v": "$ 50",

    "search.ph": "Direction name or keyword…",

    "sort.relevance": "Sort: Recommended",
    "sort.return.desc": "Return: high to low",
    "sort.return.asc":  "Return: low to high",
    "sort.risk.asc":    "Risk: low to high",
    "sort.risk.desc":   "Risk: high to low",
    "sort.cap.asc":     "Entry size: small to large",
    "sort.cap.desc":    "Entry size: large to small",

    "filter.risk.all": "Risk: all",
    "filter.risk.low": "Risk: low",
    "filter.risk.mid": "Risk: medium",
    "filter.risk.hi":  "Risk: high",

    "filter.cap.all": "Capital: any",
    "filter.cap.low": "Capital: small (< $100)",
    "filter.cap.mid": "Capital: medium ($100–$2K)",
    "filter.cap.hi":  "Capital: large ($2K+)",

    "filter.liq.all": "Liquidity: any",
    "filter.liq.hi":  "Liquidity: high",
    "filter.liq.mid": "Liquidity: medium",
    "filter.liq.low": "Liquidity: low",

    "tog.incomeType": "Income type",
    "tog.market":     "Market",
    "tog.currency":   "Currency",
    "tog.online":     "Online purchase",
    "tog.tangible":   "Tangible asset",
    "tog.all":        "All",
    "tog.active":     "Active",
    "tog.passive":    "Passive income",
    "tog.local":      "Local",
    "tog.intl":       "International",
    "tog.uzs":        "UZS",
    "tog.usd":        "USD",
    "tog.yes":        "Yes",
    "tog.no":         "No",

    "catalog.title": "Directions",
    "catalog.clear": "Clear filters",
    "catalog.count": "items",
    "catalog.empty.title": "No matching instruments",
    "catalog.empty.body": "Try adjusting filters.",

    "metric.return": "Return",
    "metric.liq":    "Liquidity",
    "metric.mincap": "Min. entry",
    "metric.risk":   "Risk",
    "metric.cx":     "Complexity",
    "metric.online": "Online purchase",

    "tag.local":    "Local",
    "tag.intl":     "International",
    "tag.active":   "Active",
    "tag.passive":  "Passive income",
    "tag.tangible": "Tangible",
    "tag.fintech":  "Fintech",
    "tag.compliant": "Shariah compliance: yes",
    "tag.partial":   "Shariah compliance: partial",
    "tag.absent":    "Shariah compliance: no",

    "online.yes": "Online",
    "online.no":  "Offline",

    "risk.low": "Low",
    "risk.mid": "Medium",
    "risk.hi":  "High",
    "liq.hi":   "High",
    "liq.mid":  "Medium",
    "liq.low":  "Low",
    "cx.low":   "Easy",
    "cx.mid":   "Medium",
    "cx.hi":    "Complex",

    "card.detail": "View details",

    "disclaimer.title": "This is not financial advice",
    "disclaimer.body": "The catalog is provided for educational and informational purposes only. Do your own research or consult a licensed professional before making investment decisions.",
    "footer.note": "© 2026 Invest Navigator · Uzbekistan",
    "footer.version": "Directions v0.1 · MVP",
  },
};

/* ============================================================
   INSTRUMENT DATASET
   ============================================================ */
const INSTRUMENTS = [
  {
    id: "deposit-uzs",
    name: { uz: "Bank depoziti (UZS)", ru: "Банковский депозит (UZS)", en: "Bank deposit (UZS)" },
    sub:  { uz: "Mahalliy banklar · UZS", ru: "Местные банки · UZS", en: "Local banks · UZS" },
    risk: "low", cap: "low", liq: "mid",
    income: "passive", market: "local", currency: "UZS", online: "yes", tangible: "no",
    sharia: "partial",
    retMid: 21, retLabel: { uz: "18–24% yillik", ru: "18–24% годовых", en: "18–24% annual" },
    minCapUSD: 40,  minCapLabel: { uz: "500 000 so'm", ru: "500 000 сум", en: "500K UZS" },
    complexity: "low",
    pros: {
      uz: ["Davlat kafolatlangan", "Oson va tushunarli", "Past kirish chegarasi"],
      ru: ["Гарантия государства", "Просто и понятно", "Низкий входной порог"],
      en: ["Government-insured", "Simple and clear", "Low entry threshold"],
    },
    cons: {
      uz: ["Inflyatsiyadan zo'rg'a himoyalanadi"],
      ru: ["Едва покрывает инфляцию"],
      en: ["Barely beats inflation"],
    },
  },
  {
    id: "deposit-usd",
    name: { uz: "Bank depoziti (USD)", ru: "Банковский депозит (USD)", en: "Bank deposit (USD)" },
    sub:  { uz: "Mahalliy banklar · USD", ru: "Местные банки · USD", en: "Local banks · USD" },
    risk: "low", cap: "low", liq: "mid",
    income: "passive", market: "local", currency: "USD", online: "yes", tangible: "no",
    sharia: "partial",
    retMid: 5, retLabel: { uz: "4–6% yillik", ru: "4–6% годовых", en: "4–6% annual" },
    minCapUSD: 100, minCapLabel: { uz: "$ 100", ru: "$ 100", en: "$ 100" },
    complexity: "low",
    pros: {
      uz: ["Valyuta riskidan himoya", "Mustahkam valyuta", "Past kirish chegarasi"],
      ru: ["Защита от валютного риска", "Стабильная валюта", "Низкий входной порог"],
      en: ["FX risk protection", "Stable currency", "Low entry threshold"],
    },
    cons: {
      uz: ["Past foiz stavkasi"],
      ru: ["Низкая ставка"],
      en: ["Low yield"],
    },
  },
  {
    id: "ozbonds",
    name: { uz: "Davlat obligatsiyalari", ru: "Государственные облигации", en: "Government bonds" },
    sub:  { uz: "Moliya vazirligi · UZS", ru: "Минфин · UZS", en: "Ministry of Finance · UZS" },
    risk: "low", cap: "low", liq: "mid",
    income: "passive", market: "local", currency: "UZS", online: "yes", tangible: "no",
    sharia: "partial",
    retMid: 18, retLabel: { uz: "16–20% yillik", ru: "16–20% годовых", en: "16–20% annual" },
    minCapUSD: 80, minCapLabel: { uz: "1 mln so'm", ru: "1 млн сум", en: "1M UZS" },
    complexity: "low",
    pros: {
      uz: ["Yuqori ishonchlilik", "Soliq imtiyozi", "Likvid bozor"],
      ru: ["Высокая надёжность", "Налоговые льготы", "Ликвидный рынок"],
      en: ["High reliability", "Tax benefits", "Liquid market"],
    },
    cons: {
      uz: ["Inflyatsiya riski"],
      ru: ["Риск инфляции"],
      en: ["Inflation risk"],
    },
  },
  {
    id: "sukuk",
    name: { uz: "Sukuk", ru: "Сукук", en: "Sukuk" },
    sub:  { uz: "Islom obligatsiyalari · UZS", ru: "Исламские облигации · UZS", en: "Islamic bonds · UZS" },
    risk: "low", cap: "mid", liq: "low",
    income: "passive", market: "local", currency: "UZS", online: "yes", tangible: "yes",
    sharia: "compliant",
    retMid: 12.5, retLabel: { uz: "10–15% yillik", ru: "10–15% годовых", en: "10–15% annual" },
    minCapUSD: 800, minCapLabel: { uz: "10 mln so'm", ru: "10 млн сум", en: "10M UZS" },
    complexity: "mid",
    pros: {
      uz: ["Aktivga asoslangan", "Barqaror to'lovlar", "Shariat tamoyillariga mos"],
      ru: ["Обеспечены активами", "Стабильные выплаты", "Соответствие шариату"],
      en: ["Asset-backed", "Stable payouts", "Shariah-compliant"],
    },
    cons: {
      uz: ["O'zbekistonda bozor hali kichik", "Past likvidlik"],
      ru: ["Узкий рынок в Узбекистане", "Низкая ликвидность"],
      en: ["Limited UZ market", "Lower liquidity"],
    },
  },
  {
    id: "tse",
    name: { uz: "Toshkent fond birjasi", ru: "Ташкентская фондовая биржа", en: "Tashkent Stock Exchange" },
    sub:  { uz: "Mahalliy aksiyalar · UZS", ru: "Локальные акции · UZS", en: "Local equities · UZS" },
    risk: "mid", cap: "low", liq: "mid",
    income: "active", market: "local", currency: "UZS", online: "yes", tangible: "no",
    sharia: "partial",
    retMid: 17, retLabel: { uz: "10–25% yillik", ru: "10–25% годовых", en: "10–25% annual" },
    minCapUSD: 80, minCapLabel: { uz: "1 mln so'm", ru: "1 млн сум", en: "1M UZS" },
    complexity: "mid",
    pros: {
      uz: ["Iqtisodiyot o'sishidan foyda", "Past kirish chegarasi", "Dividendlar imkoniyati"],
      ru: ["Выгода от роста экономики", "Низкий порог входа", "Возможны дивиденды"],
      en: ["Benefit from economy growth", "Low entry threshold", "Potential dividends"],
    },
    cons: {
      uz: ["Past likvidlik ba'zi qog'ozlarda", "Bozor hali yosh"],
      ru: ["Низкая ликвидность по части бумаг", "Молодой рынок"],
      en: ["Thin liquidity on some tickers", "Young market"],
    },
  },
  {
    id: "div-stocks",
    name: { uz: "Dividend aksiyalari", ru: "Дивидендные акции", en: "Dividend equities" },
    sub:  { uz: "Xalqaro aksiyalar · USD", ru: "Международные акции · USD", en: "International equities · USD" },
    risk: "mid", cap: "mid", liq: "hi",
    income: "passive", market: "intl", currency: "USD", online: "yes", tangible: "no",
    sharia: "partial",
    retMid: 8, retLabel: { uz: "5–10% dividend", ru: "5–10% дивиденды", en: "5–10% dividends" },
    minCapUSD: 100, minCapLabel: { uz: "$ 100", ru: "$ 100", en: "$ 100" },
    complexity: "mid",
    pros: {
      uz: ["Doimiy passiv daromad", "Yuqori likvidlik", "Tarmoq diversifikatsiyasi"],
      ru: ["Регулярный пассивный доход", "Высокая ликвидность", "Диверсификация по секторам"],
      en: ["Regular passive income", "High liquidity", "Sector diversification"],
    },
    cons: {
      uz: ["Valyuta riski"],
      ru: ["Валютный риск"],
      en: ["FX risk"],
    },
  },
  {
    id: "etf",
    name: { uz: "Indeks ETF (S&P 500)", ru: "Индексные ETF (S&P 500)", en: "Index ETF (S&P 500)" },
    sub:  { uz: "Indeks fondlari · USD", ru: "Индексные фонды · USD", en: "Index funds · USD" },
    risk: "mid", cap: "mid", liq: "hi",
    income: "passive", market: "intl", currency: "USD", online: "yes", tangible: "no",
    sharia: "partial",
    retMid: 10, retLabel: { uz: "8–12% yillik", ru: "8–12% годовых", en: "8–12% annual" },
    minCapUSD: 100, minCapLabel: { uz: "$ 100", ru: "$ 100", en: "$ 100" },
    complexity: "low",
    pros: {
      uz: ["Avtomatik diversifikatsiya", "Past komissiyalar", "Tushunarli o'sish"],
      ru: ["Автоматическая диверсификация", "Низкие комиссии", "Понятный рост"],
      en: ["Automatic diversification", "Low fees", "Predictable growth"],
    },
    cons: {
      uz: ["Brokerga kirish kerak", "Valyuta riski"],
      ru: ["Нужен доступ к брокеру", "Валютный риск"],
      en: ["Broker access required", "FX risk"],
    },
  },
  {
    id: "real-estate",
    name: { uz: "Ko'chmas mulk ulushi", ru: "Доля в недвижимости", en: "Real estate share" },
    sub:  { uz: "Ijara aktivi · UZS", ru: "Арендный актив · UZS", en: "Rental asset · UZS" },
    risk: "mid", cap: "hi", liq: "low",
    income: "passive", market: "local", currency: "UZS", online: "no", tangible: "yes",
    sharia: "compliant",
    retMid: 11, retLabel: { uz: "8–14% yillik", ru: "8–14% годовых", en: "8–14% annual" },
    minCapUSD: 4000, minCapLabel: { uz: "50 mln so'm", ru: "50 млн сум", en: "50M UZS" },
    complexity: "mid",
    pros: {
      uz: ["Real aktiv qo'lda", "Inflyatsiyadan himoya", "Tushunarli daromad manbasi"],
      ru: ["Реальный актив на руках", "Защита от инфляции", "Понятный источник дохода"],
      en: ["Tangible asset", "Inflation hedge", "Clear income source"],
    },
    cons: {
      uz: ["Past likvidlik", "Yuqori kirish summasi", "Boshqaruv harajatlari"],
      ru: ["Низкая ликвидность", "Высокий вход", "Расходы на управление"],
      en: ["Low liquidity", "High entry", "Management costs"],
    },
  },
  {
    id: "startup",
    name: { uz: "Startup investitsiya", ru: "Стартап-инвестиции", en: "Startup investing" },
    sub:  { uz: "Venture · USD", ru: "Венчур · USD", en: "Venture · USD" },
    risk: "hi", cap: "hi", liq: "low",
    income: "active", market: "local", currency: "USD", online: "no", tangible: "no",
    sharia: "partial",
    retMid: 50, retLabel: { uz: "Potentsial 3–10x", ru: "Потенциал 3–10x", en: "Potential 3–10x" },
    minCapUSD: 5000, minCapLabel: { uz: "$ 5 000", ru: "$ 5 000", en: "$ 5 000" },
    complexity: "hi",
    pros: {
      uz: ["Yuqori potentsial daromad", "Innovatsiyalarni qo'llab-quvvatlash"],
      ru: ["Высокий потенциал доходности", "Поддержка инноваций"],
      en: ["High upside potential", "Back innovation"],
    },
    cons: {
      uz: ["To'liq yo'qotish riski", "Uzoq muddat (5–10 yil)", "Past likvidlik"],
      ru: ["Полная потеря возможна", "Долгий горизонт (5–10 лет)", "Низкая ликвидность"],
      en: ["Total loss possible", "Long hold (5–10y)", "Low liquidity"],
    },
  },
  {
    id: "crypto",
    name: { uz: "Kripto aktivlar", ru: "Криптоактивы", en: "Crypto assets" },
    sub:  { uz: "Raqamli aktivlar · USD", ru: "Цифровые активы · USD", en: "Digital assets · USD" },
    risk: "hi", cap: "low", liq: "hi",
    income: "active", market: "intl", currency: "USD", online: "yes", tangible: "no",
    sharia: "absent",
    retMid: 30, retLabel: { uz: "±50%+ volatil", ru: "±50%+ волатильно", en: "±50%+ volatile" },
    minCapUSD: 50, minCapLabel: { uz: "$ 50", ru: "$ 50", en: "$ 50" },
    complexity: "hi",
    pros: {
      uz: ["24/7 savdo", "Global aktiv", "Past kirish"],
      ru: ["Торговля 24/7", "Глобальный актив", "Низкий вход"],
      en: ["24/7 trading", "Global asset", "Low entry"],
    },
    cons: {
      uz: ["Yuqori volatillik", "Tartibga solinmagan bozor"],
      ru: ["Высокая волатильность", "Регулирование сырое"],
      en: ["High volatility", "Light regulation"],
    },
  },
  {
    id: "gold",
    name: { uz: "Oltin", ru: "Золото", en: "Gold" },
    sub:  { uz: "Metall hisobi · USD", ru: "Металл. счёт · USD", en: "Metal account · USD" },
    risk: "low", cap: "mid", liq: "mid",
    income: "passive", market: "local", currency: "USD", online: "yes", tangible: "yes",
    sharia: "compliant",
    retMid: 7.5, retLabel: { uz: "5–10% yillik", ru: "5–10% годовых", en: "5–10% annual" },
    minCapUSD: 160, minCapLabel: { uz: "2 mln so'm", ru: "2 млн сум", en: "2M UZS" },
    complexity: "low",
    pros: {
      uz: ["Inflyatsiyadan himoya", "Asrlik aktiv", "Real aktiv qo'lda"],
      ru: ["Защита от инфляции", "Вековой актив", "Реальный актив на руках"],
      en: ["Inflation hedge", "Time-tested asset", "Tangible asset"],
    },
    cons: {
      uz: ["Daromad bermaydi (faqat qiymat o'sishi)", "Sotuv-sotib olish spred"],
      ru: ["Нет купонного дохода", "Спред при покупке-продаже"],
      en: ["No yield (only price growth)", "Buy-sell spread"],
    },
  },
  {
    id: "p2p",
    name: { uz: "P2P · Crowdfunding", ru: "P2P · Краудфандинг", en: "P2P · Crowdfunding" },
    sub:  { uz: "Mahalliy platformalar · UZS", ru: "Локальные платформы · UZS", en: "Local platforms · UZS" },
    risk: "hi", cap: "low", liq: "low",
    income: "passive", market: "local", currency: "UZS", online: "yes", tangible: "no",
    sharia: "partial",
    retMid: 24, retLabel: { uz: "18–30% yillik", ru: "18–30% годовых", en: "18–30% annual" },
    minCapUSD: 80, minCapLabel: { uz: "1 mln so'm", ru: "1 млн сум", en: "1M UZS" },
    complexity: "hi",
    pros: {
      uz: ["Yuqori daromad", "Past kirish", "Real biznesni qo'llash"],
      ru: ["Высокий доход", "Низкий вход", "Поддержка реального бизнеса"],
      en: ["High yield", "Low entry", "Backs real business"],
    },
    cons: {
      uz: ["Defolt riski yuqori", "Past likvidlik", "Platforma riski"],
      ru: ["Высокий риск дефолта", "Низкая ликвидность", "Риск платформы"],
      en: ["High default risk", "Low liquidity", "Platform risk"],
    },
  },
];

/* ============================================================
   MERGE OFFERS_I18N into I18N at script load
============================================================ */
if (typeof OFFERS_I18N !== "undefined") {
  Object.keys(OFFERS_I18N).forEach((lang) => {
    Object.assign(I18N[lang], OFFERS_I18N[lang]);
  });
}

/* ============================================================
   STATE
============================================================ */
const state = {
  lang: "uz",
  route: "home",   // "home" | "detail"
  detailId: null,
  filters: {
    search: "",
    sort: "relevance",
    risk: "all",
    cap: "all",
    liq: "all",
    incomeType: "all",
    market: "all",
    currency: "all",
    online: "all",
    tangible: "all",
  },
  detailFilters: {
    deposit: {
      search: "",
      sort: "rate.desc",
      bank: "all",
      term: "all",
      capitalization: "all",
      earlyWithdrawal: "all",
      onlineOpen: "all",
    },
    stock: {
      search: "",
      sort: "div.desc",
      sector: "all",
      liq: "all",
      div: "all",
      dividend: "all",
      movement: "all",
      ipo: "all",
    },
  },
};

const RISK_RANK = { low: 1, mid: 2, hi: 3 };
const LIQ_RANK  = { low: 1, mid: 2, hi: 3 };

/* ============================================================
   UTILITIES
============================================================ */
const t = (k) => I18N[state.lang][k] ?? k;
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const el = (tag, attrs, ...children) => {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else if (v !== undefined && v !== null && v !== false) node.setAttribute(k, v);
  }
  for (const c of children) {
    if (c == null) continue;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return node;
};

function fmtUZS(v) {
  if (v >= 1_000_000_000) return (v / 1_000_000_000).toFixed(0) + " mlrd";
  if (v >= 1_000_000)     return (v / 1_000_000).toFixed(v % 1_000_000 === 0 ? 0 : 1) + " mln";
  if (v >= 1000)          return (v / 1000).toFixed(0) + "K";
  return String(v);
}
function fmtUZSFull(v, lang) {
  const cur = { uz: "so'm", ru: "сум", en: "UZS" }[lang] || "so'm";
  if (v >= 1_000_000_000) return (v / 1_000_000_000).toFixed(v % 1_000_000_000 === 0 ? 0 : 1) + " mlrd " + cur;
  if (v >= 1_000_000)     return (v / 1_000_000).toFixed(v % 1_000_000 === 0 ? 0 : 1) + " mln " + cur;
  if (v >= 1000)          return Math.round(v / 1000) + (lang === "uz" ? " ming " : lang === "ru" ? "K " : "K ") + cur;
  return v + " " + cur;
}
function fmtUSD(v) {
  if (v >= 1000) return "$ " + (v / 1000).toFixed(v % 1000 === 0 ? 0 : 1) + "K";
  return "$ " + v;
}

/* ============================================================
   HASH ROUTING
============================================================ */
function parseHash() {
  const h = (window.location.hash || "").replace(/^#\/?/, "");
  if (h.startsWith("detail/")) {
    return { route: "detail", detailId: h.slice("detail/".length) };
  }
  return { route: "home", detailId: null };
}

function syncRouteFromHash() {
  const { route, detailId } = parseHash();
  state.route = route;
  state.detailId = detailId;
  buildFilterUI();
  applyI18nTextOnly();
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function navigate(hash) {
  window.location.hash = hash;
}

/* ============================================================
   I18N APPLY
============================================================ */
function applyI18nTextOnly() {
  document.documentElement.lang = state.lang;
  $$("[data-t]").forEach((node) => {
    const k = node.dataset.t;
    const val = t(k);
    if (val.includes("<")) node.innerHTML = val;
    else node.textContent = val;
  });
  $$("#lang-switch button").forEach((b) =>
    b.setAttribute("aria-pressed", b.dataset.lang === state.lang ? "true" : "false")
  );

  // page title + nav title
  const titleEl = $("#page-title");
  const navTitleEl = $("#nav-title");
  const pageHeadSection = $("#page-head-section");
  const backEl = $("#back-link");
  if (state.route === "home") {
    navTitleEl.innerHTML = t("head.title");
    navTitleEl.hidden = false;
    pageHeadSection.hidden = true;
    backEl.hidden = true;
  } else {
    const inst = INSTRUMENTS.find((i) => i.id === state.detailId);
    navTitleEl.hidden = true;
    pageHeadSection.hidden = false;
    titleEl.textContent = inst ? inst.name[state.lang] : state.detailId;
    backEl.hidden = false;
    backEl.textContent = t("back");
  }
}

function applyI18n() {
  applyI18nTextOnly();
  buildFilterUI();
  render();
}

/* ============================================================
   FILTER UI BUILDERS
============================================================ */
function buildFilterUI() {
  const wrap = $("#filter-bar");
  wrap.innerHTML = "";

  if (state.route === "home") {
    buildHomeFilterUI(wrap);
  } else {
    const meta = (typeof OFFERS !== "undefined") ? OFFERS[state.detailId] : null;
    if (meta && meta.kind === "deposit") buildDepositFilterUI(wrap);
    else if (meta && meta.kind === "stock") buildStockFilterUI(wrap);
    else buildHomeFilterUI(wrap); // fallback
  }
  // bind toggle pill listeners
  $$(".toggle-pills", wrap).forEach((seg) => {
    const group = seg.dataset.tog;
    seg.querySelectorAll("button").forEach((b) => {
      b.addEventListener("click", () => {
        getActiveFilters()[group] = b.dataset.v;
        render();
      });
    });
  });
}

function makeSearchInput(value, ph) {
  const input = el("input", { type: "text", id: "dir-search", value });
  input.placeholder = ph;
  input.addEventListener("input", (e) => {
    getActiveFilters().search = e.target.value;
    render();
  });
  return el("div", { class: "search" },
    el("span", { html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>' }).firstChild,
    input
  );
}

function makeSelect(id, options, currentVal, onChange, accentSort = false) {
  const sel = el("select", { id });
  options.forEach(([v, label]) => sel.appendChild(el("option", { value: v }, label)));
  sel.value = currentVal;
  sel.addEventListener("change", (e) => onChange(e.target.value));
  return el("div", { class: "filter" + (accentSort ? " sort" : "") }, sel);
}

function makeTogglePills(group, currentVal, options) {
  const seg = el("div", { class: "toggle-pills", "data-tog": group });
  options.forEach(([v, label]) => {
    const b = el("button", { "data-v": v }, label);
    if (v === currentVal) b.setAttribute("aria-pressed", "true");
    seg.appendChild(b);
  });
  return seg;
}

function makeToggleGroup(label, group, currentVal, options) {
  return el("div", { class: "toggle-group" },
    el("div", { class: "lbl" }, label),
    makeTogglePills(group, currentVal, options)
  );
}

function getActiveFilters() {
  if (state.route === "home") return state.filters;
  const meta = OFFERS[state.detailId];
  return state.detailFilters[meta ? meta.kind : "deposit"];
}

/* ---------- Home filter UI ---------- */
function buildHomeFilterUI(wrap) {
  const f = state.filters;
  wrap.appendChild(makeSearchInput(f.search, t("search.ph")));
  wrap.appendChild(makeSelect("sort", [
    ["relevance",   t("sort.relevance")],
    ["return.desc", t("sort.return.desc")],
    ["return.asc",  t("sort.return.asc")],
    ["risk.asc",    t("sort.risk.asc")],
    ["risk.desc",   t("sort.risk.desc")],
    ["cap.asc",     t("sort.cap.asc")],
    ["cap.desc",    t("sort.cap.desc")],
  ], f.sort, (v) => { f.sort = v; render(); }, true));
  wrap.appendChild(makeSelect("filter-risk", [
    ["all", t("filter.risk.all")],
    ["low", t("filter.risk.low")],
    ["mid", t("filter.risk.mid")],
    ["hi",  t("filter.risk.hi")],
  ], f.risk, (v) => { f.risk = v; render(); }));
  wrap.appendChild(makeSelect("filter-cap", [
    ["all", t("filter.cap.all")],
    ["low", t("filter.cap.low")],
    ["mid", t("filter.cap.mid")],
    ["hi",  t("filter.cap.hi")],
  ], f.cap, (v) => { f.cap = v; render(); }));
  wrap.appendChild(makeSelect("filter-liq", [
    ["all", t("filter.liq.all")],
    ["hi",  t("filter.liq.hi")],
    ["mid", t("filter.liq.mid")],
    ["low", t("filter.liq.low")],
  ], f.liq, (v) => { f.liq = v; render(); }));

  const toggles = el("div", { class: "toggles", style: "width: 100%" },
    makeToggleGroup(t("tog.incomeType"), "incomeType", f.incomeType, [
      ["all", t("tog.all")], ["active", t("tog.active")], ["passive", t("tog.passive")],
    ]),
    makeToggleGroup(t("tog.market"), "market", f.market, [
      ["all", t("tog.all")], ["local", t("tog.local")], ["intl", t("tog.intl")],
    ]),
    makeToggleGroup(t("tog.currency"), "currency", f.currency, [
      ["all", t("tog.all")], ["UZS", t("tog.uzs")], ["USD", t("tog.usd")],
    ]),
    makeToggleGroup(t("tog.online"), "online", f.online, [
      ["all", t("tog.all")], ["yes", t("tog.yes")], ["no", t("tog.no")],
    ]),
    makeToggleGroup(t("tog.tangible"), "tangible", f.tangible, [
      ["all", t("tog.all")], ["yes", t("tog.yes")], ["no", t("tog.no")],
    ]),
  );
  wrap.appendChild(toggles);
}

/* ---------- Deposit filter UI ---------- */
function buildDepositFilterUI(wrap) {
  const f = state.detailFilters.deposit;
  const items = OFFERS[state.detailId].items;
  const banks = Array.from(new Set(items.map((i) => i.provider)));
  banks.sort();

  wrap.appendChild(makeSearchInput(f.search, t("dep.search.ph")));
  wrap.appendChild(makeSelect("sort", [
    ["rate.desc", t("dep.sort.rate.desc")],
    ["rate.asc",  t("dep.sort.rate.asc")],
    ["term.asc",  t("dep.sort.term.asc")],
    ["term.desc", t("dep.sort.term.desc")],
    ["min.asc",   t("dep.sort.min.asc")],
    ["min.desc",  t("dep.sort.min.desc")],
  ], f.sort, (v) => { f.sort = v; render(); }, true));
  wrap.appendChild(makeSelect("filter-bank", [
    ["all", t("dep.filter.bank.all")],
    ...banks.map((b) => [b, b]),
  ], f.bank, (v) => { f.bank = v; render(); }));
  wrap.appendChild(makeSelect("filter-term", [
    ["all", t("dep.filter.term.all")],
    ["6",   t("dep.filter.term.6")],
    ["12",  t("dep.filter.term.12")],
    ["24",  t("dep.filter.term.24")],
    ["long",t("dep.filter.term.long")],
  ], f.term, (v) => { f.term = v; render(); }));

  const toggles = el("div", { class: "toggles", style: "width: 100%" },
    makeToggleGroup(t("dep.tog.cap"), "capitalization", f.capitalization, [
      ["all", t("dep.tog.all")], ["monthly", t("dep.tog.monthly")], ["end", t("dep.tog.end")],
    ]),
    makeToggleGroup(t("dep.tog.early"), "earlyWithdrawal", f.earlyWithdrawal, [
      ["all", t("dep.tog.all")], ["yes", t("dep.tog.yes")], ["partial", t("dep.tog.partial")], ["no", t("dep.tog.no")],
    ]),
    makeToggleGroup(t("dep.tog.online"), "onlineOpen", f.onlineOpen, [
      ["all", t("dep.tog.all")], ["yes", t("dep.tog.yes")], ["no", t("dep.tog.no")],
    ]),
  );
  wrap.appendChild(toggles);
}

/* ---------- Stock filter UI ---------- */
function buildStockFilterUI(wrap) {
  const f = state.detailFilters.stock;
  const items = OFFERS[state.detailId].items;
  const sectors = Array.from(new Set(items.map((i) => i.sector)));

  wrap.appendChild(makeSearchInput(f.search, t("stk.search.ph")));
  wrap.appendChild(makeSelect("sort", [
    ["div.desc",    t("stk.sort.div.desc")],
    ["div.asc",     t("stk.sort.div.asc")],
    ["change.desc", t("stk.sort.change.desc")],
    ["change.asc",  t("stk.sort.change.asc")],
    ["cap.desc",    t("stk.sort.cap.desc")],
    ["cap.asc",     t("stk.sort.cap.asc")],
    ["price.desc",  t("stk.sort.price.desc")],
    ["price.asc",   t("stk.sort.price.asc")],
  ], f.sort, (v) => { f.sort = v; render(); }, true));
  wrap.appendChild(makeSelect("filter-sector", [
    ["all", t("stk.filter.sector.all")],
    ...sectors.map((s) => [s, t("sec." + s)]),
  ], f.sector, (v) => { f.sector = v; render(); }));
  wrap.appendChild(makeSelect("filter-liq", [
    ["all", t("stk.filter.liq.all")],
    ["hi",  t("filter.liq.hi")],
    ["mid", t("filter.liq.mid")],
    ["low", t("filter.liq.low")],
  ], f.liq, (v) => { f.liq = v; render(); }));

  const toggles = el("div", { class: "toggles", style: "width: 100%" },
    makeToggleGroup(t("stk.tog.dividend"), "dividend", f.dividend, [
      ["all", t("stk.tog.all")], ["yes", t("stk.tog.div.yes")], ["no", t("stk.tog.div.no")],
    ]),
    makeToggleGroup(t("stk.tog.movement"), "movement", f.movement, [
      ["all", t("stk.tog.all")], ["up", t("stk.tog.up")], ["down", t("stk.tog.down")],
    ]),
    makeToggleGroup(t("stk.tog.ipo"), "ipo", f.ipo, [
      ["all", t("stk.tog.all")], ["yes", t("stk.tog.ipo.yes")],
    ]),
  );
  wrap.appendChild(toggles);
}

/* ============================================================
   FILTER + SORT — HOME (directions)
============================================================ */
function filterAndSortDirections() {
  let list = INSTRUMENTS.slice();
  const f = state.filters;
  if (f.search) {
    const q = f.search.toLowerCase().trim();
    list = list.filter((i) => [i.name[state.lang], i.sub[state.lang]].join(" ").toLowerCase().includes(q));
  }
  if (f.risk !== "all") list = list.filter((i) => i.risk === f.risk);
  if (f.cap  !== "all") list = list.filter((i) => i.cap  === f.cap);
  if (f.liq  !== "all") list = list.filter((i) => i.liq  === f.liq);
  if (f.incomeType !== "all") list = list.filter((i) => i.income === f.incomeType);
  if (f.market     !== "all") list = list.filter((i) => i.market === f.market);
  if (f.currency   !== "all") list = list.filter((i) => i.currency === f.currency);
  if (f.online     !== "all") list = list.filter((i) => i.online === f.online);
  if (f.tangible   !== "all") list = list.filter((i) => i.tangible === f.tangible);

  const s = f.sort;
  if (s === "return.desc") list.sort((a, b) => b.retMid - a.retMid);
  else if (s === "return.asc")  list.sort((a, b) => a.retMid - b.retMid);
  else if (s === "risk.asc")    list.sort((a, b) => RISK_RANK[a.risk] - RISK_RANK[b.risk]);
  else if (s === "risk.desc")   list.sort((a, b) => RISK_RANK[b.risk] - RISK_RANK[a.risk]);
  else if (s === "cap.asc")     list.sort((a, b) => a.minCapUSD - b.minCapUSD);
  else if (s === "cap.desc")    list.sort((a, b) => b.minCapUSD - a.minCapUSD);
  return list;
}

/* ============================================================
   FILTER + SORT — OFFERS
============================================================ */
function filterAndSortDeposits(items) {
  const f = state.detailFilters.deposit;
  let list = items.slice();
  if (f.search) {
    const q = f.search.toLowerCase().trim();
    list = list.filter((o) => [o.provider, o.name[state.lang]].join(" ").toLowerCase().includes(q));
  }
  if (f.bank !== "all") list = list.filter((o) => o.provider === f.bank);
  if (f.term !== "all") {
    list = list.filter((o) => {
      const term = o.term;
      if (f.term === "long") return term > 24;
      const n = parseInt(f.term, 10);
      return term <= n;
    });
  }
  if (f.capitalization !== "all")  list = list.filter((o) => o.capitalization === f.capitalization);
  if (f.earlyWithdrawal !== "all") list = list.filter((o) => o.earlyWithdrawal === f.earlyWithdrawal);
  if (f.onlineOpen !== "all")      list = list.filter((o) => o.onlineOpen === f.onlineOpen);

  const minOf = (o) => o.minUSD != null ? o.minUSD : o.minUZS;
  const s = f.sort;
  if (s === "rate.desc") list.sort((a, b) => b.rate - a.rate);
  else if (s === "rate.asc")  list.sort((a, b) => a.rate - b.rate);
  else if (s === "term.asc")  list.sort((a, b) => a.term - b.term);
  else if (s === "term.desc") list.sort((a, b) => b.term - a.term);
  else if (s === "min.asc")   list.sort((a, b) => minOf(a) - minOf(b));
  else if (s === "min.desc")  list.sort((a, b) => minOf(b) - minOf(a));
  return list;
}

function filterAndSortStocks(items) {
  const f = state.detailFilters.stock;
  let list = items.slice();
  if (f.search) {
    const q = f.search.toLowerCase().trim();
    list = list.filter((o) => [o.ticker, o.name[state.lang]].join(" ").toLowerCase().includes(q));
  }
  if (f.sector !== "all") list = list.filter((o) => o.sector === f.sector);
  if (f.liq !== "all")    list = list.filter((o) => o.liq === f.liq);
  if (f.dividend !== "all") list = list.filter((o) => (f.dividend === "yes" ? o.divYield > 0 : o.divYield === 0));
  if (f.movement !== "all") list = list.filter((o) => (f.movement === "up" ? o.change30d > 0 : o.change30d < 0));
  if (f.ipo !== "all")    list = list.filter((o) => (f.ipo === "yes" ? !!o.ipo : true));

  const s = f.sort;
  if (s === "div.desc")        list.sort((a, b) => b.divYield - a.divYield);
  else if (s === "div.asc")    list.sort((a, b) => a.divYield - b.divYield);
  else if (s === "change.desc") list.sort((a, b) => b.change30d - a.change30d);
  else if (s === "change.asc")  list.sort((a, b) => a.change30d - b.change30d);
  else if (s === "cap.desc")   list.sort((a, b) => b.marketCapB - a.marketCapB);
  else if (s === "cap.asc")    list.sort((a, b) => a.marketCapB - b.marketCapB);
  else if (s === "price.desc") list.sort((a, b) => b.priceUZS - a.priceUZS);
  else if (s === "price.asc")  list.sort((a, b) => a.priceUZS - b.priceUZS);
  return list;
}

/* ============================================================
   RENDER DISPATCH
============================================================ */
function render() {
  syncTogglesPressed();
  if (state.route === "home") renderHome();
  else renderDetail();
  renderActiveFilters();
}

function syncTogglesPressed() {
  const f = getActiveFilters();
  $$(".toggle-pills").forEach((seg) => {
    const group = seg.dataset.tog;
    seg.querySelectorAll("button").forEach((b) => {
      b.setAttribute("aria-pressed", b.dataset.v === f[group] ? "true" : "false");
    });
  });
}

/* ---------- Home rendering (directions grid) ---------- */
function renderHome() {
  const list = filterAndSortDirections();
  renderLiveStatsHome(list);
  const grid = $("#dir-grid");
  grid.innerHTML = "";
  grid.className = "instr-grid";
  if (list.length === 0) {
    grid.appendChild(el("div", { class: "empty" },
      el("h3", null, t("catalog.empty.title")),
      el("p", null, t("catalog.empty.body"))
    ));
    return;
  }
  list.forEach((i) => grid.appendChild(buildInstrCard(i)));
}

function renderLiveStatsHome(list) {
  const wrap = $("#live-stats");
  if (!wrap) return;
  wrap.innerHTML = "";

  const countV = el("div", { class: "v" });
  countV.appendChild(el("span", { class: "acc" }, String(list.length)));
  if (list.length === 0) countV.classList.add("empty");
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.count")),
    countV
  ));

  let marketsV;
  if (list.length === 0) {
    marketsV = el("div", { class: "v empty" }, "—");
  } else {
    const set = new Set(list.map((i) => i.market));
    if (set.has("local") && set.has("intl")) marketsV = el("div", { class: "v" }, t("tog.local") + " · " + t("tog.intl"));
    else if (set.has("local"))               marketsV = el("div", { class: "v" }, t("tog.local"));
    else                                     marketsV = el("div", { class: "v" }, t("tog.intl"));
  }
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.markets")),
    marketsV
  ));

  let minV;
  if (list.length === 0) {
    minV = el("div", { class: "v empty" }, "—");
  } else {
    const wantUSD = state.filters.currency === "USD";
    const preferred = list.filter((i) => i.currency === (wantUSD ? "USD" : "UZS"));
    const pool = preferred.length > 0 ? preferred : list;
    const cheapest = pool.reduce((m, i) => i.minCapUSD < m.minCapUSD ? i : m, pool[0]);
    minV = el("div", { class: "v" }, cheapest.minCapLabel[state.lang]);
  }
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.minentry")),
    minV
  ));
}

function buildInstrCard(inst) {
  const riskBadge   = el("span", { class: "badge risk-" + inst.risk }, t("risk." + inst.risk));
  const onlineBadge = el("span", { class: "badge " + (inst.online === "yes" ? "online" : "offline") },
                          inst.online === "yes" ? t("online.yes") : t("online.no"));

  const retStrip = el("div", { class: "ret-strip" },
    el("span", { class: "lbl" }, t("metric.return")),
    el("span", { class: "val" }, inst.retLabel[state.lang])
  );

  const metrics = el("div", { class: "metrics" },
    el("div", { class: "metric" }, el("div", { class: "k" }, t("metric.mincap")), el("div", { class: "v" }, inst.minCapLabel[state.lang])),
    el("div", { class: "metric" }, el("div", { class: "k" }, t("metric.liq")),    el("div", { class: "v" }, t("liq." + inst.liq)))
  );

  const tags = el("div", { class: "tags" });
  tags.appendChild(el("span", { class: "tag" }, t("tag." + inst.market)));
  tags.appendChild(el("span", { class: "tag" }, t("tag." + inst.income)));
  if (inst.tangible === "yes") tags.appendChild(el("span", { class: "tag" }, t("tag.tangible")));

  const pros = el("div", { class: "proscons" });
  inst.pros[state.lang].slice(0, 2).forEach((p) => pros.appendChild(el("div", { class: "ln" }, p)));
  inst.cons[state.lang].slice(0, 1).forEach((p) => pros.appendChild(el("div", { class: "ln con" }, p)));

  const cxDots = el("span", { class: "dots" });
  const cxLevel = { low: 1, mid: 2, hi: 3 }[inst.complexity];
  for (let i = 0; i < 3; i++) cxDots.appendChild(el("i", { class: i < cxLevel ? "on" : "" }));

  const hasOffers = (typeof OFFERS !== "undefined") && !!OFFERS[inst.id];
  const cardCls = "card instr-card interactive" + (hasOffers ? " clickable" : "");
  const card = el("div", { class: cardCls },
    el("div", { class: "top" },
      el("div", null,
        el("div", { class: "name" }, inst.name[state.lang]),
        el("div", { class: "sub" }, inst.sub[state.lang])
      ),
      el("div", { class: "badges" }, riskBadge, onlineBadge)
    ),
    retStrip,
    metrics,
    tags,
    pros,
    el("div", { class: "instr-foot" },
      el("a", { class: "link", href: hasOffers ? "#detail/" + inst.id : "#" },
        hasOffers ? t("card.detail") : t("detail.empty.title"),
        el("span", null, "→")
      ),
      el("span", { class: "complexity-pill" }, t("metric.cx") + ":", cxDots)
    )
  );
  if (hasOffers) {
    card.addEventListener("click", (e) => {
      if (e.target.tagName === "A" || e.target.closest("a")) return;
      navigate("detail/" + inst.id);
    });
  }
  return card;
}

/* ---------- Detail rendering (offers grid) ---------- */
function renderDetail() {
  const meta = (typeof OFFERS !== "undefined") ? OFFERS[state.detailId] : null;
  const grid = $("#dir-grid");
  grid.innerHTML = "";
  grid.className = "instr-grid";

  if (!meta) {
    renderLiveStatsEmpty();
    grid.appendChild(el("div", { class: "empty" },
      el("h3", null, t("detail.empty.title")),
      el("p", null, t("detail.empty.body"))
    ));
    return;
  }

  if (meta.kind === "deposit") {
    const list = filterAndSortDeposits(meta.items);
    renderLiveStatsDeposit(list, meta);
    if (list.length === 0) {
      grid.appendChild(el("div", { class: "empty" },
        el("h3", null, t("catalog.empty.title")),
        el("p", null, t("catalog.empty.body"))
      ));
    } else {
      list.forEach((o) => grid.appendChild(buildDepositCard(o, meta)));
    }
  } else if (meta.kind === "stock") {
    const list = filterAndSortStocks(meta.items);
    renderLiveStatsStock(list);
    if (list.length === 0) {
      grid.appendChild(el("div", { class: "empty" },
        el("h3", null, t("catalog.empty.title")),
        el("p", null, t("catalog.empty.body"))
      ));
    } else {
      list.forEach((o) => grid.appendChild(buildStockCard(o)));
    }
  }
}

function renderLiveStatsEmpty() {
  const wrap = $("#live-stats");
  wrap.innerHTML = "";
}

function renderLiveStatsDeposit(list, meta) {
  const wrap = $("#live-stats");
  wrap.innerHTML = "";

  // count
  const countV = el("div", { class: "v" });
  countV.appendChild(el("span", { class: "acc" }, String(list.length)));
  if (list.length === 0) countV.classList.add("empty");
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.offers")),
    countV
  ));

  if (list.length === 0) {
    wrap.appendChild(el("div", { class: "live-stat" },
      el("div", { class: "k" }, t("head.stat.bestRate")),
      el("div", { class: "v empty" }, "—")
    ));
    wrap.appendChild(el("div", { class: "live-stat" },
      el("div", { class: "k" }, t("head.stat.minEntry")),
      el("div", { class: "v empty" }, "—")
    ));
    return;
  }

  // best rate
  const best = list.reduce((m, o) => o.rate > m.rate ? o : m, list[0]);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestRate")),
    el("div", { class: "v" }, best.rate + "%")
  ));

  // min entry
  const cheapest = list.reduce((m, o) => {
    const a = o.minUSD != null ? o.minUSD * 12500 : o.minUZS;
    const b = m.minUSD != null ? m.minUSD * 12500 : m.minUZS;
    return a < b ? o : m;
  }, list[0]);
  const minLabel = meta.currency === "USD"
    ? "$ " + cheapest.minUSD
    : fmtUZSFull(cheapest.minUZS, state.lang);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.minEntry")),
    el("div", { class: "v" }, minLabel)
  ));
}

function renderLiveStatsStock(list) {
  const wrap = $("#live-stats");
  wrap.innerHTML = "";

  const countV = el("div", { class: "v" });
  countV.appendChild(el("span", { class: "acc" }, String(list.length)));
  if (list.length === 0) countV.classList.add("empty");
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.offers")),
    countV
  ));

  if (list.length === 0) {
    wrap.appendChild(el("div", { class: "live-stat" },
      el("div", { class: "k" }, t("head.stat.bestDiv")),
      el("div", { class: "v empty" }, "—")
    ));
    wrap.appendChild(el("div", { class: "live-stat" },
      el("div", { class: "k" }, t("head.stat.bestChange")),
      el("div", { class: "v empty" }, "—")
    ));
    return;
  }

  const bestDiv = list.reduce((m, o) => o.divYield > m.divYield ? o : m, list[0]);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestDiv")),
    el("div", { class: "v" }, bestDiv.divYield.toFixed(1) + "%")
  ));

  const bestChange = list.reduce((m, o) => o.change30d > m.change30d ? o : m, list[0]);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestChange")),
    el("div", { class: "v" }, (bestChange.change30d > 0 ? "+" : "") + bestChange.change30d.toFixed(1) + "%")
  ));
}

/* ---------- Offer cards ---------- */
function buildDepositCard(o, meta) {
  const termLabel = o.term + " " + t("dep.month");
  const minLabel = (o.minUSD != null) ? ("$ " + o.minUSD) : fmtUZSFull(o.minUZS, state.lang);

  const tags = el("div", { class: "otags" });
  tags.appendChild(el("span", { class: "tag" }, t("dep.cap." + o.capitalization)));
  tags.appendChild(el("span", { class: "tag" }, t("dep.early." + o.earlyWithdrawal)));
  if (o.onlineOpen === "yes") tags.appendChild(el("span", { class: "tag" }, t("dep.online") + ": " + t("dep.tog.yes")));

  return el("div", { class: "card offer-card interactive" },
    el("div", { class: "top" },
      el("div", { class: "provider" },
        el("div", { class: "pavatar" }, o.providerCode),
        el("div", null,
          el("div", { class: "pname" }, o.provider),
          el("div", { class: "pcat" }, meta.currency + " · " + t("dep.bank"))
        )
      ),
      el("span", { class: "badge online" }, o.onlineOpen === "yes" ? t("online.yes") : t("online.no"))
    ),
    el("div", { class: "oname" }, o.name[state.lang]),
    el("div", { class: "rate-strip" },
      el("span", { class: "lbl" }, t("dep.rate")),
      el("span", { class: "val" }, o.rate + "%")
    ),
    el("div", { class: "metrics" },
      el("div", { class: "metric" }, el("div", { class: "k" }, t("dep.term")), el("div", { class: "v" }, termLabel)),
      el("div", { class: "metric" }, el("div", { class: "k" }, t("dep.min")),  el("div", { class: "v" }, minLabel))
    ),
    tags,
    el("div", { class: "ofoot" },
      el("a", { class: "external-link", href: o.url, target: "_blank", rel: "noopener" },
        t("go.bank"),
        el("span", null, "↗")
      )
    )
  );
}

function buildStockCard(o) {
  const changeCls = o.change30d > 0 ? "up" : o.change30d < 0 ? "down" : "flat";
  const changeStr = (o.change30d > 0 ? "+" : "") + o.change30d.toFixed(1) + "%";
  const priceLabel = o.priceUZS.toLocaleString("ru-RU") + " " + ({ uz: "so'm", ru: "сум", en: "UZS" }[state.lang]);
  const capLabel = o.marketCapB + " " + ({ uz: "mlrd so'm", ru: "млрд сум", en: "B UZS" }[state.lang]);

  const tags = el("div", { class: "otags" });
  tags.appendChild(el("span", { class: "tag" }, t("sec." + o.sector)));
  tags.appendChild(el("span", { class: "tag" }, t("stk.liq") + ": " + t("liq." + o.liq)));
  if (o.ipo) tags.appendChild(el("span", { class: "tag", style: "color: var(--accent); border-color: rgba(217,184,113,0.30); background: rgba(217,184,113,0.08)" }, "★ " + t("stk.ipo")));

  return el("div", { class: "card offer-card interactive" },
    el("div", { class: "top" },
      el("div", { class: "provider" },
        el("div", { class: "pavatar" }, o.ticker.slice(0, 2)),
        el("div", null,
          el("div", { class: "ticker-row" },
            el("span", { class: "ticker" }, o.ticker),
            el("span", { class: "change-badge " + changeCls }, changeStr)
          ),
          el("div", { class: "pcat" }, "TSE · " + t("sec." + o.sector))
        )
      )
    ),
    el("div", { class: "oname" }, o.name[state.lang]),
    el("div", { class: "rate-strip" },
      el("span", { class: "lbl" }, t("stk.div")),
      el("span", { class: "val" }, o.divYield === 0 ? "—" : o.divYield.toFixed(1) + "%")
    ),
    el("div", { class: "metrics" },
      el("div", { class: "metric" }, el("div", { class: "k" }, t("stk.price")), el("div", { class: "v" }, priceLabel)),
      el("div", { class: "metric" }, el("div", { class: "k" }, t("stk.cap")),   el("div", { class: "v" }, capLabel))
    ),
    tags,
    el("div", { class: "ofoot" },
      el("a", { class: "external-link", href: o.url, target: "_blank", rel: "noopener" },
        t("go.stock"),
        el("span", null, "↗")
      )
    )
  );
}

/* ============================================================
   ACTIVE FILTER CHIPS
============================================================ */
function renderActiveFilters() {
  const wrap = $("#active-filters");
  wrap.innerHTML = "";
  let chips = [];

  if (state.route === "home") {
    const f = state.filters;
    if (f.risk !== "all")  chips.push(["risk",  t("filter.risk." + f.risk)]);
    if (f.cap  !== "all")  chips.push(["cap",   t("filter.cap." + f.cap)]);
    if (f.liq  !== "all")  chips.push(["liq",   t("filter.liq." + f.liq)]);
    if (f.incomeType !== "all") chips.push(["incomeType", t("tog." + f.incomeType)]);
    if (f.market !== "all")     chips.push(["market", t("tog." + f.market)]);
    if (f.currency !== "all")   chips.push(["currency", t("tog.currency") + ": " + f.currency]);
    if (f.online !== "all")     chips.push(["online", t("tog.online") + ": " + t("tog." + f.online)]);
    if (f.tangible !== "all")   chips.push(["tangible", t("tog.tangible") + ": " + t("tog." + f.tangible)]);
    if (f.sort !== "relevance") chips.push(["sort", t("sort." + f.sort)]);
    if (f.search) chips.push(["search", "« " + f.search + " »"]);
  } else {
    const meta = OFFERS[state.detailId];
    if (!meta) { $("#clear-all").style.visibility = "hidden"; return; }
    const f = state.detailFilters[meta.kind];
    if (meta.kind === "deposit") {
      if (f.bank !== "all") chips.push(["bank", t("dep.bank") + ": " + f.bank]);
      if (f.term !== "all") chips.push(["term", t("dep.filter.term." + f.term)]);
      if (f.capitalization !== "all") chips.push(["capitalization", t("dep.tog.cap") + ": " + t("dep.tog." + f.capitalization)]);
      if (f.earlyWithdrawal !== "all") chips.push(["earlyWithdrawal", t("dep.tog.early") + ": " + t("dep.tog." + f.earlyWithdrawal)]);
      if (f.onlineOpen !== "all") chips.push(["onlineOpen", t("dep.online") + ": " + t("dep.tog." + f.onlineOpen)]);
      if (f.sort !== "rate.desc") chips.push(["sort", t("dep.sort." + f.sort)]);
      if (f.search) chips.push(["search", "« " + f.search + " »"]);
    } else if (meta.kind === "stock") {
      if (f.sector !== "all") chips.push(["sector", t("sec." + f.sector)]);
      if (f.liq !== "all")    chips.push(["liq", t("liq." + f.liq)]);
      if (f.dividend !== "all") chips.push(["dividend", t("stk.div") + ": " + t("stk.tog.div." + f.dividend)]);
      if (f.movement !== "all") chips.push(["movement", t("stk.tog.movement") + ": " + t("stk.tog." + f.movement)]);
      if (f.ipo !== "all")    chips.push(["ipo", t("stk.tog.ipo.yes")]);
      if (f.sort !== "div.desc") chips.push(["sort", t("stk.sort." + f.sort)]);
      if (f.search) chips.push(["search", "« " + f.search + " »"]);
    }
  }

  chips.forEach(([key, label]) => {
    wrap.appendChild(el("span", { class: "active-chip" },
      label,
      el("span", { class: "x", onclick: () => clearOne(key) }, "✕")
    ));
  });

  $("#clear-all").style.visibility = chips.length > 0 ? "visible" : "hidden";
}

function clearOne(key) {
  const f = getActiveFilters();
  if (state.route === "home") {
    if (key === "sort") f.sort = "relevance";
    else if (key === "search") { f.search = ""; }
    else f[key] = "all";
  } else {
    const meta = OFFERS[state.detailId];
    const defaultSort = meta.kind === "deposit" ? "rate.desc" : "div.desc";
    if (key === "sort") f.sort = defaultSort;
    else if (key === "search") { f.search = ""; }
    else f[key] = "all";
  }
  buildFilterUI();
  render();
}

function clearAll() {
  if (state.route === "home") {
    state.filters = {
      search: "", sort: "relevance",
      risk: "all", cap: "all", liq: "all",
      incomeType: "all", market: "all", currency: "all", online: "all", tangible: "all",
    };
  } else {
    const meta = OFFERS[state.detailId];
    if (meta.kind === "deposit") {
      state.detailFilters.deposit = {
        search: "", sort: "rate.desc",
        bank: "all", term: "all",
        capitalization: "all", earlyWithdrawal: "all", onlineOpen: "all",
      };
    } else if (meta.kind === "stock") {
      state.detailFilters.stock = {
        search: "", sort: "div.desc",
        sector: "all", liq: "all", div: "all",
        dividend: "all", movement: "all", ipo: "all",
      };
    }
  }
  buildFilterUI();
  render();
}

/* ============================================================
   BOOT
============================================================ */
function boot() {
  syncRouteFromHash();

  $$("#lang-switch button").forEach((b) => {
    b.addEventListener("click", () => {
      state.lang = b.dataset.lang;
      applyI18n();
    });
  });

  $("#brand").addEventListener("click", () => navigate(""));
  $("#back-link").addEventListener("click", () => navigate(""));

  $("#clear-all").addEventListener("click", clearAll);

  window.addEventListener("hashchange", syncRouteFromHash);
}

if (document.readyState !== "loading") boot();
else document.addEventListener("DOMContentLoaded", boot);

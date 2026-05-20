/* ============================================================
   INVEST NAVIGATOR — KATALOG
   ============================================================ */

const I18N = {
  uz: {
    "head.eyebrow": "Kategoriya · MVP",
    "head.title": "Investitsiya instrumentlari <em>kategoriyalari</em>",
    "head.stat.count": "Kategoriyalar soni",
    "head.stat.markets": "Bozorlar",
    "head.stat.markets.v": "Lokal · Xalqaro",
    "head.stat.minentry": "Eng past kirish",
    "head.stat.minentry.v": "$ 50",

    "search.ph": "Kategoriya nomi yoki kalit so'z…",

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

    "catalog.title": "Kategoriya",
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
    "card.close": "Yopish",

    "compare.toggle": "Solishtirish",
    "compare.eyebrow": "Kategoriyalar solishtiruvi",
    "compare.title.n": "{n} kategoriya solishtirilmoqda",
    "compare.clear": "Bekor qilish",
    "compare.hintOne": "Yana 1 kategoriyani «Solishtirish» tugmasi bilan tanlang — grafik shu yerda paydo bo'ladi",
    "compare.legend": "Liniyalar",

    "expand.eyebrow": "Kategoriya dinamikasi",
    "expand.past": "Tarixiy o'sish (24 oy)",
    "expand.forecast": "Tahmin (12 oy)",
    "expand.volatility": "Volatillik",
    "expand.benchmark": "Inflyatsiya",
    "expand.topOffers": "Top takliflar",
    "expand.allOffers": "Barcha takliflar",
    "expand.noOffers": "Takliflar hali tayyorlanmoqda",
    "expand.axis.past": "Tarixiy",
    "expand.axis.future": "Tahmin",
    "expand.axis.today": "Bugun",
    "expand.month": "oy",
    "expand.disclaimer": "Tahmin tarixiy o'rtacha asosida modellashtirilgan, kafolat emas.",

    "chart.amount":     "Investitsiya summasi",
    "chart.date":       "Kiritish sanasi",
    "chart.date.today": "Bugun",
    "chart.date.1yr":   "1 yil oldin",
    "chart.date.2yr":   "2 yil oldin",

    "disclaimer.title": "Bu moliyaviy maslahat emas",
    "disclaimer.body": "Katalog faqat ta'lim va informatsion maqsadda taqdim etilgan. Investitsiya qarorlarini qabul qilishdan oldin mustaqil tahlil qiling yoki litsenziyalangan mutaxassis bilan maslahat qiling.",
    "footer.note": "© 2026 Invest Navigator · O'zbekiston",
    "footer.version": "Kategoriya v0.1 · MVP",
  },

  ru: {
    "head.eyebrow": "Категории · MVP",
    "head.title": "Категории инвестиционных <em>инструментов</em>",
    "head.stat.count": "Количество категорий",
    "head.stat.markets": "Рынки",
    "head.stat.markets.v": "Локальный · Международный",
    "head.stat.minentry": "Минимальный вход",
    "head.stat.minentry.v": "$ 50",

    "search.ph": "Название категории или ключевое слово…",

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

    "catalog.title": "Категории",
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
    "card.close": "Закрыть",

    "compare.toggle": "Сравнить",
    "compare.eyebrow": "Сравнение категорий",
    "compare.title.n": "Сравнение {n} категорий",
    "compare.clear": "Отменить",
    "compare.hintOne": "Выберите ещё 1 категорию кнопкой «Сравнить» — график появится здесь",
    "compare.legend": "Линии",

    "expand.eyebrow": "Динамика категории",
    "expand.past": "Рост за 24 мес",
    "expand.forecast": "Прогноз 12 мес",
    "expand.volatility": "Волатильность",
    "expand.benchmark": "Инфляция",
    "expand.topOffers": "Топ предложений",
    "expand.allOffers": "Все предложения",
    "expand.noOffers": "Предложения готовятся",
    "expand.axis.past": "Историч.",
    "expand.axis.future": "Прогноз",
    "expand.axis.today": "Сегодня",
    "expand.month": "мес",
    "expand.disclaimer": "Прогноз построен на исторических средних, не является гарантией.",

    "chart.amount":     "Сумма инвестиции",
    "chart.date":       "Дата входа",
    "chart.date.today": "Сегодня",
    "chart.date.1yr":   "1 год назад",
    "chart.date.2yr":   "2 года назад",

    "disclaimer.title": "Это не финансовая консультация",
    "disclaimer.body": "Каталог предоставлен исключительно в образовательных и информационных целях. Перед принятием инвестрешений проведите самостоятельный анализ или проконсультируйтесь с лицензированным специалистом.",
    "footer.note": "© 2026 Invest Navigator · Узбекистан",
    "footer.version": "Категории v0.1 · MVP",
  },

  en: {
    "head.eyebrow": "Categories · MVP",
    "head.title": "Investment instrument <em>categories</em>",
    "head.stat.count": "Categories listed",
    "head.stat.markets": "Markets",
    "head.stat.markets.v": "Local · International",
    "head.stat.minentry": "Lowest entry",
    "head.stat.minentry.v": "$ 50",

    "search.ph": "Category name or keyword…",

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

    "catalog.title": "Categories",
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
    "card.close": "Close",

    "compare.toggle": "Compare",
    "compare.eyebrow": "Category comparison",
    "compare.title.n": "Comparing {n} categories",
    "compare.clear": "Clear",
    "compare.hintOne": "Toggle «Compare» on one more category — the chart will appear here",
    "compare.legend": "Lines",

    "expand.eyebrow": "Category performance",
    "expand.past": "24mo growth",
    "expand.forecast": "12mo forecast",
    "expand.volatility": "Volatility",
    "expand.benchmark": "Inflation",
    "expand.topOffers": "Top offers",
    "expand.allOffers": "All offers",
    "expand.noOffers": "Offers in preparation",
    "expand.axis.past": "Historical",
    "expand.axis.future": "Forecast",
    "expand.axis.today": "Today",
    "expand.month": "mo",
    "expand.disclaimer": "Forecast modeled from historical averages, not a guarantee.",

    "chart.amount":     "Investment amount",
    "chart.date":       "Entry date",
    "chart.date.today": "Today",
    "chart.date.1yr":   "1 yr ago",
    "chart.date.2yr":   "2 yrs ago",

    "disclaimer.title": "This is not financial advice",
    "disclaimer.body": "The catalog is provided for educational and informational purposes only. Do your own research or consult a licensed professional before making investment decisions.",
    "footer.note": "© 2026 Invest Navigator · Uzbekistan",
    "footer.version": "Categories v0.1 · MVP",
  },
};

/* ============================================================
   INSTRUMENT DATASET
   ============================================================ */
const INSTRUMENTS = [
  {
    id: "deposit-uzs",
    name: { uz: "Bank depoziti (UZS)", ru: "Депозит (UZS)", en: "Bank deposit (UZS)" },
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
    name: { uz: "Bank depoziti (USD)", ru: "Депозит (USD)", en: "Bank deposit (USD)" },
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
    name: { uz: "Davlat obligatsiyalari", ru: "Гос. облигации", en: "Government bonds" },
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
    id: "mudaraba",
    name: { uz: "Mudaraba", ru: "Мударабa", en: "Mudaraba" },
    sub:  { uz: "Islom moliyasi · UZS", ru: "Исламские финансы · UZS", en: "Islamic finance · UZS" },
    risk: "low", cap: "low", liq: "low",
    income: "passive", market: "local", currency: "UZS", online: "yes", tangible: "no",
    sharia: "compliant",
    retMid: 16, retLabel: { uz: "14–18% yillik", ru: "14–18% годовых", en: "14–18% annual" },
    minCapUSD: 40, minCapLabel: { uz: "500 000 so'm", ru: "500 000 сум", en: "500K UZS" },
    complexity: "low",
    pros: {
      uz: ["Shariat talablariga to'liq mos", "Barqaror kutilgan daromad", "Davlat nazoratida"],
      ru: ["Полностью соответствует шариату", "Стабильный ожидаемый доход", "Под государственным надзором"],
      en: ["Fully Shariah-compliant", "Stable expected return", "State-supervised"],
    },
    cons: {
      uz: ["Past likvidlik", "Faqat mahalliy provayderlar", "Kafolatlanmagan daromad"],
      ru: ["Низкая ликвидность", "Только местные провайдеры", "Доход не застрахован"],
      en: ["Low liquidity", "Local providers only", "Non-guaranteed return"],
    },
  },
  {
    id: "tse",
    name: { uz: "Toshkent fond birjasi", ru: "Биржа (TSE)", en: "Stock Exchange (TSE)" },
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
    name: { uz: "Indeks ETF (S&P 500)", ru: "ETF (S&P 500)", en: "Index ETF (S&P 500)" },
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
    retMid: 65, retLabel: { uz: "±50%+ volatil", ru: "±50%+ волатильно", en: "±50%+ volatile" },
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
    id: "precious-metals",
    name: { uz: "Qimmatbaho metallar", ru: "Драгоценные металлы", en: "Precious Metals" },
    sub:  { uz: "Oltin · Kumush · Platina · USD", ru: "Золото · Серебро · Платина · USD", en: "Gold · Silver · Platinum · USD" },
    risk: "low", cap: "mid", liq: "mid",
    income: "passive", market: "intl", currency: "USD", online: "yes", tangible: "yes",
    sharia: "compliant",
    retMid: 7.5, retLabel: { uz: "5–12% yillik", ru: "5–12% годовых", en: "5–12% annual" },
    minCapUSD: 50, minCapLabel: { uz: "$ 50", ru: "$ 50", en: "$ 50" },
    complexity: "low",
    pros: {
      uz: ["Inflyatsiyadan himoya", "Asrlik aktiv", "Real aktiv qo'lda"],
      ru: ["Защита от инфляции", "Вековой актив", "Реальный актив на руках"],
      en: ["Inflation hedge", "Time-tested asset", "Tangible asset"],
    },
    cons: {
      uz: ["Daromad bermaydi (faqat qiymat o'sishi)", "Saqlash xarajatlari"],
      ru: ["Нет купонного дохода", "Расходы на хранение"],
      en: ["No yield (price growth only)", "Storage costs"],
    },
  },
  {
    id: "gems",
    name: { uz: "Qimmatbaho toshlar", ru: "Драгоценные камни", en: "Precious Stones" },
    sub:  { uz: "Olmoslar · Aleksandrit · USD", ru: "Бриллианты · Александрит · USD", en: "Diamonds · Alexandrite · USD" },
    risk: "mid", cap: "mid", liq: "low",
    income: "passive", market: "intl", currency: "USD", online: "no", tangible: "yes",
    sharia: "compliant",
    retMid: 22, retLabel: { uz: "10–35% yillik", ru: "10–35% годовых", en: "10–35% annual" },
    minCapUSD: 500, minCapLabel: { uz: "$ 500", ru: "$ 500", en: "$ 500" },
    complexity: "hi",
    pros: {
      uz: ["Yuqori potentsial o'sish", "Noyob va cheklangan resurs", "Real aktiv qo'lda"],
      ru: ["Высокий потенциал роста", "Редкий и ограниченный ресурс", "Реальный актив на руках"],
      en: ["High growth potential", "Rare and limited resource", "Tangible asset"],
    },
    cons: {
      uz: ["Autentifikatsiya xarajatlari", "Past likvidlik", "Ekspertiza talab qiladi"],
      ru: ["Затраты на аутентификацию", "Низкая ликвидность", "Требует экспертизы"],
      en: ["Authentication costs", "Low liquidity", "Requires expertise"],
    },
  },
  {
    id: "gaming",
    name: { uz: "O'yin aktivlari", ru: "Игровые активы", en: "Gaming Assets" },
    sub:  { uz: "CS2 · Dota 2 · TF2 · Rust", ru: "CS2 · Dota 2 · TF2 · Rust", en: "CS2 · Dota 2 · TF2 · Rust" },
    risk: "hi", cap: "low", liq: "mid",
    income: "active", market: "intl", currency: "USD", online: "yes", tangible: "no",
    sharia: "absent",
    retMid: 35, retLabel: { uz: "±30%+ volatil", ru: "±30%+ волатильно", en: "±30%+ volatile" },
    minCapUSD: 50, minCapLabel: { uz: "$ 50", ru: "$ 50", en: "$ 50" },
    complexity: "hi",
    pros: {
      uz: ["Past kirish summasi", "Yuqori likvidlik (Steam)", "Global bozor"],
      ru: ["Низкий порог входа", "Высокая ликвидность (Steam)", "Глобальный рынок"],
      en: ["Low entry threshold", "High liquidity (Steam)", "Global market"],
    },
    cons: {
      uz: ["Yuqori volatillik", "Platform riski (Steam)", "Spekulyativ xarakter"],
      ru: ["Высокая волатильность", "Риск платформы (Steam)", "Спекулятивный характер"],
      en: ["High volatility", "Platform risk (Steam)", "Speculative nature"],
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
  expandedId: null, // currently-expanded direction card on home
  compareIds: [],   // direction ids toggled into the comparison view
  chartParams: { amount: 100, startOffset: 0 }, // 0=today 12=1yr 24=2yr
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
    crypto: {
      search: "",
      sort: "cap.desc",
      network: "all",
      staking: "all",
    },
    "precious-metals": {
      search: "",
      sort: "price.desc",
      category: "all",
      liq: "all",
    },
    gems: {
      search: "",
      sort: "price.desc",
      stone: "all",
      liq: "all",
    },
    gaming: {
      search: "",
      sort: "price.desc",
      game: "all",
      wear: "all",
    },
    mudaraba: {
      search: "",
      sort: "rate.desc",
      provider: "all",
      term: "all",
      onlineOpen: "all",
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
// Y-axis compact label  ($120, $1.4K, $12K)
function fmtUSDChart(v) {
  if (Math.abs(v) >= 10000) return "$" + (v / 1000).toFixed(0) + "K";
  if (Math.abs(v) >= 1000)  return "$" + (v / 1000).toFixed(1) + "K";
  return "$" + Math.round(v);
}
// Hover tooltip precise label
function fmtUSDExact(v) {
  return "$ " + v.toFixed(v >= 100 ? 0 : 1);
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
  state.expandedId = null; // collapse any open panel on route change
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

  // page title + detail eyebrow
  const titleEl = $("#page-title");
  const eyebrowEl = $("#detail-eyebrow");
  const backEl = $("#back-link");
  if (state.route === "home") {
    titleEl.innerHTML = t("head.title");
    eyebrowEl.hidden = true;
    backEl.hidden = true;
  } else {
    const inst = INSTRUMENTS.find((i) => i.id === state.detailId);
    const offers = (typeof OFFERS !== "undefined") ? OFFERS[state.detailId] : null;
    titleEl.textContent = inst ? inst.name[state.lang] : state.detailId;
    eyebrowEl.hidden = false;
    eyebrowEl.innerHTML = "";
    eyebrowEl.appendChild(el("span", { class: "dot" }));
    eyebrowEl.appendChild(document.createTextNode(
      (inst ? inst.sub[state.lang] : "") + ((offers && offers.items) ? "  ·  " + offers.items.length + " " + t("detail.offers") : "")
    ));
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
    else if (meta && meta.kind === "crypto") buildCryptoFilterUI(wrap);
    else if (meta && meta.kind === "precious-metals") buildMetalFilterUI(wrap);
    else if (meta && meta.kind === "gems") buildGemFilterUI(wrap);
    else if (meta && meta.kind === "gaming") buildGamingFilterUI(wrap);
    else if (meta && meta.kind === "mudaraba") buildMudarabaFilterUI(wrap);
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
  const meta = (typeof OFFERS !== "undefined") ? OFFERS[state.detailId] : null;
  if (!meta) return state.detailFilters.deposit;
  return state.detailFilters[meta.kind] || state.detailFilters.deposit;
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

/* ---------- Mudaraba filter UI ---------- */
function buildMudarabaFilterUI(wrap) {
  const f = state.detailFilters.mudaraba;
  const items = OFFERS[state.detailId].items;
  const providers = Array.from(new Set(items.map((i) => i.provider)));
  providers.sort();

  wrap.appendChild(makeSearchInput(f.search, t("mdr.search.ph")));
  wrap.appendChild(makeSelect("sort", [
    ["rate.desc", t("mdr.sort.rate.desc")],
    ["rate.asc",  t("mdr.sort.rate.asc")],
    ["term.asc",  t("mdr.sort.term.asc")],
    ["term.desc", t("mdr.sort.term.desc")],
    ["min.asc",   t("mdr.sort.min.asc")],
    ["min.desc",  t("mdr.sort.min.desc")],
  ], f.sort, (v) => { f.sort = v; render(); }, true));
  wrap.appendChild(makeSelect("filter-provider", [
    ["all", t("mdr.filter.provider.all")],
    ...providers.map((p) => [p, p]),
  ], f.provider, (v) => { f.provider = v; render(); }));
  wrap.appendChild(makeSelect("filter-term", [
    ["all", t("mdr.filter.term.all")],
    ["6",   t("mdr.filter.term.6")],
    ["12",  t("mdr.filter.term.12")],
    ["24",  t("mdr.filter.term.24")],
    ["long",t("mdr.filter.term.long")],
  ], f.term, (v) => { f.term = v; render(); }));

  const toggles = el("div", { class: "toggles", style: "width: 100%" },
    makeToggleGroup(t("mdr.tog.online"), "onlineOpen", f.onlineOpen, [
      ["all", t("mdr.tog.all")], ["yes", t("mdr.tog.yes")], ["no", t("mdr.tog.no")],
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

/* ---------- Crypto filter UI ---------- */
function buildCryptoFilterUI(wrap) {
  const f = state.detailFilters.crypto;
  const items = OFFERS[state.detailId].items;
  const networks = Array.from(new Set(items.map((i) => i.network)));
  networks.sort();

  wrap.appendChild(makeSearchInput(f.search, t("crypt.search.ph")));
  wrap.appendChild(makeSelect("sort", [
    ["cap.desc",    t("crypt.sort.cap.desc")],
    ["cap.asc",     t("crypt.sort.cap.asc")],
    ["price.desc",  t("crypt.sort.price.desc")],
    ["price.asc",   t("crypt.sort.price.asc")],
    ["change.desc", t("crypt.sort.change.desc")],
    ["change.asc",  t("crypt.sort.change.asc")],
    ["staking.desc",t("crypt.sort.staking.desc")],
  ], f.sort, (v) => { f.sort = v; render(); }, true));
  wrap.appendChild(makeSelect("filter-network", [
    ["all", t("crypt.filter.network.all")],
    ...networks.map((n) => [n, t("net." + n) || n]),
  ], f.network, (v) => { f.network = v; render(); }));

  const toggles = el("div", { class: "toggles", style: "width: 100%" },
    makeToggleGroup(t("crypt.tog.staking"), "staking", f.staking, [
      ["all", t("crypt.tog.all")], ["yes", t("crypt.tog.staking.yes")], ["no", t("crypt.tog.staking.no")],
    ]),
  );
  wrap.appendChild(toggles);
}

/* ---------- Precious metals filter UI ---------- */
function buildMetalFilterUI(wrap) {
  const f = state.detailFilters["precious-metals"];

  wrap.appendChild(makeSearchInput(f.search, t("metal.search.ph")));
  wrap.appendChild(makeSelect("sort", [
    ["price.desc",  t("metal.sort.price.desc")],
    ["price.asc",   t("metal.sort.price.asc")],
    ["change.desc", t("metal.sort.change.desc")],
    ["change.asc",  t("metal.sort.change.asc")],
  ], f.sort, (v) => { f.sort = v; render(); }, true));
  wrap.appendChild(makeSelect("filter-cat", [
    ["all",        t("metal.filter.cat.all")],
    ["precious",   t("metal.cat.precious")],
    ["industrial", t("metal.cat.industrial")],
  ], f.category, (v) => { f.category = v; render(); }));

  const toggles = el("div", { class: "toggles", style: "width: 100%" },
    makeToggleGroup(t("metal.tog.liq"), "liq", f.liq, [
      ["all", t("metal.tog.all")], ["hi", t("metal.tog.liq.hi")], ["mid", t("metal.tog.liq.mid")], ["low", t("metal.tog.liq.low")],
    ]),
  );
  wrap.appendChild(toggles);
}

/* ---------- Gems filter UI ---------- */
function buildGemFilterUI(wrap) {
  const f = state.detailFilters.gems;
  const items = OFFERS[state.detailId].items;
  const stones = Array.from(new Set(items.map((i) => i.stone)));
  stones.sort();

  wrap.appendChild(makeSearchInput(f.search, t("gem.search.ph")));
  wrap.appendChild(makeSelect("sort", [
    ["price.desc",  t("gem.sort.price.desc")],
    ["price.asc",   t("gem.sort.price.asc")],
    ["change.desc", t("gem.sort.change.desc")],
    ["change.asc",  t("gem.sort.change.asc")],
  ], f.sort, (v) => { f.sort = v; render(); }, true));
  wrap.appendChild(makeSelect("filter-stone", [
    ["all", t("gem.filter.stone.all")],
    ...stones.map((s) => [s, t("stone." + s) || s]),
  ], f.stone, (v) => { f.stone = v; render(); }));

  const toggles = el("div", { class: "toggles", style: "width: 100%" },
    makeToggleGroup(t("gem.tog.liq"), "liq", f.liq, [
      ["all", t("gem.tog.all")], ["hi", t("gem.tog.liq.hi")], ["mid", t("gem.tog.liq.mid")], ["low", t("gem.tog.liq.low")],
    ]),
  );
  wrap.appendChild(toggles);
}

/* ---------- Gaming filter UI ---------- */
function buildGamingFilterUI(wrap) {
  const f = state.detailFilters.gaming;

  wrap.appendChild(makeSearchInput(f.search, t("skin.search.ph")));
  wrap.appendChild(makeSelect("sort", [
    ["price.desc",  t("skin.sort.price.desc")],
    ["price.asc",   t("skin.sort.price.asc")],
    ["change.desc", t("skin.sort.change.desc")],
    ["change.asc",  t("skin.sort.change.asc")],
  ], f.sort, (v) => { f.sort = v; render(); }, true));

  const toggles = el("div", { class: "toggles", style: "width: 100%" },
    makeToggleGroup(t("skin.tog.game"), "game", f.game, [
      ["all", t("skin.tog.all")], ["cs2", t("skin.tog.cs2")], ["other", t("skin.tog.other")],
    ]),
    makeToggleGroup(t("skin.tog.wear"), "wear", f.wear, [
      ["all", t("skin.tog.all")],
      ["fn", t("wear.fn")], ["mw", t("wear.mw")], ["ft", t("wear.ft")],
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

function filterAndSortMudaraba(items) {
  const f = state.detailFilters.mudaraba;
  let list = items.slice();
  if (f.search) {
    const q = f.search.toLowerCase().trim();
    list = list.filter((o) => [o.provider, o.name[state.lang]].join(" ").toLowerCase().includes(q));
  }
  if (f.provider !== "all") list = list.filter((o) => o.provider === f.provider);
  if (f.term !== "all") {
    list = list.filter((o) => {
      if (f.term === "long") return o.term > 24;
      return o.term <= parseInt(f.term, 10);
    });
  }
  if (f.onlineOpen !== "all") list = list.filter((o) => o.onlineOpen === f.onlineOpen);
  const s = f.sort;
  if (s === "rate.desc") list.sort((a, b) => b.rate - a.rate);
  else if (s === "rate.asc")  list.sort((a, b) => a.rate - b.rate);
  else if (s === "term.asc")  list.sort((a, b) => a.term - b.term);
  else if (s === "term.desc") list.sort((a, b) => b.term - a.term);
  else if (s === "min.asc")   list.sort((a, b) => a.minUZS - b.minUZS);
  else if (s === "min.desc")  list.sort((a, b) => b.minUZS - a.minUZS);
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

function filterAndSortCrypto(items) {
  const f = state.detailFilters.crypto;
  let list = items.slice();
  if (f.search) {
    const q = f.search.toLowerCase().trim();
    list = list.filter((o) => [o.ticker, o.name[state.lang], o.network].join(" ").toLowerCase().includes(q));
  }
  if (f.network !== "all") list = list.filter((o) => o.network === f.network);
  if (f.staking !== "all") list = list.filter((o) => (f.staking === "yes" ? o.stakingAPY > 0 : o.stakingAPY === 0));

  const s = f.sort;
  if (s === "cap.desc")     list.sort((a, b) => b.marketCapB - a.marketCapB);
  else if (s === "cap.asc") list.sort((a, b) => a.marketCapB - b.marketCapB);
  else if (s === "price.desc")   list.sort((a, b) => b.priceUSD - a.priceUSD);
  else if (s === "price.asc")    list.sort((a, b) => a.priceUSD - b.priceUSD);
  else if (s === "change.desc")  list.sort((a, b) => b.change30d - a.change30d);
  else if (s === "change.asc")   list.sort((a, b) => a.change30d - b.change30d);
  else if (s === "staking.desc") list.sort((a, b) => b.stakingAPY - a.stakingAPY);
  return list;
}

function filterAndSortMetals(items) {
  const f = state.detailFilters["precious-metals"];
  let list = items.slice();
  if (f.search) {
    const q = f.search.toLowerCase().trim();
    list = list.filter((o) => [o.name[state.lang], o.symbol, o.metal].join(" ").toLowerCase().includes(q));
  }
  if (f.category !== "all") list = list.filter((o) => o.category === f.category);
  if (f.liq     !== "all") list = list.filter((o) => o.liq === f.liq);

  const s = f.sort;
  if (s === "price.desc")   list.sort((a, b) => b.priceUSD - a.priceUSD);
  else if (s === "price.asc")    list.sort((a, b) => a.priceUSD - b.priceUSD);
  else if (s === "change.desc")  list.sort((a, b) => b.change1y - a.change1y);
  else if (s === "change.asc")   list.sort((a, b) => a.change1y - b.change1y);
  return list;
}

function filterAndSortGems(items) {
  const f = state.detailFilters.gems;
  let list = items.slice();
  if (f.search) {
    const q = f.search.toLowerCase().trim();
    list = list.filter((o) => [o.name[state.lang], o.stone].join(" ").toLowerCase().includes(q));
  }
  if (f.stone !== "all") list = list.filter((o) => o.stone === f.stone);
  if (f.liq   !== "all") list = list.filter((o) => o.liq === f.liq);

  const s = f.sort;
  if (s === "price.desc")   list.sort((a, b) => b.priceUSD - a.priceUSD);
  else if (s === "price.asc")    list.sort((a, b) => a.priceUSD - b.priceUSD);
  else if (s === "change.desc")  list.sort((a, b) => b.change1y - a.change1y);
  else if (s === "change.asc")   list.sort((a, b) => a.change1y - b.change1y);
  return list;
}

function filterAndSortGaming(items) {
  const f = state.detailFilters.gaming;
  let list = items.slice();
  if (f.search) {
    const q = f.search.toLowerCase().trim();
    list = list.filter((o) => [o.name[state.lang], o.game].join(" ").toLowerCase().includes(q));
  }
  if (f.game !== "all") {
    if (f.game === "cs2") list = list.filter((o) => o.game === "cs2");
    else list = list.filter((o) => o.game !== "cs2");
  }
  if (f.wear !== "all") list = list.filter((o) => o.wear === f.wear);

  const s = f.sort;
  if (s === "price.desc")   list.sort((a, b) => b.priceUSD - a.priceUSD);
  else if (s === "price.asc")    list.sort((a, b) => a.priceUSD - b.priceUSD);
  else if (s === "change.desc")  list.sort((a, b) => b.change30d - a.change30d);
  else if (s === "change.asc")   list.sort((a, b) => a.change30d - b.change30d);
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

  // partition: compared (in click-order) on top, others below
  const visibleIds = new Set(list.map((i) => i.id));
  const comparedIds = state.compareIds.filter((id) => visibleIds.has(id));
  const compared = comparedIds.map((id) => list.find((i) => i.id === id)).filter(Boolean);
  const others = list.filter((i) => !comparedIds.includes(i.id));

  // When ANY card is being compared, individual expand panels are suppressed
  // so the screen has at most one chart visible.
  const compareActive = comparedIds.length > 0;

  const renderCard = (i) => {
    grid.appendChild(buildInstrCard(i));
    if (!compareActive && state.expandedId === i.id) {
      grid.appendChild(buildExpandedPanel(i));
    }
  };

  compared.forEach(renderCard);

  if (compared.length >= 2) {
    grid.appendChild(buildComparePanel(compared));
  } else if (compared.length === 1) {
    grid.appendChild(el("div", { class: "compare-hint" }, t("compare.hintOne")));
  }

  others.forEach(renderCard);
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

/* ============================================================
   EXPANDED PANEL — chart + top offers
============================================================ */
const SVG_NS = "http://www.w3.org/2000/svg";
function svgEl(tag, attrs, ...children) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v != null && v !== false) node.setAttribute(k, v);
  }
  for (const c of children) {
    if (c == null) continue;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return node;
}

function seededRand(seed) {
  let x = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    x ^= seed.charCodeAt(i);
    x = Math.imul(x, 16777619) >>> 0;
  }
  return () => {
    x ^= x << 13; x >>>= 0;
    x ^= x >>> 17;
    x ^= x << 5;  x >>>= 0;
    return (x >>> 0) / 4294967295;
  };
}

function generateSeries(inst) {
  const rand = seededRand(inst.id);
  const monthly = inst.retMid / 12;
  // volatility (monthly stddev of returns, in % points)
  const vol = { low: 0.4, mid: 2.2, hi: 7 }[inst.risk] || 2;
  const PAST = 24, FUT = 12;

  // historical: start at 0, accumulate noisy monthly returns
  const hist = [0];
  for (let i = 1; i <= PAST; i++) {
    const noise = (rand() - 0.5) * 2 * vol;
    hist.push(hist[i - 1] + monthly + noise);
  }
  // forecast: continues from last historical value, tighter band, slight curvature
  const fut = [hist[hist.length - 1]];
  for (let i = 1; i <= FUT; i++) {
    const noise = (rand() - 0.5) * vol * 0.5;
    fut.push(fut[i - 1] + monthly + noise);
  }
  // benchmark: inflation comparison line — flat ramp, no noise
  const benchAnnual = inst.currency === "USD" ? 3 : 10;
  const benchMonthly = benchAnnual / 12;
  const bench = [];
  for (let i = 0; i <= PAST + FUT; i++) bench.push(i * benchMonthly);

  return { hist, fut, bench, PAST, FUT };
}

function buildChart(inst, chartParams) {
  const cp = chartParams || state.chartParams;
  const { amount, startOffset } = cp;
  const { hist, fut, bench, PAST, FUT } = generateSeries(inst);
  const N = PAST + FUT; // 36

  // Entry index: 0 = invested 2yr ago, 12 = 1yr ago, 24 = today
  const entryIdx = PAST - startOffset;

  // Full combined series: hist[0..24] + fut[1..12] → 37 points (index 0..36)
  const fullSeries = hist.concat(fut.slice(1));
  const entryPct   = fullSeries[entryIdx];

  // Dollar value at each index
  const valueAt = (i) => amount * (1 + (fullSeries[i] - entryPct) / 100);
  const benchAt = (i) => amount * (1 + (bench[i]      - bench[entryIdx]) / 100);

  // Y range in dollars
  let yMin = Infinity, yMax = -Infinity;
  for (let i = 0; i <= N; i++) {
    const v = valueAt(i), b = benchAt(i);
    if (v < yMin) yMin = v;
    if (v > yMax) yMax = v;
    if (b < yMin) yMin = b;
    if (b > yMax) yMax = b;
  }
  yMin = Math.min(yMin, amount * 0.92);
  const span = Math.max(yMax - yMin, 1);
  yMin -= span * 0.08;
  yMax += span * 0.12;

  const W = 900, H = 220;
  const pad = { l: 68, r: 16, t: 18, b: 32 };
  const cw = W - pad.l - pad.r;
  const ch = H - pad.t - pad.b;

  const xAt = (i) => pad.l + (i / N) * cw;
  const yAt = (v) => pad.t + ch - ((v - yMin) / (yMax - yMin)) * ch;

  // Path builders (dollar values)
  const histPath = hist.map((_, i) =>
    (i === 0 ? "M" : "L") + xAt(i).toFixed(1) + "," + yAt(valueAt(i)).toFixed(1)
  ).join(" ");
  const futPath = fut.map((_, i) =>
    (i === 0 ? "M" : "L") + xAt(i + PAST).toFixed(1) + "," + yAt(valueAt(i + PAST)).toFixed(1)
  ).join(" ");
  const benchPath = bench.map((_, i) =>
    (i === 0 ? "M" : "L") + xAt(i).toFixed(1) + "," + yAt(benchAt(i)).toFixed(1)
  ).join(" ");
  const areaPath = fullSeries.map((_, i) =>
    (i === 0 ? "M" : "L") + xAt(i).toFixed(1) + "," + yAt(valueAt(i)).toFixed(1)
  ).join(" ")
    + " L" + xAt(N).toFixed(1) + "," + yAt(yMin).toFixed(1)
    + " L" + xAt(0).toFixed(1)  + "," + yAt(yMin).toFixed(1) + " Z";

  // Y-axis grid (dollar labels)
  const grid = [];
  for (let g = 0; g <= 4; g++) {
    const v = yMin + (g / 4) * (yMax - yMin);
    const y = yAt(v);
    grid.push(svgEl("line", {
      x1: pad.l, x2: W - pad.r, y1: y, y2: y,
      stroke: "rgba(255,255,255,0.05)", "stroke-width": 1,
    }));
    grid.push(svgEl("text", {
      x: pad.l - 8, y: y + 3.5, "text-anchor": "end",
      fill: "rgba(255,255,255,0.32)",
      "font-family": "JetBrains Mono, monospace",
      "font-size": 10,
    }, fmtUSDChart(v)));
  }

  // X-axis labels
  const xLabels = [
    { i: 0,          text: "−24" + t("expand.month") },
    { i: PAST / 2,   text: "−12" + t("expand.month") },
    { i: PAST,       text: t("expand.axis.today") },
    { i: PAST + FUT, text: "+12" + t("expand.month") },
  ];
  const xLabelNodes = xLabels.map((lb) =>
    svgEl("text", {
      x: xAt(lb.i), y: H - pad.b + 18, "text-anchor": "middle",
      fill: "rgba(255,255,255,0.36)",
      "font-family": "JetBrains Mono, monospace",
      "font-size": 10, "letter-spacing": "0.05em",
    }, lb.text)
  );

  // Today marker
  const todayX = xAt(PAST);
  const todayLine = svgEl("line", {
    x1: todayX, x2: todayX, y1: pad.t, y2: H - pad.b,
    stroke: "rgba(217,184,113,0.45)", "stroke-width": 1, "stroke-dasharray": "3 4",
  });
  const todayDot = svgEl("circle", {
    cx: todayX, cy: yAt(valueAt(PAST)), r: 4.5,
    fill: "#D9B871", stroke: "rgba(217,184,113,0.25)", "stroke-width": 4,
  });

  // Entry marker (green dot + line when entry ≠ today)
  let entryMarkerEl = null;
  if (entryIdx !== PAST) {
    const ex = xAt(entryIdx);
    entryMarkerEl = svgEl("g", {});
    entryMarkerEl.appendChild(svgEl("line", {
      x1: ex, x2: ex, y1: pad.t, y2: H - pad.b,
      stroke: "rgba(111,207,151,0.55)", "stroke-width": 1, "stroke-dasharray": "3 4",
    }));
    entryMarkerEl.appendChild(svgEl("circle", {
      cx: ex, cy: yAt(amount), r: 4,
      fill: "#6FCF97", stroke: "rgba(111,207,151,0.25)", "stroke-width": 4,
    }));
  }

  // Hover crosshair elements (hidden until mousemove)
  const hoverLine = svgEl("line", {
    x1: 0, x2: 0, y1: pad.t, y2: H - pad.b,
    stroke: "rgba(255,255,255,0.28)", "stroke-width": 1, "stroke-dasharray": "2 3",
    visibility: "hidden",
  });
  const hoverDot = svgEl("circle", {
    cx: 0, cy: 0, r: 4,
    fill: "#D9B871", stroke: "#0E1014", "stroke-width": 2,
    visibility: "hidden",
  });

  // Gradient def
  const defs = svgEl("defs");
  defs.appendChild(svgEl("linearGradient", { id: "ep-grad-" + inst.id, x1: 0, y1: 0, x2: 0, y2: 1 },
    svgEl("stop", { offset: "0%",   "stop-color": "#D9B871", "stop-opacity": 0.28 }),
    svgEl("stop", { offset: "100%", "stop-color": "#D9B871", "stop-opacity": 0 })
  ));

  const svg = svgEl("svg", {
    class: "ep-chart",
    viewBox: "0 0 " + W + " " + H,
    preserveAspectRatio: "none",
    role: "img",
    style: "cursor: crosshair;",
  });
  svg.appendChild(defs);
  grid.forEach((g) => svg.appendChild(g));
  svg.appendChild(svgEl("path", {
    d: benchPath, fill: "none",
    stroke: "rgba(255,255,255,0.32)", "stroke-width": 1.5, "stroke-dasharray": "2 3",
  }));
  svg.appendChild(svgEl("path", { d: areaPath, fill: "url(#ep-grad-" + inst.id + ")" }));
  svg.appendChild(svgEl("path", {
    d: histPath, fill: "none", stroke: "#D9B871", "stroke-width": 2,
    "stroke-linejoin": "round", "stroke-linecap": "round",
  }));
  svg.appendChild(svgEl("path", {
    d: futPath, fill: "none", stroke: "#D9B871", "stroke-width": 2,
    "stroke-dasharray": "5 5", "stroke-linejoin": "round", "stroke-linecap": "round",
    opacity: 0.85,
  }));
  if (entryMarkerEl) svg.appendChild(entryMarkerEl);
  svg.appendChild(todayLine);
  svg.appendChild(todayDot);
  svg.appendChild(hoverLine);
  svg.appendChild(hoverDot);
  xLabelNodes.forEach((n) => svg.appendChild(n));

  // Month label helper
  function monthLabel(i) {
    const m = i - PAST;
    if (m === 0) return t("expand.axis.today");
    if (m < 0)   return m + " " + t("expand.month");
    return "+" + m + " " + t("expand.month");
  }

  // Expose hover-setup so callers can bind the tooltip
  function setupHover(tooltipEl) {
    svg.addEventListener("mousemove", (e) => {
      const svgRect = svg.getBoundingClientRect();
      const rawX = (e.clientX - svgRect.left) / svgRect.width * W;
      const i = Math.max(0, Math.min(N, Math.round((rawX - pad.l) / cw * N)));
      const val = valueAt(i);
      hoverLine.setAttribute("x1", xAt(i)); hoverLine.setAttribute("x2", xAt(i));
      hoverLine.setAttribute("visibility", "visible");
      hoverDot.setAttribute("cx", xAt(i)); hoverDot.setAttribute("cy", yAt(val));
      hoverDot.setAttribute("visibility", "visible");
      tooltipEl.innerHTML =
        `<span class="ep-tip-date">${monthLabel(i)}</span>` +
        `<span class="ep-tip-val">${fmtUSDExact(val)}</span>`;
      const wrapRect = tooltipEl.parentElement.getBoundingClientRect();
      let left = e.clientX - wrapRect.left + 14;
      if (left + 140 > tooltipEl.parentElement.offsetWidth) left = e.clientX - wrapRect.left - 150;
      tooltipEl.style.left = left + "px";
      tooltipEl.style.top  = Math.max(4, e.clientY - wrapRect.top - 48) + "px";
      tooltipEl.classList.add("visible");
    });
    svg.addEventListener("mouseleave", () => {
      hoverLine.setAttribute("visibility", "hidden");
      hoverDot.setAttribute("visibility", "hidden");
      tooltipEl.classList.remove("visible");
    });
  }

  return {
    svg,
    setupHover,
    pastGrowth:    hist[hist.length - 1],
    forecastDelta: fut[fut.length - 1] - hist[hist.length - 1],
    benchTotal:    bench[bench.length - 1] - bench[0],
  };
}

function pickTopOffers(inst) {
  const meta = (typeof OFFERS !== "undefined") ? OFFERS[inst.id] : null;
  if (!meta) return null;
  const items = meta.items.slice();
  if (meta.kind === "deposit" || meta.kind === "mudaraba") {
    items.sort((a, b) => b.rate - a.rate);
    return {
      kind: meta.kind,
      top: items.slice(0, 3).map((o) => ({
        label: o.provider,
        value: o.rate + "%",
      })),
    };
  }
  if (meta.kind === "stock") {
    items.sort((a, b) => (b.divYield || 0) - (a.divYield || 0));
    return {
      kind: "stock",
      top: items.slice(0, 3).map((o) => ({
        label: o.ticker,
        value: (o.divYield > 0 ? o.divYield.toFixed(1) + "%" : ((o.change30d > 0 ? "+" : "") + o.change30d.toFixed(1) + "%")),
      })),
    };
  }
  if (meta.kind === "crypto") {
    items.sort((a, b) => b.change30d - a.change30d);
    return {
      kind: "crypto",
      top: items.slice(0, 3).map((o) => ({
        label: o.ticker,
        value: (o.change30d >= 0 ? "+" : "") + o.change30d.toFixed(1) + "%",
      })),
    };
  }
  if (meta.kind === "precious-metals") {
    items.sort((a, b) => b.change1y - a.change1y);
    return {
      kind: "precious-metals",
      top: items.slice(0, 3).map((o) => ({
        label: o.symbol,
        value: (o.change1y >= 0 ? "+" : "") + o.change1y.toFixed(1) + "%",
      })),
    };
  }
  if (meta.kind === "gems") {
    items.sort((a, b) => b.change1y - a.change1y);
    return {
      kind: "gems",
      top: items.slice(0, 3).map((o) => ({
        label: o.name[state.lang].split(" ")[0],
        value: (o.change1y >= 0 ? "+" : "") + o.change1y.toFixed(1) + "%",
      })),
    };
  }
  if (meta.kind === "gaming") {
    items.sort((a, b) => b.change30d - a.change30d);
    return {
      kind: "gaming",
      top: items.slice(0, 3).map((o) => ({
        label: o.name[state.lang].split(" ").slice(0, 2).join(" "),
        value: (o.change30d >= 0 ? "+" : "") + o.change30d.toFixed(1) + "%",
      })),
    };
  }
  return null;
}

function buildChartControls() {
  // Amount input
  const amtInput = el("input", {
    type: "number", min: "1", max: "1000000", step: "10",
    value: state.chartParams.amount,
  });
  amtInput.addEventListener("change", (e) => {
    const v = parseFloat(e.target.value);
    if (v > 0) { state.chartParams.amount = v; render(); }
  });
  const amtWrap = el("div", { class: "ep-amount-wrap" },
    el("span", { class: "ep-amount-currency" }, "$"),
    amtInput
  );

  // Date pills
  const datePills = el("div", { class: "ep-date-pills" });
  [{ v: 0, k: "chart.date.today" }, { v: 12, k: "chart.date.1yr" }, { v: 24, k: "chart.date.2yr" }]
    .forEach(({ v, k }) => {
      const b = el("button", { "aria-pressed": state.chartParams.startOffset === v ? "true" : "false" }, t(k));
      b.addEventListener("click", () => { state.chartParams.startOffset = v; render(); });
      datePills.appendChild(b);
    });

  return el("div", { class: "ep-controls" },
    el("div", { class: "ep-control-group" },
      el("div", { class: "ep-ctrl-label" }, t("chart.amount")),
      amtWrap
    ),
    el("div", { class: "ep-control-group" },
      el("div", { class: "ep-ctrl-label" }, t("chart.date")),
      datePills
    )
  );
}

function buildExpandedPanel(inst) {
  const { svg, setupHover, pastGrowth, forecastDelta, benchTotal } = buildChart(inst, state.chartParams);
  const topOffers = pickTopOffers(inst);

  const fmtPct = (v) => (v >= 0 ? "+" : "") + v.toFixed(1) + "%";
  const isPositive = pastGrowth >= 0;
  const isForecastUp = forecastDelta >= 0;

  // controls row
  const controls = buildChartControls();

  // header / stats
  const header = el("div", { class: "ep-header" },
    el("div", { class: "ep-title" },
      el("div", { class: "ep-eyebrow eyebrow" }, t("expand.eyebrow")),
      el("h3", null, inst.name[state.lang])
    ),
    controls,
    el("div", { class: "ep-stats" },
      el("div", { class: "ep-stat" },
        el("div", { class: "k" }, t("expand.past")),
        el("div", { class: "v " + (isPositive ? "up" : "down") }, fmtPct(pastGrowth))
      ),
      el("div", { class: "ep-stat" },
        el("div", { class: "k" }, t("expand.forecast")),
        el("div", { class: "v " + (isForecastUp ? "up" : "down") }, fmtPct(forecastDelta))
      ),
      el("div", { class: "ep-stat" },
        el("div", { class: "k" }, t("expand.benchmark")),
        el("div", { class: "v bench" }, fmtPct(benchTotal))
      ),
      el("div", { class: "ep-stat" },
        el("div", { class: "k" }, t("expand.volatility")),
        el("div", { class: "v" }, t("risk." + inst.risk))
      )
    )
  );

  // legend
  const legend = el("div", { class: "ep-legend" },
    el("span", { class: "lg-item" },
      el("span", { class: "lg-sw solid" }), t("expand.axis.past")
    ),
    el("span", { class: "lg-item" },
      el("span", { class: "lg-sw dashed" }), t("expand.axis.future")
    ),
    el("span", { class: "lg-item" },
      el("span", { class: "lg-sw bench" }), t("expand.benchmark")
    )
  );

  const tooltipEl = el("div", { class: "ep-hover-tooltip" });
  const chartWrap = el("div", { class: "ep-chart-wrap" });
  chartWrap.appendChild(svg);
  chartWrap.appendChild(tooltipEl);
  setupHover(tooltipEl);

  // bottom pills row
  const pills = el("div", { class: "ep-pills" });
  if (topOffers && topOffers.top.length > 0) {
    pills.appendChild(el("div", { class: "ep-pills-label" }, t("expand.topOffers")));
    topOffers.top.forEach((o) => {
      pills.appendChild(el("div", { class: "ep-pill" },
        el("span", { class: "pl-name" }, o.label),
        el("span", { class: "pl-val" }, o.value)
      ));
    });
    const ctaWrap = el("a", {
      class: "ep-pill ep-pill-cta",
      href: "#detail/" + inst.id,
    }, t("expand.allOffers"), el("span", { class: "arr" }, "→"));
    ctaWrap.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    pills.appendChild(ctaWrap);
  } else {
    pills.appendChild(el("div", { class: "ep-empty" }, t("expand.noOffers")));
  }

  const panel = el("div", { class: "expand-panel" },
    header,
    legend,
    chartWrap,
    pills,
    el("div", { class: "ep-foot" }, t("expand.disclaimer"))
  );
  return panel;
}

/* ============================================================
   COMPARE PANEL — multi-direction overlay chart
============================================================ */
const COMPARE_COLORS = [
  "#D9B871",                 // gold (accent)
  "oklch(0.78 0.10 200)",    // teal
  "oklch(0.78 0.10 320)",    // magenta
  "oklch(0.78 0.10 140)",    // green
  "oklch(0.78 0.10 30)",     // peach
  "oklch(0.78 0.10 260)",    // periwinkle
];

function buildCompareChart(insts, chartParams) {
  const cp = chartParams || state.chartParams;
  const { amount, startOffset } = cp;

  const seriesList = insts.map((inst) => {
    const s = generateSeries(inst);
    const entryIdx   = s.PAST - startOffset;
    const fullSeries = s.hist.concat(s.fut.slice(1));
    const entryPct   = fullSeries[entryIdx];
    const valueAt    = (i) => amount * (1 + (fullSeries[i] - entryPct) / 100);
    return { inst, s, valueAt, entryIdx, fullSeries };
  });

  const PAST = seriesList[0].s.PAST;
  const FUT  = seriesList[0].s.FUT;
  const N    = PAST + FUT;
  const W = 900, H = 260;
  const pad = { l: 68, r: 16, t: 18, b: 32 };
  const cw = W - pad.l - pad.r;
  const ch = H - pad.t - pad.b;

  // Y range in dollars
  let yMin = Infinity, yMax = -Infinity;
  seriesList.forEach(({ valueAt }) => {
    for (let i = 0; i <= N; i++) {
      const v = valueAt(i);
      if (v < yMin) yMin = v;
      if (v > yMax) yMax = v;
    }
  });
  yMin = Math.min(yMin, amount * 0.92);
  const span = Math.max(yMax - yMin, 1);
  yMin -= span * 0.08;
  yMax += span * 0.12;

  const xAt = (i) => pad.l + (i / N) * cw;
  const yAt = (v) => pad.t + ch - ((v - yMin) / (yMax - yMin)) * ch;

  const svg = svgEl("svg", {
    class: "ep-chart cp-chart",
    viewBox: "0 0 " + W + " " + H,
    preserveAspectRatio: "none",
    role: "img",
    style: "cursor: crosshair;",
  });

  // Grid / Y-labels (dollar)
  for (let g = 0; g <= 4; g++) {
    const v = yMin + (g / 4) * (yMax - yMin);
    const y = yAt(v);
    svg.appendChild(svgEl("line", {
      x1: pad.l, x2: W - pad.r, y1: y, y2: y,
      stroke: "rgba(255,255,255,0.05)", "stroke-width": 1,
    }));
    svg.appendChild(svgEl("text", {
      x: pad.l - 8, y: y + 3.5, "text-anchor": "end",
      fill: "rgba(255,255,255,0.32)",
      "font-family": "JetBrains Mono, monospace",
      "font-size": 10,
    }, fmtUSDChart(v)));
  }

  // Entry marker line (if not today)
  const entryIdx = PAST - startOffset;
  if (entryIdx !== PAST) {
    const ex = xAt(entryIdx);
    svg.appendChild(svgEl("line", {
      x1: ex, x2: ex, y1: pad.t, y2: H - pad.b,
      stroke: "rgba(111,207,151,0.45)", "stroke-width": 1, "stroke-dasharray": "3 4",
    }));
  }

  // Hover crosshair elements
  const hoverLine = svgEl("line", {
    x1: 0, x2: 0, y1: pad.t, y2: H - pad.b,
    stroke: "rgba(255,255,255,0.28)", "stroke-width": 1, "stroke-dasharray": "2 3",
    visibility: "hidden",
  });
  const hoverDots = seriesList.map((_, idx) =>
    svgEl("circle", {
      cx: 0, cy: 0, r: 4,
      fill: COMPARE_COLORS[idx % COMPARE_COLORS.length],
      stroke: "#0E1014", "stroke-width": 2,
      visibility: "hidden",
    })
  );

  // Draw series
  seriesList.forEach(({ s, valueAt }, idx) => {
    const c = COMPARE_COLORS[idx % COMPARE_COLORS.length];
    svg.appendChild(svgEl("path", {
      d: s.hist.map((_, i) => (i === 0 ? "M" : "L") + xAt(i).toFixed(1) + "," + yAt(valueAt(i)).toFixed(1)).join(" "),
      fill: "none", stroke: c, "stroke-width": 2,
      "stroke-linejoin": "round", "stroke-linecap": "round",
    }));
    svg.appendChild(svgEl("path", {
      d: s.fut.map((_, i) => (i === 0 ? "M" : "L") + xAt(i + PAST).toFixed(1) + "," + yAt(valueAt(i + PAST)).toFixed(1)).join(" "),
      fill: "none", stroke: c, "stroke-width": 2, "stroke-dasharray": "5 5",
      "stroke-linejoin": "round", "stroke-linecap": "round", opacity: 0.85,
    }));
    svg.appendChild(svgEl("circle", {
      cx: xAt(N), cy: yAt(valueAt(N)), r: 3.5, fill: c,
      stroke: "rgba(14,16,20,0.85)", "stroke-width": 2,
    }));
  });

  // Today marker
  const todayX = xAt(PAST);
  svg.appendChild(svgEl("line", {
    x1: todayX, x2: todayX, y1: pad.t, y2: H - pad.b,
    stroke: "rgba(255,255,255,0.18)", "stroke-width": 1, "stroke-dasharray": "3 4",
  }));

  svg.appendChild(hoverLine);
  hoverDots.forEach((d) => svg.appendChild(d));

  const xLabels = [
    { i: 0,        text: "−24" + t("expand.month") },
    { i: PAST / 2, text: "−12" + t("expand.month") },
    { i: PAST,     text: t("expand.axis.today") },
    { i: N,        text: "+12" + t("expand.month") },
  ];
  xLabels.forEach((lb) => svg.appendChild(svgEl("text", {
    x: xAt(lb.i), y: H - pad.b + 18, "text-anchor": "middle",
    fill: "rgba(255,255,255,0.36)",
    "font-family": "JetBrains Mono, monospace",
    "font-size": 10, "letter-spacing": "0.05em",
  }, lb.text)));

  function monthLabel(i) {
    const m = i - PAST;
    if (m === 0) return t("expand.axis.today");
    if (m < 0)   return m + " " + t("expand.month");
    return "+" + m + " " + t("expand.month");
  }

  function setupHover(tooltipEl) {
    svg.addEventListener("mousemove", (e) => {
      const svgRect = svg.getBoundingClientRect();
      const rawX = (e.clientX - svgRect.left) / svgRect.width * W;
      const i = Math.max(0, Math.min(N, Math.round((rawX - pad.l) / cw * N)));
      hoverLine.setAttribute("x1", xAt(i)); hoverLine.setAttribute("x2", xAt(i));
      hoverLine.setAttribute("visibility", "visible");
      seriesList.forEach(({ valueAt }, idx) => {
        const val = valueAt(i);
        hoverDots[idx].setAttribute("cx", xAt(i));
        hoverDots[idx].setAttribute("cy", yAt(val));
        hoverDots[idx].setAttribute("visibility", "visible");
      });
      let html = `<span class="ep-tip-date">${monthLabel(i)}</span>`;
      seriesList.forEach(({ inst, valueAt }, idx) => {
        const c = COMPARE_COLORS[idx % COMPARE_COLORS.length];
        html += `<span class="ep-tip-row">` +
          `<span class="ep-tip-dot" style="background:${c}"></span>` +
          `<span class="ep-tip-name">${inst.name[state.lang]}</span>` +
          `<span class="ep-tip-val">${fmtUSDExact(valueAt(i))}</span></span>`;
      });
      tooltipEl.innerHTML = html;
      const wrapRect = tooltipEl.parentElement.getBoundingClientRect();
      let left = e.clientX - wrapRect.left + 14;
      if (left + 200 > tooltipEl.parentElement.offsetWidth) left = e.clientX - wrapRect.left - 215;
      tooltipEl.style.left = left + "px";
      tooltipEl.style.top  = Math.max(4, e.clientY - wrapRect.top - 48) + "px";
      tooltipEl.classList.add("visible");
    });
    svg.addEventListener("mouseleave", () => {
      hoverLine.setAttribute("visibility", "hidden");
      hoverDots.forEach((d) => d.setAttribute("visibility", "hidden"));
      tooltipEl.classList.remove("visible");
    });
  }

  return { svg, seriesList, setupHover };
}

function buildComparePanel(insts) {
  const { svg, seriesList, setupHover } = buildCompareChart(insts, state.chartParams);
  const { amount } = state.chartParams;
  const PAST = seriesList[0].s.PAST;
  const FUT  = seriesList[0].s.FUT;
  const N    = PAST + FUT;

  const fmtPct = (v) => (v >= 0 ? "+" : "") + v.toFixed(1) + "%";

  const controls = buildChartControls();

  const header = el("div", { class: "cp-header" },
    el("div", { class: "cp-title" },
      el("div", { class: "ep-eyebrow eyebrow" }, t("compare.eyebrow")),
      el("h3", null, t("compare.title.n").replace("{n}", insts.length))
    ),
    controls,
    el("button", {
      class: "cp-clear",
      onclick: () => { state.compareIds = []; render(); },
    }, "✕  " + t("compare.clear"))
  );

  const legend = el("div", { class: "cp-legend" });
  seriesList.forEach(({ inst, s, valueAt }, idx) => {
    const c = COMPARE_COLORS[idx % COMPARE_COLORS.length];
    const valToday    = fmtUSDExact(valueAt(PAST));
    const valForecast = fmtUSDExact(valueAt(N));
    legend.appendChild(el("div", { class: "cp-leg-item" },
      el("span", { class: "dot", style: "background:" + c }),
      el("div", { class: "lg-meta" },
        el("div", { class: "lg-name" }, inst.name[state.lang]),
        el("div", { class: "lg-vals" },
          el("span", { class: "v-past" }, valToday),
          el("span", { class: "sep" }, "·"),
          el("span", { class: "v-fwd muted" }, valForecast)
        )
      ),
      el("button", {
        class: "lg-remove",
        title: t("compare.toggle"),
        onclick: (e) => {
          e.stopPropagation();
          const i = state.compareIds.indexOf(inst.id);
          if (i >= 0) state.compareIds.splice(i, 1);
          render();
        },
      }, "✕")
    ));
  });

  const tooltipEl = el("div", { class: "ep-hover-tooltip ep-hover-tooltip--multi" });
  const chartWrap = el("div", { class: "ep-chart-wrap cp-chart-wrap" });
  chartWrap.appendChild(svg);
  chartWrap.appendChild(tooltipEl);
  setupHover(tooltipEl);

  const legendSub = el("div", { class: "ep-legend" },
    el("span", { class: "lg-item" },
      el("span", { class: "lg-sw solid" }), t("expand.axis.past")
    ),
    el("span", { class: "lg-item" },
      el("span", { class: "lg-sw dashed" }), t("expand.axis.future")
    )
  );

  return el("div", { class: "expand-panel compare-panel" },
    header,
    legend,
    legendSub,
    chartWrap,
    el("div", { class: "ep-foot" }, t("expand.disclaimer"))
  );
}

function buildInstrCard(inst) {
  const riskBadge   = el("span", { class: "badge risk-" + inst.risk }, t("risk." + inst.risk));
  const onlineBadge = el("span", { class: "badge " + (inst.online === "yes" ? "online" : "offline") },
                          inst.online === "yes" ? t("online.yes") : t("online.no"));

  const retStrip = el("div", { class: "ret-strip" },
    el("span", { class: "lbl" }, t("metric.return")),
    el("span", { class: "val" }, inst.retLabel[state.lang])
  );

  const metrics = el("div", { class: "metrics three" },
    el("div", { class: "metric" }, el("div", { class: "k" }, t("metric.mincap")), el("div", { class: "v" }, inst.minCapLabel[state.lang])),
    el("div", { class: "metric" }, el("div", { class: "k" }, t("metric.liq")),    el("div", { class: "v" }, t("liq." + inst.liq))),
    el("div", { class: "metric" }, el("div", { class: "k" }, t("metric.cx")),    el("div", { class: "v cx" }, (function(){
      const dots = el("span", { class: "dots" });
      const lvl = { low: 1, mid: 2, hi: 3 }[inst.complexity];
      for (let i = 0; i < 3; i++) dots.appendChild(el("i", { class: i < lvl ? "on" : "" }));
      return dots;
    })()))
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

  // ── instrument avatar icon ─────────────────────────────────
  const ICON_MAP = {
    "deposit-uzs":    { code: "UZS", clr: "#D9B871" },
    "deposit-usd":    { code: "$",   clr: "#6FCF97" },
    "ozbonds":        { code: "OBL", clr: "#56CCF2" },
    "sukuk":          { code: "SUK", clr: "#9D8EE8" },
    "tse":            { code: "TSE", clr: "#E8A87C" },
    "div-stocks":     { code: "DIV", clr: "#6FCF97" },
    "etf":            { code: "ETF", clr: "#5BC8E8" },
    "real-estate":    { code: "RE",  clr: "#E8A87C" },
    "startup":        { code: "VC",  clr: "#F06292" },
    "crypto":         { code: "₿",   clr: "#F7931A" },
    "precious-metals":{ code: "Au",  clr: "#D4AF37" },
    "gems":           { code: "◆",   clr: "#7FFFD4" },
    "gaming":         { code: "SKN", clr: "#4EC9B0" },
    "p2p":            { code: "P2P", clr: "#BB86FC" },
    "mudaraba":       { code: "MUD", clr: "#4CAF82" },
  };
  const icon = ICON_MAP[inst.id] || { code: inst.id.slice(0, 3).toUpperCase(), clr: "#D9B871" };
  const iavatar = el("div", {
    class: "iavatar",
    style: `color:${icon.clr};background:${icon.clr}1a;border-color:${icon.clr}33;`,
  }, icon.code);

  const hasOffers = (typeof OFFERS !== "undefined") && !!OFFERS[inst.id];
  const isExpanded = state.expandedId === inst.id;
  const isCompared = state.compareIds.includes(inst.id);
  const cardCls = "card instr-card interactive clickable"
    + (isExpanded ? " expanded" : "")
    + (isCompared ? " compared" : "");

  const arrowGlyph = isExpanded ? "↑" : "↓";
  const linkText = isExpanded ? t("card.close") : t("card.detail");

  const detailLink = el("a",
    { class: "link", href: "#", "data-role": "toggle-expand" },
    linkText,
    el("span", null, arrowGlyph)
  );

  // Compare switch
  const cmpSwitch = el("button", {
    class: "cmp-switch",
    "aria-pressed": isCompared ? "true" : "false",
    title: t("compare.toggle"),
    "data-role": "compare-toggle",
  },
    el("span", { class: "ct-track" }, el("span", { class: "ct-thumb" })),
    el("span", { class: "ct-lbl" }, t("compare.toggle"))
  );
  cmpSwitch.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const idx = state.compareIds.indexOf(inst.id);
    if (idx >= 0) state.compareIds.splice(idx, 1);
    else state.compareIds.push(inst.id);
    render();
  });

  const card = el("div", { class: cardCls },
    el("div", { class: "top" },
      el("div", { class: "card-title-row" },
        iavatar,
        el("div", null,
          el("div", { class: "name", title: inst.name[state.lang] }, inst.name[state.lang]),
          el("div", { class: "sub" }, inst.sub[state.lang])
        )
      ),
      el("div", { class: "badges" }, riskBadge, onlineBadge)
    ),
    retStrip,
    metrics,
    tags,
    pros,
    el("div", { class: "instr-foot" }, detailLink, cmpSwitch)
  );

  const toggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.expandedId = state.expandedId === inst.id ? null : inst.id;
    render();
  };
  detailLink.addEventListener("click", toggleExpand);
  card.addEventListener("click", (e) => {
    // ignore clicks on the compare toggle (it handles itself)
    if (e.target.closest("[data-role='compare-toggle']")) return;
    // pass through any other links (e.g. external offer links)
    const a = e.target.closest("a");
    if (a && a.getAttribute("data-role") !== "toggle-expand") return;
    toggleExpand(e);
  });
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
  } else if (meta.kind === "mudaraba") {
    const list = filterAndSortMudaraba(meta.items);
    renderLiveStatsMudaraba(list);
    if (list.length === 0) {
      grid.appendChild(el("div", { class: "empty" },
        el("h3", null, t("catalog.empty.title")),
        el("p", null, t("catalog.empty.body"))
      ));
    } else {
      list.forEach((o) => grid.appendChild(buildMudarabaCard(o)));
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
  } else if (meta.kind === "precious-metals") {
    const list = filterAndSortMetals(meta.items);
    renderLiveStatsMetals(list);
    if (list.length === 0) {
      grid.appendChild(el("div", { class: "empty" },
        el("h3", null, t("catalog.empty.title")),
        el("p", null, t("catalog.empty.body"))
      ));
    } else {
      list.forEach((o) => grid.appendChild(buildMetalCard(o)));
    }
  } else if (meta.kind === "crypto") {
    const list = filterAndSortCrypto(meta.items);
    renderLiveStatsCrypto(list);
    if (list.length === 0) {
      grid.appendChild(el("div", { class: "empty" },
        el("h3", null, t("catalog.empty.title")),
        el("p", null, t("catalog.empty.body"))
      ));
    } else {
      list.forEach((o) => grid.appendChild(buildCryptoCard(o)));
    }
  } else if (meta.kind === "gems") {
    const list = filterAndSortGems(meta.items);
    renderLiveStatsGems(list);
    if (list.length === 0) {
      grid.appendChild(el("div", { class: "empty" },
        el("h3", null, t("catalog.empty.title")),
        el("p", null, t("catalog.empty.body"))
      ));
    } else {
      list.forEach((o) => grid.appendChild(buildGemCard(o)));
    }
  } else if (meta.kind === "gaming") {
    const list = filterAndSortGaming(meta.items);
    renderLiveStatsGaming(list);
    if (list.length === 0) {
      grid.appendChild(el("div", { class: "empty" },
        el("h3", null, t("catalog.empty.title")),
        el("p", null, t("catalog.empty.body"))
      ));
    } else {
      list.forEach((o) => grid.appendChild(buildSkinCard(o)));
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

function renderLiveStatsMudaraba(list) {
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
      el("div", { class: "k" }, t("head.stat.bestMdr")),
      el("div", { class: "v empty" }, "—")
    ));
    wrap.appendChild(el("div", { class: "live-stat" },
      el("div", { class: "k" }, t("head.stat.minEntry")),
      el("div", { class: "v empty" }, "—")
    ));
    return;
  }

  const best = list.reduce((m, o) => o.rate > m.rate ? o : m, list[0]);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestMdr")),
    el("div", { class: "v" }, best.rate + "%")
  ));

  const cheapest = list.reduce((m, o) => o.minUZS < m.minUZS ? o : m, list[0]);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.minEntry")),
    el("div", { class: "v" }, fmtUZSFull(cheapest.minUZS, state.lang))
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

function renderLiveStatsMetals(list) {
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
      el("div", { class: "k" }, t("head.stat.bestMetal")),
      el("div", { class: "v empty" }, "—")
    ));
    wrap.appendChild(el("div", { class: "live-stat" },
      el("div", { class: "k" }, t("head.stat.bestChange")),
      el("div", { class: "v empty" }, "—")
    ));
    return;
  }

  const bestChange = list.reduce((m, o) => o.change1y > m.change1y ? o : m, list[0]);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestMetal")),
    el("div", { class: "v" }, bestChange.symbol + " · " + bestChange.name[state.lang])
  ));
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestChange")),
    el("div", { class: "v" }, (bestChange.change1y > 0 ? "+" : "") + bestChange.change1y.toFixed(1) + "%")
  ));
}

function renderLiveStatsCrypto(list) {
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
      el("div", { class: "k" }, t("head.stat.bestToken")),
      el("div", { class: "v empty" }, "—")
    ));
    wrap.appendChild(el("div", { class: "live-stat" },
      el("div", { class: "k" }, t("head.stat.bestChange")),
      el("div", { class: "v empty" }, "—")
    ));
    return;
  }

  const bestChange = list.reduce((m, o) => o.change30d > m.change30d ? o : m, list[0]);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestToken")),
    el("div", { class: "v" }, bestChange.ticker)
  ));
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestChange")),
    el("div", { class: "v" }, (bestChange.change30d > 0 ? "+" : "") + bestChange.change30d.toFixed(1) + "%")
  ));
}

function renderLiveStatsGems(list) {
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
      el("div", { class: "k" }, t("head.stat.bestGem")),
      el("div", { class: "v empty" }, "—")
    ));
    wrap.appendChild(el("div", { class: "live-stat" },
      el("div", { class: "k" }, t("head.stat.bestChange")),
      el("div", { class: "v empty" }, "—")
    ));
    return;
  }

  const bestChange = list.reduce((m, o) => o.change1y > m.change1y ? o : m, list[0]);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestGem")),
    el("div", { class: "v" }, bestChange.name[state.lang].split(" ")[0])
  ));
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestChange")),
    el("div", { class: "v" }, (bestChange.change1y > 0 ? "+" : "") + bestChange.change1y.toFixed(1) + "%")
  ));
}

function renderLiveStatsGaming(list) {
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
      el("div", { class: "k" }, t("head.stat.bestSkin")),
      el("div", { class: "v empty" }, "—")
    ));
    wrap.appendChild(el("div", { class: "live-stat" },
      el("div", { class: "k" }, t("head.stat.bestChange")),
      el("div", { class: "v empty" }, "—")
    ));
    return;
  }

  const bestChange = list.reduce((m, o) => o.change30d > m.change30d ? o : m, list[0]);
  wrap.appendChild(el("div", { class: "live-stat" },
    el("div", { class: "k" }, t("head.stat.bestSkin")),
    el("div", { class: "v" }, bestChange.name[state.lang].split(" ").slice(0, 2).join(" "))
  ));
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

function buildMudarabaCard(o) {
  const termLabel = o.term + " " + t("mdr.month");
  const minLabel  = fmtUZSFull(o.minUZS, state.lang);

  const tags = el("div", { class: "otags" });
  tags.appendChild(el("span", { class: "tag", style: "color:var(--ok);border-color:rgba(111,207,151,0.25);background:rgba(111,207,151,0.08)" }, "☽ Shariat"));
  tags.appendChild(el("span", { class: "tag" }, t("dep.cap." + o.capitalization)));
  if (o.onlineOpen === "yes") tags.appendChild(el("span", { class: "tag" }, t("dep.online") + ": " + t("mdr.tog.yes")));

  return el("div", { class: "card offer-card interactive" },
    el("div", { class: "top" },
      el("div", { class: "provider" },
        el("div", { class: "pavatar", style: "color:#4CAF82;background:rgba(76,175,130,0.12);border-color:rgba(76,175,130,0.25)" }, o.providerCode),
        el("div", null,
          el("div", { class: "pname" }, o.provider),
          el("div", { class: "pcat" }, "UZS · " + t("mdr.provider"))
        )
      ),
      el("span", { class: "badge online" }, o.onlineOpen === "yes" ? t("online.yes") : t("online.no"))
    ),
    el("div", { class: "oname" }, o.name[state.lang]),
    el("div", { class: "rate-strip" },
      el("span", { class: "lbl" }, t("mdr.rate")),
      el("span", { class: "val" }, o.rate + "%")
    ),
    el("div", { class: "metrics" },
      el("div", { class: "metric" }, el("div", { class: "k" }, t("mdr.term")), el("div", { class: "v" }, termLabel)),
      el("div", { class: "metric" }, el("div", { class: "k" }, t("mdr.min")),  el("div", { class: "v" }, minLabel))
    ),
    tags,
    el("div", { class: "ofoot" },
      el("a", { class: "external-link", href: o.url, target: "_blank", rel: "noopener" },
        t("go.mdr"),
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

function buildMetalCard(o) {
  const changeCls = o.change1y > 0 ? "up" : o.change1y < 0 ? "down" : "flat";
  const changeStr = (o.change1y > 0 ? "+" : "") + o.change1y.toFixed(1) + "%";
  const unitLabel = t("metal.unit." + o.unit) || o.unit;
  const priceLabel = "$ " + o.priceUSD.toLocaleString("en-US", { maximumFractionDigits: 0 });
  const catLabel = t("metal.cat." + o.category) || o.category;

  const tags = el("div", { class: "otags" });
  tags.appendChild(el("span", { class: "tag" }, catLabel));
  tags.appendChild(el("span", { class: "tag" }, unitLabel));
  tags.appendChild(el("span", { class: "tag" }, t("metal.tog.liq") + ": " + t("liq." + o.liq)));

  return el("div", { class: "card offer-card interactive" },
    el("div", { class: "top" },
      el("div", { class: "provider" },
        el("div", { class: "pavatar" }, o.symbol),
        el("div", null,
          el("div", { class: "ticker-row" },
            el("span", { class: "ticker" }, o.symbol),
            el("span", { class: "change-badge " + changeCls }, changeStr)
          ),
          el("div", { class: "pcat" }, catLabel + " · " + unitLabel)
        )
      )
    ),
    el("div", { class: "oname" }, o.name[state.lang]),
    el("div", { class: "rate-strip" },
      el("span", { class: "lbl" }, t("metal.price") + " / " + unitLabel),
      el("span", { class: "val" }, priceLabel)
    ),
    el("div", { class: "metrics" },
      el("div", { class: "metric" }, el("div", { class: "k" }, t("metal.symbol")), el("div", { class: "v" }, o.symbol)),
      el("div", { class: "metric" }, el("div", { class: "k" }, t("metal.change")), el("div", { class: "v " + changeCls }, changeStr))
    ),
    tags,
    el("div", { class: "ofoot" },
      el("a", { class: "external-link", href: o.url, target: "_blank", rel: "noopener" },
        t("go.metal"),
        el("span", null, "↗")
      )
    )
  );
}

function buildCryptoCard(o) {
  const changeCls = o.change30d > 0 ? "up" : o.change30d < 0 ? "down" : "flat";
  const changeStr = (o.change30d > 0 ? "+" : "") + o.change30d.toFixed(1) + "%";
  const capLabel = o.marketCapB >= 1000
    ? "$ " + (o.marketCapB / 1000).toFixed(1) + "T"
    : "$ " + o.marketCapB.toFixed(0) + "B";

  const tags = el("div", { class: "otags" });
  tags.appendChild(el("span", { class: "tag" }, t("crypt.network") + ": " + (t("net." + o.network) || o.network)));
  tags.appendChild(el("span", { class: "tag" }, "#" + o.rank));
  if (o.stakingAPY > 0) tags.appendChild(el("span", { class: "tag", style: "color: var(--accent); border-color: rgba(217,184,113,0.30); background: rgba(217,184,113,0.08)" },
    t("crypt.staking") + " " + o.stakingAPY.toFixed(1) + "%"
  ));

  return el("div", { class: "card offer-card interactive" },
    el("div", { class: "top" },
      el("div", { class: "provider" },
        el("div", { class: "pavatar" }, o.ticker.slice(0, 2)),
        el("div", null,
          el("div", { class: "ticker-row" },
            el("span", { class: "ticker" }, o.ticker),
            el("span", { class: "change-badge " + changeCls }, changeStr)
          ),
          el("div", { class: "pcat" }, t("crypt.network") + " · " + (t("net." + o.network) || o.network))
        )
      )
    ),
    el("div", { class: "oname" }, o.name[state.lang]),
    el("div", { class: "rate-strip" },
      el("span", { class: "lbl" }, t("crypt.price")),
      el("span", { class: "val" }, "$ " + (o.priceUSD >= 1000
        ? o.priceUSD.toLocaleString("en-US", { maximumFractionDigits: 0 })
        : o.priceUSD.toFixed(2)))
    ),
    el("div", { class: "metrics" },
      el("div", { class: "metric" }, el("div", { class: "k" }, t("crypt.cap")),    el("div", { class: "v" }, capLabel)),
      el("div", { class: "metric" }, el("div", { class: "k" }, t("crypt.change")), el("div", { class: "v " + changeCls }, changeStr))
    ),
    tags,
    el("div", { class: "ofoot" },
      el("a", { class: "external-link", href: o.url, target: "_blank", rel: "noopener" },
        t("go.crypto"),
        el("span", null, "↗")
      )
    )
  );
}

function buildGemCard(o) {
  const changeCls = o.change1y > 0 ? "up" : o.change1y < 0 ? "down" : "flat";
  const changeStr = (o.change1y > 0 ? "+" : "") + o.change1y.toFixed(1) + "%";

  const tags = el("div", { class: "otags" });
  tags.appendChild(el("span", { class: "tag" }, t("stone." + o.stone) || o.stone));
  tags.appendChild(el("span", { class: "tag" }, t("gem.grade") + ": " + o.grade));
  tags.appendChild(el("span", { class: "tag" }, t("gem.tog.liq") + ": " + t("liq." + o.liq)));

  return el("div", { class: "card offer-card interactive" },
    el("div", { class: "top" },
      el("div", { class: "provider" },
        el("div", { class: "pavatar" }, o.stone.slice(0, 2).toUpperCase()),
        el("div", null,
          el("div", { class: "ticker-row" },
            el("span", { class: "ticker" }, o.stone.toUpperCase()),
            el("span", { class: "change-badge " + changeCls }, changeStr)
          ),
          el("div", { class: "pcat" }, t("stone." + o.stone) + " · " + o.color)
        )
      )
    ),
    el("div", { class: "oname" }, o.name[state.lang]),
    el("div", { class: "rate-strip" },
      el("span", { class: "lbl" }, t("gem.price")),
      el("span", { class: "val" }, "$ " + o.priceUSD.toLocaleString("en-US", { maximumFractionDigits: 0 }))
    ),
    el("div", { class: "metrics" },
      el("div", { class: "metric" }, el("div", { class: "k" }, t("gem.weight")),  el("div", { class: "v" }, o.weightLabel)),
      el("div", { class: "metric" }, el("div", { class: "k" }, t("gem.change")),  el("div", { class: "v " + changeCls }, changeStr))
    ),
    tags,
    el("div", { class: "ofoot" },
      el("a", { class: "external-link", href: o.url, target: "_blank", rel: "noopener" },
        t("go.gems"),
        el("span", null, "↗")
      )
    )
  );
}

function buildSkinCard(o) {
  const changeCls = o.change30d > 0 ? "up" : o.change30d < 0 ? "down" : "flat";
  const changeStr = (o.change30d > 0 ? "+" : "") + o.change30d.toFixed(1) + "%";
  const gameLabel = t("game." + o.game) || o.game;
  const wearLabel = o.wear ? (t("wear." + o.wear) || o.wear) : null;

  const tags = el("div", { class: "otags" });
  tags.appendChild(el("span", { class: "tag" }, gameLabel));
  if (wearLabel) tags.appendChild(el("span", { class: "tag" }, wearLabel));
  if (o.float != null) tags.appendChild(el("span", { class: "tag" }, t("skin.float") + ": " + parseFloat(o.float).toFixed(4)));

  return el("div", { class: "card offer-card interactive" },
    el("div", { class: "top" },
      el("div", { class: "provider" },
        el("div", { class: "pavatar" }, o.game.slice(0, 2).toUpperCase()),
        el("div", null,
          el("div", { class: "ticker-row" },
            el("span", { class: "ticker" }, gameLabel),
            el("span", { class: "change-badge " + changeCls }, changeStr)
          ),
          el("div", { class: "pcat" }, (wearLabel ? wearLabel + " · " : "") + o.platform)
        )
      )
    ),
    el("div", { class: "oname" }, o.name[state.lang]),
    el("div", { class: "rate-strip" },
      el("span", { class: "lbl" }, t("skin.price")),
      el("span", { class: "val" }, "$ " + o.priceUSD.toFixed(2))
    ),
    el("div", { class: "metrics" },
      el("div", { class: "metric" }, el("div", { class: "k" }, t("skin.game")),   el("div", { class: "v" }, gameLabel)),
      el("div", { class: "metric" }, el("div", { class: "k" }, t("skin.change")), el("div", { class: "v " + changeCls }, changeStr))
    ),
    tags,
    el("div", { class: "ofoot" },
      el("a", { class: "external-link", href: o.url, target: "_blank", rel: "noopener" },
        t("go.skin"),
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
    } else if (meta.kind === "precious-metals") {
      if (f.category !== "all") chips.push(["category", t("metal.cat." + f.category)]);
      if (f.liq !== "all")      chips.push(["liq", t("metal.tog.liq") + ": " + t("metal.tog.liq." + f.liq)]);
      if (f.sort !== "price.desc") chips.push(["sort", t("metal.sort." + f.sort)]);
      if (f.search) chips.push(["search", "« " + f.search + " »"]);
    } else if (meta.kind === "crypto") {
      if (f.network !== "all") chips.push(["network", t("crypt.network") + ": " + (t("net." + f.network) || f.network)]);
      if (f.staking !== "all") chips.push(["staking", t("crypt.tog.staking") + ": " + t("crypt.tog.staking." + f.staking)]);
      if (f.sort !== "cap.desc") chips.push(["sort", t("crypt.sort." + f.sort)]);
      if (f.search) chips.push(["search", "« " + f.search + " »"]);
    } else if (meta.kind === "gems") {
      if (f.stone !== "all") chips.push(["stone", t("stone." + f.stone) || f.stone]);
      if (f.liq !== "all")   chips.push(["liq", t("gem.tog.liq") + ": " + t("gem.tog.liq." + f.liq)]);
      if (f.sort !== "price.desc") chips.push(["sort", t("gem.sort." + f.sort)]);
      if (f.search) chips.push(["search", "« " + f.search + " »"]);
    } else if (meta.kind === "gaming") {
      if (f.game !== "all") chips.push(["game", t("skin.tog.game") + ": " + (f.game === "cs2" ? t("skin.tog.cs2") : t("skin.tog.other"))]);
      if (f.wear !== "all") chips.push(["wear", t("wear." + f.wear) || f.wear]);
      if (f.sort !== "price.desc") chips.push(["sort", t("skin.sort." + f.sort)]);
      if (f.search) chips.push(["search", "« " + f.search + " »"]);
    } else if (meta.kind === "mudaraba") {
      if (f.provider !== "all") chips.push(["provider", t("mdr.provider") + ": " + f.provider]);
      if (f.term !== "all") chips.push(["term", t("mdr.filter.term." + f.term)]);
      if (f.onlineOpen !== "all") chips.push(["onlineOpen", t("mdr.tog.online") + ": " + t("mdr.tog." + f.onlineOpen)]);
      if (f.sort !== "rate.desc") chips.push(["sort", t("mdr.sort." + f.sort)]);
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
    const meta = (typeof OFFERS !== "undefined") ? OFFERS[state.detailId] : null;
    const defaultSortMap = { deposit: "rate.desc", mudaraba: "rate.desc", stock: "div.desc", crypto: "cap.desc", "precious-metals": "price.desc", gems: "price.desc", gaming: "price.desc" };
    const defaultSort = (meta && defaultSortMap[meta.kind]) || "relevance";
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
    } else if (meta.kind === "crypto") {
      state.detailFilters.crypto = { search: "", sort: "cap.desc", network: "all", staking: "all" };
    } else if (meta.kind === "precious-metals") {
      state.detailFilters["precious-metals"] = { search: "", sort: "price.desc", category: "all", liq: "all" };
    } else if (meta.kind === "gems") {
      state.detailFilters.gems = { search: "", sort: "price.desc", stone: "all", liq: "all" };
    } else if (meta.kind === "gaming") {
      state.detailFilters.gaming = { search: "", sort: "price.desc", game: "all", wear: "all" };
    } else if (meta.kind === "mudaraba") {
      state.detailFilters.mudaraba = { search: "", sort: "rate.desc", provider: "all", term: "all", onlineOpen: "all" };
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

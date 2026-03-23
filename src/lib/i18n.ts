import { createContext, useContext } from "react";

export type Language = "hu" | "en";

export const translations = {
  // Nav
  "nav.home": { hu: "Főoldal", en: "Home" },
  "nav.about": { hu: "Rólunk", en: "About" },
  "nav.products": { hu: "Termékeink", en: "Products" },
  "nav.contact": { hu: "Kapcsolat", en: "Contact" },

  // Hero
  "hero.headline": { hu: "Gyártunk. Testreszabunk. Szállítunk.", en: "We Manufacture. We Customize. We Deliver." },
  "hero.subheadline": {
    hu: "Fagyasztott pékáru, pizza, snackek és desszertek — ipari méretben, B2B partnereknek.",
    en: "Frozen bakery, pizza, snacks and desserts — crafted for B2B partners at industrial scale.",
  },
  "hero.cta.products": { hu: "Termékeink", en: "Explore Our Products" },
  "hero.cta.contact": { hu: "Kapcsolatfelvétel", en: "Get in Touch" },

  // Trust Bar
  "trust.haccp": { hu: "HACCP tanúsítvánnyal rendelkezünk", en: "HACCP Certified" },
  "trust.privatelabel": { hu: "Saját márkás gyártás", en: "Private Label Available" },
  "trust.bakeoff": { hu: "Bake-Off & Kész termékek", en: "Bake-Off & Ready-to-Serve" },
  "trust.wellness": { hu: "Dia-Wellness termékcsalád", en: "Dia-Wellness Line" },

  // Pillars
  "pillar.headline": { hu: "Miért választanak minket?", en: "Why Choose Us?" },
  "pillar.stable.title": { hu: "Stabil gyártási háttér", en: "Stable Manufacturing" },
  "pillar.stable.desc": {
    hu: "Modern üzem, folyamatos kapacitás, megbízható minőség.",
    en: "Modern facility, continuous capacity, reliable quality.",
  },
  "pillar.flexible.title": { hu: "Rugalmas együttműködés", en: "Flexible Cooperation" },
  "pillar.flexible.desc": {
    hu: "Gyors alkalmazkodás a piaci és partneri igényekhez.",
    en: "Fast adaptation to market and partner needs.",
  },
  "pillar.complex.title": { hu: "Komplex megoldások", en: "Complex Solutions" },
  "pillar.complex.desc": {
    hu: "Gyártás és disztribúció egy kézben.",
    en: "Manufacturing and distribution in one hand.",
  },
  "pillar.efficient.title": { hu: "Hatékony működés", en: "Efficient Operation" },
  "pillar.efficient.desc": {
    hu: "Optimalizált folyamatok → alacsonyabb költségek.",
    en: "Optimized processes → lower costs.",
  },

  // Product Categories
  "cat.pizza": { hu: "Pizza & Snack", en: "Pizza & Snacks" },
  "cat.bakery": { hu: "Fagyasztott pékáru", en: "Frozen Bakery" },
  "cat.desserts": { hu: "Desszertek & Sütemények", en: "Desserts & Pastry" },
  "cat.wellness": { hu: "Dia-Wellness", en: "Dia-Wellness" },
  "cat.all": { hu: "Összes", en: "All" },
  "cat.pizza.desc": {
    hu: "Nápolyi stílusú, kézzel nyújtott pizza — prémium minőség ipari méretben. Légies tészta, ropogós kívül, puha belül.",
    en: "Neapolitan-style handstretched pizza — premium quality at industrial scale. Airy crust, crispy outside, soft inside.",
  },
  "cat.bakery.desc": {
    hu: "Kézműves jelleg, prémium minőség — ipari méretben gyártva.",
    en: "Artisan character, premium quality — produced at industrial scale.",
  },
  "cat.desserts.desc": {
    hu: "Kézműves prémium sütemények — a házi sütés íze ipari mennyiségben.",
    en: "Artisan-character premium pastry — the taste of home-baking at industrial volume.",
  },

  // About Teaser
  "about.teaser": {
    hu: "Nem csak termékeket adunk el, gyártási kapacitást és rugalmasságot. Az ön igényei határozzák meg, mit gyártunk.",
    en: "We don't just sell products. We offer manufacturing capacity and flexibility, shaped entirely by your needs.",
  },
  "about.learnmore": { hu: "Tudjon meg többet", en: "Learn More" },

  // About Page (old keys removed — see premium keys below)
  "about.offer.flexible": { hu: "Rugalmas gyártási kapacitás", en: "Flexible manufacturing capacity" },
  "about.offer.changeover": { hu: "Gyors termékváltás", en: "Fast product line changeovers" },
  "about.offer.privatelabel": { hu: "Saját márkás gyártás", en: "Private Label production" },
  "about.offer.development": { hu: "Partneri termékfejlesztés", en: "Partner-driven product development" },

  // Dia-Wellness
  "dia.headline": { hu: "Két vállalat — egy jövőkép", en: "Two Companies — One Vision" },
  "dia.body": {
    hu: "Büszke gyártópartnerei vagyunk a Dia-Wellnessnek. Együtt hiszünk abban, hogy az egészséges életmód mindenki számára elérhető kell legyen.",
    en: "We are proud manufacturing partners of Dia-Wellness. Together, we believe healthy living should be accessible to everyone.",
  },
  "dia.protein": { hu: "Magas fehérjetartalom (borsófehérje)", en: "High in protein (pea protein)" },
  "dia.amino": { hu: "Teljes aminosav profil", en: "Complete amino acid profile" },
  "dia.carbs": { hu: "Csökkentett szénhidráttartalom", en: "Reduced carbohydrates" },
  "dia.fiber": { hu: "Magas rosttartalom", en: "High in dietary fiber" },
  "dia.vitamins": { hu: "B2, B6, B12 vitamin, folsav", en: "Rich in vitamins B2, B6, B12, folate" },
  "dia.minerals": { hu: "Magnézium és cink", en: "Rich in magnesium and zinc" },
  "dia.calories": { hu: "Alacsony kalória — cukorbetegeknek is", en: "Low calorie — suitable for diabetics" },

  // Production
  "prod.bakeoff": {
    hu: "Bake-Off termékek (befejező sütést igénylő)",
    en: "Bake-Off products (require finishing bake)",
  },
  "prod.readytoserve": {
    hu: "Kész termékek (felolvasztás után fogyasztható)",
    en: "Ready-to-Serve products (thaw and serve)",
  },
  "prod.custom": { hu: "Egyedi receptúra fejlesztés", en: "Custom recipe development" },
  "prod.packaging": { hu: "Saját márkás csomagolás", en: "Private label packaging" },

  // HACCP
  "haccp.title": { hu: "HACCP tanúsítvány", en: "HACCP Certification" },
  "haccp.body": {
    hu: "Élelmiszerbiztonsági rendszerünk megfelel a legmagasabb nemzetközi szabványoknak.",
    en: "Our food safety management system meets the highest international standards.",
  },

  // Products page
  "products.intro": {
    hu: "Teljes portfóliónk — Bake-Off és kész termék formátumban. Saját márkás és egyedi receptúrák igény szerint.",
    en: "Our full portfolio — available in Bake-Off and Ready-to-Serve formats. Private Label and custom recipes available on request.",
  },
  "products.cta.headline": {
    hu: "Egyedi receptúrára vagy saját márkás gyártásra van szüksége?",
    en: "Need a custom recipe or private label?",
  },
  "products.cta.body": {
    hu: "Az Ön specifikációja szerint gyártunk.",
    en: "We manufacture to your specification.",
  },
  "products.cta.button": { hu: "Ajánlatkérés", en: "Request a Quote" },
  "products.wellness.headline": {
    hu: "Az élelmiszer jövője — gyors, kényelmes és egészségtudatos",
    en: "The Future of Food — Fast, Convenient and Health-Conscious",
  },
  "products.wellness.body": {
    hu: "Smart Bakery termékek a Dia-Wellness-szel közösen fejlesztve:",
    en: "Smart Bakery products co-developed with Dia-Wellness:",
  },

  // Product badges
  "badge.bakeoff": { hu: "Bake-Off", en: "Bake-Off" },
  "badge.readytoserve": { hu: "Kész termék", en: "Ready-to-Serve" },
  "badge.diawellness": { hu: "Dia-Wellness", en: "Dia-Wellness" },
  "badge.bestseller": { hu: "Bestseller", en: "Bestseller" },

  // Contact
  "contact.title": { hu: "Kapcsolat", en: "Contact Us" },
  "contact.name": { hu: "Teljes név", en: "Full Name" },
  "contact.company": { hu: "Cégnév", en: "Company Name" },
  "contact.email": { hu: "E-mail", en: "Email" },
  "contact.phone": { hu: "Telefon", en: "Phone" },
  "contact.message": { hu: "Üzenet", en: "Message" },
  "contact.interest": { hu: "Érdeklődés tárgya...", en: "I am interested in..." },
  "contact.interest.quote": { hu: "Ajánlatkérés", en: "Quote request" },
  "contact.interest.privatelabel": { hu: "Saját márkás gyártás", en: "Private Label" },
  "contact.interest.partnership": { hu: "Partnerség", en: "Partnership" },
  "contact.interest.other": { hu: "Egyéb", en: "Other" },
  "contact.send": { hu: "Üzenet küldése", en: "Send Message" },
  "contact.success": { hu: "Üzenet elküldve!", en: "Message sent successfully!" },
  "contact.error": { hu: "Hiba történt. Próbálja újra.", en: "An error occurred. Please try again." },
  "contact.address": { hu: "Cím", en: "Address" },
  "contact.persons": { hu: "Kapcsolattartók", en: "Contact Persons" },

  // Footer
  "footer.rights": {
    hu: "© 2025 Global Trade & Production Kft. Minden jog fenntartva.",
    en: "© 2025 Global Trade & Production Kft. All rights reserved.",
  },
  "footer.address": { hu: "3390 Füzesabony, Pusztaszikszó", en: "3390 Füzesabony, Pusztaszikszó" },
  "footer.tagline": { hu: "Több. Jobb. Egyedi.", en: "More. Better. Distinct." },

  // Stats
  "stats.headline": { hu: "Számokban a megbízhatóság", en: "Reliability in Numbers" },
  "stats.subtitle": { hu: "Csapatunk egy átlagos napja", en: "Our team on a typical day" },
  "stats.coffee": { hu: "csésze kávé naponta", en: "cups of coffee daily" },
  "stats.trucks": { hu: "napi elindított fuvar", en: "daily dispatched routes" },
  "stats.partners": { hu: "aktív partnerkapcsolat", en: "active partnerships" },
  "stats.stock": { hu: "folyamatosan elérhető készlet", en: "stock always available" },

  // Testimonials
  "testimonials.headline": { hu: "Akik már bíznak bennünk", en: "Trusted by Industry Leaders" },
  "testimonials.subtitle": {
    hu: "Partnereink között megtalálhatók a hazai élelmiszeripar és horeca szektor meghatározó szereplői.",
    en: "Our partners include leading players in the domestic food industry and HoReCa sector.",
  },
  "testimonial.text.1": {
    hu: "A Global Trade & Production megbízható partner, stabil minőséggel és gyors reakcióidővel. A közös munka során mindig rugalmas és megoldásorientált hozzáállást tapasztaltunk.",
    en: "Global Trade & Production is a reliable partner with stable quality and fast response times. We always experience a flexible, solution-oriented approach.",
  },
  "testimonial.role.1": { hu: "Beszerzési vezető", en: "Procurement Manager" },
  "testimonial.type.1": { hu: "Élelmiszer nagyker", en: "Food Wholesale" },
  "testimonial.text.2": {
    hu: "A termékek minősége és az ellátás biztonsága kiemelkedő. Hosszú távon számítunk rájuk beszállítóként.",
    en: "Product quality and supply reliability are outstanding. We count on them as a long-term supplier.",
  },
  "testimonial.role.2": { hu: "Ügyvezető", en: "Managing Director" },
  "testimonial.type.2": { hu: "HORECA partner", en: "HoReCa Partner" },
  "testimonial.text.3": {
    hu: "Kiváló ár-érték arány és megbízható szállítási határidők. A saját márkás gyártás különösen professzionális.",
    en: "Excellent value for money and reliable delivery times. Private label production is particularly professional.",
  },
  "testimonial.role.3": { hu: "Kategória menedzser", en: "Category Manager" },
  "testimonial.type.3": { hu: "Országos lánc", en: "National Chain" },
  "testimonial.text.4": {
    hu: "Rugalmasan alkalmazkodnak az igényeinkhez, legyen szó mennyiségről vagy egyedi receptúráról. Igazi partneri hozzáállás.",
    en: "They flexibly adapt to our needs, whether it's volume or custom recipes. A true partnership approach.",
  },
  "testimonial.role.4": { hu: "Üzletfejlesztési igazgató", en: "Business Development Director" },
  "testimonial.type.4": { hu: "Nagykereskedő", en: "Wholesaler" },
  "testimonial.text.5": {
    hu: "A Dia-Wellness termékek bevezetése óta jelentősen nőtt az egészségtudatos vásárlóink elégedettsége.",
    en: "Since introducing Dia-Wellness products, satisfaction among our health-conscious customers has significantly increased.",
  },
  "testimonial.role.5": { hu: "Beszerzési igazgató", en: "Purchasing Director" },
  "testimonial.type.5": { hu: "Retail lánc", en: "Retail Chain" },
  "testimonial.text.6": {
    hu: "Gyors és precíz szállítások, konzisztens termékminőség. Egyszerűen lehet rájuk számítani.",
    en: "Fast and precise deliveries, consistent product quality. You can simply count on them.",
  },
  "testimonial.role.6": { hu: "Logisztikai vezető", en: "Logistics Manager" },
  "testimonial.type.6": { hu: "Disztribútor", en: "Distributor" },
  "testimonial.text.7": {
    hu: "A termékfejlesztési folyamat során végig aktívan támogattak. Az eredmény egy tökéletesen piacra szabott termékcsalád.",
    en: "They actively supported us throughout the product development process. The result is a perfectly market-tailored product line.",
  },
  "testimonial.role.7": { hu: "Termékfejlesztő", en: "Product Developer" },
  "testimonial.type.7": { hu: "Saját márkás partner", en: "Private Label Partner" },
  "testimonial.text.8": {
    hu: "Az éttermeink vendégei imádják a fagyasztott pizza alapokat. A minőség mindig egyenletes, a szállítás pontos.",
    en: "Our restaurant guests love the frozen pizza bases. Quality is always consistent, delivery is punctual.",
  },
  "testimonial.role.8": { hu: "Étteremvezető", en: "Restaurant Manager" },
  "testimonial.type.8": { hu: "HoReCa lánc", en: "HoReCa Chain" },
  "testimonial.text.9": {
    hu: "Kevés beszállítóval dolgoztunk ilyen gördülékenyen. A kommunikáció gyors, a problémamegoldás azonnali.",
    en: "We've worked with few suppliers this smoothly. Communication is fast, problem-solving is immediate.",
  },
  "testimonial.role.9": { hu: "Operációs vezető", en: "Operations Manager" },
  "testimonial.type.9": { hu: "Ipari felhasználó", en: "Industrial User" },
  "testimonial.text.10": {
    hu: "A közös termékfejlesztés eredményeként olyan innovatív termékeket hoztunk létre, amelyek valódi versenyelőnyt jelentenek.",
    en: "Through joint product development, we created innovative products that represent a real competitive advantage.",
  },
  "testimonial.role.10": { hu: "Márkaigazgató", en: "Brand Director" },
  "testimonial.type.10": { hu: "FMCG vállalat", en: "FMCG Company" },

  // About page - premium
  "about.headline": { hu: "Global Trade & Production Kft.", en: "Global Trade & Production Kft." },
  "about.subtitle": {
    hu: "A fagyasztott élelmiszeripar megbízható gyártója és rugalmas ellátási partnere.",
    en: "A reliable manufacturer and flexible supply partner in the frozen food industry.",
  },
  "about.story": {
    hu: "A Global Trade & Production Kft. egy dinamikusan fejlődő, magyar tulajdonú élelmiszeripari vállalat, amely fagyasztott késztermékek gyártására, és partneri igény esetén élelmiszer disztribúcióra specializálódott. Füzesabonyi üzemünkben korszerű technológiával, szigorú minőségbiztosítási elvek mentén állítunk elő termékeket, elsősorban nagykereskedelmi, horeca és kiskereskedelmi partnereink számára. Működésünk középpontjában a megbízhatóság, a rugalmasság és a folyamatos fejlődés áll.",
    en: "Global Trade & Production Kft. is a dynamically growing, Hungarian-owned food industry company specializing in the production of frozen ready-made products and, upon partner request, food distribution. In our Füzesabony facility, we produce goods using modern technology and strict quality assurance principles, primarily for wholesale, HoReCa and retail partners. Reliability, flexibility and continuous improvement are at the core of everything we do.",
  },
  "about.values.headline": { hu: "Amit képviselünk", en: "What We Stand For" },
  "about.values.intro": {
    hu: "Hiszünk abban, hogy a modern élelmiszeriparban a siker kulcsa a minőség, a hatékonyság és az alkalmazkodóképesség egyensúlya. Emiatt folyamatosan fejlesztjük gyártási kapacitásunkat és bővítjük termékportfóliónkat, legyen szó új ízekről, formátumokról vagy csomagolási megoldásokról.",
    en: "We believe the key to success in modern food production lies in balancing quality, efficiency and adaptability. For this reason, we continuously develop our manufacturing capacity and expand our product range, whether that means new flavours, formats or packaging solutions.",
  },
  "about.values.description": {
    hu: "Működésünket a piaci igényekhez igazítjuk. Figyelemmel kísérjük a trendeket, meghallgatjuk partnereink visszajelzéseit és ennek megfelelően alakítjuk a fejlesztési irányainkat. Nem elég jónak lenni, jobbnak kell lenni, mint tegnap.",
    en: "We align our operations with market demands. We monitor trends, listen to partner feedback and shape our development roadmap accordingly. Being good is not enough. We aim to be better than yesterday.",
  },
  "about.vision.headline": { hu: "Jövőképünk", en: "Our Vision" },
  "about.vision.text": {
    hu: "Célunk, hogy a Global Trade & Production Kft. a hazai és regionális élelmiszeripar meghatározó szereplőjévé váljon, miközben stabil minőséget, megbízható ellátást és folyamatos innovációt biztosít partnereinek.",
    en: "Our goal is for Global Trade & Production Kft. to become a defining player in the domestic and regional food industry, while providing stable quality, reliable supply and continuous innovation to its partners.",
  },
  "about.dist.headline": { hu: "Gyártás és disztribúció egy kézben", en: "Manufacturing & Distribution in One Hand" },
  "about.dist.intro": {
    hu: "Egyedülálló előnyünk, hogy a gyártás mellett disztribútori szerepet is vállalunk. Partnereink számára ez azt jelenti, hogy több termékkategóriát egyetlen forrásból kapnak meg, csökken a beszerzési komplexitás, egyszerűsödik a készletezés és a logisztika is hatékonyabbá válik. Egy telefonhívás, egy számla, egy megbízható háttér.",
    en: "Our unique advantage is that we take on a distribution role alongside manufacturing. For our partners, this means receiving multiple product categories from a single source, less procurement complexity, simpler stock management and more efficient logistics. One call, one invoice, one reliable partner.",
  },
  "about.partner.headline": { hu: "Partnerre szabott működés", en: "Partner-Tailored Operations" },
  "about.partner.text": {
    hu: "Hiszünk abban, hogy nincs két egyforma ügyfél. Nem terméket adunk el, hanem megoldást szállítunk. Minden együttműködés az igények alapos felmérésével kezdődik, annak függvényében, milyen termékekre van szükség, milyen mennyiségben, milyen ütemezéssel.",
    en: "We believe no two clients are alike. We don't sell products; we deliver solutions. Every partnership begins with a thorough assessment of needs, depending on what products are required, in what quantities and on what schedule.",
  },
  "about.partner.description": {
    hu: "Ennek alapján alakítjuk a gyártást, a csomagolást és a beszállítási logisztikát. Ha változik az igény, mi is alkalmazkodunk. Legyen szó szezonális csúcsokról, új termékek bevezetéséről vagy mennyiségi módosításokról. A rugalmasság nálunk nem szlogen, hanem a mindennapjaink része.",
    en: "Based on this, we tailor production, packaging and delivery logistics accordingly. When needs change, we adapt. Whether that involves seasonal peaks, new product launches or volume adjustments, flexibility is not a slogan for us. It is how we work every day.",
  },
  "about.segments.headline": { hu: "Fő partneri szegmenseink", en: "Our Key Partner Segments" },
  "about.segment.horeca": { hu: "HoReCa", en: "HoReCa" },
  "about.segment.wholesale": { hu: "Nagykereskedők", en: "Wholesalers" },
  "about.segment.retail": { hu: "Retail láncok", en: "Retail chains" },
  "about.segment.industrial": { hu: "Ipari felhasználók", en: "Industrial users" },
  "about.cta.headline": { hu: "Dolgozzunk együtt!", en: "Let's work together" },
  "about.cta.body": {
    hu: "Vegye fel velünk a kapcsolatot — munkatársaink 48 órán belül visszajeleznek.",
    en: "Get in touch — our team will respond within 48 hours.",
  },
  "about.cta.button": { hu: "Kapcsolatfelvétel", en: "Get in Touch" },

  "about.owner.placeholder": { hu: "Kép hamarosan", en: "Photo coming soon" },
  "about.dia.headline": {
    hu: "Dia-Wellness – tudatos választás, kompromisszumok nélkül",
    en: "Dia-Wellness — Conscious Choice Without Compromise",
  },
  "about.dia.text": {
    hu: "A Dia-Wellness márka egy innovatív szemléletet képvisel az élelmiszeriparban, amely a tudatos, kiegyensúlyozott táplálkozást helyezi előtérbe. A Global Trade & Production Kft. kiemelt együttműködésben dolgozik a Dia-Wellness márkával, amely lehetővé teszi számunkra, hogy csökkentett szénhidráttartalmú termékeket gyártsunk, innovatív alapanyagokat alkalmazzunk, és a piaci igényekhez gyorsan alkalmazkodó portfóliót építsünk.",
    en: "The Dia-Wellness brand represents an innovative approach in the food industry, prioritizing conscious, balanced nutrition. Global Trade & Production Kft. works in close collaboration with Dia-Wellness, enabling us to produce reduced-carbohydrate products, apply innovative ingredients, and build a portfolio that quickly adapts to market needs.",
  },
  // Cookie consent
  "cookie.title": { hu: "Sütik és adatvédelem", en: "Cookies & Privacy" },
  "cookie.desc": {
    hu: "Az oldal működéséhez szükséges sütiket mindig használjuk. Az analitikai és marketing sütiket csak az Ön hozzájárulásával alkalmazzuk.",
    en: "We always use essential cookies. Analytics and marketing cookies are only used with your consent.",
  },
  "cookie.acceptAll": { hu: "Mindet elfogadom", en: "Accept all" },
  "cookie.rejectAll": { hu: "Csak szükségesek", en: "Essential only" },
  "cookie.customize": { hu: "Beállítások", en: "Customize" },
  "cookie.save": { hu: "Mentés", en: "Save preferences" },
  "cookie.necessary": { hu: "Szükséges (mindig aktív)", en: "Essential (always on)" },
  "cookie.analytics": { hu: "Analitikai (GA4)", en: "Analytics (GA4)" },
  "cookie.marketing": { hu: "Marketing (LinkedIn — hamarosan)", en: "Marketing (LinkedIn — coming soon)" },
  "cookie.manage": { hu: "Cookie beállítások", en: "Cookie settings" },
} as const;

export type TranslationKey = keyof typeof translations;

export const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
}>({ lang: "hu", setLang: () => {} });

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslation() {
  const { lang } = useLanguage();
  return (key: TranslationKey) => translations[key][lang];
}

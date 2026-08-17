import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adatvédelmi tájékoztató — Global Trade & Production Kft.',
  description: 'Tájékoztató a global-trade.hu weboldalon végzett adatkezelésről — GDPR és Info.tv. alapján.',
  alternates: {
    canonical: '/adatvedelem',
  },
};

export default function AdatvedelemPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold text-primary mb-2">Adatvédelmi tájékoztató</h1>
      <p className="text-sm text-muted-foreground mb-10">Hatályos: 2025. január 1-től</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">1. Az adatkezelő adatai</h2>
        <div className="text-sm text-foreground/80 space-y-1">
          <p><strong>Cégnév:</strong> Global Trade & Production Kft.</p>
          <p><strong>Székhely:</strong> 3390 Füzesabony, Pusztaszikszó</p>
          <p><strong>Cégjegyzékszám:</strong> 10 09 041264</p>
          <p><strong>Adószám:</strong> 32782071-2-10</p>
          <p><strong>Kapcsolattartó:</strong> Lőrincz Ákos</p>
          <p><strong>E-mail:</strong> lorincz@global-trade.hu</p>
          <p><strong>Telefon:</strong> +36 30 953 8702</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">2. A tájékoztató célja és jogalapja</h2>
        <p className="text-sm text-foreground/80">
          Jelen tájékoztató az Európai Parlament és a Tanács (EU) 2016/679 rendelete (GDPR) és a
          2011. évi CXII. törvény (Info.tv.) alapján tájékoztatja az érintetteket a global-trade.hu
          weboldalon végzett adatkezelésről.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">3. Kezelt adatok és adatkezelési célok</h2>

        <h3 className="text-base font-semibold text-foreground mb-2 mt-4">3.1 Kapcsolatfelvételi űrlap</h3>
        <div className="text-sm text-foreground/80 space-y-2">
          <p><strong>Kezelt adatok:</strong></p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>Teljes név (kötelező)</li>
            <li>Cégnév (kötelező)</li>
            <li>E-mail-cím (kötelező)</li>
            <li>Telefonszám (nem kötelező)</li>
            <li>Érdeklődés tárgya (kötelező)</li>
            <li>Üzenet szövege (kötelező)</li>
          </ul>
          <p><strong>Adatkezelés célja:</strong> Az üzleti érdeklődés megválaszolása, kapcsolatfelvétel.</p>
          <p>
            <strong>Jogalap:</strong> GDPR 6. cikk (1) bek. a) pont — az érintett önkéntes hozzájárulása
            (az űrlap kitöltésével és elküldésével adja meg).
          </p>
          <p><strong>Adatmegőrzési idő:</strong> Az üzleti levelezésre vonatkozó szabályok szerint legfeljebb 5 év.</p>
          <p><strong>Tárolás módja:</strong> Az adatok kizárólag e-mailben kerülnek továbbításra; adatbázisban nem tároljuk.</p>
        </div>

        <h3 className="text-base font-semibold text-foreground mb-2 mt-6">3.2 Analitikai sütik (Google Analytics 4) — csak hozzájárulás esetén</h3>
        <div className="text-sm text-foreground/80 space-y-2">
          <p><strong>Kezelt adatok:</strong> Anonimizált látogatási adatok (oldalnézetek, munkamenetek, forrás).</p>
          <p><strong>Adatkezelés célja:</strong> A Weboldal látogatottságának mérése, felhasználói élmény javítása.</p>
          <p><strong>Jogalap:</strong> GDPR 6. cikk (1) bek. a) pont — cookie-hozzájárulás.</p>
          <p><strong>Adatmegőrzési idő:</strong> 14 hónap (Google Analytics alapértelmezés).</p>
          <p><strong>Adatfeldolgozó:</strong> Google LLC (lásd 4. pont).</p>
        </div>

        <h3 className="text-base font-semibold text-foreground mb-2 mt-6">3.3 Marketing sütik (LinkedIn Insight Tag) — csak hozzájárulás esetén</h3>
        <div className="text-sm text-foreground/80 space-y-2">
          <p><strong>Kezelt adatok:</strong> Anonimizált látogatási adatok LinkedIn-tagok számára.</p>
          <p><strong>Adatkezelés célja:</strong> LinkedIn kampányok hatékonyságának mérése, remarketing.</p>
          <p><strong>Jogalap:</strong> GDPR 6. cikk (1) bek. a) pont — cookie-hozzájárulás.</p>
          <p><strong>Adatfeldolgozó:</strong> LinkedIn Ireland Unlimited Company (lásd 4. pont).</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">4. Adatfeldolgozók</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-3 border border-border font-semibold">Név</th>
                <th className="text-left p-3 border border-border font-semibold">Székhely</th>
                <th className="text-left p-3 border border-border font-semibold">Feladat</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              <tr>
                <td className="p-3 border border-border">Resend Inc.</td>
                <td className="p-3 border border-border">USA</td>
                <td className="p-3 border border-border">E-mail kézbesítés</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="p-3 border border-border">Google LLC</td>
                <td className="p-3 border border-border">USA</td>
                <td className="p-3 border border-border">Google Analytics 4</td>
              </tr>
              <tr>
                <td className="p-3 border border-border">Vercel Inc.</td>
                <td className="p-3 border border-border">USA</td>
                <td className="p-3 border border-border">Weboldal-tárhely</td>
              </tr>
              <tr className="bg-muted/30">
                <td className="p-3 border border-border">LinkedIn Ireland Unlimited Company</td>
                <td className="p-3 border border-border">Írország / USA</td>
                <td className="p-3 border border-border">LinkedIn Insight Tag</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-foreground/80 mt-4">
          <strong>Harmadik országba (USA) történő adattovábbítás:</strong> A fenti adatfeldolgozók
          az EU–USA Adatvédelmi Keretrendszer (Data Privacy Framework, DPF) hatálya alá tartoznak,
          amely az Európai Bizottság 2023/1795. sz. megfelelőségi határozata alapján megfelelő
          szintű adatvédelmet biztosít.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">5. Az érintett jogai</h2>
        <div className="text-sm text-foreground/80 space-y-2">
          <p>Az érintett az adatkezelőnél az alábbi jogokat gyakorolhatja:</p>
          <ul className="space-y-2 mt-2">
            <li><strong>Hozzáférési jog</strong> (GDPR 15. cikk): Tájékoztatást kérhet az általunk kezelt adatairól.</li>
            <li><strong>Helyesbítési jog</strong> (GDPR 16. cikk): Kérheti pontatlan adatai javítását.</li>
            <li><strong>Törlési jog</strong> (GDPR 17. cikk): Kérheti adatai törlését, ha az adatkezelés jogalapja megszűnt.</li>
            <li><strong>Korlátozási jog</strong> (GDPR 18. cikk): Kérheti az adatkezelés korlátozását.</li>
            <li><strong>Adathordozhatóság</strong> (GDPR 20. cikk): Kérheti adatai géppel olvasható formában való kiadását.</li>
            <li><strong>Tiltakozási jog</strong> (GDPR 21. cikk): Tiltakozhat az adatkezelés ellen.</li>
            <li>
              <strong>Hozzájárulás visszavonása:</strong> Cookie-beállítások bármikor módosíthatók
              az oldal alján található „Cookie beállítások" hivatkozással. Ez nem érinti a visszavonás
              előtti kezelés jogszerűségét.
            </li>
          </ul>
          <p className="mt-3">Joggyakorlás e-mailben: <strong>lorincz@global-trade.hu</strong></p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">6. Adatvédelmi incidensek</h2>
        <p className="text-sm text-foreground/80">
          Adatvédelmi incidens esetén az adatkezelő a GDPR 33. cikke alapján 72 órán belül
          értesíti a felügyeleti hatóságot, és a 34. cikk feltételei teljesülése esetén az érintettet is.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">7. Felügyeleti hatóság</h2>
        <p className="text-sm text-foreground/80 mb-3">
          Az érintett panaszt nyújthat be a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH):
        </p>
        <div className="text-sm text-foreground/80 space-y-1">
          <p><strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.</p>
          <p><strong>Weboldal:</strong>{' '}
            <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:opacity-80">
              www.naih.hu
            </a>
          </p>
          <p><strong>Telefon:</strong> +36 1 391 1400</p>
          <p><strong>E-mail:</strong> ugyfelszolgalat@naih.hu</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">8. Cookie-k (sütik)</h2>
        <p className="text-sm text-foreground/80">
          A Weboldal sütiket alkalmaz. A szükséges sütik az oldal működéséhez elengedhetetlenek,
          analitikai és marketing sütik csak a látogató hozzájárulásával kerülnek alkalmazásra.
          A hozzájárulás az oldal alján megjelenő cookie-sávon adható meg vagy vonható vissza.
          Az egyes cookie-kategóriák az oldal alján található „Cookie beállítások" menüpontban
          tekinthetők meg és kezelhetők.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">9. Módosítás</h2>
        <p className="text-sm text-foreground/80">
          Az adatkezelő e tájékoztatót jogszabályi változás vagy adatkezelési gyakorlat változása
          esetén frissíti. Az aktuális verzió mindig ezen az oldalon érhető el.
        </p>
      </section>
    </div>
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Általános Szerződési Feltételek — Global Trade & Production Kft.',
  description: 'A global-trade.hu weboldal használatára vonatkozó általános szerződési feltételek.',
};

export default function AszfPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold text-primary mb-2">Általános Szerződési Feltételek</h1>
      <p className="text-sm text-muted-foreground mb-10">Hatályos: 2025. január 1-től</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">1. Az üzemeltető adatai</h2>
        <div className="text-sm text-foreground/80 space-y-1">
          <p><strong>Cégnév:</strong> Global Trade & Production Kft.</p>
          <p><strong>Székhely:</strong> 3390 Füzesabony, Pusztaszikszó</p>
          <p><strong>Cégjegyzékszám:</strong> 10 09 041264</p>
          <p><strong>Adószám:</strong> 32782071-2-10</p>
          <p><strong>E-mail:</strong> lorincz@global-trade.hu</p>
          <p><strong>Telefon:</strong> +36 30 953 8702</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">2. Az ÁSZF hatálya és elfogadása</h2>
        <p className="text-sm text-foreground/80">
          Jelen Általános Szerződési Feltételek (ÁSZF) a global-trade.hu domain alatt elérhető weboldal
          (a továbbiakban: Weboldal) használatára vonatkoznak. A Weboldal megtekintésével és használatával
          a látogató (a továbbiakban: Felhasználó) elfogadja az ÁSZF rendelkezéseit.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">3. A Weboldal célja</h2>
        <p className="text-sm text-foreground/80">
          A Weboldal a Global Trade & Production Kft. termékeit és szolgáltatásait mutatja be B2B
          partnerek számára. A Weboldal tájékoztató jellegű; a megjelenített tartalmak nem minősülnek
          ajánlattételnek. Az üzleti feltételeket az egyedi szerződések rögzítik.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">4. Kapcsolatfelvételi űrlap</h2>
        <p className="text-sm text-foreground/80">
          A Weboldalon elérhető kapcsolatfelvételi űrlapon a Felhasználó saját kezdeményezésére
          megadhatja nevét, cégnevét, e-mail-címét, telefonszámát és üzenetét. Az így megadott adatokat
          kizárólag az érdeklődés megválaszolása céljából kezeljük. Az adatkezelés részleteit az{' '}
          <a href="/adatvedelem" className="text-primary underline hover:opacity-80">
            Adatvédelmi tájékoztató
          </a>{' '}
          tartalmazza.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">5. Szellemi tulajdon</h2>
        <p className="text-sm text-foreground/80">
          A Weboldalon megjelenő valamennyi tartalom — szöveg, kép, grafika, logó — a Global Trade &
          Production Kft. szellemi tulajdona, vagy jogszerű felhasználási engedéllyel rendelkezik.
          A tartalmak előzetes írásbeli engedély nélkül nem másolhatók, terjeszthetők vagy felhasználhatók.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">6. Felelősség korlátozása</h2>
        <p className="text-sm text-foreground/80">
          Az üzemeltető a Weboldal tartalmának pontosságára törekszik, azonban a tájékoztató jellegű
          információk esetleges pontatlanságáért felelősséget nem vállal. Az üzemeltető nem felelős
          a Weboldalon elhelyezett külső hivatkozások céloldalainak tartalmáért.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">7. A Weboldal elérhetősége</h2>
        <p className="text-sm text-foreground/80">
          Az üzemeltető fenntartja a jogot, hogy a Weboldalt előzetes értesítés nélkül módosítsa,
          szüneteltesse vagy megszüntesse. Az esetleges leállásokért felelősség nem terheli.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">8. Módosítás</h2>
        <p className="text-sm text-foreground/80">
          Az üzemeltető az ÁSZF-et egyoldalúan módosíthatja. A módosítások a Weboldalon való
          megjelenéssel válnak hatályossá. A Weboldal folyamatos használata a módosított ÁSZF
          elfogadásának minősül.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-3">9. Alkalmazandó jog és jogvita</h2>
        <p className="text-sm text-foreground/80">
          Jelen ÁSZF-re a magyar jog az irányadó. Jogvita esetén a felek elsősorban békés úton
          kísérlik meg a megállapodást. Amennyiben ez nem vezet eredményre, hatáskörrel és
          illetékességgel rendelkező magyar bíróság jár el.
        </p>
      </section>
    </div>
  );
}

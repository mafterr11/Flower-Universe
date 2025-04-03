import LayoutMagazin from "@/components/magazin/LayoutMagazin";
import Product from "@/components/magazin/Product";

const BucheteMireasa = () => {
  return (
    <LayoutMagazin
      title={"Prețuri și opțiuni"}
      description={"Alege piesa principalǎ a nunții tale"}
    >
      <Product
        title="Buchet cu Bujori"
        price={350}
        description="Cu miros îmbietor, în culori pastelate și cu aspect mirobolant, bujorii sunt cea mai bună alegere pentru nunțile din lunile mai-iunie. Împreună cu freziile, care se găsesc pe toată perioada anului, fac echipă bună, iar astilbe adaugă un plus de romantism aspectului total."
        cta="Scrie-ne pentru mai multe detalii!"
        images={[
          "/magazin/buchete-mireasa/1.1.webp", // left
          "/magazin/buchete-mireasa/1.2.webp", // center
          "/magazin/buchete-mireasa/1.3.webp", // right
        ]}
      />
      <Product
        title="Buchet MAGIC"
        price={350}
        description="Trandafirii vuvuzela, de un roșu intens, misterioși și cu un miros ca al  dulceței bunicii, împreună cu acel oxipetalum albastru care vine în completarea acestui buchet, fac împreună echipă bună pentru mireasa sau nașa care vrea să țină-n mână un buchet care va atrage cu siguranță toate privirile."
        cta="Scrie-ne pentru mai multe detalii!"
        images={[
          "/magazin/buchete-mireasa/2.1.webp", // left
          "/magazin/buchete-mireasa/2.2.webp", // center
          "/magazin/buchete-mireasa/2.3.webp", // right
        ]}
      />
      <Product
        title="Buchet cale"
        price={"Lipsa"}
        description="Mă bucur că din ce în ce mai multe mirese renunță la prejudecăți și superstiții și aleg calele pentru buchetul din ziua în care vor fi să fie mirese. Dacă alegi să porți o rochie tip A sau sirenă, din mătase pură, fluidă, cu umeri lăsați sau goi, o coafură cu bucle lejere, un astfel de buchet este cel mai potrivit."
        cta="Scrie-ne pentru mai multe detalii!"
        images={[
          "/magazin/buchete-mireasa/3.1.webp", // left
          "/magazin/buchete-mireasa/3.2.webp", // center
          "/magazin/buchete-mireasa/3.3.webp", // right
        ]}
      />
    </LayoutMagazin>
  );
};

export default BucheteMireasa;

import { Card, CardContent } from "@/components/ui/card";
import a2 from "@/assets/products/A2resized.jpg";
import a13 from "@/assets/products/A13resized.jpg";
import a4 from "@/assets/products/A4resized.jpg";
import a5 from "@/assets/products/A5resized.jpg";
import a6 from "@/assets/products/A6resized.jpg";
import a8 from "@/assets/products/A8resized.jpg";
import a10 from "@/assets/products/A10resized.jpg";
import a11 from "@/assets/products/A11resized.jpg";
import a12 from "@/assets/products/A12resized.jpg";
import a14 from "@/assets/products/A14resized.jpg";
import med1 from "@/assets/products/med1.jpg";
import syrup2 from "@/assets/products/IMG-20210802-WA0003.jpg";

const pills = [
  { img: a2, name: "Etoricoxib Tablets IP — Etrojan 60" },
  { img: a13, name: "Etoricoxib Tablets IP — Etrojan 90" },
  { img: a4, name: "Methylcobalamin Mouth Dissolving Tablets" },
  { img: a5, name: "Cholecalciferol Softgel Capsules" },
  { img: a6, name: "Nortriptyline & Gabapentin Tablets" },
  { img: a8, name: "Rabeprazole Sodium (EC) & Domperidone (SR) Capsules" },
  { img: a10, name: "Pregabalin (SR) & Methylcobalamin Tablets" },
  { img: a11, name: "Calcium Citrate Malate & Vitamin D3 Tablets" },
  { img: a12, name: "Rabeprazole Sodium Gastro Resistant Tablets IP" },
  { img: a14, name: "Sultamicillin Tablets 375mg" },
];

const bottles = [
  { img: med1, name: "Dextromethorphan HBr, Chlorpheniramine Maleate & Phenylephrine HCl Syrup" },
  { img: syrup2, name: "Lactulose Solution U.S.P." },
];

const ProductCard = ({ img, name }: { img: string; name: string }) => (
  <Card className="shadow-card border-border hover:shadow-medical transition-all duration-300 overflow-hidden group">
    <div className="aspect-square bg-secondary/30 overflow-hidden">
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <CardContent className="p-4">
      <p className="text-sm font-medium text-foreground text-center min-h-[3rem]">{name}</p>
    </CardContent>
  </Card>
);

const Products = () => (
  <section id="products" className="py-20 bg-gradient-subtle">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A curated portfolio of quality medicines we proudly market to healthcare providers across India.
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Pills & Capsules</h3>
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        {pills.map((p) => (
          <div
            key={p.name}
            className="w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
          >
            <ProductCard {...p} />
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Bottles & Syrups</h3>
      <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
        {bottles.map((p) => (
          <div key={p.name} className="w-full sm:w-[calc(50%-12px)]">
            <ProductCard {...p} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;

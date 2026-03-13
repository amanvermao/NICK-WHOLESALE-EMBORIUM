import ProductCard from "../components/ProductCard";
import DotGrid from "../components/DotGrid";

const products = [
  {
    id: 1,
    title: "Red Kalyug Plain Satin Silk Banarasi Saree",
    code: "HF60-RED",
    price: 2999,
    currency: "INR",
    description:
      'This Red Kalyug Plain Satin Silk Banarasi Saree blends traditional craftsmanship...',
    image: "https://mohsintextiles.com/cdn/shop/files/red-kalyug-plain-satin-silk-banarasi-saree-sr-0708-pl-rd_02.webp?v=1769406937&width=990"
  },
  {
    id: 2,
    title: "Navy Blue Kalyug Plain Satin Silk Banarasi Saree",
    code: "HF08-NAVY-BLUE",
    price: 2999,
    currency: "INR",
    description:
      'This Navy Blue Kalyug Plain Satin Silk Banarasi Saree blends traditional craftsmanship...',
    image: "https://mohsintextiles.com/cdn/shop/files/auda-kalyug-plain-satin-silk-banarasi-saree-sr-0708-pl-ad_02.webp?v=1769406009&width=990"
  },
  {
    id: 3,
    title: "Pink Golden Zari Katan Silk Banarasi Sareee",
    code: "HF100-PINK",
    price: 4999,
    currency: "INR",
    description:
      'Expertly handwoven Pink Golden Zari Katan Silk Banarasi Saree. Made with high-quality...',
    image: "https://mohsintextiles.com/cdn/shop/files/141-Pink-Murmuri-Jaal-Katan-Silk-Banarasi-Saree.webp?v=1746869986&width=990"
  },
   {
    id: 4,
    title: "Orange and Beige Plain Resham Silk Banarasi Saree",
    code: "HF100-ORANGE",
    price: 1999,
    currency: "INR",
    description:
      'This Orange and Beige Plain Resham Silk Banarasi Saree showcases exquisite...',
    image: "https://mohsintextiles.com/cdn/shop/files/73-Orange-and-Beige-Plain-Resham-Silk-Banarasi-Saree.webp?v=1754528182&width=990"
  }
  
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[450px] flex items-center justify-center text-center overflow-hidden">

        <div className="absolute inset-0">
          <DotGrid
            dotSize={3}
            gap={15}
            baseColor="#c3c3c6"
            activeColor="#775fd8"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

     <div className="relative max-w-6xl px-6">
  <h1 className="font-bold leading-[1.2] text-gray-800 text-[30px] md:text-[46px]">

    {/* First Line */}
    <div className="flex justify-center items-center flex-wrap gap-2">

      <span className="relative inline-block overflow-hidden rounded-xl px-6 py-2">

        <span className="absolute inset-0 bg-gradient-to-r from-[#abb4fc] to-[#d4b4fe] animate-fill"></span>

        <span className="relative z-10">
          Crafting the Future of Fabrics
        </span>

      </span>

      <span className="text-gray-700">
        Where
      </span>

    </div>

    {/* Next Lines */}
    <div className="text-gray-700 text-center">
      Innovation, Quality, and Style Come
    </div>

    <div className="text-gray-700 text-center">
      Together to Inspire Your Creations!
    </div>

  </h1>
</div>
      </section>


      {/* PRODUCT SECTION */}
      <section className="px-12 py-16 bg-gray-50">

        <div className="flex justify-center mb-12">
          <span className="bg-white shadow px-5 py-2 rounded-lg text-sm font-medium">
            Premium Saree
          </span>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

      </section>
    </>
  );
}
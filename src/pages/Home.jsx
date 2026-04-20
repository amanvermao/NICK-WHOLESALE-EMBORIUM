import ProductCard from "../components/ProductCard";
import DotGrid from "../components/DotGrid";

const products = [
  {
    id: 1,
    title: "Red Kalyug Plain Satin Silk Banarasi Saree",
    code: "HF60-RED",
    price: 100,
    currency: "INR",
    description:
      'This Red Kalyug Plain Satin Silk Banarasi Saree blends traditional craftsmanship...',
    image: "https://mohsintextiles.com/cdn/shop/files/red-kalyug-plain-satin-silk-banarasi-saree-sr-0708-pl-rd_02.webp?v=1769406937&width=990"
  },
  {
    id: 2,
    title: "Navy Blue Kalyug Plain Satin Silk Banarasi Saree",
    code: "HF08-NAVY-BLUE",
    price: 250,
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
  },
  {
    id: 5,
    title: "Dola Silk Plain Dye Golden Embroidery Work Silk Saree",
    code: "Dola Silk",
    price: 1299,
    currency: "INR",
    description:
      '6.5 Meter (Including 1Mtr Blouse)',
    image: "https://ethenika.com/cdn/shop/files/5747A59C-5509-421A-86EA-4BBBBDF9D523.jpg?v=1776181870&width=990"
  },
   {
    id: 6,
    title: "Kutch Authentic Pure Dola Silk Pasmina Saree",
    code: "Dola Silk",
    price: 1999,
    currency: "INR",
    description:
      'Care Instruction: Dry Clean Only',
    image: "https://ethenika.com/cdn/shop/files/Kutch-Authentic-Pure-Dola-Silk-Pasmina-Saree-Ethenika-com-3724.jpg?v=1773847196&width=990"
  },
  {
    id: 7,
    title: "Dola Silk Plain Dye Golden Embroidery Work Silk Saree",
    code: "Dola Silk",
    price: 1500,
    currency: "INR",
    description:
      'Care Instruction: Dry Clean Only',
    image: "https://ethenika.com/cdn/shop/files/0722524F-7C7F-4423-AE6A-31E7D38377DB.jpg?v=1776181870&width=990"
  },
  {
    id: 8,
    title: "Dola Silk Plain Dye Golden Embroidery Work Silk Saree",
    code: "Dola Silk",
    price: 1999,
    currency: "INR",
    description:
      'Dry Clean Only',
    image: "https://ethenika.com/cdn/shop/files/5747A59C-5509-421A-86EA-4BBBBDF9D523.jpg?v=1776181870&width=990"
  },
  {
    id: 9,
    title: "Dola Silk Leheriya Print Saree",
    code: "Dola Silk",
    price: 1999,
    currency: "INR",
    description:
      '6.5 Meter with Blouse',
    image: "https://ethenika.com/cdn/shop/files/4FF99F31-7ED2-4F0E-B685-600A2ED6953C.jpg?v=1745404229&width=990"
  },
  {
    id: 10,
    title: "Gold Zari Tissue Silk Banarasi Saree",
    code: "MT-SR-0721-GD",
    price: 2800,
    currency: "INR",
    description:
      'This Gold Zari Tissue Silk Banarasi Saree showcases intricate gold zari craftsmanship...',
    image: "https://mohsintextiles.com/cdn/shop/files/2-Gold-Zari-Tissue-Silk-Banarasi-Saree_9c69653f-9e9f-4c49-8ab2-40198e18bc92.webp?v=1753331648&width=990"
  },
  {
    id: 11,
    title: "avender Zari Tussar Georgette Silk Banarasi Saree",
    code: "MT-SR-1041-LV",
    price: 2999,
    currency: "INR",
    description:
      'Introducing the Lavender Zari Tussar Georgette Silk Banarasi Saree a stunning...',
    image: "https://mohsintextiles.com/cdn/shop/files/lavender-zari-georgette-silk-banarasi-saree-sr-1041-lv_01.webp?v=1773651681&width=990"
  },
  {
    id: 12,
    title: "Mustard Moglai Jaal Katan Silk Banarasi Saree",
    code: "MT-SR-0018-MT",
    price: 2500,
    currency: "INR",
    description:
      'This Mustard Moglai Jaal Katan Silk Banarasi Saree is a luxurious and elegant addition to any wardrobe...',
    image: "https://mohsintextiles.com/cdn/shop/files/145-Mustard-Moglai-Jaal-Katan-Silk-Banarasi-Saree.webp?v=1748238490&width=990"
  },
  {
    id: 13,
    title: "Baby Pink Zari Tussar Georgette Silk Banarasi Saree",
    code: "MT-SR-1041-BP",
    price: 2300,
    currency: "INR",
    description:
      'ntroducing the Baby Pink Zari Tussar Georgette Silk Banarasi Saree a stunning...',
    image: "https://mohsintextiles.com/cdn/shop/files/baby-pink-zari-georgette-silk-banarasi-saree-sr-1041-bp_01.webp?v=1773651732&width=990"
  },
  {
    id: 14,
    title: "Ethenika Authentic Hand Crafted Chex Work Silk Bandhani Saree",
    code: "Modal Silk",
    price: 1999,
    currency: "INR",
    description:
      '6 Meters with Blouse,Hand Crafted Bandhani ',
    image: "https://ethenika.com/cdn/shop/files/CF9A8E61-97A7-4682-8735-3DF32ED750DE.jpg?v=1776181891&width=990"
  },
  {
    id: 15,
    title: "Pure Modal Silk Golden Chex Hand Made Barik Bandhej work Silk Bandhani Saree",
    code: " Modal Silk",
    price: 1999,
    currency: "INR",
    description:
      '6.4 Meter with Blouse Included',
    image: "https://ethenika.com/cdn/shop/files/D1E0A487-1533-4FFB-9816-A6990781B2B1.jpg?v=1744528557&width=990"
  },
  {
    id: 16,
    title: "Pure Modal Silk Barik Bandhej Lagdi Pallu Bandhani Saree",
    code: "Modal Silk",
    price: 2500,
    currency: "INR",
    description:
      '6.50 Meter (Inclusive Blouse 0.50M),Only Dry Clean',
    image: "https://ethenika.com/cdn/shop/files/FF32587B-1BB4-41EB-B446-6C549C0DB38E.jpg?v=1742981646&width=990"
  },
  {
    id: 17,
    title: "Modal Silk Barik Bandhej work Lagdi Patta Border Chex Bandhani Saree",
    code: "Modal Silk",
    price: 1999,
    currency: "INR",
    description:
      '6.5 Meter with Blouse',
    image: "https://ethenika.com/cdn/shop/files/5747A59C-5509-421A-86EA-4BBBBDF9D523.jpg?v=1776181870&width=990"
  },
  {
    id: 18,
    title: "Soft Fendy Silk Sequence Coding Lace Work Party Wear Designer Saree",
    code: "Soft Fandy Silk Fabric",
    price: 1999,
    currency: "INR",
    description:'Cording and Sequence embroidery work lace border and Embroided waist Belt...',
    image: "https://ethenika.com/cdn/shop/files/Soft-Fendy-Silk-Sequence-Coding-Lace-Work-Party-Wear-Designer-Saree-Ethenika-com-5525.jpg?v=1773845789&width=990"
  },
  {
    id: 19,
    title: "Designer Sequence Zari Work Party Wear Velvet Saree",
    code: "9000 Velvet",
    price: 1999,
    currency: "INR",
    description:
      'Designer Sequence & Zari Thread Embroidery work on body with border and Cutwork',
    image: "https://ethenika.com/cdn/shop/files/Designer-Sequence-Zari-Work-Party-Wear-Velvet-Saree-Ethenika-com-5447.jpg?v=1773845652&width=990"
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
// AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>

      <p className="text-lg text-gray-600 leading-8 mb-8">
        Welcome to <span className="font-semibold">Nick Wholesale Emborium</span>,
        your trusted destination for premium sarees, timeless fabrics, and
        elegant ethnic fashion. We are passionate about bringing together
        tradition, quality, and modern style to create collections that inspire
        confidence and celebrate every occasion.
      </p>

      <p className="text-lg text-gray-600 leading-8 mb-10">
        From classic Banarasi artistry to stylish party wear designs, our goal
        is to offer carefully selected sarees that reflect craftsmanship,
        beauty, and value. Whether you are shopping for weddings, festive wear,
        family events, boutique resale, or wholesale requirements, we aim to be
        your reliable fashion partner.
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Collection</h2>
          <p className="leading-8 text-gray-700">
            We proudly offer a wide range of sarees including Banarasi Silk,
            Satin Silk, Katan Silk, Tissue Silk, Dola Silk, Modal Silk,
            Georgette Silk, Bandhani Sarees, Velvet Sarees, and designer party
            wear collections. Every product is chosen with attention to fabric
            quality, finishing, elegance, and wearability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Craftsmanship Meets Style</h2>
          <p className="leading-8 text-gray-700">
            Our collections showcase rich zari work, embroidery details,
            hand-crafted patterns, classic weaves, contemporary colors, and
            graceful drapes. We believe every saree should tell a story of
            tradition while matching the style of today’s modern woman.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Customers Choose Us</h2>
          <ul className="space-y-3 text-gray-700 leading-8">
            <li>• Premium quality fabrics at competitive pricing</li>
            <li>• Elegant designs for weddings, parties, and festive occasions</li>
            <li>• Trusted wholesale and retail shopping experience</li>
            <li>• Carefully curated trending and timeless collections</li>
            <li>• Responsive customer support and transparent service</li>
            <li>• Value-driven products for every budget</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="leading-8 text-gray-700">
            We aim to become a trusted name in ethnic fashion by making premium
            sarees accessible to customers across regions. Through quality,
            consistency, and customer-first service, we continue to grow as a
            destination for graceful and affordable fashion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
          <p className="leading-8 text-gray-700">
            At Nick Wholesale Emborium, every order matters. We are committed to
            delivering quality products, fair pricing, and a smooth shopping
            experience from browsing to delivery. Your trust motivates us to
            keep improving and expanding our collections.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
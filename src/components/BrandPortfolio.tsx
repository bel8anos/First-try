// Using a plain <img> ensures SVG logos render without Next/Image restrictions

const brands = [
  { name: "AS", logo: "/brands/as-logo.png" },
  { name: "APRIL", logo: "/brands/april-logo.png" },
  { name: "LOUSY", logo: "/brands/lousy-logo.png" },
  { name: "MAGENTA", logo: "/brands/magenta-logo.png" },
  { name: "FP", logo: "/brands/fp-logo.png" },
  { name: "PASSPORT", logo: "/brands/passport-logo.png" },
  { name: "POLAR", logo: "/brands/polar-logo.png" },
];

export default function BrandPortfolio() {
  return (
    <section id="brands" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">BRANDS</h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-8">Brand portfolio</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click the logos to learn more
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group cursor-pointer bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-square flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={150}
                  height={150}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-center mt-4 font-medium text-gray-900">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




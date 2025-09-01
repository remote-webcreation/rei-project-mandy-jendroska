import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="bg-green-700 text-white p-8 py-16 md:py-24 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Find Our Products
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          You'll find our products in many of the world's leading garden centres, department stores, nature shops and mail order specialists.
        </p>
        <Link 
          href="/stockists" 
          className="bg-white text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-300"
        >
          Find a Stockist
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
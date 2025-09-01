import { FaFeather, FaSeedling, FaShieldAlt } from 'react-icons/fa'; // Sie müssen 'react-icons' installieren: npm install react-icons

const HighlightsSection = () => {
  return (
    <section className="bg-gray-100 p-8 py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Highlight 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="text-green-600 text-6xl mb-4 mx-auto">
              <FaFeather />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Quality Feeds</h3>
            <p className="text-gray-600">
              We offer a wide range of proven foods that boost birds' energy levels and are highly nutritious.
            </p>
          </div>
          
          {/* Highlight 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="text-green-600 text-6xl mb-4 mx-auto">
              <FaSeedling />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Innovative Feeders</h3>
            <p className="text-gray-600">
              Our super-strong, easy-to-clean feeders are designed to last and keep squirrels out.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <div className="text-green-600 text-6xl mb-4 mx-auto">
              <FaShieldAlt />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Conservation</h3>
            <p className="text-gray-600">
              We are dedicated to helping wild birds thrive and promoting conservation efforts worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
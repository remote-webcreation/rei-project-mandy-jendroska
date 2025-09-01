import HeroSection from '@/components/Herosection';

const NewsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Latest News</h1>
      
      {/* Hier wird später die Liste der News-Artikel gerendert */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Beispiel für einen Platzhalter-Artikel */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">News Article Title</h2>
          <p className="text-gray-600 mb-4">Published on September 1, 2025</p>
          <p className="text-gray-800">
            This is a placeholder for a news article. The content will be loaded from a JSON file.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default NewsPage;
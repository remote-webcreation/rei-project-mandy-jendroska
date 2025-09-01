const TradePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Trade Customers</h1>
      <p className="mb-8 text-lg text-gray-700">
        Birdcare retailers love Jacobi Jayne. That's because we offer the very best birdcare brands that consumers keep coming back to.
      </p>

      {/* Hier kommt das Formular für Trade-Anfragen */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Trade Enquiry Form</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" id="company" name="company" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default TradePage;
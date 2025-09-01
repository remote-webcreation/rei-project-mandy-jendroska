const ContactPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-8 text-lg text-gray-700">
        Feel free to get in touch with us for any questions or inquiries.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="text-lg mb-2">
          <strong>Email:</strong> info@jacobijayne.com
        </p>
        <p className="text-lg mb-2">
          <strong>Phone:</strong> +44 1227 714314
        </p>
        <p className="text-lg">
          <strong>Address:</strong> 123 Birdcare Lane, London, UK
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
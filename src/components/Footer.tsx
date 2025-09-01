
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto text-center">
        
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        <p className="mt-4 text-sm md:text-xs">
          © 2025 Jacobi Jayne. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
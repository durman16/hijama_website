const Footer = () => {
    return (
      <footer className="bg-green-700 text-white py-6 mt-10">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hijama Therapy in Ottawa. All rights reserved.</p>
          <p className="mt-2">
            Developed by <a href="https://github.com/durman16" className="underline hover:text-green-300">durman16</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
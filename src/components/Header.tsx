const Header = () => {
    return (
      <header className="bg-green-700 text-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hijama Therapy</h1>
  
          <div className="flex items-center space-x-6">
            <nav className="space-x-4">
              <a href="#about" className="hover:underline">About</a>
              <a href="#services" className="hover:underline">Services</a>
              <a href="#benefits" className="hover:underline">Benefits</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </nav>
  
            <a
              href="#contact"
              className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-green-100 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  
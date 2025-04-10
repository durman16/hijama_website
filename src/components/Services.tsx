const Services = () => {
    return (
        <section id="services" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Cupping Therapy</h3>
              <p className="text-gray-600">
                Hijama cupping therapy involves creating a vacuum in small cups placed on specific points of the body, which helps to alleviate pain, reduce inflammation, and improve circulation.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Dry Cupping</h3>
              <p className="text-gray-600">
                A non-invasive technique where cups are applied to the skin without drawing blood, perfect for muscle relaxation and improving blood flow.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Wet Cupping</h3>
              <p className="text-gray-600">
                Wet cupping is a traditional method that involves making small incisions in the skin before applying the cups, which helps remove toxins and improve energy flow.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    );
  };
  
  export default Services;
  
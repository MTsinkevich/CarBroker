import { Shield, Battery, Wifi, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AtlasDetail() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IQ.DRIVE",
      description: "Advanced driver assistance with Travel Assist"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Performance",
      description: "276-hp V6 engine with 8-speed automatic"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connected",
      description: "Digital Cockpit Pro with wireless connectivity"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Spacious",
      description: "Three-row seating for up to 7 passengers"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <img 
          src="https://cdn.motor1.com/images/mgl/mMkrOq/259:1557:3005:2254/2024-volkswagen-atlas-peak-edition.webp"
          alt="VW Atlas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-light mb-4">Volkswagen Atlas</h1>
            <p className="text-xl mb-8">German Engineering Meets Family Adventure</p>
            <button 
              onClick={() => navigate('/consultation')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Lease Offer */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-8">Special Lease Offer</h2>
            <div className="bg-slate-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <span className="text-5xl font-light">$602</span>
                <span className="text-slate-600">/month*</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-light">$0</p>
                  <p className="text-slate-600">Down Payment</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light">36</p>
                  <p className="text-slate-600">Month Lease</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light">7,500</p>
                  <p className="text-slate-600">Miles/Year</p>
                </div>
              </div>
              <div className="text-center">
                <button 
                  onClick={() => navigate('/consultation')}
                  className="bg-slate-800 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors mb-8"
                >
                  Claim This Offer
                </button>
                <p className="text-sm text-slate-600 leading-relaxed max-w-5xl mx-auto">
                  *Excludes: first month, acquisition fee, new/transfer plates and local tax.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-light mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img 
              src="https://hips.hearstapps.com/hmg-prod/images/2024-volkswagen-atlas-145-64de23e243896.jpg?crop=0.949xw:0.949xh;0.0476xw,0.0383xh&resize=980:*" 
              alt="Atlas Side View"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <img 
              src="https://di-uploads-pod20.dealerinspire.com/bismarckmotorcompany/uploads/2023/02/Large-16252-2024VolkswagenAtlas.jpg" 
              alt="Atlas Interior"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <img 
              src="https://dealerimages.dealereprocess.com/image/upload/w_720/3682971.jpg" 
              alt="Atlas Rear Quarter"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-8">Ready to Experience the Atlas?</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Let our concierge team help you configure your perfect Atlas and secure the best possible lease terms.
          </p>
          <button 
            onClick={() => navigate('/consultation')}
            className="bg-white text-slate-800 px-8 py-3 rounded-full hover:bg-slate-100 transition-colors"
          >
            Schedule Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
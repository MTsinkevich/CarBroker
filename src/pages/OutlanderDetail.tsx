import { Shield, Battery, Wifi, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function OutlanderDetail() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "MI-PILOT Assist",
      description: "Advanced driver assistance with adaptive cruise control"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Performance",
      description: "181-hp 2.5L engine with Super All-Wheel Control"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connected",
      description: "9-inch smartphone-link display with wireless Apple CarPlay"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Versatile",
      description: "Standard third row with 7-passenger seating"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <img 
          src="https://media.ed.edmunds-media.com/mitsubishi/outlander/2023/oem/2023_mitsubishi_outlander_4dr-suv_se_fq_oem_1_1600.jpg"
          alt="Mitsubishi Outlander"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-light mb-4">Mitsubishi Outlander</h1>
            <p className="text-xl mb-8">Adventure Meets Innovation</p>
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
                <span className="text-5xl font-light">$499</span>
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
                  <p className="text-2xl font-light">10,000</p>
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
                  *Lease offer available through participating dealers to qualified customers with approved credit through Ally Financial. Not all lessees qualify for lowest payment. Payments may vary by trim level. Lease offer based on MSRP of $34,160 plus destination charge. No security deposit required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-slate-50 to-red-50/80">
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
              src="https://www.usnews.com/object/image/00000192-bb44-d9a4-a9da-fbf604e30000/2025-outlander-plug-in-hybrid-exterior-4.jpg?update-time=1729718650038&size=responsiveGallery" 
              alt="Outlander Side View"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <img 
              src="https://di-uploads-pod1.dealerinspire.com/countrysidemitsubishi/uploads/2023/09/24Mitsubishi-Outlander-InteriorDashboardAtNightInRain-5x3-1.jpg" 
              alt="Outlander Interior"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <img 
              src="https://cdn.jdpower.com/JDPA_2022%20Mitsubishi%20Outlander%20SEL%20White%20Rear%20Quarter%20View.jpg" 
              alt="Outlander Rear Quarter"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-8">Ready to Experience the Outlander?</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Let our concierge team help you configure your perfect Outlander and secure the best possible lease terms.
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
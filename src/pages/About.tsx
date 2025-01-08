import { Shield, Award, Heart, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="pt-32">
      <section className="bg-white/80 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-light text-center mb-8">Your Personal Car Concierge</h1>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-24">
            We're not a dealership – we're your personal automotive concierge service, dedicated to making leasing and purchasing vehicles                   effortless and transparent, no matter the brand.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-6 text-slate-800" />
              <h3 className="text-xl font-light mb-4">No Haggling</h3>
              <p className="text-slate-600">Skip the back-and-forth negotiations. We secure the best prices upfront.</p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-6 text-slate-800" />
              <h3 className="text-xl font-light mb-4">Time Saving</h3>
              <p className="text-slate-600">Avoid spending hours at dealerships. We handle everything for you.</p>
            </div>
            
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-6 text-slate-800" />
              <h3 className="text-xl font-light mb-4">Personalized Service</h3>
              <p className="text-slate-600">Your dedicated advisor guides you through the entire process.</p>
            </div>

            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-6 text-slate-800" />
              <h3 className="text-xl font-light mb-4">Efficient Process</h3>
              <p className="text-slate-600">From selection to delivery, we streamline every step.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-light mb-6 text-center">How We Work</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-light mb-2">1. Personal Consultation</h3>
                  <p className="text-slate-600">
                    Share your preferences and requirements with us and we will guide you through available options.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">2. Best Offers Sourced</h3>
                  <p className="text-slate-600">
                    We leverage our dealer network to secure the best possible lease or purchase terms for your chosen vehicle.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">3. Paperwork Handled</h3>
                  <p className="text-slate-600">
                    We manage all documentation and negotiations, saving you time and ensuring transparency throughout.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">4. Convenient Delivery</h3>
                  <p className="text-slate-600">
                    Your new vehicle is delivered to your preferred location, fully detailed and ready to drive.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-light mb-8">Ready to Start?</h2>
              <p className="text-slate-600 mb-8">
                Experience the easiest way to lease or purchase your new vehicle. Our concierge service ensures 
                a premium experience from start to finish, with no dealership visits required.
              </p>
              <button 
                onClick={() => navigate('/consultation')}
                className="bg-slate-800 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
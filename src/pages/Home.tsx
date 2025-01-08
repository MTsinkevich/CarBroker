import { Car, Shield, Clock, Sparkles, Headphones, Wallet, Star } from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import FeatureBox from '../components/FeatureBox';
import LeaseSpecial from '../components/LeaseSpecial';

export default function Home() {
  const vehicles = [
    {
      model: 'Outlander',
      type: 'Mid-size SUV',
      price: 499,
      image: 'https://media.ed.edmunds-media.com/mitsubishi/outlander/2023/oem/2023_mitsubishi_outlander_4dr-suv_se_fq_oem_1_1600.jpg',
      features: ['7 Seats', 'Super All-Wheel Control', 'MI-PILOT Assist'],
      brand: 'mitsubishi'
    },
    {
      model: 'Tiguan',
      type: 'Compact SUV',
      price: 418,
      image: 'https://www.usnews.com/object/image/0000018e-f28b-df93-a1af-faef34a70000/01-2024-volkswagen-tiguan-angular-front-jms.JPG',
      features: ['5-7 Seats', 'AWD Available', 'City-Smart'],
      brand: 'volkswagen'
    },
    {
      model: 'S60',
      type: 'Luxury Sedan',
      price: 479,
      image: 'https://media.ed.edmunds-media.com/volvo/s60/2025/oem/2025_volvo_s60_sedan_t8-ultra_fq_oem_1_1280.jpg',
      features: ['Sport Sedan', 'Premium Interior', 'Advanced Safety']
    }
  ];

  const xc90Special = {
    model: 'XC90',
    type: 'Luxury SUV',
    price: 559,
    image: 'https://img.sm360.ca/ir/w770/images/article/volvo-mississauga/94776//271310_volvo_cars_xc90_recharged1638291051546.jpg',
    features: [
      '$0 Security Deposit',
      'Complimentary Maintenance',
      '24-Month Lease Term',
      '7 Seats Standard',
      'AWD with Advanced Safety'
    ],
    terms: {
      monthlyPayment: 559,
      downPayment: 0,
      mileage: 7500,
      term: 24
    }
  };

  const serviceFeatures = [
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Personal Concierge",
      description: "Dedicated advisor throughout your entire vehicle journey"
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees or surprises"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Service",
      description: "White-glove experience from consultation to delivery"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <header 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.prismic.io/carwow/b6145701-130a-4e82-842e-934ea187f1c9_2023+volvo+xc40+front+quarter+moving.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-light mb-6">
            Experience You Deserve
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Let us handle every detail with our personalized car concierge services, whether you're leasing or purchasing your perfect vehicle.
          </p>
        </div>
      </header>

      {/* XC90 Special Offer */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Limited Time XC90 Offer</h2>
          <LeaseSpecial special={xc90Special} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/80">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceFeatures.map((feature) => (
              <FeatureBox 
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other Vehicles Grid */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.model} {...vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Why Choose Our Concierge Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light mb-4">Time-Saving Convenience</h3>
              <p className="text-slate-300 mb-8">
                Skip the dealership visits and paperwork hassles. Our concierge team handles everything, 
                from vehicle selection to final delivery, saving you valuable time and effort.
              </p>
              <h3 className="text-xl font-light mb-4">Expert Guidance</h3>
              <p className="text-slate-300">
                Benefit from our deep industry knowledge and relationships. We'll help you navigate options, 
                secure the best terms, and ensure you make an informed decision.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Premium Experience</h3>
              <p className="text-slate-300 mb-8">
                Enjoy a truly luxurious car buying experience. From personalized service to white-glove 
                delivery, every detail is handled with the utmost care and attention.
              </p>
              <h3 className="text-xl font-light mb-4">Ongoing Support</h3>
              <p className="text-slate-300">
                Our relationship doesn't end at delivery. Count on us for continued support throughout 
                your lease or ownership experience, including maintenance coordination and future upgrades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
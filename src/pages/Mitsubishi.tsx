import { Car, Shield, Clock, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VehicleCard from '../components/VehicleCard';
import FeatureBox from '../components/FeatureBox';
import LeaseSpecial from '../components/LeaseSpecial';

export default function Mitsubishi() {
  const navigate = useNavigate();

  const vehicles = [
    {
      model: 'Outlander',
      type: 'Mid-size SUV',
      price: 499,
      image: 'https://media.ed.edmunds-media.com/mitsubishi/outlander/2023/oem/2023_mitsubishi_outlander_4dr-suv_se_fq_oem_1_1600.jpg',
      features: ['7 Seats', 'Super All-Wheel Control', 'MI-PILOT Assist'],
      brand: 'mitsubishi' as const
    },
    {
      model: 'Eclipse Cross',
      type: 'Compact SUV',
      price: 399,
      image: 'https://www.autotrader.com/wp-content/uploads/2022/04/2023-mitsubishi-eclipse-cross-le-1.jpg',
      features: ['Turbocharged Engine', 'Available S-AWC', 'Advanced Safety'],
      brand: 'mitsubishi' as const
    },
    {
      model: 'Outlander Sport',
      type: 'Compact Crossover',
      price: 428,
      image: 'https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/siteimages/cars/outlander-sport/my24/overview/2024-mitsubishi-outlander-sport-suv-red-driving-road.jpg',
      features: ['Sporty Design', 'Available AWC', 'Great Value'],
      brand: 'mitsubishi' as const
    }
  ];

  const outlanderSpecial = {
    model: 'Outlander',
    type: 'Family SUV',
    price: 499,
    image: 'https://media.ed.edmunds-media.com/mitsubishi/outlander/2023/oem/2023_mitsubishi_outlander_4dr-suv_se_fq_oem_1_1600.jpg',
    features: [
      '$0 Security Deposit',
      '10-Year/100,000-Mile Warranty',
      '36-Month Lease Term',
      '7 Seats Standard',
      'Super All-Wheel Control'
    ],
    terms: {
      monthlyPayment: 499,
      downPayment: 0,
      mileage: 10000,
      term: 36
    },
    brand: 'mitsubishi' as const
  };

  return (
    <div>
      {/* Hero Section */}
      <header 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://www.thedrive.com/wp-content/uploads/2023/02/09/Mitsu-Pickup-Hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-light mb-6">
            Drive Your Ambition
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Experience Japanese engineering excellence with industry-leading warranty coverage and innovative technology.
          </p>
        </div>
      </header>

      {/* Outlander Special Offer */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Limited Time Outlander Offer</h2>
          <div onClick={() => navigate('/mitsubishi-outlander')} className="cursor-pointer">
            <LeaseSpecial special={outlanderSpecial} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-slate-50 to-red-50/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureBox 
              icon={<Shield className="h-6 w-6" />}
              title="10-Year Warranty"
              description="Industry-leading powertrain warranty coverage"
            />
            <FeatureBox 
              icon={<Clock className="h-6 w-6" />}
              title="5-Year Coverage"
              description="New vehicle limited warranty and roadside assistance"
            />
            <FeatureBox 
              icon={<Sparkles className="h-6 w-6" />}
              title="Advanced Safety"
              description="MI-PILOT Assist with advanced driver assistance"
            />
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Current Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.model} {...vehicle} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
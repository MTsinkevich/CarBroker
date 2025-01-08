import { Car, Shield, Clock, Sparkles } from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import FeatureBox from '../components/FeatureBox';
import LeaseSpecial from '../components/LeaseSpecial';

export default function Volvo() {
  const vehicles = [
    {
      model: 'XC60',
      type: 'Mid-size SUV',
      price: 595,
      image: 'https://media.ed.edmunds-media.com/volvo/xc60/2025/oem/2025_volvo_xc60_4dr-suv_t8-plus_fq_oem_1_1280.jpg',
      features: ['5 Seats', 'AWD', 'Premium Sound']
    },
    {
      model: 'XC40',
      type: 'Compact SUV',
      price: 499,
      image: 'https://www.kbb.com/wp-content/uploads/2023/02/2023-volvo-xc40-front-34-1200x675-1.jpg',
      features: ['5 Seats', 'Available EV', 'City-Smart']
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

  return (
    <div>
      {/* Hero Section */}
      <header 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://media.ed.edmunds-media.com/volvo/xc90/2025/oem/2025_volvo_xc90_4dr-suv_t8-plus_fq_oem_1_1600.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-light mb-6">
            Experience Volvo Excellence
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Discover the perfect blend of Scandinavian luxury and innovative technology with our exclusive Volvo lease offers.
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
      <section className="py-24 bg-gradient-to-br from-slate-50 via-slate-100/80 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureBox 
              icon={<Shield className="h-6 w-6" />}
              title="Volvo Safety"
              description="Industry-leading safety innovations in every model"
            />
            <FeatureBox 
              icon={<Clock className="h-6 w-6" />}
              title="Flexible Leasing"
              description="Customizable terms to fit your lifestyle"
            />
            <FeatureBox 
              icon={<Sparkles className="h-6 w-6" />}
              title="Premium Service"
              description="Complimentary maintenance package included"
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
import { Car, Shield, Clock, Sparkles } from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import FeatureBox from '../components/FeatureBox';
import LeaseSpecial from '../components/LeaseSpecial';

export default function Volkswagen() {
  const vehicles = [
    {
      model: 'Atlas Sport',
      type: 'Mid-size SUV',
      price: 567,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2021-atlas-cross-sport-mmp-1-1601501594.jpg',
      features: ['5 Seats', 'AWD Available', 'Premium Sound'],
      brand: 'volkswagen' as const
    },
    {
      model: 'Tiguan',
      type: 'Compact SUV',
      price: 418,
      image: 'https://www.usnews.com/object/image/0000018e-f28b-df93-a1af-faef34a70000/01-2024-volkswagen-tiguan-angular-front-jms.JPG?update-                 time=1713466359559&size=responsive640',
      features: ['5-7 Seats', 'AWD Available', 'City-Smart'],
      brand: 'volkswagen' as const
    },
    {
      model: 'Jetta',
      type: 'Sedan',
      price: 336,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2025-volkswagen-jetta-107-6679be9c4f143.jpg?crop=0.780xw:0.659xh;0.111xw,0.255xh&resize=1200:*',
      features: ['Apple Carplay', 'Fuel Economy', 'Advanced Tech'],
      brand: 'volkswagen' as const
    }
  ];

  const atlasSpecial = {
    model: 'Atlas',
    type: 'Family SUV',
    price: 602,
    image: 'https://cdn.motor1.com/images/mgl/mMkrOq/259:1557:3005:2254/2024-volkswagen-atlas-peak-edition.webp',
    features: [
      '$0 Security Deposit',
      'First Month Payment Credit',
      '36-Month Lease Term',
      '7 Seats Standard',
      'Available 4MOTION® AWD'
    ],
    terms: {
      monthlyPayment: 602,
      downPayment: 0,
      mileage: 7500,
      term: 36
    },
    brand: 'volkswagen' as const
  };

  return (
    <div>
      {/* Hero Section */}
      <header 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://www.motortrend.com/uploads/sites/5/2020/03/Volkswagen-Transporter-Through-The-Years-55.jpg?w=768&width=768&q=75&format=webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl font-light mb-6">
            German Engineering Excellence
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Experience the perfect combination of performance, technology, and value with our exclusive Volkswagen lease offers.
          </p>
        </div>
      </header>

      {/* Atlas Special Offer */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Limited Time Atlas Offer</h2>
          <LeaseSpecial special={atlasSpecial} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureBox 
              icon={<Shield className="h-6 w-6" />}
              title="German Quality"
              description="Precision engineering and advanced safety features"
            />
            <FeatureBox 
              icon={<Clock className="h-6 w-6" />}
              title="Carefree Coverage"
              description="2 years of scheduled maintenance included"
            />
            <FeatureBox 
              icon={<Sparkles className="h-6 w-6" />}
              title="People First"
              description="Award-winning customer service experience"
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
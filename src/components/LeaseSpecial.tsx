import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface LeaseTerms {
  monthlyPayment: number;
  downPayment: number;
  mileage: number;
  term: number;
}

interface SpecialOffer {
  model: string;
  type: string;
  price: number;
  image: string;
  features: string[];
  terms: LeaseTerms;
  brand?: 'volvo' | 'volkswagen' | 'mitsubishi';
}

interface LeaseSpecialProps {
  special: SpecialOffer;
}

export default function LeaseSpecial({ special }: LeaseSpecialProps) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const routes: Record<string, Record<string, string>> = {
      volvo: {
        'XC90': '/xc90',
        'XC60': '/xc60',
        'XC40': '/xc40',
        'S60': '/s60'
      },
      volkswagen: {
        'Atlas': '/vw-atlas',
        'Tiguan': '/vw-tiguan',
        'ID.4': '/vw-id4'
      },
      mitsubishi: {
        'Outlander': '/mitsubishi-outlander',
        'Eclipse Cross': '/mitsubishi-eclipse-cross',
        'Outlander Sport': '/mitsubishi-outlander-sport'
      }
    };

    const route = routes[special.brand || 'volvo']?.[special.model];
    if (route) {
      navigate(route);
    }
  };

  const getModelName = () => {
    if (special.brand === 'volvo') {
      return `Volvo ${special.model}`;
    }
    return special.model;
  };

  return (
    <div className="bg-slate-50 rounded-xl overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Section */}
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img 
            src={special.image} 
            alt={`${special.brand || 'Volvo'} ${special.model}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-slate-800 text-white px-4 py-2 rounded-full text-sm">
            Limited Time Offer
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-light text-slate-800">
              {getModelName()}
            </h3>
            <p className="text-slate-600">{special.type}</p>
          </div>

          {/* Lease Terms */}
          <div className="mb-6 sm:mb-8">
            <div className="mb-4">
              <span className="text-3xl sm:text-4xl font-light">${special.terms.monthlyPayment}</span>
              <span className="text-slate-600">/mo*</span>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>${special.terms.downPayment.toLocaleString()} due at signing</p>
              <p>{special.terms.mileage.toLocaleString()} miles per year</p>
              <p>{special.terms.term} month lease term</p>
            </div>
          </div>

          {/* Features List */}
          <div className="mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {special.features.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <span className="text-sm text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleLearnMore}
            className="w-full bg-slate-800 text-white py-3 rounded-full hover:bg-slate-700 transition-colors text-sm sm:text-base"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
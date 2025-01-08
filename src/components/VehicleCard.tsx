import { useNavigate } from 'react-router-dom';

interface VehicleCardProps {
  model: string;
  type: string;
  price: number;
  image: string;
  features: string[];
  brand?: 'volvo' | 'volkswagen' | 'mitsubishi';
}

export default function VehicleCard({ model, type, price, image, features, brand = 'volvo' }: VehicleCardProps) {
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
        'Atlas Sport': '/vw-atlas-sport',
        'Tiguan': '/vw-tiguan',
        'Jetta': '/vw-jetta'
      },
      mitsubishi: {
        'Outlander': '/mitsubishi-outlander',
        'Eclipse Cross': '/mitsubishi-eclipse-cross',
        'Outlander Sport': '/mitsubishi-outlander-sport'
      }
    };

    const route = routes[brand]?.[model];
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 sm:h-56">
        <img 
          src={image} 
          alt={`${brand} ${model}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-light text-slate-800">{brand === 'volvo' ? `Volvo ${model}` : model}</h3>
        <p className="text-slate-600 mb-4">{type}</p>
        <div className="mb-4">
          <span className="text-2xl sm:text-3xl font-light">${price}</span>
          <span className="text-slate-600">/mo*</span>
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="text-sm text-slate-600">
              • {feature}
            </li>
          ))}
        </ul>
        <button 
          onClick={handleLearnMore}
          className="w-full bg-slate-800 text-white py-2 rounded-full hover:bg-slate-700 transition-colors text-sm sm:text-base"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
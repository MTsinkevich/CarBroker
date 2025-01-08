import VehicleCard from '../components/VehicleCard';

export default function Vehicles() {
  const vehicles = [
    {
      model: 'XC90',
      type: 'Luxury SUV',
      price: 599,
      image: 'https://pictures.dealer.com/b/billkiddsvolvovcna/1265/e52128c0117dc690b55785a15c02b6d4x.jpg?impolicy=downsize_bkpt&w=410',
      features: ['7 Seats', 'AWD', 'Premium Sound', 'Advanced Safety']
    },
    {
      model: 'XC60',
      type: 'Mid-size SUV',
      price: 549,
      image: 'https://media.ed.edmunds-media.com/volvo/xc60/2025/oem/2025_volvo_xc60_4dr-suv_t8-plus_fq_oem_1_1280.jpg',
      features: ['5 Seats', 'AWD', 'Premium Sound', 'City-Smart']
    },
    {
      model: 'XC40',
      type: 'Compact SUV',
      price: 449,
      image: 'https://www.kbb.com/wp-content/uploads/2023/02/2023-volvo-xc40-front-34-1200x675-1.jpg',
      features: ['5 Seats', 'Available EV', 'City-Smart', 'Premium Interior']
    },
    {
      model: 'S60',
      type: 'Luxury Sedan',
      price: 499,
      image: 'https://media.ed.edmunds-media.com/volvo/s60/2025/oem/2025_volvo_s60_sedan_t8-ultra_fq_oem_1_1280.jpg',
      features: ['Sport Sedan', 'Premium Interior', 'Advanced Safety', 'AWD Available']
    }
  ];

  return (
    <div className="pt-32">
      <section className="bg-white/80 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-light text-center mb-16">Our Vehicles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.model} {...vehicle} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
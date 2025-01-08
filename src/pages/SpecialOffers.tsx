import LeaseSpecial from '../components/LeaseSpecial';

export default function SpecialOffers() {
  const offers = [
    {
      model: 'XC90',
      type: 'Luxury SUV',
      price: 599,
      image: 'https://pictures.dealer.com/b/billkiddsvolvovcna/1265/e52128c0117dc690b55785a15c02b6d4x.jpg?impolicy=downsize_bkpt&w=410',
      features: [
        '$0 Security Deposit',
        'Complimentary Maintenance',
        '24-Month Lease Term',
        '7 Seats Standard',
        'AWD with Advanced Safety'
      ],
      terms: {
        monthlyPayment: 599,
        downPayment: 0,
        mileage: 7500,
        term: 24
      }
    },
    {
      model: 'XC60',
      type: 'Mid-size SUV',
      price: 549,
      image: 'https://media.ed.edmunds-media.com/volvo/xc60/2025/oem/2025_volvo_xc60_4dr-suv_t8-plus_fq_oem_1_1280.jpg',
      features: [
        '$0 Security Deposit',
        'Complimentary Maintenance',
        '36-Month Lease Term',
        'Premium Package Included',
        'AWD Standard'
      ],
      terms: {
        monthlyPayment: 549,
        downPayment: 0,
        mileage: 7500,
        term: 36
      }
    }
  ];

  return (
    <div className="pt-32">
      <section className="bg-white/80 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-light text-center mb-16">Special Lease Offers</h1>
          <div className="space-y-12">
            {offers.map((offer) => (
              <LeaseSpecial key={offer.model} special={offer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
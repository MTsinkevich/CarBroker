import { Star, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Testimonial {
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  comment: string;
  purchaseType: 'lease' | 'purchase';
  date: string;
}

export default function Testimonials() {
  const navigate = useNavigate();
  
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      location: "Miami, FL",
      vehicle: "Volvo XC90",
      rating: 5,
      comment: "The concierge service made leasing my XC90 completely hassle-free. They handled everything from paperwork to delivery, saving me countless hours. The team's knowledge of Volvo's features and options helped me configure the perfect vehicle for my family.",
      purchaseType: 'lease',
      date: 'March 2024'
    },
    {
      name: "Michael Chen",
      location: "Los Angeles, CA",
      vehicle: "Volkswagen Atlas Sport",
      rating: 5,
      comment: "I was amazed by how smooth the entire process was. The team found me exactly what I wanted at a great price, and their follow-up service has been exceptional. The Atlas Sport is perfect for my active lifestyle.",
      purchaseType: 'purchase',
      date: 'February 2024'
    },
    {
      name: "Emily Rodriguez",
      location: "Chicago, IL",
      vehicle: "Mitsubishi Outlander",
      rating: 5,
      comment: "The personal attention I received was outstanding. They took the time to understand my needs and found the perfect vehicle for my family. The Outlander's features and warranty coverage exceeded my expectations.",
      purchaseType: 'lease',
      date: 'January 2024'
    },
    {
      name: "David Thompson",
      location: "Seattle, WA",
      vehicle: "Volvo XC60",
      rating: 5,
      comment: "From start to finish, the experience was exceptional. Their expertise in Volvo's lineup helped me choose the perfect XC60 configuration. The home delivery was a game-changer!",
      purchaseType: 'purchase',
      date: 'March 2024'
    },
    {
      name: "Jennifer Lee",
      location: "Boston, MA",
      vehicle: "Volkswagen Tiguan",
      rating: 5,
      comment: "The team's transparency throughout the lease process was refreshing. They secured better terms than I expected, and the Tiguan has been perfect for city living.",
      purchaseType: 'lease',
      date: 'February 2024'
    },
    {
      name: "Robert Martinez",
      location: "Austin, TX",
      vehicle: "Mitsubishi Eclipse Cross",
      rating: 5,
      comment: "I appreciated how the team handled all the negotiations and paperwork. They made purchasing my Eclipse Cross straightforward and stress-free. Great service!",
      purchaseType: 'purchase',
      date: 'January 2024'
    }
  ];

  const stats = [
    { value: '1000+', label: 'Vehicles Delivered' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '7+', label: 'Years Experience' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-white/80 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-light mb-8">Client Experiences</h1>
            <p className="text-slate-600 mb-12">
              Discover what our clients have to say about their journey with our concierge service. 
              Real stories from real people who've experienced the difference of our personalized approach.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-light text-slate-800 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <div className="bg-slate-800 text-white rounded-2xl p-8 mb-24">
            <Quote className="w-12 h-12 text-slate-400 mb-4" />
            <p className="text-xl mb-6">{testimonials[0].comment}</p>
            <div className="flex items-center gap-2 mb-2">
              {[...Array(testimonials[0].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="font-medium">{testimonials[0].name}</p>
            <p className="text-slate-400">{testimonials[0].vehicle} - {testimonials[0].location}</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-slate-600">{testimonial.date}</span>
                </div>
                <p className="text-slate-600 mb-4">{testimonial.comment}</p>
                <div className="border-t pt-4">
                  <p className="font-medium text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.location}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-slate-800">{testimonial.vehicle}</p>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600">
                      {testimonial.purchaseType === 'lease' ? 'Leased' : 'Purchased'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h2 className="text-2xl font-light mb-4">Ready to Start Your Journey?</h2>
            <p className="text-slate-600 mb-8">
              Experience our concierge service for yourself and join our satisfied clients.
            </p>
            <button 
              onClick={() => navigate('/consultation')}
              className="bg-slate-800 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
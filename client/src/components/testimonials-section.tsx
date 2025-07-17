import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Client",
      image: "https://images.unsplash.com/photo-1494790108755-2616b69f5736?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      rating: 5,
      text: "Amazing experience! The facial treatment left my skin glowing for weeks. The staff is so professional and welcoming."
    },
    {
      name: "Priya Sharma",
      role: "Academy Graduate",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      rating: 5,
      text: "The beauty academy program changed my life! Now I'm working at a top salon. Excellent training and job support."
    },
    {
      name: "Anita Patel",
      role: "Bridal Client",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      rating: 5,
      text: "Perfect bridal package! They made my wedding day absolutely magical. Every detail was perfect and the results were stunning."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-soft-pink/50 to-rose-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from our satisfied clients and academy graduates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-rose-gold">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} photo`} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

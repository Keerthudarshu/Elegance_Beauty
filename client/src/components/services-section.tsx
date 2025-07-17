import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Crown, Star, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const serviceCategories = [
    {
      title: "Skin Care & Facials",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      bgColor: "bg-soft-pink/30",
      services: [
        "Threading & Waxing",
        "Bleach & D-Tan",
        "Metallic & Anti-aging Facials",
        "Fruit & Herbal Treatments",
        "Instant Glow Facials"
      ]
    },
    {
      title: "Hair Care Treatments",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      bgColor: "bg-rose-gold/10",
      services: [
        "Global Colouring & Highlighting",
        "Hair Straightening & Curling",
        "Hair Spa & Smoothening",
        "Keratin Treatment",
        "Dandruff Treatment"
      ]
    },
    {
      title: "Massage & Body Care",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      bgColor: "bg-deep-rose/10",
      services: [
        "Full Body Massage (Head to Toe)",
        "Foot Care Treatments",
        "Hand Care Treatments",
        "Eye Care Treatments",
        "Relaxation Therapy"
      ]
    }
  ];

  const specialServices = [
    {
      title: "Henna / Mehandi Services",
      image: "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      bgColor: "bg-gradient-to-r from-rose-gold/20 to-deep-rose/20",
      services: [
        { name: "Hand Mehandi", icon: "✋" },
        { name: "Leg Mehandi", icon: "👣" },
        { name: "Hair Mehandi", icon: "✂️" }
      ]
    },
    {
      title: "Bridal Services",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      bgColor: "bg-gradient-to-r from-soft-pink/50 to-rose-gold/20",
      services: [
        { name: "Complete Bridal Packages", icon: <Crown className="w-5 h-5" /> },
        { name: "Pre-Bridal Packages", icon: <Star className="w-5 h-5" /> },
        { name: "Party & Occasion Makeovers", icon: <Sparkles className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in our comprehensive range of beauty and grooming services, crafted to enhance your natural beauty
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card key={index} className={`${category.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <CardContent className="p-0">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="text-gray-700 space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-rose-gold mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-rose-gold text-white py-3 rounded-full font-semibold hover:bg-deep-rose transition-colors">
                  Book Treatment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialServices.map((service, index) => (
            <Card key={index} className={`${service.bgColor} rounded-2xl p-8`}>
              <CardContent className="p-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                {service.title === "Henna / Mehandi Services" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {service.services.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-center">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <p className="font-medium">{item.name}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="text-gray-700 space-y-2">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <div className="text-rose-gold mr-2">
                          {item.icon}
                        </div>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

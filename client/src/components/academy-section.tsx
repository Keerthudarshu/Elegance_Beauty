import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, HandHeart, Tag, UserCheck, Building, GraduationCap } from "lucide-react";

export default function AcademySection() {
  const trainingPrograms = [
    {
      title: "Short-Term Courses",
      courses: [
        "Fast-track Beauty Sessions",
        "Crash Courses on Key Services"
      ]
    },
    {
      title: "Diploma Programs",
      courses: [
        "Basic Diploma in Beauty Therapy",
        "Complete Diploma in Cosmetology"
      ]
    },
    {
      title: "Advanced Certifications",
      courses: [
        "Certified Advance Beauty Courses",
        "Makeup Masterclass (Basic to Advanced)"
      ]
    },
    {
      title: "Specialized Training",
      courses: [
        "Saree Draping & Box Folding Techniques",
        "Portfolio Shoots for Models and Professionals"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Guaranteed Job Placements",
      description: "100% job assistance and placement support"
    },
    {
      icon: <HandHeart className="w-6 h-6" />,
      title: "Hands-On Experience",
      description: "Practical training with real clients"
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Certified Courses",
      description: "Industry-recognized certifications"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Professional Trainers",
      description: "Learn from industry experts"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art training facilities"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Industry Training",
      description: "Real-world skills and techniques"
    }
  ];

  return (
    <section id="academy" className="py-20 bg-soft-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Beauty Academy Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Launch your career in beauty with our expert training programs. All courses include certification and practical exposure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Training Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Beauty training" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Training Programs */}
          <div className="space-y-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="bg-white rounded-xl p-6 shadow-md">
                <CardContent className="p-0">
                  <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <ul className="text-gray-700 space-y-1">
                    {program.courses.map((course, courseIndex) => (
                      <li key={courseIndex}>• {course}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <Card className="bg-white rounded-2xl p-8 md:p-12">
          <CardContent className="p-0">
            <h3 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-8">
              Why Choose Our Academy?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-rose-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-rose-gold">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center parallax"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
          Your Beauty Journey<br />
          <span className="text-rose-gold">Starts Here</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
          Experience luxury beauty treatments and professional training at our state-of-the-art salon and academy
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('services')}
            className="bg-white text-deep-rose px-8 py-3 rounded-full font-semibold hover:bg-soft-pink transition-colors"
          >
            Explore Services
          </Button>
          <Button 
            onClick={() => scrollToSection('academy')}
            variant="outline"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-deep-rose transition-colors"
          >
            Join Academy
          </Button>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@radix-ui/themes";

const testimonials = [
  {
    id: 1,
    name: "Mme Koné",
    location: "Mère d'élève, Abidjan",
    rating: 5,
    content: "Grâce à 10sur10, mon fils a considérablement amélioré ses résultats en mathématiques. Les professeurs sont compétents et très patients.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    name: "M. Diallo",
    location: "Père d'élève, Dakar",
    rating: 5,
    content: "Le suivi personnalisé et la plateforme dédiée aux parents nous permettent de suivre les progrès en temps réel. Excellent service !",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider relative" data-testid="testimonial-slider">
      <div className="testimonial-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide px-4">
            <div className="bg-muted p-8 rounded-xl text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="flex text-accent text-2xl">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xl text-foreground mb-6 italic">"{testimonial.content}"</p>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" 
              />
              <div className="font-semibold text-foreground">{testimonial.name}</div>
              <div className="text-muted-foreground">{testimonial.location}</div>
            </div>
          </div>
        ))}
      </div>
      
      <Button
        variant="default"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-12 h-12 rounded-full hover:bg-primary/90"
        onClick={previousTestimonial}
        data-testid="testimonial-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button
        variant="default"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-white w-12 h-12 rounded-full hover:bg-primary/90"
        onClick={nextTestimonial}
        data-testid="testimonial-next"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>
    </div>
  );
}

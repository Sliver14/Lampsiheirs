import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ada O.",
      text: "Lampsiheirs delivered on time and the installation team was professional — our bathroom looks brand new.",
    },
    {
      name: "Emmanuel T.",
      text: "We needed a fast turnaround for an apartment. Great prices and no hidden costs.",
    },
    {
      name: "Chioma K.",
      text: "Quality tiles and excellent finish. Highly recommended.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 md:py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our satisfied customers have to say.
          </p>
        </div>

        <div className="max-w-xl mx-auto relative">
          {/* Card */}
          <div className="bg-background rounded-2xl p-8 border border-border shadow-sm transition-all duration-300">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic">"{testimonials[currentIndex].text}"</p>
            <p className="font-bold text-primary">— {testimonials[currentIndex].name}</p>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute -left-6 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-primary/90"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-primary/90"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

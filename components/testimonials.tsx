// import { useState } from "react";
// import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "Ada O.",
//       text: "Lampsiheirs delivered on time and the installation team was professional — our bathroom looks brand new.",
//     },
//     {
//       name: "Emmanuel T.",
//       text: "We needed a fast turnaround for an apartment. Great prices and no hidden costs.",
//     },
//     {
//       name: "Chioma K.",
//       text: "Quality tiles and excellent finish. Highly recommended.",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prev = () => {
//     setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   const next = () => {
//     setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="py-12 md:py-20 bg-secondary/5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Testimonials</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             What our satisfied customers have to say.
//           </p>
//         </div>

//         <div className="max-w-xl mx-auto relative">
//           {/* Card */}
//           <div className="bg-background rounded-2xl p-8 border border-border shadow-sm transition-all duration-300">
//             <div className="flex gap-1 mb-4">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} size={18} className="fill-primary text-primary" />
//               ))}
//             </div>
//             <p className="text-foreground mb-4 italic">"{testimonials[currentIndex].text}"</p>
//             <p className="font-bold text-primary">— {testimonials[currentIndex].name}</p>
//           </div>

//           {/* Controls */}
//           <button
//             onClick={prev}
//             className="absolute -left-6 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-primary/90"
//           >
//             <ChevronLeft size={20} />
//           </button>

//           <button
//             onClick={next}
//             className="absolute -right-6 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full shadow hover:bg-primary/90"
//           >
//             <ChevronRight size={20} />
//           </button>

//           {/* Indicators */}
//           <div className="flex justify-center mt-6 gap-2">
//             {testimonials.map((_, i) => (
//               <div
//                 key={i}
//                 className={`h-2 w-2 rounded-full transition-all duration-300 ${
//                   i === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
//                 }`}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState, useEffect } from "react";
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

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Testimonials
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            What our satisfied customers have to say.
          </p>
        </div>

        <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto relative px-12 md:px-16">
          {/* Card */}
          <div className="bg-background rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 border border-border shadow-lg transition-all duration-300">
            <div className="flex gap-1 mb-6 md:mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-primary text-primary md:w-7 md:h-7" />
              ))}
            </div>
            <p className="text-foreground text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="font-bold text-primary text-lg md:text-xl">
              — {testimonials[currentIndex].name}
            </p>
          </div>

          {/* Controls - Always visible */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 md:mt-10 gap-2 md:gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-primary w-8 md:w-10" : "bg-muted-foreground/30 w-2 md:w-2.5"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
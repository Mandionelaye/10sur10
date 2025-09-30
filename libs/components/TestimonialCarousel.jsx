import React, { useState } from "react";
import Slider from "react-slick";
import { Star, MoveLeft, MoveRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote:
      "Grâce à 10sur10, ma fille a considérablement amélioré ses notes en mathématiques. Les professeurs sont très compétents et s'adaptent parfaitement à son rythme d'apprentissage.",
    name: "Amina Diallo",
    role: "Mère d'élève",
    location: "Dakar, Sénégal",
    image:
      "assets/images/accuil/profil1.jpg",
  },
  {
    quote:
      "Les professeurs de 10sur10 sont formidables. Ma fille a réussi son baccalauréat avec mention grâce à leur accompagnement. Un service de qualité !",
    name: "Omar Ben Salah",
    role: "Père d'élève",
    location: "Nouakchott, Mauritania",
    image:
      "assets/images/accuil/profil2.jpg",
  },
  {
    quote:
      "Excellent service ! Mon fils qui était en difficulté en français a retrouvé confiance en lui. Les cours à domicile sont très pratiques et les résultats sont au rendez-vous.",
    name: "Kofi Asante",
    role: "Père d'élève",
    location: "Accra, Ghana",
    image:
      "assets/images/accuil/profil3.jpg",
  },
  {
    quote:
      "Je recommande vivement 10sur10. L'approche pédagogique est excellente et mon enfant a gagné en autonomie. Le suivi personnalisé fait vraiment la différence.",
    name: "Fatou Kone",
    role: "Mère d'élève",
    location: "Abidjan, Côte d'Ivoire",
    image:
      "assets/images/accuil/profil4.jpg",
  },
];

// Flèche gauche personnalisée
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-all duration-300 cursor-pointer z-10"
  >
    <MoveLeft className="text-2xl text-orange-600" />
  </button>
);

// Flèche droite personnalisée
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-50 transition-all duration-300 cursor-pointer z-10"
  >
    <MoveRight className="text-2xl text-orange-600" />
  </button>
);

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div className="flex justify-center mt-8 space-x-2 ">{dots}</div>
    ),
    customPaging: (i) => (
      <div
        className={`w-5 h-5 rounded-full transition-all duration-300 cursor-pointer ${
          i === activeIndex ? "bg-orange-500" : "bg-gray-300"
        }`}
      ></div>
     ),

  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Témoignages de nos Parents
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que disent les parents sur notre service
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="zoom-in">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 lg:p-12 shadow-md border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill="currentColor"
                          stroke="none"
                          className="text-2xl text-yellow-500"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                      “{item.quote}”
                    </blockquote>

                    {/* User */}
                    <div className="flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full object-cover object-top mr-4 border-2 border-orange-200"
                      />
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-lg">
                          {item.name}
                        </div>
                        <div className="text-gray-600">{item.role}</div>
                        <div className="text-sm text-orange-600 font-medium">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqContact() {
     const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Comment puis-je m'inscrire aux cours ?",
      answer:
        "Vous pouvez vous inscrire directement via notre formulaire de contact ou nous appeler. Nous vous proposerons un rendez-vous gratuit pour évaluer les besoins de votre enfant.",
    },
    {
      question: "Quels sont vos horaires de disponibilité ?",
      answer:
        "Nos équipes sont disponibles du lundi au vendredi de 8h à 18h, et le samedi de 9h à 15h. Les cours peuvent avoir lieu 7j/7 selon vos préférences.",
    },
    {
      question: "Puis-je avoir un professeur qui parle ma langue locale ?",
      answer:
        "Absolument ! Nous avons des professeurs qui maîtrisent les langues locales (wolof, dioula, etc.) pour faciliter l'apprentissage.",
    },
    {
      question: "Combien coûte une évaluation initiale ?",
      answer:
        "L'évaluation initiale et le premier cours d'essai sont entièrement gratuits. Cela nous permet de mieux comprendre les besoins de votre enfant.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions rapides
          </h2>
          <p className="text-gray-600">
            Les réponses aux questions les plus fréquentes
          </p>
        </div>

        <div className="space-y-4" data-aos="zoom-in">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <Minus className="text-xl text-orange-600 transition-transform duration-300 flex-shrink-0" />
                ) : (
                  <Plus className="text-xl text-orange-600 transition-transform duration-300 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

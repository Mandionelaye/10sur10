import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Quels sont les types de cours proposés par 10sur10 ?",
    answer:
      "10sur10 propose des cours de soutien scolaire à domicile et en ligne dans toutes les matières principales, y compris les mathématiques, le français, les sciences, et plus encore, pour tous les niveaux, du primaire au lycée.",
  },
  {
    question: "Quels sont les tarifs de vos services ?",
    answer:
      "Les tarifs varient en fonction du niveau scolaire, du nombre d’heures de cours et du type de programme choisi. Nous proposons des forfaits flexibles pour s’adapter à vos besoins. Vous pouvez nous contacter pour un devis personnalisé.",
  },
  {
    question: "Comment choisissez-vous les professeurs ?",
    answer:
      "Tous nos professeurs sont rigoureusement sélectionnés selon leurs diplômes, leur expérience pédagogique et leurs qualités humaines. Ils suivent régulièrement des formations pour maintenir l'excellence de notre service.",
  },
  {
    question: "Dans quelles villes êtes-vous présents ?",
    answer:
      "Nous sommes présents dans plus de 20 villes africaines incluant Dakar, Abidjan, Accra, Lagos, Tunis, Casablanca, et bien d'autres. Notre réseau s'étend constamment pour mieux vous servir.",
  },
  {
    question: "Puis-je suivre les progrès de mon enfant ?",
    answer:
      "Absolument ! Notre plateforme dédiée aux parents vous permet de suivre en temps réel les progrès de votre enfant, consulter les rapports de cours et communiquer directement avec les professeurs.",
  },
  {
    question: "Que faire si je ne suis pas satisfait du professeur ?",
    answer:
      "Votre satisfaction est notre priorité. Si un professeur ne convient pas, nous vous proposons immédiatement un remplaçant plus adapté aux besoins de votre enfant, sans frais supplémentaires.",
  },
  {
    question: "Proposez-vous des cours de groupe ?",
    answer:
      "Oui, nous proposons des cours individuels et des cours en petits groupes (2-4 élèves) pour favoriser l'émulation tout en maintenant un suivi personnalisé.",
  },
  {
    question: "Les cours peuvent-ils avoir lieu le week-end ?",
    answer:
      "Bien sûr ! Nos professeurs sont disponibles 7 jours sur 7, y compris les week-ends et pendant les vacances scolaires, pour s'adapter à votre emploi du temps familial.",
  },
  {
    question: "Y a-t-il un service de soutien scolaire en ligne disponible en plus du soutien à domicile ?",
    answer:
      "Oui, 10sur10 propose également un service de soutien scolaire en ligne, idéal pour les familles qui préfèrent une flexibilité totale ou qui habitent en dehors de Dakar. Les cours en ligne sont tout aussi interactifs et personnalisés que les cours à domicile",
  },
];

export default function FaqCompoent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Questions fréquemment posées
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions les plus courantes
          </p>
        </div>

        {/* FAQ Accordéon */}
        <div className="space-y-4" data-aos="zoom-in">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-orange-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-orange-600" />
                  )}
                </div>
              </button>
              <div
                className={`px-8 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                }`}
              >
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="text-center mt-12" data-aos="fade-up">
          <p className="text-gray-600 mb-6">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-customer-service-2-line text-xl mr-2"></i>
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}

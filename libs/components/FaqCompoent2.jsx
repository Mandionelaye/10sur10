import { useState } from "react";
import { Icon } from "@iconify/react";

export default function FaqCompoent2() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quelles sont les conditions requises pour postuler ?",
      answer:
        "Vous devez disposer d’un diplôme reconnu et d’une expérience dans l’enseignement de la matière choisie. La passion pour la pédagogie est un atout essentiel.",
    },
    {
      question: "Quel est le délai de réponse après candidature ?",
      answer:
        "En général, notre équipe vous répond sous 7 à 10 jours ouvrés après la réception de votre candidature.",
    },
    {
      question: "Comment se déroule le processus de sélection ?",
      answer:
        "Après analyse de votre CV, vous serez invité à un entretien. Selon le poste, un test pédagogique pourra être demandé.",
    },
    {
      question: "Puis-je enseigner plusieurs matières ?",
      answer:
        "Oui, si vous disposez des qualifications requises, vous pouvez postuler pour plusieurs matières.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              FAQ Recrutement
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="space-y-4" data-aos="zoom-in">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-orange-50 transition-colors duration-300 focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <Icon
                    icon="ri:arrow-down-s-line"
                    className={`text-2xl text-orange-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 text-gray-600 text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Une autre question ?</p>
            <a
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              href="/contact"
            >
              <Icon icon="ri:question-answer-line" />
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

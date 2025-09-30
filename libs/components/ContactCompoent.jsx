import React, { useState } from "react";
import Swal from "sweetalert2";

export default function ContactComponent() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/contact@10sur10.net",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success === "true") {
        // setStatus("✅ Message envoyé avec succès !");
        Swal.fire({
            title: 'Success!',
            text: 'Votre message a été envoyé avec succès!',
            icon: 'success',
            confirmButtonColor: '#36a9e1',
            timer: 2000,
            timerProgressBar: true
          });
        e.target.reset();
      } else {
        console.error(result);
        // setStatus("❌ Une erreur est survenue : " + (result.message || "…"));
        Swal.fire({
          title: 'Error!',
          text: 'Quelque chose s\'est mal passé. Veuillez réessayer plus tard.',
          icon: 'error',
          confirmButtonColor: '#6366f1'
        });
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Impossible d'envoyer le message.");
    }
  };

  return (
    
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="_template" value="table"/>
            <input type="hidden" name="_subject" value="Nouvelle demande" />
            {/* Champs du formulaire */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nom complet */}
              <div>
                <label htmlFor="nom_complet" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom_complet"
                  name="nom_complet"
                  required
                  placeholder="Votre nom et prénom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Téléphone */}
              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  placeholder="+xxx xx xx xx xx"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                />
              </div>
              {/* Objet */}
              <div>
                <label htmlFor="objet" className="block text-sm font-semibold text-gray-700 mb-2">
                  Objet *
                </label>
                <select
                  id="objet"
                  name="objet"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                >
                  <option value="">Sélectionner un objet</option>
                  <option value="Demande d'informations">Demande d'informations</option>
                  <option value="Inscription">Inscription</option>
                  <option value="Devis personnalisé">Devis personnalisé</option>
                  <option value="Support technique">Support technique</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                maxLength="500"
                rows="5"
                placeholder="Décrivez vos besoins, le niveau scolaire de votre enfant, les matières concernées..."
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm resize-none"
              />
            </div>

            {/* Bouton d'envoi */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="ri-send-plane-line mr-2"></i>Envoyer le message
              </button>
            </div>

            {/* Message de statut */}
          </form>
  );
}

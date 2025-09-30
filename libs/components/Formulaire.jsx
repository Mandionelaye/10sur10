import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";

export default function Formulaire() {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const subjects = [
    "Mathématiques",
    "Français",
    "HG",
    "Anglais",
    "SVT",
    "Physique Chimie",
    "Espagnol",
    "Philosophie",
    "Arabe",
  ];

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Postulez maintenant
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez ce formulaire et rejoignez notre équipe de professeurs
              passionnés
            </p>
          </div>

          {/* ✅ Formulaire natif avec FormSubmit */}
          <form
            action="https://formsubmit.co/recrutement@10sur10.net"
            method="POST"
            encType="multipart/form-data"
            className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-xl"
            data-aos="zoom-in"
          >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://10sur10.net" />
            <input type="hidden" name="_subject" value="Nouvelle candidature" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Nom et Email */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  required
                  className="w-full bg-white px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="votre.email@example.com"
                />
              </div>
            </div>

            {/* Téléphone */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Numéro de téléphone *
              </label>
              <input
                type="tel"
                name="telephone"
                required
                className="w-full bg-white px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="+221 XX XXX XX XX"
              />
            </div>

            {/* Matières */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-4">
                Matière(s) enseignée(s) *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => toggleSubject(subject)}
                    className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                      selectedSubjects.includes(subject)
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-orange-300 hover:bg-orange-50"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>

              {/* Champ caché pour envoyer les matières sélectionnées */}
              <input
                type="hidden"
                name="Matières enseignées"
                value={selectedSubjects.join(", ")}
              />

              {selectedSubjects.length > 0 && (
                <p className="text-sm text-gray-600 mt-4">
                  Matières sélectionnées : {selectedSubjects.join(", ")}
                </p>
              )}
            </div>

            {/* Expérience */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Expérience professionnelle * (max 500 caractères)
              </label>
              <textarea
                name="experience"
                maxLength="500"
                required
                className="w-full bg-white px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none h-32"
                placeholder="Décrivez votre parcours..."
              />
            </div>

            {/* CV */}
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2">
                Téléversement de CV *
              </label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"
              />
            </div>

            {/* ✅ Bouton */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <Icon icon="ri:send-plane-line" /> Postuler maintenant
            </button>

            {/* Redirection après envoi (optionnelle) */}
            <input
              type="hidden"
              name="_next"
              value="https://votre-site.com/merci"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

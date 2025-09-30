import React, { useState } from 'react';

const FormulaireCandidature = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    experience: '',
    cv: null,
    matieres: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      cv: e.target.files[0],
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      matieres: checked
        ? [...prev.matieres, value]
        : prev.matieres.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('nom', formData.nom);
    form.append('email', formData.email);
    form.append('telephone', formData.telephone);
    form.append('experience', formData.experience);
    form.append('cv', formData.cv);
    form.append('matieres', formData.matieres.join(', '));

    try {
      const response = await fetch('https://formsubmit.co/ajax/seydinamandionem9@gmail.com', {
        method: 'POST',
        body: form,
      });

      if (response.ok) {
        alert('Candidature envoyée avec succès');
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          experience: '',
          cv: null,
          matieres: [],
        });
      } else {
        alert('Erreur lors de l\'envoi de la candidature');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi de la candidature');
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Postulez maintenant</h2>
            <p className="text-xl text-gray-600">Remplissez ce formulaire et rejoignez notre équipe de professeurs passionnés</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8 shadow-xl" encType="multipart/form-data">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="nom" className="block text-gray-700 font-semibold mb-2">Nom complet *</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Votre nom complet"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="votre.email@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="telephone" className="block text-gray-700 font-semibold mb-2">Numéro de téléphone *</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                placeholder="+221 XX XXX XX XX"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-4">Matière(s) enseignée(s) *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Mathématiques', 'Français', 'Physique', 'Anglais', 'SVT', 'Physique Chimie', 'Anglais Pro', 'Philosophie', 'Alphabétisation'].map((matiere) => (
                  <label key={matiere} className="px-4 py-2 rounded-full border-2 transition-all duration-300 text-sm font-medium whitespace-nowrap bg-white text-gray-700 border-gray-300 hover:border-orange-300 hover:bg-orange-50">
                    <input
                      type="checkbox"
                      value={matiere}
                      checked={formData.matieres.includes(matiere)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    {matiere}
                  </label>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="experience" className="block text-gray-700 font-semibold mb-2">Expérience professionnelle * (max 500 caractères)</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                maxLength="500"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none h-32"
                placeholder="Décrivez votre parcours, vos qualifications et votre expérience d'enseignement..."
              />
              <p className="text-sm text-gray-500 mt-1">{formData.experience.length}/500 caractères</p>
            </div>
            <div className="mb-8">
              <label htmlFor="cv" className="block text-gray-700 font-semibold mb-2">Téléversement de CV *</label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleFileChange}
                required
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"
              />
              <p className="text-sm text-gray-500 mt-1">Formats acceptés: PDF, DOC, DOCX (max 5MB)</p>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                <i className="ri-send-plane-line"></i>Postuler maintenant
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormulaireCandidature;

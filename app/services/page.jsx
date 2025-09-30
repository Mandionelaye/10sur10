"use client";
import { Icon } from "@iconify/react";
import { BookOpen, Earth, Languages } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
   
   useEffect(() => {
         AOS.init({
         once: false,
         });
     }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('assets/images/accuil/imgBG.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center" data-aos="zoom-in">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Nos Services
          </h1>
          <div className="w-32 h-1 bg-white mx-auto rounded-full mb-8"></div>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Découvrez une gamme complète de services éducatifs conçus pour
            accompagner chaque élève vers l&#x27;excellence académique
          </p>
        </div>
      </section>
      {/* Niveaux Scolaires */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Niveaux Scolaires
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement adapté à chaque étape du parcours scolaire
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8" data-aos="zoom-in">
            <div className="bg-green-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Icon
                  icon={"ri-seedling-line"}
                  className="text-4xl text-white"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
                Élémentaire
              </h3>
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Construction des bases fondamentales avec une pédagogie adaptée
                aux plus jeunes. Apprentissage ludique et interactif pour
                éveiller la curiosité.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Apprentissage ludique</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Méthodes interactives</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Suivi personnalisé</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Bases solides</span>
                </div>
              </div>
              <Link href="/contact">
              <button className="w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:shadow-lg text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                En savoir plus
              </button>
              </Link>
            </div>
            <div className="bg-orange-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                 <Icon icon={"ri-book-2-line"} className="text-4xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
                Collège
              </h3>
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Accompagnement durant cette période cruciale de transition.
                Renforcement des acquis et préparation aux défis du lycée.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Méthodologie</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Confiance en soi</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Préparation examens</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Orientation scolaire</span>
                </div>
              </div>
              <Link href="/contact">
              <button className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:shadow-lg text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                En savoir plus
              </button>
              </Link>
            </div>
            <div className="bg-sky-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50">
              <div className="w-24 h-24 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg">
                <Icon icon={"ri-graduation-cap-line"} className="text-4xl text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
                Lycée
              </h3>
              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Préparation intensive aux examens finaux avec des stratégies
                éprouvées. Excellence académique et réussite garantie.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Bac garanti</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">
                    Méthodes d&#x27;excellence
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Coaching intensif</span>
                </div>
                <div className="flex items-center">
                  <Icon icon={"ri-check-line"} className="text-green-600 text-lg mr-3" />
                  <span className="text-gray-700">Résultats optimaux</span>
                </div>
              </div>
              <Link href="/contact">
              <button className="w-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:shadow-lg text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                En savoir plus
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Matières  */}
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Matières Enseignées
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-6"
            ></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise reconnue dans toutes les matières fondamentales
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="zoom-in">
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                {/* <i className="ri-calculator-line text-2xl text-white"></i> */}
                <Icon icon={"ri-calculator-line"} className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                Mathématiques
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Logique, calculs et raisonnement mathématique
              </p>
               <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
            </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                {/* <i className="ri-pencil-line text-2xl text-white"></i> */}
                <Icon icon={"ri-pencil-line"} className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                Français
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Maîtrise de la langue et expression écrite
              </p>
              <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-purple-400 to-purple-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                <Earth className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
               Histoire & Géographie
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Lois physiques et expérimentations
              </p>
               <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-red-400 to-red-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                {/* <i className="ri-global-line text-2xl text-white"></i> */}
                <Icon icon={"ri-global-line"} className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                Anglais
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Communication internationale
              </p>
               <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-indigo-400 to-indigo-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                {/* <i className="ri-leaf-line text-2xl text-white"></i> */}
                <Icon icon={"ri-leaf-line"} className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                SVT
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Sciences de la vie et de la terre
              </p>
               <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                <i className="ri-test-tube-line text-2xl text-white"></i>
                <Icon
                  icon={"ri-test-tube-line"}
                  className="text-2xl text-white"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                Physique Chimie
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Sciences expérimentales avancées
              </p>
               <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-teal-400 to-teal-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                <i className="ri-briefcase-line text-2xl text-white"></i>
                <Icon
                  icon={"ri-briefcase-line"}
                  className="text-2xl text-white"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                Anglais Pro
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Anglais des affaires et professionnel
              </p>
              <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-gray-400 to-gray-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                <i className="ri-lightbulb-line text-2xl text-white"></i>
                <Icon
                  icon={"ri-lightbulb-line"}
                  className="text-2xl text-white"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                Philosophie
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Réflexion critique et argumentation
              </p>
              <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                {/* <i className="ri-font-size-2 text-2xl text-white"></i> */}
                <Languages className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                Espagnol
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Apprentissage de la lecture et de la parole
              </p>
              <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-fuchsia-400 to-fuchsia-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                <i className="ri-font-size-2 text-2xl text-white"></i>
                <Icon
                  icon={"ri-font-size-2"}
                  className="text-2xl text-white"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                Alphabétisation
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                Apprentissage de la lecture et écriture
              </p>
              <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-pink-400 to-pink-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
             <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
            >
              <div
                className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                {/* <i className="ri-font-size-2 text-2xl text-white"></i> */}
               <BookOpen className="text-2xl text-white" /> 
              </div>
              <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                Arabe
              </h4>
              <p className="text-gray-600 text-center text-sm mb-4">
                 lecture et apprentissage du Coran
              </p>
              <Link href="/contact">
              <button
                className="w-full bg-gradient-to-r from-cyan-400 to-cyan-600 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                En savoir plus
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Outils */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Outils Pédagogiques
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-6"
            ></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une application mobile modernes au service de l&#x27;apprentissage
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="zoom-in">
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6 mx-auto"
              >
                <Icon icon={"ri-dashboard-line"} className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 text-center mb-4">
                Tableau de bord interactif
              </h4>
              <p className="text-gray-600 text-center text-sm mb-6">
                Suivi en temps réel des progrès avec graphiques détaillés
              </p>
              <Link
                href="/contact"
                >
               <button
                className="w-full bg-gradient-to-r from-orange-400 to-red-500 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
               
               > Découvrir </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 mx-auto"
              >
                <Icon icon={"ri-computer-line"} className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 text-center mb-4">
                Supports numériques
              </h4>
              <p className="text-gray-600 text-center text-sm mb-6">
                Cours digitalisés, exercices interactifs et vidéos explicatives
              </p>
              <Link href={"/contact"}
              >
               <button
                className="w-full bg-gradient-to-r from-blue-400 to-purple-500 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
               
               > Découvrir </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto"
              >
                <Icon icon={"ri-calendar-line"} className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 text-center mb-4">
                Planning personnalisé
              </h4>
              <p className="text-gray-600 text-center text-sm mb-6">
                Organisation optimale du temps d&#x27;étude et des révisions
              </p>
              <Link href={"/contact"}
              >
               <button
                className="w-full bg-gradient-to-r from-green-400 to-teal-500 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
               
               > Découvrir </button>
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto"
              >
                <Icon icon={"ri-file-list-line"} className="text-3xl text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 text-center mb-4">
                Évaluations continues
              </h4>
              <p className="text-gray-600 text-center text-sm mb-6">
                Tests réguliers et bilans de compétences détaillés
              </p>
              <Link href={"/contact"}
              >
               <button
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:shadow-lg text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 whitespace-nowrap cursor-pointer"
               
               > Découvrir </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section
        className="py-20 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" data-aos="fade-up">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed" data-aos="fade-up">
            Rejoignez plus de 4000 familles qui nous font déjà confiance et
            offrez à votre enfant l&#x27;excellence qu&#x27;il mérite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="zoom-in">
            <Link
              href="/contact"
              ><button
                className="bg-white text-green-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              >
                Nous contacter
              </button></Link>
             <Link href="/"
              ><button
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Retour à l&#x27;accueil
              </button></Link>
          </div>
        </div>
      </section>
    </>
  );
}

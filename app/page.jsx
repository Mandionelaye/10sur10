"use client";
import {GraduationCap, Book, Sprout, Calculator, Pencil, FlaskConical, Globe, Leaf, TestTube, Briefcase, Lightbulb, Type, Languages, User, Timer, Clock, UserStar, PhoneForwarded, UserRoundPen, Rocket, LayoutDashboard, CircleGauge, LineChart, CalendarCheck, BellDot, FileText, MessageSquareText, Heart, Star, ArrowLeft, MoveLeft, MoveRight, Earth } from "lucide-react";
import Link from "next/link";
import TestimonialCarousel from "@/libs/components/TestimonialCarousel";
import FaqCompoent from "@/libs/components/FaqCompoent";
import ContactCompoent from "@/libs/components/ContactCompoent";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
    useEffect(() => {
        AOS.init({
        once: false,
        });
    }, []);
  return (
    <>
      <div data-testid="home-page">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat pt-20"
       style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("assets/images/accuil/img1.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center", // tu peux ajuster la hauteur
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff"
          }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="w-full flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0" data-aos="zoom-in">
                        <div className="mx-6">
                            <div
                                className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto lg:mx-0 rounded-full">
                            </div>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">N°1 du Soutien Scolaire
                            à domicile en Afrique</h1>
                        <p className="text-xl lg:text-2xl text-orange-300 font-semibold mb-8">Leader du soutien scolaire à
                            domicile depuis 2015</p>
                        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0">Nous accompagnons vos enfants
                            vers la réussite scolaire avec des professeurs qualifiés et une approche personnalisée
                            adaptée au contexte africain.</p><a
                            href="#services"><button
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">Découvrir
                                nos services</button></a>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="zoom-in">
                        <div className="relative">
                            <div
                                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl">
                                <img src="assets/images/accuil/img2.jpg"
                                    alt="Étudiants africains" className="w-full h-full object-cover object-top" /></div>
                            <div
                                className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                                <GraduationCap className="text-white text-3xl" />
                                </div>
                            <div
                                className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#36a9e1] rounded-full flex items-center justify-center">
                                  <Book className="text-white text-3xl" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>

     {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="services">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nos Services</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Un accompagnement personnalisé pour tous les
                        niveaux avec des professeurs qualifiés</p>
                </div>
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="zoom-in">Niveaux scolaires</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Link href="/contact" data-aos="zoom-in"
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div
                                className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                  <Sprout className="text-white text-3xl" />
                                </div>
                            <h4 className="text-2xl font-bold text-gray-900 text-center mb-4">Élémentaire</h4>
                            <p className="text-gray-600 text-center">Fondations solides pour les plus jeunes</p>
                        </Link>
                        <Link href="/contact" data-aos="zoom-in"
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div
                                className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                  <Book className="text-white text-3xl" />
                                </div>
                            <h4 className="text-2xl font-bold text-gray-900 text-center mb-4">Collège</h4>
                            <p className="text-gray-600 text-center">Accompagnement pendant la transition</p>
                        </Link>
                        <Link href="/contact" data-aos="zoom-in"
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div
                                className="w-20 h-20 bg-gradient-to-r from-[#0ebeff] to-[#36a9e1] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                 <GraduationCap className="text-white text-3xl" />
                                </div>
                            <h4 className="text-2xl font-bold text-gray-900 text-center mb-4">Lycée</h4>
                            <p className="text-gray-600 text-center">Préparation aux examens finaux</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="zoom-in">Matières enseignées</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <Calculator className="text-2xl text-orange-600" />
                                </div>
                            <h5 className="font-semibold text-gray-900 text-sm">Mathématiques</h5>
                        </div>
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <i className="ri-pencil-line text-2xl text-orange-600"></i>
                                <Pencil className="text-2xl text-orange-600" />
                            </div>
                            <h5 className="font-semibold text-gray-900 text-sm">Français</h5>
                        </div>
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                {/* <i className="ri-flask-line text-2xl text-orange-600"></i> */}
                                  <Earth className="text-2xl text-orange-600" />
                                </div>
                            <h5 className="font-semibold text-gray-900 text-sm">Histoire & Géographie</h5>
                        </div>
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                {/* <i className="ri-global-line text-2xl text-orange-600"></i> */}
                                <Globe className="text-2xl text-orange-600" />
                                </div>
                            <h5 className="font-semibold text-gray-900 text-sm">Anglais</h5>
                        </div>
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                {/* <i className="ri-leaf-line text-2xl text-orange-600"></i> */}
                                 <Leaf className="text-2xl text-orange-600" />
                                </div>
                            <h5 className="font-semibold text-gray-900 text-sm">SVT</h5>
                        </div>
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                {/* <i className="ri-test-tube-line text-2xl text-orange-600"></i> */}
                                <TestTube className="text-2xl text-orange-600" />
                                </div>
                            <h5 className="font-semibold text-gray-900 text-sm">Physique Chimie</h5>
                        </div>
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                {/* <i className="ri-briefcase-line text-2xl text-orange-600"></i> */}
                                <Briefcase className="text-2xl text-orange-600" />
                                </div>
                            <h5 className="font-semibold text-gray-900 text-sm">Anglais Pro</h5>
                        </div>
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                <i className="ri-lightbulb-line text-2xl text-orange-600"></i>
                                <Lightbulb className="text-2xl text-orange-600" />
                                </div>
                            <h5 className="font-semibold text-gray-900 text-sm">Philosophie</h5>
                        </div>
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                {/* <i className="ri-font-size-2 text-2xl text-orange-600"></i> */}
                                <Type className="text-2xl text-orange-600" />
                                </div>
                            <h5 className="font-semibold text-gray-900 text-sm">Alphabétisation</h5>
                        </div>
                        <div
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100 hover:border-orange-200" data-aos="zoom-in">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                {/* icone arabe */}
                                <Languages className="text-2xl text-orange-600" />
                                </div>
                            <h5 className="font-semibold text-gray-900 text-sm">Arabe</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Nos chiffres clés */}
        <section className="py-20 bg-cover bg-center bg-fixed relative"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("assets/images/accuil/imgBG.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                textAlign: "center"
              }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Nos Chiffres Clés</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">Des résultats concrets qui témoignent de notre
                        engagement envers l&#x27;excellence éducative</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center" data-aos="zoom-in">
                        <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                               <User className="text-3xl text-white" />
                            </div>
                        <div className="text-5xl lg:text-6xl font-bold text-white mb-4">+4.000</div>
                        <div className="text-xl text-gray-200 font-medium">Nous avons encadré plus de 4000 élèves à faire face à leur difficulté scolaire et progresser dans leur étude</div>
                    </div>
                    <div className="text-center" data-aos="zoom-in">
                        <div
                            className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                              <Clock  className="text-3xl text-white"/>
                            </div>
                        <div className="text-5xl lg:text-6xl font-bold text-white mb-4">+640.000</div>
                        <div className="text-xl text-gray-200 font-medium">Plus de 640 000 heures de cours particuliers dispensées depuis 2016 dans toutes les matieres scolaire</div>
                    </div>
                    <div className="text-center" data-aos="zoom-in">
                        <div
                            className="w-20 h-20 bg-gradient-to-r from-[#0ebeff] to-[#36a9e1] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                             <UserStar className="text-3xl text-white" />
                            </div>
                        <div className="text-5xl lg:text-6xl font-bold text-white mb-4">+300.000</div>
                        <div className="text-xl text-gray-200 font-medium">Un réseau de plus de 300 Professeurs qualifiés disponible près de chez vous vous 7jours sur 7.</div>
                    </div>
                </div>
            </div>
        </section>
        {/* procedure */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
               <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h3 data-aos="fade-up" className="text-3xl font-bold text-center text-gray-900 mb-12">Trouver votre répétiteur en quelques <samp className="text-[#36a9e1]">CLICS</samp> </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div data-aos="zoom-in"
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div
                                className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                  <PhoneForwarded  className="text-white text-3xl" />
                                </div>
                            <h4 className="text-2xl font-bold text-gray-900 text-center mb-4">Prise de contact</h4>
                            <p className="text-gray-600 text-center">Prenez contact avec notre conseiller pédagogique pour définir les besoins spécifiques de votre enfant. Il vous guidera dans le choix des cours les plus adaptés</p>
                        </div>
                        <div data-aos="zoom-in"
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div
                                className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                  <UserRoundPen className="text-white text-3xl" />
                                </div>
                            <h4 className="text-2xl font-bold text-gray-900 text-center mb-4">Inscription</h4>
                            <p className="text-gray-600 text-center">Complétez le formulaire d'inscription en ligne avec les informations nécessaires pour personnaliser le suivi. Cela permettra d’identifier les matières et le niveau à travailler.</p>
                        </div>
                        <div data-aos="zoom-in"
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <div
                                className="w-20 h-20 bg-gradient-to-r from-[#0ebeff] to-[#36a9e1] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                 <Rocket className="text-white text-3xl" />
                                </div>
                            <h4 className="text-2xl font-bold text-gray-900 text-center mb-4">Démarrage</h4>
                            <p className="text-gray-600 text-center">Validez l'inscription en procédant au paiement du forfait choisi. Le démarrage des cours aura lieu dans les 48 heures suivant la confirmation de votre inscription.</p>
                        </div>
                    </div>
                </div>
        </section>
        {/* Plateforme  */}
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"  data-aos="zoom-in" >Plateforme dédiée aux parents</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 rounded-full mb-8" data-aos="zoom-in"></div>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed"  data-aos="zoom-in">Suivez en temps réel les progrès de votre
                            enfant grâce à notre tableau de bord personnalisé. Une interface moderne et intuitive pensée
                            pour les parents.</p>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4" data-aos="zoom-in">
                                <div 
                                    className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <CircleGauge  className="text-2xl text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Tableau de bord personnalisé</h3>
                                    <p className="text-gray-600">Interface intuitive pour suivre en temps réel les progrès
                                        de votre enfant</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-aos="zoom-in">
                                <div
                                    className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                     <LineChart className="text-2xl text-orange-600" />
                                    </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Suivi des progrès</h3>
                                    <p className="text-gray-600">Avec des activités pour chaque cours effectué par le professeur</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-aos="zoom-in">
                                <div
                                    className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <CalendarCheck className="text-2xl text-orange-600" />
                                    </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Planning des cours</h3>
                                    <p className="text-gray-600">Visualisez et gérez facilement les séances programmées</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-aos="zoom-in">
                                <div
                                    className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                     <BellDot className="text-2xl text-orange-600" />
                                    </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Notifications intelligentes</h3>
                                    <p className="text-gray-600">Alertes automatiques sur les rapports et rappels de cours
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-aos="zoom-in">
                                <div
                                    className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                     <FileText className="text-2xl text-orange-600" />
                                    </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Rapports détaillés</h3>
                                    <p className="text-gray-600">Bilans périodiques complets avec recommandations
                                        personnalisées par le professeur</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4" data-aos="zoom-in">
                                <div
                                    className="w-12 h-12 bg-gradient-to-r from-orange-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MessageSquareText className="text-2xl text-orange-600" />
                                    </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Communication directe</h3>
                                    <p className="text-gray-600">Échangez facilement avec les professeurs de votre enfant
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-10" data-aos="fade-up">
                            <img
                                src="assets/images/accuil/img2.png"
                                alt="Plateforme parents"
                                className="w-full rounded-2xl shadow-2xl object-cover object-top" /></div>
                        <div  data-aos="zoom-in"
                            className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-20">
                        </div>
                        <div  data-aos="zoom-in"
                            className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-20">
                        </div>
                        <div className="absolute top-8 -left-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"  data-aos="zoom-in">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div><span
                                    className="text-sm font-semibold text-gray-900">En temps réel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* la confiance */}
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center bg-orange-100 rounded-full px-6 py-3 mb-6">
                        <Heart className="text-2xl text-orange-600 mr-2" fill="currentColor" stroke="none" />
                        <span className="text-orange-800 font-semibold">Confiance</span></div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">+4000 parents nous font déjà confiance
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">Rejoignez notre communauté de parents
                        satisfaits qui ont choisi 10sur10 pour accompagner leurs enfants vers la réussite scolaire.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16" data-aos="zoom-in">
                    <div className="relative group">
                        <div
                            className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <img src="assets/images/accuil/img4.jpg"
                                alt="Parent 1"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                    <div className="relative group">
                        <div
                            className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <img src="assets/images/accuil/img5.jpg"
                                alt="Parent 2"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                    <div className="relative group">
                        <div
                            className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <img src="assets/images/accuil/img6.jpg"
                                alt="Parent 3"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                    <div className="relative group">
                        <div
                            className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <img src="assets/images/accuil/img7.jpg"
                                alt="Parent 4"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                    <div className="relative group">
                        <div
                            className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <img src="assets/images/accuil/img8.jpg"
                                alt="Parent 5"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                    <div className="relative group">
                        <div
                            className="w-full aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <img src="assets/images/accuil/img9.jpg"
                                alt="Parent 6"
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100" data-aos="zoom-in">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-4">98%</div>
                            <div className="text-lg text-gray-700 font-semibold">Taux de satisfaction</div>
                            <div className="text-gray-500">des parents recommandent nos services</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-4">92%</div>
                            <div className="text-lg text-gray-700 font-semibold">Amélioration des notes</div>
                            <div className="text-gray-500">constatée après 3 mois de cours</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-[#36a9e1] mb-4">95%</div>
                            <div className="text-lg text-gray-700 font-semibold">Renouvellement</div>
                            <div className="text-gray-500">des familles nous font confiance</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* temoignage */}
        <TestimonialCarousel />
        {/* FAQ */}
        <FaqCompoent />
        {/* Contact */}
  

    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à offrir le meilleur soutien scolaire à votre enfant ? Contactez-nous dès maintenant !
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100" data-aos="zoom-in">
           <ContactCompoent />
        </div>
      </div>
    </section>

    </div>
    </>
  );
}

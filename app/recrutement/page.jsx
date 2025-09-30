"use client";
import FaqCompoent2 from "@/libs/components/FaqCompoent2";
import Formulaire from "@/libs/components/Formulaire";
import { Icon } from "@iconify/react";
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
    {/* hero */}
      <section className="relative h-screen flex items-center justify-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('assets/images/recrutement/img1.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              }}     
      >
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto" data-aos="zoom-in">
                  <div className="flex justify-center items-center">
                    <h1 className="text-6xl font-bold mb-6 leading-tight">Rejoignez l&#x27;aventure</h1>
                    <img src="assets/logo/trans3.svg" className="w-20 h-29 mb-3" alt="logo" />

                  </div>
                    <p className="text-2xl mb-8 leading-relaxed opacity-90">Contribuez à l&#x27;éducation numérique en
                        Afrique et façonnez l&#x27;avenir de milliers d&#x27;élèves</p>
                    <div className="flex flex-wrap justify-center gap-8 text-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-orange-400 rounded-full"></div><span>Impact continental</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div><span>Flexibilité totale</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-sky-400 rounded-full"></div><span>Rémunération attractive</span>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      {/* enseigner */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Pourquoi enseigner avec <span className="text-sky-500">Nous</span> ?</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez tous les avantages de rejoindre la plus
                        grande plateforme éducative d&#x27;Afrique</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="zoom-in">
                    <div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                        <div
                            className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {/* <i className="ri-time-line text-2xl text-white"></i> */}
                            <Icon icon="ri:time-line" className="text-2xl text-white" />
                            </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Flexibilité maximale</h3>
                        <p className="text-gray-600 leading-relaxed">Enseignez selon vos disponibilités, où que vous soyez
                            en Afrique</p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                        <div
                            className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {/* <i className="ri-eye-line text-2xl text-white"></i> */}
                            <Icon icon="ri:eye-line" className="text-2xl text-white" />
                            </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Visibilité africaine</h3>
                        <p className="text-gray-600 leading-relaxed">Votre expertise rayonne dans +20 villes africaines</p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                        <div
                            className="w-16 h-16 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Icon icon="ri:money-dollar-circle-line" className="text-2xl text-white" />
                            </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Rémunération équitable</h3>
                        <p className="text-gray-600 leading-relaxed">Tarifs compétitifs et paiements sécurisés garantis</p>
                    </div>
                    <div
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                        <div
                            className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Icon icon="ri:community-line" className="text-2xl text-white" />
                            </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Impact communautaire</h3>
                        <p className="text-gray-600 leading-relaxed">Participez à l&#x27;essor éducatif du continent
                            africain</p>
                    </div>
                </div>
            </div>
      </section>

      {/* Postulez */}
      <Formulaire />
      {/* FAQ */}
      <FaqCompoent2 />
    </>
  )
}

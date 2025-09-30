"use client";
import ContactComponent from "@/libs/components/ContactCompoent";
import FaqContact from "@/libs/components/FaqContact";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {
    useEffect(() => {
        AOS.init({
        once: false,
        });
    }, []);
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('assets/images/contact/img.jpg')`,
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6" data-aos="zoom-in">
            Contactez-nous
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="zoom-in">
            Une question ? Un projet éducatif ? Notre équipe est là pour vous
            accompagner dans la réussite scolaire de vos enfants.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto" data-aos="zoom-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <i className="ri-phone-line text-white text-xl"></i> */}
                <Icon icon="ri:whatsapp-line" className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600">+222 49 87 58 81</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <i className="ri-mail-line text-white text-xl"></i> */}
                <Icon icon="ri:mail-line" className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact@10sur10.com</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-sky-100">
              <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* <i className="ri-time-line text-white text-xl"></i> */}
                <Icon icon="ri:time-line" className="text-white text-xl" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Horaires</h3>
              <p className="text-gray-600">Lun-Sam 8h-18h</p>
            </div>
          </div>
        </div>
      </section>

      {/* envoyez-nous un message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-aos="zoom-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-8" >
                Envoyez-nous un message
              </h2>
              <ContactComponent />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8" data-aos="fade-up">
                  Notre siège social
                </h2>
                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg mb-8" data-aos="zoom-in">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3792.686443108888!2d-15.977971780426026!3d18.086064801262488!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDA1JzA5LjkiTiAxNcKwNTgnMzkuNCJX!5e0!3m2!1sfr!2ssn!4v1757932485166!5m2!1sfr!2ssn"
                    width="100%"
                    height="300"
                    style={{border:0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-2xl p-6 border border-orange-100" data-aos="zoom-in">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon icon="ri:map-pin-line" className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Adresse principale
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                         TEYERETT, Nouakchott, 
                        <br />
                        Mauritanie
                        <br />
                        <span className="text-orange-600 font-medium">
                          Présent dans plus de 20 villes africaines
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6" data-aos="fade-up">
                  Suivez-nous sur les réseaux
                </h3>
                <div className="grid grid-cols-3 gap-4" data-aos="zoom-in">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61580448801453&locale=fr_FR"
                     target="_blank"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    {/* <i className="ri-facebook-fill text-2xl mb-2 block"></i> */}
                    <Icon icon="ri:facebook-fill" className="text-2xl mb-2 block mx-auto" />
                    <span className="text-sm font-medium">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/dix_sur_dix_mauritanie/"
                     target="_blank"
                    className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                     <Icon icon="ri:instagram-fill" className="text-2xl mb-2 block mx-auto" />
                    <span className="text-sm font-medium">Instagram</span>
                  </Link>
                  <Link
                    href="whatsapp://send?phone=+22249875881"
                     target="_blank"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    <Icon icon="ri:whatsapp-fill" className="text-2xl mb-2 block mx-auto" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@10sur10_mauritanie"
                     target="_blank"
                    className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-800 hover:to-gray-900 text-white rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    <Icon icon="ri:tiktok-fill" className="text-2xl mb-2 block mx-auto" />
                    <span className="text-sm font-medium">TikTok</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
                    <Icon icon="ri:linkedin-fill" className="text-2xl mb-2 block mx-auto" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                  >
                    <Icon icon="ri:youtube-fill" className="text-2xl mb-2 block mx-auto" />
                    <span className="text-sm font-medium">YouTube</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* question */}
       <FaqContact />
    </>
  );
}

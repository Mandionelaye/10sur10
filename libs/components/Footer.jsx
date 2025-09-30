"use client";
import { Icon } from "@iconify/react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <div className=" mr-3">
                <img
                  src="assets/logo/trans1.svg"
                  alt="Logo"
                  className="object-contain md:h-28 md:w-28 h-10 w-10 rounded-4xl"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Leader du soutien scolaire à domicile en Afrique depuis 2015. Nous
              accompagnons vos enfants vers l&#x27;excellence éducative avec
              passion et professionnalisme.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61580448801453&locale=fr_FR"
                className="w-10 h-10 bg-gray-800 hover:bg-[#36a9e1] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                target="_blank"
              >
                {/* <i className="ri-facebook-fill text-lg"></i> */}
                <Facebook fill="currentColor" stroke="none" className="text-lg" />
              </Link>
              <Link
                href="https://www.tiktok.com/@10sur10_mauritanie"
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-[#36a9e1] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <Icon icon={"ri:tiktok-fill"} className="text-lg" />
              </Link>
              <Link
                href="https://www.instagram.com/dix_sur_dix_mauritanie/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-[#36a9e1] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-instagram-fill text-lg"></i>
                <Instagram  className="text-lg" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#36a9e1] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <Linkedin fill="currentColor" stroke="none" className="text-lg" />
              </Link>
              <Link
                href="whatsapp://send?phone=+22249875881"
                target="_blank"
                className="w-10 h-10 bg-gray-800 hover:bg-[#36a9e1] rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <Icon icon={"ri:whatsapp-fill"} className="text-lg" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#36a9e1] transition-colors duration-300 cursor-pointer"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-[#36a9e1] transition-colors duration-300 cursor-pointer"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-[#36a9e1] transition-colors duration-300 cursor-pointer"
                  href="/about"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-[#36a9e1] transition-colors duration-300 cursor-pointer"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-300 hover:text-[#36a9e1] transition-colors duration-300 cursor-pointer"
                  href="/recrutement"
                >
                  Recrutement
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Icon icon={"ri:phone-line"} className="text-xl mr-3" />
                <span className="text-gray-300">+222 49 87 58 81</span>
              </div>
              <div className="flex items-center">
                <Icon icon={"ri:mail-line"} className="text-xl mr-3" />
                <span className="text-gray-300">contact@10sur10.com</span>
              </div>
              <div className="flex items-start">
                <Icon icon={"ri:map-pin-line"} className="text-xl mr-3 mt-1" />
                <span className="text-gray-300">
                    Nouakchott, Mauritanie
                  <br />
                 TEYERETT, Nouakchott, lot numero A03 TVZ
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 10sur10. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-[#36a9e1] transition-colors duration-300 cursor-pointer"
              >
                Mentions légales
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#36a9e1] transition-colors duration-300 cursor-pointer"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-[#36a9e1] transition-colors duration-300 cursor-pointer"
              >
                CGU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

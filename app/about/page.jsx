"use client";
import { Icon } from "@iconify/react";
import { Crosshair } from "lucide-react";
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
      <section className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat pt-20"
        style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
          url('assets/images/about/img1.jpg')`,
      }}>
        
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center text-white">
                <div className="mb-8">
                    <div className="w-32 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 rounded-full"></div>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight" data-aos="zoom-in">Notre Histoire, Votre Réussite</h1>
                <p className="text-xl lg:text-2xl text-orange-300 font-semibold mb-8" data-aos="zoom-in">Pionniers de l&#x27;éducation à
                    domicile en Afrique depuis 2015</p>
                <div className="max-w-4xl mx-auto" data-aos="zoom-in">
                    <p className="text-lg text-gray-200 mb-12 leading-relaxed">Née d&#x27;une vision audacieuse de
                        transformer l&#x27;éducation en Afrique, 10sur10 est devenue la référence du soutien scolaire à
                        domicile. Nous croyons en l&#x27;excellence éducative accessible à tous, partout sur le
                        continent africain.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-orange-400 mb-2">+4000</div>
                            <p className="text-white">Élèves accompagnés</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-green-400 mb-2">+640k</div>
                            <p className="text-white">Heures de cours dispensées</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <div className="text-4xl font-bold text-[#36a9e1] mb-2">+20</div>
                            <p className="text-white">Villes africaines couvertes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Mission */}
     <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Notre Mission &amp; Vision</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center" data-aos="zoom-in">
                <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-orange-500">
                    <div className="flex items-center mb-6">
                        <div
                            className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                            {/* <i className="ri-target-line text-2xl text-white"></i> */}
                            <Crosshair className="text-2xl text-white" />
                            </div>
                        <h3 className="text-3xl font-bold text-gray-900">Mission</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">Démocratiser l&#x27;accès à une éducation de
                        qualité en Afrique en proposant un soutien scolaire personnalisé à domicile. Nous accompagnons
                        chaque élève dans sa réussite scolaire avec des méthodes pédagogiques adaptées au contexte
                        africain.</p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700"><i
                                className="ri-check-line text-orange-500 text-xl mr-3"></i>Excellence pédagogique garantie
                        </li>
                        <li className="flex items-center text-gray-700"><i
                                className="ri-check-line text-orange-500 text-xl mr-3"></i>Approche personnalisée pour
                            chaque élève</li>
                        <li className="flex items-center text-gray-700"><i
                                className="ri-check-line text-orange-500 text-xl mr-3"></i>Accessibilité dans toute
                            l&#x27;Afrique</li>
                    </ul>
                </div>
                <div className="bg-white rounded-3xl p-10 shadow-xl border-l-8 border-green-500">
                    <div className="flex items-center mb-6">
                        <div
                            className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                            <i className="ri-eye-line text-2xl text-white"></i>
                            <Icon icon="ri-eye-line" className="text-2xl text-white" />
                            </div>
                        <h3 className="text-3xl font-bold text-gray-900">Vision</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">Devenir le leader incontesté de
                        l&#x27;éducation à domicile en Afrique et contribuer à l&#x27;émergence d&#x27;une génération
                        d&#x27;Africains éduqués, confiants et prêts à relever les défis du 21ème siècle.</p>
                    <ul className="space-y-3">
                        <li className="flex items-center text-gray-700"><i
                                className="ri-check-line text-green-500 text-xl mr-3"></i>Innovation pédagogique continue
                        </li>
                        <li className="flex items-center text-gray-700"><i
                                className="ri-check-line text-green-500 text-xl mr-3"></i>Expansion panafricaine</li>
                        <li className="flex items-center text-gray-700"><i
                                className="ri-check-line text-green-500 text-xl mr-3"></i>Impact éducatif durable</li>
                    </ul>
                </div>
            </div>
            <div className="mt-20">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">Nos Valeurs</h3>
                <div className="grid md:grid-cols-4 gap-8" data-aos="zoom-in">
                    <div className="text-center">
                        <div
                            className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            {/* <i className="ri-heart-line text-3xl text-white"></i> */}
                            <Icon icon="ri-heart-line" className="text-3xl text-white" />
                            </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Passion</h4>
                        <p className="text-gray-600">L&#x27;amour de l&#x27;enseignement guide toutes nos actions</p>
                    </div>
                    <div className="text-center">
                        <div
                            className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            {/* <i className="ri-star-line text-3xl text-white"></i> */}
                            <Icon icon="ri-star-line" className="text-3xl text-white" />
                            </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence</h4>
                        <p className="text-gray-600">Nous visons toujours la plus haute qualité</p>
                    </div>
                    <div className="text-center">
                        <div
                            className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            {/* <i className="ri-team-line text-3xl text-white"></i> */}
                            <Icon icon="ri-team-line" className="text-3xl text-white" />
                            </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Communauté</h4>
                        <p className="text-gray-600">Ensemble, nous construisons l&#x27;avenir de l&#x27;Afrique</p>
                    </div>
                    <div className="text-center">
                        <div
                            className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            {/* <i className="ri-lightbulb-line text-3xl text-white"></i> */}
                            <Icon icon="ri-lightbulb-line" className="text-3xl text-white" />
                            </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
                        <p className="text-gray-600">Nous réinventons l&#x27;éducation pour l&#x27;Afrique</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Parcoure */}
     <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Notre Parcours</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mb-4"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Découvrez comment 10sur10 est devenue la référence du
                    soutien scolaire en Afrique</p>
            </div>
            <div className="relative">
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-green-500 rounded-full">
                </div>
                <div className="space-y-16">
                    <div className="flex items-center flex-row">
                        <div className="w-1/2 pr-8 text-right">
                            <div data-aos="zoom-in"
                                className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                <div
                                    className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full text-lg mb-4">
                                    2015</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Création de 10sur10</h3>
                                <p className="text-gray-600 leading-relaxed">Lancement à Dakar avec 5 professeurs et 20
                                    élèves. Une vision révolutionnaire pour l&#x27;éducation africaine.</p>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                                {/* <i className="ri-rocket-line text-2xl text-white"></i> */}
                                  <Icon icon="ri-rocket-line" className="text-2xl text-white" />
                                </div>
                        </div>
                        <div className="w-1/2"></div>
                    </div>
                    <div className="flex items-center flex-row-reverse">
                        <div className="w-1/2 pl-8 text-left">
                            <div data-aos="zoom-in"
                                className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                <div
                                    className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-full text-lg mb-4">
                                    2017</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expansion régionale</h3>
                                <p className="text-gray-600 leading-relaxed">Ouverture dans 5 nouvelles villes et lancement
                                    de notre plateforme numérique pour parents.</p>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                                {/* <i className="ri-map-line text-2xl text-white"></i> */}
                                 <Icon icon="ri-map-line" className="text-2xl text-white" />
                                </div>
                        </div>
                        <div className="w-1/2"></div>
                    </div>
                    <div className="flex items-center flex-row">
                        <div className="w-1/2 pr-8 text-right">
                            <div data-aos="zoom-in"
                                className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                <div
                                    className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full text-lg mb-4">
                                    2019</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation pédagogique</h3>
                                <p className="text-gray-600 leading-relaxed">Introduction des outils numériques et méthodes
                                    d&#x27;apprentissage personnalisées.</p>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                                {/* <i className="ri-lightbulb-line text-2xl text-white"></i> */}
                                 <Icon icon="ri-lightbulb-line" className="text-2xl text-white" />
                                </div>
                        </div>
                        <div className="w-1/2"></div>
                    </div>
                    <div className="flex items-center flex-row-reverse">
                        <div className="w-1/2 pl-8 text-left">
                            <div data-aos="zoom-in"
                                className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                <div
                                    className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full text-lg mb-4">
                                    2021</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership continental</h3>
                                <p className="text-gray-600 leading-relaxed">Plus de 2000 élèves accompagnés dans 15 villes
                                    africaines. Certification qualité obtenue.</p>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                                {/* <i className="ri-trophy-line text-2xl text-white"></i> */}
                                    <Icon icon="ri-trophy-line" className="text-2xl text-white" />
                                </div>
                        </div>
                        <div className="w-1/2"></div>
                    </div>
                    <div className="flex items-center flex-row">
                        <div className="w-1/2 pr-8 text-right">
                            <div data-aos="zoom-in"
                                className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                <div
                                    className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-full text-lg mb-4">
                                    2023</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Révolution numérique</h3>
                                <p className="text-gray-600 leading-relaxed">Lancement de notre application mobile et
                                    tableau de bord interactif pour un suivi optimal.</p>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                                {/* <i className="ri-smartphone-line text-2xl text-white"></i> */}
                                <Icon icon="ri-smartphone-line" className="text-2xl text-white" />
                                </div>
                        </div>
                        <div className="w-1/2"></div>
                    </div>
                    <div className="flex items-center flex-row-reverse">
                        <div className="w-1/2 pl-8 text-left">
                            <div data-aos="zoom-in"
                                className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                                <div
                                    className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded-full text-lg mb-4">
                                    2024</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence confirmée</h3>
                                <p className="text-gray-600 leading-relaxed">Plus de 4000 élèves, 300k professeurs, présents
                                    dans +20 villes. Cap vers l&#x27;Afrique entière.</p>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                <i className="ri-star-line text-2xl text-white"></i>
                                <Icon icon="ri-star-line" className="text-2xl text-white" />
                                </div>
                        </div>
                        <div className="w-1/2"></div>
                    </div>
                </div>
            </div>
            <div className="mt-20 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 rounded-3xl p-12 text-white">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h3 className="text-3xl font-bold mb-4">9 Années d&#x27;Excellence</h3>
                    <p className="text-xl opacity-90">Des chiffres qui parlent de notre impact</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8 text-center" data-aos="zoom-in">
                    <div>
                        <div className="text-5xl font-bold mb-2">+4000</div>
                        <p className="text-lg opacity-90">Élèves accompagnés</p>
                    </div>
                    <div>
                        <div className="text-5xl font-bold mb-2">640k+</div>
                        <p className="text-lg opacity-90">Heures de cours</p>
                    </div>
                    <div>
                        <div className="text-5xl font-bold mb-2">300k+</div>
                        <p className="text-lg opacity-90">Professeurs qualifiés</p>
                    </div>
                    <div>
                        <div className="text-5xl font-bold mb-2">+20</div>
                        <p className="text-lg opacity-90">Villes africaines</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Afrique */}
     <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">L&#x27;Afrique au Cœur de Notre Mission
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 mx-auto rounded-full mb-4"></div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">10sur10 est née de la conviction que l&#x27;Afrique
                    mérite une éducation de classe mondiale, adaptée à ses spécificités culturelles et à ses ambitions
                    de développement.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20" data-aos="zoom-in">
                <div className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-2xl"><img
                            src="assets/images/about/img2.jpg"
                            alt="Communauté africaine" className="w-full h-full object-cover object-top" /></div>
                    <div
                        className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#0ebeff] to-[#36a9e1] rounded-full flex items-center justify-center">
                        <Icon icon="ri-community-line" className="text-3xl text-white" />
                        
                        </div>
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Une Approche Africaine de l&#x27;Excellence</h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">Nous comprenons les défis uniques de
                        l&#x27;éducation en Afrique : diversité linguistique, contraintes géographiques, richesse
                        culturelle. C&#x27;est pourquoi nous avons développé une approche pédagogique qui respecte et
                        valorise l&#x27;identité africaine.</p>
                    <div className="space-y-4 mb-8">
                        <div className="flex items-start">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">

                                <Icon icon="ri-check-line" className="text-white text-sm" />
                                </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Pédagogie Contextualisée</h4>
                                <p className="text-gray-600">Méthodes adaptées aux réalités africaines</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                                    <Icon icon="ri-check-line" className="text-white text-sm" />
                                    </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Professeurs Locaux</h4>
                                <p className="text-gray-600">Éducateurs qui comprennent la culture locale</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-8 h-8 bg-[#36a9e1] rounded-full flex items-center justify-center mr-4 mt-1">
                                <Icon icon="ri-check-line" className="text-white text-sm" />
                                </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Valeurs Africaines</h4>
                                <p className="text-gray-600">Respect, solidarité et excellence communautaire</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">Notre Impact Communautaire</h3>
                <div className="grid md:grid-cols-3 gap-8" data-aos="zoom-in">
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-200"><img
                                src="assets/images/about/img3.jpg"
                                alt="Réussite étudiante" className="w-full h-full object-cover object-top" /></div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Réussite Scolaire</h4>
                        <p className="text-gray-600">85% de nos élèves améliorent leurs notes de 2 points minimum</p>
                    </div>
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-200"><img
                                src="assets/images/about/img4.jpg"
                                alt="Formation professeurs" className="w-full h-full object-cover object-top" /></div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Formation Continue</h4>
                        <p className="text-gray-600">Nos professeurs bénéficient de formations régulières aux dernières
                            méthodes</p>
                    </div>
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-sky-200"><img
                                src="assets/images/about/img5.jpg"
                                alt="Familles heureuses" className="w-full h-full object-cover object-top" /></div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Familles Épanouies</h4>
                        <p className="text-gray-600">96% des parents recommandent nos services à leur entourage</p>
                    </div>
                </div>
            </div>
            <div className="text-center bg-gradient-to-r from-sky-500 via-green-500 to-orange-500 rounded-3xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6" data-aos="fade-up">Rejoignez la Famille 10sur10</h3>
                <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto" data-aos="fade-up">Ensemble, construisons l&#x27;avenir éducatif de
                    l&#x27;Afrique. Votre enfant mérite ce qu&#x27;il y a de mieux.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="zoom-in"><Link
                        href="/contact"><button
                            className="bg-white text-sky-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer">Nous
                            Contacter</button></Link><Link
                        href="/services"><button
                            className="border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-sky-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">Découvrir
                            nos Services</button></Link></div>
            </div>
        </div>
    </section>
    </>
  )
}

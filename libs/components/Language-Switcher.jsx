"use client";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

// Nom du cookie défini par Google Translate
const COOKIE_NAME = "googtrans";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [languageConfig, setLanguageConfig] = useState(null);
  
  useEffect(() => {
    // 1. Lire le cookie existant
    const cookies = parseCookies();
    const existingLanguageCookieValue = cookies[COOKIE_NAME];
    console.log("Cookie actuel:", existingLanguageCookieValue);
     
    let languageValue = null;
    if (existingLanguageCookieValue) {
      // 2. Extraire la langue du cookie
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    
    // 3. Sinon, prendre la langue par défaut de la config globale
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    
    // 4. Définir la langue courante si trouvée
    if (languageValue) {
      setCurrentLanguage(languageValue);
    }
    
    // 5. Charger la config
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Fonction pour supprimer tous les cookies googtrans existants
  const clearAllGoogTransCookies = () => {
    const domain = window.location.hostname;
    const rootDomain = `.${domain}`;
    
    // Liste des variations de domaines possibles
    const domains = [
      domain,           // 10sur10.net
      rootDomain,       // .10sur10.net
      '',               // pas de domaine (défaut)
    ];
    
    // Liste des chemins possibles
    const paths = ['/', ''];
    
    // Supprimer toutes les combinaisons possibles
    domains.forEach(d => {
      paths.forEach(p => {
        // Créer une date expirée
        const expireDate = new Date(0).toUTCString();
        
        if (d) {
          document.cookie = `${COOKIE_NAME}=; expires=${expireDate}; path=${p}; domain=${d}`;
        } else {
          document.cookie = `${COOKIE_NAME}=; expires=${expireDate}; path=${p}`;
        }
      });
    });
    
    console.log("Tous les cookies googtrans ont été supprimés");
  };

  // Fonction pour définir le cookie sur tous les domaines nécessaires
  const setGoogTransCookie = (lang) => {
    const domain = window.location.hostname;
    const rootDomain = `.${domain}`;
    const cookieValue = `/auto/${lang}`;
    
    // Définir le cookie sur le domaine principal
    document.cookie = `${COOKIE_NAME}=${cookieValue}; path=/; domain=${domain}`;
    
    // Définir le cookie sur le domaine racine (avec le point)
    document.cookie = `${COOKIE_NAME}=${cookieValue}; path=/; domain=${rootDomain}`;
    
    // Définir le cookie sans domaine spécifique (fallback)
    document.cookie = `${COOKIE_NAME}=${cookieValue}; path=/`;
    
    console.log(`Cookie googtrans défini sur ${domain} et ${rootDomain} avec la valeur: ${cookieValue}`);
  };

  // Fonction de changement de langue
  const switchLanguage = (lang) => () => {
    console.log(`Changement de langue vers: ${lang}`);
    
    // 1. Supprimer tous les cookies existants
    clearAllGoogTransCookies();
    
    // 2. Attendre un court moment pour s'assurer que les cookies sont supprimés
    setTimeout(() => {
      // 3. Définir le nouveau cookie
      setGoogTransCookie(lang);
      
      // 4. Attendre encore un moment puis recharger
      setTimeout(() => {
        console.log("Rechargement de la page...");
        window.location.reload();
      }, 100);
    }, 100);
  };

  // Si pas encore de langue, ne rien afficher
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  return (
    <div className="flex gap-2 md:mt-0 mt-3 notranslate">
      {languageConfig.languages.map((ld, i) => (
        <span key={`lang_${i}`}>
          {currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld.name) ? (
            <button 
              className="p-1 rounded-full bg-sky-300 hover:bg-gray-200 shadow-lg transition"
              title={`Langue actuelle: ${ld.title}`}
            >
              <img src={ld.img} className="w-4 h-4 rounded-2xl" alt={ld.title} />
            </button>
          ) : (
            <button
              onClick={switchLanguage(ld.name)}
              className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg transition text-blue-300 cursor-pointer hover:underline"
              title={`Changer vers: ${ld.title}`}
            >
              <img src={ld.img} className="w-4 h-4 rounded-2xl" alt={ld.title} />
            </button>
          )}
        </span>
      ))}
    </div>
  );
};

export { LanguageSwitcher, COOKIE_NAME };
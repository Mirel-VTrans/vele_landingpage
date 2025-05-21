'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  en: {
    // Language toggle
    'language.en': 'EN',
    'language.de': 'DE',
    
    // Navbar
    'navbar.home': 'Home',
    'navbar.about': 'About',
    'navbar.services': 'Services',
    'navbar.partners': 'Partners',
    'navbar.contact': 'Contact',
    'navbar.brand': 'Transporte Vele',
    
    // Hero section
    'hero.title': 'Transport & Logistics',
    'hero.subtitle': 'You Can Trust',
    'hero.description': 'Complete transport and logistics solutions for your business. Experience, professionalism, and personalized services.',
    'hero.contactButton': 'Contact Us',
    
    // About section
    'about.title': 'About Us',
    'about.description': 'We are dedicated to providing the best transport and logistics solutions for our clients in Germany, with special focus on the Baden-Württemberg region.',
    'about.stat1': 'Monthly Deliveries',
    'about.stat2': 'Satisfied Clients',
    'about.stat3': 'Support',
    'about.whyChooseUs': 'Why Choose Us?',
    'about.reason1': 'Proven transport experience',
    'about.reason2': 'Professional and dedicated team',
    'about.reason3': 'Complete coverage in Germany',
    'about.reason4': 'Real-time monitoring',
    'about.certifications': 'Certifications & Partnerships',
    'about.cert1': 'ISO 9001:2015 Certification',
    'about.cert2': 'FedEx Partner',
    'about.cert3': 'DHL Partner',
    'about.cert4': 'Member of German Transport Association',
    
    // Services section
    'services.title': 'Our Services',
    'services.description': 'Professional logistics solutions tailored to your needs',
    'services.service1.title': 'Express Delivery',
    'services.service1.description': 'Fast and reliable delivery services across Germany and neighboring countries.',
    'services.service2.title': 'Route Optimization',
    'services.service2.description': 'Smart route planning and optimization for efficient transportation.',
    'services.service3.title': 'Warehousing',
    'services.service3.description': 'Secure storage and inventory management solutions.',
    'services.service4.title': 'Special Transport',
    'services.service4.description': 'Specialized transport services for unique cargo requirements.',
    
    // Partners section
    'partners.title': 'Our Partners',
    'partners.description': 'Working together with industry leaders to provide exceptional service',
    'partners.partner1.name': 'FedEx',
    'partners.partner1.role': 'Strategic Partner',
    'partners.partner1.description': 'Global delivery network and express shipping solutions',
    'partners.partner2.name': 'DHL',
    'partners.partner2.role': 'Logistics Partner',
    'partners.partner2.description': 'International logistics and courier services',
    'partners.partner3.name': 'Trans-o-Flex',
    'partners.partner3.role': 'Express Partner',
    'partners.partner3.description': 'Temperature-controlled logistics specialist',
    'partners.partner4.name': 'Swiss Post',
    'partners.partner4.role': 'International Partner',
    'partners.partner4.description': 'Cross-border logistics solutions',
    'partners.partner5.name': 'Gebrüder Weiss',
    'partners.partner5.role': 'Transport Partner',
    'partners.partner5.description': 'Full-service logistics provider',
    'partners.partner6.name': 'Noerpel',
    'partners.partner6.role': 'Regional Partner',
    'partners.partner6.description': 'Comprehensive logistics services in Germany',
    'partners.partner7.name': 'German Transport Association',
    'partners.partner7.role': 'Industry Member',
    'partners.partner7.description': 'Active member of the leading transport association',
    'partners.partner8.name': 'Quality Standards Institute',
    'partners.partner8.role': 'Certification Partner',
    'partners.partner8.description': 'ISO 9001:2015 certified operations',
    'partners.becomePartner': 'Interested in becoming a partner?',
    'partners.partnerButton': 'Partner With Us',
    
    // Contact section
    'contact.title': 'Contact Us',
    'contact.description': 'We\'re here to help. Contact us for any questions or requests.',
    'contact.info': 'Contact Information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message'
  },
  de: {
    // Language toggle
    'language.en': 'EN',
    'language.de': 'DE',
    
    // Navbar
    'navbar.home': 'Startseite',
    'navbar.about': 'Über uns',
    'navbar.services': 'Dienstleistungen',
    'navbar.partners': 'Partner',
    'navbar.contact': 'Kontakt',
    'navbar.brand': 'Transporte Vele',
    
    // Hero section
    'hero.title': 'Transport & Logistik',
    'hero.subtitle': 'Dem Sie vertrauen können',
    'hero.description': 'Komplette Transport- und Logistiklösungen für Ihr Unternehmen. Erfahrung, Professionalität und personalisierte Dienstleistungen.',
    'hero.contactButton': 'Kontaktieren Sie uns',
    
    // About section
    'about.title': 'Über uns',
    'about.description': 'Wir sind bestrebt, die besten Transport- und Logistiklösungen für unsere Kunden in Deutschland anzubieten, mit besonderem Fokus auf die Region Baden-Württemberg.',
    'about.stat1': 'Monatliche Lieferungen',
    'about.stat2': 'Zufriedene Kunden',
    'about.stat3': 'Support',
    'about.whyChooseUs': 'Warum uns wählen?',
    'about.reason1': 'Bewährte Transporterfahrung',
    'about.reason2': 'Professionelles und engagiertes Team',
    'about.reason3': 'Vollständige Abdeckung in Deutschland',
    'about.reason4': 'Echtzeit-Überwachung',
    'about.certifications': 'Zertifizierungen & Partnerschaften',
    'about.cert1': 'ISO 9001:2015 Zertifizierung',
    'about.cert2': 'FedEx Partner',
    'about.cert3': 'DHL Partner',
    'about.cert4': 'Mitglied des Deutschen Transportverbands',
    
    // Services section
    'services.title': 'Unsere Dienstleistungen',
    'services.description': 'Professionelle Logistiklösungen, die auf Ihre Bedürfnisse zugeschnitten sind',
    'services.service1.title': 'Express-Lieferung',
    'services.service1.description': 'Schnelle und zuverlässige Lieferdienste in Deutschland und den Nachbarländern.',
    'services.service2.title': 'Routenoptimierung',
    'services.service2.description': 'Intelligente Routenplanung und Optimierung für effizienten Transport.',
    'services.service3.title': 'Lagerhaltung',
    'services.service3.description': 'Sichere Lagerung und Bestandsmanagementlösungen.',
    'services.service4.title': 'Spezialtransport',
    'services.service4.description': 'Spezialisierte Transportdienste für besondere Frachtanforderungen.',
    
    // Partners section
    'partners.title': 'Unsere Partner',
    'partners.description': 'Zusammenarbeit mit Branchenführern, um außergewöhnlichen Service zu bieten',
    'partners.partner1.name': 'FedEx',
    'partners.partner1.role': 'Strategischer Partner',
    'partners.partner1.description': 'Globales Liefernetzwerk und Express-Versandlösungen',
    'partners.partner2.name': 'DHL',
    'partners.partner2.role': 'Logistikpartner',
    'partners.partner2.description': 'Internationale Logistik- und Kurierdienste',
    'partners.partner3.name': 'Trans-o-Flex',
    'partners.partner3.role': 'Express-Partner',
    'partners.partner3.description': 'Spezialist für temperaturgeführte Logistik',
    'partners.partner4.name': 'Swiss Post',
    'partners.partner4.role': 'Internationaler Partner',
    'partners.partner4.description': 'Grenzüberschreitende Logistiklösungen',
    'partners.partner5.name': 'Gebrüder Weiss',
    'partners.partner5.role': 'Transportpartner',
    'partners.partner5.description': 'Full-Service-Logistikanbieter',
    'partners.partner6.name': 'Noerpel',
    'partners.partner6.role': 'Regionaler Partner',
    'partners.partner6.description': 'Umfassende Logistikdienstleistungen in Deutschland',
    'partners.partner7.name': 'Deutscher Transportverband',
    'partners.partner7.role': 'Branchenmitglied',
    'partners.partner7.description': 'Aktives Mitglied des führenden Transportverbands',
    'partners.partner8.name': 'Qualitätsstandards-Institut',
    'partners.partner8.role': 'Zertifizierungspartner',
    'partners.partner8.description': 'ISO 9001:2015 zertifizierte Betriebsabläufe',
    'partners.becomePartner': 'Interesse an einer Partnerschaft?',
    'partners.partnerButton': 'Partner werden',
    
    // Contact section
    'contact.title': 'Kontakt',
    'contact.description': 'Wir sind für Sie da. Kontaktieren Sie uns für Fragen oder Anfragen.',
    'contact.info': 'Kontaktinformationen',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.address': 'Adresse',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.message': 'Nachricht',
    'contact.form.submit': 'Nachricht senden'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'de' : 'en');
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

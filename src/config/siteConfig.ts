export interface SiteConfig {
  businessName: string;
  shortName: string;
  tagline: string;
  category: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    landmark: string;
    bazar: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  geo: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  workingHours: {
    days: string;
    hours: string;
    emergency: string;
  };
  pwa: {
    enabled: boolean;
    appName: string;
    shortName: string;
    themeColor: string;
    backgroundColor: string;
    startUrl: string;
    display: string;
  };
  navLinks: {
    name: string;
    path: string;
  }[];
  socials: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    googleBusiness: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  businessName: "OM MEDICAL HALL",
  shortName: "OmMedical",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy & Healthcare Store",
  phone: "+919939473076",
  displayPhone: "+91 99394 73076",
  whatsapp: "9939473076",
  email: "contact@ommedicalhall.com",
  address: {
    street: "Near Om Medical Hall",
    landmark: "Hanuman Mandir",
    bazar: "Kothwara Bazar",
    area: "Manpur",
    city: "Gaya",
    state: "Bihar",
    pincode: "823003",
    full: "Hanuman Mandir, near Om Medical Hall, Kothwara Bazar, Gaya, Manpur, Bihar 823003",
  },
  geo: {
    lat: 24.7955,
    lng: 85.0286,
  },
  googleMapsUrl: "https://maps.google.com/?q=Hanuman+Mandir+Kothwara+Bazar+Manpur+Gaya+Bihar+823003",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.8946765715873!2d85.0264113!3d24.7955001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a67e85bbbc7%3A0x86b0337c7689255!2sManpur%2C%20Gaya%2C%20Bihar%20823003!5e0!3m2!1sen!2sin!4v1709300000000!5m2!1sen!2sin",
  workingHours: {
    days: "Monday – Sunday (All 7 Days)",
    hours: "7:30 AM – 10:30 PM",
    emergency: "24x7 Emergency Call Service Available",
  },
  pwa: {
    enabled: true,
    appName: "OM MEDICAL HALL - Pharmacy & Healthcare",
    shortName: "OmMedical",
    themeColor: "#0A8F6A",
    backgroundColor: "#ffffff",
    startUrl: "/",
    display: "standalone",
  },
  navLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ],
  socials: {
    whatsapp: "https://wa.me/919939473076",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    googleBusiness: "https://maps.google.com/?q=Hanuman+Mandir+Kothwara+Bazar+Manpur+Gaya+Bihar+823003",
  },
};

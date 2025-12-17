import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { scrollToSectionWithOffset } from "../../helpers/scrollHelper";
import { useTheme } from "../../context/theme-provider";

const addresses = [
  {
    label: "Abuja Office",
    address: "No. 90A, Nelson Mandela Street. Asokoro, Abuja",
  },
  {
    label: "UK Office",
    address: "No. 26 Denewell Avenue, Manchester - UK",
  },
];

const contacts = [
  { type: "phone", value: "+2348143795632", label: "Call us (Nigeria)" },
  { type: "phone", value: "+44 7397 194713", label: "Call us (UK)" },
  { type: "email", value: "info@activetechnologies.com", label: "Email us" },
];

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    to: "https://facebook.com/activetechnologies",
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    to: "https://x.com/ActiveTechCo",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    to: "https://linkedin.com/company/activetechnologies",
  },
  {
    label: "Instagram",
    icon: FaInstagramSquare,
    to: "https://instagram.com/activetechnologies",
  },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Hire Talent", to: "/hire-a-talent" },
  { label: "Outsource Project", to: "/outsource-project" },
  { label: "Our Team", to: "/members" },
];

const services = [
  "Software Development",
  "Product Management",
  "UI/UX Design",
  "Project Management",
];

export default function Footer() {
  const { theme } = useTheme();

  const resolvedTheme = (() => {
    if (theme === "system") {
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme;
  })();

  const isBW = resolvedTheme === "bw";
  const isDark = resolvedTheme === "dark";

  const footerClass = isBW
    ? "bg-white text-black"
    : isDark
    ? "bg-dark text-white"
    : "bg-white text-gray-900";
  const logoSrc = isBW
    ? "/Images/lightLogo.png"
    : isDark
    ? "/Images/darkLogo.png"
    : "/Images/lightLogo.png";

  return (
    <footer className={footerClass}>
      {/* Main Footer Content */}
      <div className="general-padding py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-4">
                <img
                  src={logoSrc}
                  alt="Active Technologies - Software Engineers Nigeria"
                  className="w-28 sm:w-32 md:w-40 lg:w-48 hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mt-4">
                Connecting you with expert software engineers and tech talent
                across Africa and beyond.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">
                Quick Links
              </h3>
              <nav className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Services</h3>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li key={idx} className="text-gray-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-primary">Contact</h3>
              <div className="space-y-4">
                {addresses.map((addr, idx) => (
                  <div key={idx}>
                    <p className="text-base font-semibold text-primary mb-1">
                      {addr.label}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {addr.address}
                    </p>
                  </div>
                ))}
                <div className="pt-4 space-y-2">
                  {contacts.map((contact, idx) => (
                    <a
                      key={idx}
                      href={
                        contact.type === "email"
                          ? `mailto:${contact.value}`
                          : `tel:${contact.value}`
                      }
                      className="text-gray-400 hover:text-white transition-colors text-sm block"
                      aria-label={contact.label}
                    >
                      {contact.value}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-12"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} Active Technologies. All rights
                reserved.
              </p>
              <p className="text-xs mt-2">
                Building tomorrow's solutions, today.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <p className="text-sm font-medium text-gray-400">Follow Us:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.label}`}
                      className="text-gray-400 hover:text-primary transition-colors text-xl"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex gap-4 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

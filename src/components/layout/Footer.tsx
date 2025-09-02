import { FaInstagram, FaBehance, FaLinkedin, FaYoutube, FaTiktok } from 'react-icons/fa';

const socialLinks = [
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaBehance, label: "Behance" },
  { href: "#", icon: FaLinkedin, label: "LinkedIn" },
  { href: "#", icon: FaYoutube, label: "YouTube" },
  { href: "#", icon: FaTiktok, label: "TikTok" },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} aria-label={label} className="text-gray-500 hover:text-accent transition-colors duration-200">
              <Icon size={24} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Jhael Báez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

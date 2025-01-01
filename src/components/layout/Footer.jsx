import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { text: 'Sobre Nosotros', url: '/about' },
      { text: 'Servicios', url: '/services' },
      { text: 'Portafolio', url: '/portfolio' },
      { text: 'Contacto', url: '/contact' },
    ],
    servicios: [
      { text: 'Desarrollo Web', url: '/services#web' },
      { text: 'Aplicaciones Móviles', url: '/services#mobile' },
      { text: 'Consultoría IT', url: '/services#consulting' },
      { text: 'Desarrollo de Software', url: '/services#software' },
    ],
    contacto: [
      { text: 'info@capitalcode.com' },
      { text: '+1 (555) 123-4567' },
      { text: 'Ciudad de México, México' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'fab fa-facebook' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'fab fa-instagram' },
  ];

  return (
    <footer className="bg-brand-950 text-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block group">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Capital Code Logo" 
                  className="h-14 w-auto transition-transform duration-300 group-hover:scale-105 mix-blend-plus-lighter" 
                />
              </div>
            </Link>
            <p className="text-sm mt-4 text-surface-300">
              Transformando ideas en soluciones digitales innovadoras. 
              Expertos en desarrollo de software y consultoría tecnológica.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-accent-400 font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.url}>
                  <Link 
                    to={link.url} 
                    className="text-surface-300 hover:text-accent-300 transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-accent-400 font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.url}>
                  <Link 
                    to={link.url} 
                    className="text-surface-300 hover:text-accent-300 transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-accent-400 font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              {footerLinks.contacto.map((item) => (
                <li key={item.text} className="text-surface-300">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-brand-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-surface-400">
              &copy; {currentYear} Capital Code. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-400 hover:text-accent-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

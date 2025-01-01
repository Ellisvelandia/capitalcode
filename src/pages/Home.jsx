import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Desarrollo Web',
      description: 'Creamos sitios web modernos y responsivos que cautivan a sus usuarios.',
      icon: '🌐',
    },
    {
      title: 'Aplicaciones Móviles',
      description: 'Desarrollamos apps nativas y multiplataforma para iOS y Android.',
      icon: '📱',
    },
    {
      title: 'Consultoría IT',
      description: 'Asesoramiento experto para optimizar sus procesos tecnológicos.',
      icon: '💡',
    },
    {
      title: 'Desarrollo de Software',
      description: 'Soluciones personalizadas para sus necesidades específicas.',
      icon: '⚙️',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Capital Code - Soluciones Digitales Innovadoras</title>
        <meta name="description" content="Transformamos ideas en soluciones digitales innovadoras. Expertos en desarrollo web, aplicaciones móviles y consultoría IT en México." />
        <meta name="keywords" content="desarrollo web, aplicaciones móviles, software empresarial, consultoría IT, México" />
        <link rel="canonical" href="https://capitalcode.com" />
      </Helmet>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-brand-950 to-brand-900 text-white py-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-accent-300 to-accent-500 text-transparent bg-clip-text">
                Transformamos Ideas en Realidad Digital
              </h1>
              <p className="text-lg md:text-xl text-surface-200 mb-12 max-w-2xl mx-auto">
                Expertos en desarrollo de software y consultoría tecnológica, 
                creando soluciones innovadoras para impulsar su negocio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg bg-accent-500 hover:bg-accent-600 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Iniciar Proyecto</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  to="/portfolio"
                  className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg bg-surface-100 hover:bg-surface-200 text-brand-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Ver Portafolio</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-surface-600 max-w-2xl mx-auto">
                Ofrecemos soluciones tecnológicas completas para ayudar a su empresa 
                a alcanzar sus objetivos digitales.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group p-6 bg-white rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-brand-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-surface-600 group-hover:text-surface-700 transition-colors duration-200">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-900 to-brand-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              ¿Listo para Dar el Siguiente Paso?
            </h2>
            <p className="text-surface-200 mb-8 max-w-2xl mx-auto">
              Contáctenos hoy para discutir cómo podemos ayudar a transformar 
              su visión en una solución digital exitosa.
            </p>
            <div className="inline-block">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors duration-200 shadow-glow-accent"
              >
                Contactar Ahora
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

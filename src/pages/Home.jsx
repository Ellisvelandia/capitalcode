import React from 'react';
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
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-950 to-brand-900 text-white py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-accent-300 to-accent-500 text-transparent bg-clip-text">
              Transformamos Ideas en Realidad Digital
            </h1>
            <p className="text-lg md:text-xl text-surface-200 mb-8 max-w-2xl mx-auto">
              Expertos en desarrollo de software y consultoría tecnológica, 
              creando soluciones innovadoras para impulsar su negocio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors duration-200 shadow-glow-accent"
              >
                Iniciar Proyecto
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-800 hover:bg-brand-700 text-surface-100 font-medium transition-colors duration-200"
              >
                Ver Portafolio
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
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors duration-200 shadow-glow-accent"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

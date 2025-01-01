import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const services = [
    {
      title: 'Desarrollo Web',
      icon: '🌐',
      description: 'Creamos sitios web modernos y responsivos que cautivan a sus usuarios y generan resultados.',
      features: [
        'Diseño UI/UX personalizado',
        'Desarrollo frontend y backend',
        'Optimización SEO',
        'Integración de e-commerce',
      ],
    },
    {
      title: 'Aplicaciones Móviles',
      icon: '📱',
      description: 'Desarrollamos aplicaciones móviles nativas y multiplataforma que destacan en el mercado.',
      features: [
        'Apps iOS y Android',
        'Desarrollo React Native',
        'Diseño intuitivo',
        'Integración con APIs',
      ],
    },
    {
      title: 'Software Empresarial',
      icon: '💼',
      description: 'Soluciones de software personalizadas para optimizar sus procesos empresariales.',
      features: [
        'Sistemas ERP',
        'CRM personalizado',
        'Automatización de procesos',
        'Análisis de datos',
      ],
    },
    {
      title: 'Consultoría IT',
      icon: '💡',
      description: 'Asesoramiento experto para optimizar su infraestructura tecnológica y procesos digitales.',
      features: [
        'Auditoría tecnológica',
        'Planificación estratégica',
        'Optimización de procesos',
        'Seguridad informática',
      ],
    },
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Laravel', 'Express', 'Django'],
    },
    {
      category: 'Base de Datos',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
    },
    {
      category: 'DevOps',
      items: ['Docker', 'AWS', 'Azure', 'CI/CD', 'Kubernetes'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - Capital Code | Desarrollo Web y Software Empresarial</title>
        <meta name="description" content="Servicios profesionales de desarrollo web, aplicaciones móviles y software empresarial. Soluciones digitales personalizadas para impulsar su negocio." />
        <meta name="keywords" content="desarrollo web México, aplicaciones móviles, software empresarial, consultoría IT, servicios tecnológicos" />
        <link rel="canonical" href="https://capitalcode.com/services" />
      </Helmet>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-brand-950 to-brand-900 py-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Nuestros Servicios
            </h1>
            <p className="text-lg md:text-xl text-surface-200 max-w-3xl mx-auto">
              Ofrecemos soluciones digitales completas para ayudar a su empresa 
              a prosperar en la era digital.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-xl shadow-soft p-8 hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-brand-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-surface-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-surface-600"
                      >
                        <span className="text-accent-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-surface-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-brand-900 mb-6">
                Tecnologías que Utilizamos
              </h2>
              <p className="text-surface-600 max-w-2xl mx-auto">
                Trabajamos con las últimas tecnologías para garantizar soluciones 
                modernas, escalables y de alto rendimiento.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech) => (
                <div
                  key={tech.category}
                  className="bg-white rounded-xl shadow-soft p-6 hover:shadow-glow transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-brand-900 mb-4">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm font-medium text-surface-600 bg-surface-100 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-brand-900 mb-6">
                Nuestro Proceso
              </h2>
              <p className="text-surface-600 max-w-2xl mx-auto">
                Un enfoque estructurado para garantizar el éxito de su proyecto.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-glow transition-all duration-300">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">
                  Descubrimiento
                </h3>
                <p className="text-surface-600">
                  Analizamos sus necesidades y objetivos para definir la mejor solución.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-glow transition-all duration-300">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">
                  Planificación
                </h3>
                <p className="text-surface-600">
                  Diseñamos una estrategia detallada y definimos los entregables.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-glow transition-all duration-300">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">
                  Desarrollo
                </h3>
                <p className="text-surface-600">
                  Implementamos la solución siguiendo las mejores prácticas.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-glow transition-all duration-300">
                <div className="text-4xl mb-4">4️⃣</div>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">
                  Lanzamiento
                </h3>
                <p className="text-surface-600">
                  Desplegamos y optimizamos su solución para máximo rendimiento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-900 to-brand-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              ¿Necesita una Solución Digital?
            </h2>
            <p className="text-surface-200 mb-8 max-w-2xl mx-auto">
              Contáctenos hoy para discutir su proyecto y obtener una consulta gratuita.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors duration-200 shadow-glow-accent"
            >
              Solicitar Consulta
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;

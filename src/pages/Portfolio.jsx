import React from 'react';
import { Helmet } from 'react-helmet-async';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Moderno',
      category: 'Desarrollo Web',
      image: '/portfolio/ecommerce.jpg',
      description: 'Plataforma de comercio electrónico con diseño responsivo y experiencia de usuario optimizada.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'App de Gestión Empresarial',
      category: 'Software Empresarial',
      image: '/portfolio/business-app.jpg',
      description: 'Sistema integral de gestión empresarial con módulos de inventario, ventas y recursos humanos.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Docker'],
    },
    {
      title: 'Aplicación Móvil de Fitness',
      category: 'Desarrollo Móvil',
      image: '/portfolio/fitness-app.jpg',
      description: 'App móvil para seguimiento de rutinas de ejercicio y nutrición personalizada.',
      technologies: ['React Native', 'Firebase', 'Node.js'],
    },
    {
      title: 'Portal Educativo',
      category: 'Plataforma Web',
      image: '/portfolio/education.jpg',
      description: 'Plataforma de aprendizaje en línea con cursos interactivos y seguimiento de progreso.',
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL'],
    },
    {
      title: 'Sistema de Reservas',
      category: 'Aplicación Web',
      image: '/portfolio/booking.jpg',
      description: 'Sistema de reservas en línea para restaurantes con gestión de mesas y pedidos.',
      technologies: ['Angular', 'Express', 'MongoDB'],
    },
    {
      title: 'Dashboard Analítico',
      category: 'Business Intelligence',
      image: '/portfolio/analytics.jpg',
      description: 'Dashboard interactivo para visualización de datos empresariales en tiempo real.',
      technologies: ['React', 'D3.js', 'Python', 'AWS'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Portafolio - Capital Code | Proyectos de Desarrollo Digital</title>
        <meta name="description" content="Explore nuestro portafolio de proyectos digitales exitosos. Soluciones web, aplicaciones móviles y software empresarial personalizado." />
        <meta name="keywords" content="portafolio desarrollo web, proyectos software, casos de éxito, desarrollo aplicaciones México" />
        <link rel="canonical" href="https://capitalcode.com/portfolio" />
      </Helmet>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-brand-950 to-brand-900 py-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Nuestro Portafolio
            </h1>
            <p className="text-lg md:text-xl text-surface-200 max-w-3xl mx-auto">
              Descubra cómo hemos ayudado a empresas a transformar sus ideas 
              en soluciones digitales exitosas.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.title}
                  className="group bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-surface-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-brand-900">
                        {project.title}
                      </h3>
                      <span className="text-sm font-medium text-accent-600 bg-accent-50 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-surface-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-surface-500 bg-surface-100 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-900 to-brand-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              ¿Listo para Comenzar su Proyecto?
            </h2>
            <p className="text-surface-200 mb-8 max-w-2xl mx-auto">
              Permítanos ayudarle a convertir su visión en una solución digital exitosa.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors duration-200 shadow-glow-accent"
            >
              Contáctenos
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;

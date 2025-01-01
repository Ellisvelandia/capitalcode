import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Carlos Rodríguez',
      role: 'Director Ejecutivo',
      image: '/team/member1.jpg',
      description: 'Experto en desarrollo de software con más de 15 años de experiencia.',
    },
    {
      name: 'Ana García',
      role: 'Directora de Tecnología',
      image: '/team/member2.jpg',
      description: 'Especialista en arquitectura de sistemas y soluciones cloud.',
    },
    {
      name: 'Miguel Torres',
      role: 'Líder de Desarrollo',
      image: '/team/member3.jpg',
      description: 'Desarrollador full-stack con experiencia en proyectos internacionales.',
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brand-950 to-brand-900 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Sobre Nosotros
          </h1>
          <p className="text-lg md:text-xl text-surface-200 max-w-3xl mx-auto">
            Somos un equipo apasionado por la tecnología, dedicado a crear 
            soluciones digitales innovadoras que impulsan el éxito de nuestros clientes.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-surface-600 mb-6">
                En Capital Code, nos dedicamos a transformar ideas en soluciones 
                digitales excepcionales. Nuestra misión es proporcionar servicios 
                tecnológicos de alta calidad que ayuden a las empresas a prosperar 
                en la era digital.
              </p>
              <p className="text-surface-600">
                Creemos en la innovación constante, la excelencia técnica y el 
                compromiso inquebrantable con el éxito de nuestros clientes.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-soft">
                <img 
                  src="/images/mission.jpg" 
                  alt="Equipo de Capital Code trabajando" 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-surface-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-brand-900 mb-6">
              Nuestro Equipo
            </h2>
            <p className="text-surface-600 max-w-2xl mx-auto">
              Contamos con profesionales altamente calificados y apasionados 
              por crear soluciones tecnológicas innovadoras.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-white rounded-xl shadow-soft p-6 hover:shadow-glow transition-all duration-300"
              >
                <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-brand-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-accent-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-surface-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-brand-900 mb-6">
              Nuestros Valores
            </h2>
            <p className="text-surface-600 max-w-2xl mx-auto">
              Los valores que nos definen y guían en cada proyecto que emprendemos.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-brand-900 mb-4">
                Innovación
              </h3>
              <p className="text-surface-600">
                Buscamos constantemente nuevas formas de resolver desafíos y 
                mejorar nuestras soluciones.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-brand-900 mb-4">
                Compromiso
              </h3>
              <p className="text-surface-600">
                Nos dedicamos al éxito de nuestros clientes y mantenemos los 
                más altos estándares de calidad.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-soft p-8 hover:shadow-glow transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-brand-900 mb-4">
                Excelencia
              </h3>
              <p className="text-surface-600">
                Nos esforzamos por la perfección en cada línea de código y 
                en cada interacción con el cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

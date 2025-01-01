import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
    tipo: 'general',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Ubicación',
      details: ['Ciudad de México', 'México'],
    },
    {
      icon: '📞',
      title: 'Teléfono',
      details: ['+52 (555) 123-4567', '+52 (555) 987-6543'],
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['contacto@capitalcode.com', 'soporte@capitalcode.com'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Capital Code | Inicie su Proyecto Digital</title>
        <meta name="description" content="Póngase en contacto con Capital Code para iniciar su proyecto digital. Ofrecemos consultas gratuitas para discutir sus necesidades tecnológicas." />
        <meta name="keywords" content="contacto desarrollo web, consultoría IT México, desarrollo software contacto, Capital Code contacto" />
        <link rel="canonical" href="https://capitalcode.com/contact" />
      </Helmet>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-brand-950 to-brand-900 py-20">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Contáctenos
            </h1>
            <p className="text-lg md:text-xl text-surface-200 max-w-3xl mx-auto">
              Estamos aquí para ayudarle. Contáctenos y descubra cómo podemos 
              transformar su visión en realidad.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-surface-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-900 mb-8">
                  Información de Contacto
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div 
                      key={info.title}
                      className="flex items-start space-x-4"
                    >
                      <div className="text-4xl">{info.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-brand-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail) => (
                          <p 
                            key={detail}
                            className="text-surface-600"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-brand-900 mb-4">
                    Síguenos en Redes Sociales
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-surface-400 hover:text-accent-500 transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook text-2xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-surface-400 hover:text-accent-500 transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-surface-400 hover:text-accent-500 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a
                      href="#"
                      className="text-surface-400 hover:text-accent-500 transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-soft p-8">
                <h2 className="text-2xl font-display font-bold text-brand-900 mb-6">
                  Envíenos un Mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="nombre"
                        className="block text-sm font-medium text-surface-700 mb-2"
                      >
                        Nombre Completo
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-surface-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="email"
                        className="block text-sm font-medium text-surface-700 mb-2"
                      >
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-surface-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="telefono"
                        className="block text-sm font-medium text-surface-700 mb-2"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-surface-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label 
                        htmlFor="empresa"
                        className="block text-sm font-medium text-surface-700 mb-2"
                      >
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-surface-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div>
                    <label 
                      htmlFor="tipo"
                      className="block text-sm font-medium text-surface-700 mb-2"
                    >
                      Tipo de Consulta
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-surface-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="general">Consulta General</option>
                      <option value="proyecto">Nuevo Proyecto</option>
                      <option value="soporte">Soporte Técnico</option>
                      <option value="cotizacion">Solicitar Cotización</option>
                    </select>
                  </div>
                  <div>
                    <label 
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-surface-700 mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-2 rounded-lg border border-surface-200 focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-200 shadow-glow-accent"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-surface-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-brand-900 mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-surface-600">
                Visítenos en nuestras oficinas centrales
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-soft">
              {/* Aquí iría el componente de mapa */}
              <div className="bg-surface-200 w-full h-full flex items-center justify-center">
                <p className="text-surface-600">Mapa de ubicación</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;

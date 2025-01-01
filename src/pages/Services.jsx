import { useState } from 'react';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      title: 'Custom Website Development',
      description: 'From simple landing pages to complex web applications, we create tailored solutions that match your brand and business needs.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Focused', 'Custom CMS'],
      icon: '🌐',
    },
    {
      title: 'Software Solutions',
      description: 'Custom software development to streamline your business operations and improve efficiency.',
      features: ['Enterprise Applications', 'Mobile Apps', 'API Integration', 'Cloud Solutions'],
      icon: '💻',
    },
    {
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance services to keep your digital assets running smoothly.',
      features: ['24/7 Support', 'Regular Updates', 'Security Patches', 'Performance Monitoring'],
      icon: '🔧',
    },
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary depending on complexity. Simple websites typically take 4-6 weeks, while complex applications may take 3-6 months.',
    },
    {
      question: 'How do you handle project pricing?',
      answer: 'We provide custom quotes based on project requirements, complexity, and timeline. Contact us for a detailed estimate.',
    },
    {
      question: 'Do you offer ongoing maintenance?',
      answer: 'Yes, we offer various maintenance packages to keep your website or application running smoothly after launch.',
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! We can help improve, maintain, or expand your existing digital projects.',
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="transform transition-transform duration-200">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

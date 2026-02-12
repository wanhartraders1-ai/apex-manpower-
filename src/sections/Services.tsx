import { useEffect, useRef } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    badge: 'Primary Service',
    title: 'Manpower Solutions',
    description:
      'Industrial and warehouse workforce supply for demanding operational environments requiring disciplined, safety-conscious personnel.',
    image:
      'https://6966ae82ae1e0cd517350bf8.imgix.net/Untitled%20design%20(1).png',
    features: [
      'Warehouse operations & logistics support',
      'Production line staffing',
      'Material handling specialists',
      'Temporary & permanent placements',
    ],
    cta: 'Request Workforce',
  },
  {
    badge: 'Support Service',
    title: 'Security Personnel Supply',
    description:
      'Security staff deployment only. We provide trained, SIA-licensed security personnel for corporate and industrial environments.',
    image:
      'https://6966ae82ae1e0cd517350bf8.imgix.net/2150321663.jpg',
    features: [
      'SIA-licensed security officers',
      'Access control specialists',
      'Event security teams',
      'Mobile patrol officers',
    ],
    cta: 'Request Personnel',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-hidden');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => {
      el.classList.add('section-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Service Capabilities
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive Warehouse Workforce and Security Personnel Solutions
            for Enterprise Operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`animate-on-scroll group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 stagger-${index + 1}`}
            >
              {/* Image */}
              <div className="relative h-56 lg:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full">
                  {service.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="group/btn inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

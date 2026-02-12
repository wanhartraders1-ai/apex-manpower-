import { useEffect, useRef } from 'react';
import { Users, Clock, Shield, BarChart3 } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Elite Workforce',
    description:
      'Rigorously vetted professionals with proven operational track records',
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description:
      '24-48 hour placement timelines through optimized staffing protocols',
  },
  {
    icon: Shield,
    title: 'Total Compliance',
    description:
      'Full adherence to UK employment law and industry-specific regulations',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time reporting and continuous quality optimization',
  },
];

const Pillars = () => {
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Operational Pillars
          </h2>
          <p className="text-lg text-slate-600">
            Four foundational principles that drive every deployment
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`animate-on-scroll group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200 stagger-${index + 1}`}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                <pillar.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {pillar.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;

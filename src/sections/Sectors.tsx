import { useEffect, useRef } from 'react';
import { Warehouse, Factory, Shield, Building2 } from 'lucide-react';

const sectors = [
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'Large-scale logistics and distribution center staffing',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Production line and industrial facility personnel',
  },
  {
    icon: Shield,
    title: 'Site Security',
    description: 'Perimeter protection and access control solutions',
  },
  {
    icon: Building2,
    title: 'Corporate Security',
    description: 'Office and commercial property protection',
  },
];

const Sectors = () => {
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
    <section ref={sectionRef} className="py-20 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Sector Intelligence
          </h2>
          <p className="text-lg text-slate-400">
            Industry expertise across critical operational environments
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={sector.title}
              className={`animate-on-scroll group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:bg-slate-800 stagger-${index + 1}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                <sector.icon className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">
                {sector.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {sector.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;

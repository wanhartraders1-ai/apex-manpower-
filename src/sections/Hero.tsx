import { useEffect, useRef } from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => {
      el.classList.add('section-hidden');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://6966ae82ae1e0cd517350bf8.imgix.net/674eb9dffb1dbbfba6dbab46_673ddae47825bdfb8799af0b_65d30d3f99d4240558e4fd61_aa0a6e7e-1720-4115-a67b-8f1d17c337e8%2520(1).jpeg"
          alt="Modern warehouse logistics operation"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="animate-on-scroll mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              Built for Reliability. Ready for Scale
            </span>
          </div>

          {/* Title */}
          <h1 className="animate-on-scroll text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 stagger-1">
            Apex: Built for{' '}
            <span className="text-amber-500">Secure Deployment</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-on-scroll text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl stagger-2">
            Disciplined Manpower and Security Personnel Deployment, Designed to
            Scale with Your Operations
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-scroll flex flex-col sm:flex-row gap-4 stagger-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <span>Request Deployment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all duration-300"
            >
              <span>View Services</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
};

export default Hero;

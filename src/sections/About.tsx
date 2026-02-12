import { useEffect, useRef } from 'react';

const About = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://6966ae82ae1e0cd517350bf8.imgix.net/GettyImages-660445456.jpg"
                alt="Professional team collaboration"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-slate-900/5 rounded-full blur-xl" />
          </div>

          {/* Content */}
          <div className="animate-on-scroll stagger-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-lg text-amber-600 font-medium mb-6">
              Built on Experience. Driven by Vision.
            </p>
            
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                APEX Manpower & Security was established to redefine UK manpower
                and security personnel supply through operational excellence and
                technological innovation.
              </p>
              <p>
                Our leadership brings over{' '}
                <strong className="text-slate-900">
                  15 years of direct, frontline experience
                </strong>{' '}
                in large-scale industrial logistics and security personnel
                deployment across demanding operational environments.
              </p>
              <p>
                This practical experience—combined with agile deployment systems
                and rigorous compliance frameworks—enables us to deliver{' '}
                <strong className="text-slate-900">
                  reliability, transparency, and long-term partnership value
                </strong>
                .
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-500 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-500 mt-1">Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-500 mt-1">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

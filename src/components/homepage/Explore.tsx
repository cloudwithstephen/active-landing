import { useEffect, useRef, useState } from "react";
import { capabilities } from "../../constants/homepage";

export default function ExploreSection() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div id="services-section" className="general-padding py-20">
      <div className="max-w-[40rem] md:mx-auto md:text-center">
        <h3 className="section-heading">Explore Our Capabilities</h3>
        <p className="max-xxmd:text-sm">
          Discover a world of possibilities with our diverse range of services.
          From software development to creative design, product management to
          project oversight, we've got you covered.
        </p>
      </div>

      <div
        ref={gridRef}
        className="mt-14 max-w-[55rem] mx-auto grid grid-cols-1 lgMobile:grid-cols-2 gap-3 lgMobile:gap-y-1"
      >
        {capabilities.map((item, idx) => {
          return (
            <div key={idx}>
              <div
                style={{ transitionDelay: `${idx * 75}ms` }}
                className={` ${
                  idx === 0 ? "bg-primary text-white" : "bg-pale-sky"
                } ${
                  (idx === 1 || idx === 3) && "lgMobile:mt-3"
                } rounded-lg min-h-[9rem] lgMobile:min-h-[12rem] p-5 cursor-pointer transition ease-in-out transform duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                } hover:-translate-y-1 hover:shadow-lg hover:ring-2 hover:ring-primary/30 hover:backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40`}
              >
                <h5 className="card-heading mb-4">{item.title}</h5>

                <p className="max-xxmd:text-sm">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

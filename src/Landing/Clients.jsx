import { useEffect, useRef } from "react";

export default function OurClients() {
  const scrollContainerRef = useRef(null);

  const clients = [
    { name: "Google", logo: "/images/c1.png" },
    { name: "Capgemini", logo: "/images/c2.png" },
    { name: "Accenture", logo: "/images/c5.png" },
    { name: "Amazon", logo: "/images/C6.png" },
    { name: "HCLTech", logo: "/images/c13.png" },
    { name: "Infosys", logo: "/images/c12.png" },
    { name: "Infosys", logo: "/images/C7.png" },
    { name: "Indian Oil", logo: "/images/C10.jpg" },
  ];

  // duplicate for infinite scroll
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const container = scrollContainerRef.current;
    let position = 0;
    const speed = 0.3; // slow & smooth

    function autoScroll() {
      if (!container) return;

      position += speed;
      container.scrollLeft = position;

      if (position >= container.scrollWidth / 2) {
        position = 0;
        container.scrollLeft = 0;
      }

      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  }, []);

  return (
    <section className="p-8 bg-white text-center overflow-hidden">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">
        Our Clients
      </h2>

      {/* Auto-Scrolling Clients */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll whitespace-nowrap mt-8 pb-4 scrollbar-hide mx-auto max-w-7xl">
        <div className="inline-flex space-x-8">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="min-w-[180px] md:min-w-[220px] flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { title: "Happy Customers", value: 97, description: "Delivering trust through every successful project." },
  { title: "On-Going Projects", value: 32, description: "Driving progress with precision and commitment." },
  { title: "Completed Projects", value: 148, description: "Quality execution that stands the test of time." },
  { title: "Awards Achievement", value: 10, description: "Recognized for excellence, powered by innovation." },
];

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center py-6">
          {stats.map((stat, index) => (
            <div key={index} className="relative px-6">
              {/* Divider */}
              {index !== 0 && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-white/30 hidden md:block"></div>
              )}

              <h3 className="text-3xl font-semibold">{stat.title}</h3>
              <p className="text-3xl font-bold mt-2">
                {inView ? <CountUp start={0} end={stat.value} duration={3} separator="," /> : 0}+
              </p>
              <p className="text-xl mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
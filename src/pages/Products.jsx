import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import product1 from "/images/products/PR1.png";
import product2 from "/images/products/PR2.png";
import product3 from "/images/products/PR3.png";
import product4 from "/images/products/PR4.png";
import product5 from "/images/products/PR5.png";
import product6 from "/images/products/PR6.png";
import product7 from "/images/products/PR7.png";
import product8 from "/images/products/PR8.png";
import product9 from "/images/products/PR9.png";
import product10 from "/images/products/PR10.png";
import product11 from "/images/products/PR11.png";
import product12 from "/images/products/PR12.png";
import product13 from "/images/products/PR13.png";
import product14 from "/images/products/PR14.png";
import product15 from "/images/products/PR15.png";
import product16 from "/images/products/PR16.png";
import product17 from "/images/products/PR17.png";

const products = [
  {
    title: "Compact Substation (CSS)",
    description:
        `A CSS panel (Compact Secondary Substation) is a
          compact, factory-built electrical unit integrating
          MV (medium-voltage) switchgear, a distribution
          transformer, and LV (low-voltage) bus or
          switchgear in a single housing. This all-in-one
          setup saves space and simplifies installation,
          especially in urban or constrained locations.
          CSS panels are commonly used to step down
          power from medium voltage (e.g. 11–33  kV) to
          low voltage (like 415 V), providing a safe, efficient,
          and optimized electrical distribution point.`,    
    img: product8,
   },
  {
    title: "Power Control Center Panel (PCC)",
    description:
      `Panel is a robust, centralized low-voltage
      distribution and control assembly used in industrial
      and commercial systems. It receives power from
      the main source (like a transformer or DG set) and
      distributes it to multiple loads while providing
      protection, monitoring, and control. Constructed
      with compartmentalized modules and high-quality
      busbars, the PCC panel ensures reliable power
      delivery, safety, and scalability.`,
    img: product1,
  },
  {
    title: "Motor Control Center Panel (MCC)",
    description:
      `Low voltage Panel is a centralized, low- voltage control unit designed
        to manage and protect multiple electric motors in
        industrial or commercial environments. It contains
        modular “buckets” or compartments, each housing a
        motor starter and control elements. Powered by a
        common busbar, the MCC facilitates efficient motor
        control, automation, and monitoring from a single
        location.`,
    img: product2,
  },
  {
    title: "Automatic Power Factor Controller (APFC)",
    description:
      `Panel is a control system designed to maintain the power
        factor of an electrical installation at an optimal level.
        It does this by automatically switching capacitor banks on
        and off based on reactive power demand. This reduces
        unnecessary reactive current, improves energy efficiency,
        and helps avoid power factor penalties from utilities.`,
    img: product3,
  },
  {
    title: "Diesel Generator Synchronization Panel (DG sync)",
    description:
      `A DG Synchronization Panel is a control unit that
        synchronizes two or more diesel generators (Dgs) or a
        DG with the grid. It makes sure the voltage, frequency,
        phase-sequence, and phase angle all match before
        allowing the DGs to run in parallel.It also handles load
        sharing (both active kW and reactive kVAr), and can do
        auto-start / auto-stop of DG sets depending on load or
        grid conditions.`,
    img: product4,
  },
  {
    title: "Timer Panel",
    description:
      `A Timer Panel is an electrical control panel that
        uses time-relays or digital timers toautomatically
        switch loads ON or OFF based on a preset
        schedule. It’s used to automate operations like
        pump control, lighting, motor start/stop, and other
        scheduled tasks.`,
    img: product5,
  },
  {
    title: "MCCB LT Panel",
    description:
        `A MCCB LT Panel is a low- voltage distribution
        panel (typically ≤ 1 kV) that uses Molded Case
        Circuit Breakers (MCCBs) to protect and switch
        incoming and outgoing power circuits. It’s used to
        distribute power safely across different parts of a
        facility, while handling large currents and fault
        conditions reliably.`,    
    img: product6,
  },
  {
    title: "11KV/33KV VCB Panel ",
    description:
              `The 33 kV ICOG panel is designed for safe and
      efficient control of incoming and outgoing feeders
      in medium-voltage distribution systems. It features
      advanced protection relays, metering, interlocking,
      and switching mechanisms to ensure reliable
      power flow, fault isolation, and enhanced
      operational safety.
      The 33 kV ICOG panel is engineered for mediumvoltage feeder management, featuring vacuum
      circuit breakers (VCBs), numerical protection
      relays, and fully interlocked switching schemes for
      reliable incoming and outgoing feeder operations.
      It supports precise metering, fault detection, feeder
      isolation, and remote SCADA/RTU integration,
      ensuring high system reliability, operational safety,
      and compliance with IEC standards.`,    
    img: product7,
  },
   {
    title: "Feeder Pillar",
    description:
        `A Feeder Pillar Panel is an outdoor (or indoor)
          electrical enclosure that serves as a local
          distribution point for low-voltage feeders. It takes
          incoming power (e.g., from a transformer or main
          distribution board) and distributes it to multiple
          outgoing circuits using switches, fuses, or circuit
          breakers. Built to be rugged and weather-resistant,
          feeder pillars are suitable for installations such as
          street lighting, commercial complexes, industrial
          parks, and other areas where reliable, localized
          power distribution is needed.`,    
    img: product9,
   },
    {
    title: "Automatic Mains Failure (AMF)",
    description:
        `An AMF Panel (Auto Mains Failure Panel)
          automatically manages the changeover between the
          main utility power and a backup generator (DG).
          When the mains supply fails, it starts the generator,
          transfers the load; when mains is restored, it
          switches back and shuts down the generator safely.
          This ensures uninterrupted power to critical
          systems without manual intervention.`,
    
    img: product10,
   },
    {
    title: "Power Distribution Board (PDB)",
    description:
        `The PDB panel is designed for efficient distribution
          of electrical power to multiple load centers,
          featuring robust busbar systems, molded case
          circuit breakers (MCCBs), MCB feeders, and
          protective devices for safe and reliable operation.
          Engineered to meet industrial and commercial load
          requirements, it ensures optimal power segregation,
          overload/short-circuit protection, and easy
          maintenance with fully compartmentalized
          construction as per IEC standards.`,
    
    img: product11,
   },
    {
    title: "LT KIOSK",
    description:
        `The LT Kiosk panel is a compact, weatherproof
          outdoor distribution unit designed for reliable
          low-voltage power delivery in utility and
          c omme r c i a l a p p li c a ti o n s. It i n t e g r a t e s
          MCCBs/ACBs, metering, and protection devices
          within a tamper-proof, IP-rated enclosure, ensuring
          safe energy distribution, fault protection, and easy
          field maintenance. Built to IEC/IS standards, it is
          ideal for pole-mounted or ground-mounted LV
          distribution networks.`,
    img: product12,
   },
   {
    title: "Automatic Transfer Switch Panel (ATS)",
    description:
        `The ATS panel provides fully automatic transfer of
          load between the mains supply and generator
          during power failure. Equipped with intelligent
          sensing, interlocking, and high-capacity switching
          devices, it ensures seamless source changeover,
          protection against voltage/frequency abnormalities,
          and reliable continuity of power. Designed to meet
          IEC/IS standards, it is suitable for critical industrial,
          commercial, and infrastructure applications.`,
    img: product13,
   },
   {
    title: "Vacuum Circuit Breake (VCB)",
    description:
        `The VCB panel is engineered for medium-voltage
          switching and protection, utilizing vacuum
          interruption technology to ensure arc-free, reliable
          operation. It features draw-out type VCB modules,
          numerical protection relays, robust busbar
          assemblies, and mechanical/electrical interlocking
          for safe feeder control and fault isolation. Designed
          in compliance with IEC/IS standards, the panel
          delivers high dielectric strength, fast fault
          clearance, and long service life, making it ideal for
          substations, industrial plants, and utility networks.`,
    img: product14,
   },
     {
    title: "FCMA Soft Starter",
    description:
        `The FCMA (Flux Compensated Magnetic
          Amplifier) Soft Starter panel provides smooth,
          controlled motor acceleration by reducing inrush
          current and mechanical stress during startup. Using
          magnetic flux compensation technology, it ensures
          high reliability, minimal maintenance, and
          improved motor life. The panel integrates
          protection relays, bypass contactors, and
          monitoring instruments, making it suitable for
          pumps, compressors, conveyors, and other heavyduty industrial motors. Designed as per IEC/IS
          standards, it delivers robust performance even
          under harsh operating conditions.`,
    img: product15,
   },
    {
    title: "BUS Duct",
    description:
        `Low-Tension Bus Duct (L.T. Bus Duct) or
          Sandwich Bus Duct is a system used for electrical
          power distribution in low-voltage applications.
          It serves as a reliable and efficient means to
          transfer electrical power from one location to
          another, often within the same facility. The term
          “sandwich” refers to the layered construction of
          the bus duct.`,
    img: product16,
   },
    {
    title: "Variable Frequency Drive PaneL (VFD)",
    description:
        `A Variable Frequency Drive (VFD) Panel is an
          electrical control panel specifically designed to
          house and control Variable Frequency Drives.
          VFDs are devices that control the speed of electric
          motors by varying the frequency and voltage
          supplied to the motor. The VFD panel provides
          the necessary components and infrastructure to
          control and protect the VFD.`,
    img: product17,
   },
   
];

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] overflow-y-auto" data-aos="zoom-in">
        <img src={product.img} alt={product.title} className="w-full h-96 object-contain rounded-lg mb-4" />
        <div className="w-full mt-4 px-2">
        <h3 className="text-2xl font-bold text-left">{product.title}</h3>
        <p className="mt-4 text-gray-700 leading-relaxed text-justify">
          {product.description}
        </p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={onClose}
        >
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="bg-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl sm:text-5xl font-bold">Products</h1>
          <p className="text-gray-700 mt-2">Home &gt;&gt; Products</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[250px] object-contain rounded-xl shadow-md mb-4"
              />
              <h3 className="text-xl font-bold text-blue-600">{product.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed text-justify">
                {product.description.substring(0, 100)}...
              </p>
              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md mt-10">
  <h2 className="text-xl font-bold mb-4">FOREIGN PRESENCE/EXPORTS</h2>
  <p className="text-gray-650 leading-relaxed">
    Currently, our company does not engage in any foreign operations or exports.
    However, we acknowledge the possibility of venturing into international markets
    as a part of long-term strategic goals.
  </p>

  <h2 className="text-xl font-bold mt-6 mb-4">PLACE OF BUSINESS OF THE COMPANY</h2>
  <p className="text-gray-650 leading-relaxed">
    The Company is a prominent manufacturer & supplier of Electrical Control Panels,
    and other electrical products, also a leading Solution provider in the field of Automation.
  </p>

  <p className="text-gray-650 mt-4">
    <b>HEAD OFFICE:</b> No. 12, Ground Floor, Near New Law Court, K-Block,
    Kuvempunagar, Mysuru, Karnataka - 570 023
  </p>

  <p className="text-gray-650 mt-2">
    <b>MANUFACTURING UNIT:</b> Plot No. 70, 3rd Phase, Koorgalli Industrial Area,
    Mysuru, Karnataka - 570 018
  </p>
  <h3 className="text-center text-xl font-semibold mt-8 mb-4">
    Our Manufacturing Units
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 text-center">
  <img
    src="/images/products/PRE1.jpg"
    className="w-3/4 mx-auto h-56 object-cover rounded-lg shadow"
  />
  <img
    src="/images/products/PRE2.jpg"
    className="w-3/4 mx-auto h-56 object-cover rounded-lg shadow"
  />
  <img
    src="/images/products/PRE3.jpeg"
    className="w-3/4 mx-auto h-56 object-cover rounded-lg shadow"
  />
  <img
    src="/images/products/PRE4.jpg"
    className="w-3/4 mx-auto h-56 object-cover rounded-lg shadow"
  />
</div>

</div>


      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default ProductPage;
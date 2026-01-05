import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import service1 from "/images/services/SR1.jpg";
import service2 from "/images/services/SR2.png";
import service3 from "/images/services/SR3.jpg";
import service4 from "/images/services/SR4.jpg";
import service5 from "/images/services/SR5.jpg";
import service6 from "/images/services/SR6.jpg";

const services = [
  {
    title: "Railway Infra and Electrification",
    preview: ( <> At <b>CORE4 ENGINEERS Limited</b>, we specialize in delivering comprehensive
        engineering solutions for the <b>railway infrastructure</b> sector, combining innovation,
        technical excellence, and safety-driven design. Our dedicated team of railway
        engineers, planners, and project managers support modernization, expansion,
        and maintenance of rail networks that connect communities and drive economic growth.</>),
    description: (
      <>
        At CORE4 ENGINEERS Limited, we specialize in delivering comprehensive
        engineering solutions for the railway infrastructure sector, combining innovation,
        technical excellence, and safety-driven design. Our dedicated team of railway
        engineers, planners, and project managers support modernization, expansion,
        and maintenance of rail networks that connect communities and drive economic growth.
        <br /><br />
        <strong>Our Expertise :</strong>
        <br />
        We provide end-to-end railway infrastructure services covering every stage of a project — from feasibility studies and detailed design to 
        construction supervision and asset management. With a focus on efficiency, reliability, and sustainability, our team ensures that every project meets 
        the highest standards of performance and compliance.
        <br /><br />
        <strong>Our Railway Infrastructure Services Include :</strong><br />
        <strong>➣ Railway Electrification - </strong>
        Precision engineering for Over Head Electrification (OHE) works, associated Traction Sub-Stations (TSS) with &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;necessary Power  Supply Installations for 1 X 25KV and 2 X 25KV systems.<br />
        <strong>➣ Railway Foot-over Bridges & Structures - </strong>
        Design, Engineer, Fabrication and Erection of Footover bridges, culverts, retaining walls, and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;other civil structures.
        <br />
        <strong>➣ Railway Stations & Terminals - </strong>
        Planning and engineering of Railway Station Redevelopment of passenger and freight stations with an &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;emphasis on accessibility, functionality, commercial and safety.
        <br />
        <strong>➣ Signalling & Telecom works - </strong>
        Integration of track and systems interfaces to ensure safe and efficient operations.
        <br />
        <strong>➣ Drainage & Earthworks - </strong>
        Design of subgrade, embankments, and drainage systems to ensure long-term stability and durability.
        <br />
        <strong>➣ Project Management & Supervision - </strong>
        Comprehensive oversight to ensure quality, cost, and schedule targets are achieved.
        <br />
        <strong>➣ Rehabilitation & Upgrading Works -</strong>
        Modernization of existing railway assets for improved performance and reduced maintenance costs.
        <br />
        <strong>➣ Pre – Engineered Building - </strong>
        Design, Fabrication, and Erection of Pre – Engineered buildings focusing on reduced construction time, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reliability and safety.
        <br /><br />

        <strong>Why Choose CORE4 ENGINEERS ?</strong><br />
        ➣ Proven experience in <b>Railway design, Construction, and Project delivery</b>.<br />
        ➣ Commitment to <b>Railway standards and local regulatory compliance</b>.<br />
        ➣ A multidisciplinary approach integrating Civil, Structural, Geotechnical, Electrical, OHE, S&T and systems engineering.<br />
        ➣ Focus on <b>Safety, Sustainability, and Innovation</b> in every project.
        <br /><br />

        At <b>CORE4 ENGINEERS Limited</b>, we understand the complexity of railway systems and the importance of reliability in transport networks. Our mission is to deliver infrastructure that enhances connectivity, supports economic growth, and contributes to a sustainable future.
      </>
    ),
    img: service1,
  },
  {
    title: "Water and Wastewater Treatment",
    preview: ( <> At <b>CORE4 ENGINEERS Limited</b>, we provide innovative, sustainable, and cost-effective <b>Water and Wastewater Treatment</b> solutions 
    designed to meet the needs of municipalities, industries, and communities. Our mission is to deliver engineering excellence that ensures 
    clean water for today — and a healthier environment for the future.</>),
    description: (
      <>
        At <b>CORE4 ENGINEERS Limited</b>, we provide innovative, sustainable, and cost-effective <b>Water and Wastewater Treatment</b> solutions 
        designed to meet the needs of municipalities, industries, and communities. Our mission is to deliver engineering excellence that ensures 
        clean water for today — and a healthier environment for the future.
        <br /><br />
        <strong>Our Expertise :</strong><br />
        We specialize in the Planning, Design, Construction, and Optimization of water and wastewater treatment systems. Our multidisciplinary team of civil, environmental, and process engineers brings a deep understanding of treatment technologies, environmental standards, and operational efficiency to every project.
        <br /><br />
        <strong>Our Water & Wastewater Services Include :</strong>
        <br />
        <strong>➣ Water Treatment Plants (WTP):</strong>
        Design and implementation of plants for purification, filtration, and disinfection of raw water to ensure safe and reliable supply.
        <br />
        <strong>➣ Wastewater Treatment Plants (WWTP):</strong>
        Comprehensive solutions for domestic and industrial wastewater, including
        biological, chemical, and physical treatment systems.
        <br />
        <strong>➣ Sewage Treatment Systems:</strong>
        Design and rehabilitation of sewer networks, pumping stations, and treatment facilities to manage urban wastewater efficiently.
        <br />
        <strong>➣ Effluent Treatment Plants (ETP):</strong>
        Custom solutions for industrial clients to treat effluents and meet environmental discharge regulations.
        <br />
        <strong>➣ Sludge Management:</strong>
        Sustainable handling, treatment, and disposal or reuse of sludge through advanced drying and digestion processes.
        <br />
        <strong>➣ Water Recycling & Reuse:</strong>
        Integration of advanced technologies for resource recovery and water reuse, supporting circular economy principles.
        <br />
        <strong>➣ Operation & Maintenance Support:</strong>
        Long-term operational services, performance monitoring, and capacity-building programs for treatment facilities.
        <br /><br />
        <strong>Why Choose CORE4 ENGINEERS Limited ?</strong><br />
        ➣ Proven experience in <b>Designing and Executing Treatment facilities</b> that meet local and international standards.<br />
        ➣ Commitment to <b>Environmental sustainability</b> and <b>resource efficiency</b>.<br />
        ➣ Integration of <b>state-of-the-art technologies</b> for optimized plant performance and reduced lifecycle costs.<br />
        ➣ A <b>client-focused approach</b> that ensures tailored solutions for every project scale and requirement.
        <br /><br />
        At <b>CORE4 ENGINEERS Limited</b>, we believe that access to clean water and responsible
        wastewater management are essential to sustainable development. Our goal is to engineer
        smart, reliable, and environmentally sound systems that protect natural resources and
        improve quality of life.
      </>
    ),
    img: service2,
  },
  {
    title: "EHV Transmission and Distribution Systems",
    preview: ( <> At <b>CORE4 ENGINEERS Limited</b>, we deliver advanced engineering solutions for <b>Extra High Voltage (EHV) Transmission and Distribution Systems</b>, enabling reliable power delivery from generation sources to consumers. With a focus on performance, safety, and sustainability, we provide end-to-end services that support the growth and modernization of electrical networks across urban and industrial sectors.</>),
    description: (
      <>
        At <b>CORE4 ENGINEERS Limited</b>, we deliver advanced engineering solutions for <b>Extra High Voltage (EHV) Transmission and Distribution Systems</b>, enabling reliable power delivery from generation sources to consumers. With a focus on performance, safety, and sustainability, we provide end-to-end services that support the growth and modernization of electrical networks across urban and industrial sectors.
        <br /><br />
        <strong>Our Expertise :</strong><br />
        Our multidisciplinary team of electrical, civil, and structural engineers brings in-depth experience in the <b>planning, design, construction, testing, and commissioning</b> of transmission and distribution infrastructure. We combine technical precision with innovative practices to ensure efficient energy transmission, reduced losses, and long-term operational reliability.        <br /><br />
        <strong>Our Services Include:</strong>
        <br />
        <strong>➣ Transmission Line Works (Up to 440 kV):</strong>
        We conduct Engineering design and optimization of overhead transmission lines, including route selection, tower design, and structural analysis for 11kV to 400kV for State Transmission & Distribution company, Independent Power Producers (IPP), ESCOMs, Railway Traction Network Etc with distribution networks. 
        <br />
        <strong>➣ Substation Design (AIS & GIS):</strong>
        Design, Supply, Erection and Commissioning of Sub – Station layouts of Air-Insulated and Gas-Insulated substations, covering electrical – civil for sub-station voltage raging from 400kV / 220kV / 132kV / 110kV / 66kV / 33kV / 11kV systems, for ESCOMs, Railway Traction System along with control system integration.
        <br />
        <strong>➣ Distribution Network Systems:</strong>
        Planning and implementation of medium and low-voltage distribution networks for urban and rural electrification of voltage 33kV / 11kV systems. Our focus is to Design, Execute and implement robust distribution system emphasising on reaching every individual sustainably 
        <br />
        <strong>➣ Cable Engineering:</strong>
        Design and installation of EHV underground systems with advanced thermal and electrical modelling for voltage upto 132kV / 66kV even higher voltage as per client requirement. Our team is experienced in Execution of EHV cable works including Commissioning. 
        <br />
        <strong>➣ Protection, Control & SCADA Systems:</strong>
        We provide Integration of automation, control, and monitoring systems for efficient grid operation and fault management systems. Our team of Automation engineers integrate various systems from Sub-Stations, Transmission line C&R panels up till load dispatch centres. The service can be extended to IPPs and Transmission companies. 
        <br />
        <strong>➣ Project Management & Supervision:</strong>
        Comprehensive support through every project stage — Design, Procurement, Construction, Testing and Commissioning.
        <br />
        <strong>➣ Upgrading & Rehabilitation Works:</strong>
        Modernization of existing transmission and distribution infrastructure to improve capacity and reliability. We design upgradation systems with cost effective and sustainable way, serving areas across sectors such as Industrial, Residential, and Electric Vehicle (EV). 
        <br /><br />
        <strong>Why Choose CORE4 ENGINEERS Limited?</strong><br />
        ➣ Proven expertise in <b>EHV system design, installation, and commissioning</b>.<br />
        ➣ Adherence to <b>International standards (IEC, IEEE, IS)</b> and local regulations.<br />
        ➣ Integration of <b>cutting-edge technology and sustainable engineering practices</b>.<br />
        ➣ Experienced team offering <b>comprehensive multidisciplinary solutions</b>.<br /><br />
        At <b>CORE4 ENGINEERS Limited</b>, our mission is to empower communities and industries with <b>efficient, resilient, and future-ready power infrastructure</b>. We ensure that every project we deliver contributes to a stronger, smarter, and more sustainable energy network.
      </>
    ),
    img: service3,
  },
  {
    title: "Manufacturing of HT / LT Distribution Panels",
    preview: ( <> At <b>CORE4 ENGINEERS Limited</b>, we specialize in the <b>Design, Engineering, and Manufacturing of High Tension (HT) i.e upto 33kV and Low Tension (LT) i.e. upto 1.1kV Electrical Distribution panels</b> that ensure safe, reliable, and efficient power distribution across industrial, commercial, and infrastructure projects. Our panels are built with precision, adhering to stringent quality standards and tailored to meet client-specific requirements.</>),
    description: (
      <>
        At <b>CORE4 ENGINEERS Limited</b>, we specialize in the <b>Design, Engineering, and Manufacturing of High Tension (HT) i.e upto 33kV and Low Tension (LT) i.e. upto 1.1kV Electrical Distribution panels</b> that ensure safe, reliable, and efficient power distribution across industrial, commercial, and infrastructure projects. Our panels are built with precision, adhering to stringent quality standards and tailored to meet client-specific requirements.
        <br /><br />
        <strong>Our Expertise :</strong><br />
        With a strong foundation in electrical engineering and system integration, our team delivers customized solutions for diverse power distribution needs. From concept design to factory testing and installation support, <b>CORE4 ENGINEERS Limited</b> provides end-to-end services that guarantee operational safety, durability, and compliance with international standards.       
         <br /><br />
        <strong>Our Product Range Includes:</strong>
        <br />
        <strong>➣ Compact / Packaged Sub – Stations (Up to 33kV):</strong>
        Design, Manufacture, Testing and Commissioning of Compact Sub-Stations (CSS) catered to needs of growing urbanization for capacity up to 2.5MVA. CSS will be included with HT/LT protection system along with LT distribution system connected with Power Quality improvement devices such as APFC, Metering units can also be integrated within CSS as per client’s need.
        <br />
        <strong>➣ HT Panels (Up to 33kV):</strong>
        Indoor and outdoor switchgear panels, VCB/ACB panels, and control panels designed for high-voltage applications, Motor control panels for Conveyor, Pumping and other applications, 
        <br />
        <strong>➣ LT Panels (Up to 1.1kV):</strong>
        Main LT panels, power control centers (PCC), Motor Control Centers (MCC), and distribution boards for various load centers.
        <br />
        <strong>➣ AMF & Synchronizing Panels:</strong>
        Automated panels designed for seamless generator operation, synchronization, and load sharing. Multiple DG installations and captive power generation units require Synchronizing panels with synchronising between Solar PV, DG and renewable sources. 
        <br />
        <strong>➣ Capacitor Panels & APFC Panels:</strong>
        Intelligent power factor (PF) correction panels to optimize energy efficiency and reduce utility costs. Power installations require improve PF corrections for savings power loss, equipment durability and improved operational efficiency. 
        <br />
        <strong>➣ Power Quality Restorer Panels:</strong>
        A power quality restorer (PQR) is a device that improves the reliability and quality of electricity by mitigating problems like voltage sags, swells, and harmonic distortions. It works by dynamically compensating for power issues, often using power electronics like IGBTs, to ensure stable voltage and power factor, protect sensitive equipment, and meet grid code requirements.
        <br />
        <strong>➣ Feeder Pillars & Metering Panels:</strong>
        Compact and weatherproof designs for outdoor electrical distribution and monitoring. IOT based metering panel can be installed for Group housing and Apartment buildings for efficient Energy Billing and Monitoring system. 
        <br />
        <strong>➣ PLC & Automation Panels:</strong>
        Control and automation solutions for industrial process management and smart power systems. Automation panels have wide range of applications from Pumping installations, DG synchronous panels, Control and Relay Panels, Battery storage systems..Etc
        <br /><br />
        <strong>Quality and Standards</strong><br />
        All panels are designed and manufactured in compliance with <b>IEC, IS, and relevant utility standards</b>, CPRI, BIS, ensuring electrical safety, robustness, and long operational life. Each panel undergoes rigorous testing procedures, including <b>routine, type, and functional tests</b>, prior to dispatch.<br /><br />
        <strong>Why Choose CORE4 ENGINEERS Limited?</strong><br />
        ➣ <b>Comprehensive in-house design and manufacturing capabilities.</b><br />
        ➣ <b>Customized industrial</b>, commercial and utility solutions.<br />
        ➣ Use of <b>premium components</b> from reputed manufacturers.<br />
        ➣ <b>Adherence to international safety and quality standards.</b><br />
        ➣ <b>Timely delivery</b> and dedicated <b>after-sales support</b>.<br /><br />
        At <b>CORE4 ENGINEERS Limited</b>, we are committed to powering progress through innovation,
        precision engineering, and uncompromising quality. Our HT and LT panels are not just
        products — they are reliable power solutions engineered to perform in demanding
        environments.
      </>
    ),
    img: service4,
  },
  {
    title: "Automation and SCADA Systems",
    preview: (<>At <b>CORE4 ENGINEERS Limited</b>, we design and implement advanced <b>Automation and SCADA
        (Supervisory Control and Data Acquisition) systems </b>that enhance the efficiency, reliability,
        and safety of industrial and infrastructure operations. Our automation solutions empower
        clients with real-time monitoring, intelligent control, and data-driven decision-making —
        ensuring optimized performance and reduced operational costs.</>),
    description: (
      <>
        At <b>CORE4 ENGINEERS Limited</b>, we design and implement advanced <b>Automation and SCADA
        (Supervisory Control and Data Acquisition) systems </b>that enhance the efficiency, reliability,
        and safety of industrial and infrastructure operations. Our automation solutions empower
        clients with real-time monitoring, intelligent control, and data-driven decision-making —
        ensuring optimized performance and reduced operational costs.
        <br /><br />
        <strong>Our Expertise</strong>
        <br />
        With a team of skilled automation engineers, control specialists, and software developers,
        we deliver <b>end-to-end system integration</b> — from concept design and hardware selection
        to programming, commissioning, and maintenance. We work across diverse sectors
        including <b>power, water and wastewater, manufacturing, transportation, and process
        industries.</b><br /><br />
        <strong>Our Automation &amp; SCADA Services Include:</strong>
        <br />
        <strong>➣ SCADA System Design &amp; Integration:</strong>
        Development and implementation of centralized monitoring and control systems for
        utility networks, substations, and industrial plants.
        <br />
        <strong>➣ PLC Programming &amp; Control Systems:</strong>
        Design and configuration of programmable logic controllers (PLC) for process
        automation, equipment control, and system interlocking.
        <br />
        <strong>➣ HMI &amp; Control Room Solutions:</strong>
        User-friendly Human Machine Interface (HMI) systems for intuitive operation, fault
        diagnosis, and performance visualization.
        <br />
        <strong>➣ RTU &amp; Remote Monitoring Systems:</strong>
        Integration of Remote Terminal Units (RTUs) for data acquisition and control across
        geographically distributed assets.
        <br />
        <strong>➣ Energy Management Systems (EMS):</strong>
        Smart automation for optimizing energy usage, monitoring consumption, and
        improving power efficiency.
        <br />
        <strong>➣ Instrumentation &amp; Sensor Integration:</strong>
        Complete instrumentation solutions with smart sensors, transmitters, and field
        devices for precise control and feedback.
        <br />
        <strong>➣ System Upgrades &amp; Retrofit Solutions:</strong>
        Modernization of existing automation and SCADA systems to improve performance,
        reliability, and cybersecurity.
        <br /><br />
        <strong>Why Choose CORE4 ENGINEERS Limited?</strong><br />
        ➣ Proven expertise in <b>industrial automation and control system design</b>.<br />
        ➣ Partnership with <b>leading PLC/SCADA technology providers</b> (Siemens, Schneider,
        ABB, Rockwell, etc.).<br />
        ➣ <b>Custom-engineered solutions</b> that ensure interoperability and scalability.<br />
        ➣ Focus on <b>cybersecurity, system reliability,</b> and <b>long-term service support</b>.<br />
        ➣ Dedicated engineering teams for <b>commissioning, training, and O&amp;M support</b>.<br /><br />

        At <b>CORE4 ENGINEERS Limited</b>, we believe automation is the key to a smarter, safer, and
        more sustainable future. Our customized <b>SCADA and automation solutions</b> help industries
        and utilities achieve higher productivity, improved efficiency, and full control over their
        operations.
      </>
    ),
    img: service5,
  },
  {
    title: "PMC (Project Management Consultancy)",
    preview: (<>At CORE4 Engineers Limited, our <b>Project Management Consultancy (PMC)</b> services ensure complete control, clarity, and confidence across every stage of a project—right from concept to commissioning. We deliver structured planning, precise monitoring, and seamless coordination to ensure projects are executed <b>on time, within budget, and with uncompromised quality.</b></>),
    description: (
      <>
        At CORE4 Engineers Limited, our <b>Project Management Consultancy (PMC)</b> services ensure complete control, clarity, and confidence across every stage of a project—right from concept to commissioning. We deliver structured planning, precise monitoring, and seamless coordination to ensure projects are executed <b>on time, within budget, and with uncompromised quality.</b>
        <br /><br />
        <strong>Our Expertise</strong>
        <br />
        At <b>CORE4 Engineers Limited</b>, we deliver multi-disciplinary engineering solutions with a strong focus on <b>quality, safety, technical precision, and timely execution</b>. Our expertise covers the complete project lifecycle—from planning and design to installation, testing, commissioning, and long-term support.<br /><br />
        <strong>Our PMC Services Include :</strong>
        <br />
        <strong>➣Project Planning & Scheduling:</strong><br />
         Preparation of detailed project timelines, resource allocation plans, and milestone charts using industry-standard project management tools. Critical Path analysis ensures seamless coordination among all stakeholders.
        <br />
        <strong>➣ DPR Preparation & Technical Documentation:</strong><br />
        Development of Detailed Project Reports (DPR) including feasibility analysis, BOQ preparation, cost estimation, layout drawings, and engineering documentation as per project requirements.
        <br />
        <strong>➣ Cost Estimation, Budgeting & Control:</strong><br />
        Accurate budget planning with continuous cost monitoring to prevent overruns. Includes vendor price evaluation, cost optimization, and financial progress tracking.
        <br />
        <strong>➣ Onsite Monitoring & Supervision:</strong>
        <br />
        Regular onsite inspections covering quality checks, material verification, work progress validation, and adherence to safety standards. Daily/weekly monitoring ensures timely project execution.        <br />
        <strong>➣ Vendor & Contractor Coordination:</strong>
        <br />
        End-to-end coordination with suppliers, contractors, clients, and consultants for smooth execution. Includes material approvals, design clarifications, and interface management.
        <br />
        <strong>➣ MIS Reporting & Progress Tracking:</strong>
        <br />
        Preparation of structured MIS reports with photographs, progress charts, bar schedules, inspection logs, and work status updates for client review.
        <br />
        <strong>➣ Quality & Safety Assurance:</strong>
        <br />
        Implementation of QA/QC procedures, safety guidelines, method statements, and site checklists to ensure compliance with standards and reduce operational risk.
        <br />
         <strong>➣  Testing, Commissioning & Handover Support:</strong>
        <br />
        Coordination of final testing activities, documentation of as-built drawings, and preparation of handover reports for seamless project completion and client acceptance.        <br /><br />
        <br />

        <strong>Why Choose CORE4 ENGINEERS Limited?</strong><br />
        ➣ End-to-end <b>Project Management Expertise</b> covering <b>planning, engineering coordination, vendor management, execution monitoring, and final commissioning</b>.<br />
        ➣ <b>Systematic project tracking methods</b> using project schedules, DPR/MIS reporting, risk assessment, and milestone-based progress monitoring.<br />
        ➣ Strong technical background in <b>electrical, civil, mechanical, and utility-based project supervision</b> to ensure complete compliance and quality.<br />
        ➣ <b>Transparent coordination</b> with contractors, OEMs, and clients, ensuring <b>smooth communication</b> and <b>timely closure of activities</b>.<br />
        ➣ Strict <b>adherence to safety standards,</b> QA/QC procedures, statutory norms, and <b>industry best practices</b>.<br />
        ➣ <b>Cost and time optimization approach</b>, reducing delays and avoiding rework through proactive planning and technical review.<br />
        ➣ <b>Dedicated on-site and off-site PMC teams</b> for <b>supervision, design vetting, documentation, and handover support</b>.<br /> <br />

         At <b>CORE4 ENGINEERS Limited</b>, our PMC services ensure your project is executed with precision, quality, and complete transparency—delivering the results you expect, within the timelines you commit.
      </>
    ),
    img: service6,
  },
];

const ServicePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function openModal(service) {
    setSelected(service);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    setSelected(null);
    document.body.style.overflow = "";
  }

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl sm:text-5xl font-bold">Services</h1>
          <p className="text-gray-700 mt-2">Home &gt;&gt; Services</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
        <div className="space-y-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items:center gap-6 bg-white p-6 rounded-2xl shadow-lg w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
            >
              {/* Service Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[300px] object-cover rounded-xl shadow-md"
                />
              </div>

              {/* Service Text */}
              <div className="w-full md:w-1/2 text-center">
                <h3 className="text-xl font-bold text-blue-600">{service.title}</h3>
                <p className="text-gray-600 mt-2 leading-relaxed text-justify">
                  {service.preview}
                </p>

                {/* Read more button (opens modal) */}
                <div className="mt-4 flex justify-center md:justify-start">
                  <button
                    onClick={() => openModal(service)}
                    className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: centered with top 10% / bottom 10% / left 20% / right 20% and scrollable */}
      {modalOpen && selected && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal container */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{
              position: "fixed",
              top: "7vh",
              bottom: "7vh",
              left: "17vw",
              right: "17vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-3 right-3 z-50 rounded-full p-2 transition close-btn"
              style={{
                background: "transparent",
              }}
            >
              <span className="text-gray-600 text-2xl close-icon">X</span>
            </button>

            <style>{`
              .close-btn:hover {
                background: #dc2626;
              }
              .close-btn:hover .close-icon {
                color: white;
              }
              button[aria-label="Close"]:hover {
                background: #dc2626;
              }
              button[aria-label="Close"]:hover span {
                color: white;
              }
            `}</style>

            {/* Image first */}
            <div className="w-full h-48 sm:h-56 bg-gray-200 flex-shrink-0">
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Scrollable content area */}
            <div
              className="p-6 overflow-y-auto"
              style={{
                height: "calc(100% - 10rem)",
              }}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-3xl font-bold">{selected.title}</h3>
              </div>
              <div className="text-lg mt-4 text-gray-700 leading-relaxed text-justify whitespace-pre-line space-y-3">
                {selected.description}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicePage;

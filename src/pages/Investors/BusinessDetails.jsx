import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BusinessDetails() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ===== Header ===== */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4">
            Details Of Business
          </h1>
          <div className="flex items-center space-x-2 text-3xl sm:text-2xl">
            <span>Home</span>
            <span>»</span>
            <span>Details Of Business</span>
          </div>
        </div>
      </div>
      <h2 className="text-2xl sm:text-5xl font-semibold text-gray-800 mt-10 mb-8 text-center">
        Business Verticals
      </h2>

      {/* ===== Content ===== */}
  <div className="container mx-auto px-6 sm:px-10 py-12">
  <div className="max-w-5xl mx-auto text-gray-800 space-y-6">

    <h2 className="text-2xl font-semibold">
      <b>1. Railway Electrification & Infrastructure</b>
    </h2>
    <h3 className="text-xl font-medium text-gray-600 mt-1 mb-3">
      <b>A.  Railway Electrification (RE)</b>
    </h3>
    <p className="text-lg leading-relaxed text-justify">
      The Company undertakes RE and allied infrastructure works represent one of the Company’s principal business segments. The Company undertakes EPCC projects involving the design, supply, erection, testing and commissioning of <b>25 kV AC Overhead Electrification (OHE) systems, Traction Sub-stations (TSS), and Sectioning and Paralleling Posts (SP/SSP).</b><br />
      The Company’s scope also includes associated civil works such as foundations, trenches, control room buildings, and ancillary structures, as well as signalling and telecommunication interface works.<br />
      Core4 Engineers Limited executes projects for zonal railways, public sector undertakings, and large infrastructure contractors, contributing to Indian Railways’ target of 100% network electrification. The Company’s technical proficiency and adherence to RDSO standards enable efficient, safe, and reliable electrification execution.<br />
    </p>
    <h3 className="text-xl font-medium text-gray-600 mt-1 mb-3">
      <b>B.  Railway Infrastructure Works</b>
    </h3>
    <p className="text-lg leading-relaxed text-justify">
      The Company undertakes civil, electrical, and mechanical works as part of the <b>Railway Station Redevelopment with allied works</b> and modernization programs initiated by Indian Railways under the <i>Amrit Bharat Station Scheme</i> and other national initiatives.<br />
      CORE4 ENGINEERS LIMITED’s services in this domain cover structural rehabilitation, construction of passenger amenities, illumination systems, internal and external electrification, Foot over bridges, Water supply and drainage systems, and integration of automation for energy management.<br />
      Through these works, the Company contributes to the modernization of passenger interface infrastructure and enhancement of service standards across the Indian Railways network.<br />
    </p>

    <h2 className="text-2xl font-semibold">
      <b>2. EHT Transmission & Distribution Systems</b>
    </h2>
    <p className="text-lg leading-relaxed text-justify">
      The Company undertakes turnkey projects in <b>Extra High Tension (EHT) Transmission and Distribution Systems</b>, covering voltage levels up to 220 kV. Its scope includes sub-station construction, installation of Power transformers, Switchgear, Control and Relay panels, busbar systems, and distribution networks.<br /><br />
      CORE4 ENGINEERS LIMITED also executes transmission line projects, including foundation works, tower erection, conductor stringing, and OPGW integration. The Company’s work in this vertical supports utilities, public sector undertakings, and industrial clients in strengthening grid reliability and power distribution efficiency.<br /><br />
      Its participation aligns with national programs such as the <i>Revamped Distribution Sector Scheme (RDSS)</i> and <i>Green Energy Corridors</i>, emphasizing grid modernization and renewable integration.<br />
    </p>

    <h2 className="text-2xl font-semibold">
      <b>3. Water and Wastewater Treatment EPCC</b>
    </h2>
    <p className="text-lg leading-relaxed text-justify ">
      CORE4 ENGINEERS LIMITED provides turnkey EPCC solutions for <b>Water Treatment Plants (WTP), Sewage Treatment Plants (STP), and Effluent Treatment Plants (ETP)</b>, along with associated civil, mechanical, and electrical works.<br /><br />
      Its capabilities cover intake wells, pumping stations, rising mains, pipelines, and process automation systems. The Company executes projects based on technologies such as SBR, MBBR, ASP, and MBR, ensuring compliance with CPCB and SPCB norms.<br /><br />
      These works align with government programs like <i>Jal Jeevan Mission, AMRUT,</i> and <i>Namami Gange</i>, supporting national goals of water conservation, reuse, and sustainable urban development.<br />
    </p>

    <h2 className="text-2xl font-semibold">
      <b>4. Automation & SCADA Systems</b>
    </h2>
    <p className="text-lg leading-relaxed text-justify ">
      Automation and SCADA solutions form an integral part of the Company’s service offerings. The Company designs and implements PLC-based automation systems, RTU and HMI integration, instrumentation, control panels, and communication networks for remote monitoring and control of infrastructure assets.<br /><br />
      Core4 Engineers Limited’s automation services are applied across its core business sectors—railway electrification, water systems, and power distribution—enhancing system reliability, efficiency, and operational safety.<br />
    </p>

    <h2 className="text-2xl font-semibold">
      <b>5. Manufacturing of HT / LT Panels</b>
    </h2>
    <p className="text-lg leading-relaxed text-justify ">
      The Company manufactures a range of <b>High Tension (HT) and Low Tension (LT)</b> distribution and control panels, including VCB panels, PCC, MCC, APFC, synchronization panels, and PLC-based automation panels.<br /><br />
      These panels are designed and fabricated in accordance with IS/IEC standards, ensuring operational safety and quality. The in-house manufacturing capability supports vertical integration across projects, enabling cost control, quality assurance, and timely delivery.<br /><br />
      This division also contributes to external sales by supplying panels to third-party clients in the industrial and infrastructure sectors.
    </p>

    <h2 className="text-2xl font-semibold">
      <b>Execution Capabilities</b>
    </h2>
    <p className="text-lg leading-relaxed text-justify ">
      The Company’s execution capabilities encompass: <br />     
      <b>● In-house Engineering Design:</b> Preparation of detailed drawings, electrical layouts, and system designs.<br />
      <b>● Procurement and Vendor Management:</b> Established relationships with reputed OEMs and material suppliers.<br />
      <b>● Project Management:</b> Use of structured project planning tools and progress monitoring systems for on-time completion.<br />
      <b>● Quality and Safety Assurance:</b> Adherence to ISO standards and rigorous inspection protocols across all stages.<br />
      <b>● Skilled Workforce:</b> Team of qualified engineers, supervisors, and trained technicians with domain-specific expertise.<br />
    </p>

    <h2 className="text-2xl font-semibold">
      <b>Clients and Projects</b>
    </h2>
    <p className="text-lg leading-relaxed text-justify ">
      The Company executes projects for <b>Indian Railways, Public Sector Undertakings (PSUs), State Electricity Utilities, and private sector developers</b>. Its consistent performance and adherence to quality and safety standards have enabled repeat business and long-term relationships across multiple sectors.
    </p>

    <h2 className="text-2xl font-semibold">
      <b>Competitive Strengths</b>
    </h2>
    <p className="text-lg leading-relaxed text-justify ">   
      <b>● Integrated EPCC Capabilities:</b> End-to-end execution from design to commissioning across multiple infrastructure domains.<br />
      <b>● Sectoral Diversification:</b> Balanced portfolio in railway, power, water, and automation sectors reducing dependence on a single segment.<br />
      <b>● In-house Manufacturing and Design Facility:</b> Enhances quality, customization, and cost efficiency.<br />
      <b>● Experienced Management Team:</b> Leadership with extensive experience in large-scale infrastructure project execution.<br />
      <b>● Strong Client Relationships:</b> Established presence across Government and PSU projects.<br />
      <b>● Focus on Quality, Safety and Compliance:</b> Robust internal systems ensuring adherence to standards and timely project completion.<br />
    </p>

    <h2 className="text-2xl font-semibold">
      <b>Conclusion</b>
    </h2>
    <p className="text-lg leading-relaxed text-justify ">   
      With its diversified portfolio, technical expertise, and integrated execution capability, <b>CORE4 ENGINEERS LIMITED</b> is positioned as a growing player in India’s infrastructure development ecosystem. The Company’s focus on operational efficiency, safety, and sustainability supports its vision of delivering reliable engineering solutions contributing to the modernization of India’s power and transport infrastructure.
    </p>

  </div>
</div>


    </div>
  );
}

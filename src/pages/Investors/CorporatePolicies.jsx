import { useEffect } from "react";
import { ChevronRight, Download } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const reportDocuments = [
  {
    title: "Familiarization Programme of Independent Directors",
    filePath: "/pdf/corporate-policies/1.Familiarization-Programme-of-ID.pdf",
  },
  {
    title: "Nomination and Remuneration Policy",
    filePath: "/pdf/corporate-policies/2.Nomination-and-Remuneration-Policy.pdf",
  },
  {
    title: "Wistle Blower and Vigil Mechanism Policy",
    filePath: "/pdf/corporate-policies/3.Vigil-Mechanism-&-Whistler-Blower-Policy.pdf",
  },
  {
    title: "Code of Conduct for Board Members and Senior Management Personnel",
    filePath: "/pdf/corporate-policies/4.Code-of-Conduct_for-BoD-and-SMP.pdf",
  },
  {
    title: "Criteria/Policy of making Payments to Non-Executive Directors",
    filePath: "/pdf/corporate-policies/5.Criteria-or-Policy-for-making-payments-to-NED_.pdf",
  },
  {
    title: "Policy For The Procedure Of Inquiry In Case Of Leak Of Unpublished Price Sensitive Information",
    filePath: "/pdf/corporate-policies/6.Policy-on-Procedure-of-Inquiry-in-case-of-Leak-of-UPSI.pdf",
  },
  {
    title: "Code of Conduct for prevention of Insider Trading",
    filePath: "/pdf/corporate-policies/7.Code-of-Conduct-for-prevention-of-Insider-Trading.pdf",
  },
  {
    title: "Policy for disclosure of material events or information and Disclosure and Determination Of Materiality Of Events Or Information",
    filePath: "/pdf/corporate-policies/8.Policy-for-disclosure-of-material-events-and-information.pdf",
  },
  {
    title: "Policy on preservation and Archival of Documents",
    filePath: "/pdf/corporate-policies/9.Policy-on-preservation-and-Archival-documents.pdf",
  },
  {
    title: "Policy on prevention of Sexual Harassment at workplace(POSH)",
    filePath: "/pdf/corporate-policies/10.Policy-on-prevention-of-Sexual-Harrasement-at-workplace-(POSH).pdf",
  },
  {
    title: "Dividend Distribution Policy",
    filePath: "/pdf/corporate-policies/11.Dividend-Policy.pdf",
  },
  {
    title: "Terms & Conditions Of Appointment Of Independent Directors",
    filePath: "/pdf/corporate-policies/12.Terms-&-conditions-of-Appointment-of-Independent-Directors.pdf",
  },
  {
    title: "Policy On Corporate Social Responsibility (CSR)",
    filePath: "/pdf/corporate-policies/13.POLICY-ON-CSR.pdf",
  },
  {
    title: "Procedures For Fair Disclosure of Unpublished Price Sensitive Information",
    filePath: "/pdf/corporate-policies/14.Policy-on-Fair-Disclosure.pdf",
  },
  {
    title: "Policy On Materiality Of Dealing With Related Party Transactions",
    filePath: "/pdf/corporate-policies/15.Materiality-of-and-Dealing-with-RPT.pdf",
  },
  {
    title: "Policy on identification of group companies, Material creditors & Material Letigations",
    filePath: "/pdf/corporate-policies/16.Policy-on-identification-of-group-companies,-Material-creditors,-Material.pdf",
  },
];

export default function CorporatePolicies() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-6 sm:px-10">
          <h1 className="text-2xl sm:text-5xl font-bold mb-4">
            Corporate Policies
          </h1>
          <div className="flex items-center space-x-2 text-3xl sm:text-2xl">
            <span>Home</span>
            <span>»</span>
            <span>Corporate Policies</span>
          </div>
        </div>
      </div>

      {/* Reports List */}
      <div className="container mx-auto px-6 sm:px-10 py-8">
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-8">
          Corporate Policies
        </h2>
        <div className="flex flex-col items-start space-y-4">
          {reportDocuments.map((doc, index) => (
            <a
              key={index}
              href={doc.filePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              <ChevronRight size={16} className="mr-2" />
              <span className="flex-1 text-xl sm:text-xl">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import yipl from "../../public/images/companylogo/yipl-logo.svg";
import codingmountain from "../../public/images/companylogo/codingmountain-logo.svg";
// import Helpatas from "../../public/images/companylogo/helvetas-logo.png";
interface Company {
  name: string;
  logo: any;
}

const companies: Company[] = [
  {
    name: "younginnovation",
    logo: yipl,
  },
  {
    name: "codingmountain",
    logo: codingmountain,
  },
  // {
  //   name: "helpatas",
  //   // logo: Helpatas,
  // },
];

const CompanyMarquee: React.FC = () => {
  // We double the array to ensure the loop is seamless
  const displayLogos = [...companies, ...companies,...companies];

  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Companies We've Worked With
        </h2>
      </div>

      {/* Container for the animation */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {displayLogos.map((company, index) => (
            <div
              key={index}
              className="mx-8 flex items-center justify-center w-40 h-20"
            >
              <img
                // src={company.logo}
                src={
                  typeof company.logo === "string"
                    ? company.logo
                    : company.logo.src || company.logo
                }
                alt={`${company.name} logo`}
                className="max-w-full max-h-full grayscale hover:grayscale-0 transition-all duration-300 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyMarquee;

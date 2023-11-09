import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Surender Chawla
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#8892b0]">
          I'm a Director in IT Technologies with expertise in Microsoft Dynamics
          and Application Support at Pride Technologies..
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[900px]">
          With sixteen years of diverse experience spanning industries such as
          Manufacturing, SCM Insurance, Trading, Property, Casualty (P&C),
          Constructions, Consumer market, and Service sectors, I have excelled
          in roles ranging from Program Manager to Solution Architect and
          Business System Analyst. My educational background includes a
          Bachelor's degree in Account & Commerce, a Master's degree in Computer
          Science, and certifications in Scrum and Microsoft Dynamics AX, among
          others. I possess extensive expertise in ERP products, including
          Microsoft Dynamics AX, Great Plain, NAV, and CRM/D365 Sales, as well
          as proficiency in various technologies such as Azure cloud,
          SharePoint, SQL Server, Power BI, and R.P.A. My track record includes
          global financial system migrations, module implementations, financial
          data analytics, and consistent support for re-engineering and BAU
          projects, demonstrating a holistic approach to IT solutions and
          management.
        </p>
        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className=" w-[170px] cursor-pointer text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4 " />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

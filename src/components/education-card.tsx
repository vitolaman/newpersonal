import React from "react";

interface EducationCardProps {
  company: string;
  role: string;
  date: string;
  tag?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  company,
  role,
  date,
  tag = "Freelance",
}) => {
  return (
    <div className="bg-white rounded-lg pb-4 pt-8 pl-4 md:pr-24 mr-4 my-2 hover:scale-105 group transition-all duration-150 relative w-full md:w-[48%]">
      <div
        className={`absolute flex items-center gap-1 top-3 right-3 bg-amber-500/25 text-amber-500 px-2 py-1 rounded-full text-[10px]`}
      >
        <div className={`bg-amber-500 rounded-full w-1.5 h-1.5`} />
        {tag}
      </div>

      <h1 className="text-2xl font-semibold">{company}</h1>
      <div className="my-2">
        <p>{role}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default EducationCard;

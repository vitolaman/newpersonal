import React from "react";

interface ExperienceCardProps {
  company: string;
  role: string;
  date: string;
  tag?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  date,
  tag = "Freelance",
}) => {
  return (
    <div className="bg-white rounded-lg py-4 pl-4 md:pr-24 mr-4 my-2 hover:scale-105 group transition-all duration-150 relative w-full md:w-[31%]">
      <div
        className={`absolute flex items-center gap-1 top-3 right-3 bg-pink-700/25 text-pink-700 px-2 py-1 rounded-full text-[10px]`}
      >
        <div className={`bg-pink-700 rounded-full w-1.5 h-1.5`} />
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

export default ExperienceCard;

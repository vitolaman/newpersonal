"use client";
import CardNav from "@/components/Nav";
import SplitText from "@/components/SplitText";
import PixelBlast from "../components/hero-section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiDocker,
  SiFlutter,
  SiGo,
  SiGooglecloud,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPortainer,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import LogoLoop from "@/components/LogoLoop";
import PixelCard from "@/components/project-card";
import GradualBlur from "@/components/GradualBlur";
import ExperienceCard from "@/components/experience-card";
import FadeContent from "@/components/FadeContent";
import EducationCard from "@/components/education-card";

export default function Home() {
  const items = [
    {
      label: "About",
      bgColor: "#87CEEB",
      textColor: "#fff",
      links: [
        {
          href: "/",
          label: "Company",
          ariaLabel: "About Company",
        },
        { href: "/", label: "Careers", ariaLabel: "About Careers" },
      ],
    },
    {
      label: "Projects",
      bgColor: "#8AB849",
      textColor: "#fff",
      links: [
        { href: "/", label: "Case Studies", ariaLabel: "Project Case Studies" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#FA824C",
      textColor: "#fff",
      links: [
        {
          href: "mailto:vito99varianlaman@gmail.com",
          label: "Email",
          ariaLabel: "Email us",
        },
        {
          href: "https://x.com/wh1te_l0tuszz",
          label: "Twitter",
          ariaLabel: "Twitter",
        },
        {
          href: "https://www.linkedin.com/in/vitolaman/",
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
        },
      ],
    },
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev/" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiNestjs />, title: "Nest Js", href: "https://nestjs.com" },
    { node: <SiNodedotjs />, title: "Node Js", href: "https://nodejs.org" },
    { node: <SiGo />, title: "Go", href: "https://go.dev" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    {
      node: <SiPortainer />,
      title: "Portainer",
      href: "https://www.portainer.io",
    },
    { node: <SiGooglecloud />, title: "GCP", href: "https://cloud.google.com" },
  ];

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="relative h-screen font-mono bg-[#f7f7f2]">
      <div className="fixed top-0 py-4 w-full h-24 flex justify-center z-50">
        <CardNav
          logoAlt="Vito"
          items={items}
          baseColor="#000"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out" logo={""} />
      </div>
      <section className="min-h-screen w-[99vw] flex items-center justify-center bg-[#f7f7f2]">
        <div className="fixed inset-0 h-full overflow-hidden bg-[#000080]">
          <PixelBlast
            variant="square"
            pixelSize={6}
            color="#6464FF"
            patternScale={6}
            patternDensity={1}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.1}
            rippleThickness={0.4}
            rippleIntensityScale={1.5}
            speed={0.6}
            edgeFade={0}
            transparent
          />
        </div>
        <div className="z-40 flex-col justify-center items-center text-center font-sans">
          <SplitText
            text="Vito"
            className="text-7xl md:text-9xl text-[#F9FBF2] font-bold mb-4"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          // onLetterAnimationComplete={handleAnimationComplete}
          />
          <br />
          <SplitText
            text="Laman"
            className="text-7xl md:text-9xl text-[#F9FBF2] font-bold mb-4"
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <div
            className="w-full mx-auto flex justify-center my-8"
            data-aos="fade-up"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="none"
            >
              <path
                d="M 22.75 48 C 20.903 37.41 10.483 27.457 0 25.25 L 0 22.625 C 10.549 20.105 20.686 10.941 22.75 0 L 25.375 0 C 27.169 10.66 37.542 20.343 48 22.625 L 48 25.25 C 37.735 27.377 27.106 37.364 25.375 48 Z"
                fill="#fff069"
              ></path>
            </svg>
          </div>

          <SplitText
            text="I'm a senior Fullstack Developer"
            className="text-lg md:text-2xl text-[#F9FBF2]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <br />
          <SplitText
            text="Passionately creating
            digital experiences"
            className="text-lg md:text-2xl text-[#F9FBF2]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <div
            onClick={() => {
              window.scrollBy({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            className="animate-bounce mt-8 cursor-pointer bg-white rounded-full w-12 h-12 flex justify-center items-center self-center mx-auto"
          >
            ↓
          </div>
        </div>
      </section>
      <div className="z-40 flex gap-16 justify-center items-start w-full font-sans">
        <div className="backdrop-blur-sm flex-col items-start bg-[#f7f7f2] rounded-t-4xl p-4 md:p-16 w-screen md:w-full">
          <div className="relative">
            <div className="absolute top-[60%] w-36 md:w-56 -left-1 h-8 bg-amber-300"></div>
            <div className="absolute top-[40%] left-[50%] md:left-[22%] rounded-full w-12 h-8 bg-green-300"></div>
            <SplitText
              text="About Me"
              className="text-5xl md:text-7xl mt-16 mb-8 font-mono"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          <FadeContent
            className="w-full"
            blur={true}
            duration={800}
            easing="ease-out"
            initialOpacity={0}
          >
            <p className="text-left">
              Hi, I’m Vito. I build websites and apps for companies, working on
              both frontend and backend. While I can do both, I’m more into
              backend stuff, it’s where the fun happens for me. I also make
              mobile apps and work as an app developer right now. Lately, I’ve
              been diving into crypto and Web3, learning how to build cool
              things in that space. I started coding back in junior high by
              messing around with the layout of my blogspot site. That got me
              hooked on web development, and I’ve been building things ever
              since.
            </p>
          </FadeContent>

          <div className="relative">
            <div className="absolute top-[45%] left-[40%] md:left-[42%] w-8 h-8 bg-blue-300"></div>
            <div className="absolute top-[45%] left-[50%] md:left-[45%] w-8 h-8 bg-blue-300"></div>
            <SplitText
              text="Work Experience"
              className="text-5xl md:text-7xl mb-8 font-mono mt-24"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          <FadeContent
            blur={true}
            duration={800}
            easing="ease-out"
            initialOpacity={0}
          >
            <div className="flex flex-wrap gap-2 justify-between">
              <ExperienceCard
                company="IFG LIFE"
                role="Mobile Developer"
                date="September 2022 - February 2023"
                tag="Contract"
              />
              <ExperienceCard
                company="Jesselton Capital"
                role="Fullstack Developer"
                date="May 2023 - September 2023"
                tag="Contract"
              />
              <ExperienceCard
                company="Dataxet:Sonar"
                role="Backend Developer"
                date="October 2023 - February 2024"
                tag="Freelance"
              />
              <ExperienceCard
                company="Seeds Finance"
                role="Mobile Developer"
                date="March 2024 - August 2025"
                tag="Fulltime"
              />
              <ExperienceCard
                company="Mepo Indonesia"
                role="Fullstack Developer"
                date="May 2024 - December 2025"
                tag="Fulltime"
              />
              <ExperienceCard
                company="Sinergi Teknologi Cerdas"
                role="Fullstack Developer Lead"
                date="November 2025 - Present"
                tag="Fulltime"
              />
            </div>
          </FadeContent>
          <div className="relative">
            <div className="absolute top-[40%] w-12 md:w-12 -left-3 h-12 rounded-full bg-violet-300"></div>
            <SplitText
              text="Education"
              className="text-5xl md:text-7xl mb-8 font-mono mt-24"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-between">
            <EducationCard
              company="Petra Christian University"
              role="Computer Science"
              date="2018 - 2024"
              tag="University"
            />
            <EducationCard
              company="Petra Vocational Highschool"
              role="Computer and Networks Engineering"
              date="2015-2018"
              tag="Highschool"
            />
          </div>
          <div className="flex flex-col">
            <SplitText
              text="Projects"
              className="text-5xl md:text-7xl mb-8 font-mono mt-24"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
            <div className="flex justify-between w-full flex-wrap gap-y-16">
              <PixelCard
                shape="diamond"
                title="Picardata"
                desc="Developed a centralized data analytics platform that enables users to analyze and visualize data from multiple sources. The system provides a comprehensive suite of tools for data management, analysis, and reporting, ensuring data integrity."
                link="https://picardata.com/"
              />
              <PixelCard
                shape="heart"
                title="IKANHI"
                desc="Built a campus alumni networking platform that enables users to connect with each other, share their knowledge and experiences, and stay updated on campus news and events."
                link="https://ikanhi.org/"
              />
              <PixelCard
                shape="circle"
                title="IHGMA"
                desc="Developed a custom e-commerce platform and member portal for the Indonesian Hotel General Managers Association. The solution enables members to access exclusive resources, manage their accounts, and participate in community activities, while also supporting online transactions."
                link="https://ihgma.org/"
              />
              <PixelCard
                shape="star"
                title="CGM11"
                desc="Developed a Web3-powered donation platform that enables users to launch and manage campaigns funded through trading fees. The system creates a sustainable model where every trade contributes to active causes, ensuring continuous support while providing transparency and accountability through blockchain technology."
                link="https://www.cgm11.com/"
              />
            </div>
          </div>

          <SplitText
            text="Tech Stack"
            className="text-5xl md:text-7xl mb-8 font-mono mt-24"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
          <div
            className="mt-16"
            style={{
              height: "100px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#f7f7f2"
              ariaLabel="Technology partners"
            />
          </div>
          {/* 
          <div className="my-24 rounded-3xl p-16 bg-[#000080] w-full text-white">
            <SplitText
              text="Build With Me"
              className="text-5xl md:text-7xl mb-8 mt-24"
              delay={80}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div> */}
        </div>
      </div>
      <section className="relative z-20 bg-[#f7f7f2] overflow-hidden p-8 md:px-16 flex-col"></section>
      <div className="fixed bottom-0 h-24 w-screen z-50">
        <GradualBlur
          target="parent"
          position="bottom"
          height="6rem"
          strength={1}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
      </div>
    </div>
  );
}

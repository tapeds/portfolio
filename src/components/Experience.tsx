import ExperienceCard from "@/components/ExperienceCard";
import ExperienceCard1 from "./ExperienceCard1";

export default function Experience() {
  return (
    <div
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly px-10
    text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-[#D4D4D4]">
        Experience
      </h3>
      <div
        className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10 h-5/6 mt-20
      scrollbar-thin scrollbar-track-[#212121] scrollbar-thumb-gray-300 scroll-smooth"
      >
        <ExperienceCard />
        <ExperienceCard1 />
      </div>
    </div>
  );
}

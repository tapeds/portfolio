import NextImage from "@/components/NextImage";

export default function ExperienceCard() {
  return (
    <div
      className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col justify-center items-center space-y-7 overflow-hidden
    rounded-lg bg-slate-400/10 p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]"
    >
      <NextImage
        src="/images/logosch.png"
        alt="logosch"
        width={569}
        height={496}
        className="flex h-32 w-32 items-center rounded-full object-cover object-center xl:h-[100px] xl:w-[100px]"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Frontend Developer Staff</h4>
        <p className="mt-1 text-xl font-bold">Schematics ITS</p>
        <div className="my-2 flex space-x-2">
          <NextImage
            src="/images/react.png"
            alt="react"
            width={500}
            height={500}
            className="h-8 w-8 rounded-full"
          />
          <NextImage
            src="/images/ts.png"
            alt="ts"
            width={512}
            height={512}
            className="h-8 w-8 rounded-full"
          />
          <NextImage
            src="/images/tailwind.png"
            alt="tailwind"
            width={512}
            height={512}
            className="h-8 w-8 rounded-full"
          />
          <NextImage
            src="/images/next.png"
            alt="nex"
            width={512}
            height={512}
            className="h-8 w-8 rounded-full"
          />
          <NextImage
            src="/images/github.png"
            alt="github"
            width={512}
            height={512}
            className="h-8 w-8 rounded-full"
          />
          <NextImage
            src="/images/git.png"
            alt="git"
            width={512}
            height={512}
            className="h-8 w-8 rounded-full"
          />
        </div>
        <p className="py-3 uppercase text-[#D4D4D4]">Feb 2023 - Present</p>
      </div>
    </div>
  );
}

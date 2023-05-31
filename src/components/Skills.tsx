import NextImage from "./NextImage";

export default function Skills() {
  return (
    <div
      className="relative mx-auto flex min-h-screen max-w-[2000px] flex-col items-center justify-center text-center
    md:text-left xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-[#D4D4D4]">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/html.png"
            alt="html"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/css.png"
            alt="css"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/js.png"
            alt="js"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/react.png"
            alt="react"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/ts.png"
            alt="ts"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/tailwind.png"
            alt="tailwind"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/git.png"
            alt="git"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/github.png"
            alt="github"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/next.png"
            alt="next"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
        <div className="group relative flex cursor-pointer">
          <NextImage
            src="/images/cpp.png"
            alt="cpp"
            width={500}
            height={500}
            className="h-24 w-24 opacity-60 hover:opacity-100 xl:h-28 xl:w-28"
          />
        </div>
      </div>
    </div>
  );
}

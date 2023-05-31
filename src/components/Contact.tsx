import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:frrllmatthew@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message}
    (${formData.email})`;
  };
  return (
    <div
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center
    justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-[#D4D4D4]">
        contact
      </h3>
      <div className="flex flex-col space-y-5 mt-20">
        <div className="space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#0066CC]" />
            <p className="text-2xl">08111344309</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#0066CC]" />
            <p className="text-2xl">frrllmatthew@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="rounded-sm border-b border-[#242424] bg-slate-400/10 px-6 py-4
            text-[#D4D4D4] placeholder-gray-500 outline-none transition-all hover:border-[#0066CC]/40
            focus:border-[#0066CC]/40 focus:text-[#D4D4D4]"
              placeholder="Name"
            />
            <input
              {...register("email")}
              type="text"
              className="rounded-sm border-b border-[#242424] bg-slate-400/10 px-6 py-4
            text-[#D4D4D4] placeholder-gray-500 outline-none transition-all hover:border-[#0066CC]/40
            focus:border-[#0066CC]/40 focus:text-[#D4D4D4]"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            className="rounded-sm border-b border-[#242424] bg-slate-400/10 px-6 py-4
          text-[#D4D4D4] placeholder-gray-500 outline-none transition-all hover:border-[#0066CC]/40
          focus:border-[#0066CC]/40 focus:text-[#D4D4D4]"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="rounded-sm border-b border-[#242424] bg-slate-400/10 px-6 py-4
          text-[#D4D4D4] placeholder-gray-500 outline-none transition-all hover:border-[#0066CC]/40
          focus:border-[#0066CC]/40 focus:text-[#D4D4D4]"
            placeholder="Message"
          />
          <button className="rounded-md bg-[#0066CC] px-10 py-5 text-lg font-bold text-black">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div
      className='relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10
    text-center md:flex-row md:text-left'
    >
      <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-[#D4D4D4]'>
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src='/images/foto2.png'
        className='-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg
        xl:h-[500px] xl:w-[400px]'
      />
      <div className='w-[60%] space-y-0 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold'>
          I am a second semester computer science student at Institut Teknologi
          Sepuluh Nopember with an interest in web development.
        </h4>
      </div>
    </div>
  );
}
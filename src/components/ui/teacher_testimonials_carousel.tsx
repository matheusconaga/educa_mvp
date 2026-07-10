import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useInView } from "framer-motion";

import {
  teacherTestimonials,
  type TeacherTestimonial,
} from "@/data/teacher_testimonials";

import { TeacherTestimonialCard } from "./teacher_testimonial_card";

export function TeacherTestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    amount: 0.45,
  });

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % teacherTestimonials.length);
  };

  const previous = () => {
    setDirection(-1);
    setCurrent((prev) =>
      prev === 0 ? teacherTestimonials.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    if (!inView || paused) return;

    const interval = setInterval(next, 6000);

    return () => clearInterval(interval);
  }, [inView, paused]);

  const teacher: TeacherTestimonial = teacherTestimonials[current];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),

    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div
    ref={ref}
      className="relative mx-auto w-full max-w-[520px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="min-h-[430px] sm:min-h-[500px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={teacher.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TeacherTestimonialCard {...teacher} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Botões Desktop */}
      <button
        onClick={previous}
        className="
          absolute
          left-[-28px]
          top-1/2
          hidden
          -translate-y-1/2

          h-12
          w-12

          items-center
          justify-center

          rounded-full
          border
          border-border
          bg-background
          shadow-lg

          transition-all
          duration-300

          hover:scale-110
          hover:cursor-pointer
          hover:bg-primary
          hover:text-white

          lg:flex
        "
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={next}
        className="
          absolute
          right-[-28px]
          top-1/2
          hidden
          -translate-y-1/2

          h-12
          w-12

          items-center
          justify-center

          rounded-full
          border
          border-border
          bg-background
          shadow-lg

          transition-all
          duration-300

          hover:scale-110
          hover:cursor-pointer
          hover:bg-primary
          hover:text-white

          lg:flex
        "
      >
        <ChevronRight size={22} />
      </button>

      {/* Indicadores */}
      <div className="pt-6 flex justify-center gap-3">
        {teacherTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`
              h-3
              rounded-full
              transition-all
              duration-300
              ${
                current === index
                  ? "w-6 bg-primary"
                  : "w-3 bg-border hover:bg-primary/40"
              }
            `}
          />
        ))}
      </div>

      {/* Botões Mobile / Tablet */}
      <div className="mt-6 flex justify-center gap-4 lg:hidden">
        <button
          onClick={previous}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full
            border
            border-border
            bg-background
            shadow

            transition-all
            duration-300

            active:bg-primary
            active:text-white
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full
            border
            border-border
            bg-background
            shadow

            transition-all
            duration-300

           active:bg-primary
            active:text-white
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

import { Quote } from "lucide-react";

interface Props {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export function TeacherTestimonialCard({
  name,
  role,
  testimonial,
  image,
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* Badge */}
      <div
        className="
         absolute

    top-[-40px]
    right-1

    z-20

    rounded-2xl
    bg-primary

    px-4
    py-3

    shadow-xl

    sm:px-5
    sm:py-4

    lg:right-[-90px]
    lg:top-6
        "
      >
        <h3 className="text-center text-sm font-bold text-primary-foreground sm:text-base">
          Criado por educadores
        </h3>

        <p className="text-center text-xs text-primary-foreground/90 sm:text-sm">
          Para educadores reais.
        </p>
      </div>

      <div
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-border
          bg-muted
          shadow-xl
        "
      >
        <img
          src={image}
          alt={name}
          className="
            h-[220px]
            w-full
            object-cover

            sm:h-[280px]

            lg:h-[320px]
          "
        />

        <div
          className="
            bg-background

            px-5
            py-5

            sm:px-6
          "
        >
          <div className="text-center">
            <h2
              className="
                text-xl
                font-bold
                text-secondary

                sm:text-2xl
              "
            >
              {name}
            </h2>

            <span
              className="
                text-sm
                text-muted-foreground

                sm:text-base
              "
            >
              {role}
            </span>
          </div>

          <Quote size={20} className="mb-3 mt-5 text-primary" />

          <p
            className="
              text-sm
              leading-7
              text-muted-foreground

              sm:text-[15px]
            "
          >
            "{testimonial}"
          </p>
        </div>
      </div>
    </div>
  );
}

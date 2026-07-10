import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border transition-all duration-300",

        isOpen
          ? "border-primary bg-primary/5 shadow-lg shadow-primary/10 "
          : "border-border bg-background hover:border-primary/40 ",
      )}
    >
      <button
        onClick={onToggle}
        className="
  flex
  w-full
  items-start
  justify-between
  hover:cursor-pointer

  gap-4

  px-5
  py-5

  sm:items-center
  sm:gap-6
  sm:px-6

  text-left
  transition-colors
"
      >
        <h3
          className={cn(
            `
    flex-1

    text-base
    font-bold
    leading-7

    sm:text-lg

    transition-colors
  `,
            isOpen ? "text-primary" : "text-secondary",
          )}
        >
          {question}
        </h3>

        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <ChevronDown
            className={cn(
              "h-6 w-6",
              isOpen ? "text-primary" : "text-muted-foreground",
            )}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="
                px-6
                pb-6

                leading-8
                text-muted-foreground
              "
            >
              {answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

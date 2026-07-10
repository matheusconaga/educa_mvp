import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  const close = () => setOpen(false);

  const items = [
    { label: "Início", href: "#hero" },
    { label: "Desafios", href: "#pain" },
    { label: "Benefícios", href: "#why" },
    { label: "Como funciona", href: "#how" },
    { label: "Depoimentos", href: "#barrier" },
    { label: "Planos", href: "#much" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <Button
        variant="outline"
        size="md"
        onClick={toggleMenu}
        className="aspect-square p-0 active:translate-y-0"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </Button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="
                fixed
                inset-0
                z-[998]

                bg-black/[0.001]
              "
            />

            {/* Drawer */}
            <motion.aside
              initial={{
                opacity: 0,
                y: -16,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -16,
                scale: 0.96,
              }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                z-[999]

                top-24

                left-1/2
                -translate-x-1/2

                w-[90%]
                max-h-[75vh]

                overflow-y-auto

                rounded-2xl

                border
                border-border

                bg-background

                shadow-2xl

                p-5

                flex
                flex-col
                gap-4

                min-[768px]:left-auto
                min-[768px]:right-6
                min-[768px]:translate-x-0
                min-[768px]:w-[340px]
              "
            >
              <nav className="flex flex-col gap-1">
                {items.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    whileHover={{ x: 6 }}
                    onClick={close}
                    className="
                      group

                      flex
                      items-center
                      justify-between

                      rounded-xl

                      px-4
                      py-3
                      active:translate-y-1
                      active:text-primary

                      text-base
                      font-medium
                      text-foreground

                      transition-colors

                      hover:bg-primary/5
                      hover:text-primary
                    "
                  >
                    <div className="flex items-center gap-2">
                      <ArrowUpRight className="size-4" />
                      {item.label}
                    </div>

                    <span className="opacity-0 transition group-hover:opacity-100">
                      →
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div className="border-t border-border/60 pt-4">
                <a href="#cta" onClick={close}>
                  <Button className="w-full">Quero participar</Button>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

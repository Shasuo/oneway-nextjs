import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SecondScreen = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  return (
    <section className="relative mt-[-5vw]" id="ABOUT">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src="/secondScreenBg.webp" className="w-full" />
      </motion.div>

      <div
        className="absolute left-0 top-[22.9vw] text-center font-semibold"
        style={{ left: "50%", transform: "translateX(-50%)" }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <h3 className="text_type_big">Привезли более 1000 авто</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        >
          <p className="max-w-[46.6vw] text_type_3x mt-[1.11vw]">
            Специализируемся на моделях от 5 до 40 млн с пробегом до 50 тыс. км
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        >
          <div className="mt-[1.11vw] py-[0.76vw] px-[2.22vw] rounded-[200px] bg-white w-fit mx-auto text-[#16171A] font-medium text_type_normal cursor-pointer">
            Связаться
          </div>
        </motion.div>
      </div>
    </section>
  );
};

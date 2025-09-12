import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SecondScreen = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  return (
    <section className="relative mt-[-5vw] max-lg:mt-[10.6vw]" id="ABOUT">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -20% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src="/secondScreenBg.webp" className="w-full max-lg:hidden" />
        <img
          src="/second_screen_bg_mobile.png"
          className="w-full min-lg:hidden"
        />
      </motion.div>

      <div
        className="absolute left-0 top-[22.9vw] text-center font-semibold max-lg:top-[30.9vw] max-lg:w-full"
        style={{ left: "50%", transform: "translateX(-50%)" }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <h3 className="text_type_big max-lg:font-semibold text_type_3x__mobile">
            Привезли более 1000 авто
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        >
          <p className="max-w-[46.6vw] text_type_3x mt-[1.11vw] max-lg:mt-[4.26vw] max-lg:max-w-[91.5vw] max-lg:font-semibold max-lg:mx-auto text_type_2_25x__mobile">
            Специализируемся на моделях
            <br className="min-lg:hidden" /> от 5 до 40 млн
            <br className="min-lg:hidden" /> с пробегом до 50 тыс. км
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          className="max-lg:hidden"
        >
          <div className="mt-[1.11vw] py-[0.76vw] px-[2.22vw] rounded-[200px] bg-white w-fit mx-auto text-[#16171A] font-medium text_type_normal cursor-pointer">
            Связаться
          </div>
        </motion.div>
      </div>
    </section>
  );
};

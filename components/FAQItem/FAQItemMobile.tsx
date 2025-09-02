import styles from "./FAQItem.module.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

function FAQItemMobile({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <button onClick={() => setIsOpen(!isOpen)} className={styles.item}>
      <div className="flex justify-between items-center w-full">
        <h3 className={"text_type_normal font-semibold"}>
          {question}
        </h3>
        {isOpen ? (
          <img src="circle_minus.svg" className="w-[6.4vw] h-[6.4vw]" /> // <MinusIcon className={styles.icon} />
        ) : (
          <img src="circle_plus.svg" className="w-[6.4vw] h-[6.4vw]" /> // <PlusIcon className={styles.icon} />
        )}
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          overflow: "hidden",
        }}
      >
        <p className="text_type_1_5x fone-semibold whitespace-pre-wrap text-start text-white opacity-60">
          {answer}
        </p>
      </motion.div>
    </button>
  );
}

export default FAQItemMobile;

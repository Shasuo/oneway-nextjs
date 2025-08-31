import { useState } from "react";
import { motion } from "framer-motion";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full flex flex-col gap-[1.667vw] p-0 border-0 bg-transparent text-white cursor-pointer"
    >
      <div className="flex justify-between items-center w-full">
        <h3 className="text_type_3x font-semibold">{question}</h3>
        {isOpen ? (
          <img src="circle_minus.svg" className="w-[1.667vw] h-[1.667vw]" /> // <MinusIcon className={styles.icon} />
        ) : (
          <img src="circle_plus.svg" className="w-[1.667vw] h-[1.667vw]" /> // <PlusIcon className={styles.icon} />
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
        <p className="text_type_2x opacity-60 font-medium whitespace-pre-wrap text-start text-[rgba(255, 255, 255, 0.60)]">
          {answer}
        </p>
      </motion.div>
    </button>
  );
}

export default FAQItem;

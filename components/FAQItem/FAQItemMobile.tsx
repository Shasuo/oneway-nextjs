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
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <button onClick={() => setIsOpen(!isOpen)} className={styles.item}>
      <div className={styles.question}>
        <h3 className={`text text_type_${isMobile ? "body" : "h3"}_semibold`}>
          {question}
        </h3>
        {isOpen ? (
          <img src="circle_minus.svg" className={styles.icon} /> // <MinusIcon className={styles.icon} />
        ) : (
          <img src="circle_plus.svg" className={styles.icon} /> // <PlusIcon className={styles.icon} />
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
        {/* <p
          className={classNames(
            "text",
            "text_type_body_medium",
            [styles.answer],
            {
              text_type_tiny_semibold: isMobile,
              text_type_body_medium: !isMobile,
            }
          )}
        > */}
        <p className="text text_type_body_medium whitespace-pre-wrap text-start text-[rgba(255, 255, 255, 0.60)]">
          {answer}
        </p>
      </motion.div>
    </button>
  );
}

export default FAQItemMobile;

import PlusIcon from "../assets/circle_plus.svg";
import MinusIcon from "../assets/circle_minus.svg";
import styles from "./FAQItem.module.css";
import classNames from "classnames";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

function FAQItem({
  isMobile,
  question,
  answer,
}: {
  isMobile: boolean;
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)} className={styles.item}>
      <div className={styles.question}>
        <h3
          className={`text text_type_${
            isMobile ? "normal" : "3x"
          } font-semibold`}
        >
          {question}
        </h3>
        {isOpen ? (
          <img
            src={MinusIcon.src}
            alt="minus icon"
            className={`${styles.icon}`}
          />
        ) : (
          <img
            src={PlusIcon.src}
            alt="plus icon"
            className={`${styles.icon}`}
          />
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
        <p
          className={classNames("text", [styles.answer], {
            // text_type_tiny_semibold: isMobile,
            // text_type_body_medium: !isMobile,
            "text_type_1_5x font-regular": isMobile,
            "text_type_2x font-medium": !isMobile,
          })}
        >
          {answer}
        </p>
      </motion.div>
    </button>
  );
}

export default FAQItem;

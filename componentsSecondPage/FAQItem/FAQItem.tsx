import PlusIcon from "../assets/circle_plus.svg";
import MinusIcon from "../assets/circle_minus.svg";
import styles from "./FAQItem.module.css";
import classNames from "classnames";
import { useState } from "react";
import { motion } from "framer-motion";

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)} className={styles.item}>
      <div className={styles.question}>
        <h3
          className="text text_type_3x text_type_normal__mobile font-semibold"
          style={{width: "100%", textAlign: "left"}}
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
          className={classNames(
            "text text_type_2x font-medium text_type_1_5x__mobile max-lg:font-regular",
            [styles.answer]
          )}
        >
          {answer}
        </p>
      </motion.div>
    </button>
  );
}

export default FAQItem;

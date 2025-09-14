import classNames from "classnames";
import styles from "./FAQList.module.css";

function FAQList({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={classNames(styles.list, "w-[45.278vw] max-lg:w-full")}>
      {children}
    </div>
  );
}

export default FAQList;

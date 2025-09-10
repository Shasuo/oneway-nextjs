import styles from "./FAQList.module.css";

function FAQList({
  width,
  children,
}: {
  width: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.list} style={{ width: `${width}` }}>
      {children}
    </div>
  );
}

export default FAQList;

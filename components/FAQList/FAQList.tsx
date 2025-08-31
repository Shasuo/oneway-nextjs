import styles from "./FAQList.module.css";

function FAQList({
  width,
  children,
}: {
  width: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[3.61vw]" style={{ width: `${width}` }}>
      {children}
    </div>
  );
}

export default FAQList;

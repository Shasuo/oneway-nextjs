import { useMediaQuery } from "react-responsive";
import styles from "./GuaranteeDetail.module.css";

function GuaranteeDetail({
  isMobile,
  children,
}: {
  isMobile: boolean;
  children: any;
}) {
  return (
    <div className={styles.detail}>
      <div className={styles.icon}></div>
      <p className={`text text_type_${isMobile ? "normal" : "2x"}`}>
        {children}
      </p>
    </div>
  );
}

export default GuaranteeDetail;

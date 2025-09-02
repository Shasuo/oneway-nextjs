import { useMediaQuery } from "react-responsive";
import styles from "./GuaranteeDetail.module.css";

function GuaranteeDetail({ children } : { children: React.ReactNode }) {
  return (
    <div className="w-[17.847vw] flex flex-col gap-[0.833vw]">
      <div className="w-[1.736vw] h-[1.736vw]" 
      style={{backgroundImage: `url(guarantee_icon.svg)`, backgroundSize:"cover"}}></div>
      <p className="text_type_2x">{children}</p>
    </div>
  );
}

export default GuaranteeDetail;

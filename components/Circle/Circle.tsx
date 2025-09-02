
import styles from "./Circle.module.css";

function Circle({ children } : { children: React.ReactNode }) {
  return (
    <div className="w-[27.778vw] h-[27.778vw] flex justify-center items-center ml-[-6.6vw]"
    style={{background: `url(dashed_circle.svg)`, backgroundSize: "cover"}}>
      <p
        className="w-[14.444vw] text-center text_type_2x"
      >
        {children}
      </p>
    </div>
  );
}

export default Circle;

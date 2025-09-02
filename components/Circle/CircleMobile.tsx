// import classNames from "classnames";
import styles from "./Circle.module.css";

function CircleMobile({ children } : { children: React.ReactNode }) {
  return (
    <div className="w-[65.067vw] h-[65.067vw] flex justify-center items-center mt-[-17.333vw]"
    style={{background: `url(dashed_circle_mob.svg`, backgroundSize:"cover"}}>
      <p
        className="text_type_normal w-[44.533vw] text-center"
      >
        {children}
      </p>
    </div>
  );
}

export default CircleMobile;

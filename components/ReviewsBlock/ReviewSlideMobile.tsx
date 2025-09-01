import styles from "./ReviewSlide.module.css";

export default function ReviewSlideMobile(
  {
  countryFrom,
  countryTo,
  carModel,
  comment,
  socialNetwork,
  socialIcon,
  socialAlt,
  imgSrc,
  imgAlt,
  onClickLeft,
  onClickRight,
}: {
  countryFrom: string;
  countryTo: string;
  carModel: string;
  comment: string;
  socialNetwork?: string;
  socialIcon?: string;
  socialAlt?: string;
  imgSrc: string;
  imgAlt: string;
  onClickLeft: React.MouseEventHandler<HTMLButtonElement>;
  onClickRight: React.MouseEventHandler<HTMLButtonElement>;
}
) {
  return (
    <section className="flex flex-col gap-[3.2vw] justify-center w-full box-border py-0 px-[5vw] relative">
      {/* <p className="font-semibold text_type_1_5x flex items-center gap-[2.67vw]">
        {countryFrom} <img src="path.png" alt="" /> {countryTo}
      </p>
      <h2 className="font-semibold text_type_2_25x">{carModel}</h2>
      <img src={imgSrc} alt={imgAlt} />
      <div className="m-0 text_type_normal flex">
        <img
          className="w-[4.27vw] h-[4.27vw]"
          src={socialIcon}
          alt={socialAlt}
        />
        <p className="ml-[2.13vw]">{socialNetwork}</p>
      </div>
      <p className={styles.review_comment}>{comment}</p>
      <div>
        <button className={styles.change_review_btn} onClick={onClickLeft}>
          {"<"}
        </button>
        <button className={styles.change_review_btn} onClick={onClickRight}>
          &gt;
        </button>
      </div> */}
    </section>
  );
}

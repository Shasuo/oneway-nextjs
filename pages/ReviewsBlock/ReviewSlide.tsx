import styles from "./ReviewSlide.module.css";

export default function ReviewsSlide({
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
}) {
  return (
    <section className="flex justify-center items-center w-full box-border relative px-[5vw] py-0">
      {/* <div className="flex flex-col max-w-[498px] w-full justify-between min-h-[461px] tracking-normal h-[600px] mr-[50px]"> */}
      <div className={styles.review_text}>
        <div>
          <p className={styles.review_country}>
            {/* <p className="font-semibold flex items-center gap-[10px] text_type_1_5x"> */}
            {countryFrom} <img src="path.png" alt="" /> {countryTo}
          </p>
          <h2 className="text_type_4x">{carModel}</h2>
          <p className="text_type_2x">{comment}</p>
        </div>
        <div>
          <div className={styles.review_social}>
            {/* <div className="mt-[50px] flex text_type_1_5x"></div> */}
            <img src={socialIcon} alt={socialAlt} />
            <p className={styles.socialNet}>{socialNetwork}</p>
          </div>
          <div>
            <button className={styles.change_review_btn} onClick={onClickLeft}>
              {"<"}
            </button>
            <button className={styles.change_review_btn} onClick={onClickRight}>
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className={styles.review_img_container}>
        <img className={styles.review_img} src={imgSrc} alt={imgAlt} />
      </div>
    </section>
  );
}

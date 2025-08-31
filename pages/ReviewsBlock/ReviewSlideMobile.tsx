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
    <section className={styles.inner}>
      <p className={styles.review_country}>
        {countryFrom} <img src="path.png" alt="" /> {countryTo}
      </p>
      <h2 className={styles.review_model}>{carModel}</h2>
      <img className={styles.review_img} src={imgSrc} alt={imgAlt} />
      <div className={styles.review_social}>
        <img src={socialIcon} alt={socialAlt} />
        <p className={styles.socialNet}>{socialNetwork}</p>
      </div>
      <p className={styles.review_comment}>{comment}</p>
      <div>
        <button className={styles.change_review_btn} onClick={onClickLeft}>
          {"<"}
        </button>
        <button className={styles.change_review_btn} onClick={onClickRight}>
          &gt;
        </button>
      </div>
    </section>
  );
}

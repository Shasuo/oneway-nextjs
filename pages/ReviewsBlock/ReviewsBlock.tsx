import { useState } from "react";
import reviewData from "./reviewData";
import ReviewsSlide from "./ReviewSlide";
import ReviewSlideMobile from "./ReviewSlideMobile";
import { useMediaQuery } from "react-responsive";

export default function ReviewsBlock() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const data = reviewData;
  const reviewSlideData = data.map((item, key) =>
    isMobile ? (
      <ReviewSlideMobile
        // index={key}
        countryFrom={item.countryFrom}
        countryTo={item.countryTo}
        carModel={item.carModel}
        comment={item.comment}
        socialNetwork={item.socialNetwork}
        socialIcon={item.socialIcon}
        socialAlt={item.socialAlt}
        imgSrc={item.imgSrc}
        imgAlt={item.imgAlt}
        onClickLeft={changeReviewB}
        onClickRight={changeReviewF}
      />
    ) : (
      <ReviewsSlide
        // index={key}
        countryFrom={item.countryFrom}
        countryTo={item.countryTo}
        carModel={item.carModel}
        comment={item.comment}
        socialNetwork={item.socialNetwork}
        socialIcon={item.socialIcon}
        socialAlt={item.socialAlt}
        imgSrc={item.imgSrc}
        imgAlt={item.imgAlt}
        onClickLeft={changeReviewB}
        onClickRight={changeReviewF}
      />
    )
  );
  const [review, setReview] = useState(reviewSlideData[0]);

  let currentSlide = 0;

  function changeReviewF() {
    currentSlide++;
    if (currentSlide >= reviewSlideData.length) {
      currentSlide = 0;
    }

    setReview(reviewSlideData[currentSlide]);
  }

  function changeReviewB() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = reviewSlideData.length - 1;
    }

    setReview(reviewSlideData[currentSlide]);
  }

  return (
    <section style={{ position: "relative" }}>
      <div id="review" style={{ position: "absolute", top: "-30px" }}></div>
      {review}
    </section>
  );
}

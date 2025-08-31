import { useState } from "react";
import reviewData from "./reviewData";
import ReviewsSlide from "./ReviewSlide";
import { useMediaQuery } from "react-responsive";
import ReviewSlideMobile from "./ReviewSlideMobile";

export default function ReviewsBlockMobile() {
  const data = reviewData;

  const reviewSlideDataMobile = data.map((item, key) => (
    <ReviewSlideMobile
      key={key}
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
  ));
  const [review, setReview] = useState(reviewSlideDataMobile[0]);

  let currentSlide = 0;

  function changeReviewF() {
    currentSlide++;
    if (currentSlide >= reviewSlideDataMobile.length) {
      currentSlide = 0;
    }

    setReview(reviewSlideDataMobile[currentSlide]);
  }

  function changeReviewB() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = reviewSlideDataMobile.length - 1;
    }

    setReview(reviewSlideDataMobile[currentSlide]);
  }

  return <section style={{ position: "relative" }}>{review}</section>;
}

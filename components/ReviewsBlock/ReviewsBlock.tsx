import { useState } from "react";
import reviewData from "./reviewData";
import ReviewsSlide from "./ReviewSlide";
import { useMediaQuery } from "react-responsive";
import ReviewSlideMobile from "./ReviewSlideMobile";
import { motion } from "framer-motion";

export default function ReviewsBlock() {
  const data = reviewData;
  const reviewSlideData = data.map((item, key) => (
    <ReviewsSlide
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
    <section style={{ position: "relative" }} id="REVIEWS" className="max-lg:hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -30% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {review}
      </motion.div>
    </section>
  );
}

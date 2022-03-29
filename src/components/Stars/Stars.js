import React, { useEffect, useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./stars.css";

const Stars = ({
  isEdit,
  rating,
  myclass,
  setFilterRate,
  filterRate,
  setRate,
  isAdd,
}) => {
  //   const [rate, setRate] = useState(1);

  //   useEffect(() => {
  //     return setFilterRate(rate);
  //   }, [rate]);

  const getRate = (nextValue) => {
    setFilterRate(nextValue);
    // setRate(nextValue);
  };

  return (
    <div>
      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={isEdit ? filterRate : rating}
        editing={isEdit}
        className={myclass}
        onStarClick={(nextValue) => getRate(nextValue)}
      />
    </div>
  );
};

export default Stars;

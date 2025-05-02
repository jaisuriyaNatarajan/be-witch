import React from "react";
import Icon from "../../utils/Icon";

const Rating = ({ rating = 0, max = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[...Array(fullStars)].map((_, i) => (
        <Icon key={`full-${i}`} name="Star" color="gold" fill={'gold'}/>
      ))}
      {hasHalfStar && <Icon name="StarHalf" color="gold" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon key={`empty-${i}`} name="StarOff" color="gray" fill={'gold'} />
      ))}
    </div>
  );
};

export default Rating;

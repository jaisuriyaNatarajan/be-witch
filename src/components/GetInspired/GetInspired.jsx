import React, { useState } from "react";
import styled from "styled-components";
import img1 from "../../assets/cards/makeup-artist.png";
import img2 from "../../assets/cards/makeup-artist1.png";
import img3 from "../../assets/cards/makeup-artist2.png";
import img4 from "../../assets/cards/makeup-artist3.png";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    border-radius: 16px 16px 0 0;
  }

  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;

    span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: white;
      opacity: 0.5;

      &.active {
        background: #ffa726;
        opacity: 1;
      }
    }
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    background: #fff;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  padding: 16px;

  h3 {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 13px;
      font-weight: normal;
      color: #777;
    }
  }

  p {
    font-size: 13px;
    color: #777;
    margin-bottom: 8px;
  }

  strong {
    font-size: 14px;
    font-weight: bold;
  }
`;

const cards = [
  {
    img: [img1, img2, img3, img4],
    title: "Expert Makeup Artist - Weddi.",
    rating: "4.3",
    category: "Beauty & Personal Care / Makeup Artists",
    price: "$150 per session (Starting)",
  },
  {
    img: [img2, img3, img4, img1],
    title: "Expert Makeup Artist - Weddi.",
    rating: "4.3",
    category: "Beauty & Personal Care / Makeup Artists",
    price: "$150 per session (Starting)",
  },
  {
    img: [img3, img4, img1, img2],
    title: "Expert Makeup Artist - Weddi.",
    rating: "4.3",
    category: "Beauty & Personal Care / Makeup Artists",
    price: "$150 per session (Starting)",
  },
  {
    img: [img4, img1, img2, img3],
    title: "Expert Makeup Artist - Weddi.",
    rating: "4.3",
    category: "Beauty & Personal Care / Makeup Artists",
    price: "$150 per session (Starting)",
  },
];

const GetInspired = () => {
  const [currentIndex, setCurrentIndex] = useState(Array(cards.length).fill(0));

  const handleNext = (cardIndex) => {
    console.log("cardIndex");
    setCurrentIndex((prev) =>
      prev.map((index, i) =>
        i === cardIndex ? (index + 1) % cards[cardIndex].img.length : index
      )
    );
  };

  return (
    <>
      <Grid>
        {cards.map((card, cardIndex) => (
          <Card key={cardIndex}>
            <ImageWrapper>
              <img
                src={card.img[currentIndex[cardIndex]]}
                alt="Makeup Artist"
              />
              <div className="dots">
                {card.img.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={
                      dotIndex === currentIndex[cardIndex] ? "active" : ""
                    }
                  />
                ))}
              </div>
              <div className="arrow" onClick={() => handleNext(cardIndex)}>
                ›
              </div>
            </ImageWrapper>
            <Content>
              <h3>
                {card.title} <span>★ {card.rating}</span>
              </h3>
              <p>{card.category}</p>
              <strong>{card.price}</strong>
            </Content>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default GetInspired;

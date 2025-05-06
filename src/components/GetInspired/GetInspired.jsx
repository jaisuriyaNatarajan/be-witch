import React from "react";
import styled from "styled-components";
import img1 from "../../assets/cards/makeup-artist.png";
import img2 from "../../assets/cards/makeup-artist.png";
import img3 from "../../assets/cards/makeup-artist.png";
import img4 from "../../assets/cards/makeup-artist.png";

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
    img: img1,
    title: "Expert Makeup Artist - Weddi.",
    rating: "4.3",
    category: "Beauty & Personal Care / Makeup Artists",
    price: "$150 per session (Starting)",
  },
  {
    img: img2,
    title: "Expert Makeup Artist - Weddi.",
    rating: "4.3",
    category: "Beauty & Personal Care / Makeup Artists",
    price: "$150 per session (Starting)",
  },
  {
    img: img3,
    title: "Expert Makeup Artist - Weddi.",
    rating: "4.3",
    category: "Beauty & Personal Care / Makeup Artists",
    price: "$150 per session (Starting)",
  },
  {
    img: img4,
    title: "Expert Makeup Artist - Weddi.",
    rating: "4.3",
    category: "Beauty & Personal Care / Makeup Artists",
    price: "$150 per session (Starting)",
  },
];

const GetInspired = () => {
  return (
    <>
      <Grid>
        {cards.map((card, index) => (
          <Card key={index}>
            <ImageWrapper>
              <img src={card.img} alt="Makeup Artist" />
              <div className="dots">
                <span className="active" />
                <span />
                <span />
              </div>
              <div className="arrow">›</div>
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

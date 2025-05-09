// AdditionalCharges.js
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

const Heading = styled.h2`
  font-size: 1.6rem;
`;

const Subtext = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
`;

const OptionText = styled.div`
  text-align: left;
`;

const Note = styled.p`
  font-size: 0.75rem;
  color: #888;
  margin-top: 1rem;
`;

const AdditionalCharges = () => {
  const [checked, setChecked] = useState({
    travel: true,
    timing: true,
    hours: true,
    trial: false,
  });

  const toggle = (key) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Wrapper>
      <Heading>Additional Charges</Heading>
      <Subtext>
        Help your service stand out to get booked faster and earn your first
        reviews
      </Subtext>

      {[
        {
          key: "travel",
          title: "Travel Fee",
          desc: "Applies if the event is beyond your base city or location",
        },
        {
          key: "timing",
          title: "Early/Late Timing Fee",
          desc: "Applies : arrival before ( 6:00 AM ) or Event ends after ( 9:00 PM )",
        },
        {
          key: "hours",
          title: "Extra Hours",
          desc: "Charge for session extensions beyond your standard duration",
        },
        {
          key: "trial",
          title: "Trial / Pre-shoot Fee",
          desc: "For test makeup, trial hairstyles, or concept shoots before the actual event.",
        },
      ].map((item) => (
        <Option key={item.key}>
          <OptionText>
            <strong>{item.title}</strong>
            <br />
            <small>{item.desc}</small>
          </OptionText>
          <input
            type="checkbox"
            checked={checked[item.key]}
            onChange={() => toggle(item.key)}
          />
        </Option>
      ))}

      <Note>
        “Additional charges may apply for travel beyond city limits, early
        morning bookings, or if an assistant is required. Exact charges will be
        confirmed before final booking.”
      </Note>
    </Wrapper>
  );
};

export default AdditionalCharges;

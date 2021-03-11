import "./Body.scss";

import React from "react";
import Card from "../Card/Card";
import icon1 from "../../assets/images/icon-brand-recognition.svg";
import icon2 from "../../assets/images/icon-detailed-records.svg";
import icon3 from "../../assets/images/icon-fully-customizable.svg";

export default function Body() {
  return (
    <div className="body-container">
      <div className="body-text">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="card-section">
        <Card
          icon={icon1}
          title="Brand Recognition"
          text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <Card
          icon={icon2}
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <Card
          icon={icon3}
          title="Fully Customizable"
          text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </div>
  );
}

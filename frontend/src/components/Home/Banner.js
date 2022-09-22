import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part" onClick={() => setShowSearch(true)}>
            A place to get
          </span>
          {showSearch && (
            <input
              type="input"
              id="search-box"
              onChange={({ target }) => {
                const title = target.value;
                if (title.length > 2) {
                  props.onClickSearch(
                    title,
                    (page) => agent.Items.byTitle(title, page),
                    agent.Items.byTitle(title)
                  );
                }
              }}
            />
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from 'react';
import { Link } from "react-router-dom";
import Portrait from "../../images/Profile.png";

function Home() {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Lavinia</h2>
        <p>Welcome to my Portfolio!</p>
        <Link to="portfolio">
          <button>View my Projects</button>
        </Link>
      </div>
      <div className="portrait">
        <img
          src={Portrait}
          alt="self portrait"
        />
      </div>
    </section>
  );
}

export default Home;
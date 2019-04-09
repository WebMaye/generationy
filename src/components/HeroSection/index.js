import React from "react";
import "./styles.scss";

function HeroSection(props) {
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-5-desktop has-text-centered-touch">
            <header className="HeroSection__header">
              <h1 className="title is-spaced is-1 has-text-weight-bold">
                Generation Y
              </h1>
              <p className="HeroSection__subtitle subtitle">
                A community of Digital Media enthusiasts in Ogun State, Nigeria
                sharing contents relating to the Digital world by 21st century
                generation.
              </p>
            </header>
            <a
              className="button is-medium is-link"
              href="https://chat.whatsapp.com/FaJYAPyHPxz1YzKWsQx4Kz"
              target="_blank"
            >
              Join Us
            </a>
          </div>
          <div className="column is-1" />
          <div className="column">
            <figure className="HeroSection__image image">
              <img src="https://res.cloudinary.com/webmaye/image/upload/v1554757166/undraw_group_chat_v059.png" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

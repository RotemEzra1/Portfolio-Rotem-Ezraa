import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>
          </ul>
        </article>
        {/* END OF UX UI */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>
          </ul>
        </article>
        {/*END Web development */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>

            <li>
              <BsCheck className="service__list-icon" />
              <p>Rotem Ezra Rotem Ezra Rotem Ezra Rotem Ezra </p>
            </li>
          </ul>
        </article>

        {/*END Content Creation*/}
      </div>
    </section>
  );
};

export default Services;

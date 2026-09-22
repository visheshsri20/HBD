import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">A little something for you</p>

        <h1>
          Hey You... <span>♡</span>
        </h1>

        <p className="hero-description">
          I made something for you.
          <br />
          A little corner of the internet,
          <br />
          just for the most special person
          <br />
          in my life.
        </p>

        <a href="#birthday" className="hero-button">
          Continue <span>→</span>
        </a>
      </div>

      <div className="hero-note">
        Same people.
        <br />
        Always better
        <br />
        together. ♡
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <div />
      </div>
    </section>
  );
}

export default Hero;
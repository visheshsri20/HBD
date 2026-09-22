import "./Final.css";

function Final() {
  return (
    <section className="final">

      <div className="final-content">

        <div className="final-note">
          Here's to
          <br />
          more memories,
          <br />
          more adventures,
          <br />
          more us. ♡
        </div>

        <div>

          <span className="final-label">
            MY LOVE
          </span>

          <h2>
            Happy Birthday
          </h2>

          <div className="final-heart">
            ♡
          </div>

          <p>
            You make the world a kinder,
            brighter and happier place.
            <br />
            I hope this year gives you
            everything you deserve.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Forever You ♡
          </button>

        </div>

        <div className="final-love">
          I love you.
          <br />
          Always. ♡
        </div>

      </div>

    </section>
  );
}

export default Final;
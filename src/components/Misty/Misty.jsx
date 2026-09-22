import "./Misty.css";

function Misty() {
  return (
    <section className="misty">

      <div className="misty-content">

        <span>MISTY'S CORNER 🐾</span>

        <h2>
          Because you
          <br />
          + Misty =
          <br />
          <em>my two favourite things.</em>
        </h2>

        <p>
          The cuddles.
          <br />
          The chaos.
          <br />
          The tiny menace.
          <br />
          The love. 🐾
        </p>

      </div>

      <div className="misty-photos">

        <div className="misty-photo misty-one">
          <img src="/photos/memory4.jpeg" alt="Misty" />
        </div>

        <div className="misty-photo misty-two">
          <img src="/photos/memory8.jpeg" alt="Misty" />
        </div>

        <div className="misty-photo misty-three">
          <img src="/photos/memory10.jpeg" alt="Misty" />
        </div>

      </div>

    </section>
  );
}

export default Misty;
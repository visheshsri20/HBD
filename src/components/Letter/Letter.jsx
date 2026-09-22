import "./Letter.css";

function Letter() {
  return (
    <section className="letter" id="letter">

      <div className="letter-intro">

        <span>A LETTER FOR YOU</span>

        <h2>
          Some things are
          <br />
          easier to say here...
        </h2>

      </div>

      <div className="letter-paper">

        <div className="letter-tape" />

        <p className="letter-greeting">
          To my love,
        </p>

        <p>
          There are so many things I could say,
          but the simplest truth is this —
          you make my life so much brighter.
        </p>

        <p>
          Thank you for being you.
          For the little moments,
          the laughter,
          the random conversations,
          the adventures,
          and all the memories we've made together.
        </p>

        <p>
          I hope you always know how loved you are.
          Not just today, but every single day.
        </p>

        <p>
          Here's to all the memories we've already made,
          and all the ones waiting for us.
        </p>

        <p className="letter-signature">
          Always yours,
          <br />
          ♡
        </p>

      </div>

    </section>
  );
}

export default Letter;
import "./Birthday.css";

function Birthday() {
  return (
    <section className="birthday" id="birthday">

      <div className="birthday-photo birthday-photo-left">
        <img src="/photos/memory3.jpeg" alt="Beautiful memory" />
        <span>My happiness ♡</span>
      </div>

      <div className="birthday-card">

        <span className="birthday-label">
          HAPPY BIRTHDAY
        </span>

        <h2>
          My Love <span>♥</span>
        </h2>

        <div className="birthday-decoration">
          ─── ♡ ───
        </div>

        <p>
          To the girl who makes ordinary days feel special,
          and every moment feel like home.
        </p>

        <p>
          I'm so lucky to have you in my life.
        </p>

      </div>

      <div className="birthday-photo birthday-photo-right">
        <img src="/photos/memory1.jpeg" alt="Us together" />
        <span>You make life prettier ♡</span>
      </div>

    </section>
  );
}

export default Birthday;
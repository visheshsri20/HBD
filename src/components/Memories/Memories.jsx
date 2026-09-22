import { useState } from "react";
import "./Memories.css";

const memories = [
  {
    image: "/photos/memory3.jpeg",
    text: "You make everything look beautiful.",
  },
  {
    image: "/photos/memory7.jpeg",
    text: "One of my favourite versions of you.",
  },
  {
    image: "/photos/memory4.jpeg",
    text: "Some moments feel like home.",
  },
  {
    image: "/photos/memory10.jpeg",
    text: "Time stances for life. ❤️",
  },
  {
    image: "/photos/memory2.jpeg",
    text: "A face I could never get tired of.",
  },
  {
    image: "/photos/memory8.jpeg",
    text: "Another little memory worth keeping.",
  },
];

function Memories() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="memories" id="memories">

      <div className="memories-heading">

        <div>
          <span>YOU, IN A FEW FRAMES</span>

          <h2>
            Some moments
            <br />
            I never want to forget.
          </h2>
        </div>

        <p>
          A collection of moments,
          <br />
          smiles, and everything
          <br />
          I love about you. ♡
        </p>

      </div>

      <div className="memories-grid">

        {memories.map((memory, index) => (
          <div
            className={`memory-card memory-${index}`}
            key={index}
            onClick={() => setSelected(memory)}
          >

            <div className="memory-tape" />

            <img src={memory.image} alt={memory.text} />

            <p>{memory.text}</p>

          </div>
        ))}

      </div>

      {selected && (
        <div
          className="memory-modal"
          onClick={() => setSelected(null)}
        >
          <div
            className="memory-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <img src={selected.image} alt={selected.text} />

            <p>{selected.text}</p>

          </div>
        </div>
      )}

    </section>
  );
}

export default Memories;
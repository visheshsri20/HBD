import "./Story.css";

const story = [
  {
    image: "/photos/memory1.jpeg",
    text: "Somewhere along the way...",
  },
  {
    image: "/photos/memory6.jpeg",
    text: "I realized you were special.",
  },
  {
    image: "/photos/memory5.jpeg",
    text: "You became home.",
  },
  {
    image: "/photos/memory9.jpeg",
    text: "Then came the adventures.",
  },
  {
    image: "/photos/memory10.jpeg",
    text: "And then there was Misty. 🐾",
  },
];

function Story() {
  return (
    <section className="story" id="story">

      <div className="story-heading">
        <span>OUR STORY</span>

        <h2>
          Some chapters from
          <br />
          our favourite story...
        </h2>
      </div>

      <div className="story-timeline">

        {story.map((item, index) => (
          <div className="story-item" key={index}>

            <span className="story-number">
              0{index + 1}
            </span>

            <div className="story-photo">
              <img src={item.image} alt={item.text} />

              <p>{item.text}</p>
            </div>

            {index !== story.length - 1 && (
              <span className="story-heart">♥</span>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default Story;
import "./Middle.css";

export default function Middle() {
  return (
    <section className="middle">
      <div className="topBar">
        <h6>No more waste</h6>
        <h1>Pick the Sun</h1>
        <p className="paragrafo">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>

      <img className="imageDesktop" src={"/image/Desktop.png"} alt="" />
    </section>
  );
}

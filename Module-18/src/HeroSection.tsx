const HeroSection = () => {
  return (
    <section style={{ position: "relative", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}>
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          src="https://drive.google.com/file/d/1tKyZOk0RQoTLqb5qPzisDR493TDzrRiX/preview"
          title="Hero Video"
          allow="autoplay; fullscreen"></iframe>
      </div>
    </section>
  );
};

export default HeroSection;

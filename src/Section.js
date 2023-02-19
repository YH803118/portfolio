const Section = ({ num, scrollIndex }) => {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        border: "1px solid black",
        borderRadius: 999,
        backgroundColor: scrollIndex === num ? "black" : "transparent",
        transitionDuration: 1000,
        transition: "background-color 0.5s",
      }}
    ></div>
  );
};

const Sections = ({ scrollIndex }) => {
  return (
    <div style={{ position: "fixed", top: "50%", right: 100 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 100,
        }}
      >
        <Section num={1} scrollIndex={scrollIndex}></Section>
        <Section num={2} scrollIndex={scrollIndex}></Section>
        <Section num={3} scrollIndex={scrollIndex}></Section>
      </div>
    </div>
  );
};

export default Sections;

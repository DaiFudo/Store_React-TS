const Banned: React.FC = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        style={{ width: "25%", height: "25%", margin: "25px" }}
        src="https://c.tenor.com/m5Uwk-w7B18AAAAM/banned-thor.gif"
        alt="gifbanned"
      />
      <span style={{ color: "red", fontSize: "100px" }}>
        😈 You are banned! 😈
      </span>
    </div>
  );
};
export default Banned;

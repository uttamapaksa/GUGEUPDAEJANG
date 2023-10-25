//infowindow 내용 - 개선 예정
function InfoContents() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%, 0)",
        display: "flex",
        backgroundColor: "#ffffffea",
        boxShadow: "1px 5px 5px 5px #3b3b3b40",
        fontSize: "12px",
        borderRadius: "10px",
        flexDirection: "column",
        width: "250px",
      }}
    >
      <div
        style={{
          position: "absolute",
          display: "flex",
          top: 0,
          right: 0,
          width: "60px",
          height: "30px",
          backgroundColor: "red",
          borderRadius: "0 10px 0 5px",
          color: "#ffffff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {"KTAS2"}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-33px",
          left: "50%",
          transform: "translate(-50%, 0)",
          width: 0,
          height: 0,
          borderBottom: "20px solid transparent",
          borderTop: "20px solid #ffffffea",
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
        }}
      ></div>
      <div className="info-box" style={{ width: "100%" }}>
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "3px",
            padding: "0 10px",
            overflow: "hidden",
          }}
        >
          <span className="tit" style={{ fontSize: "13px", fontWeight: "bold" }}>
            {"대전 유성구 학하남로 10"}
          </span>
          <span className="new-addr">{11.5}km</span>
        </p>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "0 10px",
          }}
        >
          <span className="old-addr" style={{ color: "#707070", textAlign: "left", width: "50%" }}>
            {"오전 01:34"}
          </span>
          <span className="old-addr" style={{ color: "#707070", textAlign: "right", width: "50%" }}>
            요청 대기 {3}분 경과
          </span>
        </p>
        <hr
          style={{ borderWidth: 0, height: "0.5px", width: "100%", backgroundColor: "#8a8a8a" }}
        />
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "0 10px",
          }}
        >
          <span
            className="old-addr"
            style={{ color: "#F44336", width: "100%", textAlign: "right" }}
          >
            {20}분 이내 도착 가능
          </span>
        </p>
      </div>
    </div>
  );
}

export default InfoContents;


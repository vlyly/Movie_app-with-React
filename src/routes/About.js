import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about_container">
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/d3/fc/76/d3fc76713e2772c36f7b4ef9bcaf9dea.gif"
        alt="avatar"
      />
      <p className="about_comment">
        전 이 페이지를 만들고 모 프랜차이즈 영화관에서 3년간 아르바이트를 했지만
        영화를 그다지 좋아하지 않아요.(머쓱) 솔직히 싫어합니다...
        <br />
        영화 전개 부분 볼 생각만 해도 좀 날 것 같아요.
        <br />
        <br />
        차라리 스포츠 경기 보는 걸 좋아합니다. 공놀이 좋아해요. 야구, 농구, 축구
        다 보는데 제일 좋아하는 건 야구에요. 시즌 시작되면 매일 챙겨봄!
        <br />
        농구는 잠깐 열심히 보다가 요즘은 농구 보다는 축구를 가끔 봐요. 아직 룰은
        잘 모르지만 그래도 직접 보면서 배워가는 거라고 생각합니다!ㅎㅎ
        <br />
        인테르가 스쿠테도를 먹을 수 있을까요? 맨시티가 epl 우승컵을 손에 쥐게
        될지요?
        <br />
        이번 시즌 우리 키움 히어로즈는 저번 시즌보다 높은 곳으로 오를 수
        있을지...! 생각만 해도 너무 신난당ㅎㅎㅎ 올해는 누구 유니폼을
        살까...(두근)
      </p>
    </div>
  );
}

export default About;

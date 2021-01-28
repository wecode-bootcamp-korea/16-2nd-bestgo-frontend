import React, { Component } from "react";

class Aside extends Component {
  render() {
    return (
      <div className="Aside">
        <div className="asideInfo">
          <h4>최고는 어떤 곳인가요?</h4>
          <p>서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고</p>
          <p>빠르게 연결해드리는 전문가 매칭 서비스입니다.</p>
          <p>
            1분 내외의 요청서를 작성하면, 여러 고수님들이 맞춤형 견적을
            보내드려요.
          </p>
          <p>맘에 쏙 드는 고수의 맞춤형 서비스를 받아보세요.</p>
        </div>
        <div className="asideInfo">
          <h4>레슨 고수만을 모았다!</h4>
          <p>
            나의 현재 수준과 목표에 맞춰 수업을 진행하는 100% 맞춤과외를
            만나보세요
          </p>
          <p>선생님 프로필, 커리큘럼, 비용 비교하고 결정할 수 있어요.</p>
          <p>최고를 통해 마스터하세요!</p>
        </div>
      </div>
    );
  }
}

export default Aside;

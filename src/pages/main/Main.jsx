import React from 'react';
import { useNavigate } from 'react-router-dom';
import portfolio from '../../img/portfolio.png';
import Team from '../../img/Team.png';
import PD from '../../img/PD.png';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  const handleboard = () => {
    navigate('/portfolio');
  };
  const handlepd = () => {
    navigate('/team');
  };
  const handlecontest = () => {
    navigate('/projectdesign');
  };

  return (
    <div className="maincontainer">
      <div className="mainportbutton" onClick={handleboard}>
        <div className="mainportbutton-title">Portfolio</div>
        <div className="mainportbutton-description">
          <p>회원들의 포트폴리오를 둘러보고</p>
          <p>팀원 제의 문의를 할 수 있어요</p>
        </div>
        <button className="mainportbutton-css">Protfolio 게시판 바로가기</button>
        <img src={portfolio} alt="Example" className="mainimgcontiner" />
      </div>
      <div className="mainteambutton" onClick={handlepd}>
        <div className="mainteambutton-title">Team</div>
        <div className="mainportbutton-description">
          <p>진행 중인 다양한 프로젝트를 둘러보고,</p>
          <p>함께 성장하며 능력을 발휘할 수 있어요</p>
        </div>
        <button className="mainteambutton-css">Team 게시판 바로가기</button>
        <img src={Team} alt="Example" className="mainimgcontiner" />
      </div>
      <div className="mainpdbutton" onClick={handlecontest}>
        <div className="mainpdbutton-title">Project Design</div>
        <div className="mainportbutton-description">
          <p>다양한 분야와의 협업 공고를 확인하고,</p>
          <p>새로운 경험과 관점을 통해 시야를 넓힐 수 있어요</p>
        </div>
        <button className="mainpdbutton-css">PD 게시판 바로가기</button>
        <img src={PD} alt="Example" className="mainimgcontiner" />
      </div>
    </div>
  );
}

export default Main;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/result.css';
import intp from '../assets/images/INTP.png';

interface UserInfo {
  name: string;
  birthDate: string;
  mbti: string;
  enneagram: string;
  address: string;
}

interface Answer {
  question: string;
  answer: string;
}

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // location.state가 없으면 info 페이지로 리다이렉트
  if (!location.state) {
    navigate('/info');
    return null;
  }

  const { userInfo, answers } = location.state as { 
    userInfo: UserInfo;
    answers: Answer[];
  };

  const profileImage = userInfo.mbti === 'INTP' ? intp : '';

  return (
    <div className="Result">
      <div className="Result_container">
        <h1>PROFILE</h1>
        
        <div className="Result_profile">
          <div className="Result_profile_left">
            <div className="Result_profile_image">
              <img src={profileImage} alt="프로필 이미지" />
            </div>
            <div className="Result_profile_info">
              <h2>{userInfo.name}</h2>
              <p>{userInfo.birthDate}</p>
              <p>{userInfo.mbti} {userInfo.enneagram}</p>
              <p>{userInfo.address}</p>
            </div>
          </div>
          
          <div className="Result_profile_right">
            {answers.map((item, index) => (
              <div key={index} className="Result_answer_item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="Result_actions">
          <button className="Result_share">결과지를 곧 넣어 저장해주세요</button>
          <button className="Result_retry" onClick={() => navigate('/info')}>
            <img src="/retry.svg" alt="다시하기" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/result.css';
import intp from '../assets/images/INTP.png';
import intj from '../assets/images/INTJ.png';
import infp from '../assets/images/INFP.png';
import infj from '../assets/images/INFJ.png';
import istp from '../assets/images/ISTP.png';
import istj from '../assets/images/ISTJ.png';
import isfp from '../assets/images/ISFP.png';
import isfj from '../assets/images/ISFJ.png';
import entp from '../assets/images/ENTP.png';
import entj from '../assets/images/ENTJ.png';
import enfp from '../assets/images/ENFP.png';
import enfj from '../assets/images/ENFJ.png';
import estp from '../assets/images/ESTP.png';
import estj from '../assets/images/ESTJ.png';
import esfp from '../assets/images/ESFP.png';
import esfj from '../assets/images/ESFJ.png';

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

const mbtiImages = {
  'INTP': intp,
  'INTJ': intj,
  'INFP': infp,
  'INFJ': infj,
  'ISTP': istp,
  'ISTJ': istj,
  'ISFP': isfp,
  'ISFJ': isfj,
  'ENTP': entp,
  'ENTJ': entj,
  'ENFP': enfp,
  'ENFJ': enfj,
  'ESTP': estp,
  'ESTJ': estj,
  'ESFP': esfp,
  'ESFJ': esfj,
};

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

  const profileImage = mbtiImages[userInfo.mbti as keyof typeof mbtiImages] || '';

  return (
    <div className="Result">
      <div className="Result_container">
        <h1>PROFILE</h1>
        
        <div className="Result_profile">
          <div className="Result_profile_left">
            <div className="Result_profile_image_container">
              <div className="Result_mbti_text">{userInfo.mbti}</div>
              <img
                className="Result_profile_image"
                src={profileImage}
                alt="프로필 이미지"
              />
            </div>
            <div className="Result_profile_info">
              <h2>{userInfo.name}</h2>
              <p>{userInfo.birthDate}</p>
              <p>{userInfo.mbti} {userInfo.enneagram}</p>
              <p>{userInfo.address}</p>
            </div>
          </div>
          
          <div className="Result_profile_right">
            <div className="Result_answers_left">
              {answers.slice(0, 5).map((item, index) => (
                <div key={index} className="Result_answer_item">
                  <h3 style={{ whiteSpace: 'pre-line' }}>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="Result_answers_right">
              {answers.slice(5).map((item, index) => (
                <div key={index} className="Result_answer_item">
                  <h3 style={{ whiteSpace: 'pre-line' }}>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
              <div className="Result_buttons">
                <button className="share_button" onClick={() => {}}>결과지 공유하기</button>
                <button className="retry_button" onClick={() => navigate('/info')}>
                  <img src="/src/assets/images/refresh-cw-01.png" alt="다시하기" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

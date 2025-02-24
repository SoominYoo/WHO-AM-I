import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
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
  major: string;
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
  const resultRef = useRef<HTMLDivElement>(null);  // 캡처할 요소 지정

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

  // 결과지 이미지 캡처 및 다운로드 함수
  const downloadImage = async () => {
    if (!resultRef.current) {
      console.error("❌ resultRef가 존재하지 않습니다. 캡처할 요소를 확인하세요.");
      return;
    }

    try {
      console.log("📸 캡처 시작...");
      await new Promise((resolve) => setTimeout(resolve, 500));

      const canvas = await html2canvas(resultRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#FFFFFF',
        logging: true,
      });

      console.log("📸 캡처 완료!");

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'whoami_result.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      console.log("✅ 이미지 다운로드 완료!");
    } catch (error) {
      console.error("❌ 이미지 다운로드 오류:", error);
    }
  };


  const highlightText = (text: string) => {
    const highlightKeywords = ["사랑의 언어", "수면", "취미", "내가 원하는 팀 분위기"];
    const regex = new RegExp(`(${highlightKeywords.join('|')})`, 'g');

    return text.split(regex).map((part, index) =>
      highlightKeywords.includes(part) ? (
        <span key={index} className="highlight">{part}</span> // 특정 단어 하이라이트
      ) : (
        <span key={index}>{part}</span> // 일반 텍스트
      )
    );
  };

  return (
    <div className="Result" ref={resultRef}>
      <div className="Result_container">
        <h1>PROFILE</h1>
        <div className="Result_profile">
          <div className="Result_profile_left">
            <div className="Result_profile_image_container">
              {/* <div className="Result_mbti_text">{userInfo.mbti}</div> */}
              <img
                className="Result_profile_image"
                src={profileImage}
                alt="프로필 이미지"
                crossOrigin="anonymous"
              />
            </div>
            <div className="Result_profile_info">
              <h2>{userInfo.name}</h2>
              <p>{userInfo.birthDate}</p>
              <p>
                <span className="highlight-mbti">{userInfo.mbti}</span> {userInfo.enneagram}
              </p>
              <p>
                <span className="highlight-major">{userInfo.major}</span>
              </p>
              <p>{userInfo.address}</p>
            </div>

          </div>

          <div className="Result_profile_right">
            <div className="Result_answers_left">
              {answers.slice(0, 5).map((item, index) => (
                <div key={index} className="Result_answer_item">
                  <h3 style={{ whiteSpace: 'pre-line' }}>{highlightText(item.question)}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="Result_answers_right">
              {answers.slice(5).map((item, index) => (
                <div key={index} className="Result_answer_item">
                  <h3 style={{ whiteSpace: 'pre-line' }}>{highlightText(item.question)}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
              <div className="Result_buttons">
                <button className="share_button" onClick={() => {
                  console.log("📸 '결과지 공유하기' 버튼 클릭됨");
                  downloadImage();
                }}>
                  결과지 공유하기
                </button>
                <button className="retry_button" onClick={() => navigate('/info')}>
                  <img src="/src/assets/images/refresh-cw-01.png" alt="다시하기" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="save_instruction">결과지를 꾹 눌러 저장해주세요</p> */}
      </div>
    </div>
  );
};

export default Result;

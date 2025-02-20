import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/survey.css';

interface UserInfo {
  name: string;
  birthDate: string;
  mbti: string;
  enneagram: string;
  address: string;
}

const questions = [
  {
    question: "당신의 사랑의 언어는??",
    options: [
      "A. 칭찬과 격려의 말",
      "B. 함께 시간을 보내기",
      "C. 선물 주고 받기",
      "D. 스킨십",
      "E. 도움과 지원"
    ]
  },
  {
    question: "팀모임을 가야하는 지금!\n나의 선택은?",
    options: [
      "A. 여유롭게 들어가고 내가 원하는 자리 앉을거야\n10분전에 가는 유형!",
      "B. 일단 도착만 하면 된거지!! 음료도 한 잔 사고~\n시간에 딱 맞춰서 가는 유형!"
    ]
  },
  {
    question: "나는 학교에서 밥먹을 때",
    options: [
      "A. 엄마 밥 먹고 싶어? 밥스",
      "B. 나랑 푸프 쓰러 갈래? 학관",
      "C. 나랑 탕수육 小자 나눠먹을래? 라운지",
      "D. 나랑 파스타 먹을래? 그레이스테이블"
    ]
  },
  {
    question: "나의 수면 스타일은?",
    options: [
      "A. 얼리버드",
      "B. 올빼미",
      "C. 매일 매일 달라요"
    ]
  },
  {
    question: "오석 앞 벤치에 앉아있다.\n날도 좋은데 지금 듣고 싶은 노래는?",
    options: [
      "A. 방구석 에스파가 되. K-POP",
      "B. ㄴr는 ㅈl금 감성에 취한ㄷr...어쿠스틱",
      "C. 롹앤롤 베이베 밴드",
      "D. 아버지! 정답을 알려줘 힙합",
      "E. 스테이 윗 미~ 시티팝"
    ]
  },
  {
    question: "오랜만에 쉬는 날!\n당신은 무엇을 하실 건가요?",
    options: [
      "A. 날도 좋으니, 친구와 바다를 보러 간다.",
      "B. 오랜만에 생긴 나만의 시간이니\n침대와 함께 데이트를 한다."
    ]
  },
  {
    question: "친구들이 생각하는 나는...?",
    options: [
      "A. 천진난만 강아지",
      "B. 차분한 고양이",
      "C. 인생 2회차 어르신",
      "D. 알고보면 겉바속촉"
    ]
  },
  {
    question: "친구와 다툰 후 해결 방법은?",
    options: [
      "A. 바로 이야기 해서 해결하는 스타일",
      "B. 시간을 두고 생각한 후 이야기하는 스타일"
    ]
  },
  {
    question: "나는 이런 취미가 좋아요~!",
    options: [
      "A. 오늘 개봉한 영화가 뭐지? 영화 보기",
      "B. 쇠질에 중독되버려~ 헬스하기",
      "C. 혼자만의 시간이 좋아!! 책읽기",
      "D. 피톤치드 사랑인 산책하기"
    ]
  },
  {
    question: "내가 좋아하는 영화 장르는",
    options: [
      "A. 핑크풍 가득한 로맨스",
      "B. 배꼽 찾으러 떠나는 코미디",
      "C. 난 제임스 본드가 꿈이야 액션",
      "D. 오싹한게 최고야 호러"
    ]
  },
  {
    question: "내가 원하는 팀 분위기는?",
    options: [
      "A. 목표 지향적인 팀",
      "B. 유쾌하고 가벼운 분위기인 팀",
      "C. 인정적 성장 중심 팀",
      "D. 함께 신앙적 성장하는 팀"
    ]
  }
];

const Survey: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = location.state?.userInfo as UserInfo;
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(new Array(questions.length).fill(''));

  const handleOptionSelect = (option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const surveyAnswers = questions.map((q, index) => ({
        question: q.question,
        answer: selectedAnswers[index]
      }));

      navigate('/result', {
        state: {
          userInfo,
          answers: surveyAnswers
        }
      });
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate('/info');
    }
  }, [userInfo, navigate]);

  if (!userInfo) return null;

  return (
    <div className="Survey">
      <div className="navigation-container">
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
      
      <div className="Survey_content">
        <h1>{questions[currentQuestionIndex].question}</h1>
        <div className="progress-text">
          {currentQuestionIndex + 1}/{questions.length}
        </div>
        
        <div className="Survey_options">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className={selectedAnswers[currentQuestionIndex] === option ? 'selected' : ''}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="Survey_next"
          onClick={handleNext}
          disabled={!selectedAnswers[currentQuestionIndex]}
        >
          {currentQuestionIndex === questions.length - 1 ? '결과 보기' : '다음으로 넘어가기'}
        </button>
      </div>
    </div>
  );
};

export default Survey;
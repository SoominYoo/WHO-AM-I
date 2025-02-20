import React from "react";
import { useNavigate } from "react-router-dom";
import Landing from "../assets/images/landing.png";
import "../styles/landing.css";

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate("/info");
    }

    //공유하기
    const handleShare = () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl)
            .then(() => alert("링크가 클립보드에 복사되었습니다!"))
            .catch((err) => console.error("클립보드 복사 실패:", err));
    }

    return (
        <div className="Landing">
            {/* 랜딩 이미지 */}
            <div className="Landing_img">
                <img src={Landing} alt="landing" />
            </div>

            {/* 버튼 (2개 컬럼 구조) */}
            <div className="Button">
                {/* 시작 버튼 */}
                <button className = "StartButton" onClick={handleNextStep}>시작하기</button>
                {/* 공유 버튼 */}
                <button className = "ShareButton" onClick={handleShare}>콘텐츠 공유하기</button>
            </div>

        </div>
    );
};

export default LandingPage;

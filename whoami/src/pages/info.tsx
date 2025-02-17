import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import pcMain from "../assets/images/pc_main.png";
import "../styles/info.css";

const InfoPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        studentId: "",
        birthDate: "",
        major: "",
        mbti: "",
        residence: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNextStep = () => {
        // 입력된 데이터를 로컬 스토리지에 저장
        localStorage.setItem('userInfo', JSON.stringify(formData));
        // Survey 페이지로 이동
        navigate('/survey');
    };

    return (
        <div className="Info">
            {/* 상단 이미지 */}
            <div className="Info_image">
                <img src={pcMain} alt="pc_main" />
            </div>

            {/* Input Form (2개 컬럼 구조) */}
            <div className="Info_form">
                <div>
                    <label htmlFor="Name">이름</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="이름을 입력하세요."
                    />
                </div>
                <div>
                    <label htmlFor="StudentId">학번</label>
                    <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        placeholder="ex) 22500649"
                    />
                </div>

                {/* 생년월일(달력 UI 적용) */}
                <div>
                    <label htmlFor="BirthDate">생년월일</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        className="w-full border rounded-md p-2"
                    />
                </div>

                {/* 학부선택 (드롭다운) */}
                <div>
                    <label htmlFor="Major">학과</label>
                    <select
                        name="major"
                        value={formData.major}
                        onChange={handleChange}
                        className="Info_form_select">

                        <option value="">학부를 선택하세요</option>
                        <option value="글로벌리더십학부">글로벌리더십학부</option>
                        <option value="국제어문학부">국제어문학부</option>
                        <option value="경영경제학부">경영경제학부</option>
                        <option value="커뮤니케이션학부">커뮤니케이션학부</option>
                        <option value="법학부">법학부</option>
                        <option value="상담심리사회복지학부">상담심리사회복지학부</option>
                        <option value="생명과학부">생명과학부</option>
                        <option value="ICT창업학부">ICT창업학부</option>
                        <option value="글로벌리더십학부">글로벌리더십학부</option>
                        <option value="전산전자공학부">전산전자공학부</option>
                        <option value="기계제어공학부">기계제어공학부</option>
                        <option value="공간환경시스템공학부">공간환경시스템공학부</option>
                        <option value="콘텐츠융합디자인학부">콘텐츠융합디자인학부</option>
                        <option value="AI융합교육원">AI융합교육원</option>
                        <option value="창의융합교육원">창의융합교육원</option>
                    </select>
                </div>

                {/* MBTI (드롭다운) */}
                <div>
                    <label htmlFor="MBTI">MBTI</label>
                    <select
                        name="mbti"
                        value={formData.mbti}
                        onChange={handleChange}
                        className="Info_form_select">

                        <option value="">MBTI를 선택하세요</option>
                        <option value="ISTJ">ISTJ</option>
                        <option value="ISFJ">ISFJ</option>
                        <option value="INFJ">INFJ</option>
                        <option value="INTJ">INTJ</option>
                        <option value="ISTP">ISTP</option>
                        <option value="ISFP">ISFP</option>
                        <option value="INFP">INFP</option>
                        <option value="INTP">INTP</option>
                        <option value="ESTP">ESTP</option>
                        <option value="ESFP">ESFP</option>
                        <option value="ENFP">ENFP</option>
                        <option value="ENTP">ENTP</option>
                        <option value="ESTJ">ESTJ</option>
                        <option value="ESFJ">ESFJ</option>
                        <option value="ENFJ">ENFJ</option>
                        <option value="ENTJ">ENTJ</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="Address">본가 거주지</label>
                    <input
                        type="text"
                        name="residence"
                        value={formData.residence}
                        onChange={handleChange}
                        placeholder="ex) 서울특별시 종로구"
                    />
                </div>
            </div>

            {/* 이동 버튼 */}
            <div className="Info_button">
                <button onClick={handleNextStep}>다음으로 넘어가기</button>
            </div>
        </div>
    );
};

export default InfoPage;
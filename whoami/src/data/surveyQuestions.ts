export interface SurveyQuestion {
    id: number;
    question: string;
    options: {
        label: string;
        text: string;
    }[];
}

export const surveyQuestions: SurveyQuestion[] = [
    {
        id: 1,
        question: "당신의 사랑의 언어는??",
        options: [
            { label: "A", text: "칭찬과 격려의 말" },
            { label: "B", text: "함께 시간을 보내기" },
            { label: "C", text: "선물 주고 받기" },
            { label: "D", text: "스킨십" },
            { label: "E", text: "도움과 지원" }
        ]
    },
    {
        id: 2,
        question: "팀모임을 가야하는 지금!\n나의 선택은?",
        options: [
            { label: "A", text: "여유롭게 들어가고 내가 원하는 자리 앉을거야\n10분전에 가는 유형!" },
            { label: "B", text: "일단 도착만 하면 된거지!! 음료도 한 잔 사고~\n시간에 딱 맞춰서 가는 유형!" }
        ]
    },
    {
        id: 3,
        question: "나는 학교에서 밥먹을 때",
        options: [
            { label: "A", text: "엄마 밥 먹고 싶어? 밥스" },
            { label: "B", text: "나랑 푸프 쓰러 갈래? 학관" },
            { label: "C", text: "나랑 탕수육 小자 나눠먹을래? 라운지" },
            { label: "D", text: "나랑 파스타 먹을래? 그레이스테이블" }
        ]
    },
    {
        id: 4,
        question: "나의 수면 스타일은?",
        options: [
            { label: "A", text: "얼리버드" },
            { label: "B", text: "올빼미" },
            { label: "C", text: "매일 매일 달라요" }
        ]
    },
    {
        id: 5,
        question: "오석 앞 벤치에 앉아있다.\n날도 좋은데 지금 듣고 싶은 노래는?",
        options: [
            { label: "A", text: "방구석 에스파가 되. K-POP" },
            { label: "B", text: "ㄴr는 ㅈl금 감성에 취한ㄷr...어쿠스틱" },
            { label: "C", text: "롹앤롤 베이베 밴드" },
            { label: "D", text: "아버지! 정답을 알려줘 힙합" },
            { label: "E", text: "스테이 윗 미~ 시티팝" }
        ]
    },
    {
        id: 6,
        question: "오랜만에 쉬는 날!\n당신은 무엇을 하실 건가요?",
        options: [
            { label: "A", text: "날도 좋으니, 친구와 바다를 보러 간다." },
            { label: "B", text: "오랜만에 생긴 나만의 시간이니\n침대와 함께 데이트를 한다." }
        ]
    },
    {
        id: 7,
        question: "친구들이 생각하는 나는...?",
        options: [
            { label: "A", text: "천진난만 강아지" },
            { label: "B", text: "차분한 고양이" },
            { label: "C", text: "인생 2회차 어르신" },
            { label: "D", text: "알고보면 겉바속촉" }
        ]
    },
    {
        id: 8,
        question: "친구와 다툰 후 해결 방법은?",
        options: [
            { label: "A", text: "바로 이야기 해서 해결하는 스타일" },
            { label: "B", text: "시간을 두고 생각한 후 이야기하는 스타일" }
        ]
    },
    {
        id: 9,
        question: "나는 이런 취미가 좋아요~!",
        options: [
            { label: "A", text: "오늘 개봉한 영화가 뭐지? 영화 보기" },
            { label: "B", text: "쇠질에 중독되버려~ 헬스하기" },
            { label: "C", text: "혼자만의 시간이 좋아!! 책읽기" },
            { label: "D", text: "피톤치드 사랑인 산책하기" }
        ]
    },
    {
        id: 10,
        question: "내가 좋아하는 영화 장르는",
        options: [
            { label: "A", text: "핑크풍 가득한 로맨스" },
            { label: "B", text: "배꼽 찾으러 떠나는 코미디" },
            { label: "C", text: "난 제임스 본드가 꿈이야 액션" },
            { label: "D", text: "오싹한게 최고야 호러" }
        ]
    },
    {
        id: 11,
        question: "내가 원하는 팀 분위기는?",
        options: [
            { label: "A", text: "목표 지향적인 팀" },
            { label: "B", text: "유쾌하고 가벼운 분위기인 팀" },
            { label: "C", text: "인정적 성장 중심 팀" },
            { label: "D", text: "함께 신앙적 성장하는 팀" }
        ]
    }
];

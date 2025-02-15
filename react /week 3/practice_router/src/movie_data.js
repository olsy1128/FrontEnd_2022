let movies = [
    {
        id: 1,
        title: "하울의 움직이는 성",
        director: "미야자키 하야오",
        category: "일본 애니메이션",
        detail:
        "아버지가 물려준 모자 기계를 지키는 수수한 소녀 소피. 전쟁도, 미녀의 심장을 노리는 마법사의 소문도 먼 세상 이야기일 뿐. 하지만 마녀의 저주로 할머니가 되면서, 소피의 인생이 회전목마처럼 힘차게 움직이기 시작한다.",
    },
    {
        id: 2,
        title: "보스 베이비2",
        director: "톰 맥그라스",
        category: "미국 애니메이션",
        detail:
        "각자의 삶을 살아가던 두 형제, 테드와 팀. 가족만 아는 비밀을 안고 이번엔 팀의 딸 티나와 힘을 합친다. 비열한 악당의 음모를 무너뜨리기 위해.",
    },
    {
        id: 3,
        title: "너의 이름은",
        director: "신카이 마코토",
        category: "일본 애니메이션",
        detail:
        "도쿄의 잘생긴 남자로 살아볼 순 없을까? 따분한 시골 생활에 질려 도시를 동경하는 여고생. 어느 날, 그 소원이 실제로 이루어진다. 도쿄의 남고생과 이따금 몸이 뒤바뀌는 것. 꿈결 같은 둘의 인연은 또 다른 운명을 부르기 시작한다.",
    },
    {
        id: 4,
        title: "아이 필 프리티",
        director: "마크 실버스틴",
        category: "미국 영화",
        detail:
        "난 왜 예쁘지 않은 걸까. 외모가 불만인 그녀, 스피닝 수업에서 아찔한 사고를 당한다. 깨어나보니 확 뒤집힌 그녀의 인생! 커리어도, 연애도 이젠 핑크빛이다!",
    },
    {
        id: 5,
        title: "트루먼쇼",
        director: "피터 위어",
        category: "미국 영화",
        detail:
        "한 사람의 일거수일투족이 24시간 생방송 되는 '트루먼 쇼'의 주인공 트루먼 버뱅크. 엄청난 인기를 끌고 있는 이 프로그램의 주인공인 자신만 이 사실을 전혀 모르고 있다. 모든 것이 방송이라는 것이 밝혀지면 그는 과연 어떤 선택을 할까.",
    },
    {
        id: 6,
        title: "아메리칸셰프",
        director: "존 패브로",
        category: "미국 영화",
        detail:
        "창의력이 지글지글 끓어오르는 셰프. 똑같은 메뉴만 고집하는 주인과 지지고 볶은 후 허름한 푸드트럭을 차리면서 맛깔나는 좌충우돌 여정에 오른다. 배고플 땐 보지 말 것!",
    },
    {
        id: 7,
        title: "인턴",
        director: "낸시 마이어스",
        category: "미국 영화",
        detail:
        "뜨거운 열정으로 단기간에 회사를 키워낸 30대 열혈 여성 CEO. 사별과 은퇴를 겪고 공허한 일상을 보내다가 새내기로 입사한 70세 남성 인턴. 문제없을까, 이 어색한 조합.",
    },
    {
        id: 8,
        title: "월요일이 사라졌다",
        director: "토미 비르콜리",
        category: "미국 영화",
        detail:
        "우리는 하나다! 엄격한 산아제한 정책을 시행하는 미래. 정부의 감시를 피해, 일곱 쌍둥이가 한 사람처럼 산다. 들킨 걸까? 사라진 자매 하나를 찾아, 여섯이 힘을 합친다.",
    },
];

//movies 전체 데이터 조회
export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find((movie) => movie.id === id);
}
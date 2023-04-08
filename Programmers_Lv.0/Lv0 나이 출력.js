// 문제 설명
// 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 0 < age ≤ 120
// 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.
function solution(age) {
    const today = new Date();
    const years = today.getFullYear();
    return years - age
    // return new Date().getFullYear() - age
}

// Date 객체 정리
// new Date() - 현재 날짜와 시간을 가지는 객체를 리턴합니다.
// getFullYear() - Date 객체의 년도를 가져옵니다.
// getMonth() - Date 객체의 월 정보를 가져옵니다. 1월은 0으로 표현됨을 주의해야 합니다. (0~11)
// getDate() - Date 객체의 일자 정보를 가져옵니다. (0~31)
// getDay() - Date 객체의 요일 정보를 가져옵니다.(0~6) (일요일이 0, 월요일이1, 토요일이 6으로 표현됩니다.)
// getHours() - Date 객체의 시간을 가져옵니다. (0~23)
// getMinutes() - Date 객체의 분 정보를 가져옵니다. (0~59)
// getSeconds() - Date 객체의 초 정보를 가져옵니다. (0~59)
// getMilliseconds() - Date 객체의 밀리초 정보를 가져옵니다. (0~999)

// !문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120820
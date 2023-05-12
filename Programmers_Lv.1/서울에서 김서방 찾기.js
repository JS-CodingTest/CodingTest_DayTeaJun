// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}
// indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환

// 다른 풀이
const solution = (arr) => `김서방은 ${arr.findIndex(s => s === 'Kim')}에 있다`;
// findIndex 메소드를 사용한 첫 번째 코드는 새로운 ES6+ 문법을 활용한 현대적인 방식으로 구현
// findIndex 메소드는 콜백 함수를 이용하여 배열에서 첫 번째로 발견되는 요소의 인덱스를 반환

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12919

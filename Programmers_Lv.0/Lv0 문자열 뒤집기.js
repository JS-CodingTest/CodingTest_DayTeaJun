// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000

// 방법 1 array 메서드
function solution(my_string) {
    return my_string.split('').reverse().join('')
}
// split('')으로 문자열을 새 배열로 반환
// reverse()로 배열 순서를 반전
// join()은 모든 배열의 요소를 문자열로 결합하기

// 방법 2 
function solution(my_string) {
    var answer = [...my_string].reverse().join('');
    return answer;
}
// [...my_string]는 my_string을 건드리지 않고, 객체 혹은 배열을 펼칠 수 있다.

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120822
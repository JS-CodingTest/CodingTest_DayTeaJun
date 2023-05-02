// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000

function solution(n) {
    return n.toString().split('').reduce((ac, cv) => (ac + parseInt(cv)),0)
}
// 받은 숫자형을 문자열로 만듦(배열로 만들기 위함) 각 문자열의 요소를 나누고, reduce를 통해 누산하면서, 각 문자열을 숫자형으로 바꿔서 누산하여 계산후 반환.

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120906
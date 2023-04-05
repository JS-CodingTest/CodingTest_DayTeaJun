// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function solution(n) {
    const odd_num = []
    for (let i = 0; i <= n; i++){
        if (i % 2 !== 0){
            odd_num.push(i);
        }
    }
    return odd_num
}

// fill(), map(), filter() 함수 이용
function solution(n) {
    return Array(n).fill(1).map((v, i) => v + i).filter(v => v % 2 !== 0);
}
// 각 메서드 설명
// 1. Array(n).fill(1) : Array() 함수는 n개의 요소가 담긴 배열을 만든 후, fill()로 value(여기서는 1) 값을 채움
// 2. map((v, i) => v + i) : map()는 배열의 각 요소에 대해 주어진 함수(여기서는 각 요소에 인덱스를 더함)를 실행하고, 그 결과를 새로운 배열로 반환([1, ~ n])
// 3. filter(v => v % 2 !== 0) : filter()는 기존의 배열에서 특정 조건(여기서는 v % 2 !== 0 즉, 짝수가 아닌 수, 홀수)을 만족하는 요소들만 추출하여 새로운 배열을 만듦

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120813
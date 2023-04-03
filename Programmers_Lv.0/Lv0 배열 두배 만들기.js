// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 1 ≤ numbers의 길이 ≤ 1,000

// for문 이용한 방법
function solution(numbers) {
    let answer = [];
    
    for (let i = 0; i < numbers.length; i ++){ // numbers.length 배열의 길이만큼 반복
        answer.push(numbers[i] * 2); // numbers[i] 배열요소 0부터 배열의 마지막 요소까지 *2를 하여 요소추가(push)
    }
    return answer;
}

// reduce 이용한 방법
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}
// reduce함수는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환

// map 이용한 방법
function solution(numbers) {
    return numbers.map((number) => number * 2) // numbers의 요소를 각 number에 짝지어서 그 값에 *2를 하고 반환
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120809
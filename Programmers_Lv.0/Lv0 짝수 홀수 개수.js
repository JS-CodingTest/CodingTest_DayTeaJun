// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000

function solution(num_list) {
    // const result = new Array();
    const result = [];
    let even = 0;
    let odd = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }
    }
    result.push(even, odd)
    return result
}

function solution(num_list) {
    return [
        num_list.filter((num) => num % 2 === 0).length,
        num_list.filter((num) => num % 2 === 1).length,
    ];
}

// !문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120824
// 문제 설명
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 1,000
// 0 ≤ num_list의 원소 ≤ 1,000

// 방법 1
function solution(num_list) {
    return num_list.reverse()
}
// reverse() 배열 순서를 전부 반대로 교체해 준다.

// 방법 2
function solution(num_list) {
    var answer = [];
    var j = num_list.length
    for (var i = 1; i <= j; i++) {
        answer.push(num_list[j - i])
    }
    return answer;
}

// !문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120821
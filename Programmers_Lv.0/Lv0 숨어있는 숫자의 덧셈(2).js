// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// 1 ≤ my_string 안의 자연수 ≤ 1000
// 연속된 수는 하나의 숫자로 간주합니다.
// 000123과 같이 0이 선행하는 경우는 없습니다.
// 문자열에 자연수가 없는 경우 0을 return 해주세요.
function solution(my_string) {
    return (my_string.match(/\d+/g)??[])
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}
// match로 true인 값을 반환하는데, 정규식으로 반환하고, reduce로 계산

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864
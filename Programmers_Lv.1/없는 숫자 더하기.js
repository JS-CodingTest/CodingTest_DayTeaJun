// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// 풀이 방법 1
function solution(numbers) {
  let sum = (9 * (9 + 1)) / 2; // 45
  return sum - numbers.reduce((a, c) => a + c, 0);
}
// 단순히 0부터 9까지 더하는 것이므로 등차수열을 이용

// 풀이 방법 2
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
// includes 메서드로 numbers에 i 값이 없을 경우 answer에 계속 더함

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/86051

// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
// 제곱근을 판별하여 정수일 경우 -를 해주고 정수가 아닐경우 +를 해준다.
// 제곱근이 정수인 경우 약수의 개수가 1을 포함하여 홀수로 되기 때문

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77884

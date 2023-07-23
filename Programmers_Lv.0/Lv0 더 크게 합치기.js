// 문제 설명
// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

// 제한사항
// 1 ≤ a, b < 10,000

// 풀이 방법 1
function solution(a, b) {
  return a + "" + b >= b + "" + a ? parseInt(a + "" + b) : parseInt(b + "" + a);
}

// 풀이 방법 2
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
// Math.max 함수는 입력 받은 숫자 중 제일 큰 숫자를 반환한다.

// 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181939

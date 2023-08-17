// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}
// 유클리드 호제법의 기본 원리는 num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다는 것이다.
// r이 0이라면, 그 때의 num2가 최대공약수이다.
// 최소공배수는 위에서 구했던 GCD(최대 공약수)를 응용해서 구할 수 있다.
// 두 수 num1, num2의 최대공약수를 gcd라고 했을 때, 최소공배수 lcm = gcd * (num1/gcd) * (num2/gcd) 이다.
// num1 * num2 = gcd * lcm 과 같다는 원리를 이용하는 것이다.
// lcm = (num1*num2) / gcd 이다.

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 계산 결과 1,000 보다 작거나 같은 수에 대해서는 전부 언젠가 1에 도달한다는 것이 알려져 있습니다.

// 임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때 초기값이 n인 콜라츠 수열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ n ≤ 1,000

function solution(n) {
  const result = [];
  while (n !== 1) {
    result.push(n);
    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 2 === 1) {
      n = n * 3 + 1;
    }
  }
  result.push(n);
  return result;
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181919

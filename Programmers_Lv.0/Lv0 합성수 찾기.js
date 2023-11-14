// 문제 설명
// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function solution(n) {
  let answer = 0;
  for (i = 1; i <= n; i++) {
    let counter = 0;
    for (j = 1; j <= i; j++) {
      if (i % j == 0) {
        counter += 1;
      }
    }
    if (counter > 2) {
      answer += 1;
    }
  }
  return answer;
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120846

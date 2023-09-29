// 문제 설명
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ numbers의 길이 ≤ 20
// direction은 "left" 와 "right" 둘 중 하나입니다.

function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers[numbers.length - 1]);
    numbers.pop();
  } else if (direction === "left") {
    numbers.push(numbers[0]);
    numbers.shift();
  }
  return numbers;
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120844

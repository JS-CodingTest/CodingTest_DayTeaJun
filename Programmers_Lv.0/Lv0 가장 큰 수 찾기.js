// 문제 설명
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array 원소 ≤ 1,000
// array에 중복된 숫자는 없습니다.

// 풀이 방법 1
function solution(array) {
  const com = parseInt(
    [...array]
      .sort((a, b) => b - a)
      .slice(0, 1)
      .join()
  );
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === com) {
      result.push(array[i]);
      result.push(i);
    }
  }
  return result;
}
// sort 메서드는 원본을 바꾼다.

// 풀이 방법 2
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120899

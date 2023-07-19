// 문제 설명
// 아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 100
// 1 ≤ arr의 원소 ≤ 100

// 풀이 방법 1
function solution(arr) {
  const result = [];
  const arrleng = arr.reduce((a, c) => a + c, 0);
  for (let i = 0; i < arrleng; i++) {
    for (let j = 0; j < arr[i]; j++) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 풀이 방법 2
function solution(arr) {
  return arr.reduce((list, num) => [...list, ...new Array(num).fill(num)], []);
}
// reduce 메소드를 이용하여 새 배열을 num만큼 만들고 fill메소드를 이용하여 채운뒤 스프레드(...)를 이용하여 다 채운다.

// 풀이 방법 3
function solution(arr) {
  return arr.reduce((a, c) => a.concat(Array(c).fill(c)), []);
}
// concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환함.

// 풀이 방법 4
const solution = (a) => a.map((v) => Array(v).fill(v)).flat();
// map 메서드를 이용하여 새 배열에 v값을 다채운뒤 flat 을 이용하여 안의 배열을 전부 split('')한 것 처럼 해줌, 하위 배열을 이어붙인 새로운 배열.

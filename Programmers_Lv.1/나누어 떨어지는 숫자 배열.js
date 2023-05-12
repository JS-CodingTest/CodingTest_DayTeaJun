// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
function solution(arr, divisor) {
  return arr
    .map((el) => (el % divisor === 0 ? el : undefined))
    .filter((el) => el !== undefined)
    .sort((a, b) => a - b).length === 0
    ? [-1]
    : arr
        .map((el) => (el % divisor === 0 ? el : undefined))
        .filter((el) => el !== undefined)
        .sort((a, b) => a - b);
}
// 삼항연산자에서 배열 === [] 으로 비교하여 리턴할려 했지만 false가 나왔다.
// 이유는 객체는 ‘참조에 의해(by reference)’ 저장되고 복사되기 때문인데,
// 변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장되기 때문이다.
// 그래서 빈배열인지 확인하는 것을 length로 판단하여 배열.length === 0 으로 비교하였음.

// 어떻게든 return 한줄로 작성할려 했는데 내가 쓴 코드는 가독성이 뛰어나지 못하다.
// 그리고 필요없는 연산이 많았다.
// 그래서 아래의 다른 풀이를 보면서 반성한다.

// 다른 풀이
function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}
// 처음부터 filter하나만 사용하여 변수에 저장하고
// return 시에 length를 이용하여 비교한뒤 값이 빈 값이 아니라면 정렬해준다.
// 이 방법이 좋은 방법이다.

// !문제 설명 : https://school.programmers.co.kr/learn/courses/30/lessons/12910

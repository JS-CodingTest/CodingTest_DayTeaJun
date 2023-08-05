// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// 풀이 방법 1
function solution(s) {
  return [...s]
    .map((v) => parseInt(v))
    .join("")
    .includes("NaN")
    ? false
    : (s.length === 4 || s.length === 6) &&
      ![...s]
        .map((v) => parseInt(v))
        .join("")
        .includes("NaN")
    ? true
    : false;
}

// 풀이 방법 2
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;

  return regex.test(s);
}
// 정규식
// ^: 입력의 시작을 나타냅니다.
// \d: 숫자(digit)에 대응합니다.
// {6}: 바로 앞에 나온 패턴인 숫자(\d)가 정확히 6번 반복되어야 합니다.
// $: 입력의 끝을 나타냅니다.

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12918

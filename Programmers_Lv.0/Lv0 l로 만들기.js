// 문제 설명
// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ myString ≤ 100,000
// myString은 알파벳 소문자로 이루어진 문자열입니다.

function solution(myString) {
  return myString.replace(/[a-k]/g, "l");
}
// replaceAll 을 안해도 되는 이유는 정규식에서 /g (전역 플래그)를 사용했기 때문에, 문자열 전체에서 일치하는 패턴을 변경한다.

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181834

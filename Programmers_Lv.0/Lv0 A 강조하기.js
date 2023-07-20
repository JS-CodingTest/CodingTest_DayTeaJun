// 문제 설명
// 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

// 제한사항
// 1 ≤ myString의 길이 ≤ 20
// myString은 알파벳으로 이루어진 문자열입니다.

// 풀이 방법 1
function solution(myString) {
  return myString
    .split("")
    .map((el) =>
      el === "a" || el === "A" ? el.toUpperCase() : el.toLowerCase()
    )
    .join("");
}

// 풀이 방법 2
function solution(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}
// 이건 좀 많이 참신했다.

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/181874

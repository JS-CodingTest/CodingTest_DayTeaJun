// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
  const result = [];
  const arrayS = [...s];
  for (let i = 0; i <= arrayS.length; i++) {
    if (arrayS.length % 2 === 1 && i === Math.floor(arrayS.length / 2)) {
      result.push(arrayS[i]);
    } else if (arrayS.length % 2 === 0 && i === Math.floor(arrayS.length / 2)) {
      result.push(arrayS[i - 1]);
      result.push(arrayS[i]);
    }
  }
  return result.join("");
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12903

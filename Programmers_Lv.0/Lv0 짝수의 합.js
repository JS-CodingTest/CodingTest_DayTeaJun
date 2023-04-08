// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000
function solution(n) {
    let num = 0;
    for (let i = 0; i <= n; i++){
        if (i % 2 === 0){
            num += i
        }
    }
    return num
}

// 반복 횟수 줄이기
function solution(n) {
    var answer = 0;

    for(let i=2 ; i<=n ; i+=2)
        answer += i;

    return answer;
}

// 메소드채이닝으로 array 메서드 사용
function solution(n) {
  return Array(n)
    .fill() // n만큼 undefined로 채움
    .map((_, i) => i + 1) // 위에서 채운만큼 인덱스값을 더함 [1,2,3,4,5,6,...n]
    .filter((v) => v % 2 === 0) // 각 값에 true인 짝수값만 남김
    .reduce((acc, cur) => acc + cur, 0); // 인덱스별로 값을 계속해서 더함
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120831
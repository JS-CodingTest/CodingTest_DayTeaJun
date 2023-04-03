// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000

function cal_gcd(a,b) { // 최대 공약수 계산 함수
    return a % b === 0 ? b : cal_gcd(b, a % b) // 아래 주석 참고
}
function solution(numer1, denom1, numer2, denom2) {    
    let numer = (numer1 * denom2) + (numer2 * denom1); // 분자
    let denom = denom1 * denom2; // 분모
    let gcd = cal_gcd(numer,denom); // 최대 공약수 계산
    
    return [numer / gcd, denom / gcd] // 최대 공약수를 각 분자, 분모에 나눈 후, 배열에 넣기
}

// cal_gcd(a,b) 함수 설명
// 최대 공약수 구하기
// 1. a, b를 서로 나눈다. 만약 나누어진다면 b가 최대 공약수
// 2. 1.에서 나누어지지 않는다면, b를 a % b(a를 b로 나눈 나머지)로 다시 나눈다
// 3. 2.에서 나누어진다면 a % b가 최대 공약수이다. 나누어지지 않았다면 2.를 반복한다.

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120808
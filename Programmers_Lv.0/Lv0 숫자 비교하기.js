// 문제 설명
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ num1 ≤ 10,000
// 0 ≤ num2 ≤ 10,000

function solution(num1, num2) {
    return num1 === num2 ? 1 : -1;
}

// *TIP 삼항 연산자 사용
// 조건문(num1 === num2, '==='은 값의 값과 종류(Data Type)가 모두 같은지 비교),
// 물음표(?) : 조건문이 참일 경우 실행할 표현식,
// 콜론(:) : 조건문이 거짓일 경우 실행할 표현식

// !문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120807

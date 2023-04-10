// 문제 설명
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180
// 제한사항
// 0 < angle ≤ 180
// angle은 정수입니다.
// 삼항연산자 사용
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// filter 메서드에 length 속성을 사용
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle >= x).length;
}
// 정말 참신한 답안
// filter 메서드로 각 배열의 값이 angle>=x 가 true가 될때 반환되는 배열의 길이를 리턴한다.

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120829
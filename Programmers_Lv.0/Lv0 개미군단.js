// 문제 설명
// 개미 군단이 사냥을 나가려고 합니다. 개미군단은 사냥감의 체력에 딱 맞는 병력을 데리고 나가려고 합니다. 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력을 가지고 있습니다. 예를 들어 체력 23의 여치를 사냥하려고 할 때, 일개미 23마리를 데리고 가도 되지만, 장군개미 네 마리와 병정개미 한 마리를 데리고 간다면 더 적은 병력으로 사냥할 수 있습니다. 사냥감의 체력 hp가 매개변수로 주어질 때, 사냥감의 체력에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// hp는 자연수입니다.
// 0 ≤ hp ≤ 1000

// 풀이 방법 1
function solution(hp) {
  let count = 0;
  while (hp > 0) {
    if (hp < 3) {
      hp = hp - 1;
      count = count + 1;
    } else if (hp < 5) {
      hp = hp - 3;
      count = count + 1;
    } else if (hp >= 5) {
      hp = hp - 5;
      count = count + 1;
    }
  }
  return count;
}

// 풀이 방법 2
function solution(hp) {
  const 장군개미 = Math.floor(hp / 5);
  const 병정개미 = Math.floor((hp - 장군개미 * 5) / 3);
  const 일개미 = hp - (장군개미 * 5 + 병정개미 * 3);
  return 장군개미 + 병정개미 + 일개미;
}

// !문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120837

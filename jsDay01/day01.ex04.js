//  자바스크립트 연산자와 자바의 연산자는 거의 동일하다.
//  =, ==, === 이렇게 세개가 다르다
// = : 자바에선 대입연산자
// == : 자바에선 '같다'는 의미의 부등호 
// != : 틀리다의 부정호
// === : 부등호
// !== : 틀리느의 부정호

console.log(100 == '100')  // true
console.log(100 === '100') //false

var name = '홍길동';
var name = '김길동';
// var로 변수를 선언 할 때는 기존 변수와 같은 식별자로 선언이 가능하다.
// 변수의 scope가 함수단위이다.

let name2 = '박길동';
// let name2 = '최길동';
// let으로 변수를 선언하면 같은 식별자를 사용 할 수 가 없다.
// 변수의 scope가 블럭단위이다.
console.log('name = ', name);
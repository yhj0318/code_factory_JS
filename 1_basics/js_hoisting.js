/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('----------');

// console.log(name);
// var name = '코드팩토리';
// console.log(name);

/**
 * Hoisting은 무언인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */
var name;
console.log(name);
name = '코드팩토리';
console.log(name);

/**
 * let과 const도 hoisting이 발생하여 초기화되지 않았다고 오류가 뜸 initialization
 * let과 const를 사용하면 초기화되지 않은 변수의 출력을 막을 수 있다.
 */
console.log(yuJin);
const yuJin = '안유진';
// 변수명을 선언하지 않았다면 정의되지 않았다고 오류가 뜸 not defined
/**
 * 타입 변환
 * Type Conversion
 * 
 * )1 명시적
 * )2 암묵적
 */
let age = 23;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적 실무에서는 헷갈리니까 타입에 맞게 작성
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

/**
 * 명시적 변환
 */
console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof + '1', +'1');

/**
 * Boolean 타입으로 변환
 * !는 not !!는 yes
 */
console.log(!!'x');
// String타입은 값이 들어있으면 무조건 true를 출력
console.log(!!'');
// String타입에 아무런 값이 없기에 false를 출력
console.log(!!0);
console.log(!!'0');
// 마찬가지로 값이 있기에 true
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
// object는 무조건 true
console.log(!![]);
// array도 무조건 true

/**
 * false가 나올 경우
 * 1) 아무 글자도 없는 String은 false 출력
 * 2) 값이 없는 경우 false 출력
 * 3) 0일때 false를 출력
 * 
 * 모두 false를 반환한다.
 */
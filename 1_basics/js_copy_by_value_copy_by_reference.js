/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by referece다
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('-----------------');
console.log(original);
console.log(clone);

let originalObj =
{
    name : '안유진',
    group : '아이브',
};
let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);

console.log('---------------');

originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

originalObj =
{
    name : '최지호',
    group : '코드팩토리',
};
cloneObj =
{
    name : '최지호',
    group : '코드팩토리',
};
console.log(originalObj === cloneObj);

const yuJin1 =
{
    name : '안유진',
    group : '아이브',
};
const yuJin2 = yuJin1;
const yuJin3 =
{
    name : '안유진',
    group : '아이브',
};

// true
console.log(yuJin1 === yuJin2);
// false
console.log(yuJin1 === yuJin3);
// false
console.log(yuJin2 === yuJin3);

/**
 * Spread Operator
 */
const yuJin4 =
{
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);

const yuJin5 =
{
    year : 2003,
    ...yuJin3,
};
console.log(yuJin5);

// 순서가 중요함 이미 name이 있기에 스프레드 위에 쓰면 안됌
const yuJin6 =
{
    name : '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);

// 스프레드 밑에 name을 쓰자 바뀌는걸 볼 수 있음
const yuJin7 =
{
    ...yuJin3,
    name : '코드팩토리',
};
console.log(yuJin7);

// number타입도 마찬가지이다.
const numbers = [1, 3, 5];
const numbers2 =
[
    ...numbers,
    10,
];
console.log(numbers2);
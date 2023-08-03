/**
 * Immutable Object
 */
const yuJin =
{
    name : '안유진',
    year : 2003,

    get age()
    {
        return new Date().getFullYear() - this.year;
    },

    set age(age)
    {
        this.year = new Date().getFullYear() - age;
    }
};

console.log(yuJin);

/**
 * Extensible
 * 확장이 가능한지 여부를 설정할 수 있는 것
 */
// object의 기본 extensible은 true
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';

console.log(yuJin);

// extensible을 false로 바꿈
Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브';
// groupName이 추가가 안 됌
console.log(yuJin);

// 삭제는 가능하다
delete yuJin['position'];
console.log(yuJin);

/**
 * Seal
 * 붙어있는지 아닌지
 */

const yuJin2 =
{
    name : '안유진',
    year : 2003,

    get age()
    {
        return new Date().getFullYear() - this.year;
    },

    set age(age)
    {
        this.year = new Date().getFullYear() - age;
    }
};
console.log(yuJin2);

// 기본값이 false 봉인이 돼있냐 안돼있냐 이기에 기본값이 false
console.log(Object.isSealed(yuJin2));

// 봉인하는 방법
Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

// 추가가 안됌
yuJin2['groupName'] = '아이브';
console.log(yuJin2);

// 삭제도 안됌 에러가 나타나지 않음
delete yuJin2['name'];
console.log(yuJin2);

// 프로퍼티 애트리뷰트를 바꿀 수 있는지 확인
// seal을 하는 작업은 configurable을 false로 만든다
Object.defineProperty(yuJin2, 'name',
{
    writable : false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 =
{
    name : '안유진',
    year : 2003,

    get age()
    {
        return new Date().getFullYear() - this.year;
    },

    set age(age)
    {
        this.year = new Date().getFullYear() - age;
    }
};

// 기본값은 false
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3);

delete yuJin3['name'];
console.log(yuJin3);

// 변경이 불가능
/* Object.defineProperty(yuJin3, 'name',
{
    value : '코드팩토리',
});
 */
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 =
{
    name : '안유진',
    year : 2003,
    wonYoung :
    {
        name : '장원영',
        year : 2002,
    },
};
Object.freeze(yuJin4);

// 상위 object를 freeze하더라도 하위 object는 freeze되지 않음
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));
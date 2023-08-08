/**
 * Prototype
 */
const testObj = {};

// __proto__ 모든 객체에 존재하는 프로퍼티다.
// class 강의에서 배울때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year)
{
    this.name = name;
    this.year = year;
}

console.log(IdolModel.prototype);

console.dir
(
    IdolModel.prototype,
    {
        showHidden : true,
    }
);

// circular reference
console.log(IdolModel.prototype.constructor === IdolModel);
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);

const yuJin = new IdolModel('안유진', 2003);

console.log(yuJin.__proto__);
console.log(yuJin.__proto__ === IdolModel.prototype);

console.log(testObj.__proto__ === Object.prototype);

console.log(IdolModel.__proto__ === Function.prototype);
// 최상위 객체가 Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(IdolModel.prototype.__proto__ === Object.prototype);

console.log(yuJin.toString());
console.log(Object.prototype.toString());

// 유용한점
function IdolModel2(name, year)
{
    this.name = name;
    this.year = year;

    this.sayHello = function()
    {
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
// false라 나오는 이유
// new를 이용해 생성을 하면 객체에 고유한 값이 배정되기에 서로 다름 따라서 메모리 공간 낭비한다.
console.log(yuJin2.sayHello() === wonYoung2.sayHello());
// 상속을 받은 프로퍼티인지 객체가 가지고있는 고유한 프로퍼티인지 판단하는 함수
console.log(yuJin2.hasOwnProperty('sayHello'));

function IdolModel3(name, year)
{
    this.name = name;
    this.year = year;
}

// prototype에 sayHello를 저장을 하고 공유한다.
// 메모리공간을 효율적으로 사용할 수 있다.
IdolModel3.prototype.sayHello = function()
{
    return `${this.name}이 인사를 합니다.`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2002);

console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());

console.log(yuJin3.sayHello === wonYoung3.sayHello);

// 상속받은 프로퍼티라는걸 유추할 수 있음
console.log(yuJin3.hasOwnProperty('sayHello'));

// 바로 선언
IdolModel3.sayStaticHello = function()
{
    return '안녕하세요 저는 static method 입니다.';
}
console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 */
function IdolModel4(name, year)
{
    this.name = name;
    this.year = year;

    this.sayHello = function()
    {
        return '안녕하세요 저는 인스턴스 메서드입니다!';
    }
}

IdolModel4.prototype.sayHello = function()
{
    return '안녕하세요 저는 prototype 메서드입니다!';
}
const yuJin4 = new IdolModel4('안유진', 2003);

// 프로퍼티 셰도잉 - class에서 override
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */
function IdolModel(name, year)
{
    this.name = name;
    this.year = year;
}

IdolModel.prototype.sayHello = function()
{
    return`${this.name} 인사를 합니다.`;
}

function FemaleIdolModel(name, year)
{
    this.name = name;
    this.year = year;

    this.dance = function()
    {
        return `${this.name}가 춤을 춥니다.`;
    }
}

const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2003);

// getPrototypeOf를 하면 proto값을 불러온다는 뜻이다
console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype);
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype);

console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// ray에는 sayHello를 선언하지 않음
// console.log(ray.sayHello());

// ray의 프로토타입을 IdolModel의 프로토타입으로 바꿈
Object.setPrototypeOf(ray, IdolModel.prototype);
// 변경했기에 실행이 가능하다
console.log(ray.sayHello());

// 상속받은 constructor 프로퍼티도 그대로 상속됌
console.log(ray.constructor === FemaleIdolModel);
console.log(ray.constructor === IdolModel);
console.log(gaEul.constructor === IdolModel);
// 변경했기에 false
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype);
// IdolModel로 바꿨기에 true
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype);
// FemaleIdolModel과의 연결만 끊김
console.log(FemaleIdolModel.prototype === IdolModel.prototype);

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서', 2007);
// ray객체를 직접 변경했을 때 FemaleIdolModel과 다르다는 것과 다르게 true가 나온다.

console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype);
console.log(FemaleIdolModel.prototype === IdolModel.prototype);
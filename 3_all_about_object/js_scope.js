/**
 * Scope
 */
var numberOne = 20;

function levelOne()
{
    console.log(numberOne);
}

// levelOne();

function levelOne()
{
    var numberOne = 40;

    console.log(numberOne);
}

levelOne();

console.log(numberOne);

// 모든 선언은 가장 가까운 스코프를 활용을 한다 numberOne, numberTwo
function levelOne()
{
    var numberOne = 40;

    function levelTwo()
    {
        var numberTwo = 99;

        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);       
    }
    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();
console.log(numberOne);
// 함수에 선언된 지역변수이기에 안됌
// console.log(numberTwo);

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 
 * 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;

function functionOne()
{
    var numberThree = 100;

    functionTwo();
}

function functionTwo()
{
    console.log(numberThree);
}

functionOne();

var i = 999;

// var로 선언된 변수는 함수에서만 scope를 생성함
// i의 값이 10으로 나옴
for(var i = 0; i < 10; i++)
{
    console.log(i);
}
console.log(`i in global scope : ${i}`);

i = 999;
// block level scope
// let으로 선언된 변수는 함수가 아니라 반복문에서도 scope를 생성함
// scope가 999로 나옴
for(let i = 0; i < 10; i++)
{
    console.log(i);
}
console.log(`i in global scope : ${i}`);

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다. 
 */
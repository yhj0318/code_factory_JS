/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate()
{
    console.log((2 * 10 / 2 % 3).toString());   
}

calculate();

function calculate(number)
{
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에대한 정의를 Parameter라고한다.
 * 
 * 실제 입력하는 값은 aregument라고 한다.
 */
calculate(4);
calculate(5);

function multuply(x, y)
{
    console.log(x * y);
}

multuply(2, 4);

function multuply(x, y = 10)
{
    console.log(x * y);
}

multuply(2, 4);
multuply(2);

/**
 * 반환받기
 * return 받기
 */
console.log('----------------');
function multuply(x, y)
{
    return x * y;
}

const result1 = multuply(2, 4);
console.log(result1);

const result2 = multuply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */
const multuply2 = (x, y)=>
{
    return x * y;
}
console.log(multuply2(3, 4));

// 중괄호를 없앤 방법
const multuply3 = (x, y)=>x * y;
console.log(multuply3(4, 5));

// 괄호를 없앤 방법
const multuply4 = x => x * 2;
console.log(multuply4(2));

// 템플릿 리터럴을 이용한 방법 
const multuply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multuply5(2)(5)(7));

// 템플릿 리터럴을 풀어서 쓴 방법
function multuply6(x)
{
    return function(y)
    {
        return function(z)
        {
            return `x: ${x} y: ${y} z: ${z}`;
        }
    }
}
console.log(multuply6(3)(4)(5));


const multiplyTwo = function(x, y)
{
    return x * y;
}
console.log(multiplyTwo(4, 5));

// 각 파라미터에 어떤 값이 들어갔는지 확인할 수 있는 방법
const multiplyThree = function(x, y, z)
{
    console.log(arguments);
    return x * y * z;
}

console.log('---------------');
console.log(multiplyThree(4, 5, 6));

// 값을 지정하는게 아니라 원하는만큼 받는 방법
const multuplyAll = function(...arguments)
{
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multuplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function
(function(x, y)
{
    console.log(x * y);
})(4, 5)

console.log(typeof multuply);
console.log(multuply instanceof Object);
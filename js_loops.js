/**
 * Loops
 * )1 for
 * 2) while
 */
for(let i = 0; i < 10; i++)
{
    console.log(i);
}

for(let i = 0; i < 3; i++)
{
    for(let j = 3; j > 0; j--)
    {
        console.log(i, j);
    }
}

/**
 * for...in
 * 키값을 가져올때 사용한다.
 */
const yuJin = 
{
    name: '안유진',
    year: 2003,
    group: '아이브',
}

console.log('-----------');

for(let key in yuJin)
{
    console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log('-----------');

for(let key in iveMembersArray)
{
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}
//키값을 가져오고 배열로 쓰면 인덱스 값을 가져올 수 있다.

console.log('-----------');

/**
 * for...of
 * 값을 가져올때 사용한다.
 */
for(let value of iveMembersArray)
{
    console.log(value);
}

/**
 * while
 */
let number = 0;

while(number < 10)
{
    console.log(number);
    number ++;
}
console.log('---------------');

/**
 * do...while
 */
number = 0;
do
{
    number++;
}
while(number < 10)
{
};
console.log(number);
console.log('---------------');

/**
 * break
 */
for(let i = 0; i < 10; i++)
{
    if(i === 5)
    {
        break;
    }
    console.log(i);
}
console.log('---------------');

number = 0;

while(number < 10)
{
    if(number === 5)
    {
        break;
    }
    number++;
    console.log(number);
}
console.log('---------------');

/**
 * continue
 */
for(let i = 0; i < 10; i++)
{
    if(i === 5)
    {
        continue;
    }
    console.log(i);
}
console.log('---------------');

number = 0;
while(number < 10)
{
    number++;
    if(number === 5)
    {
        continue;
    }
    console.log(number);
};
/**
 * Array Functions
 */
let iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log(iveMembers);

//push() 마지막 인덱스에 삽입
//반환값까지 반환한다.
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('---------------');

//pop() 마지막 인덱스 반환
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('------------------');

//shift() 첫 번째 인덱스 반환
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() 첫 번째 인덱스에 삽입
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);

console.log('------------------');

//splice() 특정부분을 짜르기
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

//concat() push()랑 같은 역할인 것 처럼 보임
//완전히 다른 메모리 공간에 배열값을 저장한다.
console.log(iveMembers.concat('코드팩토리'));
//원래 배열에는 출력이 안되는 모습을 보임
console.log(iveMembers);

//slice() splice()와 비슷하지만 원래 배열값이 완전히 삭제가 되지않는다.
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

//spread operator ... = 퍼트린다는 의미
let iveMembers2 = [...iveMembers,]
console.log(iveMembers2);

//이대로 넣으면 첫 번째 리스트에 0 번째 인덱스를 넣게 됌
let iveMembers3 = [ iveMembers,];
console.log(iveMembers3);

console.log('---------------------');

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);
//...를 사용하면 완전히 다른 배열을 생성해서 false를 출력
console.log([...iveMembers,] === iveMembers);

//join() , 기준으로 string으로 출력 실무에서 많이 쓰임
console.log(iveMembers.join());
// /를 기준으로 나눔
console.log(iveMembers.join('/'));
// ,하고 띄어쓰고 나눔
console.log(iveMembers.join(', '));

//sort() 오름차순
iveMembers.sort();
console.log(iveMembers);

//내림차순
console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3,];
console.log(numbers);

/**
 * a, b를 비교했을때
 * 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
 * 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a, b) =>
{
    //return a > b ? 1 : -1;
    return a < b ? 1 : -1;
});
console.log(numbers);

console.log('--------------------');

// map() 모든값을 순회한다 처음부터 끝까지 출력
console.log(iveMembers.map((x) => x));

// x가 =>를 기준으로 반환하는 값으로 대체한다.
console.log(iveMembers.map((x) => `아이브: ${x}`));

// x값이 안유진일 경우에만 템플릿을 반환한다.
console.log(iveMembers.map((x) =>
{
    if(x === '안유진')
    {
        return `아이브: ${x}`;
    }
    else
    {
        return x;
    }
}));
// 원래 배열을 바꾸진 않는다.
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

// true일경우만 출력
// 짝수만 찾는 경우
console.log(numbers.filter((x) => x % 2 === 0));

// find()
// filter()랑 다른점은 순서대로 보다가 해당되는 첫 번째 값만 반환한다.
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
// find()랑 똑같은데 찾은 배열의 위치의 인덱스를 출력
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce() (p, n) => p + n 은 콜백함수 0은 초기값
// 배열 값을 전부 스캔해서 함수에 넣은 값을 p에 저장하여 출력한다.
console.log(numbers.reduce((p, n) => p + n ,0));
/**
 * Using Function to create objects
 */
function IdolModel(name, year)
{
    // new가 쓰였는지 확인하는 방법
    // console.log(new.target);
    // new를 쓰든 안쓰든 new를 붙이도록 하는 유용한 방법
    if(!new.target)
    {
        return new IdolModel(name, year);
    }
    this.name = name;
    this.year = year;

    this.dance = function()
    {
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.dance());
// new 키워드를 안 썻을 경우
const yuJin2 = IdolModel('안유진', 2003);
// 반환해주는 값이 없기에 undefined
console.log(yuJin2);
// global 객체
console.log(global.name);

const IdolModelArrow = (name, year)=>
{
    this.name = name;
    this.year = year;
};

// new 키워드는 일반 함수에서만 사용가능함
// Arrow 함수에서는 사용 불가능
const yuJin3 = new IdolModelArrow('안유진', 2003);
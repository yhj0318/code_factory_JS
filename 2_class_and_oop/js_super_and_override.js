/**
 * Super and Override
 */
class IdolModel
{
    name;
    year;

    constructor(name, year)
    {
        this.name = name;
        this.year = year;
    }

    sayHello()
    {
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel
{
    // 노래 / 춤
    part;

    constructor(name, year, part)
    {
        // 부모 클래스 constructor를 그대로 쓰는 방법
        super(name, year);
        this.part = part;
    }
    sayHello()
    {
        // super 키워드를 함수안에 쓸 수 없다.
        //return `안녕하세요 ${this.name}입니다. ${this.part}을 맡고있습니다.`;
        // super 키워드는 함수를 출력할 때만 사용할 수 있다.
        return `${super.sayHello()} ${this.part}을 맡고있습니다.`
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());
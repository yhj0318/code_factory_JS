/**
 * Static Keyword
 */
class IdolModel
{
    name;
    year;
    // static을 쓰면 클래스에 귀속된다.
    static groupName = '아이브';

    constructor(name, year)
    {
        this.name = name;
        this.year = year;
    }

    static returnGroupName()
    {
        return '아이브';
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

// static은 new 쓰지 않음
console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());

//'----------------------------------------------'

/**
 * factory constructor
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
    // static 함수로 작성하여 factory constructor에 직접 접근하는 방법
    static fromObject(object)
    {
        return new IdolModel
        (
            object.name,
            object.year,
        );
    }
    static fromList(list)
    {
        return new IdolModel
        (
            list[0],
            list[1],
        );
    }
}

const yuJin2 = IdolModel.fromObject
(
    {
        name : '안유진',
        year : 2003,
    }
);
console.log(yuJin2);

const wonYoung = IdolModel.fromList
(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung);
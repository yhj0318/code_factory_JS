/**
 * Getter and Setter
 */
class IdolModel
{
    name ;
    year ;
    constructor(name, year)
    {
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할때
     * 2) private한 값을 반환할때
     */
    // getter는 값을 가져올 때 사용
    get nameAndYear()
    {
        return `${this.name}-${this.year}`;
    }
    // setter는 값을 저장할 때 사용
    // setter는 무조건 파라미터를 한 개 받아야함
    set setName(name)
    {
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = '장원영';
console.log(yuJin);

class IdolModel2
{
    // # -> property
    #name;
    year;

    constructor(name, year)
    {
        this.#name = name;
        this.year = year;
    }
    // 프라이빗 값을 가져오는 방법
    get name()
    {
        return this.#name;
    }
    // 프라이빗 값을 가져오는 방법
    set name(name)
    {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);
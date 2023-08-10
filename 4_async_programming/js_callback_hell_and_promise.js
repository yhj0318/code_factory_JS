/**
 * Callback
 */
function waitAndRun()
{
    setTimeout(() => 
    {
        console.log('끝');
    }, 2000);
}

// waitAndRun();

// 비효율적인 방법
function waitAndRun2()
{
    setTimeout(()=>
    {
        console.log('1번 콜백 끝');
        setTimeout(()=>
        {
            console.log('2번 콜백 끝');
            setTimeout(()=>
            {
                console.log('3번 콜백 끝');
            }, 2000);
        }, 2000);
    }, 2000);
}
// waitAndRun2();

/**
 * Promise
 * 가독성있게 쓰는 방법
 */
const timeoutPromise = new Promise((resolve, reject) =>
{
    setTimeout(() => {
        resolve('완료');
    }, 2000);
});

// '완료'라는 값을 받으면 then을 실행
/* timeoutPromise.then((res)=>
{
    console.log('---then---');
    console.log(res);
}); */

// resolve구문

/* const getPromise = (seconds)=> new Promise((resolve, reject)=>
{
    setTimeout(() => {
        resolve('완료');
    }, seconds * 1000);
});

getPromise(3)
    .then((res)=>
    {
        console.log('--- first then ---');
        console.log(res);

        return getPromise(3);
    }).then((res)=>
    {
        console.log('--- second then ---');
        console.log(res);

        return getPromise(4);
    }).then((res)=>
    {
        console.log('--- third then ---');
        console.log(res);
        
        return getPromise(4);
}); */

// reject구문

const getPromise = (seconds)=> new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            // 분기를 만들 수 있음
            // if(xxx)
            // {
            //     resolve('성공');
            // }
            // else
            // {
            //     reject('에러');
            // }
            resolve('에러');
        }, seconds * 1000);
    });

/* getPromise(3)
    .then((res)=>
    {
        console.log('--- first then ---');
        console.log(res);
    })
    .catch((res)=>
    {
       console.log('--- first catch ---');
       console.log(res) 
    })
    // finally는 무조건 실행 됌
    .finally(()=>
    {
        console.log('--- finally ---');
}); */

// all 키워드는 실행은 동시에 되지만 가장 느린함수 기준으로 출력 됌
Promise.all(
[
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res)=>
{
    console.log(res);
});
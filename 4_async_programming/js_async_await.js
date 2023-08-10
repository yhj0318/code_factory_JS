/**
 * Async / Await
 */
const getPromise = (seconds)=> new Promise((resolve, reject) =>
{
    setTimeout(() => {
        resolve('에러');
    }, seconds * 1000);
});

/**
 * async 쓰는법
 * await은 Promise로 만든 것만 사용할 수 있다.
 * 현재 많이 쓰이는 방법이다.
 */
async function runner()
{
    // reject를 사용하면 오류가 나기에 try catch문으로 예외처리 해준다.
    try
    {
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    }
    catch(e)
    {
        console.log('--- catch e ---');
        console.log(e);
    }
    finally
    {
        console.log('--- finally ---');
    }
}

runner();
console.log('실행 끝');
/**
 * try...catch
 * 
 * 1) 발생시킬때 -> 던진다라고한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */
function runner()
{
    try
    {

    console.log('Hello');
    
    throw new Error('큰 문제가 생겼습니다!');
    // 에러를 던지면 catch문으로 바로 감

    console.log('Code Factory');
    }
    catch(e)
    {
        console.log('----catch----');
        console.log(e);
    }
    // 써도 돼고 안써도 됌
    finally
    {
        console.log('----finally----');
    }

}
runner();
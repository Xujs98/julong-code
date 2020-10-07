/**
 * @description test demo
 * @author  Xujs
 */

function sum(a,b){
    return a + b;
}

//test(描述,methods)
test('10 + 20 应该等于 30',()=>{
    const res = sum(10, 20);

    //我期望res toBe res的和
    expect(res).toBe(30)

    //我期望res 不等于 toBe 40
    //expect(res).not.toBe(40);
})
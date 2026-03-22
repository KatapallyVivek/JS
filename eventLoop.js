console.log("hello world 1");

function time() {
    console.log("hello world 2");

    let value = 0;
    for(let i = 0; i< 15; i++) {
        value++;
    }
    console.log(value);

}

setTimeout(time, 20000);

let ans = 0;
for(let i = 0; i< 30; i++) {
        ans++;
}
console.log(ans);
function bar(text){
    console.log(text);
}
function foo(text_1){
    console.log(text_1);
    bar('bar');
}
foo('foo');
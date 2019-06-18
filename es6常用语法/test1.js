let age=10;
let foo=function () {
   alert("foo.....");
}

/*
   属性简写
*  对象中包含若干属性，其属性值由变量表示，且变量名和属性名一样的  属性名和属性值相同（属性值是个变量 这个变量名和属性名相同）
*
*  方法简写
*  对象字面量的方法可简写为xxx(){}的形式。
*
* */
let obj={
    age,
    foo,
    func(){
       console.log("hello.....") ;
    }
}

alert(obj.age);
obj.foo();
obj.func();






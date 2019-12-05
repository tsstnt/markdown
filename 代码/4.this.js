/* this始终指向调用它的对象 */
var  x = {
  a:10,
  b:{
    a:12,
    fn:function(){
      console.log(this.a)
      console.log(this)
    }
  }
}
x.b.fn()

/*  */
var y = {
  a:10,
  b:{
    fn:function(){
      console.log(this.a)
      console.log(this)
    }
  }
}
y.b.fn()

/*  */
var z = {
  a:10,
  b:{
    a=12,
    fn:function(){
      console.log(this.a)
      console.log(this)
    }
  }
}
var zz = z.b.fn
zz()

/*  */
var p = {
  x :0,
  y:0,
  mT:function(x,y){
    this.x = this.x +x
    this.y = this.y + y
    console.log(this.x)
    console.log(this,y)
  }
}
p.mT(1,1)

function sF(){
  this.x =x
}
sF(5)
console.log(x)


/*  */
// var pt = {
//   x:0,
//   y:0,
//   mT:function(x,y){
//     var mX = function(x){
//       this.x = x
//     },    
//     var mY = function(y){
//       this.y = y
//     }
//     mX(x)
//     mY(y)
//   }
// }
// pt.mT(1,1)
// console.log(pt.x)
// console.log(pt.y)
// console.log(x)
// console.log(y)

/*  */
var pt = {
  x:0,
  y:0,
  mT:function(x,y){
    var mX = function(x){
      that.x = x
    },    
    var mY = function(y){
      that.y = y
    }
    mX(x)
    mY(y)
  }
}
pt.mT(1,1)
console.log(pt.x)
console.log(pt.y)
console.log(x)
console.log(y)


/*  */
var a = 10;
var foo = {
    a: 20,
    fn: (function(){
        console.log(this); 
        console.log(this.a); 
    })()
}
/*  */
var a = 10;
var oTimer1 = setInterval(function(){
    var a = 20;
    console.log(this.a); 
    clearInterval(oTimer1);
},100);

/*  */
(function(){
  eval("console.log(this)"); 
})();
function Foo(){
  this.bar = function(){
      eval("console.log(this)"); 
  }
}
var foo = new Foo();
foo.bar();

/*  */
var a = 10;
var foo = {
    a: 20,
    fn: function(){
        console.log(this.a);
    }
};
var bar ={
    a: 30
}
foo.fn.apply();
foo.fn.apply(foo);
foo.fn.apply(bar);
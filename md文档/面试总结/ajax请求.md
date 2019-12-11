## 原生js中的ajax

1. 创建异步对象

   ```
   var xhr = new XMLHttpRequest()
   ```

   

2. 设置请求open（请求方式，请求url）

   ```js
   //get请求中如果有参数就需要在url后面拼接参数
   //post如果有参数，就在请求体中传递xhr.open（'get','validate.php?username='+name
   xhr.open('post','validate.php')
   ```

3. 设置请求（GET方式忽略此步骤）头:setRequestHeader()

   ```js
   //get 不需要设置
   //post 需要设置请求头：Content-Type:application/x-www-form-urlencoded
   xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
   ```

4. 设置请求体 send()

   ```js
   // 1.get的参数在url拼接了，所以不需要在这个函数中设置
   // 2.post的参数在这个函数中设置(如果有参数)
   xhr.send(null) xhr.send("username="+name);
   ```

5. 让异步对象接收服务器的响应数据

    一个成功的响应有两个条件：1.服务器成功响应了 2.异步对象的响应状态为(数据解析完毕可以使用了)

   ```js
   xhr.onreadystatechange = function(){ 
   if(xhr.status == 200 && xhr.readyState == 4){ 
    console.log(xhr.responseText);
    }
   ```

6. ajax-get方式请求案例：

   ```js
   var xhr = new XMLHttpRequest();
   xhr.open("get","validate.php?username="+name);
   xhr.send(null);
   xhr.onreadystatechange = function(){
   if(xhr.status == 200 && xhr.readyState == 4){ console.log(xhr.responseText); document.querySelector(".showmsg").innerHTML = xhr.responseText;;
    }
    }
   
   ```

   

7. ajax-post方式请求案例：

   ```js
   var xhr = new XMLHttpRequest();
   xhr.open("post","validate.php");
   xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
   xhr.send("username="+name);
   xhr.onreadystatechange = function(){
   // 判断服务器是否响应，判断异步对象的响应状态
   if(xhr.status == 200 && xhr.readyState == 4){
    document.querySelector(".showmsg").innerHTML = xhr.responseText;
    }
    }
   
   ```

   

## Jquery中的Ajax

```js
$.ajax({
 type:"get",// get或者post
 url:"abc.php",// 请求的url地址
 data:{},//请求的参数
 dataType:"json",//json写了jq会帮我们转换成数组或者对象 他已经用JSON.parse弄好了 
 timeout:3000,//3秒后提示错误
 beforeSend:function(){ 
 // 发送之前就会进入这个函数
 // return false 这个ajax就停止了不会发 如果没有return false 就会继续
 },
 success:function(data){ // 成功拿到结果放到这个函数 data就是拿到的结果
 },
 error:function(){//失败的函数
 },
 complete:function(){//不管成功还是失败 都会进这个函数
 }
})
// 常用
$.ajax({
 type:"get",
 url:"",
 data:{},
 dataType:"json",
 success:function(data){
 }
})

```

$.ajax() 都可以发

$.post(url,data,success,datatype):本质上只能发送post请求

$.get(url,data,success,datatype):本质上只能发送get请求
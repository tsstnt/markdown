### Vue修饰符

### .lazy
v-model：双向数据绑定。 .lazy修饰符会在光标移开input框的时候去更新数据
```js
<input type= "text" v-model.lazy = "value"
```



.trim

输入框过滤首尾的空格

```js
<input type="text" v-model.trim="value">
```



.number

先输入数字就会限制只能显示数字，先字符串相当于没有加number

```

```


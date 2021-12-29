# test_app_29.12
test react app

Решение задания: [Задание](https://drive.google.com/file/d/1j5FHbcbP17Hz9Z2oWPKQ4CVQ8x3yJINq/view)

для избавления от this внутри map, можно просто передать контекст вторым параметром после callback
```javascript
function parent() {
  this.multiplier = 3;
  return [33, 77, 99, 81, 3].map(function(I) { return I * this.multiplier}, this);
}
```

В папке `my-test-app/video/` лежит демонстрация работы

В папке `my-test-app/src/components` лежит маленький компонент который может менять расположение блоков
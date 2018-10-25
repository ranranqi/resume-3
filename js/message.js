var APP_ID = '5Okc1YErrmYfWMlQBDaOW0PJ-gzGzoHsz';
var APP_KEY = 'sNBrN4Tkn5XyQJSy2ThDrUG1';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'content': content
      }).then(function(object) {
        alert('存入成功')
      })
})

/*
//创建 TestObject 表
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();
//内容是 'Hello World!'
//如果保存成功，则运行 alert('LeanCloud Rocks!')
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/
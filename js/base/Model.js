//Model 就是一个模板

window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init: function(){
            var APP_ID = '5Okc1YErrmYfWMlQBDaOW0PJ-gzGzoHsz';
            var APP_KEY = 'sNBrN4Tkn5XyQJSy2ThDrUG1';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function(){
            var query = new AV.Query(resourceName);
            return query.find() // Promise 对象
        },
        save: function(object){
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}

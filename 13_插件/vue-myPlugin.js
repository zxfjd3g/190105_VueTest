(function (window) {

  // 定义插件对象
  const MyPlugin = {}

  // 必须给插件对象添加一个install方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue的myGlobalMethod()调用了')
    }

    // 2. 添加一个全局资源(asset)
    Vue.directive('my-directive', (el, binding)=> {
      el.textContent = 'my-directive----' + binding.value
    })

    // 4. 添加一个实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      console.log('vm $myMethod()调用')
    }
  }

  // 暴露
  window.MyPlugin = MyPlugin
})(window)
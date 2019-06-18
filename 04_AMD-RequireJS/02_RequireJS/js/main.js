(function () {
  //配置
  require.config({
    //基本路径
    baseUrl: 'js/',
    //映射: 模块标识名: 路径
    paths: {
      //自定义模块
      'alerter': 'modules/alerter',
      'dataService': 'modules/dataService',

      //库模块
      'jquery': 'libs/jquery-1.10.1',
      'yyy': 'libs/angular'

    },

    //配置不兼容AMD的模块
    shim: {
      yyy: {
        exports: 'angular'
      }

    }
  })

  //引入模块使用
  require(['alerter', 'yyy'], function (alerter, mm) {
    alerter.showMsg()
      console.log(window);
      console.log(angular);
      console.log(mm);

  })
})()
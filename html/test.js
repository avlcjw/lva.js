/**
 * Created by avlcjw on 2017/5/21.
 */
$(function () {
  // console.log(123);

  window.wtoip = new Wtoip({
    model: {
      datas: {
        atestData: '1',
        atestData2: '这是测试初始化数据2',
        atestData3: '这是测试初始化数据3',
        username: '用户名',
        password: '123123123123ss',
        items: [
          {
            name: 'name1',
          },
          {
            name: 'name2',
          }
        ]
      }
    },
    view: {
      container: '#container',
      events: {
        init: function (e) {
          // console.log(e);
          // console.log(this, '程序初始化回调函数!');
          // setTimeout(()=>{
          //   this.$datas.password = 444;
          // },2000);
        },
        buy: function (e) {
          // console.log(this);
        },
        test: function (e) {
          // console.log(this);
          alert('test');
        }
      }
    }
  });

  wtoip.view.render(wtoip.model.datas);

  window.x = document.getElementById('username');


  var _tmp;
  Object.defineProperty(x, 'test', {
    get: function(){
      console.log('Load test....', _tmp);
      return _tmp;
    },
    set: function(value){
      console.log('Change test....', value);
      _tmp = value;
    },
    // configurable: false
  });

  setTimeout(function () {
    wtoip.$datas.password = 321;
    console.log(x);
    // console.log(Object.getOwnPropertyDescriptor(x), 'adsasdsd');
  }, 3000);

  // console.log($(document).find('[su]'));

  console.log(wtoip, 'wtoip');
});

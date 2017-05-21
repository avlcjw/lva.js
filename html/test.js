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

  // setTimeout(function () {
    wtoip.view.render(wtoip.model.datas);
  // },500)

  // console.log($(document).find('[su]'));

  console.log(wtoip,'wtoip');
});

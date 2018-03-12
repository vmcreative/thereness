AFRAME.registerComponent('turn-menu', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    pos: {type: 'number'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener(data.on, function () {
      data.target.setAttribute('rotation', '0 ' + data.pos + ' 0');
    });
  }
});
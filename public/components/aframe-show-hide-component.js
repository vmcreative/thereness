AFRAME.registerComponent('show', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector',
    dur: {type: 'number', default: 0}
    }
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var child = Array.from(data.target.children);

    el.addEventListener(data.on, function () {
      setTimeout(function () {
        data.target.setAttribute('visible', true);
        child.forEach(function(e){
          e.setAttribute('visible', true);
        });
      }, data.dur);
    });
  }
});

AFRAME.registerComponent('hide', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var child = Array.from(data.target.children);

    el.addEventListener(data.on, function () {
      data.target.setAttribute('visible', false);
      child.forEach(function(e){
        e.setAttribute('visible', false);
      });
    });
  }
});

AFRAME.registerComponent('initial-hide', {
  schema: {
    target: {type: 'selector'}
  },

  init: function () {
    var data = this.data;
    var child = Array.from(data.target.children);
    data.target.setAttribute('visible', false);
    child.forEach(function(e){
      e.setAttribute('visible', false);
    });
  }
});

AFRAME.registerComponent('show-portals', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    dur: {type: 'number', default: 0}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var child = Array.from(data.target.children);

    el.addEventListener(data.on, function () {
      setTimeout(function () {
        data.target.setAttribute('visible', true);
        child.forEach(function(e){
          e.setAttribute('visible', true);
        });
      }, data.dur);
    });
  }
});

AFRAME.registerComponent('hide-portals', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var child = Array.from(data.target.children);

    el.addEventListener(data.on, function () {
      
      // data.target.setAttribute('visible', false);
      child.forEach(function(e){
        e.setAttribute('visible', false);
      });
    });
  }
});
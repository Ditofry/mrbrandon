import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'svg',
  height: 480,
  width: 600,
  didInsertElement: function(){
    var s = Snap("#tangoes"),
        height = this.get('height'),
        convert = function(y){ return height - y };
    var ruby = s.polygon(0,convert(300),120,convert(480),320,convert(0)).attr({ fill: "red", stroke: "blue", strokeWidth: 3, opacity: 0.5 });
    var js = s.polygon(0,convert(300),120,convert(480),300,convert(360)).attr({ fill: "red", stroke: "green", strokeWidth: 3, opacity: 0.5 });
    var css3 = s.polygon(0,convert(300),300,convert(360),320,convert(0)).attr({ fill: "blue", stroke: "gray", opacity: 0.5 });
    var HTML5 = s.polygon(300,convert(360),480,convert(480),320,convert(0)).attr({ fill: "green", stroke: "purple", opacity: 0.5 });
    var git = s.polygon(480,convert(480),600,convert(300),320,convert(0)).attr({ fill: "black", stroke: "white", opacity: 0.5 });
    var PostGres = s.polygon(300,convert(360),600,convert(300),320,convert(0)).attr({ fill: "purple", stroke: "yellow", opacity: 0.5 });
  }
});

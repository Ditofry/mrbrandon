import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'svg',
  height: 480,
  width: 600,
  didInsertElement: function(){
    var s = new Snap("#tangoes"),
        height = this.get('height'),
        convert = function(y){ return height - y; };

    // var ruby = s.polygon(0,convert(300),120,convert(480),320,convert(0)).attr({ fill: "red", stroke: "gray", strokeWidth: 3, opacity: 0.7 });
    // var js = s.polygon(0,convert(300),120,convert(480),300,convert(360)).attr({ fill: "red", stroke: "gray", strokeWidth: 3, opacity: 0.7 });
    // var css3 = s.polygon(0,convert(300),300,convert(360),320,convert(0)).attr({ fill: "red", stroke: "gray", opacity: 0.7 });
    // var HTML5 = s.polygon(300,convert(360),480,convert(480),320,convert(0)).attr({ fill: "#61fdba", stroke: "gray", opacity: 0.7 });
    // var git = s.polygon(480,convert(480),600,convert(300),320,convert(0)).attr({ fill: "#61fdba", stroke: "gray", opacity: 0.7 });
    // var PostGres = s.polygon(300,convert(360),600,convert(300),320,convert(0)).attr({ fill: "#61fdba", stroke: "gray", opacity: 0.7 });
    var ruby = s.polygon(0,convert(300),120,convert(480),320,convert(0)).attr({ stroke: 'white'});
    var js = s.polygon(0,convert(300),120,convert(480),300,convert(360)).attr({ stroke: 'white'});
    var css3 = s.polygon(0,convert(300),300,convert(360),320,convert(0)).attr({ stroke: 'white'});
    var HTML5 = s.polygon(300,convert(360),480,convert(480),320,convert(0)).attr({ stroke: 'white'});
    var git = s.polygon(480,convert(480),600,convert(300),320,convert(0)).attr({ stroke: 'white'});
    var PostGres = s.polygon(300,convert(360),600,convert(300),320,convert(0)).attr({ stroke: 'white'});

    ruby.mouseover( function(){
      console.log('hvrd');
      this.animate({fill: "red"}, 300);
    });
    js.mouseover( function(){
      console.log('hvrd');
      this.animate({fill: "red"}, 300);
    });
    css3.mouseover( function(){
      console.log('hvrd');
      this.animate({fill: "red"}, 300);
    });
    HTML5.mouseover( function(){
      console.log('hvrd');
      this.animate({fill: "red"}, 300);
    });
    git.mouseover( function(){
      console.log('hvrd');
      this.animate({fill: "red"}, 300);
    });
    PostGres.mouseover( function(){
      console.log('hvrd');
      this.animate({fill: "red"}, 300);
    });

  }
});

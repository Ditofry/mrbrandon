import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'svg',
  height: 480,
  width: 600,
  didInsertElement: function(){
    var s = new Snap("#tangrams"),
        height = this.get('height'),
        convert = function(y){ return height - y; };

    // var jsBig = [0,180,120,0,300,120];
    // var css3Big = [0,180,300,120,320,480];
    // var HTML5Big = [300,120,480,0,320,480];
    // var gitBig = [480,0,600,180,320,480];
    // var rubyBig = [300,120,600,180,320,480];
    //
    // var jsLittle = [0,18,12,0,30,12];
    // var css3Little = [0,18,30,12,32,48];
    // var HTML5Little = [30,12,48,0,32,48];
    // var gitLittle = [48,0,60,18,32,48];
    // var rubyLittle = [30,12,60,18,32,48];
    //
    // var jsMicro = [0,9,6,0,15,6];
    // var css3Micro = [0,9,15,6,16,24];
    // var HTML5Micro = [15,6,24,0,16,24];
    // var gitMicro = [24,0,30,9,16,24];
    // var rubyMicro = [15,6,30,9,16,24];
    //
    var js = s.polygon(['0%','9%','6%','0%','15%','6%']).attr({ stroke: 'white', id: 'js', switch: 'yellow', active: false});
    // var css3 = s.polygon(css3Micro).attr({ stroke: 'white', id: 'css3', switch: 'blue'});
    // var HTML5 = s.polygon(HTML5Micro).attr({ stroke: 'white', id: 'HTML5', switch: 'orange'});
    // var git = s.polygon(gitMicro).attr({ stroke: 'white', id: 'git', switch: 'white'});
    // var ruby = s.polygon(rubyMicro).attr({ stroke: 'white', id: 'ruby', switch: 'red'});

    // this.get('shapes').forEach(function(shape){
    //   s.polygon(shape.get('coordinates')).attr({ stroke: 'white', switch: 'yellow', active: false});
    // });

    // var allShapes = ['js', 'css3', 'HTML5', 'git', 'ruby'];
    //
    // js.mouseover( function(){
    //   this.animate({fill: "yellow"}, 100);
    // });
    // js.mouseout( function(){
    //   this.animate({fill: "black"}, 100);
    // });
    //
    // css3.mouseover( function(){
    //   this.animate({fill: "blue"}, 100);
    // });
    // css3.mouseout( function(){
    //   this.animate({fill: "black"}, 100);
    // });
    //
    // HTML5.mouseover( function(){
    //   this.animate({fill: "orange"}, 100);
    // });
    // HTML5.mouseout( function(){
    //   this.animate({fill: "black"}, 100);
    // });
    //
    // git.mouseover( function(){
    //   this.animate({fill: "white"}, 100);
    // });
    // git.mouseout( function(){
    //   this.animate({fill: "black"}, 100);
    // });
    //
    // ruby.mouseover( function(){
    //   this.animate({fill: "red"}, 100);
    // });
    // ruby.mouseout( function(){
    //   this.animate({fill: "black"}, 100);
    // });
    //
    // js.click( function(){
    //   var cx = this.getBBox().cx; // Get its initial coordinates
    //   var cy = this.getBBox().cy;
    //   var state = 'rest';
    //
    //   animateFlake(this, cx, cy); // Send it to be infinitely animated
    //
    //   function animateFlake(tango, cx, cy){
    //     // flake.attr({ transform: 't0 -200'}); // Reset the flake's position to behind the cloud
    //     var timing = getRandomArbitrary(400, 500); // Random transition time between times we specify
    //     var deg = getRandomArbitrary(-360,360); // Random rotation (allows it to go either direction)
    //     // Animate the flake and do a new animation for it when it's done (repeat this function)
    //     tango.stop().animate({ transform: 't-50,-50'}, 70, function(){ animateFlake(flake, cx, cy);});
    //   }
    //   // Lets us get random numbers from within a range we specify. From MDN docs.
    //   function getRandomArbitrary(min, max) {
    //     return Math.random() * (max - min) + min;
    //   }
    // });
    // js.click( shatter );
    // git.click( shatter );
    // ruby.click( shatter );
    // HTML5.click( shatter );
    // css3.click( shatter );



    // function shatter(){
    // 	// console.log(this.node.id);
    //   var shapeId = this.node.id;
    //
    //   for (var i=0; i < allShapes.length; i++){
  	// 		var shapeId = allShapes[i];
  	// 		var shape = s.select('#' + shapeId);
    //     if ( this.node.id === shapeId ){
    //       console.log(this.node.attributes.switch.value);
    //
    //       // this.animate({fill: })
    //     }
  	// 		// var cx = flake.getBBox().cx;
  	// 		// var cy = flake.getBBox().cy;
    //
  	// 		// animateShape(flake); // Send it to be infinitely animated
  	// 	}
    // }

  }
});

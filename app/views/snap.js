import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'svg',
  height: function(){
    return parseInt(this.$().css('height'));
  }.property(),
  width: function(){
    return parseInt(this.$().css('width'));
  }.property(),
  matrixWidth: function(){
    // this could EASILY be dynamic...
    return 30;
  }.property(),
  matrixHeight: function(){
    // this could EASILY be dynamic...
    return 24;
  }.property(),
  translateCoords: function(coordinates){
    // Let's start by letting matrix be 1/3 of page
    var xTranslation = this.get('width') / 3,
        yTranslation = 100,
        scale = xTranslation / this.get('matrixWidth');

    return coordinates.map(function(value, index){
      if (index % 2 != 0){ // y-val
        return value * scale + yTranslation;
      } else { // x-val
        return value * scale + xTranslation;
      }
    });
  },
  didInsertElement: function(){
    var s = new Snap("#tangrams"),
        self = this;

    this.get('shapes').forEach(function(shape){
      var modelCoords = shape.get('coordinates'),
          transCoords = self.translateCoords(modelCoords),
          color = shape.get('color');

      s.polygon(transCoords)
        .attr({ stroke: 'white'})
        .mouseover(function(){
          this.animate({fill: color}, 100);
        })
        .mouseout(function(){
          this.animate({fill: "black"}, 100);
        })
        .click( function(){
          var cx = this.getBBox().cx; // Get its initial coordinates
          var cy = this.getBBox().cy;
          var state = 'rest';

          animateFlake(this, cx, cy); // Send it to be infinitely animated

          function animateFlake(tango, cx, cy){
            // flake.attr({ transform: 't0 -200'}); // Reset the flake's position to behind the cloud
            var timing = getRandomArbitrary(400, 500); // Random transition time between times we specify
            var deg = getRandomArbitrary(-360,360); // Random rotation (allows it to go either direction)
            // Animate the flake and do a new animation for it when it's done (repeat this function)
            tango.stop().animate({ transform: 't-50,-50'}, 70, function(){ animateFlake(flake, cx, cy);});
          }
          // Lets us get random numbers from within a range we specify. From MDN docs.
          function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
        });
    });

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

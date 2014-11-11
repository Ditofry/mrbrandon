import DS from 'ember-data';
var attr = DS.attr;

var Tangram = DS.Model.extend({
    name: attr(),
    active: attr(),
    color: attr(),
    technologies: attr(),
    coordinates: attr()
});

// Add issue for bounding box that can be dynamic based on calculated max dist of any given tile
// For now relative size is 30 wide, 24tall.
Tangram.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'js',
      active: false,
      description: 'yellow',
      technologies: [],
      coordinates: [0,9,6,0,15,6]
    },
    {
      id: 2,
      name: 'css3',
      active: false,
      description: 'yellow',
      technologies: [],
      coordinates: [0,9,15,6,16,24]
    },
    {
      id: 3,
      name: 'HTML5',
      active: false,
      description: 'yellow',
      technologies: [],
      coordinates: [15,6,24,0,16,24]
    },
    {
      id: 4,
      name: 'git',
      active: false,
      description: 'yellow',
      technologies: [],
      coordinates: [24,0,30,9,16,24]
    },
    {
      id: 5,
      name: 'ruby',
      active: false,
      description: 'yellow',
      technologies: [],
      coordinates: [15,6,30,9,16,24]
    }
  ]
});

export default Tangram;

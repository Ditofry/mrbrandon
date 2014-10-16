import Ember from 'ember';

export default Ember.ArrayController.extend({
  desiredTech: '',
  filteredProjects: function(){
    var criteria = this.get('desiredTech').trim(),
        projects = this.get('model'),
        rx = new RegExp(criteria, 'gi');

    return projects.filter( function(project){
       return project.get('technologies').match(rx);
    })
  }.property('desiredTech')
});

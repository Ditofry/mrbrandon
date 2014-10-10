import DS from 'ember-data';
var attr = DS.attr;

var Project = DS.Model.extend({
    name: attr(),
    subtitle: attr(),
    technologies: attr(),
    description: attr(),
    image: attr()
});

Project.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Dotfolio',
      subtitle: 'Fully client-side application for large-scale art curation and project management',
      technologies: 'Ember.js, Ruby on Rails, Redis, Resque, Amazon S3, postgreSQL, Mandrill SMTP',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      link: null
    },
    {
      id: 2,
      name: 'Toxscreen',
      subtitle: 'Process controll, data analysis, and reporting application',
      technologies: 'PHP, MySQL, PDFLib, HIPPA Compliance, AJAX, Statistical Analysis',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      link: 'http://www.cutoxicology.org/'
    },
    {
      id: 3,
      name: 'TBA game title, codename: Battleroome',
      subtitle: 'Browser-based HTML5 game with multi-player support',
      technologies: 'Impact.js, Sinatra.rb, Faye websocket middleware, redis',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      link: 'http://morning-atoll-7547.herokuapp.com/'
    },
    {
      id: 4,
      name: 'Denver Scholarship Foundation',
      subtitle: 'Large-scale customized CMS',
      technologies: 'PHP, Drupal, MySQL, jQuery, custom CMS theming, custom Module development',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      link: 'http://www.denverscholarship.org/'
    },
    {
      id: 5,
      name: 'Denver Scholarship Foundation Donations',
      subtitle: 'Donations portal for Denver Scholarship Foundation',
      technologies: 'Stripe Payments API, Ember, Ember Data, Ruby on Rails, PostgreSQL, Mandrill SMTP',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      link: ''
    },
    {
      id: 6,
      name: 'For Love and Lemons',
      subtitle: 'High traffic, high content fashion site catering to international audience',
      technologies: 'Amazon S3, Ruby on Rails, HTML5 Drag and Drop, AJAX, Shopify Integration, Mandrill SMTP',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      link: ''
    },
    {
      id: 7,
      name: 'HappyEyes.js',
      subtitle: 'Google Chrome Plugin',
      technologies: 'javascript, Google Chrome API',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      link: ''
    },
    {
      id: 8,
      name: 'Ink Flow',
      subtitle: 'Inventory management and process control application',
      technologies: 'Ember, Ember Data, Ruby on Rails',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      link: ''
    },
    {
      id: 9,
      name: 'Great Work Inc.',
      subtitle: 'Information/registration site for an amazing and unique school',
      technologies: 'Amazon Simple Payments, Ruby on Rails, Vimeo, Amazon S3, Mandrill SMTP, PostgreSQL',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      link: ''
    },
  ]
});

export default Project;

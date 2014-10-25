import DS from 'ember-data';
var attr = DS.attr;

var Project = DS.Model.extend({
    name: attr(),
    subtitle: attr(),
    features: attr(),
    technologies: attr(),
    description: attr(),
    image: attr(),
    web: attr(),
    github: attr()
});

Project.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Dotfolio',
      subtitle: 'Large-scale art curation',
      features: [
        'Ember client-side application which consumes JSON from Ruby on Rails API',
        'Combination search/filter interfaces',
        'Extensive use of Ember Data - e.g. polymorphic relationships, on-the-fly tag creation, dynamic validation on forms',
        'Services layer for tasks like image processing and notifications that runs on dedicated server resources',
        'Authentication and role system: Managers can invite artists, artists can sign up anonymously but will have partial access until they are vetted by an admin user.',
        'Keyboard bindings for faster navigation and browsing through artwork',
        'Optimized Active Record queries and, in some cases, leveraging of PostgreSQL\'s JSON adapter for fastest possible JSON return on large queries',
      ],
      technologies: 'Ember.js, Ember Data, Ruby on Rails, Redis, Resque, Amazon S3, postgreSQL, Mandrill SMTP',
      description: 'Dotfolio replaced a plethora of legacy software programs and pen + paper methods for an art consultancy that needed to be able to search through a massive artist/artwork database, integrate that artwork with a cohesive project management system, and automate their purchase order and invoicing process.  Making extensive use of Ember and Ember data in conjunction with a Ruby on Rails API, manager users in the software are able to make liberal use of tags ,either creating them on the spot or selecting them from a type ahead, for categorizing artwork, artists and contacts.  Artwork, artists, and contacts can be filtered in realtime by changing one of numerous filter criteria, and the speed of search/filter responses has been optimized by tuning Active Record, and in some cases by hitting PostgreSQL directly and using the PostgreSQL JSON adapter to pre-format the JSON response to enable side-loading for Ember Data.  The services layer of the application which includes image processing and s3 uploading, email notifications, in-app notifications, and purchase order generation runs on a seperate worker using Resque to accomplish tasks and Redis to store the list of tasks with their description and priority level.',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      web: null,
      github: null
    },
    {
      id: 2,
      name: 'Toxscreen',
      subtitle: 'Process control, data analysis, and reporting application for mass spectrometer data in toxicology lab.',
      features: [
        'HIPAA compliant development to protect patient data',
        'Sophisticated user permissions hierarchy that allowed Chemists, Doctors, and supervisors to track each other\'s work on shared data sets',
        'Decision-making algorithms that accomplished roughly 90% of a run of data that used to require human attention',
        'Numerous reporting tools for viewing patient results, numerical trends, and Mass spectrometer diagnostics.',
        'The ability to generate large amounts of PDF reports in a very short amount of time with PDFlib'
      ],
      technologies: 'PHP, MySQL, PDFLib, HIPPA Compliance, AJAX, Statistical Analysis',
      description: 'Claro Labs is a company that does toxicology analysis through urine screening using mass spectrometry. Toxscreen enabled Claro to migrate from a setup with a few employees and a single mass spectrometer, using pencil, paper, and Excel, with a high degree of risk from human error; to multiple mass spectrometers, much higher data payloads, and far less of a possibility of human error. Toxscreen features Light decision-making algorithms, sophisticated user permissions hierarchy, complex UI to make large batches of data easy to interpret, UI that enabled intra-lab communication pertaining to toxicology data, highly customized bulk-reporting for both internal and client use in PDF format, HIPAA compliance.',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      web: 'http://www.cutoxicology.org/',
      github: null
    },
    {
      id: 3,
      name: 'Battleroom',
      subtitle: 'HTML5 brawler where the digital incarnations of Cirro employees do battle.',
      features: [
        'Faye Wedboscket middleware orchestrates connections/disconnections to redis',
        'In-game chat for trash talking',
        'HTML5 Audio, Canvas tag',
        'Small framework tailored to Battleroom that leverages websocket api to communicate game actions across the network',
        'Enemy AI in single-player mode'
      ],
      technologies: 'Impact.js, Sinatra.rb, Faye websocket middleware, redis',
      description: 'Stress release mechanism <strong>for</strong> the good staff at Cirro, <strong>featuring</strong> the good staff at Cirro.  The game is written in Javascript leveraging HTML5 for drawing and audio.  Websockets enable multi-player using pub/sub pattern backed by redis.  Features in-game chat, enemy AI, client-side interpolation to minimize data size and frequency of data transmission across the network, entity-based striking system that will allow more dynamic strike behaviour and animation as development goes forward.',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      web: 'http://morning-atoll-7547.herokuapp.com/',
      github: null
    },
    {
      id: 4,
      name: 'Denver Scholarship Foundation',
      subtitle: 'Large-scale customized CMS',
      features: [
        'Custom Drupal7 module and theme development',
        'Customized admin dashboard for managing large amounts of content',
        'Drag and drop weight forms for organizing content'
      ],
      technologies: 'PHP, Drupal7, MySQL, jQuery, custom CMS theming, custom Module development',
      description: '',
      image: 'assets/images/screenshots/dsf.png',
      web: 'http://www.denverscholarship.org/',
      github: null
    },
    {
      id: 5,
      name: 'D.S.F. Donations Portal',
      subtitle: 'Donations portal for Denver Scholarship Foundation',
      features: [
        'Ruby on Rails API supporting Ember JS front end',
        'Support for monthly subscriptions and single donations via Stripe integration',
        'Users can manage their own billing and subscription details',
        'CSV Export tool for donation data'
      ],
      technologies: 'Stripe Payments API, Ember, Ember Data, Ruby on Rails, PostgreSQL, Mandrill SMTP',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      web: '',
      github: null
    },
    {
      id: 6,
      name: 'For Love and Lemons',
      subtitle: 'Fashion site catering to international client base',
      features: [
        'Image processing via Image Magick and Image storage via Amazon S3',
        'Drag and Drop ajax file uploads',
        'Custom shopify subsite integration',
        'Mailchimp and Mandrill integration for newsletter and notification emails'
      ],
      technologies: 'Amazon S3, Ruby on Rails, HTML5 Drag and Drop, AJAX, Shopify Integration, Mandrill SMTP',
      description: '',
      image: 'assets/images/screenshots/fll.png',
      web: 'http://forloveandlemons.com',
      github: null
    },
    {
      id: 7,
      name: 'HappyEyes.js',
      subtitle: 'Google Chrome plugin designed to make lengthy reading of API pages more comfortable.',
      features: [
        'css3 keyframing',
        'regexp dom parsing to find elements whose backgrounds need to change',
        'tab-specific operating scope'
      ],
      technologies: 'javascript, Google Chrome API',
      description: '',
      image: 'http://c0573862.cdn.cloudfiles.rackspacecloud.com/1/0/21463/871616/bob1.png',
      web: null,
      github: 'https://github.com/Ditofry/happy_eyes'
    },
    {
      id: 9,
      name: 'Great Work Inc.',
      subtitle: 'Information/registration site for an amazing and unique school',
      features: [
        'Full-screen looping vimeo player embed',
        'Dynamic payment options via Amazon Simple Pay',
        'Admin tools that enable control over layouts and display devices, enabling complete customization and the ability to re-arrange layouts without break cohesive design structure'
      ],
      technologies: 'Amazon Simple Payments, Ruby on Rails, Vimeo, Amazon S3, Mandrill SMTP, PostgreSQL',
      description: '',
      image: 'assets/images/screenshots/GW.png',
      web: 'http://greatworkinc.org',
      github: null
    },
  ]
});

export default Project;

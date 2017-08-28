export const projectsData = [
  {
    title: 'PogTracker',
    tagline: 'Twitch highlights generated by Twitch activity',
    images: [
      require('../images/pogtracker-2.png'),
      require('../images/pogtracker-2.png'),
      require('../images/pogtracker-2.png')
    ],
    stack: [
      'Twitch API',
      'Express',
      'Node',
      'React Router 4',
      'MongoDB',
      'Dokku'
    ],
    features: [
      'Utilizes multiple Twitch APIs to gather channel and replay chat data of a provided broadcast replay.',
      'Scans JSON for emote usage and generates timestamps for bursts of individual emotes.',
      'Frontend converts timestamps to buttons, integrated with twitch embedded player.',
      'The more active the chat, the better the results. Can easily handle a chat with tens of thousands of users.',
      'Provides all default emotes for each replay as well as subscriber emotes for partnered channels.',
      'Saves relevant generated data for instant delivery to future users with MongoDB.'
    ],
    backgroundColor : '#ff00ae',
    links : {
      github : 'http://www.github.com/dustwise/pogtracker',
      live: 'http://www.pogtracker.com'
    }
  },



  {
    title: 'ProtoPage',
    tagline: 'Find Google Fonts pairings quickly with our prototype startup page',
    images: [
      require('../images/pogtracker-2.png'),
      require('../images/pogtracker-2.png'),
      require('../images/pogtracker-2.png')
    ],
    stack: [
      'Google Fonts API',
      'React',
      'Redux'
    ],
    features: [
      'Utilizes multiple Twitch APIs to gather channel and replay chat data of a provided broadcast replay.',
      'Scans JSON for emote usage and generates timestamps for bursts of individual emotes.',
      'Frontend converts timestamps to buttons, integrated with twitch embedded player.',
      'The more active the chat, the better the results. Can easily handle a chat with tens of thousands of users.',
      'Provides all default emotes for each replay as well as subscriber emotes for partnered channels.',
      'Saves relevant generated data for instant delivery to future users with MongoDB.'
    ],
    backgroundColor : 'green',
    links : {
      github : 'http://www.github.com/dustwise/pogtracker',
      live: 'http://www.protopage.dustwise.com'
    }
  },



  {
    title: 'Rocket Garage',
    tagline: 'Redefining digital item trading for the Rocket League community',
    images: [
      require('../images/pogtracker-2.png'),
      require('../images/pogtracker-2.png'),
      require('../images/pogtracker-2.png')
    ],
    stack: [
      'Twitch API',
      'Express',
      'Node',
      'MongoDB',
      'Dokku'
    ],
    features: [
      'Utilizes multiple Twitch APIs to gather channel and replay chat data of a provided broadcast replay.',
      'Scans JSON for emote usage and generates timestamps for bursts of individual emotes.',
      'Frontend converts timestamps to buttons, integrated with twitch embedded player.',
      'The more active the chat, the better the results. Can easily handle a chat with tens of thousands of users.',
      'Provides all default emotes for each replay as well as subscriber emotes for partnered channels.',
      'Saves relevant generated data for instant delivery to future users with MongoDB.'
    ],
    backgroundColor : 'papayawhip',
    links : {
      github : 'http://www.github.com/dustwise/proto-page',
      live: 'http://www.rocketgarage.io'
    }
  }
]
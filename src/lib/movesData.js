const incomingData = {
  data: [ 
    { date: '20170612', summary: 0, caloriesIdle: 1796 },
    { date: '20170613', summary: 1, caloriesIdle: 1796 },
    { date: '20170614', summary: 2, caloriesIdle: 1796 },
    { date: '20170615', summary: 3, caloriesIdle: 1796 },
    { date: '20170616', summary: 4, caloriesIdle: 1796 },
    { date: '20170617', summary: 5, caloriesIdle: 1796 },
    { date: '20170618', summary: null, caloriesIdle: 1796 } 
  ],
  summaries: [ 
    [ { 
      activity: 'wlk',
      duration: 8168,
      distance: 12037,
      steps: 15515,
      calories: 750 } ],
    [ { activity: 'wlk',
        duration: 14129,
        distance: 16477,
        steps: 26405,
        calories: 1027 },
      { activity: 'cyc', duration: 3459, distance: 9991, calories: 291 } ],
    [ { activity: 'wlk',
        duration: 9555,
        distance: 10578,
        steps: 17106,
        calories: 660 } ],
    [ { activity: 'wlk',
        duration: 8401,
        distance: 10479,
        steps: 15188,
        calories: 653 },
      { activity: 'cyc', duration: 713, distance: 672, calories: 25 },
      { activity: 'run',
        duration: 1720,
        distance: 4980,
        steps: 4094,
        calories: 375 } ],
    [ { activity: 'wlk',
        duration: 6837,
        distance: 8837,
        steps: 11749,
        calories: 551 },
      { activity: 'cyc', duration: 397, distance: 1691, calories: 47 } ],
    [ { activity: 'wlk',
        duration: 4208,
        distance: 5468,
        steps: 6524,
        calories: 341 } ],
    null ],
  storylines: [
  {
    date: "20170618",
    segments: [
  {
    type: "place",
    startTime: "20170618T010650Z",
    endTime: "20170618T123909Z",
    place: {
      id: 644368445,
      type: "unknown",
      location: {
        lat: 40.657214,
        lon: -73.960366
      }
    }
  },
  {
    type: "move",
    startTime: "20170618T123909Z",
    endTime: "20170618T130356Z",
    activities: [
      {
        activity: "wlk",
        startTime: "20170618T123909Z",
        endTime: "20170618T130356Z",
        duration: 1487,
        distance: 2697,
        steps: 3031,
        calories: 168
      }
    ]
  },
  {
    type: "place",
    startTime: "20170618T130357Z",
    endTime: "20170618T194912Z",
    place: {
      id: 661385686,
      type: "unknown",
      location: {
        lat: 40.669696,
        lon: -73.979065
    }
  },
  activities: [
    {
    activity: "wlk",
    startTime: "20170618T130357Z",
    endTime: "20170618T131117Z",
    duration: 440,
    distance: 495,
    steps: 661,
    calories: 31
    },
    {
    activity: "wlk",
    startTime: "20170618T142800Z",
    endTime: "20170618T142914Z",
    duration: 74,
    distance: 53,
    steps: 107,
    calories: 3
    }
    ]
    },
    {
    type: "move",
    startTime: "20170618T194912Z",
    endTime: "20170618T195316Z",
    activities: [
      {
        activity: "wlk",
        startTime: "20170618T194912Z",
        endTime: "20170618T195316Z",
        duration: 244,
        distance: 382,
        steps: 328,
        calories: 24
      }
    ]
  },
    {
    type: "place",
    startTime: "20170618T195317Z",
    endTime: "20170618T200503Z",
    place: {
      id: 661385687,
      type: "unknown",
      location: {
        lat: 40.672278,
        lon: -73.977078
    }
  },
  activities: [
    {
      activity: "wlk",
      startTime: "20170618T195317Z",
      endTime: "20170618T195959Z",
      duration: 402,
      distance: 456,
      steps: 608,
      calories: 28
    },
    {
      activity: "wlk",
      startTime: "20170618T200149Z",
      endTime: "20170618T200218Z",
      duration: 29,
      distance: 25,
      steps: 50,
      calories: 2
    }
    ]
  },
  {
  type: "move",
  startTime: "20170618T200503Z",
  endTime: "20170618T201101Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170618T200503Z",
  endTime: "20170618T201101Z",
  duration: 358,
  distance: 471,
  steps: 791,
  calories: 29
  }
  ]
  },
  {
  type: "place",
  startTime: "20170618T201102Z",
  endTime: "20170618T223038Z",
  place: {
  id: 661385686,
  type: "unknown",
  location: {
  lat: 40.669696,
  lon: -73.979065
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170618T201248Z",
  endTime: "20170618T201334Z",
  duration: 46,
  distance: 35,
  steps: 70,
  calories: 2
  },
  {
  activity: "wlk",
  startTime: "20170618T220750Z",
  endTime: "20170618T221420Z",
  duration: 390,
  distance: 436,
  steps: 581,
  calories: 27
  }
  ]
  },
  {
  type: "move",
  startTime: "20170618T223038Z",
  endTime: "20170618T224354Z",
  activities: [
  {
  activity: "trp",
  startTime: "20170618T223038Z",
  endTime: "20170618T224354Z",
  duration: 796,
  distance: 3529
  }
  ]
  },
  {
  type: "place",
  startTime: "20170618T224355Z",
  endTime: "20170618T225430Z",
  place: {
  id: 661396820,
  type: "unknown",
  location: {
  lat: 40.658085,
  lon: -73.960264
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170618T224842Z",
  endTime: "20170618T224922Z",
  duration: 40,
  distance: 30,
  steps: 60,
  calories: 2
  }
  ]
  },
  {
  type: "place",
  startTime: "20170618T225430Z",
  endTime: "20170619T011806Z",
  place: {
  id: 644368445,
  type: "unknown",
  location: {
  lat: 40.657214,
  lon: -73.960366
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T011458Z",
  endTime: "20170619T011544Z",
  duration: 46,
  distance: 35,
  steps: 70,
  calories: 2
  }
  ]
  },
  {
  type: "move",
  startTime: "20170619T011806Z",
  endTime: "20170619T013912Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T011806Z",
  endTime: "20170619T013912Z",
  duration: 1266,
  distance: 2092,
  steps: 2461,
  calories: 130
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T013913Z",
  endTime: "20170619T015837Z",
  place: {
  id: 661471766,
  type: "unknown",
  location: {
  lat: 40.659731,
  lon: -73.977205
  }
  }
  },
  {
  type: "move",
  startTime: "20170619T015837Z",
  endTime: "20170619T020840Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T015837Z",
  endTime: "20170619T020840Z",
  duration: 603,
  distance: 805,
  steps: 1152,
  calories: 50
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T020841Z",
  endTime: "20170619T021104Z",
  place: {
  id: 661471768,
  type: "unknown",
  location: {
  lat: 40.664754,
  lon: -73.977445
  }
  }
  },
  {
  type: "move",
  startTime: "20170619T021104Z",
  endTime: "20170619T021737Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T021104Z",
  endTime: "20170619T021737Z",
  duration: 393,
  distance: 521,
  steps: 945,
  calories: 32
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T021738Z",
  endTime: "20170619T023455Z",
  place: {
  id: 661471770,
  type: "unknown",
  location: {
  lat: 40.667245,
  lon: -73.981653
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T021929Z",
  endTime: "20170619T022009Z",
  duration: 40,
  distance: 30,
  steps: 60,
  calories: 2
  }
  ]
  },
  {
  type: "move",
  startTime: "20170619T023455Z",
  endTime: "20170619T023854Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T023455Z",
  endTime: "20170619T023854Z",
  duration: 239,
  distance: 401,
  steps: 334,
  calories: 25
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T023855Z",
  endTime: "20170619T025516Z",
  place: {
  id: 661471772,
  type: "unknown",
  location: {
  lat: 40.665089,
  lon: -73.977725
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T023855Z",
  endTime: "20170619T024343Z",
  duration: 288,
  distance: 324,
  steps: 432,
  calories: 20
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T025517Z",
  endTime: "20170619T034824Z",
  place: {
  id: 661471773,
  type: "unknown",
  location: {
  lat: 40.663934,
  lon: -73.975446
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T025517Z",
  endTime: "20170619T025540Z",
  duration: 23,
  distance: 17,
  steps: 35,
  calories: 1
  },
  {
  activity: "wlk",
  startTime: "20170619T031051Z",
  endTime: "20170619T031440Z",
  duration: 229,
  distance: 258,
  steps: 345,
  calories: 16
  }
  ]
  },
  {
  type: "move",
  startTime: "20170619T034824Z",
  endTime: "20170619T041418Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T034824Z",
  endTime: "20170619T035959Z",
  duration: 695,
  distance: 977,
  steps: 1510,
  calories: 61
  }
  ]
  }
  ],
  caloriesIdle: 1796
},
  {
    date: "20170618",
    segments: [
  {
    type: "place",
    startTime: "20170618T010650Z",
    endTime: "20170618T123909Z",
    place: {
      id: 644368445,
      type: "unknown",
      location: {
        lat: 40.657214,
        lon: -73.960366
      }
    }
  },
  {
    type: "move",
    startTime: "20170618T123909Z",
    endTime: "20170618T130356Z",
    activities: [
      {
        activity: "wlk",
        startTime: "20170618T123909Z",
        endTime: "20170618T130356Z",
        duration: 1487,
        distance: 2697,
        steps: 3031,
        calories: 168
      }
    ]
  },
  {
    type: "place",
    startTime: "20170618T130357Z",
    endTime: "20170618T194912Z",
    place: {
      id: 661385686,
      type: "unknown",
      location: {
        lat: 40.669696,
        lon: -73.979065
    }
  },
  activities: [
    {
    activity: "wlk",
    startTime: "20170618T130357Z",
    endTime: "20170618T131117Z",
    duration: 440,
    distance: 495,
    steps: 661,
    calories: 31
    },
    {
    activity: "wlk",
    startTime: "20170618T142800Z",
    endTime: "20170618T142914Z",
    duration: 74,
    distance: 53,
    steps: 107,
    calories: 3
    }
    ]
    },
    {
    type: "move",
    startTime: "20170618T194912Z",
    endTime: "20170618T195316Z",
    activities: [
      {
        activity: "wlk",
        startTime: "20170618T194912Z",
        endTime: "20170618T195316Z",
        duration: 244,
        distance: 382,
        steps: 328,
        calories: 24
      }
    ]
  },
    {
    type: "place",
    startTime: "20170618T195317Z",
    endTime: "20170618T200503Z",
    place: {
      id: 661385687,
      type: "unknown",
      location: {
        lat: 40.672278,
        lon: -73.977078
    }
  },
  activities: [
    {
      activity: "wlk",
      startTime: "20170618T195317Z",
      endTime: "20170618T195959Z",
      duration: 402,
      distance: 456,
      steps: 608,
      calories: 28
    },
    {
      activity: "wlk",
      startTime: "20170618T200149Z",
      endTime: "20170618T200218Z",
      duration: 29,
      distance: 25,
      steps: 50,
      calories: 2
    }
    ]
  },
  {
  type: "move",
  startTime: "20170618T200503Z",
  endTime: "20170618T201101Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170618T200503Z",
  endTime: "20170618T201101Z",
  duration: 358,
  distance: 471,
  steps: 791,
  calories: 29
  }
  ]
  },
  {
  type: "place",
  startTime: "20170618T201102Z",
  endTime: "20170618T223038Z",
  place: {
  id: 661385686,
  type: "unknown",
  location: {
  lat: 40.669696,
  lon: -73.979065
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170618T201248Z",
  endTime: "20170618T201334Z",
  duration: 46,
  distance: 35,
  steps: 70,
  calories: 2
  },
  {
  activity: "wlk",
  startTime: "20170618T220750Z",
  endTime: "20170618T221420Z",
  duration: 390,
  distance: 436,
  steps: 581,
  calories: 27
  }
  ]
  },
  {
  type: "move",
  startTime: "20170618T223038Z",
  endTime: "20170618T224354Z",
  activities: [
  {
  activity: "trp",
  startTime: "20170618T223038Z",
  endTime: "20170618T224354Z",
  duration: 796,
  distance: 3529
  }
  ]
  },
  {
  type: "place",
  startTime: "20170618T224355Z",
  endTime: "20170618T225430Z",
  place: {
  id: 661396820,
  type: "unknown",
  location: {
  lat: 40.658085,
  lon: -73.960264
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170618T224842Z",
  endTime: "20170618T224922Z",
  duration: 40,
  distance: 30,
  steps: 60,
  calories: 2
  }
  ]
  },
  {
  type: "place",
  startTime: "20170618T225430Z",
  endTime: "20170619T011806Z",
  place: {
  id: 644368445,
  type: "unknown",
  location: {
  lat: 40.657214,
  lon: -73.960366
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T011458Z",
  endTime: "20170619T011544Z",
  duration: 46,
  distance: 35,
  steps: 70,
  calories: 2
  }
  ]
  },
  {
  type: "move",
  startTime: "20170619T011806Z",
  endTime: "20170619T013912Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T011806Z",
  endTime: "20170619T013912Z",
  duration: 1266,
  distance: 2092,
  steps: 2461,
  calories: 130
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T013913Z",
  endTime: "20170619T015837Z",
  place: {
  id: 661471766,
  type: "unknown",
  location: {
  lat: 40.659731,
  lon: -73.977205
  }
  }
  },
  {
  type: "move",
  startTime: "20170619T015837Z",
  endTime: "20170619T020840Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T015837Z",
  endTime: "20170619T020840Z",
  duration: 603,
  distance: 805,
  steps: 1152,
  calories: 50
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T020841Z",
  endTime: "20170619T021104Z",
  place: {
  id: 661471768,
  type: "unknown",
  location: {
  lat: 40.664754,
  lon: -73.977445
  }
  }
  },
  {
  type: "move",
  startTime: "20170619T021104Z",
  endTime: "20170619T021737Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T021104Z",
  endTime: "20170619T021737Z",
  duration: 393,
  distance: 521,
  steps: 945,
  calories: 32
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T021738Z",
  endTime: "20170619T023455Z",
  place: {
  id: 661471770,
  type: "unknown",
  location: {
  lat: 40.667245,
  lon: -73.981653
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T021929Z",
  endTime: "20170619T022009Z",
  duration: 40,
  distance: 30,
  steps: 60,
  calories: 2
  }
  ]
  },
  {
  type: "move",
  startTime: "20170619T023455Z",
  endTime: "20170619T023854Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T023455Z",
  endTime: "20170619T023854Z",
  duration: 239,
  distance: 401,
  steps: 334,
  calories: 25
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T023855Z",
  endTime: "20170619T025516Z",
  place: {
  id: 661471772,
  type: "unknown",
  location: {
  lat: 40.665089,
  lon: -73.977725
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T023855Z",
  endTime: "20170619T024343Z",
  duration: 288,
  distance: 324,
  steps: 432,
  calories: 20
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T025517Z",
  endTime: "20170619T034824Z",
  place: {
  id: 661471773,
  type: "unknown",
  location: {
  lat: 40.663934,
  lon: -73.975446
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T025517Z",
  endTime: "20170619T025540Z",
  duration: 23,
  distance: 17,
  steps: 35,
  calories: 1
  },
  {
  activity: "wlk",
  startTime: "20170619T031051Z",
  endTime: "20170619T031440Z",
  duration: 229,
  distance: 258,
  steps: 345,
  calories: 16
  }
  ]
  },
  {
  type: "move",
  startTime: "20170619T034824Z",
  endTime: "20170619T041418Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T034824Z",
  endTime: "20170619T035959Z",
  duration: 695,
  distance: 977,
  steps: 1510,
  calories: 61
  }
  ]
  }
  ],
  caloriesIdle: 1796
},
  {
    date: "20170618",
    segments: [
  {
    type: "place",
    startTime: "20170618T010650Z",
    endTime: "20170618T123909Z",
    place: {
      id: 644368445,
      type: "unknown",
      location: {
        lat: 40.657214,
        lon: -73.960366
      }
    }
  },
  {
    type: "move",
    startTime: "20170618T123909Z",
    endTime: "20170618T130356Z",
    activities: [
      {
        activity: "wlk",
        startTime: "20170618T123909Z",
        endTime: "20170618T130356Z",
        duration: 1487,
        distance: 2697,
        steps: 3031,
        calories: 168
      }
    ]
  },
  {
    type: "place",
    startTime: "20170618T130357Z",
    endTime: "20170618T194912Z",
    place: {
      id: 661385686,
      type: "unknown",
      location: {
        lat: 40.669696,
        lon: -73.979065
    }
  },
  activities: [
    {
    activity: "wlk",
    startTime: "20170618T130357Z",
    endTime: "20170618T131117Z",
    duration: 440,
    distance: 495,
    steps: 661,
    calories: 31
    },
    {
    activity: "wlk",
    startTime: "20170618T142800Z",
    endTime: "20170618T142914Z",
    duration: 74,
    distance: 53,
    steps: 107,
    calories: 3
    }
    ]
    },
    {
    type: "move",
    startTime: "20170618T194912Z",
    endTime: "20170618T195316Z",
    activities: [
      {
        activity: "wlk",
        startTime: "20170618T194912Z",
        endTime: "20170618T195316Z",
        duration: 244,
        distance: 382,
        steps: 328,
        calories: 24
      }
    ]
  },
    {
    type: "place",
    startTime: "20170618T195317Z",
    endTime: "20170618T200503Z",
    place: {
      id: 661385687,
      type: "unknown",
      location: {
        lat: 40.672278,
        lon: -73.977078
    }
  },
  activities: [
    {
      activity: "wlk",
      startTime: "20170618T195317Z",
      endTime: "20170618T195959Z",
      duration: 402,
      distance: 456,
      steps: 608,
      calories: 28
    },
    {
      activity: "wlk",
      startTime: "20170618T200149Z",
      endTime: "20170618T200218Z",
      duration: 29,
      distance: 25,
      steps: 50,
      calories: 2
    }
    ]
  },
  {
  type: "move",
  startTime: "20170618T200503Z",
  endTime: "20170618T201101Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170618T200503Z",
  endTime: "20170618T201101Z",
  duration: 358,
  distance: 471,
  steps: 791,
  calories: 29
  }
  ]
  },
  {
  type: "place",
  startTime: "20170618T201102Z",
  endTime: "20170618T223038Z",
  place: {
  id: 661385686,
  type: "unknown",
  location: {
  lat: 40.669696,
  lon: -73.979065
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170618T201248Z",
  endTime: "20170618T201334Z",
  duration: 46,
  distance: 35,
  steps: 70,
  calories: 2
  },
  {
  activity: "wlk",
  startTime: "20170618T220750Z",
  endTime: "20170618T221420Z",
  duration: 390,
  distance: 436,
  steps: 581,
  calories: 27
  }
  ]
  },
  {
  type: "move",
  startTime: "20170618T223038Z",
  endTime: "20170618T224354Z",
  activities: [
  {
  activity: "trp",
  startTime: "20170618T223038Z",
  endTime: "20170618T224354Z",
  duration: 796,
  distance: 3529
  }
  ]
  },
  {
  type: "place",
  startTime: "20170618T224355Z",
  endTime: "20170618T225430Z",
  place: {
  id: 661396820,
  type: "unknown",
  location: {
  lat: 40.658085,
  lon: -73.960264
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170618T224842Z",
  endTime: "20170618T224922Z",
  duration: 40,
  distance: 30,
  steps: 60,
  calories: 2
  }
  ]
  },
  {
  type: "place",
  startTime: "20170618T225430Z",
  endTime: "20170619T011806Z",
  place: {
  id: 644368445,
  type: "unknown",
  location: {
  lat: 40.657214,
  lon: -73.960366
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T011458Z",
  endTime: "20170619T011544Z",
  duration: 46,
  distance: 35,
  steps: 70,
  calories: 2
  }
  ]
  },
  {
  type: "move",
  startTime: "20170619T011806Z",
  endTime: "20170619T013912Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T011806Z",
  endTime: "20170619T013912Z",
  duration: 1266,
  distance: 2092,
  steps: 2461,
  calories: 130
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T013913Z",
  endTime: "20170619T015837Z",
  place: {
  id: 661471766,
  type: "unknown",
  location: {
  lat: 40.659731,
  lon: -73.977205
  }
  }
  },
  {
  type: "move",
  startTime: "20170619T015837Z",
  endTime: "20170619T020840Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T015837Z",
  endTime: "20170619T020840Z",
  duration: 603,
  distance: 805,
  steps: 1152,
  calories: 50
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T020841Z",
  endTime: "20170619T021104Z",
  place: {
  id: 661471768,
  type: "unknown",
  location: {
  lat: 40.664754,
  lon: -73.977445
  }
  }
  },
  {
  type: "move",
  startTime: "20170619T021104Z",
  endTime: "20170619T021737Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T021104Z",
  endTime: "20170619T021737Z",
  duration: 393,
  distance: 521,
  steps: 945,
  calories: 32
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T021738Z",
  endTime: "20170619T023455Z",
  place: {
  id: 661471770,
  type: "unknown",
  location: {
  lat: 40.667245,
  lon: -73.981653
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T021929Z",
  endTime: "20170619T022009Z",
  duration: 40,
  distance: 30,
  steps: 60,
  calories: 2
  }
  ]
  },
  {
  type: "move",
  startTime: "20170619T023455Z",
  endTime: "20170619T023854Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T023455Z",
  endTime: "20170619T023854Z",
  duration: 239,
  distance: 401,
  steps: 334,
  calories: 25
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T023855Z",
  endTime: "20170619T025516Z",
  place: {
  id: 661471772,
  type: "unknown",
  location: {
  lat: 40.665089,
  lon: -73.977725
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T023855Z",
  endTime: "20170619T024343Z",
  duration: 288,
  distance: 324,
  steps: 432,
  calories: 20
  }
  ]
  },
  {
  type: "place",
  startTime: "20170619T025517Z",
  endTime: "20170619T034824Z",
  place: {
  id: 661471773,
  type: "unknown",
  location: {
  lat: 40.663934,
  lon: -73.975446
  }
  },
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T025517Z",
  endTime: "20170619T025540Z",
  duration: 23,
  distance: 17,
  steps: 35,
  calories: 1
  },
  {
  activity: "wlk",
  startTime: "20170619T031051Z",
  endTime: "20170619T031440Z",
  duration: 229,
  distance: 258,
  steps: 345,
  calories: 16
  }
  ]
  },
  {
  type: "move",
  startTime: "20170619T034824Z",
  endTime: "20170619T041418Z",
  activities: [
  {
  activity: "wlk",
  startTime: "20170619T034824Z",
  endTime: "20170619T035959Z",
  duration: 695,
  distance: 977,
  steps: 1510,
  calories: 61
  }
  ]
  }
  ],
  caloriesIdle: 1796
  }
  ]
}

import {normalizeStorylineData, createActivitiesList} from '@lib/helpers/movesData';

const normStories = normalizeStorylineData(incomingData.storylines);
const activities = createActivitiesList(normStories);

export default {
  storylines: normStories,
  activities
};






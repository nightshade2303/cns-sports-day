const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint for department sports day events
app.get('/api/events', (req, res) => {
  // Example static data for department sports day
  const events = [
    {
      event: 'Athletics (200m Mens\')',
      participants: ["Sveekruth",
          "Deepanshu",
          "Fleming",
          "Arvindhane",
          "Tej Pratap Yadav",
          "Abhilash",
          "Abhimanyu",
          "Tenzin",
          "Shrivallabh"

      ],
      results: [
        { name: 'Sveekruth', position: 1},
        { name: 'Arvindhane', position: 2},
        { name: 'Atharva', position: 3}
      ],
      status: 'Complete!',
      schedule: '7:00 AM',
      teams: null
    },
    {
      event: 'Athletics (200m Womens\')',
      participants: [
          "Aasma",
          "Aayusha",
          "Pratiksha",
          "Smriti",
          "Yatika",
         "Sumani",
          "Thejaswini",
          "Sanika",
      ],
      results: [
        { name: 'Sanika', position: 1},
        { name: 'Smriti', position: 2},
        { name: 'Yatika', position: 3}
      ],
      status: 'Complete!',
      schedule: '7:00 AM',
      teams: null
    },
    {
      event: 'Athletics (Relay)',
      participants: ["Vinod, Abhimanyu, Sweta, Sveekruth - Irrationals",
        "Vishesh, Deepak, Pratiksha, Sumani",
        "Yatika, Abhilash, Thomas, Smriti", 
        "Anchal, Deepanshu, Sukalyan, Arvindhane",
        "Jagat, Tenzin, Nila, Thejaswini - Garib Rath",
        "Sanika, Atharva, Himanshu, Muskaan - Jan Shatabdi Exp.",
        "Aasma, Aayusha, Vyaas, Somesh - MCL"
      ],
      results: [
        { name: 'Anchal, Deepanshu, Sukalyan, Arvindhane', position: 1, time: '01:01.81' },
        { name: 'Vinod, Abhimanyu, Sweta, Sveekruth', position: 2, time: '01:03.05' },
        { name: 'Himanshu, Faraz, Maiolica, Fleming', position: 3, distance: '01:04.10' }
      ],
      status: 'Complete!',
      schedule: '7:30 AM',
      teams: null
    },
    {
      event: 'Badminton',
      participants: ['Supratim, Arun, Anchal - Monkey Baat', 
        'Kalpajyoti, Adi, Sahana - MCL',
        'Srikanth, Arvindhane, Trishita - Jeem Skiiills',
        'Himanshu, Rajesh, Angella - HRA', 
        'Yatika, Thomas, Abhilash - Serve-ivors',
        'Sveekruth, Kirubananth, Aditi - Backhanded Compliment',
        'Shubhakanta, Jagat, Nahida - Shuttlecock Chaos',
        'Vishesh, Pratiksha, Sweta - Team 1',
        'Pradeep, Nuthan, Raniya - Team 2',
        'Bapun, Atharva, Sanika - Hebbian Hitters',
        'Vinod, Vyaas, Smriti - NetFlicks',
        'Himaghna, Deepanshu, Surbhi - Team 3',
        'Himanshu, Faraz, Maiolica - Team 4',
        "Mainak, Gaayathree, Abhimanyu - Team 5"
      ],
      results: [
        {name : 'MCL', position: 1, time: ""},
        { name: 'Monkey Baat', position: 2, time: '' },
        { name: 'NetFlicks', position: 3, time: '21-19 10-21 21-18' }
      ],
      status: 'Complete! Final: Monkey Baat vs. MCL 9-11 11-6 7-11, 8-11 11-9 11-5, 14-15 8-11',
      schedule: '9:30 AM - 5:00 PM',
      teams: ['Monkey Baat', 'MCL', 'Jeem Skiiills', 'HRA', 'Serve-ivors', 'Backhanded Compliment',
        'Shuttlecock Chaos', 'Team 1', 'Team 2', 'Hebbian Hitters', 'NetFlicks', 'Team 3', 'Team 4', "Team Mainek"
      ]
    },
    {
      event: 'Table Tennis',
      participants: ['Supratim, Adi, Anchal - MonkeySmashers',
        'Mainak, Sukalyan, Sweta - Top-down Spin',
        'Pradeep, Sanika, Sveekruth - TT injection',
        'Smriti, Jagat, Thomas - Team 1',
        'Deepak, Atharva, Yatika - Tatti',
        'Vinod, Vyaas, Ruchika/AP - Table turners',
        'Himanshu, Faraz, Maiolica - Team 2',
        'Subhakanta, Himaghna, Sumani - Traffic light',
        'Muskaan, Vyaas, Arvindhane - Team 3'
      ],
      results: [
        { name: 'MonkeySmashers', position: 1, time: '' },
        { name: 'Top-down spin', position: 2, time: '' },
        { name: 'Muskaan, Vyaas, Arvindhane', position: 3, time: '' }
      ],
      status: 'Complete!',
      schedule: '5.40 PM - 7.00 PM',
      teams: ['MonkeySmashers', 'Top-down Spin', 'TT injection', 'Team 1', 'Tatti', 'Table turners', 'Team 2', 'Traffic light', 'Team 3']
    },
        {
      event: 'Foosball',
      participants: ['Subhakanta, Sumani, Himaghna - Evolution',
        'Himanshu, Anchal, Faraz - Useless midfielders',
        'Pradeep, Raniya, Abdullah - Team 1',
        'Sveekruth, Aditi, Ishatpreet - Hyper Snipers',
        'Aayusha, Nila, Thomas - TriTAN',
        'Atharva, Vinod/Rajesh, Muskaan - foos foos',
        'Himanshu - Team Loser 1',
        'Aayusha - Team Loser 2'
      ],
      results: [
        { name: 'foos foos', position: 1, time: '' },
        { name: 'Evolution', position: 2, time: '' },
        {name: 'Hyper Snipers', position: 3, time: '' }
      ],
      status: 'Complete!',
      schedule: '5.40 PM - 7.00 PM',
      teams: ['Evolution', 'Useless midfielders', 'Team 1', 'Hyper Snipers', 'TriTAN', 'foos foos', 'Team Loser 1', 'Team Loser 2']
    }
  ];
  res.json(events);
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`🏅 Department Sports Day server running at http://localhost:${PORT}`);
  console.log('You can also use your local IP address to access from other devices on the same network.');
});

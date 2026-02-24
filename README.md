# 🏆 Sports Scores Live

A beautiful, responsive webpage for displaying live sports scores, hosted on your local network.

## Features

- 📱 Responsive design that works on desktop and mobile
- 🎨 Modern UI with gradient background and smooth animations
- ⚡ Real-time score updates
- 🌐 Hosted on local IP: add your own
- 🏅 Support for multiple sports (Football, Basketball, Tennis, Cricket, Baseball)


## Installation
Download and install Node.js for your specific OS from [nodejs.org](nodejs.org). Then,
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://your_ip_address:3000
   ```

## Project Structure

```
.
├── public/
│   ├── index.html       # Main HTML page
│   ├── styles.css       # Styling
│   └── script.js        # Frontend JavaScript
├── src/
│   └── server.js        # Express server
├── package.json         # Dependencies
└── README.md            # This file
```

## API Endpoints

- `GET /` - Main sports scores page
- `GET /api/scores` - JSON array of current scores

## Customization

To add or modify scores, edit the scores array in `src/server.js` under the `/api/scores` endpoint.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT



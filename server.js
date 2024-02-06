const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// הגדרת מיקום קבצי ה-HTML
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// הצגת דף HTML כאשר מגיעים לנתיב הבא
app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// הגדרת יישום השרת להאזנה על פורט מסוים
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
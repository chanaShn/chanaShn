console.log('Hello, World!');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// הצגת דף HTML כאשר מגיעים לנתיב הבא
app.get('/', (req, res) => {
  // שינוי כתובת הקובץ לכתובת מוחלטת
  res.sendFile(path.join(__dirname, 'index.html'));
});

// הגדרת יישום השרת להאזנה על פורט מסוים
app.listen(port, () => {
  console.log(`Server is running on port ${3000}`);
});
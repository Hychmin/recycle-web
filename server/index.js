const express = require('express');
const cors = require('cors');
const recyclableItems = require('./data/recyclableItems'); // 데이터 파일 경로

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());

app.get('/api/recycle', (req, res) => {
    const { query } = req.query;
    
    if (query) {
        const item = recyclableItems.find(item => item.name === query);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: '해당 결과가 없습니다.' });
        }
    } else {
        if (recyclableItems.length > 0) {
            res.json(recyclableItems);
        } else {
            res.status(404).json({ error: '해당 결과가 없습니다.' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// 예시로 저장할 데이터 배열
const recyclableItems = [
    { name: '바나나', description: '바나나 껍질은 음식물 쓰레기로 버려요.' },
    { name: '종이컵', description: '종이컵은 종이재질이므로 종이 재활용함에 버려주세요.' },
    { name: '유리병', description: '유리병은 유리 재질이므로 유리 재활용함에 버려주세요.' }
];

app.use(cors());

// 재활용 정보 제공 API 엔드포인트
app.get('/api/recycle', (req, res) => {
    const { query } = req.query;
    // 검색 쿼리가 있을 경우 해당 데이터를 반환
    if (query) {
        const item = recyclableItems.find(item => item.name === query);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ error: '해당하는 재활용 정보를 찾을 수 없습니다.' });
        }
    } else {
        // 검색 쿼리가 없을 경우 모든 데이터 반환
        res.json(recyclableItems);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. 地図の初期化
    const map = L.map('map').setView([35.455, 139.635], 14);

    // 2. タイルレイヤーの追加
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 3. データ取得とマーカー設置
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const points = [];
            data.forEach(point => {
                const latLon = [point.lat, point.lon];
                points.push(latLon);

                // マーカーを作成
                const marker = L.marker(latLon).addTo(map);

                // ポップアップを作成
                marker.bindPopup(`
                    <h3>${point.name}</h3>
                    <p><strong>スコア:</strong> ${point.score}</p>
                    <p><em>${point.notes}</em></p>
                `);
            });

            // 4. 訪問ルートを線で結ぶ
            const polyline = L.polyline(points, { color: '#e74c3c', weight: 3 }).addTo(map);

            // 5. 全てのマーカーが収まるように地図の表示範囲を調整
            map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
        })
        .catch(error => console.error('Error loading data:', error));
});

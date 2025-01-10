// script.js

function calculateDistance() {
    const startPoint = document.getElementById('start-point').value;
    const endPoint = document.getElementById('end-point').value;
    
    // ตัวอย่างการคำนวณระยะทาง (การใช้งาน API ที่เชื่อมโยงกับ Google Maps หรือ Mapbox)
    if (startPoint && endPoint) {
        // แสดงข้อความผลลัพธ์
        document.getElementById('result').innerHTML = `ระยะทางจาก ${startPoint} ถึง ${endPoint} คือ 500 กิโลเมตร`;
    } else {
        document.getElementById('result').innerHTML = 'กรุณากรอกข้อมูลทั้งสองช่อง';
    }
}

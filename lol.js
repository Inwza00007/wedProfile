// script.js

// ฟังก์ชันคำนวณภาษี
function calculateTax() {
    var income = parseFloat(document.getElementById('income').value);
    var deductions = parseFloat(document.getElementById('deductions').value);

    // ตรวจสอบความถูกต้องของข้อมูล
    if (isNaN(income) || isNaN(deductions) || income <= 0 || deductions < 0) {
        document.getElementById('tax-result').innerText = "กรุณากรอกข้อมูลให้ถูกต้อง";
        return;
    }

    // คำนวณรายได้หลังหักลดหย่อน
    var taxableIncome = income - deductions;

    // ตรวจสอบหากรายได้หลังหักลดหย่อนน้อยกว่า 0
    if (taxableIncome < 0) {
        taxableIncome = 0;
    }

    // อัตราภาษีสำหรับรายได้ต่างๆ (ตัวอย่าง)
    var tax = 0;
    if (taxableIncome <= 150000) {
        tax = taxableIncome * 0.05;
    } else if (taxableIncome <= 300000) {
        tax = 150000 * 0.05 + (taxableIncome - 150000) * 0.1;
    } else if (taxableIncome <= 500000) {
        tax = 150000 * 0.05 + 150000 * 0.1 + (taxableIncome - 300000) * 0.15;
    } else if (taxableIncome <= 750000) {
        tax = 150000 * 0.05 + 150000 * 0.1 + 200000 * 0.15 + (taxableIncome - 500000) * 0.2;
    } else if (taxableIncome <= 1000000) {
        tax = 150000 * 0.05 + 150000 * 0.1 + 200000 * 0.15 + 250000 * 0.2 + (taxableIncome - 750000) * 0.25;
    } else {
        tax = 150000 * 0.05 + 150000 * 0.1 + 200000 * 0.15 + 250000 * 0.2 + 250000 * 0.25 + (taxableIncome - 1000000) * 0.3;
    }

    // แสดงผลลัพธ์
    document.getElementById('tax-result').innerText = "ภาษีที่ต้องชำระ: " + tax.toFixed(2) + " บาท";
}

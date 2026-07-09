// ==========================================================================
// SONG-YA (ส่องยา) - Core JavaScript Logic
// ==========================================================================
// ฐานข้อมูลยาจำลอง (Medicine Database)
const medicineDatabase = [
    {
        id: "paracetamol",
        nameTh: "พาราเซตามอล (Paracetamol) 500 มก.",
        nameEn: "Paracetamol 500mg",
        type: "ยาสามัญประจำบ้าน",
        indications: "ใช้เพื่อบรรเทาอาการปวดเล็กน้อยถึงปานกลาง เช่น ปวดศีรษะ ปวดฟัน ปวดประจำเดือน ปวดกล้ามเนื้อ และช่วยลดไข้ ตัวร้อน",
        dosage: "• ผู้ใหญ่และเด็กอายุมากกว่า 12 ปี: รับประทานครั้งละ 1-2 เม็ด ทุก 4-6 ชั่วโมงเมื่อมีอาการ (ไม่ควรรับประทานเกินวันละ 8 เม็ด หรือ 4,000 มก.)\n• เด็กอายุ 6-12 ปี: รับประทานครั้งละ 1/2 ถึง 1 เม็ด ทุก 4-6 ชั่วโมงเมื่อมีอาการ",
        warnings: "ห้ามรับประทานยาเกินขนาดที่ระบุไว้บนฉลากเด็ดขาด เพราะอาจทำให้เกิดภาวะตับวายเฉียบพลันและเป็นอันตรายถึงชีวิต หลีกเลี่ยงการทานร่วมกับเครื่องดื่มแอลกอฮอล์ และห้ามใช้ร่วมกับยาอื่นที่มีพาราเซตามอลเป็นส่วนประกอบอยู่แล้ว",
        description: "เม็ดกลมสีขาว แบน หรือเม็ดรีสีขาว มีเส้นแบ่งครึ่งด้านหนึ่ง ไม่มีกลิ่น รสขมเล็กน้อย",
        keywords: ["พารา", "พาราเซตามอล", "para", "paracetamol", "แก้ปวด", "ลดไข้", "ตัวร้อน", "ปวดหัว", "ไทลินอล", "ซาร่า", "tylenol", "sara"]
    },
    {
        id: "chlorpheniramine",
        nameTh: "คลอเฟนิรามีน (Chlorpheniramine) 4 มก.",
        nameEn: "Chlorpheniramine Maleate 4mg",
        type: "ยาสามัญประจำบ้าน / ยาอันตราย",
        indications: "ยาลดน้ำมูก บรรเทาอาการแพ้จากระบบทางเดินหายใจ เช่น แพ้อากาศ จาม คันคอ คันตา และบรรเทาอาการคันจากลมพิษหรือผื่นแพ้ผิวหนัง",
        dosage: "• ผู้ใหญ่: รับประทานครั้งละ 1 เม็ด วันละ 3-4 ครั้ง หลังอาหารและก่อนนอน\n• เด็กอายุ 6-12 ปี: รับประทานครั้งละ 1/2 เม็ด วันละ 3-4 ครั้ง หลังอาหารและก่อนนอน",
        warnings: "ยานี้อาจทำให้เกิดอาการง่วงซึมอย่างรุนแรง ควรหลีกเลี่ยงการขับขี่ยานพาหนะ หรือการทำงานกับเครื่องจักรกลหลังทานยา ห้ามดื่มเครื่องดื่มที่มีแอลกอฮอล์ร่วมด้วย",
        description: "เม็ดกลมขนาดเล็ก สีเหลือง มีตัวอักษรหรือเส้นแบ่งครึ่งบนผิวเม็ดยา",
        keywords: ["คลอเฟนิรามีน", "แก้แพ้", "ลดน้ำมูก", "cpm", "chlorpheniramine", "คัน", "ภูมิแพ้", "เม็ดเหลือง"]
    },
    {
        id: "antacid",
        nameTh: "ยาลดกรดชนิดเม็ด (Antacid Tablets)",
        nameEn: "Antacid Tablet",
        type: "ยาสามัญประจำบ้าน",
        indications: "ใช้เพื่อลดกรดในกระเพาะอาหาร บรรเทาอาการจุกเสียด แน่นท้อง ท้องอืด ท้องเฟ้อ และปวดท้องเนื่องจากมีกรดมากเกินไปในกระเพาะอาหาร หรือจากแผลในกระเพาะอาหารและลำไส้",
        dosage: "• ผู้ใหญ่: เคี้ยวให้ละเอียดก่อนกลืน ครั้งละ 1-2 เม็ด วันละ 3-4 ครั้ง หลังอาหาร 1 ชั่วโมง และก่อนนอน หรือเมื่อมีอาการ",
        warnings: "ห้ามใช้ในผู้ที่เป็นโรคไตหรือโรคหัวใจรุนแรง ไม่ควรรับประทานติดต่อกันเกิน 2 สัปดาห์เว้นแต่แพทย์สั่ง ยานี้อาจขัดขวางการดูดซึมของยาตัวอื่น จึงควรทานห่างจากยาอื่นอย่างน้อย 2 ชั่วโมง",
        description: "เม็ดกลมแบนขนาดใหญ่ สีขาวหรือชมพูอ่อน มักมีรสหวานและกลิ่นมินต์ ต้องเคี้ยวก่อนกลืน",
        keywords: ["ยาลดกรด", "ลดกรด", "ปวดท้อง", "กรดไหลย้อน", "จุกเสียด", "ท้องอืด", "antacid"]
    },
    {
        id: "ibuprofen",
        nameTh: "ไอบูโพรเฟน (Ibuprofen) 400 มก.",
        nameEn: "Ibuprofen 400mg",
        type: "ยาอันตราย (ต้องจ่ายโดยแพทย์หรือเภสัชกร)",
        indications: "บรรเทาอาการปวดกระดูก ข้อ กล้ามเนื้อ ปวดประจำเดือนขั้นรุนแรง ปวดฟัน ปวดศีรษะไมเกรน และช่วยลดอาการอักเสบ บวม แดง ร้อน",
        dosage: "• ผู้ใหญ่: รับประทานครั้งละ 1 เม็ด ทุก 4-6 ชั่วโมงหลังอาหารทันทีเมื่อมีอาการปวด (ไม่ควรทานเกินวันละ 3 เม็ด หรือ 1,200 มก.)\n• ควรทานยาพร้อมอาหารหรือหลังอาหารทันทีและดื่มน้ำตามมากๆ เพื่อลดการระคายเคืองกระเพาะอาหาร",
        warnings: "ห้ามใช้ในผู้ที่เป็นแผลในกระเพาะอาหารหรือลำไส้ มีประวัติเลือดออกในทางเดินอาหาร หรือแพ้ยากลุ่ม NSAIDs อาจเพิ่มความเสี่ยงของการเกิดลิ่มเลือดอุดตันในเส้นเลือดสมองหรือหัวใจหากใช้ติดต่อกันเป็นเวลานาน",
        description: "เม็ดเรียวรี เคลือบฟิล์มสีชมพูเข้มหรือสีส้มสว่าง ผิวเรียบเป็นมัน",
        keywords: ["ไอบูโพรเฟน", "ไอบู", "ibuprofen", "ibu", "แก้ปวดฟัน", "แก้ปวดอักเสบ", "แก้ปวดประจำเดือน", "เม็ดชมพู", "ไมเกรน"]
    }
];
// การอ้างอิงองค์ประกอบ DOM (DOM Elements)
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cameraBtn = document.getElementById("cameraBtn");
const clearBtn = document.getElementById("clearBtn");
const resultsSection = document.getElementById("resultsSection");
const warningBanner = document.getElementById("warningBanner");
// โมดอลกล้องถ่ายรูป
const cameraModal = document.getElementById("cameraModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const cameraVideo = document.getElementById("cameraVideo");
const captureBtn = document.getElementById("captureBtn");
const scannerLaser = document.getElementById("scannerLaser");
const scanningOverlay = document.getElementById("scanningOverlay");
const cameraErrorMessage = document.getElementById("cameraErrorMessage");
const captureCanvas = document.getElementById("captureCanvas");
let stream = null; // เก็บกระแสข้อมูลกล้อง (Camera stream flow)
// ==========================================================================
// 1. ระบบค้นหาข้อมูลยา (Search Functions)
// ==========================================================================
// ค้นหายาจากคำค้น
function searchMedicine(query) {
    if (!query) {
        resultsSection.style.display = "none";
        resultsSection.innerHTML = "";
        return;
    }
    const cleanQuery = query.trim().toLowerCase();
    
    // ค้นหายาที่มีคำค้นตรงกับคีย์เวิร์ด
    const matchedMeds = medicineDatabase.filter(med => {
        return med.keywords.some(keyword => cleanQuery.includes(keyword)) ||
               med.nameTh.toLowerCase().includes(cleanQuery) ||
               med.nameEn.toLowerCase().includes(cleanQuery);
    });
    displayResults(matchedMeds, query);
}
// แสดงผลลัพธ์ข้อมูลยาบนหน้าเว็บ
function displayResults(matches, originalQuery) {
    resultsSection.style.display = "block";
    resultsSection.innerHTML = "";
    if (matches.length === 0) {
        resultsSection.innerHTML = `
            <div class="no-results">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
                <p>ไม่พบข้อมูลสำหรับคำว่า "<strong>${escapeHtml(originalQuery)}</strong>"</p>
                <p style="margin-top: 8px; font-size: 0.85rem; opacity: 0.8;">
                    ลองค้นหาคีย์เวิร์ดอื่นๆ เช่น: <strong>พารา</strong>, <strong>แก้แพ้</strong>, <strong>ยาลดกรด</strong> หรือ <strong>ไอบูโพรเฟน</strong>
                </p>
            </div>
        `;
        // เลื่อนหน้าจอลงมาดูผลลัพธ์บนมือถือ
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        return;
    }
    // สร้างการ์ดผลลัพธ์สำหรับยาทุกตัวที่เจอ
    matches.forEach(med => {
        const card = document.createElement("div");
        card.className = "result-card";
        
        // แยกสรรพคุณ/วิธีใช้ที่มีขึ้นบรรทัดใหม่ (\n) เป็นย่อหน้า
        const formattedDosage = med.dosage.split('\n').join('<br>');
        card.innerHTML = `
            <div class="result-header">
                <div class="result-title-group">
                    <span class="result-name-th">${med.nameTh}</span>
                    <span class="result-name-en">${med.nameEn}</span>
                </div>
                <span class="result-badge">${med.type}</span>
            </div>
            
            <div class="result-body">
                <div class="info-row">
                    <div class="info-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        สรรพคุณ / ข้อบ่งใช้
                    </div>
                    <div class="info-value">${med.indications}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ขนาดและวิธีใช้ยา
                    </div>
                    <div class="info-value">${formattedDosage}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <line x1="9" y1="9" x2="15" y2="15"/>
                            <line x1="15" y1="9" x2="9" y2="15"/>
                        </svg>
                        ลักษณะทางกายภาพของยา
                    </div>
                    <div class="info-value">${med.description}</div>
                </div>
                <div class="info-row alert">
                    <div class="info-label">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                            <line x1="12" y1="9" x2="12" y2="13"/>
                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        คำเตือนและข้อควรระวังสำคัญ
                    </div>
                    <div class="info-value">${med.warnings}</div>
                </div>
            </div>
        `;
        resultsSection.appendChild(card);
    });
    // เลื่อนหน้าจอลงมาดูผลลัพธ์อย่างนุ่มนวล
    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}
// หลบหลีกโค้ด HTML เพื่อความปลอดภัยจาก XSS
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
// ==========================================================================
// 2. ตรรกะจัดการช่องป้อนข้อมูลและปุ่มหลัก (Control Handlers)
// ==========================================================================
// ค้นหาเมื่อกดคลิกปุ่มค้นหา
searchBtn.addEventListener("click", () => {
    searchMedicine(searchInput.value);
});
// ค้นหาเมื่อกดปุ่ม Enter ในช่องอินพุต
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchMedicine(searchInput.value);
    }
});
// ตรวจสอบค่าในอินพุตเพื่อแสดง/ซ่อนปุ่มล้างคำค้น
searchInput.addEventListener("input", () => {
    if (searchInput.value.length > 0) {
        clearBtn.style.display = "flex";
    } else {
        clearBtn.style.display = "none";
        searchMedicine(""); // ล้างผลลัพธ์
    }
});
// ล้างคำค้นในกล่อง
clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    searchInput.focus();
    searchMedicine("");
});
// ==========================================================================
// 3. ระบบเชื่อมต่อกล้องจริงและการจำลอง AI ตรวจเม็ดยา (Camera & Scanner)
// ==========================================================================
// เปิดกล้องเว็บแคม
async function startCamera() {
    // รีเซ็ตการแสดงผลเอฟเฟกต์ภายในโมดอล
    cameraErrorMessage.style.display = "none";
    scanningOverlay.classList.remove("active");
    scannerLaser.classList.add("scanning");
    
    // ตั้งค่าตัวเลือกของกล้อง โดยขอเป็นกล้องหลัง (Environment) สำหรับโทรศัพท์มือถือ
    const constraints = {
        video: {
            facingMode: "environment",
            width: { ideal: 640 },
            height: { ideal: 480 }
        },
        audio: false
    };
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        cameraVideo.srcObject = stream;
        
        // เมื่อดึงวิดีโอมาได้สำเร็จ ให้แสดงโมดอล
        cameraModal.classList.add("active");
    } catch (err) {
        console.error("Error accessing camera: ", err);
        // แสดงข้อความผิดพลาดบนหน้าเว็บหากสิทธิ์ถูกปฏิเสธหรือไม่พบกล้อง
        cameraModal.classList.add("active");
        cameraErrorMessage.style.display = "flex";
        scannerLaser.classList.remove("scanning");
        if (cameraVideo.srcObject) {
            cameraVideo.srcObject = null;
        }
    }
}
// ปิดกล้องเว็บแคม
function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
    cameraVideo.srcObject = null;
    cameraModal.classList.remove("active");
    scannerLaser.classList.remove("scanning");
}
// ถ่ายรูปเม็ดยาและดำเนินการจำลองการวิเคราะห์
function captureAndProcessImage() {
    if (!stream) {
        // หากไม่มีกล้องทำงานอยู่ (เช่น เกิดความผิดพลาดขึ้น) ให้ข้ามไปการจำลอง
        simulatePillScanning();
        return;
    }
    const context = captureCanvas.getContext('2d');
    captureCanvas.width = cameraVideo.videoWidth;
    captureCanvas.height = cameraVideo.videoHeight;
    
    // วาดภาพปัจจุบันของวิดีโอลงในแคนวาส
    context.drawImage(cameraVideo, 0, 0, captureCanvas.width, captureCanvas.height);
    
    // หยุดกล้องหลังจากกดถ่ายรูปแล้วเพื่อเซฟทรัพยากร
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    
    // แสดงหน้าจอประมวลผลวิเคราะห์ผลการจำลอง
    scanningOverlay.classList.add("active");
    scannerLaser.classList.remove("scanning");
    // จำลองระยะเวลาประมวลผลสแกนยา (2.5 วินาที)
    setTimeout(() => {
        scanningOverlay.classList.remove("active");
        
        // เติมคำค้นด้วย "พาราเซตามอล" ในช่องค้นหา และแสดงผลโดยอัตโนมัติ
        searchInput.value = "พาราเซตามอล";
        clearBtn.style.display = "flex";
        
        // ค้นหาและปิดโมดอล
        searchMedicine("พาราเซตามอล");
        stopCamera();
        
        // เพิ่มเอฟเฟกต์การแสดงผลสำเร็จให้คำแจ้งเตือนกะพริบเบาๆ
        highlightSearchField();
    }, 2500);
}
// ระบบจำลองกรณีดึงกล้องเว็บแคมไม่ได้ (เช่น การรันบนสภาพแวดล้อมจำลองที่ไม่มีการต่อกล้อง)
function simulatePillScanning() {
    scanningOverlay.classList.add("active");
    scannerLaser.classList.remove("scanning");
    setTimeout(() => {
        scanningOverlay.classList.remove("active");
        searchInput.value = "พาราเซตามอล";
        clearBtn.style.display = "flex";
        searchMedicine("พาราเซตามอล");
        stopCamera();
        highlightSearchField();
    }, 2000);
}
// ทำไฮไลต์ที่ช่องค้นหาเพื่อนำสายตาผู้ใช้งานหลังจากระบบสแกนอัตโนมัติ
function highlightSearchField() {
    const inputWrapper = document.querySelector(".search-input-wrapper");
    inputWrapper.style.boxShadow = "0 0 0 5px rgba(229, 135, 173, 0.4)";
    inputWrapper.style.transform = "scale(1.02)";
    inputWrapper.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    
    setTimeout(() => {
        inputWrapper.style.boxShadow = "";
        inputWrapper.style.transform = "";
    }, 1200);
}
// ผูกเหตุการณ์ปุ่มต่างๆ
cameraBtn.addEventListener("click", startCamera);
closeModalBtn.addEventListener("click", stopCamera);
captureBtn.addEventListener("click", captureAndProcessImage);
// การปิดโมดอลเมื่อกดพื้นหลังด้านนอก
cameraModal.addEventListener("click", (e) => {
    if (e.target === cameraModal) {
        stopCamera();
    }
});
// เริ่มต้นหน้าเว็บ ค้นหาพาราเซตามอลเพื่อเป็นการแสดงผลตั้งต้น (เลือกปิดฟังก์ชันนี้หากอยากให้หน้าเว็บเปล่า)
// ในที่นี้เราจะคงช่องค้นหาเปล่าไว้ตามต้นฉบับรูป แต่พร้อมใช้งานทันทีที่พิมพ์ค้นหา
console.log("SONG-YA application initialized successfully.");

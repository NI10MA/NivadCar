const CARS = {
    bmw:{
        label:"BMW COLLECTION",
        accent:"#1c69d4",
        defaultIndex:3,
        models:[
            {name:"M3", sub:"E30", year:"1986_1991", img:"cars/E30.png",
                specs:{engine:"2.3L\nINLINE-4", hp:"215 HP\n@ 6750 RPM", trans:"5 SPEED\nMANUAL", top:"235 KM/H\nTOP SPEED", accel:"6.7 S\n0 - 100 KM/H"}},
            {name:"M3", sub:"E36", year:"1992_1999", img:"cars/E36.png",
                specs:{engine:"3.2L\nINLINE-6", hp:"321 HP\n@ 7400 RPM", trans:"6 SPEED\nMANUAL", top:"250 KM/H\nTOP SPEED", accel:"5.5 S\n0 - 100 KM/H"}},
            {name:"M5", sub:"E39", year:"1998_2003", img:"cars/E39.png",
                specs:{engine:"4.9L\nV8", hp:"400 HP\n@ 6600 RPM", trans:"6 SPEED\nMANUAL", top:"260 KM/H\nTOP SPEED", accel:"5.3 S\n0 - 100 KM/H"}},
            {name:"M3", sub:"E46", year:"2000_2006", img:"cars/E46.png",
                specs:{engine:"3.2L\nINLINE-6", hp:"350 HP\n@ 7900 RPM", trans:"6 SPEED\nMANUAL", top:"290 KM/H\nTOP SPEED", accel:"4.9 S\n0 - 100 KM/H"}},
            {name:"M3", sub:"E92", year:"2007_2013", img:"cars/E92.png",
                specs:{engine:"4.0L\nV8", hp:"414 HP\n@ 8300 RPM", trans:"7 SPEED\nMANUAL", top:"270 KM/H\nTOP SPEED", accel:"4.6 S\n0 - 100 KM/H"}}
        ]
    },
    mercedes:{
        label:"MERCEDES-BENZ COLLECTION",
        accent:"#cfd2d6",
        defaultIndex:2,
        models:[
            {name:"300 SL", sub:"W198", year:"1954_1963", img:"cars/mb-300sl.png",
                specs:{engine:"3.0L\nINLINE-6", hp:"215 HP\n@ 5800 RPM", trans:"4 SPEED\nMANUAL", top:"250 KM/H\nTOP SPEED", accel:"8.8 S\n0 - 100 KM/H"}},
            {name:"E-CLASS", sub:"W124", year:"1984_1995", img:"cars/mb-w124.png",
                specs:{engine:"3.2L\nINLINE-6", hp:"220 HP\n@ 5800 RPM", trans:"4 SPEED\nMANUAL", top:"230 KM/H\nTOP SPEED", accel:"8.1 S\n0 - 100 KM/H"}},
            {name:"CLS", sub:"C219", year:"2004_2010", img:"cars/mb-cls.png",
                specs:{engine:"5.5L\nV8", hp:"388 HP\n@ 6000 RPM", trans:"7 SPEED\nAUTOMATIC", top:"270 KM/H\nTOP SPEED", accel:"5.2 S\n0 - 100 KM/H"}},
            {name:"C63", sub:"AMG W204", year:"2008_2014", img:"cars/mb-c63.png",
                specs:{engine:"6.2L\nV8 AMG", hp:"451 HP\n@ 6800 RPM", trans:"7 SPEED\nAMG MCT", top:"260 KM/H\nTOP SPEED", accel:"4.6 S\n0 - 100 KM/H"}},
            {name:"G-CLASS", sub:"", year:"1979_PRESENT", img:"cars/mb-gclass.png",
                specs:{engine:"4.0L\nTWIN-TURBO V8", hp:"577 HP\n@ 6000 RPM", trans:"9 SPEED\nAUTOMATIC", top:"240 KM/H\nTOP SPEED", accel:"4.5 S\n0 - 100 KM/H"}},
        ]
    },
    mitsubishi:{
        label:"MITSUBISHI COLLECTION",
        accent:"#e60012",
        defaultIndex:4,
        models:[
            {name:"GALANT", sub:"VR-4", year:"1987_1992", img:"cars/galant.png",
                specs:{engine:"2.0L\nTURBO INLINE-4", hp:"205 HP\n@ 6000 RPM", trans:"5 SPEED\nMANUAL", top:"225 KM/H\nTOP SPEED", accel:"6.9 S\n0 - 100 KM/H"}},
            {name:"3000GT", sub:"VR-4", year:"1991_2000", img:"cars/3000gt.png",
                specs:{engine:"3.0L\nTWIN-TURBO V6", hp:"320 HP\n@ 6000 RPM", trans:"6 SPEED\nMANUAL", top:"250 KM/H\nTOP SPEED", accel:"5.3 S\n0 - 100 KM/H"}},
            {name:"LANCER EVO", sub:"VI", year:"1999_2001", img:"cars/evo6.png",
                specs:{engine:"2.0L\nTURBO INLINE-4", hp:"280 HP\n@ 6500 RPM", trans:"5 SPEED\nMANUAL", top:"250 KM/H\nTOP SPEED", accel:"4.6 S\n0 - 100 KM/H"}},
            {name:"LANCER EVO", sub:"IX", year:"2005_2007", img:"cars/evo9.png",
                specs:{engine:"2.0L\nTURBO INLINE-4", hp:"280 HP\n@ 6500 RPM", trans:"6 SPEED\nMANUAL", top:"250 KM/H\nTOP SPEED", accel:"4.8 S\n0 - 100 KM/H"}},
            {name:"LANCER EVO", sub:"X", year:"2007_2015", img:"cars/evo10.png",
                specs:{engine:"2.0L\nTURBO INLINE-4", hp:"295 HP\n@ 6500 RPM", trans:"5 SPEED\nMANUAL", top:"250 KM/H\nTOP SPEED", accel:"4.9 S\n0 - 100 KM/H"}}
        ]
    },

    lamborghini:{
        label:"LAMBORGHINI COLLECTION",
        accent:"#ddb321",
        defaultIndex:4,
        models:[
            {name:"MIURA", sub:"P400 SV", year:"1971_1973", img:"cars/lb-miura.png",
                specs:{engine:"3.9L\nV12", hp:"385 HP\n@ 7850 RPM", trans:"5 SPEED\nMANUAL", top:"290 KM/H\nTOP SPEED", accel:"5.5 S\n0 - 100 KM/H"}},
            {name:"COUNTACH", sub:"QV", year:"1985_1990", img:"cars/lb-countach.png",
                specs:{engine:"5.2L\nV12", hp:"455 HP\n@ 7000 RPM", trans:"5 SPEED\nMANUAL", top:"295 KM/H\nTOP SPEED", accel:"4.9 S\n0 - 100 KM/H"}},
            {name:"DIABLO", sub:"VT", year:"1990_2001", img:"cars/lb-diablo.png",
                specs:{engine:"5.7L\nV12", hp:"492 HP\n@ 7000 RPM", trans:"5 SPEED\nMANUAL", top:"325 KM/H\nTOP SPEED", accel:"4.5 S\n0 - 100 KM/H"}},
            {name:"MURCIÉLAGO", sub:"LP640", year:"2006_2010", img:"cars/murcielago.png",
                specs:{engine:"6.5L\nV12", hp:"631 HP\n@ 8000 RPM", trans:"6 SPEED\nMANUAL", top:"340 KM/H\nTOP SPEED", accel:"3.4 S\n0 - 100 KM/H"}},
            {name:"AVENTADOR", sub:"LP700-4", year:"2011_2022", img:"cars/aventador.png",
                specs:{engine:"6.5L\nV12", hp:"690 HP\n@ 8250 RPM", trans:"7 SPEED\nISR", top:"350 KM/H\nTOP SPEED", accel:"2.9 S\n0 - 100 KM/H"}}
        ]
    },
    ferrari:{
        label:"FERRARI COLLECTION",
        accent:"#ff2800",
        defaultIndex:2,
        models:[
            {name:"250 GTO", sub:"", year:"1962_1964", img:"cars/ferrari-250gto.png",
                specs:{engine:"3.0L\nV12", hp:"300 HP\n@ 7500 RPM", trans:"5 SPEED\nMANUAL", top:"280 KM/H\nTOP SPEED", accel:"6.1 S\n0 - 100 KM/H"}},
            {name:"TESTAROSSA", sub:"", year:"1984_1996", img:"cars/ferrari-testarossa.png",
                specs:{engine:"4.9L\nFLAT-12", hp:"390 HP\n@ 6300 RPM", trans:"5 SPEED\nMANUAL", top:"290 KM/H\nTOP SPEED", accel:"5.2 S\n0 - 100 KM/H"}},
            {name:"F40", sub:"", year:"1987_1992", img:"cars/ferrari-f40.png",
                specs:{engine:"2.9L\nTWIN-TURBO V8", hp:"478 HP\n@ 7000 RPM", trans:"5 SPEED\nMANUAL", top:"324 KM/H\nTOP SPEED", accel:"4.2 S\n0 - 100 KM/H"}},
            {name:"ENZO", sub:"", year:"2002_2004", img:"cars/ferrari-enzo.png",
                specs:{engine:"6.0L\nV12", hp:"651 HP\n@ 7800 RPM", trans:"6 SPEED\nSEMI-AUTO", top:"350 KM/H\nTOP SPEED", accel:"3.4 S\n0 - 100 KM/H"}},
            {name:"458", sub:"ITALIA", year:"2009_2015", img:"cars/ferrari-458.png",
                specs:{engine:"4.5L\nV8", hp:"562 HP\n@ 9000 RPM", trans:"7 SPEED\nDUAL-CLUTCH", top:"325 KM/H\nTOP SPEED", accel:"3.4 S\n0 - 100 KM/H"}}
        ]
    },
};
// آیکون‌های خطی برای پنل مشخصات
const ICONS = {
    engine: `<svg viewBox="0 0 24 24"><path d="M4 10h6l2-3h5l2 3h1v6h-2v2H8v-2H4z"/><path d="M9 10V7M13 10V7"/></svg>`,
    hp:     `<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>`,
    trans:  `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>`,
    top:    `<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 13l4-4M12 5V3"/></svg>`,
    accel:  `<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 13V9M9 3h6"/></svg>`
};

let brand = "bmw";
let stageIndex = CARS[brand].defaultIndex;
let direction = 0;

const thumbRow      = document.getElementById("thumbRow");
const collectionSub = document.getElementById("collectionSub");
const detailBox     = document.getElementById("detailBox");
const prevBtn       = document.getElementById("prevBtn");
const nextBtn       = document.getElementById("nextBtn");

function specLine(value){
    const parts = value.split("\n");
    return { value: parts[0], label: parts[1] || "" };
}
function lines(value){
    const { value: v, label } = specLine(value);
    return `<span class="d-value">${v}</span>${label ? `<span class="d-label">${label}</span>` : ""}`;
}

// ------------------------------------------------------------
// این تابع تضمین می‌کنه ماشین روی استیج همیشه فیزیکی وسط ردیف باشه.
// ترتیب رندر رو می‌چرخونه (نه ترتیب اصلی آرایه‌ی models) تا
// stageIndex همیشه وسط بمونه و بقیه دورش (چپ/راست) بچرخن.
// ------------------------------------------------------------
function getDisplayOrder(total, stageIndex){
    const half = Math.floor(total / 2);
    const order = [];
    for (let offset = -half; offset < total - half; offset++){
        order.push((stageIndex + offset + total) % total);
    }
    return order;
}

function render(){
    const data = CARS[brand];
    const models = data.models;

    document.documentElement.style.setProperty("--accent", data.accent);
    collectionSub.textContent = data.label;
    thumbRow.dataset.dir = direction;

    const order = getDisplayOrder(models.length, stageIndex);

    thumbRow.innerHTML = "";
    const mid = Math.floor(models.length / 2);
    order.forEach((i,pos) =>{
        const car = models[i];
        const isStage = i === stageIndex;
        const thumb = document.createElement("div");
        thumb.className = "thumb" + (isStage ? " stage" : "");
        thumb.dataset.index = i;

        thumb.innerHTML = `
            <div class="thumb-img-wrap">
                <img src="${car.img}" alt="${car.name} ${car.sub || ""}">
                ${isStage ? '<span class="light-beam-right"></span><span class="stage-glow"></span>' : ""}
            </div>
            <span class="thumb-name">${car.name}${car.sub ? " " + car.sub : ""}</span>
            <span class="thumb-year">${car.year}</span>
        `;

        thumb.addEventListener("click", () => {
            direction = pos > mid ? 1 : -1;
            stageIndex = i;
            render();
        });

        thumbRow.appendChild(thumb);
    });

    const s = models[stageIndex].specs;
    detailBox.innerHTML = `
        <div class="detail-item">${ICONS.engine}<span>${lines(s.engine)}</span></div>
        <div class="detail-item">${ICONS.hp}<span>${lines(s.hp)}</span></div>
        <div class="detail-item">${ICONS.trans}<span>${lines(s.trans)}</span></div>
        <div class="detail-item">${ICONS.top}<span>${lines(s.top)}</span></div>
        <div class="detail-item">${ICONS.accel}<span>${lines(s.accel)}</span></div>
    `;
}

function next(){
    const total = CARS[brand].models.length;
    direction = 1;
    stageIndex = (stageIndex + 1) % total;
    render()
}

function prev(){
    const total = CARS[brand].models.length;
    direction = -1;
    stageIndex = (stageIndex - 1 + total) % total;
    render()
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

document.querySelectorAll(".brand-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".brand-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        brand = btn.dataset.brand.toLowerCase();
        stageIndex = CARS[brand].defaultIndex;
        render();
    });
});

render();

// ---- پخش دائمی ویدیوی هیرو ----
const vhVideo = document.getElementById("vhVideo");
function vhPlay(){
    const p = vhVideo.play();
    if (p && p.catch) p.catch(() => {});
}
vhPlay();
["pause","ended","loadedmetadata","canplay"].forEach(e => vhVideo.addEventListener(e, vhPlay));
document.addEventListener("visibilitychange", vhPlay);
setInterval(() => { if (vhVideo.paused) vhPlay(); }, 1000);

// اسکرول به فوتر با کلیک روی Contact نوبار
const navContact = document.getElementById("navContact");
if (navContact) {
    navContact.addEventListener("click", e => {
        e.preventDefault();
        const footer = document.querySelector(".site-footer");
        const top = footer.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
    });
}
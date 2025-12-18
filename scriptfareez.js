/* =========================
   LIVE DATE & TIME
========================= */
function updateDateTime() {
  const now = new Date();

  const date = now.toLocaleDateString("en-MY", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const time = now.toLocaleTimeString();

  const el = document.getElementById("liveDateTime");
  if (el) {
    el.innerHTML = date + "<br>" + time;
  }
}

setInterval(updateDateTime, 1000);
updateDateTime();













/* =========================
   EDUCATION POPUP
========================= */
function openEdu(school) {
  const popup = document.getElementById("eduPopup");
  const gallery = document.getElementById("eduGallery");
  const title = document.getElementById("eduTitle");

  if (!popup || !gallery || !title) return;

  gallery.innerHTML = "";

  if (school === "tadika") {
    title.innerText = "Smart Reader Kids";
    gallery.innerHTML = `<img src="tadika.JPG">`;
  }

  if (school === "skbsb") {
    title.innerText = "Sekolah Kebangsaan Bandar Sungai Buaya";
    gallery.innerHTML = `<img src="darjah1.JPG">`;
  }

  if (school === "star") {
    title.innerText = "Sekolah Tuanku Abdul Rahman (STAR), Ipoh";
    gallery.innerHTML = `
      <img src="apon.jpg">
      <img src="star1.JPG">
      <img src="star2.JPG">
      <img src="lxiibros.jpg">
      <img src="star3.JPG">
      <img src="star4.JPG">
      <img src="star5.JPG">
      <img src="star6.jpg">
    `;
  }

  if (school === "uitm") {
    title.innerText = "UiTM";
    gallery.innerHTML = `
      <img src="classphoto.JPG">
      <img src="akmal.JPG">
      <img src="alai.JPG">
      <img src="ostad.JPG">
    `;
  }

  popup.style.display = "block";
}

function closeEdu() {
  const popup = document.getElementById("eduPopup");
  if (popup) popup.style.display = "none";
}










/* =========================
   FAMILY IMAGE POPUP
========================= */
function openFamilyPopup(img) {
  const popup = document.getElementById("familyPopup");
  const popupImg = document.getElementById("familyPopupImg");

  if (!popup || !popupImg) return;

  popupImg.src = img.src;
  popup.style.display = "flex";
}

function closeFamilyPopup() {
  const popup = document.getElementById("familyPopup");
  if (popup) popup.style.display = "none";
}








/* =====================
   IMAGE POPUP (GLOBAL)
===================== */
function openImgPopup(img) {
  const popup = document.getElementById("imgPopup");
  const popupImg = document.getElementById("popupImg");

  if (!popup || !popupImg) return;

  popupImg.src = img.src;
  popup.style.display = "flex";
}

function closeImgPopup() {
  const popup = document.getElementById("imgPopup");
  if (popup) popup.style.display = "none";
}

/* =====================
   FACT POPUP
===================== */
function openFact(item) {
  const popup = document.getElementById("factPopup");
  const img = document.getElementById("factImage");

  if (!popup || !img) return;

  const images = {
    "green curry": "thaicurry.jpg",
    "grilled salmon": "grilledsalmon.jpg",
    "steak": "steak.jpg",
    "england": "england.jpg",
    "korea": "korea.jpg",
    "usa": "usa.jpg",
    "italy": "italy.jpg",
    "Lamborghini Urus": "urus.jpg",
    "Aston Martin DBX 707": "dbx.jpg",
    "Mercedes AMG GLE 63": "merc.jpg"
  };

  if (images[item]) {
    img.src = images[item];
    popup.style.display = "flex";
  }
}

function closeFact() {
  const popup = document.getElementById("factPopup");
  if (popup) popup.style.display = "none";
}

/* =====================
   MOVIE POSTER → VIDEO
===================== */
function playMovie(card) {
  const img = card.querySelector("img");
  const video = card.querySelector("video");

  if (!img || !video) return;

  img.style.display = "none";
  video.style.display = "block";
  video.play();
}

/* =====================
   HERO PHOTO FLOAT (HOME)
===================== */
const heroPhoto = document.querySelector(".hero-photo");

if (heroPhoto) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    heroPhoto.style.transform = `translate(${x}px, ${y}px)`;
  });
}




/* =====================
   GALLERY BACKGROUND MUSIC
===================== */
document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  if (music) {
    music.volume = 0.15; // lembut
    music.play().catch(() => {
      // autoplay blocked – user interaction needed
    });
  }
});





function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (!music) return;

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}





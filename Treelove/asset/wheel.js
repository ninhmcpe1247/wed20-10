document.body.insertAdjacentHTML('beforeend', `
  <div id="wheelPopup">
    <div>
      <div id="pointer"></div>
      <div id="wheelContainer"></div>
      <button id="spinBtn">Quay lời chúc 🌷</button>
    </div>
  </div>

  <div id="resultPopup">
    <div id="resultText"></div>
    <button onclick="closePopup()">Đóng</button>
  </div>
`);

const texts = [
  "Bạn thật tuyệt vời hôm nay! 💖",
  "Chúc bạn luôn hạnh phúc và xinh đẹp 🌷",
  "Hôm nay là ngày của bạn, hãy mỉm cười nhé 🌼",
  "Chúc bạn ngập tràn yêu thương và niềm vui 🎁",
  "Bạn là bông hoa rực rỡ nhất 💫",
  "Gửi bạn muôn vàn lời chúc tốt đẹp 💞"
];

const wheel = document.getElementById("wheelContainer");
const N = texts.length;
for (let i = 0; i < N; i++) {
  const slice = document.createElement("div");
  slice.className = "slice";
  slice.style.transform = `rotate(${(360/N)*i}deg) skewY(${90 - 360/N}deg)`;
  slice.textContent = texts[i];
  wheel.appendChild(slice);
}

let currentAngle = 0;
document.getElementById("spinBtn").addEventListener("click", () => {
  const spins = 5 + Math.random() * 3;
  const final = spins * 360 + Math.random() * 360;
  wheel.style.transition = "transform 4s cubic-bezier(.25,.1,.25,1)";
  wheel.style.transform = `rotate(${final}deg)`;
  currentAngle = final % 360;

  setTimeout(() => {
    const idx = Math.floor(((360 - (currentAngle % 360)) / (360/N))) % N;
    showResult(texts[idx]);
  }, 4200);
});

function showResult(txt) {
  document.getElementById("resultText").textContent = txt;
  document.getElementById("resultPopup").classList.add("show");
}
function closePopup() {
  document.getElementById("resultPopup").classList.remove("show");
}

setTimeout(() => {
  document.getElementById("wheelPopup").classList.add("show");
}, 1000);

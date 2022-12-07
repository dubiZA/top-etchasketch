const containerDiv = document.querySelector(".container");

containerDiv.addEventListener("mouseenter", () => getPixels());

function drawCanvas() {

  for (let i = 0; i < 16; i++) {
    const pixelRowDiv = document.createElement("div");
    pixelRowDiv.classList.add("pixelRow");
    containerDiv.appendChild(pixelRowDiv);
  }

  const pixelRows = document.querySelectorAll(".pixelRow");
  pixelRows.forEach((row) => {
    for (let i = 0; i < 16; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      row.appendChild(pixel);
    }
  });
}

function getPixels() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => pixel.addEventListener("mouseenter", function() {
    turnPixelOn(pixel);
  }));
}

function turnPixelOn(pixel) {
  pixel.classList.add("pixelOn");
}

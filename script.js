
function drawCanvas() {
  const containerDiv = document.querySelector(".container");

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
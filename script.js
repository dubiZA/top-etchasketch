const canvasDimension = 720;

const containerDiv = document.querySelector(".container");
containerDiv.addEventListener("mouseenter", () => turnPixelOn());

const changeResolution = document.querySelector(".changeResolution");
changeResolution.addEventListener("click", () => {
  let gridSize = parseInt(prompt("Enter a grid size from 16 to 100."));
  if (gridSize >= 16 && gridSize <= 100) {
    clearCanvas();
    drawCanvas(gridSize);
  } else {
    alert("Invalid number, make sure it's between 16 and 100.");
  }
});

function drawCanvas(gridSize) {
  let pixelDimension = calculateDimensions(gridSize);

  for (let i = 0; i < gridSize; i++) {
    const pixelRowDiv = document.createElement("div");
    pixelRowDiv.classList.add("pixelRow");
    pixelRowDiv.style.height = `${pixelDimension}px`;
    containerDiv.appendChild(pixelRowDiv);
  }

  const pixelRows = document.querySelectorAll(".pixelRow");
  pixelRows.forEach((row) => {
    for (let i = 0; i < gridSize; i++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.width = `${pixelDimension}px`;
      pixel.style.height =  `${pixelDimension}px`;
      row.appendChild(pixel);
    }
  });
}

function turnPixelOn() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => pixel.addEventListener("mouseenter", function() {
    pixel.classList.add("pixelOn");
  }));
}

function clearCanvas() {
  const pixelRows = document.querySelectorAll(".pixelRow");
  pixelRows.forEach((pixelRow) => {
    pixelRow.remove();
  });
}

function calculateDimensions(gridSize) {
  return canvasDimension / gridSize;
}
const greetingElement = document.getElementById("greeting");

const currentHour = new Date().getHours();

if (currentHour >= 5 && currentHour < 12) {
  greetingElement.textContent = "Bom dia";
} else if (currentHour >= 12 && currentHour < 18) {
  greetingElement.textContent = "Boa tarde";
} else {
  greetingElement.textContent = "Boa noite";
}

const container = document.querySelector(".offer__list-item");

function updateGrid() {
  const containerWidth = container.offsetWidth;

  console.log('Container Width:', containerWidth);

  let numColumns;
  if (containerWidth >= 1141) {
    numColumns =5;
  } else if (containerWidth >= 1011 && containerWidth <= 1140) {
    numColumns = 4;
  } else if (containerWidth >= 771 && containerWidth <= 1010) {
    numColumns = 3;
  } else if (containerWidth >= 511 && containerWidth <= 770) {
    numColumns = 2;
  } else if (containerWidth <= 510) {
    numColumns = 1;
  }

  console.log('Number of Columns:', numColumns);

  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(0, 1fr))`;
}

updateGrid();

window.addEventListener("resize", updateGrid);


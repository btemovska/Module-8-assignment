const slideImage = document.querySelectorAll(".slide-image");
const slidesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const p = document.querySelector("p");

let numberOfImages = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

function init() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });
  slideImage[0].classList.add("active");
}
init();

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfImages - 1) {
    goToSlide(0);
    currentSlide = 0;
    return;
  }
  currentSlide++;
  goToSlide(currentSlide);
});

prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfImages - 1);
    currentSlide = numberOfImages - 1;
    return;
  }
  currentSlide--;
  goToSlide(currentSlide);
});

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";
}

function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
}

var oneElement = document.querySelector("#btnOne");
oneElement.addEventListener("click", doSomething, false);
function doSomething(e) {
  var clickedItem = e.target.id;
  alert(
    "THE CITY OF OHRID AND OHRID LAKE. Ohrid once had 365 churches, one for each day" +
      " of the year, and it has been referred to as a 'Jerusalem of the Balkans'." +
      " Lake Ohrid is one of the oldest in the world, and deepest in the Balkans," +
      " it provides a refuge for numerous endemic species of freshwater fauna and flora dating from the Tertiary period. "
  );
}

var twoElement = document.querySelector("#btnTwo");
twoElement.addEventListener("click", doSomething2, false);
function doSomething2(e) {
  var clickedItem = e.target.id;
  alert(
    "ST JOVAN KANEO CHURCH. Situated on the cliff over Kaneo Beach overlooking Lake Ohrid which is dedicated to John of Patmos. " +
      "Documents detailing the church property suggest that it was built before the year of 1447."
  );
}

var threeElement = document.querySelector("#btnThree");
threeElement.addEventListener("click", doSomething3, false);
function doSomething3(e) {
  var clickedItem = e.target.id;
  alert(
    "SAMUEL'S FORTRESS. It was alleged that this fortress was built on the grounds of an earlier fortification, dated to 4th century B.C " +
      " by Macedonian king Philip II and it has been destroyed many times, rebuilt and upgraded from Tzar Samoil who ruled from 976 until 1014." +
      " Today it is one of the most visited touristic placed in Ohrid"
  );
}

var fourElement = document.querySelector("#btnFour");
fourElement.addEventListener("click", doSomething4, false);
function doSomething4(e) {
  var clickedItem = e.target.id;
  alert("Citizens enjoy warm summer day in the heart of the city ");
}

var fiveElement = document.querySelector("#btnFive");
fiveElement.addEventListener("click", doSomething5, false);
function doSomething5(e) {
  var clickedItem = e.target.id;
  alert("Typical outdoor food market");
}

var sixElement = document.querySelector("#btnSix");
sixElement.addEventListener("click", doSomething6, false);
function doSomething6(e) {
  var clickedItem = e.target.id;
  alert("View of the Ohrid city from the other side");
}

var sevenElement = document.querySelector("#btnSeven");
sevenElement.addEventListener("click", doSomething7, false);
function doSomething7(e) {
  var clickedItem = e.target.id;
  alert(
    "ST PANTELEIMON MONESTARY. The monastery is believed to have been built from Saint Clement." +
      " He used his newly created monastery as a liturgical building and a place for teaching" +
      " his disciples his variation of the Glagolitic alphabet, known as the Cyrillic script. Clement personally" +
      " built a crypt inside the monastery in which he was buried after his death in 916, his tomb still exists today." +
      " In the 15th century, Ottoman Turks converted the monastery into a mosque but during the beginning of the 16th" +
      " century allowed ruined churches and monasteries to be restored, therefore, so was Saint Clement’s monastery. " +
      "Reconstruction started on December 8, 2000 and the physical church was fully reconstructed by August 10, 2002. " +
      " To this day archeological findings continue."
  );
}

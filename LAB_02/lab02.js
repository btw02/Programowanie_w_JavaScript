
// pobieramy wszystkie obrazy
const slides = document.querySelectorAll(".slides img");

let slideIndex = 0;      // ustala początkowy indeks slajdu
let intervalId = null;   // ustala ID interwału  


//-------------------------------------------------
  // funkcja inicjująca

document.addEventListener("DOMContentLoaded", initializeSlider);


function initializeSlider(){

  // sprawdza czy są jakieś slajdy, jesli tak to dodaje klase displaySlide do pierwszego w kolejce
  if(slides.length > 0)
  {  
    slides[slideIndex].classList.add("displaySlide"); 
    intervalId = setInterval(nextSlide, 5000); // zmiana slidó w  co 5s
    
  }
}
//-------------------------------------------------



//-------------------------------------------------
function showSlide(index){

    if(index >= slides.length){        // sprawdza czy indeks jest większy lub równy ilości slajdów

      slideIndex = 0;                  // Jeśli jest, to ustawia go na zero żeby wrócić do pierwszego slajdu
    }
    else if(index < 0){             
      slideIndex = slides.length - 1;  // sprawdza czy indeks jest mniejszy niż 0 i jeśli tak, to ustawia go na 1 aby wrócić do ostatniego slajdu
    }


    // Usuń klasę "displaySlide" ze wszystkich slajdów
    slides.forEach(slide => {      slide.classList.remove("displaySlide");    });

    slides[slideIndex].classList.add("displaySlide");
}
//-------------------------------------------------



//-------------------------------------------------
function prevSlide(){
  clearInterval(intervalId);   // Zresetuj czas zmiany slajdów
  slideIndex --;               // przejdź do poprzedniego slajdu
  showSlide(slideIndex);       // wyświetl aktualny
}
//-------------------------------------------------



//-------------------------------------------------
function nextSlide(){
  clearInterval(intervalId);   // Zresetuj czas zmiany slajdów
  slideIndex ++;               // przejdz do następnego
  showSlide(slideIndex);       
}
//-------------------------------------------------



// Nawigacja pomiędzy zdjęciami za pomocą przycisków
function goToSlide(index) {
  slideIndex = index;
  showSlide();
}



let isPaused = false;     // zmienna isPaused jest początkowo wyłączona, żeby slajdy się zmieniały

function togglePause() {
  isPaused = !isPaused;   // włącza pauze
  if (isPaused) {
    clearInterval(intervalId); // Jeśli pauza jest włączona, to zatrzymuje zmiane slajdów
  } else {
    intervalId = setInterval(nextSlide, 5000); // W przeciwnym wypadku ponownie włącza zmianę slajdów co 5s
  }
}



// dodałem kilka rzeczy ale projekt robiłem przy pomocy filmu https://www.youtube.com/watch?v=749ta0nvj8s&ab_channel=BroCode

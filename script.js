const hadithElement = document.getElementById('hadis');
const newHadithButton = document.getElementById('newb');
const narratorElement = document.getElementById('narrator');
const bookElement = document.getElementById('book');

async function fetchRandomHadith() {
  try {
    newHadithButton.innerText = 'Loading Hadith...';
    const response = await fetch('https://random-hadith-generator.vercel.app/bukhari/');
    const data = await response.json();
    console.log(data);
    displayHadith(data.data.hadith_english, data.data.header, data.data.book);
  } catch (error) {
    console.error('Error fetching Hadith:', error);
    newHadithButton.innerText = 'Failed to load Hadith';
  }
}

async function findrandomhadith() {
  try {
    newHadithButton.innerText = 'Loading Hadith...';
    const response = await fetch('ahadith.json');
    const dataarray = await response.json();
    const randomIndex = Math.floor(Math.random() * dataarray.length);
    const data = dataarray[randomIndex];
    displayHadith(data.hadith_english, data.header, data.book);
  } catch (error) {
    console.error('Error fetching Hadith:', error);
    newHadithButton.innerText = 'Failed to load Hadith';
  }
}

function displayHadith(hadith, narrator, book) {
  // Reset animation
  hadithElement.style.animation = 'none';
  hadithElement.offsetHeight; // trigger reflow
  hadithElement.style.animation = '';

  hadithElement.innerText = hadith;
  narratorElement.innerText = narrator;
  bookElement.innerText = book;
  
  // Apply animation
  hadithElement.style.animation = 'fadeInUp 1s forwards';

  newHadithButton.innerText = 'New Hadith';
}

newHadithButton.addEventListener('click', findrandomhadith);

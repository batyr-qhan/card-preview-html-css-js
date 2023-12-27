// Check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const themeSwitch = document.querySelector('.switch input[type="checkbox"]');

themeSwitch.addEventListener('change', function() {
    // Toggle the "dark-theme" class
    document.body.classList.toggle('dark-theme');
  });

const enableDarkMode = () => {
  // Add the dark-theme class to the body
  document.body.classList.add('dark-theme');
  // Save the preference to localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // Remove the dark-theme class from the body
  document.body.classList.remove('dark-theme');
  // Save the preference to localStorage
  localStorage.setItem('darkMode', null);
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}
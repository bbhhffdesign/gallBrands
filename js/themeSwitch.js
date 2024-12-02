let logos = document.getElementsByClassName('brand')

function setTheme(themeName) {
  document
    .getElementById("theme")
    .setAttribute("href", "dist/css/theme-" + themeName + ".css");
    
}

// Obtener los dos checkbox
const themeToggle = document.getElementById('theme-toggle');
const themeToggle2 = document.getElementById('theme-toggle2');

// Función para sincronizar los checkboxes
function syncThemeToggle(checked) {
  themeToggle.checked = checked;
  themeToggle2.checked = checked;
  setTheme(checked ? 'light' : 'dark');

  // Alternar la clase "brand-invert" para todos los elementos con la clase "brand"
  for (let i = 0; i < logos.length; i++) {
    logos[i].classList.toggle('brand-invert');
  }
}

// Evento para el primer checkbox
themeToggle.addEventListener('change', () => {
  syncThemeToggle(themeToggle.checked);
});

// Evento para el segundo checkbox
themeToggle2.addEventListener('change', () => {
  syncThemeToggle(themeToggle2.checked);
});


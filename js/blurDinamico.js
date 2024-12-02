// Creamos el IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Si el elemento es visible, agregamos la clase que aplica el blur
        entry.target.classList.add('blur');
      } else {
        // Si el elemento no es visible, removemos la clase para ahorrar recursos
        entry.target.classList.remove('blur');
      }
    });
  });
  
  // Seleccionamos todos los elementos con la clase "tu-clase"
  const elementos = document.querySelectorAll('.useblur');
  
  // Para cada elemento, lo observamos con el IntersectionObserver
  elementos.forEach(elemento => {
    observer.observe(elemento);
  });
  
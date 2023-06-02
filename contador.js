let count = 0;

// Decrementar contador
function decrement() {
  count--;
  updateCounter();
}

// Reiniciar el contador a cero
function reset() {
  count = 0;
  updateCounter();
}

// Incrementar contador
function increment() {
  count++;
  updateCounter();
}

// Actualizar el valor del contador en el HTML
function updateCounter() {
  const counterElement = document.getElementById('counter');
  counterElement.textContent = count;
}
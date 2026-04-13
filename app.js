
// Este archivo contiene la lógica del frontend.
// Se encarga de capturar datos desde los formularios HTML,
// enviar peticiones HTTP al backend Flask
// y mostrar las respuestas de la API en pantalla.

// URL base del backend
const API_URL = "http://127.0.0.1:5000";

// Muestra en pantalla el resultado de la API
function showResult(data) {
  const result = document.getElementById("result"); // Busca el contenedor de resultado
  result.textContent = JSON.stringify(data, null, 2); // Convierte el objeto a texto JSON legible
}

// Crea un nuevo texto
async function createText() {
  const id = document.getElementById("createId").value.trim(); // Lee el id
  const text = document.getElementById("createText").value.trim(); // Lee el texto

  try {
    const response = await fetch(`${API_URL}/texts`, { // Llama al endpoint POST /texts
      method: "POST", // Método HTTP para crear
      headers: {
        "Content-Type": "application/json" // Se envía JSON
      },
      body: JSON.stringify({ id, text }) // Convierte los datos a JSON
    });

    const data = await response.json(); // Convierte la respuesta a objeto
    showResult(data); // Muestra la respuesta
  } catch (error) {
    showResult({ error: error.message }); // Muestra error si falla
  }
}

// Lee un texto por id
async function readText() {
  const id = document.getElementById("readId").value.trim(); // Lee el id

  try {
    const response = await fetch(`${API_URL}/texts/${id}`); // Llama al endpoint GET /texts/{id}
    const data = await response.json(); // Convierte la respuesta a objeto
    showResult(data); // Muestra la respuesta
  } catch (error) {
    showResult({ error: error.message }); // Muestra error si falla
  }
}

// Actualiza un texto existente
async function updateText() {
  const id = document.getElementById("updateId").value.trim(); // Lee el id
  const text = document.getElementById("updateText").value.trim(); // Lee el nuevo texto

  try {
    const response = await fetch(`${API_URL}/texts/${id}`, { // Llama al endpoint PUT /texts/{id}
      method: "PUT", // Método HTTP para actualizar
      headers: {
        "Content-Type": "application/json" // Se envía JSON
      },
      body: JSON.stringify({ text }) // Convierte el nuevo texto a JSON
    });

    const data = await response.json(); // Convierte la respuesta a objeto
    showResult(data); // Muestra la respuesta
  } catch (error) {
    showResult({ error: error.message }); // Muestra error si falla
  }
}

// Elimina un texto por id
async function deleteText() {
  const id = document.getElementById("deleteId").value.trim(); // Lee el id

  try {
    const response = await fetch(`${API_URL}/texts/${id}`, { // Llama al endpoint DELETE /texts/{id}
      method: "DELETE" // Método HTTP para borrar
    });

    const data = await response.json(); // Convierte la respuesta a objeto
    showResult(data); // Muestra la respuesta
  } catch (error) {
    showResult({ error: error.message }); // Muestra error si falla
  }
}
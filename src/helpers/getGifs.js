export const getGifs = async (category) => {
    try {
      // Construimos la URL para la API de Pexels con la categoría y un límite de 10 imágenes
      const url = `https://api.pexels.com/v1/search?query=${category}&per_page=10`;
  
      // Hacemos una petición a la API de Pexels
      const resp = await fetch(url, {
        headers: {
          Authorization: 'v3JWlPxNYDjKq5QQ8s6agVAcXEvzHPTGo70BiOAnpekWQub5q6bPh8uc', // Reemplaza con tu clave de API de Pexels
        },
      });
  
      // Manejamos la respuesta en formato JSON
      const { photos } = await resp.json();
  
      // Mapeamos los datos a un nuevo arreglo de objetos con id, título y URL de cada imagen
      const gifs = photos.map((photo) => ({
        id: photo.id,
        title: photo.photographer,
        url: photo.src.medium,
      }));
  
      // Devolvemos el arreglo de objetos
      return gifs;
    } catch (error) {
      console.error('Error fetching gifs:', error);
      return []; // Maneja errores devolviendo un arreglo vacío o maneja la excepción según tu lógica
    }
  };
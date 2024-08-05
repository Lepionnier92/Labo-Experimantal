async function fetchData() {
    const accessToken = '97d54fae7faebab374ef7be9c6af23907ed804cab123814935c5a0124e34';  // Remplacez par votre token
    const clientSecret = 'SECRET_5xTHJ3U!wgUzdfzuFX%YBf7aR*Of@btnb537f57ad2b2560dd1037117042faf0b';  // Remplacez par votre secret
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://publicapi.nationsglory.fr/oauth/checkToken';
  
    try {
      const response = await fetch(`${proxyUrl}${targetUrl}?access_token=${accessToken}&client_secret=${clientSecret}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      document.getElementById('access-token').textContent = accessToken;
      document.getElementById('api-result').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Erreur:', error);
      document.getElementById('api-result').textContent = 'Erreur lors de la récupération des données.';
    }
  }
  
  window.onload = fetchData;
  
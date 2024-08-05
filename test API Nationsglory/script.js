async function fetchData() {
    const accessToken = 'VOTRE_ACCESS_TOKEN';  // Remplacez par votre token
    const clientSecret = 'VOTRE_CLIENT_SECRET';  // Remplacez par votre secret
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
  
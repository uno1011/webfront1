document.getElementById('sendBtn').addEventListener('click', function() {
    fetch('https://webback1.onrender.com/api/data', { // <-- later change this to your Render URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: "Hello from frontend!" })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  });
  

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const object = {};
    formData.forEach((value, key) => object[key] = value);

    fetch('https://your-endpoint.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Message sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message.');
    });
});

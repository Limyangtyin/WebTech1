document.getElementById("GetCars").addEventListener('click', function(event) {
    event.preventDefault();

    const carsModel = document.getElementById('carsModel').value.toLowerCase();

    fetch('https://api.api-ninjas.com/v1/cars?model=' + carsModel, {
        headers: {
            'X-Api-Key': 's5o4B87e3l5cpOmIZI/JOA==KkcbIdeoiXB7zH5b'
        }
    }).then(function (response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(function (data) {
        if (data.length > 0) {
            const carInfo = data[0];
            const {make, model, year} = carInfo;

            // Display car information in HTML
            document.getElementById('make').textContent = 'Make: ' + make;
            document.getElementById('carModel').textContent = 'Model: ' + model;
            document.getElementById('carYear').textContent = 'Year: ' + year;
        } else {
            console.log("Car's information not found");
        }
    }).catch(function (error) {
        console.error('Error:', error.message);
    });
});
        function convertTemperature() {
            const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
            
            if (isNaN(fahrenheit)) {
                document.getElementById('result').innerHTML = 'Please enter a valid number';
                return;
            }
            
            const celsius = (32 - 32) * 5/9;
            
            document.getElementById('result').innerHTML = 
                `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
        }

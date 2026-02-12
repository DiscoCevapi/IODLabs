document.querySelector('input[type="submit"]').addEventListener('click', function (event) {
            event.preventDefault(); // Prevent form submission
            const username = document.getElementById('username').value;
            alert('Login successful! Welcome back, ' + username);          
        });
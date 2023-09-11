// your code here
 document.getElementById('myForm').addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            // Get values from input fields
            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;

            // Construct the query string
            const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

            // Update the h3 element with the new URL
            const urlElement = document.getElementById('url');
            urlElement.textContent = `https://localhost:8080/${queryString}`;
        });

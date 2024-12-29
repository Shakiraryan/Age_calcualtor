      // Function to calculate age
      function calculateAge(dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();

        // Adjust age if birthday hasn't occurred yet this year
        if (month < birthDate.getMonth() || (month === birthDate.getMonth() && day < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    // Event listener for form submission
    document.getElementById('age-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way
        const dob = document.getElementById('dob').value;

        if (dob) {
            const age = calculateAge(dob);
            document.getElementById('result').innerText = `Your age is: ${age} years old.`;
        } else {
            document.getElementById('result').innerText = 'Please enter a valid date of birth.';
        }
    });
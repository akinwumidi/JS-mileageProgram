 // Defining Table
        // Input(s) : Beginning and Ending Odometer, number of gallon
        // Processing : Perfrom arithmetical computation (Ending odometer -  beginning odometer) / gallon
        // Output(s) : Output the mileage of the vehicle
    

        function calculate_mileage() {
            let beginning = parseFloat(document.getElementById('beginning').value);
            let ending = parseFloat(document.getElementById('ending').value);
            let gallon = parseFloat(document.getElementById('gallons').value);
        

            let mileage = (ending - beginning) / gallon;
            document.getElementById('output').innerHTML = "The mileage of the vehicle is " + mileage.toFixed(2) + " mpg";
            // console.log(mileage)
        }

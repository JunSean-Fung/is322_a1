var foo = 'foo'; // Variables declared outside of any function are considered global variables.
                 // These variables can be found on the window object.
(function () {
    // Any kind of function, will create a new variable scope. Variables declared in this
    // function will only be accesible inside this function, unless passed by reference through
    // a function call.

    // An array of Objects, similar to database records we will eventually be dealing with.
    var mockDatabase = [
        { _id: '123', name: 'Horizon Zero Dawn', price:"10", image:".../z_media/img/doge_1.jpg", category: "Shooter", published: true },
        { _id: '583', name: 'Attack on Doge', price:"5", image:".../z_media/img/doge_1.jpg", category: "Multiplayer", published: true },
        { _id: '954', name: 'God of War', price:"25", image:".../z_media/img/doge_1.jpg", category: "Shooter", published: false },
        { _id: '384', name: 'Sim City', price:"20", image:".../z_media/img/doge_1.jpg", category: "RPG", published: false },
        { _id: '183', name: 'Resident Evil 6', price:"90", image:".../z_media/img/doge_1.jpg", category: "Shooter", published: true },
        { _id: '007', name: 'Infamous: Second Son', price:"60", image:".../z_media/img/doge_1.jpg", category: "Meme", published: false },
        { _id: '304', name: 'Resident Evil 5', price:"33", image:".../z_media/img/doge_1.jpg", category: "Shooter", published: true },
        { _id: '729', name: 'Cities Skyline', price:"12", image:".../z_media/img/doge_1.jpg", category: "Multiplayer", published: false },
        { _id: '734', name: 'CyberPunk', price:"38", image:".../z_media/img/doge_1.jpg", category: "RPG", published: true },
    ];

    /*Show the list of items*/
    function renderList (results) {
        var tableBody = document.querySelector('#results-table tbody');

        // clear out inner HTML to get rid of any older results
        tableBody.innerHTML = '';
        // Map each database record to a string containing the HTML for it's row
        var tableRows = results.map(function (result, index) {
            return '<tr><td>' + index + '</td><td>'
                    + result.name       + '</td><td>'
                    /*+ result._id        + '</td><td>'*/
                    + result.price      + '</td><td><img src="'
                    + result.image      +'"></td><td>'
                    + result.category   + '</td><td>'
                    + result.published  + '</td></tr>';
        });
        // Set the contents of the table body to the new set of rendered HTML rows
        tableRows.forEach(function (row) {
            tableBody.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
        });
    }

    renderList(mockDatabase);

    /*Sorting Functions*/
    // Function to Order results list
    function orderBy(sortValue) {
        // Sort method varies based on what type of value we're sorting
        var sortedResults = (sortValue === 'name') ?
            mockDatabase.sort(function (a, b) { // Strings need to be sorted in a slightly more complex way
                var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                // Sorts alphabetically.  -1 puts it before. 1 puts it after
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            mockDatabase.sort(function (a, b) { // Numbers a booleans are much simpler.
                // Just need positive or negative number
                // Object properties can be accessed through a string representing their name
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    }
    // Function to filter out unpublished results
    function togglePublished(showPublished) {
        // If showPublished is TRUE, only display published results
        // Filter will only include objects that return TRUE from it's query
        var filteredResults = mockDatabase.filter(function (result) {
            // If showPublished is TRUE, always show.
            // Otherwise only show if published is TRUE
            return showPublished || result.published;
        });
        renderList(filteredResults);
    }
    // Function to filter out to specific price range
    function selectPriceRange(chosenPriceRange) {
        // Purpose: This function will show only specific price range selected by user
        var filteredPriceResults = mockDatabase.filter(function (result){
            switch (chosenPriceRange){
                case "priceOpZero":
                    return (result.price < 10);
                    break;
                case "priceOpOne":
                    return (result.price < 20);
                    break;
                case "priceOpTwo":
                    return (result.price < 30);
                case "priceOpThree":
                    return (result.price < 40);
                case "priceOpFour":
                    return (result.price < 50);
                default:
                    return true;
                    console.log("default is chosen")
            }
        });
        renderList(filteredPriceResults);
    }

    // Function to filter out to specific category
    function selectCategory(chosenCategory) {
        // Purpose : This will show only the specific category of the games selected by user
        var filteredCategoryResults = mockDatabase.filter(function (result){
            switch (chosenCategory){
                case "categoryOpOne":
                    return (result.category == "Shooter");
                    break;
                case "categoryOpTwo":
                    return (result.category == "RPG");
                    break;
                case "categoryOpThree":
                    return (result.category == "Multiplayer");
                case "categoryOpFour":
                    return (result.category == "Meme");
                default:
                    return true;
                    console.log("default is chosen")
            }
        });
        renderList(filteredCategoryResults);
    }
    // Event Listeners
    // Listener for orderBy
    // Change events trigger after the value of a form input changes
    document.querySelector('#orderBy').addEventListener('change', function(event){
        // Event is the JavaScript event that transpired, in our change a CHANGE event.
        // Target is the element it was performed on, useful for when the event targets
        // multiple elements.
        // Value has the name implies is the current value of the input element, if there is one
        orderBy(event.target.value);
    });
    // Listener for Publish
    // Change events trigger after the value of a form input changes
    document.querySelector('#published').addEventListener('change', function(event){
        // in this case value is a string that we need to convert to a boolean
        var value = event.target.value === 'true';
        togglePublished(value);
    });
    //Listener for price range
    document.querySelector('#priceRange').addEventListener('change', function(event){
        // in this case value is a string that we need to convert to a boolean
        selectPriceRange(event.target.value);
    });
    //Listener for Category
    document.querySelector('#category').addEventListener('change', function(event){
        // in this case value is a string that we need to convert to a boolean
        selectCategory(event.target.value);
    });
})(); // Wrap entire file in self executing function.
      // Keeping all variables declared in this file inside a local scope.
/*
    JunSean Fung
    Due: 2/9/21
    Purpose:
        1. Serve as database and populate the productlist.html

 */

// Closure
(function () {


    var databaseOne = [
        {_id: '123', name: 'Article 1', published: true},
        {_id: '583', name: 'Article 2', published: true},
        {_id: '954', name: 'Article 3', published: false},
        {_id: '384', name: 'Article 4', published: false},
        {_id: '183', name: 'Article 5', published: true},
        {_id: '007', name: 'Article 6', published: false},
        {_id: '304', name: 'Article 7', published: true},

        function renderList (results) {
            // Purpose: render the list
            var tableBody = document.querySelector('#results-table tbody');

            tableBody.innerHTML = ' '; //Clear the innerHTML

            var tableRows = results.map(function (result, index ){
                return '<tr><td>' + index + '</td><td>' + result.name + '</td><td>' +
                    result._id + '</td><td>' + result.published + '</td></tr>';
            });

            // Set the contents of the table body to the new set of rendered HTML rows
            tableRows.forEach(function (row){
                tableBody.innerHTML += row;
            });
        }
    ]
    /*
    // Prof Example
    var databaseOne = [
        {_id: '123', name: 'Article 1', published: true},
        {_id: '583', name: 'Article 2', published: true},
        {_id: '954', name: 'Article 3', published: false},
        {_id: '384', name: 'Article 4', published: false},
        {_id: '183', name: 'Article 5', published: true},
        {_id: '007', name: 'Article 6', published: false},
        {_id: '304', name: 'Article 7', published: true},
    ]

    function renderList (results) {
        // Purpose: render the list
        var tableBody = document.querySelector('#results-table tbody');

        tableBody.innerHTML = ' '; //Clear the innerHTML

        var tableRows = results.map(function (result, index ){
            return '<tr><td>' + index + '</td><td>' + result.name + '</td><td>' +
                result._id + '</td><td>' + result.published + '</td></tr>';
        });

        // Set the contents of the table body to the new set of rendered HTML rows
        tableRows.forEach(function (row){
            tableBody.innerHTML += row;
        });
    }

    renderList(databaseOne); // Function call*/

})(); // End of closure



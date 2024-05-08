$(document).ready(function() {
    var query = 'SELECT * FROM your_table';
    $.ajax({
        url: '/api/query',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ query: query }),
        success: function(response) {
            console.log('Query Results:', response);
            displayResults(response);
        },
        error: function(xhr, status, error) {
            console.error('API Error:', status, error);
        }
    });

    function displayResults(data) {
        var tableBody = $('#queryResults tbody');
        tableBody.empty(); // Clear existing rows

        // Iterate through each row of data and append to the table
        data.forEach(function(row) {
            var newRow = $('<tr>');
            Object.values(row).forEach(function(value) {
                newRow.append('<td>' + value + '</td>');
            });
            tableBody.append(newRow);
        });
    }
});

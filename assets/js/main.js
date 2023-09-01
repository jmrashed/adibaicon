$(function () {
    $('#search').on('input', function () {
        var search = $(this).val().trim(); // Trim whitespace
        var searchResults = $('#searchResults');
        
        if (search !== "") { 
            var results = ["Apple", "Banana", "Cherry", "Date"]; 
            searchResults.empty(); 
            for (var i = 0; i < results.length; i++) {
                var resultItem = $('<li><a href="#">' + results[i] + '</a></li>');
                searchResults.append(resultItem);
            } 
            $('.search-results').removeClass('d-none');
        } else { 
            $('.search-results').addClass('d-none');
        }
    });
});

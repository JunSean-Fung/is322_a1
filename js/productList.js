/*
    JunSean Fung
    Due: 2/9/21
    Purpose:
        1. Serve as database and populate the productlist.html

 */

// Closure
(function () {
    $('#search').keyup(function (){
        $('.card').removeClass('d-none');
        var filter = $(this).val(); // get the value of the input, which we filter on
        $('.card-deck').find('.card .card-body h4:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
    })

    $('#btnSort').click(function (){
        $('.card-deck .card').sort(function(a,b) {
            return $(a).find(".card-title").text() > $(b).find(".card-title").text() ? 1 : -1;
        }).appendTo(".card-deck");
    })

})(); // End of closure



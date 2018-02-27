$(document).ready(function () {
    // write your code here
    $.getJSON("data.json", function (data) {
        var row = ''

        $.each(data, function (key, value) {
            row += '<tr>';
            row += '<td>' + value.name + '</td>';
            row += '<td>' + value.description + '</td>';
            row += '<td>  <a href="https://www.google.com/maps?q= ' + value.location + '" target="_blank"> Click Here </a> </td>';
            row += '</tr>';
        });
        $('#table').append(row);
    });
});

// $(document).ready(function() {
//     // write your code here
//     $.getJSON("data.json", function(data) {
//        row =''

//        $.each(data, function(key, value){
//            // insert each value into each cell per each row
//               row += '<tr>';
//               row += '<td>' + value.name + '</td>';
//               row += '<td>' + value.description + '</td>';
//               row+= '<td>  <a href="https://www.google.com/maps?q=' + value.location + '"> Click Here </a> </td>';
//               row += '</tr>';
//            });
//            // and each data type the next row
//            $('#table').append(row);
//        });





//     });
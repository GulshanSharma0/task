var sn = 1
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        var firstName = $("input[name='first-name']").val();
        var lastName = $("input[name='last-name']").val();
        var contactNumber = $("input[name='contact-number']").val();

        var newRow = $("<tr>");
        newRow.append("<td>" + sn + "</td>");
        newRow.append("<td>" + firstName + " " + lastName + "</td>");
        newRow.append("<td>" + contactNumber + "</td>");
        newRow.append("<td><i class='fa fa-times delete-icon'></i></td>");
        $("table").append(newRow);
        sn++;
        $("form")[0].reset();
    });
});

sn=1;


// $("#search-bar").keyup(function () {
//     // code to filter table rows
//     var searchValue = $(this).val();
//     $("table tbody tr").filter(function () {
//         var name = $(this).find("td:nth-child(2)").text();
//         return name.indexOf(searchValue) > -1;
//     }).show();

//     $("table tbody tr").filter(function () {
//         var name = $(this).find("td:nth-child(2)").text();
//         return name.indexOf(searchValue) == -1;
//     }).hide();
// });

// $("#search-bar").on("input", function () {
//     var searchValue = $(this).val().toLowerCase();
//     $("table tbody tr").each(function () {
//       var name = $(this).find("td:nth-child(2)").text().toLowerCase();
//       $(this).toggle(name.indexOf(searchValue) > -1);
//     });
//   });


$("#search-bar").on("keyup", function() {
    var searchValue = $(this).val().toLowerCase();
    $("table tbody tr").filter(function() {
        var name = $(this).find("td:nth-child(2)").text().toLowerCase();
        return name.indexOf(searchValue) > -1;
    }).show();
    $("table tbody tr").filter(function() {
        var name = $(this).find("td:nth-child(2)").text().toLowerCase();
        return name.indexOf(searchValue) == -1;
    }).hide();
});



$(document).on("click", ".delete-icon", function () {
    $(this).closest("tr").remove();
});
var sn = 1
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        var firstName = $("input[name='first-name']").val();
        var lastName = $("input[name='last-name']").val();
        var contactNumber = $("input[name='contact-number']").val();

        var newRow = $("<tr class='table-row'>");
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

$("#name-header").on("click", function () {
    var rows = $(".table-row").get();
    rows.sort(function(a, b) {
        var A = $(a).find("td:nth-child(2)").text().toUpperCase();
        var B = $(b).find("td:nth-child(2)").text().toUpperCase();
        if(A < B) {
            return -1;
        }
        if(A > B) {
            return 1;
        }
        return 0;
    });
    $.each(rows, function(index, row) {
        $("table").append(row);
    });
});


$(document).on("click", ".delete-icon", function () {
    $(this).closest("tr").remove();
});
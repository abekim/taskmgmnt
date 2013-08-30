$(function () { //bind click on #submit to a POST request for creating a new Task object
  $('#submit').on('click', function () {
    var name = $('#name').val();
    var requestDate = $('#date').val();
    var category = $('#cat [type="radio"]:checked');
    var rep = $('#rep [type="checkbox"]:checked');

    $.post('/create', { name: name, requestDate: requestDate, category: category, rep: rep });
  });
});
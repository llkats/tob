$(function() {

  var localbooks = localStorage.books ? JSON.parse(localStorage.books) : [];

  // if there are already books in storage, check their boxes
  if (localbooks.length > 0) {

    var inputs = $('input');

    for (var i = 0; i < localbooks.length; i++) {
      var inp = $('input').get(localbooks[i]);
      $(inp).prop('checked', true);
    }

  }

  $('ul').on('change', 'input:checkbox', function(e) {

    var li = $(this).parents('li'),
      index = li.index(),
      isChecked = $(this).is(':checked');

    // if checked and index doesn't exist in the array,
    // add the index to the books array to be saved
    if (isChecked && localbooks.indexOf(index) < 0) {

      localbooks.push(index);

    } else {

      // if unchecked, remove the index from the books array
      var existingindex = localbooks.indexOf(index);

      if (existingindex >= 0) {
        var lbooks = localbooks.splice(existingindex, 1);
      }

    }

    localStorage.books = JSON.stringify(localbooks);

  });

});

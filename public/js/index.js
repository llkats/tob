$(function() {

  var localbooks = localStorage.books ? JSON.parse(localStorage.books) : [];

  // if there are already books in storage, check their boxes
  if (localbooks.length > 0) {

    var inputs = $('input');

    for (var i = 0; i < localbooks.length; i++) {
      var inp = $('input').get(localbooks[i]);
      $(inp).prop('checked', true);
    }

  } else {

    // if there's nothing in localstorage, check the url
    var hash = window.location.hash,
        hasharray = hash.slice(1, hash.length).split("+");

    for (var j = 0; j < hasharray.length; j++) {
      var inpu = $('input').get(hasharray[j]);
      localbooks.push(hasharray[j]);  // push the url indexes to localstorage
      $(inpu).prop('checked', true);
    }

  }

  // reads the array of selected books and appended them to the url
  var hashChange = function(bookarray) {

    var loc = window.location,
        hashstring = bookarray[0];

    for (var i = 1; i < bookarray.length; i++) {
      hashstring += "+" + bookarray[i];
    }

    loc.hash = hashstring;

  };

  // checkbox event handler
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

    hashChange(localbooks);

    localStorage.books = JSON.stringify(localbooks);

  });

});

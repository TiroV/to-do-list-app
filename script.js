function newItem () {

//1.For adding new items to the list
let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert("Please add something to the list!!!");
}else {
  $('#list').append(li);
}

//2.For adding strike through text
function crossOut() {
  li.toggleClass("Strike");
}

li.on("dblclick", function crossOut() {
  li.toggleClass("strike");
});

//3.For adding a button to delete text
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('x'));
li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
  li.addClass("delete")
  }
$('#list').sortable();
  }

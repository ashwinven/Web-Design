//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

window.onload = function() {

  var hideRowElement = document.getElementsByClassName("dropDownTextArea");
  var index;
  for(index = 0; index < hideRowElement.length; index++){
    if(hideRowElement[index].style.display != "none"){
      hideRowElement[index].style.display = "none";
    } else{
      hideRowElement[index].style.display = "table-row";
    }
  }

//Task 2 - Graying out submit button 
  document.getElementById("submit").disabled = true;
  document.getElementById("submit").style.backgroundColor = "#808080";
  document.getElementById("submit").style.borderColor = "#808080";

};

function addNewRow() {

      var dataGrid = document.getElementById( 'myTable' );
      var student = "Student ";
      var teacher = "Teacher ";
      var num = document.getElementById("myTable").rows.length;
      num = ((num-1)/2)+1;
      student = student.concat(num);
      teacher = teacher.concat(num);

      var budget = Math.floor((Math.random() * 100000) + 1);
      
      var row1 = dataGrid.insertRow(-1);
      row1.className = "expand";

      cell1 = row1.insertCell(0);
      cell1.innerHTML = '<td><input type="checkbox" class="check" onclick="clickDisplayedCheckBox(this)"/><br /><br /><img src="down.png" width="25px" onclick="collapse(this)" /></td>';

      cell2 = row1.insertCell(1);
      cell2.innerHTML = student;

      cell3 = row1.insertCell(2);
      cell3.innerHTML = teacher;

      cell4 = row1.insertCell(3);
      cell4.innerHTML = "Approved";

      cell5 = row1.insertCell(4);
      cell5.innerHTML = "Fall";

      cell6 = row1.insertCell(5);
      cell6.innerHTML = "TA";

      cell7 = row1.insertCell(6);
      cell7.innerHTML = budget;

      cell8 = row1.insertCell(7);
      cell8.innerHTML = "100%";

      cell9 = row1.insertCell(8);
      cell9.setAttribute('style','display:none');
      cell9.innerHTML = "<button style='display:none' onclick='deleteTableRows(this)'>Delete</button>";

  var row2 = dataGrid.insertRow(-1);
  row2.className = "expand";
  row2.style.display = "none";
  row2.innerHTML = "<td colspan='8'> Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br /></td>";
  col1 = document.getElementsByClassName("expand");
}

function collapse(e){
  var y = e.parentElement.parentElement.nextElementSibling;

  if(y.style.display !== "none"){
      y.style.display = "none";
  } else{
    y.style.display = "table-row";
  }
}

  function clickDisplayedCheckBox(e) {

    if (e.checked === true) {
      e.parentElement.parentElement.lastElementChild.firstChild.style.display = "table-cell";
      e.parentElement.parentElement.lastElementChild.style.display = "table-cell";
      e.parentElement.parentElement.style.backgroundColor = "orange";
      document.getElementById("submit").style.backgroundColor = "orange";
      document.getElementById("submit").disabled = false;
      document.getElementById("submit").style.borderColor = "black";

    } else {
      e.parentElement.parentElement.lastElementChild.firstChild.style.display = "none";
      e.parentElement.parentElement.lastElementChild.style.display = "none";
      e.parentElement.parentElement.style.backgroundColor = "white";
      var list = document.getElementsByClassName("check");
      getFilteredList(list);
  }
}

function getFilteredList(list){
var checkflag = true;
for (var index = 0; index < list.length ; index++){
  if(list[index].checked === true){
    checkflag = false;
  }
}
if(checkflag){
        document.getElementById("submit").style.backgroundColor = "#808080";
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.borderColor = "#808080";
    
}
}
  
function deleteTableRows(e){
  e.parentElement.parentElement.parentElement.removeChild(e.parentElement.parentElement.nextElementSibling);
  e.parentElement.parentElement.parentElement.removeChild(e.parentElement.parentElement);

  var checkedList = document.getElementsByClassName("check");
  getFilteredList(checkedList);
}



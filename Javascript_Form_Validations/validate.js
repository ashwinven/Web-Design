var rname = /^[a-zA-Z ]{2,30}$/;
var remail = /^([^<>()\[\],;:@"\x00-\x20\x7F]|\\.)+@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;
var rphone = /^(\+\d{1,3} ?)?(\(\d{1,5}\)|\d{1,5}) ?\d{3} ?\d{0,7}( (x|xtn|ext|extn|pax|pbx|extension)?\.? ?\d{2-5})?$/i;
var rzip = /^(\d{5}(-\d{4})?|([a-z][a-z]?\d\d?|[a-z{2}\d[a-z]) ?\d[a-z][a-z])$/i;
var table;

function validateForm(myForm){
var flag;
var count = 0;
var radio1 = document.getElementById('miss').checked;
var radio2 = document.getElementById('mr').checked;
var radio3 = document.getElementById('mrs').checked;
var sourceLength = myForm.source.length;
var checkDrink = myForm.checkDrink.length;

//Radio button
if((radio1 == "") && (radio2 == "") && (radio3 == "")){
    errTitle.innerHTML = 'Select one of the options';
    return false;
} else {
    errTitle.innerHTML = "";
    flag = true; }
//First name
if (firstName.value == "") { 
    firstName.classList.add('invalid');
    errFirstName.innerHTML = 'First name should not be empty';
    return false;
}
else if (!rname.test(firstName.value)) {
    firstName.classList.add('invalid');
    errFirstName.innerHTML = 'You can use only alphabets';
    return false;
} else flag = true;
//Last name
if (lastName.value == "") { 
    lastName.classList.add('invalid');
    errLastName.innerHTML = 'Last name should not be empty';
    return false;
}
else if (!rname.test(lastName.value)) {
    lastName.classList.add('invalid');
    errLastName.innerHTML = 'You can use only alphabets';
    return false;
} else flag = true;
//Email ID
if (emailId.value == "") { 
    emailId.classList.add('invalid');
    errEmailId.innerHTML = 'Email should not be empty';
    return false;
}
else if (!remail.test(emailId.value)) {
    emailId.classList.add('invalid');
    errEmailId.innerHTML = 'Please enter a vaild email id';
    return false;
}else flag = true;
//Phone Number
if (phoneNumber.value == "") { 
    phoneNumber.classList.add('invalid');
    errPhone.innerHTML = 'Phone Number should not be empty';
    return false;
}
else if (!rphone.test(phoneNumber.value)) {
    phoneNumber.classList.add('invalid');
    errPhone.innerHTML = 'Please enter a vaild phone number';
    return false;
}else flag = true;
//Zip code
if (zipcode.value == "") { 
    zipcode.classList.add('invalid');
    errZipCode.innerHTML = 'Zip Code should not be empty';
    return false;
}
else if (!rzip.test(zipcode.value)) {
    zipcode.classList.add('invalid');
    errZipCode.innerHTML = 'Please enter a vaild Zip Code';
    return false;
}else flag = true;
//Checkbox
for (index=0;index<sourceLength;index++)
	{
		if(myForm.source[index].checked==true)
			count++;
	}
	if(count==0)
	{
        errSource.innerHTML = "Please select the source";
		return false;
	}
    else {
        errSource.innerHTML = "";
        flag = true; }
//Dropdown 
    if(myForm.drink.value=="")
	{
		errDrink.innerHTML = "Please select your drink";
		return false;
	}
    else {
        errDrink.innerHTML = "";
        flag = true; }
//Dynamic checkbox validation
for (index=0;index<checkDrink;index++)
	{
		if(myForm.checkDrink[index].checked==true)
			count=1;
	}
	if(count==1)
	{   
        test.innerHTML = "";
    flag = true; 
         
	}
    else {if (txtInput1.value == "") { 
        txtInput1.classList.add('invalid');
        errText1.innerHTML = 'Please provide brewing instructions';
        return false;
    }else {
        errText1.innerHTML = "";
        flag = true; }
        }
//Text field on clicking checkbox
// if (txtInput1.value == "") { 
//     txtInput1.classList.add('invalid');
//     errText1.innerHTML = 'Please provide brewing instructions';
//     return false;
// }else {
//     errText1.innerHTML = "";
//     flag = true; }

//Textarea
    if(myForm.comments.value == ""){
        errComment.innerHTML = "Please provide your comments";
        return false;
    }else {
        errComment.innerHTML = "";
        flag = true; }
    if (document.getElementById("data") == null)
        createTable();
    else {
        appendRow();
    }
    return false;
}

function createTable() {
    
    container.style.display = "none";
    back.style.display = "block";
    var myTableDiv = document.getElementById("myTable");  //indiv
    table = document.createElement("TABLE");   //TABLE??
    table.setAttribute("id", "data");
    table.border = '1';
    myTableDiv.appendChild(table);  //appendChild() insert it in the document (table --> myTableDiv)
    debugger;

    var header = table.createTHead();

    var th0 = table.tHead.appendChild(document.createElement("th"));
    th0.innerHTML = "First Name";
    var th1 = table.tHead.appendChild(document.createElement("th"));
    th1.innerHTML = "Last Name";
    var th2 = table.tHead.appendChild(document.createElement("th"));
    th2.innerHTML = "Email Id";
    var th3 = table.tHead.appendChild(document.createElement("th"));
    th3.innerHTML = "Phone Number";
    var th4 = table.tHead.appendChild(document.createElement("th"));
    th4.innerHTML = "Zip Code";
    var th5 = table.tHead.appendChild(document.createElement("th"));
    th5.innerHTML = "Source";
    var th6 = table.tHead.appendChild(document.createElement("th"));
    th6.innerHTML = "Drink";
    var th7 = table.tHead.appendChild(document.createElement("th"));
    th7.innerHTML = "Drink Choice";
    var th8 = table.tHead.appendChild(document.createElement("th"));
    th8.innerHTML = "Instructions";
    var th9 = table.tHead.appendChild(document.createElement("th"));
    th9.innerHTML = "Comments";

    appendRow();

}

function appendRow() {
    var fname = document.myForm.firstName.value;
    var lname = document.myForm.lastName.value;
    var email = document.myForm.emailId.value;
    var phone = document.myForm.phoneNumber.value;
    var zip = document.myForm.zipcode.value;
    // var source = document.myForm.source.value;
    var drink = document.myForm.drink.value;
    var comment = document.myForm.comments.value;
    var sourceLength = myForm.source.length;
    var sourceArray = []; var str;
    var drinkChoiceLen = myForm.checkDrink.length;
    var drinkArray =[]; var drinkStr;
    var textInput = document.myForm.txtInput1.value;
    
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = fname;
    row.insertCell(1).innerHTML = lname;
    row.insertCell(2).innerHTML = email;
    row.insertCell(3).innerHTML = phone;
    row.insertCell(4).innerHTML = zip;
    for (index=0;index<sourceLength;index++)
	{
		if(myForm.source[index].checked==true)
        sourceArray.push(myForm.source[index].value);
		
    }
    str = sourceArray.join(', ');
    row.insertCell(5).innerHTML = str;
    row.insertCell(6).innerHTML = drink;
    for (index=0;index<drinkChoiceLen;index++)
	{
		if(myForm.checkDrink[index].checked==true)
        drinkArray.push(myForm.checkDrink[index].value);
		
    }
    drinkStr = drinkArray.join(', ');
    row.insertCell(7).innerHTML = drinkStr;
    row.insertCell(8).innerHTML = textInput;
    row.insertCell(9).innerHTML = comment;



    // clearForm();

}

txtInput1.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      errText1.innerHTML = "";
    }
  };
//To validate First Name

firstName.onblur = function() {    
    if (firstName.value == "") { 
        firstName.classList.add('invalid');
        errFirstName.innerHTML = 'First name should not be empty';
    }
   else if (!rname.test(firstName.value)) {
        firstName.classList.add('invalid');
        errFirstName.innerHTML = 'You can use only alphabets';
    }
    else {
        this.classList.remove('invalid');
        errFirstName.innerHTML = "";
    }
  };

  firstName.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      errFirstName.innerHTML = "";
    }
  };

  //To validate Last Name
  lastName.onblur = function() {
    if (lastName.value == "") { 
        lastName.classList.add('invalid');
        errLastName.innerHTML = 'Last name should not be empty';
    }
    else if (!rname.test(lastName.value)) {
        lastName.classList.add('invalid');
        errLastName.innerHTML = 'You can use only alphabets';
    }
    else {
        this.classList.remove('invalid');
        errLastName.innerHTML = "";
    }
  };

  lastName.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      errLastName.innerHTML = "";
    }
  };

  //To validate Email ID
  emailId.onblur = function() {
    if (emailId.value == "") { 
        emailId.classList.add('invalid');
        errEmailId.innerHTML = 'Email should not be empty';
    }
    else if (!remail.test(emailId.value)) {
        emailId.classList.add('invalid');
        errEmailId.innerHTML = 'Please enter a vaild email id';
    }
    else {
        this.classList.remove('invalid');
        errEmailId.innerHTML = "";
    }
  };

  emailId.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      errEmailId.innerHTML = "";
    }
  };

  //To validate Phone Number
  phoneNumber.onblur = function() {
    if (phoneNumber.value == "") { 
        phoneNumber.classList.add('invalid');
        errPhone.innerHTML = 'Phone Number should not be empty';
    }
    else if (!rphone.test(phoneNumber.value)) {
        phoneNumber.classList.add('invalid');
        errPhone.innerHTML = 'Please enter a vaild phone number';
    }
    else {
        this.classList.remove('invalid');
        errPhone.innerHTML = "";
    }
  };

  phoneNumber.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      errPhone.innerHTML = "";
    }
  };

  //To validate Zip Code
  zipcode.onblur = function() {
    if (zipcode.value == "") { 
        zipcode.classList.add('invalid');
        errZipCode.innerHTML = 'Zip Code should not be empty';
    }
    else if (!rzip.test(zipcode.value)) {
        zipcode.classList.add('invalid');
        errZipCode.innerHTML = 'Please enter a vaild Zip Code';
    }
    else {
        this.classList.remove('invalid');
        errZipCode.innerHTML = "";
    }
  };

  zipcode.onfocus = function() {
    if (this.classList.contains('invalid')) {
      this.classList.remove('invalid');
      errZipCode.innerHTML = "";
    }
  };

  //To generate checkbox dynamically
  function selectFunction(e){
      if(myForm.drink.value == "cappuccino"){
        cappuccino.style.display = "block";
      } else 
        cappuccino.style.display = "none";
        text1.style.display = "none";
        errText1.innerHTML = "";
        if(myForm.drink.value == "espresso"){
            espresso.style.display = "block";
     } else
     espresso.style.display = "none"; 
     text1.style.display = "none";
        errText1.innerHTML = "";
        if(myForm.drink.value == "macchiato"){
            macchiato.style.display = "block";
     } else
     macchiato.style.display = "none"; 
        if(myForm.drink.value == "mochaccino"){
            mochaccino.style.display = "block";
     } else
     mochaccino.style.display = "none"; 
        if(myForm.drink.value == "vienna"){
            vienna.style.display = "block";
     } else
            vienna.style.display = "none"; 
    }

    //To display text box dynamically
    function onCheck(e){
        if(e.checked == true){
        text1.style.display = "block";
        test.innerHTML = "";
        } else
        text1.style.display = "none";
        errText1.innerHTML = "";
    }

    // //Generate table
    // function createTable(){
    //     var tab = document.getElementById("myTable");
    //     var row = tab.insertRow();
    //     var cell1 = row.insertCell();
    //     var cell2 = row.insertCell();
    //     var cell3 = row.insertCell();
    //     var cell4 = row.insertCell();
    //     var cell5 = row.insertCell();
    //     var cell6 = row.insertCell();
    //     var cell7 = row.insertCell();

    //     cell1.innerHTML = "a";
    //     cell2.innerHTML = "a";
    //     cell3.innerHTML = "a";
    //     cell4.innerHTML = "a";
    //     cell5.innerHTML = "a";
    //     cell6.innerHTML = "a";
    //     cell7.innerHTML = "a";


    // }
$(document).ready(function(){

    $('#submit').click(function(){
       return validateForm(); 
    });

    function validateForm(){
    
        var rname = /^[a-zA-Z ]{2,30}$/;
        var remail = /^([^<>()\[\],;:@"\x00-\x20\x7F]|\\.)+@(([a-z]|#\d+?)([a-z0-9-]|#\d+?)*([a-z0-9]|#\d+?)\.)+([a-z]{2,4})$/i;
        var rphone = /^(\+\d{1,3} ?)?(\(\d{1,5}\)|\d{1,5}) ?\d{3} ?\d{0,7}( (x|xtn|ext|extn|pax|pbx|extension)?\.? ?\d{2-5})?$/i;
        var rzip = /^(\d{5}(-\d{4})?|([a-z][a-z]?\d\d?|[a-z{2}\d[a-z]) ?\d[a-z][a-z])$/i;

        var errFlag;
        
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var email = $('#emailId').val();
        var phone = $('#phoneNumber').val();
        var zip = $('#zipcode').val();
        var comments = $('#comments').val();
    
        var inputVal = new Array(firstName, lastName, email, phone, zip, comments);
        
         $('.error').hide();
            //Radio button
        if($('input[name="title"]:checked').length == 0){
            $('#title').after('<span class="error" style="color:red"> Please select an option</span>');
            errFlag = false;
        } else { 
            $('#title').after('<span class="error" style="color:red"> </span>');
             errFlag=true;
            } 

            if(inputVal[0] == ""){
                $('#firstName').after('<span class="error" style="color:red"> Please enter your first name</span>');
                $('#firstName').css('border-color', 'red');
                errFlag = false;
            } 
            else if(!rname.test(firstName)){
                $('#firstName').after('<span class="error" style="color:red"> Letters only</span>');
                $('#firstName').css('border-color', 'red');
                errFlag = false;
            } else {
                $('#firstName').after('<span class="error" style="color:red"> </span>'); 
                $('#firstName').css('border-color', '');
                errFlag=true;
            }
            if(inputVal[1] == ""){
                $('#lastName').after('<span class="error" style="color:red"> Please enter your last name</span>');
                $('#lastName').css('border-color', 'red');
                errFlag = false;
            } 
            else if(!rname.test(lastName)){
                $('#lastName').after('<span class="error" style="color:red"> Letters only</span>');
                $('#lastName').css('border-color', 'red');
                errFlag = false;
            }else {
                $('#lastName').after('<span class="error" style="color:red"> </span>'); 
                $('#lastName').css('border-color', '');
                errFlag=true;
            }
            if(inputVal[2] == ""){
                $('#emailId').after('<span class="error" style="color:red"> Please enter your email address</span>');
                $('#emailId').css('border-color', 'red');
                errFlag = false;
            } 
            else if(!remail.test(email)){
                $('#emailId').after('<span class="error" style="color:red"> Please enter a valid email address</span>');
                $('#emailId').css('border-color', 'red');
                errFlag = false;
            }else {
                $('#emailId').after('<span class="error" style="color:red"> </span>'); 
                $('#emailId').css('border-color', '');
                errFlag=true;
            }
            if(inputVal[3] == ""){
                $('#phoneNumber').after('<span class="error" style="color:red"> Please enter your phone number</span>');
                $('#phoneNumber').css('border-color', 'red');
                errFlag = false;
            } 
            else if(!rphone.test(phone)){
                $('#phoneNumber').after('<span class="error" style="color:red"> Enter a valid phone number</span>');
                $('#phoneNumber').css('border-color', 'red');
                errFlag = false;
            }else {
                $('#phoneNumber').after('<span class="error" style="color:red"> </span>'); 
                $('#phoneNumber').css('border-color', '');
                errFlag=true;
            }
            if(inputVal[4] == ""){
                $('#zipcode').after('<span class="error" style="color:red"> Please enter your zip code</span>');
                $('#zipcode').css('border-color', 'red');
                errFlag = false;
            } 
            else if(!rzip.test(zip)){
                $('#zipcode').after('<span class="error" style="color:red">Enter a valid zip code</span>');
                $('#zipcode').css('border-color', 'red');
                errFlag = false;
            }else {
                $('#zipcode').after('<span class="error" style="color:red"> </span>'); 
                $('#zipcode').css('border-color', '');
                errFlag=true;
            }
            if($('input[name="source"]:checked').length == 0){
                $('#source').after('<span class="error" style="color:red"> Please select an option</span>');
                errFlag = false;
            } else { 
                $('#source').after('<span class="error" style="color:red"> </span>'); 
            }
            if(inputVal[5] == ""){
                $('#comments').after('<span class="error" style="color:red"> Please enter your comments</span>');
                $('#comments').css('border-color', 'red');
                errFlag = false;
            } else {
                $('#comments').after('<span class="error" style="color:red"> </span>'); 
                $('#comments').css('border-color', '');
            }

            if(errFlag){
                
             //        $('#myForm').trigger("reset");
           //     container.style.display = "none";
                

            var pageItems = {
                    "firstName": firstName,
                    "lastName": lastName,
                    "emailId": email,
                    "phone":phone,
                    "zipCode": zip,
                    "comments": comments
                };

                

            //set object to sessionStorage
            setObject('test', pageItems);

            function setObject(key, obj) {
                localStorage.setItem(key, JSON.stringify(obj));
            }
            //get object from sessionStorage
            getObject('test');

            function getObject(key) {
                return JSON.parse(localStorage.getItem(key));
            }

            document.getElementById("localStoragePlace").innerHTML = JSON.parse(localStorage.getItem('test'));

            alert(localStorage.test);

            }
            else {
                     return false;
                }
        }   
    });
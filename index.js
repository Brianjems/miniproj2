$(document).ready(function(){
    
     LoadHeader();

    function checkLogin(){
        var UserLogin =localStorage.getItem('UserLogin');
        var UserInfo = JSON.parse(UserLogin);
        var divLogin = $("#divLogin").attr("class");
        if(UserLogin != null){
            $('#displayUser').text("Welcome:"+UserInfo.FirstName);
            document.getElementById('btnsignup').style.display = "none";
            document.getElementById('btnlogin').style.display = "none";
            document.getElementById('btnlogout').style.display = "block";
           
            if(UserInfo.IsSubscribe == false || !UserInfo.IsSubscribe ){
                if(IsDocumentExists("btnSubscribe") == true){
                    document.getElementById('btnSubscribe').style.display = "block";
                }
               
            }
            else{
                if(IsDocumentExists("btnSubscribe") == true){
                    document.getElementById('btnSubscribe').style.display = "none";
                }
                if(IsDocumentExists("btnDownload")== true){
                    document.getElementById('btnDownload').style.display = "block";
                }
               
               
            }
           
            document.getElementById('btnDisplayUser').style.display = "block";
    
            if(divLogin.includes('active')){
                popupLogin();
            }
        }
        else{
            document.getElementById('btnsignup').style.display = "block";
            document.getElementById('btnlogin').style.display = "block";
            document.getElementById('btnlogout').style.display = "none";
            document.getElementById('btnSubscribe').style.display = "none";
            document.getElementById('btnDisplayUser').style.display = "none";
           
        }
    }

    function LoadHeader(){
        $("#header").load("header.html");
    }
   
    function IsDocumentExists(Id){
        if(document.getElementById(Id) === null || 
         document.getElementById(Id) === undefined) {
    return false;
         }
   else{
    return true;
   }
    }



    function popupLogin(){
        let container = document.querySelector('.container');
        container.classList.toggle('active');
        let popup = document.querySelector('.login-form');
        popup.classList.toggle('active');
    }
    
    function Subscribe(){
        var UserLogin =localStorage.getItem('UserLogin');
        var UserInfo = JSON.parse(UserLogin);
        var Id = UserInfo.Id;
        UserInfo.IsSubscribe = true;
        var jsonStringData = JSON.stringify(UserInfo);
        localStorage.removeItem(Id);
        localStorage.setItem(Id,jsonStringData);
        localStorage.removeItem('UserLogin');
        localStorage.setItem('UserLogin',jsonStringData);
    }
   
   
    $('#btnlogout').on('click',function(e){
        console.log('logout');
        localStorage.removeItem('UserLogin');
        checkLogin();
    })
   
    $('#btnSubscribe').on('click',function(e){
        Subscribe();
        checkLogin();

    });

    $('#signupForm').on('submit',function(e){

        if($('#txtPassword').val() != $('#txtConfirmPassword').val()){
            alert('Password not match');
        }
        else{
            var Id = CreateGuid();
            var data = {
                Id:Id,
                FirstName:$('#txtFirstName').val(),
                LastName:$('#txtLastName').val(),
                Email:$('#txtEmailAddress').val(),
                Password:$('#txtPassword').val(),
                IsSubscribe:false
               }

            var jsonStringData = JSON.stringify(data);
            localStorage.setItem(Id,jsonStringData);
            alert('Successfully Register');
        }
    });

    function CreateGuid() {
        function _p8(s) {
        var p = (Math. random(). toString(16)+"000000000"). substr(2,8);
        return s ? "-" + p. substr(0,4) + "-" + p. substr(4,4) : p ;
        }
        return _p8() + _p8(true) + _p8(true) + _p8();
    }

    $('#login').on('submit',function(){

        var allStorage = getAllStorage();

        var email = $('#txtLoginEmail').val();
        var password = $('#txtLoginPassword').val();
        
        let login = allStorage.filter(e=>e.Email ==email && e.Password == password);


        if(login.length >= 1){
            alert('successfully login');
            localStorage.setItem('UserLogin',JSON.stringify(login[0]));
            $('#txtLoginEmail').val('');
            $('#txtLoginPassword').val('');
            checkLogin();
        }
        else{
            alert('incorrect username and password');
        }

    });

    function getAllStorage() {
        var archive = [],
            keys = Object.keys(localStorage),
            i = 0, key;
    
        for (; key = keys[i]; i++) {
            archive.push(JSON.parse(localStorage.getItem(key)));
        }
        return archive;
    }

});
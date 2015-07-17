window.addEventListener('load',function(){ 
    var form = document.forms[0]; 
    form.addEventListener('submit',function(e){      
        e.preventDefault(); 

        var userName = form.userName.value; 
        var pwd = form.pwd.value;     

        // var userInfo = JSON.parse(localStorage.getItem(userName));              
        // if(userInfo && userInfo.pwd === pwd) 
        if(userName == 'czq' && pwd === '960821') 
            location.href = 'main.html';               
        // alert('fail');          
    }); 
    document.getElementsByTagName('button')[0].addEventListener('click',function(e){       
        e.preventDefault();       
        location.href = 'regist.html'; 
    }); 
}); 
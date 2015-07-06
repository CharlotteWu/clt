window.onload  = function(){ 
 //back to top button
    var btt = document.getElementById('back-to-top');  
    var timer = null;
    var isTop = true; 
     
    
    window.onscroll = function(){
       var STop = document.documentElement.scrollTop || document.body.scrollTop;
       if(!isTop){
         
       }
       
       if(STop > 110){
          btt.style.display = 'block';
       }else{
        btt.style.display = 'none';
       }

      isTop = false;
    }

    btt.onclick = function(){
       
       timer = setInterval(function(){

            var STop = document.documentElement.scrollTop || document.body.scrollTop;  
            var iSpeed = Math.floor(-STop / 3);
            document.documentElement.scrollTop = document.body.scrollTop = STop + iSpeed; 

            isTop = true;

            if(STop == 0){
              clearInterval(timer);
            }

       },30);


    }
 
 }
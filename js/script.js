$(function(){
  //menu animation and change
             $("#menu").on("click","span",function(){ 

                  if($(this).hasClass("bth-active")){
                      
                  }
               
                  var currentIndex = $(this).index();
                  var marginL = "-"+currentIndex*100+"%";

                 if($("#expand").hasClass("active")){
                
                     $("#expand .expandlist").animate({marginLeft:marginL});
                 }else{
                   $("#expand .expandlist").css({marginLeft:marginL});
                   $("#expand").animate({height:"40px"}).addClass("active"); 
                 } 
                $(this).addClass("btn-active").
                        css('background','#ffffff').
                        css('color','#2CADFA').
                        siblings().
                        removeClass("btn-active").
                        css('background','#2CADFA').
                        css('color','#ffffff');
                 return false; 
             });

         //外部按关闭
   
          $('.close-btn').on("click",function(){
            $('#menu .btn-active').css('background','#2CADFA').css('color','#ffffff').removeClass('btn-active');
             $("#expand").animate({height:"0px"},function(){   
               $(this).removeClass('active'); 
             }); 

             return false;
          });

//login&register part
   $('.register').on("click",function(){
          $('.register').addClass('.background');
          $('register').addClass('.register-form');
          $('.background').css('display','block');
          $('.register-form').css('display','block'); 
   }); 

  $('.login').on("click",function(){
          $('.login').addClass('.background');
          $('login').addClass('.login-form');
          $('.background').css('display','block');
          $('.login-form').css('display','block'); 
   }); 

   $('#side3').on("click",function(){
          $('#side3').addClass('.background');
          $('#side3').addClass('.contact-form');
          $('.background').css('display','block');
          $('.contact-form').css('display','block'); 
   });

  $('.close').on("click",function(){
          $('.register').removeClass('.background');
          $('register').removeClass('.register-form');
          $('.background').css('display','none');
          $('.register-form').css('display','none'); 
          $('input').text("");
          $('input').val("");
          $('.confirm').text("");
   }); 

  $('.close').on("click",function(){ 
          $('.login').removeClass('.background');
          $('login').removeClass('.login-form');
          $('.background').css('display','none');
          $('.login-form').css('display','none'); 
          $('input').text("");
          $('input').val("");
          $('.confirm').text("");
   }); 

  $('.close').on("click",function(){ 
          $('#side3').removeClass('.background');
          $('#side3').removeClass('.contact-form');
          $('.background').css('display','none');
          $('.contact-form').css('display','none');  
   });
 //验证用户名
  $('#regis-name').blur(function(){
      var re = /[\W]/g;
      if(re.test($(this).val())){  
       $('.confirm-name').text('只能为数字和字母').css('color','red'); 
      }else if( $(this).val().length<3){
         $('.confirm-name').text('昵称过短').css('color','red');
      }else  if( $(this).val().length>10){
         $('.confirm-name').text('昵称过长').css('color','red');
      } else  {
        $('.confirm-name').text('');
      } 
  });

 //验证密码
   $("#password2").blur(function(){
      if($("#password2").val()==$("#password1").val()){
        $(".confirm").text("");   
      } else { 
        $("#confirm-submit").on("click", alert("密码不一致，请重输"));
      }
    })  ;

 //验证姓名 
 $('#true-name').blur(function(){
      var res = /[^\u4e00-\u9fa5]/g;
      if(res.test($(this).val())){    
        $('.warning').text('只能汉字').css('color','red');
      }    else{ 
         $('.warning').text(''); 
        if( $(this).val().length<2){  
         $('.warning').text('同学，你逗我玩呢~').css('color','red');
        }
      }  
  });

 //验证学号  
 
 $('#number').blur(function(){
      var res = /[^0-9]/g;
      if(res.test($(this).val())){   
         $('.warning2').text('只能数字').css('color','red'); 
      }    else{ 
         $('.warning2').text(''); 
         if($(this).val().length != 11){
          $('.warning2').text('输入学号位数有错').css('color','red'); 
         }
      }  
  });
 //验证身份证
 $('#identity').blur(function(){
      var res = /[^0-9\*]/g;
      if(res.test($(this).val())){   
         $('.warning3').text('只能数字和*号').css('color','red'); 
      }    else{ 
         $('.warning3').text('');  
      }  
  });


 //search indentity information ajax part 学籍查找
 /*$('#search').on('click',function(){
   $.ajax({
     url:'',
     type:'get',
     dataType:'json',
     success:function(data){
       if(data.success){
        $('#return').html(data.msg);
       }else{
        $('#return')html("出现错误："+data.msg);
       }
     },
     error:function(jqXHR){
       alert("出现错误："+jqXHR.status);
     },

   });

 });*/
   

 }) 

 
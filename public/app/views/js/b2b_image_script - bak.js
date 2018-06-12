$(document).ready(function (e) 
{
    $('img[usemap]').rwdImageMaps();
});
                    
            // tab on first modal
            function openInfo(evt, blockName) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }

                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(blockName).style.display = "block";
                evt.currentTarget.className += " active";
            }
            
            // tab on second modal 
            function TabInfo(evt, blockName) {
                var i, tabcontent, tablinks;
                tabcontent = document.getElementsByClassName("tabcontent");
                
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }

                tablinks = document.getElementsByClassName("tablinks");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(blockName).style.display = "block";
                evt.currentTarget.className += " active";
            }

            // Get the element with id="defaultOpen" and click on it
           
           
           // if highlight changed content checked, check both
           
           
   
        function check()
           {
           
           // select all mobiles with some changed content
           if ($('#check3').prop('checked'))
               {
               $("#img4").addClass("active_img");
           $("#img5").addClass("active_img");
           $("#img6").addClass("active_img");
               $("#img7").addClass("active_img");
           $("#img8").addClass("active_img");
           $("#img9").addClass("active_img");
               }
               else
               {
                $("#img4").removeClass("active_img");
            $("#img5").removeClass("active_img");
           $("#img6").removeClass("active_img");
               $("#img7").removeClass("active_img");
           $("#img8").removeClass("active_img");
           $("#img9").removeClass("active_img");
               }
           
            // select all mobiles with some changed content is up
            
           // console.log('Inside check function');
           // console.log("$('#check3').prop('checked')"+$('#check3').prop('checked'));
           // console.log("$('.change').prop('checked'"+$('.change').prop('checked'));
            if ($('#check3').prop('checked'))
            {
               
                $('.change').prop('checked', true);
            }
            else
            {
                $('.change').prop('checked', false);
           
           }
           }
           

            
            // if any of those two unchecked, uncheck highlight changed content
            function uncheck1()
           {
          if (document.getElementById("check1").checked == false){
          
            document.getElementById("check3").checked = false;
           } 
           
            if (document.getElementById("check1").checked == true)
            {
            
            if(document.getElementById("check2").checked == true)
            {
            document.getElementById("check3").checked = true;
            }
   
           } 
           
           
            if ($('#check1').prop('checked'))
           {
           
           $("#img4").addClass("active_img");
           $("#img5").addClass("active_img");
           $("#img6").addClass("active_img");
           }
           else{
           
           
           $("#img4").removeClass("active_img");
            $("#img5").removeClass("active_img");
           $("#img6").removeClass("active_img");
           }
       
     }
           
           
            function uncheck2()
           {
          if (document.getElementById("check2").checked == false){
          
            document.getElementById("check3").checked = false;
           } 
           
            if (document.getElementById("check1").checked == true)
            {
            
            if(document.getElementById("check2").checked == true)
            {
            document.getElementById("check3").checked = true;
            }
   
           } 
           
           
           
           
           if ($('#check2').prop('checked'))
           {
           $("#img7").addClass("active_img");
           $("#img8").addClass("active_img");
           $("#img9").addClass("active_img");
           }
          else
           {
           $("#img7").removeClass("active_img");
           $("#img8").removeClass("active_img");
           $("#img9").removeClass("active_img");
           }
          
       
     }
           
           
            function  sameContent()
               {
               if ($('#check4').prop('checked'))
               {
               $("#img1").addClass("active_img");
               $("#img2").addClass("active_img");
               $("#img3").addClass("active_img");
               }
               else
               {
               $("#img1").removeClass("active_img");
               $("#img2").removeClass("active_img");
               $("#img3").removeClass("active_img");
               }
               }
               
               
           // click on image
           $(function () {
                    
                    $("img").on("click",function()
                    {
                       $('.active_img').removeClass('active_img');
                        $(this).toggleClass("active_img");
                    })
                   });
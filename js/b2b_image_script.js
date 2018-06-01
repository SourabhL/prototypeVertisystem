$(document).ready(function (e) 
{
    $('img[usemap]').rwdImageMaps();
    
    $("img").on("click",function()
    {
        $('.current_img').removeClass('current_img');
        $(this).toggleClass("current_img");
    })
});


// if highlight changed content checked, check both
function highlightImages(clickedElement)
{
   
    // if highlight changed content
    if($(clickedElement).val() == 'highlightChangedCheck')
    {
        // select all mobiles with some changed content is up
        if ($(clickedElement).prop('checked'))
        {
            $('.change').prop('checked', true);
            $(".moved").addClass("active_img");
            $(".newlyAdded").addClass("active_img");
        }
        else
        {
            $('.change').prop('checked', false);
            $(".moved").removeClass("active_img");
            $(".newlyAdded").removeClass("active_img");

        }
        
    }
    else if($(clickedElement).val() == 'sameContentCheck')
    {
        $(".same").addClass("active_img");
        // select all mobiles with some changed content is up
        if ($(clickedElement).prop('checked'))
        {
            $(".same").addClass("active_img");
        }
        else
        {
            $(".same").removeClass("active_img");

        }
    }
    else if(($(clickedElement).val() == 'movedCheck')) //moved
    {
        // select all mobiles with some changed content is up
        if ($('#movedCheck').prop('checked') && $('#newlyAddedCheck').prop('checked'))
        {
            $('#highlightChangedCheck').prop('checked', true);
        }
        else
        {
            $('#highlightChangedCheck').prop('checked', false);
        }
        
        if ($(clickedElement).prop('checked'))
        {
            $(".moved").addClass("active_img");
        }
        else
        {
            $(".moved").removeClass("active_img");

        }
        
    }
    else if(($(clickedElement).val() == 'newlyAddedCheck')) //moved
    {
        // select all mobiles with some changed content is up
        if ($('#movedCheck').prop('checked') && $('#newlyAddedCheck').prop('checked'))
        {
            $('#highlightChangedCheck').prop('checked', true);
        }
        else
        {
            $('#highlightChangedCheck').prop('checked', false);
        }
        
        if ($(clickedElement).prop('checked'))
        {
            $(".newlyAdded").addClass("active_img");
        }
        else
        {
            $(".newlyAdded").removeClass("active_img");

        }
        
    }
}
    
         
  
         
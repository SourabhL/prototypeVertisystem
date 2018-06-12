function init()
{
	//$('img[usemap]').rwdImageMaps();
	
	$('.map').maphilight({
					
		
	});
	
	highlightImages();
	
	$('#mobileList').on('change',function()
	{
		var image_source = $("#mobileList option:selected").val();
		var image_details = $('option:selected', this).attr('details');

		phoneDetails(image_details,image_source);
			
	});

	$('map[name="shelf"] area').on('click',function()
	{
		phoneDetails($(this).attr('details'),$(this).attr('source'));
		
		$("#mobileList").val($(this).attr('source'));
	});
}
   
//Function to display the details of the phone selected
function phoneDetails(image_details,image_source)
{
    var phone_details_array = image_details.split(','); 
    var current_detail_array =[];
    var content = '<br/><table class="table table-bordered">';
    
    $('#content').empty(); //Empty the information Table
    $("#my_image").attr("src",'app/views/Images/'+image_source+'.png').show(); // Set the Bigger image to a new one              
    
    
    for(i=0;i<phone_details_array.length;i++)
    {
        current_detail_array = phone_details_array[i].split(':');
        content += '<tr><td name="">' + current_detail_array[0]  +'</td><td>' + current_detail_array[1] + '</td></tr>';
    }
    content += "</table>";
    $('#content').html(content);
}


// if highlight changed content checked, check both
function highlightImages(clickedElement)
{
    
    if($(clickedElement).val() == 'highlightChangedCheck')
    {
        var dataMoved = $('.moved').data('maphilight');
        var dataNewlyAdded = $('.newlyAdded').data('maphilight');
        
        if ($(clickedElement).prop('checked'))
        {
            $('.change').prop('checked', true);

            dataMoved.alwaysOn = true;    
            dataNewlyAdded.alwaysOn = true;            
        }
        else
        {
            $('.change').prop('checked', false);
          
            dataMoved.alwaysOn = false;
            dataNewlyAdded.alwaysOn = false; 
        }
        $('.moved').data('maphilight', dataMoved).trigger('alwaysOn.maphilight');
        $('.newlyAdded').data('maphilight', dataNewlyAdded).trigger('alwaysOn.maphilight');
        
        
    }
    else if($(clickedElement).val() == 'sameContentCheck')
    {
        var data = $('.same').data('maphilight');
        
        if ($(clickedElement).prop('checked'))
        {
            data.alwaysOn = true;
        }
        else
        {
            data.alwaysOn = false;

        }
        $('.same').data('maphilight', data).trigger('alwaysOn.maphilight');
    }
    else if(($(clickedElement).val() == 'movedCheck')) //moved
    {
       
        if ($('#movedCheck').prop('checked') && $('#newlyAddedCheck').prop('checked'))
        {
            $('#highlightChangedCheck').prop('checked', true);
            
        }
        else
        {
            $('#highlightChangedCheck').prop('checked', false);
        }
        
        var data = $('.moved').data('maphilight');
        
        if ($(clickedElement).prop('checked'))
        {
            data.alwaysOn = true;
        }
        else
        {
            data.alwaysOn = false;

        }

        $('.moved').data('maphilight', data).trigger('alwaysOn.maphilight');
        
    }
    else if(($(clickedElement).val() == 'newlyAddedCheck')) //newlyAdded
    {
        
        if ($('#movedCheck').prop('checked') && $('#newlyAddedCheck').prop('checked'))
        {
            $('#highlightChangedCheck').prop('checked', true);
        }
        else
        {
            $('#highlightChangedCheck').prop('checked', false);
        }
        
        var data = $('.newlyAdded').data('maphilight');
        
        if ($(clickedElement).prop('checked'))
        {
            data.alwaysOn = true;
        }
        else
        {
            data.alwaysOn = false;

        }
        $('.newlyAdded').data('maphilight', data).trigger('alwaysOn.maphilight');
        
    }
	else
	{
		var dataMoved = $('.moved').data('maphilight');
        var dataNewlyAdded = $('.newlyAdded').data('maphilight');
		var same = $('.same').data('maphilight');

		$('.change,.moved,.same,.highlightChangedCheck').prop('checked', false);
          
		dataMoved.alwaysOn = false;
		dataNewlyAdded.alwaysOn = false; 
		same.alwaysOn = false;
        
		$('.same').data('maphilight', same).trigger('alwaysOn.maphilight');
        $('.moved').data('maphilight', dataMoved).trigger('alwaysOn.maphilight');
        $('.newlyAdded').data('maphilight', dataNewlyAdded).trigger('alwaysOn.maphilight')
	}
}
    
         
  
         
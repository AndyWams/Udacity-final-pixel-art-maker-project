// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!

	let i,x, y, j, pixelColor;

$('#sizePicker').submit(function(e) {
	e.preventDefault();
	$('#pixelCanvas').html('');
	
	x=$('#inputHeight').val(); // value of height
	y=$('#inputWeight').val();  // value of width

	for(i=0; x>i; x--){
	$('#pixelCanvas').append('<tr><td></td></tr>');
	
	}


	for(j=1; y>j; y--){
		$('tr').append('<td></td></tr>');
	} 	


});

}

$(document).ready(function(){
	$('#colorPicker').each(function(){
		
	$('table').on('click', 'td', function() {

	pixelColor = $('#colorPicker').val();

		if($(this).attr('style')){
            $(this).removeAttr('style');
        }
        
        else {
            $(this).attr('style', 'background:' + pixelColor);
        };
	});	

	})

	});

// call makeGrid() function
makeGrid();

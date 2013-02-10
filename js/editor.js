function preview ()
{
	$('.display-wrapper').empty();
	var text = $("#codeArea").val();

	format(text);


}

function format (text)
{
	// Handles new line characters
	var breaks = text.replace(/\n\r?/g, '<br/>');
	var newLineChar = breaks.replace('<br/><br/>','<br/><flag><br/>'); 
	var lines = newLineChar.split('<br/>');
	
	for (i=0; i<lines.length; i++) {
		var line = lines[i];
		if (line.indexOf('#') == 0)
		{
			line = line.substring(1, line.length);
			 $('<p>', {
			 		class: 'header',
     				text: line
 					}).appendTo('.display-wrapper');
		}
		else if (line == "<flag>")
		{
			$('<br/><br/>').appendTo('.display-wrapper');
		}
		else if (line.indexOf('<') == 0)
		{
			var endIndex = line.indexOf('>');
			line = line.substring(1,endIndex);
			$('<p>', {
			 		class: 'title',
     				text: line
 					}).appendTo('.display-wrapper');

		}
		else if ((line.indexOf('$') == 0) && (line.indexOf('r') == 1))
		{
			line = line.substring(2, line.length);
			$('<p>', {
			 		class: 'align-right',
     				text: line
 					}).appendTo('.display-wrapper');
		}

		else if ((line.indexOf('$') == 0) && (line.indexOf('c') == 1))
		{
			line = line.substring(2, line.length);
			$('<p>', {
			 		class: 'align-center',
     				text: line
 					}).appendTo('.display-wrapper');
		}
		
		else
		{
			$('<p>', {
			 		class: 'indented',
     				text: line
 					}).appendTo('.display-wrapper');
		}
			

	}

}
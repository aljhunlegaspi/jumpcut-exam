$(function () {
    'use strict';

     var autoFillItems = [
	    "Partial Match",
	    "Partial Match 1",
	    "Partial Match 2",
	    "Autofill Match",
	    "Autofill Match 1",
	    "Autofill Match 2",
	    "Other Match",
	    "Other Match 1",
	    "Other Match 2",
	  ];


    $('#search-box').autocomplete({
        lookup: autoFillItems,
        onSelect: onSelect
    });

    $('#close-alert-box').click(close);
    $('#proceed-alert-box').click(proceed);
    
    function onSelect(data){
    	$('.alert-box').show();
    	$('#header-value').text(data.value);
    }

    function close(){
    	$('#search-box').val('');
    	$('.alert-box').hide();
    	$('#header-value').text('');
    }

    function proceed(){
    	$('.alert-box').hide();
    	$('#header-value').text('');
    	alert('Done');
    }

});
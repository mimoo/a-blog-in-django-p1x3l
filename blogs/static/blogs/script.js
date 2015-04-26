// AJAX SCRIPT

// first pushState
if(history.state === null){
    var stateObj = { 'url': window.location.pathname, 'scrolly': 0}
    history.pushState(stateObj, "initial", window.location.pathname)
}

// on URL change (going back surely)
window.onpopstate = function(event) {
    if(event.state != null){
	ajaxLocation(event.state.url, event.state.scrolly)
    }
};

// check for ctrl+click
var ctrlPressed = false

$(window).on('keydown', function(e){
    if(e.metakey || e.ctrlKey) ctrlPressed = true
}).on('keyup', function(e){
    if(e.metakey || e.ctrlKey) ctrlPressed = false
})

// function to load pages
function ajaxLocation(url, scrolly){

    //
    $('#flash_helper').show()
    $(window).scrollTop(0)
    scrolly = typeof scrolly !== undefined ? scrolly : 0
    
    // load
    $.get(url, { ajax : true }, function(data){
	$('header').remove()
	$('main').remove()
	$('nav').after(data)

	$(document).ready(function(){
	    
	    $(window).scrollTop(scrolly)
	    if($('header img').length)
		$('header img').hide()
		$('header img').load(function(){
		    $('header img').fadeIn()
		})
	    $('#flash_helper').fadeOut('xslow')
	})
    })
}

// On document ready
$(document).ready(function(){
    
    // index AJAX + nav AJAX
    $(document).on('click', '.index a, nav .home, .intern', function(e){
  
	// new tab or same tab?
  	if(ctrlPressed) return true
	e.preventDefault()

	// update this state first
	var stateObj = { 'url': history.state.url, 'scrolly': $(window).scrollTop()}
	history.replaceState(stateObj, "page", window.location.pathname)
	
	// next state
	var url = $(this).attr('href')
	var stateObj = { 'url': url };
	history.pushState(stateObj, "page", url)
	
	// load
	ajaxLocation(url, 0)
    })

    // AJAX transforms Forms
    $('.detail form').append('<input type="hidden" name="ajax" value="1">')

    // Comment FORM AJAX
    $('.detail form').submit(function(){
	var form = $(this)
	var url = form.attr('action')
	var serialized = form.serialize()

	$.post(url, serialized, function(data){
	    if(data == '1'){
			var  html = '<div class="comment"><h3>' + form.find('#pseudo').val() + ' <small>maintenant</small></h3><p>' + form.find('textarea').val() + '</p></div>'
			form.before(html)
	    }
	    else{
			alert('Erreur: essayez d\'actualiser la page.')
	    }
	})

	return false
    })
});

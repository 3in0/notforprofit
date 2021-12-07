
clicked = function( e ) {

	let anId = e.currentTarget.getAttribute( "id" );

	if ( $( "#" + anId ).hasClass( "filter-on" ) )
		return;

	for ( let aCat of [ 'all', 'health', 'animals', 'env' ] ) {

		$( "#filter-" + aCat ).toggleClass( "filter-on", false );
		$( "#filter-" + aCat ).toggleClass( "filter-off", true );

		if ( anId == 'filter-all' )
			$( "#grid" ).toggleClass( "filter-" + aCat + "-hide", false );
		else
			$( "#grid" ).toggleClass( "filter-" + aCat + "-hide", true );


	}

	$( "#" + anId ).toggleClass( "filter-on", true );
	$( "#" + anId ).toggleClass( "filter-off", false );
//	$( "#" + anId ).toggleClass( "filter-off" );

	$( "#grid" ).toggleClass( anId + "-hide", false );
	
	window.m.layout();


}


document.addEventListener("DOMContentLoaded", function(event) { 

	//return;

	let aWidth = 440;
	let aWindowWidth = window.innerWidth;

	if ( aWindowWidth <= 500 ) {
		$( "img" ).attr( "width", aWindowWidth - 10 )
		$( ".grid-item .img" ).css( "height", aWindowWidth * 0.66667 );
		$( ".grid-item" ).css( "width", aWindowWidth - 10 )

		aWidth = aWindowWidth - 10;

	}

	window.m = new Masonry( '.grid', {
		columnWidth: aWidth
	  });

	  $( "button" ).on( "click", clicked );

} );



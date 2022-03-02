
clicked = function( e ) {

	let anId = e.currentTarget.getAttribute( "id" );

	if ( $( "#" + anId ).hasClass( "filter-on" ) )
		return;

	for ( let aCat of [ 'all', 'health', 'animals', 'environment', 'education' ] ) {

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

loadData = function( someData ) {

	for ( let aPackage of someData ) {

		let aElement = `<div class="grid-item filter-${ aPackage.tag }">
			
		<div class="img">
			<img src="thumbs/${ aPackage.thumb }.png"/>
		</div>

		<div class="words">
			<h2>${ aPackage.title}</h2>
			<p>${ aPackage.blurb }</p>
			<a href="https://${ aPackage.url }/" target="newTab">${ aPackage.url }</a>
		</div>
		</div>`;

		$( "#grid" ).append( aElement );

	}


}

const initialise = function( someData ) {

	loadData( someData );

	let aWidth = 440;
	let aWindowWidth = window.innerWidth;

	if ( aWindowWidth <= 500 ) {
		$( "img" ).attr( "width", aWindowWidth  )
		$( ".grid-item .img" ).css( "height", aWindowWidth * 0.66667 );
		$( ".grid-item" ).css( "width", aWindowWidth )

		aWidth = aWindowWidth ;

	}

	window.m = new Masonry( '.grid', {
		columnWidth: aWidth
	  });

	  $( "button" ).on( "click", clicked );

}

document.addEventListener("DOMContentLoaded", function(event) { 

	//return;

	
	let someOptions = {
		url: 'data.json',
		dataType: "json",
		cache: false,
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		}

	}

	$.ajax(someOptions).done( initialise ).fail( function () { console.log("data call failed") });



} );



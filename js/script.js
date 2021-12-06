$( document ).ready( function() {
    var Offset = $( '.menu_top' ).offset();
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > Offset.top ) {
        $( '.menu_top' ).addClass( 'Fixed' );
      }
      else {
        $( '.menu_top' ).removeClass( 'Fixed' );
      }
    });
});
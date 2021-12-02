if(document.cookie.indexOf('hidecookiedingsbums=1') != -1){
    jQuery('#cookiedingsbums').hide();
} else {
    jQuery('#cookiedingsbums').prependTo('body');
    jQuery('#cookiedingsbumsCloser').show();
}

(function( $ ){

  var methods = {

    regexp: function ( options ) {
      //console.log(this);
      //console.log(options);

      return this.each(function () {
       var pat;
       var val = $(this).val();
       var isValid = true;

        if(options.pattern){
            pat = new RegExp(options.pattern);          
          if(!pat.test(val)){
            isValid = false;
          }
        }
        if(isValid){
          options.onValid(this);
        } else {
          options.onNotValid(this);
        }
      });

    },
    email: function ( options ) {

        var isValid = true;

        var settings = $.extend({
          "pattern": "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\." +
         "[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
         "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+" +
         "[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
        }, options);

        // //console.log(settings);

        return methods.regexp.call(this, settings);

    },
    passwd: function ( options ) {
      
      return this.each(function () {
        var isValid = true;
        var val = $(this).val();
        var pat;

        if(options.small){
          pat = new RegExp("[a-z]");
          if(!pat.test(val)){
            isValid = false;
          }
        }
        if(options.big){
          pat = new RegExp("[A-Z]");
          if(!pat.test(val)){
            isValid = false;
          }
        }
        if(options.digit){
          pat = new RegExp("\\d");
          if(!pat.test(val)){
            isValid = false;
          }
        }
        if(options.special){
          pat = new RegExp("[\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)\\_\\+\\-\\=]");
          if(!pat.test(val)){
            isValid = false;
          }
        }

        if(isValid){
          options.onValid(this);
        } else {
          options.onNotValid(this);
        }
      
      });

    }
  };
  
  $.fn.myValidation = function ( method ) {
    if( methods[ method ] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ) );
    }
    else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    }
    else {
      $.error('Method ' + method + ' does not exists in jQuery.myValidation');
    }
  };

})( jQuery );
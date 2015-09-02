/**
 * Plugin for creating depending checkboxes, whit a parent/child relation
 *
 * Created by Joris Ros <joris@timdm.nl> on 02/09/15.
 */
;(function ( $, window, document, undefined ) {

    "use strict";

    var pluginName = "parentCheckBox",
        defaults = {
            parentElement: null,
            mandatory: true
        };

    // The actual plugin constructor
    function Plugin ( element, options ) {
        this.element = element;

        if(typeof options == 'string')
        {
            defaults.parentElement = $(options);
        }

        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();

    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function () {
            if(this.settings.parentElement.length)
            {
                //console.log($(this.element));
                var self = this;
                $(this.element).change(function(s) {

                    if($(this).is(":checked"))
                    {
                        if(self.settings.mandatory) {

                            $(self.settings.parentElement).prop('disabled', true);
                        }
                        $(self.settings.parentElement).prop('checked', true).change();
                    }else{
                        if(self.settings.mandatory) {
                            $(self.settings.parentElement).prop('disabled', false);
                        }
                        $(self.settings.parentElement).prop('checked', false).change();
                    }

                });
            }
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
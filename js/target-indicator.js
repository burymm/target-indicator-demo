$.widget( "custom.targetIndicator", {
    // default options
    options: {
        minValue: 0,
        maxValue: 100,
        currentValue: 0,

        // Callbacks
        change: null
    },

    // The constructor
    _create: function() {
        this.element
            // add a class for theming
            .addClass( "target-indicator-wrapper" );

        this.header = $('<header>', {
            class: 'indicator-header'
        });

        var headerText = $('<span>', {
            text: 'Target Indicator Demo',
            class: 'indicator-header__text'
        });

        var closeButton = $('<button>', {
            text: 'X',
            class: 'indicator-header__close-button'
        });

        this.body = $('<div>', {
            class: 'indicator-body'
        });

        var section = $('<section>', {
            class: 'indicator-section'
        });

        var progressWrapper = $('<div>', {
            class: 'indicator-section__progress-wrapper'
        });

        var progressText = $('<label>', {
            text: 'Reached:',
            class: 'indicator-section__label'
        });

        var progressLine = $('<progress>', {
            class: 'indicator-section__progress',
            max: this.options.maxValue,
            value: this.options.currentValue
        });

        var progressCurrent = $('<div>', {
            text: '$' + this.options.currentValue,
            class: 'indicator-section__current-value'
        });

        var targetContainer = $('<div>', {
            class: 'indicator-target__wrapper'
        });

        var targetHeader = $('<div>', {
            text: 'Target',
            class: 'indicator-target__header'
        });

        var targetValue = $('<div>', {
            text: '$' + this.options.maxValue,
            class: 'indicator-target__value'
        });

        var hintText = $('<div>', {
            text: 'You need $' + this._getRemain() + ' more to reach your target',
            class: 'indicator-hint'
        });


        targetContainer.append(targetHeader);
        targetContainer.append(targetValue);

        progressWrapper.append(progressText);
        progressWrapper.append(progressLine);
        progressWrapper.append(targetContainer);
        progressWrapper.append(progressCurrent);

        section.append(progressWrapper);
        section.append(hintText);

        this.body.append(section);

        this.header.append(headerText);
        this.header.append(closeButton);

        this.element.append(this.header);
        this.element.append(this.body);

        /*// Bind click events on the changer button to the random method
         this._on( this.changer, {
         // _on won't call random when widget is disabled
         click: "random"
         });*/
        this._refresh();
    },

    _getRemain: function () {
        return this.options.maxValue - this.options.currentValue;
    },

    // Called when created, and later when changing options
    _refresh: function() {
        /*this.element.css( "background-color", "rgb(" +
         this.options.red +"," +
         this.options.green + "," +
         this.options.blue + ")"
         );

         // Trigger a callback/event
         this._trigger( "change" );*/
    },

    // A public method to change the color to a random value
    // can be called directly via .colorize( "random" )
    /* random: function( event ) {
     var colors = {
     red: Math.floor( Math.random() * 256 ),
     green: Math.floor( Math.random() * 256 ),
     blue: Math.floor( Math.random() * 256 )
     };

     // Trigger an event, check if it's canceled
     if ( this._trigger( "random", event, colors ) !== false ) {
     this.option( colors );
     }
     },*/

    // Events bound via _on are removed automatically
    // revert other modifications here
    _destroy: function() {
        // remove generated elements
        /*this.changer.remove();

         this.element
         .removeClass( "custom-colorize" )
         .enableSelection()
         .css( "background-color", "transparent" );*/
        this.header.remove();
        this.body.remove();
        console.log('widget destroyed');
    },

    // _setOptions is called with a hash of all options that are changing
    // always refresh when changing options
    _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
    },

    // _setOption is called for each individual option that is changing
    /*_setOption: function( key, value ) {
     // prevent invalid color values
     if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {
     return;
     }
     this._super( key, value );
     }*/
});
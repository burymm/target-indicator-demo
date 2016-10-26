/**
 * Created by GT72 on 26.10.2016.
 */

$(document).ready(function () {

    function indicatorButtonCallback () {
        var popup = $('#target-popup');

        $indicatorContainer.targetIndicator({
            minValue: 0,
            maxValue: 15,
            currentValue: 14
        });

        popup.addClass('show');
    }

    function indicatorCloseButtonCallback () {
        var popup = $('#target-popup');

        $indicatorContainer.targetIndicator('destroy');
        popup.removeClass('show');
    }

    function globalClickCallback (event) {
        if ($(event.target).hasClass('indicator-header__close-button')) {
            indicatorCloseButtonCallback(event);
        }
    }

    var $indicatorButton = $('#show-indicator-widget'),
        $indicatorContainer = $('#indicator-container');

    $indicatorButton.on('click', indicatorButtonCallback);
    $(document.body).on('click', globalClickCallback);


    /*// Initialize with default options
    $( "#my-widget1" ).colorize();

    // Initialize with two customized options
    $( "#my-widget2" ).colorize({
        red: 60,
        blue: 60
    });

    // Initialize with custom green value
    // and a random callback to allow only colors with enough green
    $( "#my-widget3" ).colorize( {
        green: 128,
        random: function( event, ui ) {
            return ui.green > 128;
        }
    });

    // Click to toggle enabled/disabled
    $( "#disable" ).on( "click", function() {
        // use the custom selector created for each widget to find all instances
        // all instances are toggled together, so we can check the state from the first
        if ( $( ":custom-colorize" ).colorize( "option", "disabled" ) ) {
            $( ":custom-colorize" ).colorize( "enable" );
        } else {
            $( ":custom-colorize" ).colorize( "disable" );
        }
    });

    // Click to set options after initialization
    $( "#green" ).on( "click", function() {
        $( ":custom-colorize" ).colorize( "option", {
            red: 64,
            green: 250,
            blue: 8
        });
    });*/
});
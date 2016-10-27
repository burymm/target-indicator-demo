/**
 * Created by GT72 on 26.10.2016.
 */

$(document).ready(function () {
    function indicatorButtonCallback () {
        var popup = $('#target-popup'),
            currentValue = parseInt($('#current-value').val()),
            maxValue = parseInt($('#max-value').val());

        try {
            $indicatorContainer.targetIndicator({
                maxValue: maxValue,
                currentValue: currentValue
            });

            popup.addClass('show');
        } catch (error) {
            alert(error);
        }
    }

    function indicatorButtonDivCallback () {
        var currentValue = parseInt($('#current-value').val()),
            maxValue = parseInt($('#max-value').val());

        try {
            $indicatorDivContainer.targetIndicator({
                maxValue: maxValue,
                currentValue: currentValue
            });
        } catch (error) {
            alert(error);
        }
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
        $indicatorDivButton = $('#show-indicator-div-widget'),
        $indicatorContainer = $('#indicator-container'),
        $indicatorDivContainer = $('#empty-div');

    $indicatorButton.on('click', indicatorButtonCallback);
    $indicatorDivButton.on('click', indicatorButtonDivCallback);
    $(document.body).on('click', globalClickCallback);
});
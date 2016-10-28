$.widget( "custom.targetIndicator", {
    // default options
    options: {
        maxValue: 100,
        currentValue: 0
    },

    _validation: function () {
        if (this.options.currentValue > this.options.maxValue || this.options.maxValue <= 0 ||
            this.options.currentValue < 0) {
            this._destroy();
            throw 'Wrong initial options';
        }
    },

    _create: function() {
       this._validation();

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

        this.progressLineWrapper = $('<div>', {
            class: 'indicator-section__progress-line-wrapper'
        });

        this.progressLine = $('<div>', {
            class: 'indicator-section__progress'
        });

        this.progressCurrent = $('<div>', {
            text: this._getCurrentText(),
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

        this.hintText = $('<div>', {
            text: this._getHintText(this._getRemain()),
            class: 'indicator-hint'
        });


        targetContainer.append(targetHeader);
        targetContainer.append(targetValue);

        progressWrapper.append(progressText);
        this.progressLineWrapper.append(this.progressLine);
        this.progressLineWrapper.append(this.progressCurrent);
        progressWrapper.append(this.progressLineWrapper);
        progressWrapper.append(targetContainer);

        section.append(progressWrapper);
        section.append(this.hintText);

        this.body.append(section);

        this.header.append(headerText);
        this.header.append(closeButton);

        this.element.append(this.header);
        this.element.append(this.body);
        this.progressLine.width(0);

        this.created = true;

        setTimeout((function() {
            this._refresh();
        }).bind(this), 0);
    },

    _getRemain: function () {
        return this.options.maxValue - this.options.currentValue;
    },

    _getCurrentText: function () {
        return '$' + this.options.currentValue;
    },

    _getHintText: function (value) {
        return 'You need $' + value + ' more to reach your target';
    },

    _refresh: function() {
        var width, step, pxInStep, currentWidth, offsetX;

        if (!this.created) {
            this._create();
        }

        width = this.progressLineWrapper.width();
        step = this.options.maxValue;
        pxInStep = width / step;
        currentWidth = this.progressCurrent.width();
        offsetX = (this.options.currentValue) * pxInStep;

        this.hintText.text(this._getHintText(this._getRemain()));
        this.progressCurrent.text(this._getCurrentText());

        this.progressLine.width(offsetX);

        this.progressCurrent.css('left', offsetX  - currentWidth / 2);
    },

    _destroy: function() {
        this.header && this.header.remove();
        this.body && this.body.remove();
        console.log('widget destroyed');
    },

    _setOptions: function() {
        this._superApply( arguments );
        this._validation();
        this._refresh();
    }
});
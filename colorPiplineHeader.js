colorChild = function(numberOfChild){
    const pipelinesParent = $('.pipeline_wrapper.pipeline_row');
    const pipelines = pipelinesParent.children();
    let childToColor;

    if (pipelines.eq(0).hasClass('h-hidden')) {
        childToColor = pipelines.eq(numberOfChild);
    } else {
        childToColor = pipelines.eq(numberOfChild - 1);
    }

    const head = childToColor.find('.pipeline_status__head_title');
    const headTitle = head.find('.block-selectable');
    const headSpan = childToColor.find('.pipeline_status__head_line');

    const color = headSpan.css('color');
    headTitle.css('color', color);
}

widgetNameIntr = function () {
    var widget = this;
    this.code = null;

    this.yourVar = {};
    this.yourFunc = function () { };

    this.bind_actions = function () {
    };

    this.render = function () {
        colorChild(3);
    };

    this.init = function () {
    };

    this.bootstrap = function (code) {
        widget.code = code;
        var status = 1;

        if (status) {
            widget.init();
            widget.render();
            widget.bind_actions();
            $(document).on('widgets:load', function () {
                widget.render();
            });
        }
    }
};
yadroWidget.widgets['widget-name'] = new widgetNameIntr();
yadroWidget.widgets['widget-name'].bootstrap('widget-name');

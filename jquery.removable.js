(function ($) {
    /**
    * Removable attachments — allows file upload fields to be cleared.
    */
    $.fn.removable = function () {
        var removeAndRecreate = function ($element) {
            $element.replaceWith($element.val('').clone(true));
        };

        var clicked = function () {
            var self = this;
            var $self = $(self);

            var $a = $('<a class="removeAttachment" href="#" title="Cancel, do not upload."><span></span></a>').insertBefore($self);
            $a.click(function () {
                $a.remove();
                removeAndRecreate($self);
            });
        };

        return this.on("change", "input[type='file']", clicked);
    };
})(jQuery);
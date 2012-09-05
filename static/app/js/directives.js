'use strict';

/* Directives */

icnfnt.directive('tooltip', function () {
    return {
        restrict:'A',
        link: function postLink(scope, element, attrs)
        {
            var el = $(element);
            //var title = el.attr('class');
            //el.attr('title',title);
            el.attr('title',".icon-" + scope.$eval(attrs.tooltip));
            el.tooltip({title: "ohai"});
        }
    }
});
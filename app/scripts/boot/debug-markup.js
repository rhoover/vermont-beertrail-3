(function () {
    'use strict';

    angular
        .module('vtbt3.debugMarkUp', [])
        .config(noDebugMarkUp);

        function noDebugMarkUp($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }
})();
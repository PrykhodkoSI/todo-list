const gulp = require('gulp');
const fs = require('fs');

function defaultTask(cb) {
    // place code for your default task here
    cb();

}

exports.default = gulp.series(defaultTask, gulp.parallel(defaultTask));
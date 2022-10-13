const tests = {...require("../../test/index.test.js"), ...require("../../test/newlines.test.js")};

const test = require("tape");

Object.keys(tests).forEach(k => {
    test(k, t => {
        tests[k]();
        t.end();
    });
});

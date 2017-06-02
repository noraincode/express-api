/**
 * @author [norain]
 * @email [norain4u@yeah.net]
 * @create date 2017-04-19 01:50:12
 * @modify date 2017-04-19 01:50:12
 * @desc [description]
*/

'use strict';

require('./global_register');
const web = require('./servers/web');

Promise.resolve([web]).each(function (app){
    app.start();
});
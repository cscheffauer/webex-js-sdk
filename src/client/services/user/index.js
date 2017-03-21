/**!
 *
 * Copyright (c) 2015-2017 Cisco Systems, Inc. See LICENSE file.
 */

'use strict';

require('../search');

var UserService = require('./user');
var Spark = require('../../../spark-core');
Spark.registerService('user', UserService);
module.exports = UserService;

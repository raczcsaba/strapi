'use strict';

/**
 * munkak service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::munkak.munkak');

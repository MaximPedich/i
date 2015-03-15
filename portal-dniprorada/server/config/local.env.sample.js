'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'portaldniprorada-secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: '',

  //activiti settings
 ACTIVITI: {
    HOST: 'localhost',
    PORT: 8080,
    PATH: 'activiti-rest/service/repository',
    AUTHORIZATION: 'Basic a2VybWl0Omtlcm1pdA=='
  }
};
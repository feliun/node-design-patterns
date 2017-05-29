const AgenciaEfe = require('./agency');
const SportsNewspaper = require('./newspaper');

const { EventEmitter } = require('events');
const emitter = new EventEmitter();

const agency = AgenciaEfe({ emitter });

const marca = SportsNewspaper({ emitter, name: 'marca' });
const sport = SportsNewspaper({ emitter, name: 'sport' });
const anonymous = SportsNewspaper({ emitter, name: 'A new newspaper' });

agency.startPublishing();

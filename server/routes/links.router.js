const links = require('../links.json');
/**
 * @param {import("fastify").FastifyInstance} fastify
 */
module.exports = function(fastify, opts, done) {
  // display availables routes
  fastify.get('/', (req, reply) => {
    reply.send({
      routes: {
        '/api/location':
          'Obtener información de localización desde la petición',
        '/api/links/cv': 'Currículum personal',
        '/api/links/kirshas': 'video demo del proyecto Kirshas',
      },
    });
  });

  // get cv
  fastify.get('/cv', (req, reply) => {
    reply.redirect(links.cv);
  });

  // get kirshas demo
  fastify.get('/kirshas', (req, reply) => {
    reply.redirect(links.kirshasDemo);
  });

  done();
};

const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((err, ch) => {
    const queue = 'hello';
    var msg = 'Hello World!';

    ch.assertQueue(queue, {durable: false});
    ch.sendToQueue(queue, new Buffer(msg));
    console.log(`[x] Sent ${msg}`);
  });
  setTimeout(() => {
    conn.close();
    process.exit(0);
  }, 500);
});

import socketIO from 'socket.io';

export default async server => {
  const io = await socketIO(server);

  try {
    // Make connection
    await io.on('connection', socket => {
      if (socket) console.log(`connection established...`);
    });
  } catch (error) {
    throw error;
  }
};

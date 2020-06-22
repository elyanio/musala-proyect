import httpServer from './server';

httpServer.listen({ port: process.env.PORT || 4000 }, (): void =>
  // eslint-disable-next-line no-console
  console.log(
    `🚀      GraphQL is now running on https://musala-proyect.herokuapp.com/:${
      process.env.PORT || 4000
    }`
  )
);

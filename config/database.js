// const DBConfig = {
//   connection: {
//     client: 'sqlite',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'strapi'),
//       user: env('DATABASE_USERNAME', 'strapi'),
//       password: env('DATABASE_PASSWORD', 'pwd'),
//     },
//     useNullAsDefault: true,
//   },
// }

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: ".tmp/data.db",
    },
    useNullAsDefault: true,
    debug: true,
  },
});

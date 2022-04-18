module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a812800b9beae6bb55b214b253841d75'),
  },
});

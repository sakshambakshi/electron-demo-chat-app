const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { OAuthStrategy ,  expressOauth } = require('@feathersjs/authentication-oauth');

class GithubStrategy extends OAuthStrategy{
  async getEntityData(profile , _existingEntity , _params){
    console.log(profile , _existingEntity , _params);
    return null;
  }
}


module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());
  authentication.register('github', new GithubStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};

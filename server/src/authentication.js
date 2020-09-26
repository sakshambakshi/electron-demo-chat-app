const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { OAuthStrategy, expressOauth } = require('@feathersjs/authentication-oauth');

class GithubStrategy extends OAuthStrategy {

  async getEntityQuery(profile) {
    console.log(profile)
    return { github_id : profile.id }
  }

  async getEntityData(profile, _existingEntity, _params) {
    const { login: github_username, avatar_url: usr_img, id: github_id, email, name } = profile
    console.log({})

    console.log({
      github_username,
      usr_img,
      github_id,
      email,
      name
    })
    console.log({})
    return {
      github_username,
      usr_img,
      github_id,
      email,
      name
    };
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

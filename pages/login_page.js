const { I } = inject();

module.exports = {

  fields: {
    email: '~email',
    senha: '~senha',
  },

  buttoons: {
    enter: '~entrar'
  },

  messages: {
    loginError: '~lognFail'
  },

  doLogin(email, senha) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.senha, senha);
    I.tap(this.buttoons.enter);
  },

  checkLoginError() {
    I.waitForElement(this.messages.loginError, 5);
    I.seeElement(this.messages.loginError);
  }
}

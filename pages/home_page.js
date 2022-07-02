const { I } = inject();

module.exports = {

  buttoons: {
    save: '~salvar',
  },

  fields: {
    code: '//android.widget.EditText[@content-desc="codigo"]',
    name: '~aluno',
    search: '~search'
  },

  ////android.view.ViewGroup[@content-desc="12323"]

  fillCode(code) {
    I.fillField(this.fields.code, code);
  },

  fillName(name) {
    I.fillField(this.fields.name, name);
  },

  checkStudent(check) {
    I.seeElement('//android.view.ViewGroup[@content-desc="'+ check +'"]');
  },

  fillSearch(search) {
    I.fillField(this.fields.search, search);
  },

  tapSalvar() {
    I.tap(this.buttoons.save);
  },

  checkLoginSucess() {
    I.waitForElement(this.buttoons.save, 5);
    I.seeElement(this.buttoons.save);
  }
}

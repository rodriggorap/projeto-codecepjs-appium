Feature('Students');

const home_page = require("../pages/home_page");
const login_page = require("../pages/login_page");
const code = require("../Utils/code")
const name = require("../Utils/name")

const {I} = inject();

Scenario('test something', () => {

    const mycode = code.getCode()
    const myname = name.GetName()
    const email = 'teste@teste.com';
    const password = '123456'

    I.waitForElement('~email', 20);
    login_page.doLogin(email, password);
    home_page.fillCode(mycode);
    home_page.fillName(myname);
    home_page.tapSalvar();
    home_page.fillSearch(myname);
    home_page.checkStudent(mycode);
});

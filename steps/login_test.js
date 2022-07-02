Feature('login');

const home_page = require("../pages/home_page");
const login_page = require("../pages/login_page");


const {I} = inject();

BeforeSuite(() => {
    console.log('Before Suite')
})

Before(() => {
    console.log('Before Cenario')
})

AfterSuite(() => {
    console.log('After Suite')
})

After(() => {
    console.log('After Cenario')
})

Scenario('Login with sucess', () => {

    I.runOnIOS(() => {
        console.log('Estou no Android');
    })

    I.waitForElement('~email', 20);
    login_page.doLogin('teste@teste.com', '123456');

    home_page.checkLoginSucess();

});



Scenario('Login with error', () => {

    I.waitForElement('~email', 20);
    login_page.doLogin('teste@tete.com', '123456')

    login_page.checkLoginError();

});

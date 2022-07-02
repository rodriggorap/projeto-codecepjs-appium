const { I } = inject();
// Add in your custom step files



Given('que preencho o email', () => {
	I.waitForElement('~email', 20);
	I.fillField('~email', 'teste@teste.com');
});

Given('preencho a senha', () => {
	I.fillField('~senha', '123456');
});

When('clico no botão Entra', () => {
	I.tap('~entrar');
});

Then('eu vejo o botão Salvar', () => {
	I.waitForElement('~salvar', 5);
    I.seeElement('~salvar');
});

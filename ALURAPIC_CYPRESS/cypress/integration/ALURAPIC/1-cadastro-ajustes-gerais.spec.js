describe('ALURAPIC - Ciclo: Cadastro – 1. Ajustes Gerais', () => {
   
    beforeEach(() => {
        
        //ACESSO A PÁGINA DE CADASTRO DE USUÁRIOS DO ALURAPIC
        cy.visit('https://alura-fotos.herokuapp.com/#/home');

    })

    it('Caso 1: Verificação de campos obrigatórios', () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
            cy.contains('button', 'Register').click();
            cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
            cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
            cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('Caso 2: Teste de Limite de Caracteres no campo senha 1 - Menos de 8 Caracteres', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('1234567')
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

    })

    it('Caso 3: Teste de Limite de Caracteres no campo senha 2 - Mais de 18 Caracteres', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('111111111111111111')
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');

    })

    it('Caso 4: Teste de Limite de Caracteres no campo senha 3 - Exatos 18 Caracteres', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('111111111111111111')
        cy.contains('button', 'Register').click();

    })

    it('Caso 5: Teste de Limite de Caracteres no campo senha 4  - Exatos 8 Caracteres', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('12345678')
        cy.contains('button', 'Register').click();
        
    })

    it('Caso 7: Verificação de usuário disponível', () => {

        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('teste141554')
        cy.contains('button', 'Register').click();
        cy.contains('button', 'Register').click();
        cy.contains('small', 'User available').should('be.visible');

    })

    it('Cadastro de usuário - Complemento para o teste a seguir', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('teste@teste')
        cy.get('input[formcontrolname="fullName"]').type('Tiago Shianti')
        cy.get('input[formcontrolname="userName"]').type('teste1')
        cy.get('input[formcontrolname="password"]').type('12345678')
        cy.contains('button', 'Register').click();

    })


    it('Caso 8: Verificação de usuário indisponível', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('flavio')
        cy.contains('button', 'Register').click();
        cy.contains('small', 'Username already taken').should('be.visible');


    })

    it('Caso 9: Verificação de e-mail ', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Teste@')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

    })

})
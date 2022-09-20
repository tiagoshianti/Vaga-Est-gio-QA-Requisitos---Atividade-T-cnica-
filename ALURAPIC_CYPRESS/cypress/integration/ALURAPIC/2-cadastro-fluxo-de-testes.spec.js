describe('ALURAPIC - Ciclo: Cadastro – 2. Fluxo de Teste', () => {
   
    beforeEach(() => {
        
        //ACESSO A PÁGINA DE CADASTRO DE USUÁRIOS DO ALURAPIC
        cy.visit('https://alura-fotos.herokuapp.com/#/home');

    })

    it('Caso 1: Login incorreto – Erro de Senha', () => {

        cy.get('input[formcontrolname="userName"]').type('teste01')
        cy.get('input[formcontrolname="password"]').type('XXXXXXXX')
        cy.contains('button', 'login').click();

    })

    it('Caso 2: Login incorreto – Bloqueio de 15 minutos', () => {

        cy.get('input[formcontrolname="userName"]').type('teste01')
        cy.get('input[formcontrolname="password"]').type('XXXXXXXX')
        cy.contains('button', 'login').click();

        cy.get('input[formcontrolname="userName"]').type('teste01')
        cy.get('input[formcontrolname="password"]').type('XXXXXXXX')
        cy.contains('button', 'login').click();

        cy.get('input[formcontrolname="userName"]').type('teste01')
        cy.get('input[formcontrolname="password"]').type('XXXXXXXX')
        cy.contains('button', 'login').click();

        cy.get('input[formcontrolname="userName"]').type('teste01')
        cy.get('input[formcontrolname="password"]').type('12345678')
        cy.contains('button', 'login').click();

    })

    it('Caso 3: Verificação de username ', () => {

        cy.get('input[formcontrolname="password"]').type('XXXXXXXX')
        cy.contains('button', 'login').click();

    })

    it('Caso 4: Verificação de senha ', () => {

        cy.get('input[formcontrolname="userName"]').type('teste01')
        cy.contains('button', 'login').click().should('be.visible');
        cy.contains('button', 'login').click();

    })

    it('Caso 5: Redirecionamento de Página “Register Now”', () => {

        cy.contains('a', 'Register now').click();
    })

    })

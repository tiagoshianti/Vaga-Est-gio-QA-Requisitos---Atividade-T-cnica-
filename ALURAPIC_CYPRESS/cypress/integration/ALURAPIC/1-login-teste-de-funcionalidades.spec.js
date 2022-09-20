describe('ALURAPIC - Ciclo: Cadastro – 2. Fluxo de Teste', () => {
   
    beforeEach(() => {
        
        //ACESSO A PÁGINA DE CADASTRO DE USUÁRIOS DO ALURAPIC
        cy.visit('https://alura-fotos.herokuapp.com/#/home');

    })

    it('Cadastro de usuário - Complemento para o teste a seguir', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('teste@teste')
        cy.get('input[formcontrolname="fullName"]').type('Tiago Shianti')
        cy.get('input[formcontrolname="userName"]').type('teste01')
        cy.get('input[formcontrolname="password"]').type('12345678')
        cy.contains('button', 'Register').click();

    })

    })



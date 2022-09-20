describe('ALURAPIC - Ciclo: Cadastro – 2. Fluxo de Teste', () => {
   
    beforeEach(() => {
        
        //ACESSO A PÁGINA DE CADASTRO DE USUÁRIOS DO ALURAPIC
        cy.visit('https://alura-fotos.herokuapp.com/#/home');

    })

    it('Caso 1: Login incorreto – Erro de Senha', () => {

        cy.get('input[formcontrolname="userName"]').type('teste01')
        cy.get('input[formcontrolname="password"]').type('12345678')
        cy.contains('button', 'login').click();

    })

})

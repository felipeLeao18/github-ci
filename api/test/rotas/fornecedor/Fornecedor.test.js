const Fornecedor = require('../../../../api/rotas/fornecedores/Fornecedor')
describe('Fornecedor', () => {
  test('validar() retorn true', () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    const isValidate = fornecedor.validar()

    expect(isValidate).toBe(true)
    expect(fornecedor.empresa).toBe('Gatito')
  })
})

const chai = require('chai')

const {
	crearGato,
	agregarPropiedad,
	invocarMetodo,
	multiplicarNumeroDesconocidoPorCinco,
	eliminarPropiedad,
	nuevoUsuario,
	tieneEmail,
	tienePropiedad,
	verificarPassword,
	actualizarPassword,
	agregarAmigo,
	pasarUsuarioAPremium,
	sumarLikesDeUsuario,
	agregarMetodoCalculoDescuento,
} = require('../tarea.js')

const { expect } = chai

describe('Funciones', () => {
	describe('Función crearGato', () => {
		it('Deberia devolver un objeto', () => {
			expect(crearGato('Michi', 2)).to.be.a('object')
		})
		it('Deberia tener las propiedades nombre, edad y meow', () => {
			expect(crearGato('Michi', 2)).to.have.keys('nombre', 'edad', 'meow')
		})
		it('Deberia la propiedad nombre tener el mismo valor pasado por argumento', () => {
			expect(crearGato('Michi', 2)).to.have.property('nombre', 'Michi')
		})
		it('Deberia la propiedad edad tener el mismo valor pasado por argumento', () => {
			expect(crearGato('Michi', 2)).to.have.property('edad', 2)
		})
		it('Deberia el método meow devolver un string', () => {
			expect(crearGato('Michi', 2).meow()).to.be.a('string')
		})
	})

	describe('Función agregarPropiedad', () => {
		it('Deberia devolver un objeto', () => {
			expect(agregarPropiedad({}, 'newProperty')).to.be.a('object')
		})
		it('Deberia tener las propiedades del objeto pasado por argumento', () => {
			expect(
				agregarPropiedad({ oldProperty: 'oldProperty' }, 'newProperty')
			).to.have.property('oldProperty')
		})
		it('Deberia tener la propiedad agregada pasado por argumento', () => {
			expect(agregarPropiedad({}, 'newProperty')).to.have.property(
				'property'
			)
		})
	})

	describe('Función invocarMetodo', () => {
		it('Deberia devolver un string', () => {
			expect(
				invocarMetodo({ helloWorld: () => 'Hello World' }, 'helloWorld')
			).to.be.a('string')
		})
		it('Deberia devolver el mismo valor que el objeto con su método que le pasamos por argumento', () => {
			expect(
				invocarMetodo({ helloWorld: () => 'Hello World' }, 'helloWorld')
			).to.equal('Hello World')
		})
	})

	describe('Función multiplicarNumeroDesconocidoPorCinco', () => {
		it('Deberia devolver un número', () => {
			expect(
				multiplicarNumeroDesconocidoPorCinco({ numeroMisterioso: 5 })
			).to.be.a('number')
		})
		it('Deberia múltiplicar el número pasado por argumento como un objeto con la propiedad numeroMisterioso por 5', () => {
			expect(
				multiplicarNumeroDesconocidoPorCinco({ numeroMisterioso: 1 })
			).to.equal(5)
			expect(
				multiplicarNumeroDesconocidoPorCinco({ numeroMisterioso: 5 })
			).to.equal(25)
		})
	})

	describe('Función eliminarPropiedad', () => {
		it('Deberia devolver un objeto', () => {
			expect(
				eliminarPropiedad({ propiedad: 'valor' }, 'propiedad')
			).to.be.a('object')
		})
		it('Deberia eliminar del objeto pasado como argumento la propiedad pasada como argumento', () => {
			expect(
				eliminarPropiedad({ propiedad: 'valor' }, 'propiedad')
			).not.to.have.property('propiedad')
			expect(
				eliminarPropiedad({ propiedad: 'valor' }, 'propiedad')
			).to.deep.equal({})
		})
	})

	describe('Función nuevoUsuario', () => {
		it('Deberia devolver un objeto', () => {
			expect(nuevoUsuario('Mathias', 'mail@example.com', '1234')).to.be.a(
				'object'
			)
		})
		it('Deberia tener las propiedades nombre, email y password', () => {
			expect(
				nuevoUsuario('Mathias', 'mail@example.com', '1234')
			).to.have.keys('nombre', 'email', 'password')
		})
		it('Deberia la propiedad nombre tener el mismo valor pasado por argumento', () => {
			expect(
				nuevoUsuario('Mathias', 'mail@example.com', '1234')
			).to.have.property('nombre', 'Mathias')
		})
		it('Deberia la propiedad email tener el mismo valor pasado por argumento', () => {
			expect(
				nuevoUsuario('Mathias', 'mail@example.com', '1234')
			).to.have.property('email', 'mail@example.com')
		})
		it('Deberia la propiedad password tener el mismo valor pasado por argumento', () => {
			expect(
				nuevoUsuario('Mathias', 'mail@example.com', '1234')
			).to.have.property('password', '1234')
		})
	})

	describe('Función tieneEmail', () => {
		it('Deberia devolver un boolean', () => {
			expect(tieneEmail({ email: 'mail@example.com' })).to.be.a('boolean')
		})
		it('Deberia devolver true si tiene la propiedad email con un valor', () => {
			expect(tieneEmail({ email: 'mail@example.com' })).to.equal(true)
		})
		it('Deberia devolver false si no tiene la propiedad email con un valor', () => {
			expect(tieneEmail({})).to.equal(false)
		})
	})

	describe('Función tienePropiedad', () => {
		it('Deberia devolver un boolean', () => {
			expect(tienePropiedad({ propiedad: 'valor' }, 'propiedad')).to.be.a(
				'boolean'
			)
		})
		it('Deberia devolver true si tiene la propiedad del objeto', () => {
			expect(
				tienePropiedad({ propiedad: 'valor' }, 'propiedad')
			).to.equal(true)
		})
		it('Deberia devolver false si no tiene la propiedad del objeto', () => {
			expect(tienePropiedad({}, 'propiedad')).to.equal(false)
		})
	})

	describe('Función verificarPassword', () => {
		it('Deberia devolver un boolean', () => {
			expect(verificarPassword({ password: '1234' }, '1234')).to.be.a(
				'boolean'
			)
		})
		it('Deberia devolver true si las contraseñas coinciden', () => {
			expect(verificarPassword({ password: '1234' }, '1234')).to.equal(
				true
			)
		})
		it('Deberia devolver false si las contraseñas no coinciden', () => {
			expect(verificarPassword({ password: '5678' }, '1234')).to.equal(
				false
			)
		})
	})

	describe('Función actualizarPassword', () => {
		it('Deberia devolver un objeto', () => {
			expect(actualizarPassword({ password: '1234' }, '5678')).to.be.a(
				'object'
			)
		})
		it('Deberia devolver un objeto con la propiedad password', () => {
			expect(
				actualizarPassword({ password: '1234' }, '5678')
			).to.have.property('password')
		})
		it('Deberia devolver la contraseña actualizada', () => {
			expect(
				actualizarPassword({ password: '1234' }, '5678')
			).to.deep.equal({ password: '5678' })
		})
	})

	describe('Función agregarAmigo', () => {
		it('Deberia devolver un objeto', () => {
			expect(agregarAmigo({ amigos: [] }, 'roberto')).to.be.a('object')
		})
		it('Deberia devolver un objeto con la propiedad amigos', () => {
			expect(agregarAmigo({ amigos: [] }, 'roberto')).to.have.property(
				'amigos'
			)
		})
		it('Deberia devolver un objeto con un amigo agregado', () => {
			expect(agregarAmigo({ amigos: [] }, 'roberto')).to.deep.equal({
				amigos: ['roberto'],
			})
			expect(agregarAmigo({ amigos: [] }, 'pepito')).to.deep.equal({
				amigos: ['pepito'],
			})
		})
	})

	describe('Función pasarUsuarioAPremium', () => {
		it('Deberia devolver un array', () => {
			expect(
				pasarUsuarioAPremium([
					{ esPremium: false },
					{ esPremium: false },
				])
			).to.be.a('array')
		})
		it('Deberia devolver un array con la cantidad de usuarios pasado como argumento', () => {
			expect(
				pasarUsuarioAPremium([
					{ esPremium: false },
					{ esPremium: false },
				])
			).to.have.lengthOf(2)
		})
		it('Deberia devolver a los usuarios pasados como argumento con el valor de la propiedad esPremium en true', () => {
			expect(
				pasarUsuarioAPremium([
					{ esPremium: false },
					{ esPremium: false },
				])
			).to.deep.equal([{ esPremium: true }, { esPremium: true }])
		})
	})

	describe('Función sumarLikesDeUsuario', () => {
		it('Deberia devolver un número', () => {
			expect(
				sumarLikesDeUsuario({ posts: [{ likes: 5 }, { likes: 2 }] })
			).to.be.a('number')
		})
		it('Deberia devolver la suma de los likes pasado como un objeto con la propiedad posts que es un arreglo que tiene objetos con la propiedad likes y su valor es un número de la cantidad de likes', () => {
			expect(
				sumarLikesDeUsuario({ posts: [{ likes: 5 }, { likes: 2 }] })
			).to.equal(7)
			expect(
				sumarLikesDeUsuario({ posts: [{ likes: 10 }, { likes: 25 }] })
			).to.equal(35)
		})
	})

	describe('Función agregarMetodoCalculoDescuento', () => {
		it('Deberia devolver un objeto', () => {
			expect(
				agregarMetodoCalculoDescuento({
					precio: 500,
					porcentajeDeDescuento: 0.5,
				})
			).to.be.a('object')
		})
		it('Deberia devolver el método calcularPrecioDescuento', () => {
			expect(
				agregarMetodoCalculoDescuento({
					precio: 500,
					porcentajeDeDescuento: 0.5,
				})
			).have.property('calcularPrecioDescuento')
		})
		it('Deberia devolver el método calcularPrecioDescuento un número', () => {
			expect(
				agregarMetodoCalculoDescuento({
					precio: 500,
					porcentajeDeDescuento: 0.5,
				}).calcularPrecioDescuento()
			).to.be.a('number')
		})
		it('Deberia devolver el método calcularPrecioDescuento con el valor calculado', () => {
			expect(
				agregarMetodoCalculoDescuento({
					precio: 500,
					porcentajeDeDescuento: 0.5,
				}).calcularPrecioDescuento()
			).to.equal(250)
		})
	})
})

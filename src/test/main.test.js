process.env.NODE_ENV = 'test'

const UserModel = require('../models/User.js')

const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../index.js')

const should = chai.should()

chai.use(chaiHttp)

describe('Users', () => {
	let userId = ''
	// Ejecuta una funcion antes de ejecutar los test
	beforeEach(done => {
		// Elimina todos los usuarios de la base de datos
		UserModel.deleteMany({}, err => {
			done()
		})
	})

	// Test de peticion GET
	describe('Peticion GET', () => {
		// Test especifico de un GET de todos los usuarios
		it('Deberia traer todos los usuarios', done => {
			// Hace una petición GET con chai para obtener todos los usuarios
			chai.request(app)
				// Usamos el método get
				.get('/api/v1/users')
				// Terminamos la petición para hacer los test
				.end((err, res) => {
					// Hacemos el test de status para ver si la petición se realizo correctamente
					res.should.have.status(200)

					// Verificamos con un test que lo que nos devuelve es un objeto
					res.body.should.be.a('object')

					// Verificamos con un test que nos devuelve una propiedad data
					res.body.should.have.property('data')

					// Verificamos con un test que nos devuelve un arreglo en la propiedad data
					res.body.data.should.be.a('array')

					// Verificamos con un test que nos devuelve la longitud del arreglo correctamente
					res.body.data.length.should.be.eql(0)

					// Ejecutamos done para decir que ya terminamos la petición con sus test correspondientes
					done()
				})
		})
	})

	// Test de peticion POST
	describe('Peticion POST', () => {
		// Test especifico de un POST de usuarios
		it('Deberia publicar un usuario', done => {
			// Creamos un usuario
			let user = {
				name: 'Example Name',
				email: 'example@mail.com',
				age: 20,
				country: 'Argentina',
			}
			// Hace una petición POST con chai para agregar un usuario
			chai.request(app)
				// Usamos el método post
				.post('/api/v1/users')
				// Enviamos el usuario creado
				.send(user)
				// Terminamos la petición para hacer los test
				.end((err, res) => {
					// Hacemos el test de status para ver si la petición se realizo correctamente
					res.should.have.status(201)

					// Verificamos con un test que lo que nos devuelve es un objeto
					res.body.should.be.a('object')

					// Verificamos con un test que nos devuelve una propiedad msg con su valor correspondiente
					res.body.should.have
						.property('msg')
						.eql('User successfully created')

					// Verificamos con un test que nos devuelve una propiedad data
					res.body.should.have.property('data')

					// Verificamos con un test que nos devuelve la propiedad name de la propiedad data
					res.body.data.should.have.property('name')

					// Verificamos con un test que nos devuelve el mismo nombre del usuario que creamos correctamente
					res.body.data.name.should.be.eql(user.name)

					// Verificamos con un test que nos devuelve la propiedad email de la propiedad data
					res.body.data.should.have.property('email')

					// Verificamos con un test que nos devuelve el mismo email del usuario que creamos correctamente
					res.body.data.email.should.be.eql(user.email)

					// Verificamos con un test que nos devuelve la propiedad age de la propiedad data
					res.body.data.should.have.property('age')

					// Verificamos con un test que nos devuelve la misma edad del usuario que creamos correctamente
					res.body.data.age.should.be.eql(user.age)

					// Verificamos con un test que nos devuelve la propiedad country de la propiedad data
					res.body.data.should.have.property('country')

					// Verificamos con un test que nos devuelve el mismao pais del usuario que creamos correctamente
					res.body.data.country.should.be.eql(user.country)

					// Usamos una variable para tener el id del usuario para luego actualizar y por último eliminarlo
					userId = res.body.data._id

					// Ejecutamos done para decir que ya terminamos la petición con sus test correspondientes
					done()
				})
		})
	})

	// Test de peticion PUT
	describe('Peticion PUT', () => {
		// Test especifico de un PUT de usuarios
		it('Deberia modificar un usuario', done => {
			// Creamos un usuario
			let change = {
				name: 'Change Name',
				email: 'change@mail.com',
				age: 22,
				country: 'Argentina',
			}
			// Hace una petición PUT con chai para modificar un usuario
			chai.request(app)
				// Usamos el método PUT
				.put(`/api/v1/users/${userId}`)
				// Enviamos los cambios
				.send(change)
				// Terminamos la petición para hacer los test
				.end((err, res) => {
					// Hacemos el test de status para ver si la petición se realizo correctamente
					res.should.have.status(200)

					// Verificamos con un test que lo que nos devuelve es un objeto
					res.body.should.be.a('object')

					// Verificamos con un test que nos devuelve una propiedad msg con su valor correspondiente
					res.body.should.have
						.property('msg')
						.eql('User successfully updated')

					// Verificamos con un test que nos devuelve una propiedad data
					res.body.should.have.property('data')

					// Verificamos con un test que nos devuelve la propiedad name de la propiedad data
					res.body.data.should.have.property('name')

					// Verificamos con un test que nos devuelve el mismo nombre del usuario que modificamos correctamente
					res.body.data.name.should.be.eql(change.name)

					// Verificamos con un test que nos devuelve la propiedad email de la propiedad data
					res.body.data.should.have.property('email')

					// Verificamos con un test que nos devuelve el mismo email del usuario que modificamos correctamente
					res.body.data.email.should.be.eql(change.email)

					// Verificamos con un test que nos devuelve la propiedad age de la propiedad data
					res.body.data.should.have.property('age')

					// Verificamos con un test que nos devuelve la misma edad del usuario que modificamos correctamente
					res.body.data.age.should.be.eql(change.age)

					// Verificamos con un test que nos devuelve la propiedad country de la propiedad data
					res.body.data.should.have.property('country')

					// Verificamos con un test que nos devuelve el mismao pais del usuario que modificamos correctamente
					res.body.data.country.should.be.eql(change.country)

					// Ejecutamos done para decir que ya terminamos la petición con sus test correspondientes
					done()
				})
		})
	})
	// Test de peticion DELETE
	describe('Peticion DELETE', () => {
		// Test especifico de un DELETE de usuarios
		it('Deberia eliminar un usuario', done => {
			// Hace una petición delete con chai para eliminar un usuario
			chai.request(app)
				// Usamos el método delete
				.delete(`/api/v1/users/${userId}`)
				// Terminamos la petición para hacer los test
				.end((err, res) => {
					// Hacemos el test de status para ver si la petición se realizo correctamente
					res.should.have.status(200)

					// Verificamos con un test que lo que nos devuelve es un objeto
					res.body.should.be.a('object')

					// Verificamos con un test que nos devuelve una propiedad msg con su valor correspondiente
					res.body.should.have
						.property('msg')
						.eql('User successfully deleted')

					// Ejecutamos done para decir que ya terminamos la petición con sus test correspondientes
					done()
				})
		})
	})
})

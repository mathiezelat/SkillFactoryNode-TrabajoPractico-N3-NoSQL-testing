const app = require('./index.js')

// Variables
const port = process.env.PORT || 3000

// Listen
app.listen(port, () => {
	console.log(`🚀 Servidor en el puerto ${port}`)
})

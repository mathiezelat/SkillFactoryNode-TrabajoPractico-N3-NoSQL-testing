const userService = require('../services/userService.js')

const getAllUsers = async (req, res) => {
	const allUsers = await userService.getAllUsers()
	res.status(200).json({ status: 'ok', data: allUsers })
}

const getOneUser = async (req, res) => {
	const { userId } = req.params

	const user = await userService.getOneUser(userId)

	if (!user) {
		return res.status(404).json({
			status: 'error',
			err: `User with id ${userId} not found`,
		})
	}

	res.status(200).json({
		status: 'ok',
		userId: userId,
		data: user,
	})
}

const createNewUser = async (req, res) => {
	const { name, age, email, country } = req.body

	if (!name || !email || !age || !country) {
		return res.status(400).json({
			status: 'error',
			err: 'You must fill all the fields',
			reason: 'Fields: name, email, age, or country are empty',
		})
	}

	const newUser = {
		name,
		email,
		age,
		country,
	}

	try {
		const createdUser = await userService.createNewUser(newUser)

		res.status(201).json({
			status: 'ok',
			msg: 'User successfully created',
			data: createdUser,
		})
	} catch (error) {
		res.status(400).json({
			status: 'error',
			msg: 'User already exists',
		})
	}
}

const updateUser = async (req, res) => {
	const { userId } = req.params
	const { name, age, email, country } = req.body

	const updateUser = {
		name,
		age,
		email,
		country,
	}

	try {
		const updatedUser = await userService.updateUser(userId, updateUser)

		res.status(200).json({
			status: 'ok',
			msg: 'User successfully updated',
			data: updatedUser,
		})
	} catch (error) {
		res.status(404).json({
			status: 'error',
			msg: 'User not found',
		})
	}
}

const deleteUser = async (req, res) => {
	const { userId } = req.params

	try {
		const deletedUser = await userService.deleteUser(userId)

		res.status(200).json({
			status: 'ok',
			msg: 'User successfully deleted',
			data: deletedUser,
		})
	} catch (error) {
		res.status(404).json({
			status: 'error',
			msg: 'User not found',
		})
	}
}

module.exports = {
	getAllUsers,
	getOneUser,
	createNewUser,
	updateUser,
	deleteUser,
}

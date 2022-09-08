const categoryService = require('../services/categoryService.js')

const getAllCategories = async (req, res) => {
	const allCategories = await categoryService.getAllCategories()

	res.status(200).json({ status: 'ok', data: allCategories })
}

const getOneCategory = async (req, res) => {
	const { categoryId } = req.params

	const category = await categoryService.getOneCategory(categoryId)

	if (!category) {
		return res.status(404).json({
			status: 'error',
			err: `Category with id ${categoryId} not found`,
		})
	}

	res.status(200).json({ status: 'ok', data: category })
}

const createNewCategory = async (req, res) => {
	const { name, posts } = req.body

	if (!name) {
		return res.status(400).json({
			status: 'error',
			err: 'You must fill all the fields',
			reason: 'Fields: name are empty',
		})
	}

	const newCategory = {
		name,
		posts,
	}

	const createdCategory = await categoryService.createNewCategory(newCategory)

	res.status(201).json({
		status: 'ok',
		msg: 'Category successfully created',
		data: createdCategory,
	})
}

const updateCategory = async (req, res) => {
	const { categoryId } = req.params
	const { name, posts } = req.body

	const updateCategory = {
		name,
		posts,
	}

	try {
		const updatedCategory = await categoryService.updateCategory(
			categoryId,
			updateCategory
		)

		res.status(200).json({
			status: 'ok',
			msg: 'Category successfully updated',
			data: updatedCategory,
		})
	} catch (error) {
		res.status(404).json({
			status: 'error',
			msg: 'Category not found',
		})
	}
}

const deleteCategory = async (req, res) => {
	const { categoryId } = req.params

	try {
		const deletedCategory = await categoryService.deleteCategory(categoryId)

		res.status(200).json({
			status: 'ok',
			msg: 'Category successfully deleted',
			data: deletedCategory,
		})
	} catch (error) {
		res.status(404).json({
			status: 'error',
			msg: 'Category not found',
		})
	}
}

module.exports = {
	getAllCategories,
	getOneCategory,
	createNewCategory,
	updateCategory,
	deleteCategory,
}

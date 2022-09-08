const postService = require('../services/postService.js')

const getAllPosts = async (req, res) => {
	const allPosts = await postService.getAllPosts()

	res.status(200).json({ status: 'ok', data: allPosts })
}

const getOnePost = async (req, res) => {
	const { postId } = req.params

	const post = await postService.getOnePost(postId)

	if (!post) {
		return res.status(404).json({
			status: 'error',
			err: `Post with id ${postId} not found`,
		})
	}

	res.status(200).json({ status: 'ok', data: post })
}

const createNewPost = async (req, res) => {
	const { title, content, authorId, categories } = req.body

	if (!title || !content || !authorId) {
		return res.status(400).json({
			status: 'error',
			err: 'You must fill all the fields',
			reason: 'Fields: title, context, or authorId are empty',
		})
	}

	const newPost = {
		title,
		content,
		authorId,
		categories,
	}

	try {
		const createdPost = await postService.createNewPost(newPost)

		res.status(201).json({
			status: 'ok',
			msg: 'Post successfully created',
			data: createdPost,
		})
	} catch (error) {
		console.log(error)
		res.status(404).json({
			status: 'error',
			msg: 'User not found',
		})
	}
}

const updatePost = async (req, res) => {
	const { postId } = req.params
	const { title, content, authorId, categories } = req.body

	const updatePost = {
		title,
		content,
		authorId,
		categories,
	}

	try {
		const updatedPost = await postService.updatePost(postId, updatePost)

		res.status(200).json({
			status: 'ok',
			msg: 'Post successfully updated',
			data: updatedPost,
		})
	} catch (error) {
		res.status(404).json({
			status: 'error',
			msg: 'Post not found',
		})
	}
}

const deletePost = async (req, res) => {
	const { postId } = req.params

	try {
		const deletedPost = await postService.deletePost(postId)

		res.status(200).json({
			status: 'ok',
			msg: 'Post successfully deleted',
			data: deletedPost,
		})
	} catch (error) {
		res.status(404).json({
			status: 'error',
			msg: 'Post not found',
		})
	}
}

module.exports = {
	getAllPosts,
	getOnePost,
	createNewPost,
	updatePost,
	deletePost,
}

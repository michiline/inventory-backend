import * as itemRepository from './itemRepository'

export const create = async (req, res, next) => {
	try {
		await itemRepository.create(req.body)
		return res.status(200).send('OK')
	} catch (err) {
		return next(err)
	}
}

export const get = async (req, res, next) => {
	try {
		const items = await itemRepository.get(req.query)
		return res.status(200).send(items)
	} catch (err) {
		return next(err)
	}
}

export const remove = async (req, res, next) => {
	try {
		await itemRepository.remove(req.query)
		return res.status(200).send('OK')
	} catch (err) {
		return next(err)
	}
}

export const update = async (req, res, next) => {
	try {
		const items = await itemRepository.get(req.query)
		const item = items[0]
		await itemRepository.update(item, req.body)
		return res.status(200).send('OK')
	} catch (err) {
		return next(err)
	}
}

export const decreaseQuantity = async (req, res, next) => {
	try {
		await itemRepository.updateQuantity(req.query.name, -1)
		return res.status(200).send('OK')
	} catch (err) {
		return next(err)
	}
}

export const increaseQuantity = async (req, res, next) => {
	try {
		await itemRepository.updateQuantity(req.query.name, 1)
		return res.status(200).send('OK')
	} catch (err) {
		return next(err)
	}
}
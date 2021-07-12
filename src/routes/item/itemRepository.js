import Item from './itemModel'

export const create = (data) => {
	const item = new Item(data)
	return item.save()
}

export const get = () => {
	let queries = []
	queries.push({ $sort: { name: 1 } })
	queries.push({
		$project: { _id: 0, name: 1, quantity: 1, created: 1}
	})
	return Item.aggregate(queries)
}

export const update = (item, updates) => {
	return Item.updateOne({ name: item.name }, updates)
}

export const remove = (query) => {
	return Item.deleteOne({ name: query.name })
}

export const updateQuantity = (name, amount) => {
	return Item.updateOne({ name: name }, { "$inc": { "quantity": amount} })
}
import { Router } from 'express'
import * as itemController from './itemController'
import { setResponseHeaders } from '../../utils'

const router = Router()

router.use(setResponseHeaders)

router.get('/', 
	itemController.get,
)

router.post('/',
	itemController.create,
)

router.delete('/',
	itemController.remove,
)

router.patch('/',
	itemController.update,
)

router.patch('/inc',
	itemController.increaseQuantity,
)

router.patch('/dec',
	itemController.decreaseQuantity,
)

export default router
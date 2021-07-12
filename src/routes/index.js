import { Router } from 'express'
import ItemRoute from './item'
const router = Router()

router.use('/items', ItemRoute)

export default router


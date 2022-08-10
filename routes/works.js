import { Router } from 'express'
import * as worksCtrl from '../controllers/works.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', worksCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, worksCtrl.create)
router.put('/:id/add-photo', checkAuth, worksCtrl.addPhoto)

export { router }
import {response, Router} from 'express'
import {addBecado,deleteBecado} from '../controllers/coach'
const router = Router();




router.post('/', addBecado );

router.post('/delete',deleteBecado )

export default router;
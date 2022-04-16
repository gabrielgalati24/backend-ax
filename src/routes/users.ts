import {response, Router} from 'express'
import {getAllUsers ,createUser,getUser,loginUser,renewToken,updateUser} from '../controllers/users'
const router = Router();



router.get('/', getAllUsers);
router.post('/', createUser )

router.post('/login', loginUser )

router.post('/renew',renewToken, renewToken )

router.get('/users', getAllUsers )

router.post('/users/id', getUser )

router.post('/users/update', updateUser )

// router.post('/coach',createCoach)

// router.post('/coach/id',getCoachById)

// router.post('/add-becados',addBecados)

// router.post('/delete-becados',deleteBecados)

// router.get('/all-coach',getAllCoach)

// router.get('/all-becados',getAllBecados)
export default router;
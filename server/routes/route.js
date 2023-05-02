import express from 'express';
import { addUser , getUser , getSingleUser , editUser , deleteUser} from '../controller/user-controller.js';

const router = express.Router();
// post humlogon ne isliye use kiya h kyunki frontend m bhi humlogon ne post hi use kiya h aur uska endpoint "add" h
router.post('/adduser',addUser)
router.get('/alluser',getUser)
router.get('/:id',getSingleUser)
router.put('/:id',editUser)
router.delete("/:id",deleteUser)

export default router;
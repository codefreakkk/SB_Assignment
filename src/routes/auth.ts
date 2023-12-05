import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { protectRoute, roleCheck } from '../middleware/auth';
import { UserRole } from '../utils/enums';

const router: Router = Router();
const API_VERSION: string = "/v1"

router.post(`${API_VERSION}/register`, AuthController.register_user)
router.post(`${API_VERSION}/login`, AuthController.login_user)
router.get(`${API_VERSION}/me`, protectRoute, AuthController.getMe)
router.get(`${API_VERSION}/getusers`, protectRoute, roleCheck(UserRole.ADMIN), AuthController.getAllUsers)

router.post(`${API_VERSION}/forgotpassword`, protectRoute, AuthController.forgotPassword)
router.put(`${API_VERSION}/resetpassword/:resettoken`, AuthController.resetPassword)

export default router;
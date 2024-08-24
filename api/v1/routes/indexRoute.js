import { Router } from 'express';
import { dashboard, indexPage } from '../controllers/indexController.js';

const router = Router();

router.get('/', indexPage);
router.get('/dashboard', dashboard);

export default router;

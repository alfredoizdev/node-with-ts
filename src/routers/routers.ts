import express from 'express';
import { v1Controller, v2Controller } from '../controllers/main.controller';
import { badRequestMiddleware } from '../middleware/bad-requet.middleware';

const router = express.Router();

router.post('/api/v1', v1Controller);
router.post('/api/v2', v2Controller);

export { router as mainRouter }
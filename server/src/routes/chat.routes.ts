import { Router } from 'express';
import { handleChatSubmit } from '../controllers/chat.controller';

const router = Router();

router.post('/', handleChatSubmit);

export default router;

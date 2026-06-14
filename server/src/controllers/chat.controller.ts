import { Request, Response } from 'express';
import { generateChatResponse } from '../services/chat.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const handleChatSubmit = async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, sessionId = 'default-session' } = req.body;

    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // Save user message
    await prisma.chatMessage.create({
      data: {
        sessionId,
        text: message,
        sender: 'user',
      },
    });

    const reply = generateChatResponse(message);

    // Save bot message
    await prisma.chatMessage.create({
      data: {
        sessionId,
        text: reply,
        sender: 'bot',
      },
    });

    res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat processing error:', error);
    res.status(500).json({ error: 'Failed to process chat message' });
  }
};

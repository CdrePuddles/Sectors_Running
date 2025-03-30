import { Router } from 'express';
import { 
  getRed, 
  getGreen, 
  getYellow, 
  getRedTotalKm, 
  getGreenTotalKm, 
  getYellowTotalKm,
  getWinnersForAllPlaces,
  signup,
  login
 } from '../controllers/userController';

const router = Router();

router.get('/red', getRed);

router.get('/yellow', getYellow);

router.get('/green', getGreen);

router.get('/red/total', getRedTotalKm);

router.get('/yellow/total', getYellowTotalKm);

router.get('/green/total', getGreenTotalKm);

router.get('/winners', getWinnersForAllPlaces);

router.post('/signup', signup);

router.post('/login', login);

export default router;
import express from 'express';
import cityRouter from './citiesRouter';

const router = express.Router();

router.use('/cities', cityRouter);

export = router;
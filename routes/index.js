import requests from 'requests';
import express from 'express';
import fetchDataController from '../controllers/fetchDataController';
const router = new express.Router();

router.get("/",fetchDataController.fetchData);

export default router;

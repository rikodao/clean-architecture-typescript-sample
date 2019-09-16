import { Router } from 'express';
import UserController from './Users';

// Init router and path
const controller = Router();

// Add sub-routes
controller.use('/users', UserController);

// Export the base-router
export default controller;

import express from 'express';
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailibility,
} from '../controllers/room.js';
import {verifyAdmin, verifyUser} from '../utils/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/:hotelid', verifyAdmin, createRoom);
// UPDATE
router.put('/:id', verifyAdmin, updateRoom);
router.put('/availibility/:id', updateRoomAvailibility);
// DELETE
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
// GET
router.get('/:id', getRoom);
// GET ALL
router.get('/', getAllRooms);

export default router;

import express from "express"
import * as peminjamanController from "../controllers/peminjaman"

const router = express.Router()

router.get("/peminjamans", peminjamanController.getAllPeminjaman)
router.post("/peminjamans", peminjamanController.createPeminjaman)
router.patch("/peminjamans/:id", peminjamanController.updatePeminjaman)
router.delete("/peminjamans/:id", peminjamanController.removePeminjaman)

export default router

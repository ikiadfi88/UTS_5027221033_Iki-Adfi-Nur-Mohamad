import mongoose from "mongoose"

export interface Peminjamans {
  _id: mongoose.Types.ObjectId
  nama: string
  keperluan: string
  tanggalpinjam: string
  tanggalkembali: string
  alat: string
  nohp: string
  status: string
}

const PeminjamanSchema = new mongoose.Schema(
  {
    nama: { type: String, required: true },
    keperluan: { type: String, required: true },
    tanggalpinjam: { type: String, required: true },
    tanggalkembali: { type: String, required: true },
    alat: { type: String, required: true },
    nohp: { type: String, required: true },
    status: { type: String, required: true },
  },
  {
    versionKey: false,
  }
)

const PeminjamanModel = mongoose.model<Peminjamans>("Peminjamans", PeminjamanSchema)

export default PeminjamanModel

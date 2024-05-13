import * as grpc from "@grpc/grpc-js"
import PeminjamanModel from "../models/peminjaman.model"

export const getPeminjaman = async (call: any, callback: any) => {
  try {
    const id = call.request.id

    const peminjaman = await PeminjamanModel.findById(id)

    if (!peminjaman) return callback({ code: grpc.status.NOT_FOUND, message: "PEMINJAMAN_NOT_FOUND" })

    callback(null, peminjaman)
  } catch (error) {
    callback(error, null)
  }
}

export const getAllPeminjaman = async (call: any, callback: any) => {
  try {
    const peminjaman = await PeminjamanModel.find()

    if (!peminjaman) return callback({ code: grpc.status.INTERNAL, message: "FAILED_GET_PEMINJAMANS" })

    callback(null, { peminjaman })
  } catch (error) {
    callback(error, null)
  }
}

export const createPeminjaman = async (call: any, callback: any) => {
  try {
    const peminjaman = call.request

    const newPeminjaman = await PeminjamanModel.create(peminjaman)

    if (!newPeminjaman) return callback({ code: grpc.status.INTERNAL, message: "FAILED_CREATE_PEMINJAMAN" })

    callback(null, newPeminjaman)
  } catch (error) {
    callback(error, null)
  }
}

export const updatePeminjaman = async (call: any, callback: any) => {
  try {
    const peminjaman = call.request

    const updatedPeminjaman = await PeminjamanModel.findByIdAndUpdate({ _id: peminjaman._id }, { $set: peminjaman })

    if (!updatedPeminjaman) return callback({ code: grpc.status.INTERNAL, message: "FAILED_UPDATE_PEMINJAMAN" })

    const peminjamanData = await PeminjamanModel.findById(peminjaman._id)

    callback(null, peminjamanData)
  } catch (error) {
    callback(error, null)
  }
}

export const removePeminjaman = async (call: any, callback: any) => {
  try {
    const id = call.request.id

    const removedResult = await PeminjamanModel.findByIdAndDelete({ _id: id })

    if (!removedResult?.$isDeleted) return callback({ code: grpc.status.INTERNAL, message: "FAILED_DELETE_PEMINJAMAN" })

    callback(null, { message: "SUCCESS_DELETE_PEMINJAMAN" })
  } catch (error) {
    callback(error, null)
  }
}

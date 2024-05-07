import * as grpc from "@grpc/grpc-js"
import PeminjamanModel from "../models/peminjaman.model"

export const getPeminjaman = async (call: any, callback: any) => {
  try {
    const peminjaman = await PeminjamanModel.find()
    callback(null, { peminjaman })
  } catch (err) {
    callback(err, null)
  }
}

export const createPeminjaman = async (call: any, callback: any) => {
  try {
    const { peminjaman } = call.request

    // const existPeminjaman = await PeminjamanModel.findOne({ peminjaman })
    // if (existPeminjaman)
    //   return callback({ code: grpc.status.INVALID_ARGUMENT, message: "PEMINJAMAN_ALREADY_EXIST" }, null)

    const newPeminjaman = await PeminjamanModel.create({ peminjaman })
    if (!newPeminjaman)
      return callback({ code: grpc.status.INVALID_ARGUMENT, messae: "FAILED_CREATE_PEMINJAMAN" }, null)

    callback(null, newPeminjaman)
  } catch (err) {
    callback(err, null)
  }
}

export const updatePeminjaman = async (call: any, callback: any) => {
  try {
    const { peminjaman, _id } = call.request

    const existPeminjaman = await PeminjamanModel.findById(_id)
    if (!existPeminjaman) return callback({ code: grpc.status.NOT_FOUND, message: "NOT_FOUND_PEMINJAMAN" }, null)

    const updatedPeminjaman = await PeminjamanModel.updateOne({ _id }, { peminjaman })
    if (updatedPeminjaman.modifiedCount == 0)
      return callback({ code: grpc.status.INTERNAL, messae: "FAILED_UPDATE_PEMINJAMAN" }, null)

    callback(null, { status: "UPDATED" })
  } catch (err) {
    callback(err, null)
  }
}

export const removePeminjaman = async (call: any, callback: any) => {
  try {
    const { _id } = call.request

    const existPeminjaman = await PeminjamanModel.findById(_id)
    if (!existPeminjaman) return callback({ code: grpc.status.NOT_FOUND, message: "NOT_FOUND_PEMINJAMAN" }, null)

    const updatedPeminjaman = await PeminjamanModel.deleteOne({ _id })
    if (updatedPeminjaman.deletedCount == 0)
      return callback({ code: grpc.status.INTERNAL, messae: "FAILED_REMOVE_PEMINJAMAN" }, null)

    callback(null, { status: "REMOVED" })
  } catch (err) {
    callback(err, null)
  }
}

import path from "path"
import * as protoLoader from "@grpc/proto-loader"
import * as grpc from "@grpc/grpc-js"
import createError from "http-errors"
import { NextFunction, Response } from "express"

const protoPath = path.join(__dirname, "../../../proto/peminjaman.proto")

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

const peminjamanProto = protoLoader.loadSync(protoPath, options)
const { peminjamanPackage } = grpc.loadPackageDefinition(peminjamanProto) as any

const peminjamanClient = new peminjamanPackage.PeminjamanService("localhost:3001", grpc.credentials.createInsecure())

export const getPeminjaman = async (req: any, res: Response, next: NextFunction) => {
  await peminjamanClient.getPeminjaman({ id: req.params.id }, (error: grpc.ServiceError, data: any) => {
    if (error) return next(error)

    res.status(200).json({
      status: true,
      code: 200,
      message: "Peminjaman found!",
      peminjaman: data,
    })
  })
}

export const getAllPeminjaman = async (req: any, res: Response, next: NextFunction) => {
  await peminjamanClient.GetAllPeminjaman({}, (error: grpc.ServiceError, data: any) => {
    if (error) return next(error)

    res.status(200).json({
      status: true,
      code: 200,
      message: "Peminjamans found!",
      peminjamans: data.peminjamans,
    })
  })
}

export const createPeminjaman = async (req: any, res: Response, next: NextFunction) => {
  try {
    req.body = req.body || {} // Memberikan nilai default {} jika req.body belum ada

    if (!req.body.tags) {
      req.body.tags = []
    }

    const { peminjaman } = req.body

    await peminjamanClient.createPeminjaman({ peminjaman }, (error: grpc.ServiceError, data: any) => {
      if (error) {
        console.error("Failed to create Peminjaman:", error.message)
        return next(createError(400, "Failed to create Peminjaman"))
      }

      res.status(201).json({
        status: true,
        code: 201,
        message: "Peminjaman created successfully!",
        peminjaman: data,
      })
    })
  } catch (error) {
    console.error("Error while creating Peminjaman:", error)
    next(error)
  }
}

export const updatePeminjaman = async (req: any, res: Response, next: NextFunction) => {
  try {
    if (!req.body.tags) req.body.tags = []

    const dataParams = req.params
    const dataBody = req.body

    const peminjaman = {
      _id: dataParams.id,
      ...dataBody,
    }

    await peminjamanClient.UpdatePeminjaman(peminjaman, (error: grpc.ServiceError, data: any) => {
      if (error) return next(error)

      res.status(200).json({
        status: true,
        code: 200,
        message: "Peminjaman updated successfully!",
        updatedData: data,
      })
    })
  } catch (error) {
    next(error)
  }
}

export const removePeminjaman = async (req: any, res: Response, next: NextFunction) => {
  try {
    const dataParams = req.params

    await peminjamanClient.DeletePeminjaman({ id: dataParams.id }, (error: grpc.ServiceError, data: any) => {
      if (error) return next(error)

      res.status(200).json({
        status: true,
        code: 200,
        message: "Peminjaman removed successfully!",
      })
    })
  } catch (error) {
    next(error)
  }
}

import path from "path"
import * as protoLoader from "@grpc/proto-loader"
import * as grpc from "@grpc/grpc-js"
import { NextFunction, Response } from "express"

const protoPath = path.join(__dirname, "../../../../proto/peminjaman.proto")

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

const peminjamanProdo = protoLoader.loadSync(protoPath, options)
const { peminjamanPackage } = grpc.loadPackageDefinition(peminjamanProdo) as any

const peminjamanClient = new peminjamanPackage.PeminjamanService("0.0.0.0:3001", grpc.credentials.createInsecure())

export const getPeminjaman = async (req: any, res: Response, next: NextFunction) => {
  await peminjamanClient.getPeminjamanId({ id: req.params.id }, (error: grpc.ServiceError, data: any) => {
    if (error) return next(error)

    res.status(200).json({
      status: true,
      code: 200,
      message: "Peminjaman found!",
      data: data,
    })
  })
}

export const getAllPeminjaman = async (req: any, res: Response, next: NextFunction) => {
  await peminjamanClient.getPeminjaman({}, (error: grpc.ServiceError, data: any) => {
    if (error) return next(error)

    res.status(200).json({
      status: true,
      code: 200,
      message: "Peminjamans found!",
      data: data,
    })
  })
}

export const createPeminjaman = async (req: any, res: Response, next: NextFunction) => {
  try {
    if (!req.body) req.body = []

    await peminjamanClient.createPeminjaman(req.body, (error: grpc.ServiceError, data: any) => {
      if (error) return next(error)

      delete req.body

      res.status(201).json({
        status: true,
        code: 201,
        message: "Peminjaman created successfully!",
        data: data,
      })
    })
  } catch (error) {
    next(error)
  }
}

export const updatePeminjaman = async (req: any, res: Response, next: NextFunction) => {
  try {
    if (!req.body) req.body = []

    const dataParams = req.params
    const dataBody = req.body

    const peminjaman = {
      _id: dataParams.id,
      ...dataBody,
    }

    await peminjamanClient.updatePeminjaman(peminjaman, (error: grpc.ServiceError, data: any) => {
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

    const peminjamanId = dataParams.id

    await peminjamanClient.removePeminjaman({ _id: peminjamanId }, (error: grpc.ServiceError, data: any) => {
      if (error) return next(error)

      res.status(200).json({
        status: true,
        code: 200,
        message: "Peminjaman deleted successfully!",
        deletedData: data,
      })
    })
  } catch (error) {
    next(error)
  }
}

import path from "path"
import createError from "http-errors"
import { NextFunction, Response } from "express"
import { StatusCodes as HttpStatus } from "http-status-codes"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"

const protoPath = path.join(__dirname, "..", "..", "..", "proto", "peminjaman.proto")
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
}

const peminjamanProto = protoLoader.loadSync(protoPath, options)
const { peminjamanPackage } = grpc.loadPackageDefinition(peminjamanProto) as any
const peminjamanClient = new peminjamanPackage.PeminjamanService(
  process.env.PEMINJAMAN_SERVICE_URL,
  grpc.credentials.createInsecure()
)

/**
 * Get list of peminjaman
 */
export const getPeminjaman = (req: any, res: Response, next: NextFunction) => {
  peminjamanClient.getPeminjaman({}, (err: grpc.ServiceError, data: any) => {
    if (!data) {
      return next(createError(404, "No peminjaman found"))
    }

    res.status(HttpStatus.OK).json({
      success: true,
      statusCode: HttpStatus.OK,
      data,
      message: "Peminjaman retrieved successfully",
    })
  })
}

/**
 * Create a peminjaman
 */
export const createPeminjaman = (req: any, res: Response, next: NextFunction) => {
  if (!req.body) {
    return next(createError(400, "Invalid request body"))
  }

  peminjamanClient.createPeminjaman(req.body, (err: grpc.ServiceError, data: any) => {
    if (err) return next(err)

    res.status(HttpStatus.CREATED).json({
      success: true,
      statusCode: HttpStatus.CREATED,
      data,
    })
  })
}
/**
 * Update peminjaman by ID
 */
export const updatePeminjaman = (req: any, res: Response, next: NextFunction) => {
  const peminjamanId = req.params.id
  const peminjamanData = req.body

  if (!peminjamanId || typeof peminjamanId !== "string") {
    return next(createError(400, "Invalid peminjaman ID"))
  }

  if (!peminjamanData || typeof peminjamanData !== "object") {
    return next(createError(400, "Invalid peminjaman data"))
  }

  const peminjaman = {
    ...peminjamanData,
    _id: peminjamanId,
  }

  peminjamanClient.updatePeminjaman(peminjaman, (err: grpc.ServiceError, data: any) => {
    if (!data) {
      return next(createError(404, "Peminjaman not found"))
    }

    res.status(HttpStatus.OK).json({
      success: true,
      statusCode: HttpStatus.OK,
      data,
      message: "Peminjaman updated successfully",
    })
  })
}

/**
 * Remove peminjaman by ID
 */
export const removePeminjaman = (req: any, res: Response, next: NextFunction) => {
  const peminjamanId = req.params.id

  if (!peminjamanId || typeof peminjamanId !== "string") {
    return next(createError(400, "Invalid peminjaman ID"))
  }

  peminjamanClient.removePeminjaman({ _id: peminjamanId }, (err: grpc.ServiceError, data: any) => {
    if (!data) {
      return next(createError(404, "Peminjaman not found"))
    }

    res.status(HttpStatus.OK).json({
      success: true,
      statusCode: HttpStatus.OK,
      message: "Peminjaman removed successfully",
    })
  })
}

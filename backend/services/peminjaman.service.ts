import path from "path"
import dotenv from "dotenv"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"

import { PORT, DB_URI } from "./config/app.config"
import DBConnection from "./config/database.config"

import { getPeminjaman, createPeminjaman, updatePeminjaman, removePeminjaman } from "./controller/peminjaman.controller"

dotenv.config()
DBConnection(DB_URI)

const protoPath = path.join(__dirname, "../proto/peminjaman.proto")
const peminjamanProto = protoLoader.loadSync(protoPath)
const { peminjamanPackage } = grpc.loadPackageDefinition(peminjamanProto) as any

const server = new grpc.Server()
server.addService(peminjamanPackage.PeminjamanService.service, {
  getPeminjaman,
  createPeminjaman,
  updatePeminjaman,
  removePeminjaman,
})

server.bindAsync(PORT, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  } else {
    server.start()
    console.info(`🏁 —> Peminjaman service running on port ${port}`)
  }
})

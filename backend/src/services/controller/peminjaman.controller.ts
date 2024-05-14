import * as grpc from "@grpc/grpc-js";
import PeminjamanModel from "../models/peminjaman.model";

export const getPeminjamanId = async (call: any, callback: any) => {
	try {
		const id = call.request.id;

		const peminjaman = await PeminjamanModel.findById(id);

		if (peminjaman === null || undefined) return callback({ code: grpc.status.NOT_FOUND, message: "peminjaman_NOT_FOUND" });

		callback(null, peminjaman);
	} catch (error) {
		callback(error, null);
	}
};

export const getPeminjaman = async (call: any, callback: any) => {
	try {
		const peminjamans = await PeminjamanModel.find();

		if (!peminjamans) return callback({ code: grpc.status.INTERNAL, message: "FAILED_GET_peminjamanS" });

		callback(null, { peminjamans });
	} catch (error) {
		callback(error, null);
	}
};

export const createPeminjaman = async (call: any, callback: any) => {
	try {
		const Peminjaman = call.request;

		const newPeminjaman = await PeminjamanModel.create(Peminjaman);

		if (!newPeminjaman) return callback({ code: grpc.status.INTERNAL, message: "FAILED_CREATE_EMPLOYEE" });

		callback(null, newPeminjaman);
	} catch (error) {
		callback(error, null);
	}
};

export const updatePeminjaman = async (call: any, callback: any) => {
	try {
		const Peminjaman = call.request;

		const updatedPeminjaman = await PeminjamanModel.findByIdAndUpdate({ _id: Peminjaman._id }, { $set: Peminjaman });

		if (!updatedPeminjaman) return callback({ code: grpc.status.INTERNAL, message: "FAILED_UPDATE_EMPLOYEE" });

		const peminjamanData = await PeminjamanModel.findById(Peminjaman._id);

		callback(null, peminjamanData);
	} catch (error) {
		callback(error, null);
	}
};

export const removePeminjaman = async (call: any, callback: any) => {
	try {
		const peminjamanId = call.request._id;

		const deletedPeminjaman = await PeminjamanModel.findByIdAndDelete(peminjamanId);

		if (!deletedPeminjaman) {
			return callback({ code: grpc.status.NOT_FOUND, message: "Peminjaman not found" });
		}

		callback(null, { message: "Peminjaman deleted successfully", deletedPeminjaman });
	} catch (error) {
		callback({ code: grpc.status.INTERNAL, message: "An error occurred while deleting the peminjaman" });
	}
};
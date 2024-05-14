// Original file: ../proto/peminjaman.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _peminjamanPackage_Empty, Empty__Output as _peminjamanPackage_Empty__Output } from '../peminjamanPackage/Empty';
import type { Peminjaman as _peminjamanPackage_Peminjaman, Peminjaman__Output as _peminjamanPackage_Peminjaman__Output } from '../peminjamanPackage/Peminjaman';
import type { PeminjamanId as _peminjamanPackage_PeminjamanId, PeminjamanId__Output as _peminjamanPackage_PeminjamanId__Output } from '../peminjamanPackage/PeminjamanId';
import type { PeminjamanList as _peminjamanPackage_PeminjamanList, PeminjamanList__Output as _peminjamanPackage_PeminjamanList__Output } from '../peminjamanPackage/PeminjamanList';
import type { PeminjamanWithId as _peminjamanPackage_PeminjamanWithId, PeminjamanWithId__Output as _peminjamanPackage_PeminjamanWithId__Output } from '../peminjamanPackage/PeminjamanWithId';

export interface PeminjamanServiceClient extends grpc.Client {
  createPeminjaman(argument: _peminjamanPackage_Peminjaman, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  createPeminjaman(argument: _peminjamanPackage_Peminjaman, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  createPeminjaman(argument: _peminjamanPackage_Peminjaman, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  createPeminjaman(argument: _peminjamanPackage_Peminjaman, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  createPeminjaman(argument: _peminjamanPackage_Peminjaman, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  createPeminjaman(argument: _peminjamanPackage_Peminjaman, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  createPeminjaman(argument: _peminjamanPackage_Peminjaman, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  createPeminjaman(argument: _peminjamanPackage_Peminjaman, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  
  getPeminjaman(argument: _peminjamanPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanList__Output>): grpc.ClientUnaryCall;
  getPeminjaman(argument: _peminjamanPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanList__Output>): grpc.ClientUnaryCall;
  getPeminjaman(argument: _peminjamanPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanList__Output>): grpc.ClientUnaryCall;
  getPeminjaman(argument: _peminjamanPackage_Empty, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanList__Output>): grpc.ClientUnaryCall;
  getPeminjaman(argument: _peminjamanPackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanList__Output>): grpc.ClientUnaryCall;
  getPeminjaman(argument: _peminjamanPackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanList__Output>): grpc.ClientUnaryCall;
  getPeminjaman(argument: _peminjamanPackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanList__Output>): grpc.ClientUnaryCall;
  getPeminjaman(argument: _peminjamanPackage_Empty, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanList__Output>): grpc.ClientUnaryCall;
  
  getPeminjamanId(argument: _peminjamanPackage_PeminjamanId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanWithId__Output>): grpc.ClientUnaryCall;
  getPeminjamanId(argument: _peminjamanPackage_PeminjamanId, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanWithId__Output>): grpc.ClientUnaryCall;
  getPeminjamanId(argument: _peminjamanPackage_PeminjamanId, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanWithId__Output>): grpc.ClientUnaryCall;
  getPeminjamanId(argument: _peminjamanPackage_PeminjamanId, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanWithId__Output>): grpc.ClientUnaryCall;
  getPeminjamanId(argument: _peminjamanPackage_PeminjamanId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanWithId__Output>): grpc.ClientUnaryCall;
  getPeminjamanId(argument: _peminjamanPackage_PeminjamanId, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanWithId__Output>): grpc.ClientUnaryCall;
  getPeminjamanId(argument: _peminjamanPackage_PeminjamanId, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanWithId__Output>): grpc.ClientUnaryCall;
  getPeminjamanId(argument: _peminjamanPackage_PeminjamanId, callback: grpc.requestCallback<_peminjamanPackage_PeminjamanWithId__Output>): grpc.ClientUnaryCall;
  
  removePeminjaman(argument: _peminjamanPackage_PeminjamanId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Empty__Output>): grpc.ClientUnaryCall;
  removePeminjaman(argument: _peminjamanPackage_PeminjamanId, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_Empty__Output>): grpc.ClientUnaryCall;
  removePeminjaman(argument: _peminjamanPackage_PeminjamanId, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Empty__Output>): grpc.ClientUnaryCall;
  removePeminjaman(argument: _peminjamanPackage_PeminjamanId, callback: grpc.requestCallback<_peminjamanPackage_Empty__Output>): grpc.ClientUnaryCall;
  removePeminjaman(argument: _peminjamanPackage_PeminjamanId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Empty__Output>): grpc.ClientUnaryCall;
  removePeminjaman(argument: _peminjamanPackage_PeminjamanId, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_Empty__Output>): grpc.ClientUnaryCall;
  removePeminjaman(argument: _peminjamanPackage_PeminjamanId, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Empty__Output>): grpc.ClientUnaryCall;
  removePeminjaman(argument: _peminjamanPackage_PeminjamanId, callback: grpc.requestCallback<_peminjamanPackage_Empty__Output>): grpc.ClientUnaryCall;
  
  updatePeminjaman(argument: _peminjamanPackage_PeminjamanWithId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  updatePeminjaman(argument: _peminjamanPackage_PeminjamanWithId, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  updatePeminjaman(argument: _peminjamanPackage_PeminjamanWithId, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  updatePeminjaman(argument: _peminjamanPackage_PeminjamanWithId, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  updatePeminjaman(argument: _peminjamanPackage_PeminjamanWithId, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  updatePeminjaman(argument: _peminjamanPackage_PeminjamanWithId, metadata: grpc.Metadata, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  updatePeminjaman(argument: _peminjamanPackage_PeminjamanWithId, options: grpc.CallOptions, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  updatePeminjaman(argument: _peminjamanPackage_PeminjamanWithId, callback: grpc.requestCallback<_peminjamanPackage_Peminjaman__Output>): grpc.ClientUnaryCall;
  
}

export interface PeminjamanServiceHandlers extends grpc.UntypedServiceImplementation {
  createPeminjaman: grpc.handleUnaryCall<_peminjamanPackage_Peminjaman__Output, _peminjamanPackage_Peminjaman>;
  
  getPeminjaman: grpc.handleUnaryCall<_peminjamanPackage_Empty__Output, _peminjamanPackage_PeminjamanList>;
  
  getPeminjamanId: grpc.handleUnaryCall<_peminjamanPackage_PeminjamanId__Output, _peminjamanPackage_PeminjamanWithId>;
  
  removePeminjaman: grpc.handleUnaryCall<_peminjamanPackage_PeminjamanId__Output, _peminjamanPackage_Empty>;
  
  updatePeminjaman: grpc.handleUnaryCall<_peminjamanPackage_PeminjamanWithId__Output, _peminjamanPackage_Peminjaman>;
  
}

export interface PeminjamanServiceDefinition extends grpc.ServiceDefinition {
  createPeminjaman: MethodDefinition<_peminjamanPackage_Peminjaman, _peminjamanPackage_Peminjaman, _peminjamanPackage_Peminjaman__Output, _peminjamanPackage_Peminjaman__Output>
  getPeminjaman: MethodDefinition<_peminjamanPackage_Empty, _peminjamanPackage_PeminjamanList, _peminjamanPackage_Empty__Output, _peminjamanPackage_PeminjamanList__Output>
  getPeminjamanId: MethodDefinition<_peminjamanPackage_PeminjamanId, _peminjamanPackage_PeminjamanWithId, _peminjamanPackage_PeminjamanId__Output, _peminjamanPackage_PeminjamanWithId__Output>
  removePeminjaman: MethodDefinition<_peminjamanPackage_PeminjamanId, _peminjamanPackage_Empty, _peminjamanPackage_PeminjamanId__Output, _peminjamanPackage_Empty__Output>
  updatePeminjaman: MethodDefinition<_peminjamanPackage_PeminjamanWithId, _peminjamanPackage_Peminjaman, _peminjamanPackage_PeminjamanWithId__Output, _peminjamanPackage_Peminjaman__Output>
}

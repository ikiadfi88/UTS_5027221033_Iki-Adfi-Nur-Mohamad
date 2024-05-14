import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PeminjamanServiceClient as _peminjamanPackage_PeminjamanServiceClient, PeminjamanServiceDefinition as _peminjamanPackage_PeminjamanServiceDefinition } from './peminjamanPackage/PeminjamanService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Any: MessageTypeDefinition
    }
  }
  peminjamanPackage: {
    Empty: MessageTypeDefinition
    Peminjaman: MessageTypeDefinition
    PeminjamanId: MessageTypeDefinition
    PeminjamanList: MessageTypeDefinition
    PeminjamanService: SubtypeConstructor<typeof grpc.Client, _peminjamanPackage_PeminjamanServiceClient> & { service: _peminjamanPackage_PeminjamanServiceDefinition }
    PeminjamanWithId: MessageTypeDefinition
    Response: MessageTypeDefinition
  }
}


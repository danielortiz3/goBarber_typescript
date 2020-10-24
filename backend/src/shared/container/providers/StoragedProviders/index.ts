import { container } from 'tsyringe';
import uploadConfig from '@config/upload';

import IStorageProvider from '@shared/container/providers/StoragedProviders/models/IStoragedProvider';

import DiskStorageProvider from '@shared/container/providers/StoragedProviders/implementations/DiskStoreProvider';
import S3StorageProvider from '@shared/container/providers/StoragedProviders/implementations/S3StorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);

import { Module } from '@nestjs/common';
import { UploadFileService } from './uploadFile.service'
import { uploadFileResolver } from './uploadFile.resolver'

@Module({
    imports: [],
    providers: [uploadFileResolver, UploadFileService]
})
export class UploadFileModule { }

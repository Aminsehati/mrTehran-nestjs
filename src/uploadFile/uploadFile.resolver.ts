import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { UploadFileService } from './uploadFile.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload'
const path = require('path')
@Resolver()
export class uploadFileResolver {
    constructor(private readonly uploadFileService: UploadFileService) { }
    @Mutation()
    uploadImage(
        @Args("file", { type: () => GraphQLUpload })
        file: FileUpload
    ) {
        try {
            return this.uploadFileService.uplaodImage(file);
        } catch (error) {
            console.log('error', error);
        }
    }
    @Mutation()
    uploadAudio(@Args('file', { type: () => GraphQLUpload }) file: FileUpload) {
        try {
            return this.uploadFileService.uploadAudio(file)
        } catch (error) {
            console.log('error', error);
        }
    }
}
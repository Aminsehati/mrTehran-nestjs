import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { createWriteStream } from "fs";
import { UploadFileService } from './uploadFile.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload'
const path = require('path')
@Resolver()
export class uploadFileResolver {
    constructor(private readonly uploadFileService: UploadFileService) { }
    @Mutation()
    async uploadImage(
        @Args("file", { type: () => GraphQLUpload })
        file: FileUpload
    ) {
        try {
            return this.uploadFileService.uplaodImage(file);
        } catch (error) {
            throw new Error('sss')
        }
    }
}
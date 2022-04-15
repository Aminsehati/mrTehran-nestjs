import { Injectable } from "@nestjs/common";
import { createWriteStream } from "fs";
import { GraphQLUpload, FileUpload } from 'graphql-upload'
const path = require('path');
import { File } from './interface/File.interface'
@Injectable()
export class UploadFileService {
    async uplaodImage(file: FileUpload): Promise<File> {
        const {
            filename,
            createReadStream
        } = await file[0].file;
        const myfile = await createReadStream();
        const locationFile = path.join(__dirname, `../../../public/images/${filename}`);
        console.log(locationFile);

        await myfile.pipe(createWriteStream(locationFile));
        return {
            url: filename
        }
    }
    async uploadAudio(file: FileUpload): Promise<File> {
        const {
            filename,
            createReadStream
        } = await file[0].file;
        const myfile = await createReadStream();
        const locationFile = path.join(__dirname, `../../../public/audio/${filename}`);

        await myfile.pipe(createWriteStream(locationFile));
        return {
            url: filename
        }
    }
}
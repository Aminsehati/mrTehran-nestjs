import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Album } from './interface/album.interface'
import { Artist } from '../artist/interface/artist.interface'
import { createAlbumInput } from './input/createAlbum.input';
import { updateAlbumInput } from './input/updateAlbum.input'
import { Injectable } from "@nestjs/common";
import { Pagination } from '../input/pagination.input';
@Injectable()
export class AlbumServie {
    constructor(@InjectModel('albums') private readonly albumModel: Model<Album>, @InjectModel('artists') private readonly artistModel: Model<Artist>) { }
    async getAlbums(pagination: Pagination): Promise<Album[]> {
        const paginationItem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        return await this.albumModel.find().limit(paginationItem.limit).skip((paginationItem.limit * (paginationItem.skip - 1))).populate("artists");
    }
    async getAlbum(id: string) {
        return this.albumModel.findOne({ _id: id }).populate("artists")
    }
    async getAlbumsCount() {
        return this.albumModel.find().count();
    }

    async createAlbum(input: createAlbumInput): Promise<Album> {
        let artists = [];
        if (input.artists.length) {
            artists = input.artists
        }
        return (await this.albumModel.create({
            name: input.name,
            imgUrl: input.imgUrl,
            artists
        })).populate("artists")
    }
    async updateAlbum(id: string, input: updateAlbumInput): Promise<Album> {
        let artists = []
        if (input.artists.length) {
            artists = input.artists
        }
        return await this.albumModel.findOneAndUpdate({ _id: id }, {
            name: input.name,
            imgUrl: input.imgUrl,
            artists
        }, { new: true }).populate("artists");
    }
    async deleteAlbum(id: string) {
        return await this.albumModel.findOneAndDelete({ _id: id }, { new: true }).populate("artists")
    }
}
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { TracksAlbum } from './interface/tracksAlbum.interface'
import { Album } from '../album/interface/album.interface'
import { createTrackAlbumInput } from './input/createTrackAlbum.input'
import { updateTrackAlbumInput } from './input/updateTrackAlbum.input'
import { sortTrackAlbum } from './input/sortTrackAlbum.input'
import { filterTrackAlbum } from './input/filterTrackAlbum.input'
import { Pagination } from "src/input/pagination.input";
@Injectable()
export class TrackAlbumService {
    constructor(@InjectModel("tracksAlbum") private readonly tracksAlbumModel: Model<TracksAlbum>, @InjectModel('albums') private readonly albumModel: Model<Album>) { }
    async createTrackAlbum(input: createTrackAlbumInput) {
        return await this.tracksAlbumModel.create({
            trackName: input.trackName,
            audioUrl: input.audioUrl,
            albumID: input.albumID
        })
    }
    async updateTrackAlbum(id: string, input: updateTrackAlbumInput) {
        return await this.tracksAlbumModel.findOneAndUpdate({ _id: id }, input, { new: true })
    }
    async deleteTrackAlbum(id: string) {
        return await this.tracksAlbumModel.findOneAndDelete({ _id: id }, { new: true })
    }
    async viewTrackAlbum(id: string) {
        return await this.tracksAlbumModel.findOneAndUpdate({ _id: id }, {
            $inc: {
                view: 1
            }
        }, { new: true })
    }
    async likeTrackAlbum(id: string) {
        return await this.tracksAlbumModel.findOneAndUpdate({ _id: id }, {
            $inc: {
                like: 1
            }
        }, { new: true })
    }
    async getTracksAlbum(pagination: Pagination, sort: sortTrackAlbum, filter: filterTrackAlbum) {
        const paginationItem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        const sortItem = {
            updatedAt: sort?.updatedAt || 1,
            createdAt: sort?.createdAt || 1,
            view: sort?.view || 1,
            like: sort?.like || 1
        }
        if (filter?.artists && filter.artists.length) {
            const items = await this.albumModel.findOne({
                "artists._id": filter.artists
            });
            return await this.tracksAlbumModel.find({ albumID: items._id }).limit(paginationItem.limit).skip((paginationItem.limit) * (paginationItem.skip - 1)).sort(sortItem);
        }
        return await this.tracksAlbumModel.find().limit(paginationItem.limit).skip((paginationItem.limit) * (paginationItem.skip - 1)).sort(sortItem);
    }
    async getTracksAlbumCount() {
        return await this.tracksAlbumModel.find().count();
    }
    async getTrackAlbum(id: string) {
        return await this.tracksAlbumModel.findOne({ _id: id });
    }
}
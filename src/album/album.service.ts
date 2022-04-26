import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { Album } from './interface/album.interface'
import { Artist } from '../artist/interface/artist.interface'
import { createAlbumInput } from './input/createAlbum.input';
import { updateTrackInput } from './input/updateAlbum.input'
import { Injectable } from "@nestjs/common";
import { Pagination } from '../input/pagination.input';
import { albumTrackInput } from './input/albumTrack.input';
@Injectable()
export class AlbumServie {
    constructor(@InjectModel('albums') private readonly albumModel: Model<Album>, @InjectModel('artists') private readonly artistModel: Model<Artist>) { }
    async getAlbums(pagination: Pagination): Promise<Album[]> {
        const paginationItem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        return await this.albumModel.find().limit(paginationItem.limit).skip((paginationItem.limit * (paginationItem.skip - 1)));
    }
    async getAlbum(id: string) {
        return this.albumModel.findOne({ _id: id })
    }
    async getAlbumsCount() {
        return this.albumModel.find().count();
    }
    async getTracksAlbum(albumID: string) {
        const AlbumItem = await this.albumModel.findOne({ _id: albumID });
        const tracks = AlbumItem?.tracks || []
        return tracks
    }
    async getTrackAlbum(albumID: string, trackID: string) {
        const item = this.albumModel.findOne({
            tracks: {
                $elemMatch: {
                    _id: trackID
                }
            }
        });
        console.log(item);
        return item
    }

    async createAlbum(input: createAlbumInput): Promise<Album> {
        let artists = [];
        if (input.artists.length) {
            artists = await this.artistModel.findOne({ _id: input.artists });
        }
        return await this.albumModel.create({
            name: input.name,
            imgUrl: input.imgUrl,
            artists
        })
    }
    async updateAlbum(id: string, input: updateTrackInput): Promise<Album> {
        let artists = []
        if (input.artists.length) {
            artists = await this.artistModel.find({ _id: input.artists });
        }
        return this.albumModel.findOneAndUpdate({ _id: id }, {
            name: input.name,
            imgUrl: input.artists,
            artists
        }, { new: true })
    }
    async deleteAlbum(id: string) {
        return await this.albumModel.findOneAndDelete({ _id: id }, { new: true })
    }
    async createTrackAlbum(input: albumTrackInput) {
        const newTrack = {
            trackName: input.trackName,
            audioUrl: input.audioUrl,
            // _id: uuidv4()
        }
        return await this.albumModel.findOneAndUpdate({ _id: input.albumID }, {
            $addToSet: {
                tracks: newTrack
            }
        }, { new: true })
    }
    async viewTrackAlbum(albumID: string, trackID: string) {
        return await this.albumModel.findOneAndUpdate({ _id: albumID, "tracks._id": trackID }, {
            $inc: {
                "tracks.$.view": 1
            }
        }, { new: true })
    }
    async likeTrackAlbum(albumID: string, trackID: string) {
        return await this.albumModel.findOneAndUpdate({ _id: albumID, "tracks._id": trackID }, {
            $inc: {
                "tracks.$.like": 1
            }
        }, { new: true })
    }
}
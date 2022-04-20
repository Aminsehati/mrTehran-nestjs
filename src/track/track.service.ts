import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { Injectable } from "@nestjs/common";
import { Track } from './interface/track.interface'
import { createTrack } from "./input/createTrack.input";
import { Artist } from '../artist/interface/artist.interface'
import { PlayList } from '../playList/interface/playList.interface'
import { Pagination } from '../schema/graphql';
import { sortTrack } from './input/sortTrack.input';
import { filterTrack } from './input/filterTrack.input';
import { updateTrack } from './input/updateTrack.input'
@Injectable()
export class TrackService {
    constructor(@InjectModel('tracks') private readonly trackModel: Model<Track>,
        @InjectModel('artists') private readonly artistModel: Model<Artist>,
        @InjectModel('playlists') private readonly playlistModel: Model<PlayList>) { }
    async getTracks(pagination: Pagination, sort: sortTrack, filter: filterTrack): Promise<Track[]> {
        const paginationitem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        const sortItem = {
            like: sort?.like,
            view: sort?.view,
            updatedAt: sort?.updatedAt,
            createdAt: sort?.createdAt,
        }
        const hasPodcast = sort?.hasPodcast || false
        if (filter?.artistID) {
            return await this.trackModel.find(filter.artistID && {
                artists: {
                    $elemMatch: {
                        _id: filter.artistID
                    }
                }
            }).limit(paginationitem.limit).
                skip((paginationitem.limit) * (paginationitem.skip - 1)).
                sort(sortItem)
        }
        if (filter?.playlistID) {
            return await this.trackModel.find(filter.playlistID && {
                playlists: {
                    $elemMatch: {
                        _id: filter.playlistID
                    }
                }
            }).limit(paginationitem.limit).
                skip((paginationitem.limit) * (paginationitem.skip - 1)).
                sort(sortItem)
        }
        if (filter?.playlistID && filter?.artistID) {
            return await this.trackModel.find({
                playlists: {
                    $elemMatch: {
                        _id: filter.playlistID
                    }
                },
                artists: {
                    $elemMatch: {
                        _id: filter.playlistID
                    }
                }
            }).limit(paginationitem.limit).
                skip((paginationitem.limit) * (paginationitem.skip - 1)).
                sort(sortItem)
        }
        return await this.trackModel.find({ hasPodcast }).limit(paginationitem.limit).
            skip((paginationitem.limit) * (paginationitem.skip - 1)).
            sort(sortItem)
    }
    async getTracksCount(): Promise<number> {
        return await this.trackModel.find().count();
    }
    async getTrack(id: string): Promise<Track> {
        return await this.trackModel.findOne({ _id: id });
    }
    async deleteTrack(id: string): Promise<Track> {
        return await this.trackModel.findOneAndDelete({ _id: id });
    }
    async createTrack(input: createTrack): Promise<Track> {
        let artists = [];
        let playLists = [];
        if (input.artists) {
            artists = await this.artistModel.find({ _id: input.artists })
        }
        if (input.playlists) {
            playLists = await this.playlistModel.find({ _id: input.playlists });
        }
        return await this.trackModel.create({
            trackName: input.trackName,
            imgUrl: input.imgUrl,
            audioUrl: input.audioUrl,
            artists,
            playLists
        })
    }
    async updateTrack(id: string, input: updateTrack) {
        let artists = [];
        let playlists = []
        if (input.artists.length) {
            artists = await this.artistModel.findOne({ _id: input.artists })
        }
        if (input.playlists.length) {

            playlists = await this.playlistModel.findOne({ _id: input.playlists })
        }

        return await this.trackModel.findOneAndUpdate({ _id: id }, {
            imgUrl: input.imgUrl,
            audioUrl: input.audioUrl,
            trackName: input.trackName,
            view: input.view,
            like: input.like,
            artists,
            playlists,
        }, { new: true })
    }
    async likeTrack(id: string) {
        return this.trackModel.findOneAndUpdate({ _id: id }, {
            $inc: {
                like: 1
            }
        }, {
            new: true
        })
    }
    async viewTrack(id: string): Promise<Track> {
        return this.trackModel.findOneAndUpdate({ _id: id }, {
            $inc: {
                view: 1
            }
        }, {
            new: true
        })
    }
}
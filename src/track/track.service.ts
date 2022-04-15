import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { Injectable } from "@nestjs/common";
import { Track } from './interface/track.interface'
import { createTrack } from "./input/createTrack.input";
import { Artist } from '../artist/interface/artist.interface'
import { Pagination } from '../schema/graphql';
import { sortTrack } from './input/sortTrack.input';
import { filterTrack } from './input/filterTrack.input';
import { log } from "console";
@Injectable()
export class TrackService {
    constructor(@InjectModel('tracks') private readonly trackModel: Model<Track>, @InjectModel('artists') private readonly artistModel: Model<Artist>) { }
    async getTracks(pagination: Pagination, sort: sortTrack, filter: filterTrack): Promise<Track[]> {
        const paginationitem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        const sortItem = {
            like: sort?.like,
            view: sort?.view,
            updatedAt: sort?.updatedAt,
            createdAt: sort?.createdAt
        }
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

        return await this.trackModel.find().limit(paginationitem.limit).
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
    async createTrack(input: createTrack) {
        const artistItems = await this.artistModel.find({ _id: input.artists });
        return await this.trackModel.create({
            trackName: input.trackName,
            imgUrl: input.imgUrl,
            audioUrl: input.audioUrl,
            artists: artistItems
        })
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
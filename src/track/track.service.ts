import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose'
import { Injectable } from "@nestjs/common";
import { Track } from './interface/track.interface'
import { createTrack } from "./input/createTrack.input";
import { Artist } from '../artist/interface/artist.interface'
import { Pagination } from '../schema/graphql';
@Injectable()
export class TrackService {
    constructor(@InjectModel('tracks') private readonly trackModel: Model<Track>, @InjectModel('artists') private readonly artistModel: Model<Artist>) { }
    async getTracks(pagination: Pagination): Promise<Track[]> {
        const paginationitem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        return await this.trackModel.find().limit(paginationitem.limit).skip((pagination.limit) * (pagination.skip - 1));
    }
    async deleteTrack(id: string): Promise<Track> {
        return this.trackModel.findOneAndDelete({ _id: id });
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

}
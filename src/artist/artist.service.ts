import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pagination } from 'src/input/pagination.input';
import { Artist } from './interface/artist.interface'
import { createArtist } from './input/createArtist.input';
import { updateArtist } from './input/updateArtist';
@Injectable()
export class ArtistService {
    constructor(@InjectModel('artists') private readonly artistModel: Model<Artist>) { }
    async getArtists(pagination: Pagination): Promise<Artist[]> {
        const paginationItem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        return await this.artistModel.find().limit(paginationItem.limit).skip((paginationItem.limit) * (paginationItem.skip - 1));
    }
    async getArtist(id: string): Promise<Artist> {
        return this.artistModel.findOne({ _id: id });
    }
    async getArtistsCount(): Promise<number> {
        return this.artistModel.find().count();
    }
    async createArtist(input: createArtist) {
        return this.artistModel.create(input);
    }
    async updateArtist(id: string, input: updateArtist) {
        return await this.artistModel.findOneAndUpdate({ _id: id }, input, { new: true });
    }
    async deleteArtist(id: string) {
        return await this.artistModel.findOneAndDelete({ _id: id });
    }
    async FollowArtist(id: string) {
        return await this.artistModel.findOneAndUpdate({ _id: id }, {
            $inc: {
                Followers: 1
            }
        }, { new: true })
    }
}
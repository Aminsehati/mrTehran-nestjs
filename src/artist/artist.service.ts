import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artist } from './interface/artist.interface'
@Injectable()
export class ArtistService {
    constructor(@InjectModel('artists') private readonly artistModel: Model<Artist>) { }
    async getArtists(): Promise<Artist[]> {
        return await this.artistModel.find();
    }
    async getArtist(id: string): Promise<Artist> {
        return this.artistModel.findOne({ _id: id });
    }
    async getArtistsCount(): Promise<number> {
        return this.artistModel.find().count();
    }
}
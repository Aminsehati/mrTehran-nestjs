import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PlayList } from './interface/playList.interface';
import { createPlayList } from './input/createPlayList.input'
import { updatePlayList } from './input/updatePlayList.input';
import { Pagination } from '../input/pagination.input';
import { sortPlayList } from './input/sortPlayList.input';
@Injectable()
export class PlayListService {
    constructor(@InjectModel('playlists') private readonly playListModel: Model<PlayList>) { }
    async getPlayLists(pagination: Pagination, sort: sortPlayList): Promise<PlayList[]> {
        const paginationItem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        const sortItem = {
            name: sort?.name,
            Followers: sort?.Followers,
            createdAt: sort?.createdAt,
            updatedAt: sort?.updatedAt
        }
        return await this.playListModel.find().limit(paginationItem.limit).skip((paginationItem.skip - 1) * (paginationItem.limit)).sort(sortItem);
    }
    async getPlayList(id: string): Promise<PlayList> {
        return this.playListModel.findOne({ _id: id });
    }
    async getPlayListsCount(): Promise<number> {
        return this.playListModel.find().count();
    }
    async createPlayList(input: createPlayList): Promise<PlayList> {
        return await this.playListModel.create(input);
    }
    async deletePlayList(id: string): Promise<PlayList> {
        return await this.playListModel.findOneAndDelete({ _id: id });
    }
    async updatePlayList(id: string, input: updatePlayList): Promise<PlayList> {
        return await this.playListModel.findOneAndUpdate({ _id: id }, input, {
            new: true
        });
    }
    async FollowPlayList(id: string) {
        return await this.playListModel.findOneAndUpdate({ _id: id }, {
            $inc: {
                Followers: 1
            }
        }, {
            new: true
        })
    }
}
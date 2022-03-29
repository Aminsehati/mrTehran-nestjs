import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { PlayListService } from './playList.service'
import { PlayList } from './dto/playList.dto';
import { createPlayList } from './input/createPlayList.input'
import { updatePlayList } from "./input/updatePlayList";
import { Pagination } from '../input/pagination.input';
@Resolver()
export class PlayListResolver {
    constructor(private readonly playListService: PlayListService) { }
    @Query(() => [PlayList])
    getPlayLists(@Args('pagination') pagination: Pagination) {
        try {
            return this.playListService.getPlayLists(pagination)
        } catch (error) {
            console.log(error);
        }
    }
    @Query(() => PlayList)
    getPlayList(@Args('id') id: string) {
        return this.playListService.getPlayList(id);
    }
    @Query()
    getPlayListsCount() {
        try {
            return this.playListService.getPlayListsCount()
        } catch (error) {
            console.log(error);
        }
    }
    @Mutation(() => PlayList)
    createPlayList(@Args('input') input: createPlayList) {
        try {
            return this.playListService.createPlayList(input)
        } catch (error) {
            console.log(error);
        }
    }
    @Mutation(() => PlayList)
    deletePlayList(@Args('id') id: string) {
        try {
            console.log('id playList', id);
            return this.playListService.deletePlayList(id);
        } catch (error) {
            console.log(error);
        }
    }
    @Mutation(() => PlayList)
    async updatePlayList(@Args('id') id: string, @Args('input') input: updatePlayList) {
        try {
            return this.playListService.updatePlayList(id, input);
        } catch (error) {
            console.log(error);
        }
    }
    @Mutation(() => PlayList)
    FollowPlayList(@Args('id') id: string) {
        try {
            return this.playListService.FollowPlayList(id);
        } catch (error) {
            console.log(error);
        }
    }
}
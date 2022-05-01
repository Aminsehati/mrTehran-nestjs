import { Args, Int, Mutation, Resolver, Query } from "@nestjs/graphql";
import { AlbumServie } from './album.service';
import { createAlbumInput } from './input/createAlbum.input';
import { updateTrackInput } from './input/updateAlbum.input';
import { albumTrackInput } from './input/albumTrack.input'
import { album } from './dto/album.dto'
import { Pagination } from '../input/pagination.input';

@Resolver()
export class albumResolver {
    constructor(private readonly albumService: AlbumServie) { }

    @Query(() => [album])
    getAlbums(@Args('pagination') pagination: Pagination) {
        return this.albumService.getAlbums(pagination);
    }

    @Query(() => album)
    getAlbum(@Args('id') id: string) {
        return this.albumService.getAlbum(id);
    }

    @Query(() => Int)
    getAlbumsCount() {
        return this.albumService.getAlbumsCount()
    }



    @Mutation(() => album)
    createAlbum(@Args('input') input: createAlbumInput) {
        return this.albumService.createAlbum(input);
    }

    @Mutation(() => album)
    updateAlbum(@Args('input') input: updateTrackInput, @Args('id') id: string) {
        return this.albumService.updateAlbum(id, input);
    }

    @Mutation(() => album)
    deleteAlbum(@Args('id') id: string) {
        return this.albumService.deleteAlbum(id)
    }
}
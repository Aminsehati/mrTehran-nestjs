import { Args, Mutation, Resolver, Query, Int } from "@nestjs/graphql";
import { TrackAlbumService } from './trackAlbum.service'
import { trackAlbum } from './dto/trackAlbum.dto'
import { createTrackAlbumInput } from './input/createTrackAlbum.input'
import { updateTrackAlbumInput } from './input/updateTrackAlbum.input'
import { sortTrackAlbum } from './input/sortTrackAlbum.input'
import { filterTrackAlbum } from './input/filterTrackAlbum.input'
import { Pagination } from "src/input/pagination.input";
@Resolver()
export class TrackAlbumResolver {
    constructor(private readonly trackAlbumService: TrackAlbumService) { }
    @Mutation(() => trackAlbum)
    createTrackAlbum(@Args('input') input: createTrackAlbumInput) {
        return this.trackAlbumService.createTrackAlbum(input);
    }
    @Mutation(() => trackAlbum)
    updateTrackAlbum(@Args('id') id: string, @Args('input') input: updateTrackAlbumInput) {
        return this.trackAlbumService.updateTrackAlbum(id, input);
    }
    @Mutation(() => trackAlbum)
    deleteTrackAlbum(@Args('id') id: string) {
        return this.trackAlbumService.deleteTrackAlbum(id);
    }
    @Mutation(() => trackAlbum)
    viewTrackAlbum(@Args('id') id: string) {
        return this.trackAlbumService.viewTrackAlbum(id);
    }
    @Mutation(() => trackAlbum)
    likeTrackAlbum(@Args('id') id: string) {
        return this.trackAlbumService.likeTrackAlbum(id);
    }
    @Query(() => Int)
    getTracksAlbumCount() {
        return this.trackAlbumService.getTracksAlbumCount();
    }
    @Query(() => [trackAlbum])
    getTracksAlbum(@Args('pagination') pagination: Pagination, @Args('sort') sort: sortTrackAlbum, @Args('filter') filter: filterTrackAlbum) {
        return this.trackAlbumService.getTracksAlbum(pagination, sort,filter);
    }
    @Query(() => trackAlbum)
    getTrackAlbum(@Args('id') id: string) {
        return this.trackAlbumService.getTrackAlbum(id);
    }
}
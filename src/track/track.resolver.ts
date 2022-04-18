import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TrackService } from './track.service'
import { track } from './dto/track.dto'
import { createTrack } from './input/createTrack.input';
import { Pagination } from '../schema/graphql';
import { sortTrack } from './input/sortTrack.input';
import { filterTrack } from './input/filterTrack.input';
import { updateTrack } from './input/updateTrack.input'
@Resolver()
export class trackResolver {
    constructor(private readonly trackService: TrackService) { }
    @Query(() => [track])
    getTracks(@Args('pagination') pagination: Pagination, @Args('sort') sort: sortTrack, @Args('filter') filter: filterTrack) {
        try {
            return this.trackService.getTracks(pagination, sort, filter);
        } catch (error) {
            console.log('error', error);
        }
    }

    @Query(() => track)
    getTrack(@Args('id') id: string) {
        return this.trackService.getTrack(id);
    }

    @Query(() => Int)
    getTracksCount() {
        try {
            return this.trackService.getTracksCount();
        } catch (error) {
            console.log('error', error);
        }
    }
    @Mutation(() => track)
    createTrack(@Args('input') input: createTrack) {
        try {
            return this.trackService.createTrack(input);
        } catch (error) {
            console.log('error', error);
        }
    }

    @Mutation(() => track)
    deleteTrack(@Args('id') id: string) {
        try {
            return this.trackService.deleteTrack(id);
        } catch (error) {
            console.log('error', error);
        }
    }
    @Mutation(() => track)
    updateTrack(@Args('id') id: string, @Args('input') input: updateTrack) {
        try {
            return this.trackService.updateTrack(id, input)
        } catch (error) {
            ////
        }
    }

    @Mutation(() => track)
    likeTrack(@Args('id') id: string) {
        try {
            return this.trackService.likeTrack(id);
        } catch (error) {
            console.log('error', error);
        }
    }
    @Mutation(() => track)
    viewTrack(@Args('id') id: string) {
        try {
            return this.trackService.viewTrack(id);
        } catch (error) {
            console.log('error', error);
        }
    }
}
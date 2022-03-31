import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TrackService } from './track.service'
import { track } from './dto/track.dto'
import { createTrack } from './input/createTrack.input';
@Resolver()
export class trackResolver {
    constructor(private readonly trackService: TrackService) { }
    @Query(() => [track])
    getTracks() {
        try {
            return this.trackService.getTracks();
        } catch (error) {
            console.log('error', error);
        }
    }

    @Mutation(() => track)
    createTrack(@Args('input') input:createTrack) {
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
}
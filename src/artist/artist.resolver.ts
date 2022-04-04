import { BadRequestException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createArtist } from 'src/artist/input/createArtist.input';
import { Pagination } from 'src/input/pagination.input';
import { ArtistService } from './artist.service'
import { Artist } from './dto/artist.dto'
import { sortArtists } from './input/sortActors.input';
import { updateArtist } from './input/updateArtist';
@Resolver()
export class ArtistResolver {
    constructor(private readonly artistService: ArtistService) { }
    @Query(() => [Artist])
    async getArtists(@Args('pagination') pagination: Pagination, @Args('sort') sort: sortArtists) {
        try {
            return this.artistService.getArtists(pagination, sort);
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
    @Query(() => Artist)
    async getArtist(@Args('id') id: string) {
        try {
            return this.artistService.getArtist(id);
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
    @Query(() => Int)
    async getArtistsCount() {
        try {
            return this.artistService.getArtistsCount()
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
    @Mutation(() => Artist)
    createArtist(@Args('input') input: createArtist) {
        try {
            return this.artistService.createArtist(input);
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
    @Mutation(() => Artist)
    updateArtist(@Args('id') id: string, @Args('input') input: updateArtist) {
        try {
            return this.artistService.updateArtist(id, input);
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
    @Mutation(() => Artist)
    deleteArtist(@Args('id') id: string) {
        try {
            return this.artistService.deleteArtist(id);
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
    @Mutation(() => Artist)
    async FollowArtist(@Args('id') id: string) {
        try {
            return this.artistService.FollowArtist(id)
        } catch (error) {
            throw new BadRequestException(error)
        }
    }
}
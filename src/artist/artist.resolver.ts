import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { ArtistService } from './artist.service'
import { Artist } from './dto/artist.dto'
@Resolver()
export class ArtistResolver {
    constructor(private readonly artistService: ArtistService) { }
    @Query(() => [Artist])
    async getArtists() {
        try {
            return this.artistService.getArtists();
        } catch (error) {
            console.log(error);
        }
    }
    @Query(() => Artist)
    async getArtist(@Args('id') id: string) {
        try {
            return this.artistService.getArtist(id);
        } catch (error) {
            console.log(error);
        }
    }
    @Query(() => Int)
    async getArtistsCount() {
        try {
            return this.artistService.getArtistsCount()
        } catch (error) {
            console.log(error);
        }
    }
}
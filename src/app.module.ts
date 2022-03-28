import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayLisModule } from './playList/playList.module';
import { ArtistModule } from './artist/artist.module';
@Module({
  imports: [
    PlayLisModule,
    ArtistModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    MongooseModule.forRoot('mongodb+srv://root:El0o1OLJQRIsNOvp@mrtehran.xc53v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  ],
})
export class AppModule { }
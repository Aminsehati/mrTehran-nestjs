import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayLisModule } from './playList/playList.module';
import { ArtistModule } from './artist/artist.module';
import { UploadFileModule } from './uploadFile/uploadFile.module'
import { graphqlUploadExpress, GraphQLUpload } from 'graphql-upload';
import { TrackModule } from './track/track.module'
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AlbumModule } from './album/album.module'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TracksAlbumModule } from './trackAlbum/trackAlbum.module';
import { get } from 'lodash'
@Module({
  imports: [
    PlayLisModule,
    ArtistModule,
    UploadFileModule,
    TrackModule,
    AuthModule,
    UserModule,
    AlbumModule,
    TracksAlbumModule,
    GraphQLModule.forRoot({
      uploads: false,
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      context: ({ req, res }) => {
        return {
          req,
          res
        }
      }
    }),
    MongooseModule.forRoot('mongodb+srv://root:S6EwNyUFL624JCb1@mrtehran.xc53v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../public'),
      serveRoot: '/public/'
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress()).forRoutes('graphql');
  }
}
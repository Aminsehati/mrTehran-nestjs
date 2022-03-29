import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayLisModule } from './playList/playList.module';
import { ArtistModule } from './artist/artist.module';
import { UploadFileModule } from './uploadFile/uploadFile.module'
import { graphqlUploadExpress, GraphQLUpload } from 'graphql-upload';
@Module({
  imports: [
    PlayLisModule,
    ArtistModule,
    UploadFileModule,
    GraphQLModule.forRoot({
      uploads: false,
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      // resolvers: { Upload: GraphQLUpload }
    }),
    MongooseModule.forRoot('mongodb+srv://root:El0o1OLJQRIsNOvp@mrtehran.xc53v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress()).forRoutes('graphql');
  }
}
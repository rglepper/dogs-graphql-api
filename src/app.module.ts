import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { join } from 'path';
import { DogsModule } from './dogs/dogs.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:u3J2gItSQbI7mXI6@presenter-kfpn3.mongodb.net/test?retryWrites=true&w=majority',
      {
        dbName: 'dogs',
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    DogsModule
  ],
  providers: [AppService],
})
export class AppModule {}

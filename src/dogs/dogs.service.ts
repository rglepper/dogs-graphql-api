import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dog } from './interface/dog.interface';


@Injectable()
export class DogsService {
	constructor(@InjectModel('Dog') private readonly dogModel: Model<Dog> ) {}
}

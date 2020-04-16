import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dog } from './interface/dog.interface';
import { DogInput } from './inputs/dog.input';


@Injectable()
export class DogsService {
	constructor(@InjectModel('Dog') private readonly dogModel: Model<Dog> ) {}

	async createDog(createDogDto: DogInput): Promise<Dog> {
		const dog = new this.dogModel(createDogDto);
		return await dog.save();
	}

	async getDogs(): Promise<Dog[]> {
		return await this.dogModel.find().exec();
	}
}

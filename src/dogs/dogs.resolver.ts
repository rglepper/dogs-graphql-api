import { Resolver, Query } from '@nestjs/graphql';
import { AppService } from '../app.service';

@Resolver()
export class DogsResolver {

	constructor(private readonly appService: AppService) {}


	@Query(() => String)
	async hello() {
		return this.appService.getHello();
	}
}

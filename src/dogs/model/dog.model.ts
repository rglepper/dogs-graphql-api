import { ObjectType, Field, ID, Int } from "@nestjs/graphql";

@ObjectType()
export class DogModel {
	@Field(() => ID)
	id: string;
	readonly name: string;
	@Field(type => Int)
	readonly age: number;
	readonly breed: string;
}


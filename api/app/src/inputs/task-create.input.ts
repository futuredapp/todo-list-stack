import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class TaskCreateInput {
    @Field(() => String)
    content: string
}

import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })
@ObjectType()
export class Todo extends Document {
    @Prop({ type: Boolean, default: false })
    @Field(() => Boolean)
    completed: Boolean;

    @Prop({ type: String, required: true })
    @Field(() => String)
    content: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

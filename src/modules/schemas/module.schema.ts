import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ModuleDocument = Module & Document;

@Schema()
export class Module {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  git_url!: string;

  @Prop([String])
  parents!: string[];
}

export const ModuleSchema = SchemaFactory.createForClass(Module);

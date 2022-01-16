export class CreateModuleDto {
  readonly name!: string;
  readonly git_url!: string;
  readonly parents!: string[];
}

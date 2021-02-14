import handlebars from 'handlebars';
import fs from 'fs';
import { privateEncrypt } from 'crypto';

interface ITemplateVariable {
  [key: string]: string | number
}

interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariable;
}

export default class HandlebarsMailTemplate {
  public async parse({file, variables}: IParseMailTemplate): Promise<string> {

    const templateFileContent = await fs.promises.readFile(file, {encoding: 'utf-8'});

    console.log(templateFileContent)

    const parseTemplate = handlebars.compile(templateFileContent)

    return parseTemplate(variables)
  }
}

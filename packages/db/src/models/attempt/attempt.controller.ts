import { DataSource } from 'typeorm';
import { instanceToPlain } from 'class-transformer';

export const AttemptController = (dataSource:DataSource)=>({
  async attempt() {
    // const users = await CategoryRepository(dataSource).findAllCategory();
    // return <Category[]>instanceToPlain(category.map((category) => category));
  }
})

import { DataSource } from 'typeorm';
import { runSeeders } from 'typeorm-extension';
// import { createDataSource } from '../data-source.js';

class DB {
  AppDataSource!: DataSource;
  constructor() {
    // console.log('called');
  }

  async init(url: string) {
    try {
      /*    await (await createDataSource(url)).initialize().then(async (dataSource) => {
        this.AppDataSource = dataSource;
        await runSeeders(dataSource);
      }); */
    } catch (error) {
      return console.log(error);
    }
  }
}

// const db = new DB();
// export { db };

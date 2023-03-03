import { DataSource } from 'typeorm';
import { instanceToPlain } from 'class-transformer';
import { UserSession } from '../../entity/UserSession';
import { UserSessionRepository } from './userSession.repository';

export const UserSessionController =(dataSource:DataSource)=> ({
  async user(id: string) {
     return <UserSession | null>instanceToPlain(
      UserSessionRepository(dataSource)?.findOneBy({
        id
      })
    ); 
  },
  async saveNewUser(id: string) {
    return <UserSession | null>instanceToPlain(
      UserSessionRepository(dataSource)?.save({
        id
      })
    );
  },
  async getSummary(userId:string){
  return <{totalGames:number, totalScore:number}>instanceToPlain(UserSessionRepository(dataSource).getScoreSummary(userId))
    
  }
})

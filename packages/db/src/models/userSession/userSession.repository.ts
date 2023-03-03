import { DataSource } from 'typeorm';
import { UserSession } from '../../entity/UserSession.js';

export const UserSessionRepository = (dataSource:DataSource)=>dataSource?.getRepository(UserSession).extend({
    getScoreSummary(userId:string){
        return this.createQueryBuilder('user').select('COUNT(*)', 'totalGames').addSelect('SUM(games.score)','totalScore').leftJoin('user.games','games').where({
            id:userId
        }).getRawOne()
    }
});

import { Attempt } from "./entity/Attempt"
import { Game } from "./entity/Game"
import { Question } from "./entity/Question"
import { UserSession } from "./entity/UserSession"
import { AttemptFactory, GameFactory, QuestionFactory, UserSessionFactory } from "./factories/index.js"
import { AttemptSeeder, GameSeeder, QuestionSeeder, UserSessionSeeder } from "./seeders/index.js"

 const config={entities: [
  UserSession,Question, Attempt, Game
],
factories: [UserSessionFactory, QuestionFactory, AttemptFactory, GameFactory],
seeds:[ UserSessionSeeder,QuestionSeeder, AttemptSeeder, GameSeeder]
}

export default config

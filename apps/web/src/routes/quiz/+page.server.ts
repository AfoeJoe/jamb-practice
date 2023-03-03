import { GameController, QuestionController } from '$lib/server';
import { AppDataSource } from '$lib/server/data-source';
import type { ESubject } from '$lib/utils';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
  const res = await QuestionController(AppDataSource).summary();
  return {
    summary: QuestionController(AppDataSource).summary()
    // summary: []
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const subject = <ESubject>formData.get('subject');
    const userId = locals.userId;
    const res = await GameController(AppDataSource).initGame(subject, userId);
    console.log({ res });
    // throw redirect(303, `${base}/quiz/${res.questions[0].slug}`);
    return { ...res, subject };
    // goto('/quiz/' + subject);
  }
};

export const csr = true
export const prerender = false;
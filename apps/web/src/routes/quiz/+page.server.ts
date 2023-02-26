import { base } from '$app/paths';
import { GameController, QuestionController } from '$lib/server';
import type { ESubject } from '$lib/utils';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
  const res = await QuestionController.summary();
  return {
    summary: QuestionController.summary()
    // summary: []
  };
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const formData = await request.formData();
    const subject = <ESubject>formData.get('subject');
    const userId = locals.userId;
    const res = await GameController.initGame(subject, userId);
    console.log({ res });
    // throw redirect(303, `${base}/quiz/${res.questions[0].slug}`);
    return { ...res, subject };
    // goto('/quiz/' + subject);
  }
};

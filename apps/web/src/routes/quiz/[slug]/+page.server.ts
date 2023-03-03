import { AppDataSource } from '$lib/server/data-source.js';
import { GameController } from '$lib/server';
import type { CheckAnswerDTO } from '$lib/utils';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
  return { locals };
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries()) as unknown as CheckAnswerDTO;

    return { answerId: await GameController(AppDataSource).getAnswer(data), selected: +data.selected };
  }
};

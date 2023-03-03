import { AppDataSource } from '$lib/server/data-source';
import { UserSessionController } from 'db/src/models';
import type { PageServerLoad } from './$types';

export const load = (async ({locals}) => {
  return UserSessionController(AppDataSource).getSummary(locals.userId);
}) satisfies PageServerLoad;

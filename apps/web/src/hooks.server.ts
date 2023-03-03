import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
import { getUserId } from '$lib/utils';
import { AppDataSource, initDB } from '$lib/server/data-source.js';
import { UserSessionController } from '$lib/server';
import './reflect-metadata.js';

if(!building){
	await initDB()
} 

export const handle = (async ({ event, resolve }) => {
  if (!event.locals.userId) {
    const newId = await getUserId(event.cookies);
    await UserSessionController(AppDataSource).saveNewUser(newId);
    event.locals.userId = newId;
  }
  return resolve(event);
}) satisfies Handle;

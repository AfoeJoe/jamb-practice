import { DATABASE_URL } from '$env/static/private';
import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
import { getUserId } from '$lib/utils';
import { UserController } from 'db/src/models';

if (!building) {
  // await db.init(DATABASE_URL);
}

export const handle = (async ({ event, resolve }) => {
  if (!event.locals.userId) {
    const newId = await getUserId(event.cookies);
    await UserController.saveNewUser(newId);
    event.locals.userId = newId;
  }
  return resolve(event);
}) satisfies Handle;

import type { Cookies } from '@sveltejs/kit';

export async function getUserId(cookies: Cookies) {
  let id = cookies.get('userId');

  if (!id) {
    id = crypto.randomUUID();

    const date = new Date();
    date.setMonth(5);
    cookies.set('userId', id, { path: '/', maxAge: 24 * 60 * 60 });
  }

  
  return id;
}

export function getClassName(
  index: number,
  correct: number | undefined,
  selected: number | undefined
) {
  switch (true) {
    case correct === selected && index === selected:
      return 'green';

    case index === selected:
      return 'red';

    default:
      return 'light';
  }
}

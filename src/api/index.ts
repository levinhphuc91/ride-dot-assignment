import { DOG_CEO_API } from '../constant';

export const GET = async (path: string): Promise<any> => {
  return await fetch(
    `${DOG_CEO_API}/${path}`
  ).then((res) => res.json())
};
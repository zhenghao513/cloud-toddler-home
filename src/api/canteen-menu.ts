export interface CookbookRes {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export function queryCookbook() {
  return axios.get('/cookbook');
}

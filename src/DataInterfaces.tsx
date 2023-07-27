export interface Banner {
  id: number;
  roles: {
    id: number;
    roleName: string;
    created: string;
    banner: number;
  }[];
  tagLine: string;
  plainText: string;
  created: string;
}

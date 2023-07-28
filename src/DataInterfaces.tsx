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

export interface Skill {
  id: number;
  skillPercentage: number;
  stopColor1: string;
  stopColor2: string;
  skillName: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  tabIndex: number;
}

interface Link {
  text: string;
  url: string;
}

interface List {
  price: number;
  text: string;
  req: boolean;
}
export interface Services {
  _id?: string;
  title?: string;
  text?: string;
  price?: string;
  list?: [List];
}
interface IUser {
  name: string;
  phone: string;
  email: string;
}
interface Timegate {
  start: Date;
  end: Date;
}
interface Reservations {
  user: IUser;
  service: string;
  timegate: Timegate;
}
interface Events {
  time: Date;
  title: string;
  description: string;
}
interface Days {
  date: Date;
  reservations: [Reservations];
  events: [Events];
}
interface Month {
  month: number;
  days: [Days];
}
interface Year {
  year: number;
  months: [Month];
}

export interface Block {
  block_type: string;
  text?: [string];
  list?: [string];
  links?: Link;
  services?: [Services];
  years?: [Year];
}
export interface Template {
  header: string;
  title: string;
}
export interface Stat {
  date: Date;
  day: number;
  month: number;
  year: number;
  visits?: number;
}
export interface User {
  firstname?: string;
  lastname?: string;
  fullname?: string;
  username: string;
  email?: string;
  phone?: string;
  _id: string;
  password: string;
  activated: boolean;
  stats: Stat[];
}

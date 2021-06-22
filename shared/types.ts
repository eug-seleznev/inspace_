interface Link {
  text: string;
  url: string;
}

interface List {
  price?: number;
  text?: string;
  req?: boolean;
}
export interface Services {
  _id?: string;
  title?: string;
  text?: string;
  price?: string;
  list?: [List];
}
export interface ReserveUser {
  name: string;
  phone: string;
  email: string;
}
interface Timegate {
  start: number;
  end: number;
}
export interface Reservations {
  user: ReserveUser;
  service: Services;
  timegate: Timegate;
}
interface Events {
  time: Date;
  title: string;
  description: string;
}
interface Days {
  _id?: string;
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
  date_locale: string;
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
  password: string;
  activated: boolean;
  stats: [Stat];
}

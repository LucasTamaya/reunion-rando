export interface RegisterValues {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginValues {
  email: string;
  password: string;
}

export type UserRoles = "particulier" | "prestataire";

export interface LoginApiResponse {
  isError: boolean;
  role: UserRoles;
}

export interface Hikes {
  name: string;
}

export interface NewActivityValues {
  title: string;
  location: string;
  price: number;
  description: string;
}

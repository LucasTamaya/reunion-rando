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

export interface LoginApiResponse {
  isError?: boolean;
  role?: "particulier" | "prestataire";
}

export interface UserRoles {
  role: "particulier" | "prestataire";
}

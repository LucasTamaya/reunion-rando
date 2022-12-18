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

export type UserRoles = 'particulier' | 'prestataire';

export interface LoginApiResponse {
  isError: boolean;
  role: UserRoles;
  id: string;
}

export interface Hikes {
  name: string;
}

export interface NewActivityValues {
  title: string;
  location: string;
  price: number;
  description: string;
  file: string | File;
  cloudinaryPublicId: string;
}

export interface UserRoleApiResponse {
  role: 'particulier' | 'prestataire';
}

export interface UserData {
  lastname: string;
  firstname: string;
  email: string;
  avatar: string;
}

export interface Activity {
  createdBy: UserData;
  description: string;
  id: string;
  location: string;
  price: number;
  title: string;
  userId: string;
  image_url: string;
  cloudinary_public_id: string;
}

export interface Activities {
  activities: Activity[] | [];
}

export interface CloudinaryResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  original_filename: string;
}

export interface User {
  id: string;
  lastname: string;
  firstname: string;
  email: string;
  avatar: string;
}

export interface ProviderUserApiResponse {
  providerUsers: User[];
}

export interface UpdateUserDataValues extends UserData {
  file?: string | File;
}

export interface UserProfileDataValues extends UserData {
  id: string;
}

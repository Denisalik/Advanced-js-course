export interface Credentials {
  username: string;
  password: string;
}

export interface CredentialsRegistration {
  username: string;
  email: string;
  password: string;
}

export interface Token {
  token: string;
}

export interface UserInfo {
  email: string;
  username: string;
  id: number;
  background: number;
  avatar: number;
  iat: number; //1650077974;
  exp: number; //1650164374;
  //exp - iat = 1 day in seconds
}

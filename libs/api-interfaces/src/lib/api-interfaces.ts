export interface Message {
  message: string;
}

export interface Token {
  token: string;
  createdAt: Date;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface User_details {
  id: number;
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
  company: string;
  location: string;
  email: string | "vazio";
  blog: string;
  twitter_username: string;
  repos_url: string;
}

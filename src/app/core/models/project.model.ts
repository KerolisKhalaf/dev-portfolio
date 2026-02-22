export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage?: string | null;
  fork?: boolean;
  stargazers_count: number;
  language: string;
  topics?: string[];
  updated_at: string;
}
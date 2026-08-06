import { siteConfig } from "@/config/site";

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
}

export interface GithubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export async function getGithubUser(): Promise<GithubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${siteConfig.githubUsername}`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch Github user", error);
    return null;
  }
}

export async function getGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100&sort=updated`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return [];
    
    let repos: GithubRepo[] = await res.json();
    
    // Filter by selectedRepos if array is not empty
    if (siteConfig.selectedRepos && siteConfig.selectedRepos.length > 0) {
      repos = repos.filter(repo => siteConfig.selectedRepos.includes(repo.name));
    }
    
    return repos;
  } catch (error) {
    console.error("Failed to fetch Github repos", error);
    return [];
  }
}

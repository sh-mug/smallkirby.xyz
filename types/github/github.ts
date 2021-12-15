export interface RepoBasicInfo {
  owner: string,
  reponame: string,
};

export interface LanguageOccupation {
  lang: string,
  ratio: number,
  lines?: number,
}
export interface RepositoryInfo {
  subscribers_count: number,
  forks: number,
  updated_at: Date,
  stargazers_count: number,
  total_commits: number,
  languages: LanguageOccupation[],
};
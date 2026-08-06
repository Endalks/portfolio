import { getGithubRepos, getGithubUser } from "@/lib/github";
import { ProjectsClient } from "./ProjectsClient";

export async function Projects() {
  const repos = await getGithubRepos();
  const user = await getGithubUser();

  return <ProjectsClient repos={repos} user={user} />;
}

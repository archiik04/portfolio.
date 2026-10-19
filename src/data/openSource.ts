export type ContributionStatus = 'Merged' | 'Open' | 'Closed';

export interface OpenSourceContribution {
  id: string;
  /** owner/repo, as shown under the PR title */
  repo: string;
  prTitle: string;
  prLink: string;
  status: ContributionStatus;
}

export const GITHUB_USERNAME = 'archiik04';

/**
 * Fallback list, used when the GitHub API is unreachable or rate-limited
 * (unauthenticated search allows only ~10 requests/hour per IP).
 * Keep roughly in sync with reality; live data supersedes it when available.
 */
export const contributions: OpenSourceContribution[] = [
  {
    id: 'podman-714',
    repo: 'containers/podman.io',
    prTitle: "fix: current time widget shows build time instead of visitor's time",
    prLink: 'https://github.com/containers/podman.io/pull/714',
    status: 'Merged',
  },
  {
    id: 'nebraska-1557',
    repo: 'flatcar/nebraska',
    prTitle: 'frontend: use stable keys for channel and version lists',
    prLink: 'https://github.com/flatcar/nebraska/pull/1557',
    status: 'Open',
  },
  {
    id: 'capuchin-153',
    repo: 'the-monkeys/capuchin',
    prTitle: 'gracefully handle db failures on startup',
    prLink: 'https://github.com/the-monkeys/capuchin/pull/153',
    status: 'Merged',
  },
  {
    id: 'capuchin-148',
    repo: 'the-monkeys/capuchin',
    prTitle: 'feat: frontend authentication and UI components',
    prLink: 'https://github.com/the-monkeys/capuchin/pull/148',
    status: 'Merged',
  },
  {
    id: 'capuchin-140',
    repo: 'the-monkeys/capuchin',
    prTitle: 'feat: frontend',
    prLink: 'https://github.com/the-monkeys/capuchin/pull/140',
    status: 'Merged',
  },
  {
    id: 'capuchin-136',
    repo: 'the-monkeys/capuchin',
    prTitle: 'Add editorconfig file',
    prLink: 'https://github.com/the-monkeys/capuchin/pull/136',
    status: 'Merged',
  },
  {
    id: 'capuchin-150',
    repo: 'the-monkeys/capuchin',
    prTitle: 'Gracefully handle DB connection failures on startup',
    prLink: 'https://github.com/the-monkeys/capuchin/pull/150',
    status: 'Closed',
  },
  {
    id: 'capuchin-146',
    repo: 'the-monkeys/capuchin',
    prTitle: 'feat: implement frontend with authentication and UI components',
    prLink: 'https://github.com/the-monkeys/capuchin/pull/146',
    status: 'Closed',
  },
];

export const contributionsProfile =
  'https://github.com/search?q=author%3Aarchiik04+type%3Apr&type=pullrequests';

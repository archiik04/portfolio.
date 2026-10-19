import { useEffect, useState } from 'react';
import {
  contributions as fallbackContributions,
  GITHUB_USERNAME,
  type OpenSourceContribution,
  type ContributionStatus,
} from '../data/openSource';

interface GitHubSearchItem {
  title: string;
  html_url: string;
  state: string;
  repository_url: string;
  pull_request?: { merged_at: string | null };
}

const CACHE_KEY = 'oss-contributions-v1';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 min — unauthenticated search is ~10 req/hour

const toStatus = (item: GitHubSearchItem): ContributionStatus => {
  if (item.pull_request?.merged_at) return 'Merged';
  return item.state === 'open' ? 'Open' : 'Closed';
};

const mapItems = (items: GitHubSearchItem[]): OpenSourceContribution[] =>
  items
    .map(item => {
      const repo = item.repository_url.replace('https://api.github.com/repos/', '');
      return {
        id: item.html_url,
        repo,
        prTitle: item.title,
        prLink: item.html_url,
        status: toStatus(item),
      };
    })
    // PRs to your own repos aren't really outside contributions
    .filter(c => !c.repo.toLowerCase().startsWith(`${GITHUB_USERNAME.toLowerCase()}/`));

export function useOpenSourceContributions() {
  const [data, setData] = useState<OpenSourceContribution[]>(fallbackContributions);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let active = true;

    const cached = (() => {
      try {
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as { at: number; items: OpenSourceContribution[] };
        return Date.now() - parsed.at < CACHE_TTL_MS ? parsed.items : null;
      } catch {
        return null;
      }
    })();

    if (cached?.length) {
      setData(cached);
      setIsLive(true);
      return;
    }

    (async () => {
      try {
        const res = await fetch(
          `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr&per_page=100&sort=updated&order=desc`,
          { headers: { Accept: 'application/vnd.github+json' } }
        );
        if (!res.ok) return; // rate-limited or offline — keep the fallback list

        const json = (await res.json()) as { items?: GitHubSearchItem[] };
        const mapped = mapItems(json.items ?? []);
        if (!active || mapped.length === 0) return;

        setData(mapped);
        setIsLive(true);
        try {
          sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), items: mapped }));
        } catch {
          /* storage unavailable — not fatal */
        }
      } catch {
        /* network error — the fallback list is already in state */
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return { contributions: data, isLive };
}

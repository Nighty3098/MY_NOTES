---
tags:
  - api_branches
---
### cURL
```bash
curl -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/OWNER/REPO/branches/BRANCH/rename \
  -d '{"new_name":"my_renamed_branch"}'
```

### JS
```js
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('POST /repos/{owner}/{repo}/branches/{branch}/rename', {
  owner: 'OWNER',
  repo: 'REPO',
  branch: 'BRANCH',
  new_name: 'my_renamed_branch',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
```

### Git Cli
```bash
# GitHub CLI api
# https://cli.github.com/manual/gh_api

gh api \
  --method POST \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/OWNER/REPO/branches/BRANCH/rename \
   -f "new_name=my_renamed_branch"
```
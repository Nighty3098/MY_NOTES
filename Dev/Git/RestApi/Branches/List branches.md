---
tags:
  - git_api
---
### cURL
```bash
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer <YOUR-TOKEN>" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/OWNER/REPO/branches
```

### JS
```js
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('GET /repos/{owner}/{repo}/branches', {
  owner: 'OWNER',
  repo: 'REPO',
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
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  /repos/OWNER/REPO/branches
```


# Output
```json
[
	{
	"name": "master",
	"commit": {
		"sha": "c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc",
		"url": "https://api.github.com/repos/octocat/Hello-World/commits/c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc"
	},
	"protected": true,
	"protection": {
		"required_status_checks": {
			"enforcement_level": "non_admins",
			"contexts": [ "ci-test", "linter" ]
		}
	},
	"protection_url": "https://api.github.com/repos/octocat/hello-world/branches/master/protection"
	}
]
```
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
  https://api.github.com/repos/OWNER/REPO/**readme**
```

### JS
```js
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('GET /repos/{owner}/{repo}/readme', {
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
  /repos/OWNER/REPO/readme
```



# Output
```json
{
	"type": "file",
	"encoding": "base64",
	"size": 5362,
	"name": "README.md",
	"path": "README.md",
	"content": "encoded content ...",
	"sha": "3d21ec53a331a6f037a91c368710b99387d012c1",
	"url": "https://api.github.com/repos/octokit/octokit.rb/contents/README.md",
	"git_url": "https://api.github.com/repos/octokit/octokit.rb/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1",
	"html_url": "https://github.com/octokit/octokit.rb/blob/master/README.md",
	"download_url": "https://raw.githubusercontent.com/octokit/octokit.rb/master/README.md",
	"_links": {
		"git": "https://api.github.com/repos/octokit/octokit.rb/git/blobs/3d21ec53a331a6f037a91c368710b99387d012c1",
		"self": "https://api.github.com/repos/octokit/octokit.rb/contents/README.md",
		"html": "https://github.com/octokit/octokit.rb/blob/master/README.md"
		}
}
```
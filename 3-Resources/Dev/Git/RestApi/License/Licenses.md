---
tags:
  - git_api
---

## cURL
```bash
curl -L \ -H "Accept: application/vnd.github+json" \ -H "Authorization: Bearer <YOUR-TOKEN>" \ -H "X-GitHub-Api-Version: 2022-11-28" \ https://api.github.com/licenses
```


## JS
```js
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('GET /licenses', {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
```

## Git Cli
```bash
# GitHub CLI api
# https://cli.github.com/manual/gh_api
gh api \ -H "Accept: application/vnd.github+json" \ -H "X-GitHub-Api-Version: 2022-11-28" \ /licenses
```



# Output
```json
[ 
	{ 
		"key": "mit",
		"name": "MIT License",
		"spdx_id": "MIT",
		"url": "https://api.github.com/licenses/mit",
		"node_id": "MDc6TGljZW5zZW1pdA=="
	},
	{
		"key": "lgpl-3.0",
		"name": "GNU Lesser General Public License v3.0",
		"spdx_id": "LGPL-3.0",
		"url": "https://api.github.com/licenses/lgpl-3.0",
		"node_id": "MDc6TGljZW5zZW1pdA=="
	},
	{
		"key": "mpl-2.0",
		"name": "Mozilla Public License 2.0",
		"spdx_id": "MPL-2.0",
		"url": "https://api.github.com/licenses/mpl-2.0",
		"node_id": "MDc6TGljZW5zZW1pdA=="
	},
	{
		"key": "agpl-3.0",
		"name": "GNU Affero General Public License v3.0",
		"spdx_id": "AGPL-3.0",
		"url": "https://api.github.com/licenses/agpl-3.0",
		"node_id": "MDc6TGljZW5zZW1pdA=="
	},
	{
		"key": "unlicense",
		"name": "The Unlicense",
		"spdx_id": "Unlicense",
		"url": "https://api.github.com/licenses/unlicense",
		"node_id": "MDc6TGljZW5zZW1pdA=="
	},
	{
		"key": "apache-2.0",
		"name": "Apache License 2.0",
		"spdx_id": "Apache-2.0",
		"url": "https://api.github.com/licenses/apache-2.0",
		"node_id": "MDc6TGljZW5zZW1pdA=="
	},
	{
		"key": "gpl-3.0",
		"name": "GNU General Public License v3.0",
		"spdx_id": "GPL-3.0",
		"url": "https://api.github.com/licenses/gpl-3.0",
		"node_id": "MDc6TGljZW5zZW1pdA=="
	}
]
```

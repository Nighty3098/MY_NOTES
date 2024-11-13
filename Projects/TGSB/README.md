---
tags:
  - Project
  - Repository
  - TGSB
---

![](https://github.com/Nighty3098/TGSB/blob/main/data%2Fheader.png?raw=true)

# TGSB - SMS bomber. TG bot service written in python and aiogram

### Functional:

For users
- BTN - "SMA spam"
- BTN - "Call spam"

For admins
* /adduser %user_id% - Add user to whitelist
* /removeuser %user_id% - Remove user from whitelist
* /addadmin %admin_id% - Add admin
* /removeadmin %admin_id% - Remove admin
* /whitelist - Send whitelist

* BTN - "SMS spam"
* BTN - "Call cpam"

For creator

- /addadmin %admin_id% - Add adnim
- /removeadmin %admin_id% - Remove admin
- /adduser %user_id% - Add user to whitelist
- /removeuser %user_id% - Remove user from whitelist
- /whitelist - Send whitelist
- /block %user_id% - Block user
- /unblock %user_id% - Unblock user

- BTN - "Service control" :
1. BTN - "sys stats"
2. BTN - "logs"
3. BTN - "clear log"
4. BTN - "off"
5. BTN - "on"

- BTN - "SMS spam"
- BTN - "Call cpam"

### Structure
```json
.
├── config.py
├── create_requirements.sh
├── data
│   ├── data.json
│   └── names.txt
├── handlers.py
├── keyboards
│   ├── admin.py
│   ├── dev.py
│   ├── service.py
│   └── user.py
├── LICENSE
├── logs
│   └── TGSB.log
├── main.py
├── MESSAGES_TEXT.py
├── README.md
├── requirements.txt
├── spam
│   ├── gen_user_data.py
│   ├── mask.py
│   ├── proxy.py
│   └── spam.py
└── validate.py
```


### Installing

```bash
git clone https://github.com/Nighty3098/TGSB 
cd TGSB

python3 -m venv TGSB
source TGSB/bin/activate

pip3 install -r requirements.txt

TGSB_TOKEN=%bot_token% python3 main.py
```
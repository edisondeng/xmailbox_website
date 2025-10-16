#!/bin/bash
export NVM_DIR="/home/edison/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

cd /home/xtell_projects_dev/77_XMAILBOX/website/NextJS/xmailbox.cn
npm start


(function () {
  'use strict';

  // ═══════════════════════════════════════════════
  //  DAY COUNT MAP  (badge key → number of days)
  // ═══════════════════════════════════════════════
  const dayCount = {
    day1: 1, day2: 1, day3: 1,
    'linux-basics': 2, 'linux-process': 2, 'linux-net': 2, 'bash-script': 2, 'bash-practice': 2,
    'git-basics': 2, 'git-branch': 1, 'git-collab': 1, 'git-infra': 1,
    'python-basics': 3, 'python-devops': 2, 'go-intro': 2,
    'net-osi': 1, 'net-dns': 1, 'net-lb': 1, 'net-trouble': 1, 'net-cloud': 1,
    'cloud-fund': 2, 'aws-core': 2, 'aws-serverless': 2, 'cfn': 2, 'aws-cost': 2,
    'docker-cli': 2, 'dockerfile': 2, 'compose': 1, 'docker-proj': 2,
    'k8s-arch': 2, 'k8s-obj': 2, 'k8s-net': 2, 'helm': 2, 'k8s-proj': 2,
    'cicd-concepts': 2, 'gha': 3, 'argocd': 2, 'cicd-opt': 1,
    'tf': 3, 'ansible': 2, 'iac-proj': 2,
    'prom': 2, 'grafana': 1, 'loki': 2,
    'sec-scan': 2, 'vault': 1, 'policy': 2,
    'ai-copilot': 1, 'ai-infra': 1, 'ai-opt': 1,
    'capstone': 5
  };

  // Module → badge keys
  const modules = {
    fundamentals: ['day1', 'day2', 'day3'],
    linux: ['linux-basics', 'linux-process', 'linux-net', 'bash-script', 'bash-practice'],
    git: ['git-basics', 'git-branch', 'git-collab', 'git-infra'],
    programming: ['python-basics', 'python-devops', 'go-intro'],
    networking: ['net-osi', 'net-dns', 'net-lb', 'net-trouble', 'net-cloud'],
    cloud: ['cloud-fund', 'aws-core', 'aws-serverless', 'cfn', 'aws-cost'],
    docker: ['docker-cli', 'dockerfile', 'compose', 'docker-proj'],
    kubernetes: ['k8s-arch', 'k8s-obj', 'k8s-net', 'helm', 'k8s-proj'],
    cicd: ['cicd-concepts', 'gha', 'argocd', 'cicd-opt'],
    iac: ['tf', 'ansible', 'iac-proj'],
    monitoring: ['prom', 'grafana', 'loki'],
    devsecops: ['sec-scan', 'vault', 'policy'],
    ai: ['ai-copilot', 'ai-infra', 'ai-opt'],
    capstone: ['capstone']
  };

  const monthKeys = {
    month1: ['fundamentals', 'linux', 'git', 'programming', 'networking'],
    month2: ['cloud', 'docker', 'kubernetes', 'cicd'],
    month3: ['iac', 'monitoring', 'devsecops', 'ai', 'capstone']
  };

  // Ordered list of all badge keys for prev/next
  const allKeys = Object.keys(dayCount);

  // ═══════════════════════════════════════════════
  //  ENRICHED RESOURCE DATABASE
  // ═══════════════════════════════════════════════
  const R = (title, url) => `<a class="resource-link" href="${url}" target="_blank" rel="noopener">${title}</a>`;

  const resourceDB = {
    day1: `<h3>📅 Day 1 · DevOps Fundamentals & CALMS</h3>
      <p><strong>📄 Articles & Guides:</strong></p>
      ${R('Atlassian: CALMS framework explained', 'https://www.atlassian.com/devops/frameworks/calms-framework')}
      ${R('DevOps Unchained: AI, Platforms & 2026 overhaul', 'https://www.webpronews.com/devops-unchained-ai-platforms-and-the-2026-overhaul-of-software-delivery/')}
      ${R('DevOps Complete Guide & Cheatsheet 2026', 'https://dargslan.com/blog/devops-complete-guide-cheatsheet-2026-cicd-docker-kubernetes-terraform')}
      ${R('Roadmap.sh: DevOps Roadmap (visual)', 'https://roadmap.sh/devops')}
      ${R('AWS: What is DevOps?', 'https://aws.amazon.com/devops/what-is-devops/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('TechWorld with Nana: DevOps in 5 Minutes', 'https://www.youtube.com/watch?v=0yWAtQ6wYNM')}
      ${R('FreeCodeCamp: DevOps Engineering Course (3hr)', 'https://www.youtube.com/watch?v=j5Zsa_eOXeY')}
      ${R('IBM: What is DevOps?', 'https://www.youtube.com/watch?v=UbtB4sMaaNM')}
      <p><strong>📚 Books:</strong></p>
      ${R('The Phoenix Project (must-read novel)', 'https://www.goodreads.com/book/show/17255186-the-phoenix-project')}
      ${R('The DevOps Handbook (2nd Edition)', 'https://www.goodreads.com/book/show/26083308-the-devops-handbook')}
      <p><strong>📊 Diagram:</strong> <a href="https://www.atlassian.com/devops" target="_blank">DevOps lifecycle (infinity loop) – Atlassian</a></p>
      <p><strong>🧠 Mindset:</strong> DevOps = Culture + Automation + Measurement + Sharing. It's not a tool — it's a way of working.</p>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Draw the DevOps infinity loop from memory</li>
        <li>List 5 ways CALMS applies to your current team</li>
        <li>Compare traditional IT vs DevOps delivery timelines</li>
        <li>Write a 1-page summary: "Why DevOps matters for my organization"</li>
      </ul>`,

    day2: `<h3>📅 Day 2 · DevOps Roles & Responsibilities</h3>
      <p><strong>📄 Articles:</strong></p>
      ${R('Atlassian: DevOps Engineer role overview', 'https://www.atlassian.com/devops')}
      ${R('Roadmap.sh: DevOps Roadmap 2026', 'https://roadmap.sh/devops')}
      ${R('SRE vs DevOps: What\'s the difference?', 'https://cloud.google.com/blog/products/devops-sre/sre-vs-devops-competing-standards-or-close-friends')}
      ${R('Glassdoor: DevOps Engineer role & salary trends', 'https://www.glassdoor.co.in/Salaries/devops-engineer-salary-SRCH_KO0,15.htm')}
      ${R('Platform Engineering vs DevOps', 'https://platformengineering.org/blog/what-is-platform-engineering')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('Fireship: DevOps in 100 Seconds', 'https://www.youtube.com/watch?v=scEDHsr3APg')}
      ${R('KodeKloud: DevOps Prerequisites Course (free)', 'https://kodekloud.com/courses/devops-pre-requisite-course/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Provision → Deploy → Observe lifecycle</li>
        <li>DevOps Engineer vs SRE vs Platform Engineer</li>
        <li>The Three Ways: Flow, Feedback, Continuous Learning</li>
        <li>Shift-left: testing & security early in the pipeline</li>
        <li>Everything as Code: infrastructure, config, policy, docs</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Map your current workflow to the Three Ways</li>
        <li>Identify bottlenecks in your delivery pipeline</li>
        <li>Create a skills matrix: rate yourself 1-5 on each DevOps domain</li>
      </ul>`,

    day3: `<h3>📅 Day 3 · Collaboration & Culture</h3>
      <p><strong>📄 Articles & References:</strong></p>
      ${R('Gene Kim: The Three Ways (IT Revolution)', 'https://itrevolution.com/articles/')}
      ${R('Google DORA Metrics & Team Performance', 'https://dora.dev/')}
      ${R('DORA: State of DevOps Report 2024', 'https://dora.dev/research/2024/dora-report/')}
      ${R('PagerDuty: Blameless Postmortem Guide', 'https://postmortems.pagerduty.com/culture/blameless/')}
      ${R('Spotify Engineering Culture (video)', 'https://www.youtube.com/watch?v=4GK1NDTWbkY')}
      ${R('Netflix Culture Deck', 'https://jobs.netflix.com/culture')}
      <p><strong>📚 Essential Books:</strong></p>
      ${R('The Phoenix Project (DevOps novel)', 'https://www.goodreads.com/book/show/17255186-the-phoenix-project')}
      ${R('Accelerate: Building High-Performing Orgs', 'https://www.goodreads.com/book/show/35747076-accelerate')}
      ${R('Team Topologies (org design for DevOps)', 'https://teamtopologies.com/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Blameless postmortems & psychological safety</li>
        <li>DORA metrics: deployment frequency, lead time, MTTR, change failure rate</li>
        <li>Breaking down silos between Dev and Ops</li>
        <li>Team Topologies: stream-aligned, platform, enabling, complicated-subsystem</li>
        <li>Value Stream Mapping: visualize your delivery pipeline</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Write a mock blameless postmortem for a fictional outage</li>
        <li>Calculate your team's DORA metrics baseline</li>
        <li>Create a Value Stream Map for a feature from idea → production</li>
        <li>Draft a team working agreement for your DevOps culture</li>
      </ul>`,

    'linux-basics': `<h3>🐧 Days 4‑5 · Linux Filesystem & Basics</h3>
      <p><strong>📄 Tutorials & Guides:</strong></p>
      ${R('Linux Journey – Interactive Tutorial', 'https://linuxjourney.com/')}
      ${R('Baeldung: Filesystem Hierarchy Standard', 'https://www.baeldung.com/linux/fhs-filesystem-hierarchy-standard-structure')}
      ${R('Linux Command Line (William Shotts, free book)', 'https://linuxcommand.org/tlcl.php')}
      ${R('Linux Survival (interactive terminal)', 'https://linuxsurvival.com/')}
      ${R('OverTheWire: Bandit (hands‑on Linux)', 'https://overthewire.org/wargames/bandit/')}
      <p><strong>🧪 Hands-on Labs:</strong></p>
      ${R('OverTheWire: Bandit (levels 0-33)', 'https://overthewire.org/wargames/bandit/')}
      ${R('KodeKloud: Linux for Beginners (free)', 'https://kodekloud.com/courses/the-linux-basics-course/')}
      ${R('Linux Upskill Challenge (GitHub)', 'https://github.com/livialima/linuxupskillchallenge')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('FreeCodeCamp: Linux for Beginners (5.5hr)', 'https://www.youtube.com/watch?v=sWbUDq4S6Y8')}
      ${R('NetworkChuck: Linux for Hackers', 'https://www.youtube.com/watch?v=VbEx7B_PTOE')}
      <p><strong>📋 Cheatsheets:</strong></p>
      ${R('Linux Commands Cheatsheet (DevHints)', 'https://devhints.io/bash')}
      ${R('TLDR Pages — simplified man pages', 'https://tldr.sh/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>/etc, /var, /home, /tmp, /opt directory purposes</li>
        <li>File permissions: chmod, chown, umask, SUID/SGID</li>
        <li>Essential commands: ls, cd, cp, mv, find, grep, awk, sed</li>
        <li>Pipe & redirection: |, >, >>, 2>&1</li>
        <li>Package managers: apt, yum/dnf, pacman</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Complete Bandit levels 0–15 on OverTheWire</li>
        <li>Navigate the FHS: find config files for nginx, ssh, cron</li>
        <li>Chain 3+ commands using pipes (e.g., find + grep + wc)</li>
      </ul>`,

    'linux-process': `<h3>🐧 Days 6‑7 · Processes & Permissions</h3>
      <p><strong>📄 Guides:</strong></p>
      ${R('Linux Journey: Processes', 'https://linuxjourney.com/')}
      ${R('DigitalOcean: Process Management Guide', 'https://www.digitalocean.com/community/tutorials/process-management-in-linux')}
      ${R('Systemd for Developers (Lennart Poettering)', 'https://0pointer.de/blog/projects/systemd-for-admins-1.html')}
      ${R('DigitalOcean: Systemd Essentials', 'https://www.digitalocean.com/community/tutorials/systemd-essentials-working-with-services-units-and-the-journal')}
      ${R('Linux Handbook: Cron Jobs Guide', 'https://linuxhandbook.com/crontab/')}
      <p><strong>🛠️ Tools:</strong></p>
      ${R('htop — interactive process viewer', 'https://htop.dev/')}
      ${R('btop — modern resource monitor', 'https://github.com/aristocratos/btop')}
      ${R('glances — system monitoring at a glance', 'https://github.com/nicolargo/glances')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>ps aux, top, htop — process inspection</li>
        <li>kill, nice, renice — process control & priority</li>
        <li>systemd/systemctl: start, stop, enable, status, journalctl</li>
        <li>Background/foreground: nohup, &, jobs, fg, bg</li>
        <li>Cron jobs: crontab -e, scheduling syntax (* * * * *)</li>
        <li>File descriptors, /proc filesystem</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Write a systemd service file for a custom script</li>
        <li>Schedule a cron job that runs every 5 minutes</li>
        <li>Use journalctl to debug a failed service</li>
        <li>Monitor system resources with htop during a stress test</li>
      </ul>`,

    'linux-net': `<h3>🐧 Days 8‑9 · Linux Networking</h3>
      <p><strong>📄 Guides & References:</strong></p>
      ${R('A to Z of Networking (GitHub)', 'https://github.com/iam-veeramalla/a-to-z-of-networking')}
      ${R('Linux Network Commands Cheatsheet', 'https://www.cyberciti.biz/networking/nmap-command-examples-tutorials/')}
      ${R('DigitalOcean: Linux Networking Basics', 'https://www.digitalocean.com/community/tutorials/an-introduction-to-networking-terminology-interfaces-and-protocols')}
      ${R('SSH Essentials (DigitalOcean)', 'https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys')}
      ${R('Firewall with UFW (Ubuntu)', 'https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-22-04')}
      <p><strong>🛠️ Tools:</strong></p>
      ${R('mtr — network diagnostic tool', 'https://github.com/traviscross/mtr')}
      ${R('nmap — network scanner', 'https://nmap.org/')}
      ${R('Wireshark — packet analyzer', 'https://www.wireshark.org/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>ip addr, ip route, netstat, ss</li>
        <li>iptables/nftables & UFW firewall basics</li>
        <li>SSH key-based auth: ssh-keygen, ssh-copy-id, ssh config file</li>
        <li>/etc/hosts, /etc/resolv.conf, /etc/nsswitch.conf</li>
        <li>Port forwarding, NAT, bridging</li>
        <li>curl, wget for HTTP testing</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Generate SSH key pair and configure password-less login</li>
        <li>Set up UFW to allow only SSH and HTTP</li>
        <li>Use tcpdump to capture and analyze 50 packets</li>
      </ul>`,

    'bash-script': `<h3>📜 Days 10‑11 · Bash Scripting</h3>
      <p><strong>📄 Guides & References:</strong></p>
      ${R('Bash Scripting Guide for DevOps (dev.to)', 'https://dev.to/devopsfreelance_pro/guia-definitiva-de-bash-scripting-para-automatizacion-devops-4al')}
      ${R('Advanced Bash Scripting Guide (TLDP)', 'https://tldp.org/LDP/abs/html/')}
      ${R('Bash Reference Manual (GNU)', 'https://www.gnu.org/software/bash/manual/')}
      ${R('Google Shell Style Guide', 'https://google.github.io/styleguide/shellguide.html')}
      ${R('Pure Bash Bible (GitHub)', 'https://github.com/dylanaraps/pure-bash-bible')}
      <p><strong>🧪 Interactive Practice:</strong></p>
      ${R('Exercism: Bash Track', 'https://exercism.org/tracks/bash')}
      ${R('HackerRank: Linux Shell Challenges', 'https://www.hackerrank.com/domains/shell')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('FreeCodeCamp: Bash Scripting Tutorial', 'https://www.youtube.com/watch?v=tK9Oc6AEnR4')}
      <p><strong>🛠️ Tools:</strong></p>
      ${R('ShellCheck — bash script linter', 'https://www.shellcheck.net/')}
      ${R('explainshell.com — parse any command', 'https://explainshell.com/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Variables, loops (for, while), conditionals (if/elif/else)</li>
        <li>Functions, exit codes, error handling (set -euo pipefail)</li>
        <li>String manipulation, arrays, parameter expansion</li>
        <li>Command substitution: $(command) and backticks</li>
        <li>Here documents (<<EOF), here strings (<<<)</li>
        <li>trap for cleanup on script exit</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Write a backup script with rotation and logging</li>
        <li>Run ShellCheck on all your scripts and fix warnings</li>
        <li>Write a script following Google's Shell Style Guide</li>
      </ul>`,

    'bash-practice': `<h3>🛠️ Days 12‑13 · Script Practice</h3>
      <p><strong>📄 References:</strong></p>
      ${R('Shell scripts for DevOps (Stackademic)', 'https://blog.stackademic.com/shell-scripts-that-could-be-useful-for-devops-engineers-to-complete-day-to-day-operations-d53b21029332')}
      ${R('DevOps Bash scripts collection (GitHub)', 'https://github.com/awesome-lists/awesome-bash')}
      ${R('Linux Sysadmin Interview Questions', 'https://github.com/chassing/linux-sysadmin-interview-questions')}
      <p><strong>🛠️ Useful CLI Tools to Explore:</strong></p>
      ${R('jq — command-line JSON processor', 'https://stedolan.github.io/jq/')}
      ${R('yq — YAML processor (like jq)', 'https://github.com/mikefarah/yq')}
      ${R('fzf — fuzzy finder for terminal', 'https://github.com/junegunn/fzf')}
      ${R('tmux — terminal multiplexer', 'https://github.com/tmux/tmux')}
      <p><strong>🎯 Projects (build all of these):</strong></p>
      <ul>
        <li>System health-check script (CPU, memory, disk, uptime)</li>
        <li>Log parser: extract errors from /var/log and send email alert</li>
        <li>Automated user provisioning: create users from a CSV file</li>
        <li>Deployment script with rollback capability</li>
        <li>Server hardening script (SSH config, UFW, fail2ban)</li>
        <li>Disk usage reporter with threshold alerts</li>
      </ul>
      <p><strong>💡 Tips:</strong></p>
      <ul>
        <li>Always start with: <code>#!/bin/bash</code> and <code>set -euo pipefail</code></li>
        <li>Use functions to keep scripts modular</li>
        <li>Add logging with timestamps to every script</li>
        <li>Use ShellCheck before committing any bash script</li>
      </ul>`,

    'git-basics': `<h3>📦 Days 14‑15 · Git Fundamentals</h3>
      <p><strong>📄 Interactive & Hands-on:</strong></p>
      ${R('Learn Git Branching — visual interactive sandbox', 'https://learngitbranching.js.org/')}
      ${R('GitHub Skills — official guided exercises', 'https://skills.github.com/')}
      ${R('Atlassian Git Tutorials — visual walkthroughs', 'https://www.atlassian.com/git/tutorials')}
      <p><strong>📚 Reference & Deep Reading:</strong></p>
      ${R('Pro Git Book (complete, free)', 'https://git-scm.com/book/en/v2')}
      ${R('Git Reference Manual (official)', 'https://git-scm.com/docs')}
      ${R('Git Cheatsheet — GitHub Education', 'https://education.github.com/git-cheat-sheet-education.pdf')}
      <p><strong>🎬 Video:</strong></p>
      ${R('FreeCodeCamp: Git & GitHub for Beginners (1hr)', 'https://www.youtube.com/watch?v=RGOj5yH7evk')}
      ${R('TechWorld with Nana: Git Tutorial for DevOps', 'https://www.youtube.com/watch?v=evknSAkUIh4')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Git internals: objects (blob, tree, commit), refs, HEAD</li>
        <li>Staging area workflow: add → commit → push</li>
        <li>git log, diff, stash, reset, revert</li>
        <li>Working with .gitignore — use templates for your language/tooling</li>
        <li>Tagging: lightweight vs annotated tags</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Initialize a repo, make 5 commits with meaningful messages</li>
        <li>Use git log --oneline --graph to visualize history</li>
        <li>Practice stash, pop, and applying stashes</li>
        <li>Experiment with git reset --soft, --mixed, --hard</li>
      </ul>`,

    'git-branch': `<h3>🌿 Day 16 · Branching & Merging</h3>
      <p><strong>📄 Articles & Guides:</strong></p>
      ${R('Atlassian: Comparing Git Workflows', 'https://www.atlassian.com/git/tutorials/comparing-workflows')}
      ${R('Atlassian: Merge vs Rebase', 'https://www.atlassian.com/git/tutorials/merging-vs-rebasing')}
      ${R('GitGraph: Branch Strategies with Mermaid', 'https://blogs.reliablepenguin.com/2026/01/31/gitgraph-for-release-and-branch-strategy-with-mermaid')}
      ${R('Trunk Based Development', 'https://trunkbaseddevelopment.com/')}
      ${R('A successful Git branching model (GitFlow original)', 'https://nvie.com/posts/a-successful-git-branching-model/')}
      <p><strong>🎬 Video:</strong></p>
      ${R('Fireship: Git Branching in 100 Seconds', 'https://www.youtube.com/watch?v=HVsySz-h9r4')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>GitFlow vs GitHub Flow vs Trunk‑Based Development</li>
        <li>Merge vs Rebase: when to use each</li>
        <li>Interactive rebase: git rebase -i for cleaning history</li>
        <li>Cherry-picking: apply specific commits across branches</li>
        <li>Conflict resolution strategies & tools (VS Code merge editor)</li>
        <li>Fast-forward vs 3-way merge</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Create feature, develop, and main branches</li>
        <li>Simulate a merge conflict and resolve it</li>
        <li>Practice interactive rebase to squash 3 commits into 1</li>
      </ul>`,

    'git-collab': `<h3>🤝 Day 17 · Pull Requests & Code Review</h3>
      <p><strong>📄 Guides:</strong></p>
      ${R('GitHub Flow guide', 'https://docs.github.com/en/get-started/quickstart/github-flow')}
      ${R('Google: How to do Code Reviews', 'https://google.github.io/eng-practices/review/')}
      ${R('GitHub: About Pull Requests', 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests')}
      ${R('Conventional Commits specification', 'https://www.conventionalcommits.org/')}
      ${R('GitHub: Managing Branch Protection Rules', 'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-a-branch-protection-rule')}
      <p><strong>🛠️ Tools:</strong></p>
      ${R('pre-commit: Git Hook Framework', 'https://pre-commit.com/')}
      ${R('Danger JS — automated code review', 'https://danger.systems/js/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Writing effective PR descriptions with context</li>
        <li>Review best practices & constructive feedback</li>
        <li>Branch protection rules & required reviews</li>
        <li>Signed commits for security (GPG / SSH)</li>
        <li>Git hooks: pre-commit, pre-push for automated checks</li>
        <li>CODEOWNERS file for automatic review assignment</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Set up a repo with branch protection on main</li>
        <li>Create a PR with a meaningful description and get it reviewed</li>
        <li>Configure a pre-commit hook that runs a linter</li>
      </ul>`,

    'git-infra': `<h3>🏗️ Day 18 · Git for Infrastructure (GitOps)</h3>
      <p><strong>📄 Articles & Guides:</strong></p>
      ${R('GitOps Workflows (OneUptime)', 'https://oneuptime.com/blog/post/2026-01-24-gitops-workflows/view')}
      ${R('Weaveworks: GitOps Principles', 'https://www.weave.works/technologies/gitops/')}
      ${R('OpenGitOps Specification', 'https://opengitops.dev/')}
      ${R('Harness: GitOps Best Practices', 'https://www.harness.io/blog/gitops-best-practices')}
      ${R('Codefresh: GitOps Guide', 'https://codefresh.io/learn/gitops/')}
      <p><strong>🛠️ Tools to Explore:</strong></p>
      ${R('ArgoCD — declarative GitOps for K8s', 'https://argo-cd.readthedocs.io/')}
      ${R('Flux CD — GitOps toolkit', 'https://fluxcd.io/')}
      ${R('git-crypt — transparent file encryption in Git', 'https://github.com/AGWA/git-crypt')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Declarative infrastructure in Git repos</li>
        <li>Pull‑based vs push‑based deployment</li>
        <li>Git as the single source of truth for cluster state</li>
        <li>Repo structure: monorepo vs multi-repo for GitOps</li>
        <li>Handling secrets in Git repos (sealed-secrets, SOPS, git-crypt)</li>
        <li>Drift detection and automated reconciliation</li>
      </ul>
      <p><strong>💡 Advanced:</strong></p>
      <ul>
        <li>git reflog — disaster recovery for lost commits</li>
        <li>git bisect — binary search to find breaking commits</li>
        <li>git worktree — work on multiple branches simultaneously</li>
      </ul>`,

    'python-basics': `<h3>🐍 Days 19‑21 · Python Basics</h3>
      <p><strong>📄 Interactive & Guides:</strong></p>
      ${R('LearnPython.org (interactive)', 'https://www.learnpython.org/')}
      ${R('Automate the Boring Stuff (free book)', 'https://automatetheboringstuff.com/')}
      ${R('Python Official Tutorial', 'https://docs.python.org/3/tutorial/')}
      ${R('Real Python — practical tutorials', 'https://realpython.com/')}
      <p><strong>🧪 Practice Platforms:</strong></p>
      ${R('Exercism: Python Track', 'https://exercism.org/tracks/python')}
      ${R('HackerRank: Python Challenges', 'https://www.hackerrank.com/domains/python')}
      ${R('LeetCode: Python problems', 'https://leetcode.com/problemset/all/?topicSlugs=python')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('FreeCodeCamp: Python for Beginners (4.5hr)', 'https://www.youtube.com/watch?v=rfscVS0vtbw')}
      ${R('Corey Schafer: Python Tutorials', 'https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Data types: str, int, float, list, dict, set, tuple</li>
        <li>Functions, args/kwargs, decorators</li>
        <li>File I/O, JSON/YAML handling</li>
        <li>Error handling: try/except/finally</li>
        <li>Virtual environments: venv, pip, requirements.txt</li>
        <li>List comprehensions, generators</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Build a CLI tool that reads a YAML config and outputs formatted JSON</li>
        <li>Write a script that parses Apache/Nginx logs and reports top IPs</li>
        <li>Create a simple REST API health checker</li>
      </ul>`,

    'python-devops': `<h3>⚙️ Days 22‑23 · Python for DevOps</h3>
      <p><strong>📄 Guides & References:</strong></p>
      ${R('Essential libraries: boto3, requests (XTestify)', 'https://www.xtestify.app/python-devops-automation-essential-libraries-scripts/')}
      ${R('Python for DevOps (O\'Reilly)', 'https://www.oreilly.com/library/view/python-for-devops/9781492057680/')}
      ${R('Boto3 Documentation (AWS SDK)', 'https://boto3.amazonaws.com/v1/documentation/api/latest/index.html')}
      ${R('Click — Python CLI framework', 'https://click.palletsprojects.com/')}
      ${R('Fabric — remote execution over SSH', 'https://www.fabfile.org/')}
      <p><strong>🛠️ Key Libraries:</strong></p>
      <ul>
        <li><strong>boto3</strong> — AWS SDK for Python</li>
        <li><strong>requests</strong> — HTTP calls to APIs</li>
        <li><strong>paramiko</strong> — SSH automation</li>
        <li><strong>PyYAML</strong> — YAML config parsing</li>
        <li><strong>Click/Typer</strong> — build CLI tools</li>
        <li><strong>Jinja2</strong> — template engine (used by Ansible)</li>
        <li><strong>python-dotenv</strong> — environment variable management</li>
        <li><strong>subprocess</strong> — run shell commands from Python</li>
      </ul>
      <p><strong>🎯 Practice Projects:</strong></p>
      <ul>
        <li>AWS automation: list all EC2 instances, S3 buckets with boto3</li>
        <li>Build a Slack/Discord webhook notifier for alerts</li>
        <li>Write a Python script that provisions infrastructure via API</li>
        <li>Create a CLI tool using Click that manages Docker containers</li>
      </ul>`,

    'go-intro': `<h3>🐹 Days 24‑25 · Go Basics</h3>
      <p><strong>📄 Official & Interactive:</strong></p>
      ${R('A Tour of Go (official interactive)', 'https://go.dev/tour/')}
      ${R('Go by Example — annotated programs', 'https://gobyexample.com/')}
      ${R('Go Playground — run Go in browser', 'https://go.dev/play/')}
      ${R('Effective Go (official style guide)', 'https://go.dev/doc/effective_go')}
      <p><strong>🧪 Practice:</strong></p>
      ${R('Exercism: Go Track', 'https://exercism.org/tracks/go')}
      ${R('Gophercises — coding exercises in Go', 'https://gophercises.com/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('FreeCodeCamp: Learn Go (6.5hr)', 'https://www.youtube.com/watch?v=un6ZyFkqFKo')}
      ${R('TechWorld with Nana: Go Tutorial for DevOps', 'https://www.youtube.com/watch?v=yyUHQIec83I')}
      <p><strong>🧠 Why Go for DevOps:</strong></p>
      <ul>
        <li>Kubernetes, Docker, Terraform — all written in Go</li>
        <li>Static binaries — zero runtime dependencies</li>
        <li>Excellent concurrency with goroutines & channels</li>
        <li>Fast compilation, great standard library</li>
        <li>Built-in testing framework</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Write a CLI tool that checks API health endpoints</li>
        <li>Build a simple HTTP server with Go's net/http</li>
        <li>Create a concurrent file downloader using goroutines</li>
      </ul>`,

    'net-osi': `<h3>🌐 Day 26 · OSI / TCP‑IP Model</h3>
      <p><strong>📄 Articles & Guides:</strong></p>
      ${R('Cloudflare: What is the OSI Model?', 'https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/')}
      ${R('Networking for DevOps (WebAsha)', 'https://www.webasha.com/blog/networking-for-devops-what-is-networking-for-devops-and-why-is-it-important')}
      ${R('Cloudflare: TCP vs UDP', 'https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/')}
      ${R('Subnetting Made Easy (Practical Networking)', 'https://www.practicalnetworking.net/stand-alone/subnetting-mastery/')}
      ${R('CIDR.xyz — visual subnet calculator', 'https://cidr.xyz/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('NetworkChuck: Networking Full Course', 'https://www.youtube.com/watch?v=qiQR5rTSshw')}
      ${R('ByteByteGo: OSI Model Explained', 'https://www.youtube.com/watch?v=0y6FtKsg6J4')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>7 OSI layers: Physical → Application</li>
        <li>TCP vs UDP: reliability vs speed tradeoffs</li>
        <li>IP addressing: IPv4, IPv6, private vs public</li>
        <li>Subnetting basics & CIDR notation (/24, /16, etc.)</li>
        <li>3-way handshake: SYN, SYN-ACK, ACK</li>
        <li>Common ports: 22 (SSH), 80 (HTTP), 443 (HTTPS), 53 (DNS)</li>
      </ul>`,

    'net-dns': `<h3>🔁 Day 27 · DNS & HTTP</h3>
      <p><strong>📄 Guides:</strong></p>
      ${R('How DNS Works (interactive comic)', 'https://howdns.works/')}
      ${R('MDN: HTTP Overview', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview')}
      ${R('Cloudflare: What is DNS?', 'https://www.cloudflare.com/learning/dns/what-is-dns/')}
      ${R('MDN: HTTP Status Codes Reference', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status')}
      ${R('Cloudflare: What is TLS/SSL?', 'https://www.cloudflare.com/learning/ssl/what-is-ssl/')}
      ${R('HTTP/2 vs HTTP/3 Explained', 'https://www.cloudflare.com/learning/performance/http2-vs-http1.1/')}
      <p><strong>🛠️ Tools:</strong></p>
      ${R('dog — modern DNS client (like dig)', 'https://github.com/ogham/dog')}
      ${R('httpie — modern HTTP client', 'https://httpie.io/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>DNS resolution chain: stub → recursive → root → TLD → authoritative</li>
        <li>Record types: A, AAAA, CNAME, MX, TXT, NS, SOA</li>
        <li>HTTP methods: GET, POST, PUT, PATCH, DELETE</li>
        <li>Status codes: 2xx success, 3xx redirect, 4xx client, 5xx server</li>
        <li>TLS/SSL handshake, certificates, Let's Encrypt</li>
        <li>HTTP/2 multiplexing, HTTP/3 QUIC protocol</li>
      </ul>`,

    'net-lb': `<h3>⚖️ Day 28 · Load Balancers & Reverse Proxies</h3>
      <p><strong>📄 Guides:</strong></p>
      ${R('NGINX: Layer 4 vs Layer 7 Load Balancing', 'https://www.nginx.com/resources/glossary/layer-4-load-balancing/')}
      ${R('HAProxy vs NGINX vs Envoy comparison', 'https://www.nginx.com/blog/nginx-vs-haproxy/')}
      ${R('DigitalOcean: Understanding NGINX as Reverse Proxy', 'https://www.digitalocean.com/community/tutorials/understanding-nginx-http-proxying-load-balancing-buffering-and-caching')}
      ${R('Envoy Proxy Documentation', 'https://www.envoyproxy.io/docs/')}
      ${R('Traefik — cloud-native reverse proxy', 'https://doc.traefik.io/traefik/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('ByteByteGo: Load Balancer Explained', 'https://www.youtube.com/watch?v=sCR3SAVdyCc')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>L4 (transport) vs L7 (application) load balancing</li>
        <li>Algorithms: round-robin, least connections, IP hash, weighted</li>
        <li>Health checks: active vs passive</li>
        <li>Sticky sessions vs stateless design</li>
        <li>SSL/TLS termination at the load balancer</li>
        <li>NGINX vs HAProxy vs Envoy vs Traefik — when to use each</li>
      </ul>
      <p><strong>🎯 Practice:</strong> Set up NGINX as a reverse proxy for 2 backend servers with health checks</p>`,

    'net-trouble': `<h3>🛜 Day 29 · Troubleshooting</h3>
      <p><strong>📄 Guides:</strong></p>
      ${R('Sysadmin Skills Test (GitHub)', 'https://github.com/trimstray/test-your-sysadmin-skills')}
      ${R('Julia Evans: Networking Zines', 'https://jvns.ca/categories/networking/')}
      ${R('Brendan Gregg: Linux Performance', 'http://www.brendangregg.com/linuxperf.html')}
      <p><strong>🛠️ Troubleshooting Toolkit:</strong></p>
      ${R('mtr — traceroute + ping combined', 'https://github.com/traviscross/mtr')}
      ${R('Wireshark — packet analyzer', 'https://www.wireshark.org/')}
      ${R('curl Cookbook — HTTP debugging examples', 'https://catonmat.net/cookbooks/curl')}
      <p><strong>🧠 Essential Commands:</strong></p>
      <ul>
        <li><code>ping</code>, <code>traceroute</code>, <code>mtr</code> — connectivity testing</li>
        <li><code>dig</code>, <code>nslookup</code> — DNS resolution debugging</li>
        <li><code>curl -v</code> — verbose HTTP debugging with headers</li>
        <li><code>tcpdump -i eth0 port 80</code> — packet capture</li>
        <li><code>netstat -tuln</code>, <code>ss -tuln</code> — listening ports</li>
        <li><code>lsof -i :8080</code> — which process uses a port</li>
        <li><code>openssl s_client</code> — TLS certificate debugging</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Debug a "connection refused" vs "connection timeout" scenario</li>
        <li>Use dig to trace full DNS resolution path</li>
        <li>Capture HTTP traffic with tcpdump, analyze in Wireshark</li>
      </ul>`,

    'net-cloud': `<h3>☁️ Day 30 · Cloud Networking</h3>
      <p><strong>📄 Guides:</strong></p>
      ${R('AWS VPC Documentation', 'https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html')}
      ${R('AWS Networking Fundamentals (YouTube)', 'https://www.youtube.com/watch?v=hiKPPy584Mg')}
      ${R('DigitalOcean: VPC Networking', 'https://docs.digitalocean.com/products/networking/vpc/')}
      ${R('Cloudflare: What is a VPN?', 'https://www.cloudflare.com/learning/access-management/what-is-a-vpn/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>VPC: your private virtual network in the cloud</li>
        <li>Subnets: public (internet-facing) vs private (internal only)</li>
        <li>Route tables: control traffic flow between subnets</li>
        <li>Internet Gateway vs NAT Gateway</li>
        <li>Security Groups (stateful) vs NACLs (stateless)</li>
        <li>VPC Peering, Transit Gateway, PrivateLink</li>
        <li>Elastic IP, Elastic Load Balancer (ALB/NLB)</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Design a VPC with 2 public + 2 private subnets across 2 AZs</li>
        <li>Set up a NAT Gateway for private subnet internet access</li>
        <li>Configure Security Groups: web tier → app tier → DB tier</li>
      </ul>`,

    'cloud-fund': `<h3>☁️ Days 31‑32 · Cloud Fundamentals</h3>
      <p><strong>📄 Official & Guides:</strong></p>
      ${R('AWS Getting Started', 'https://aws.amazon.com/getting-started/')}
      ${R('AWS Well-Architected Framework', 'https://aws.amazon.com/architecture/well-architected/')}
      ${R('AWS Free Tier — what\'s included', 'https://aws.amazon.com/free/')}
      ${R('AWS Architecture Center', 'https://aws.amazon.com/architecture/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('FreeCodeCamp: AWS Cloud Practitioner (13hr)', 'https://www.youtube.com/watch?v=SOTamWNgDKc')}
      ${R('TechWorld with Nana: AWS for Beginners', 'https://www.youtube.com/watch?v=ZB5ONbD_SMY')}
      <p><strong>🧪 Hands-on:</strong></p>
      ${R('AWS Skill Builder (free labs)', 'https://skillbuilder.aws/')}
      ${R('AWS Workshops — hands-on tutorials', 'https://workshops.aws/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Regions & Availability Zones (AZs)</li>
        <li>Shared responsibility model: AWS vs your security</li>
        <li>Service models: IaaS, PaaS, SaaS, FaaS</li>
        <li>AWS Global Infrastructure overview</li>
        <li>Key services: EC2, S3, RDS, Lambda, VPC, IAM</li>
      </ul>`,

    'aws-core': `<h3>🔐 Days 33‑34 · EC2, S3, IAM</h3>
      <p><strong>📄 Documentation:</strong></p>
      ${R('EC2 User Guide', 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html')}
      ${R('S3 User Guide', 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html')}
      ${R('AWS IAM Best Practices', 'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html')}
      ${R('EC2 Roles & S3 Access Lab (Pluralsight)', 'https://www.pluralsight.com/labs/aws/using-ec2-roles-and-instance-profiles-in-aws')}
      ${R('IAM Policy Simulator', 'https://policysim.aws.amazon.com/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('StephaneMaarek: EC2 Fundamentals', 'https://www.youtube.com/watch?v=iHX-jtKIVNA')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>EC2: instance types, AMIs, key pairs, security groups</li>
        <li>S3: buckets, objects, versioning, lifecycle policies</li>
        <li>IAM: users, groups, roles, policies (JSON), MFA</li>
        <li>Least privilege principle for IAM</li>
        <li>Instance metadata service (IMDS v2)</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Launch an EC2 instance, SSH in, install nginx</li>
        <li>Create an S3 bucket with versioning and lifecycle rules</li>
        <li>Create an IAM role and attach it to EC2 for S3 access</li>
        <li>Test IAM Policy Simulator to validate permissions</li>
      </ul>`,

    'aws-serverless': `<h3>📡 Days 35‑36 · Lambda & RDS</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('Serverless Land — patterns & examples', 'https://serverlessland.com/')}
      ${R('AWS Lambda Developer Guide', 'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html')}
      ${R('AWS RDS User Guide', 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html')}
      ${R('DynamoDB — NoSQL fundamentals', 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('FreeCodeCamp: AWS Lambda Tutorial', 'https://www.youtube.com/watch?v=97q30JjEq9Y')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Lambda: event-driven, pay-per-invocation, cold starts</li>
        <li>Triggers: S3, API Gateway, SNS, SQS, CloudWatch Events</li>
        <li>RDS: managed relational DB (MySQL, PostgreSQL, Aurora)</li>
        <li>RDS: Multi-AZ, read replicas, automated backups</li>
        <li>Lambda layers, environment variables, timeout settings</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Create a Lambda triggered by S3 upload that processes an image</li>
        <li>Set up an RDS PostgreSQL instance in a private subnet</li>
        <li>Build a REST API: API Gateway → Lambda → DynamoDB</li>
      </ul>`,

    'cfn': `<h3>📜 Days 37‑38 · CloudFormation</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('CloudFormation User Guide', 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html')}
      ${R('CloudFormation Template Reference', 'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html')}
      ${R('cfn-lint: CloudFormation Linter', 'https://github.com/aws-cloudformation/cfn-lint')}
      ${R('Former2 — generate CFN from existing resources', 'https://former2.com/')}
      ${R('AWS CDK — define infra in code (TypeScript/Python)', 'https://docs.aws.amazon.com/cdk/v2/guide/home.html')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Template anatomy: Parameters, Resources, Outputs, Mappings</li>
        <li>Intrinsic functions: !Ref, !Sub, !GetAtt, !Join</li>
        <li>Stack operations: create, update, delete, drift detection</li>
        <li>Nested stacks for modular templates</li>
        <li>Change sets: preview changes before applying</li>
        <li>CloudFormation vs Terraform vs CDK — when to use each</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Write a CFN template for VPC + EC2 + Security Group</li>
        <li>Use Parameters for environment-specific values</li>
        <li>Add Outputs to export resource IDs</li>
        <li>Run cfn-lint to validate your template</li>
      </ul>`,

    'aws-cost': `<h3>💰 Days 39‑40 · Cost & IAM Security</h3>
      <p><strong>📄 Documentation & Tools:</strong></p>
      ${R('AWS Cost Management', 'https://aws.amazon.com/aws-cost-management/')}
      ${R('AWS Cost Explorer Guide', 'https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html')}
      ${R('AWS Pricing Calculator', 'https://calculator.aws/')}
      ${R('Infracost — cloud cost estimates in CI/CD', 'https://www.infracost.io/')}
      ${R('AWS Trusted Advisor — cost optimization', 'https://aws.amazon.com/premiumsupport/technology/trusted-advisor/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Cost Explorer: analyze spending trends</li>
        <li>Budgets & billing alerts: never get surprised</li>
        <li>Reserved Instances vs Savings Plans vs Spot</li>
        <li>Right-sizing: match instance types to workload</li>
        <li>S3 storage classes: Standard, IA, Glacier</li>
        <li>Tagging strategy for cost allocation</li>
        <li>IAM: Access Analyzer, credential reports, SCPs</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Set up a $10/month billing alert</li>
        <li>Use Cost Explorer to identify top spending services</li>
        <li>Implement least-privilege IAM with Access Analyzer</li>
        <li>Create a tagging policy for all resources</li>
      </ul>`,

    'docker-cli': `<h3>🐳 Days 41‑42 · Docker CLI Mastery</h3>
      <p><strong>📄 Official Documentation:</strong></p>
      ${R('Docker Get Started — official tutorial', 'https://docs.docker.com/get-started/')}
      ${R('Docker CLI Reference', 'https://docs.docker.com/engine/reference/commandline/docker/')}
      ${R('Docker CLI Cheatsheet (PDF)', 'https://docs.docker.com/get-started/docker_cheatsheet.pdf')}
      <p><strong>🧪 Interactive Labs:</strong></p>
      ${R('Play with Docker — free browser-based lab', 'https://labs.play-with-docker.com/')}
      ${R('KodeKloud: Docker for Beginners (hands-on)', 'https://kodekloud.com/courses/docker-for-the-absolute-beginner/')}
      ${R('DevOps with Docker — University of Helsinki (free)', 'https://devopswithdocker.com/')}
      <p><strong>🎬 Video Tutorials:</strong></p>
      ${R('TechWorld with Nana: Docker Tutorial', 'https://www.youtube.com/watch?v=3c-iBn73dDE')}
      ${R('Bret Fisher: Docker Mastery (Docker Captain)', 'https://www.bretfisher.com/docker/')}
      ${R('FreeCodeCamp: Docker Full Course (2hr)', 'https://www.youtube.com/watch?v=fqMOX6JJhGo')}
      <p><strong>🧠 Key Commands:</strong></p>
      <ul>
        <li><code>docker run</code> — create and start containers (-d, -p, -v, -e, --name)</li>
        <li><code>docker exec -it</code> — interactive shell into running container</li>
        <li><code>docker logs -f</code> — follow container logs</li>
        <li><code>docker inspect</code> — detailed container/image info (JSON)</li>
        <li><code>docker network ls/create</code> — manage container networking</li>
        <li><code>docker volume</code> — persistent data management</li>
        <li><code>docker system prune -a</code> — clean unused resources</li>
        <li><code>docker stats</code> — real-time resource usage</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Run nginx, redis, and postgres containers with exposed ports</li>
        <li>Use docker exec to inspect a running container's filesystem</li>
        <li>Create a custom bridge network and connect 2 containers</li>
        <li>Mount a host volume and verify data persistence</li>
      </ul>`,

    'dockerfile': `<h3>📄 Days 43‑44 · Dockerfile Best Practices</h3>
      <p><strong>📄 Guides & References:</strong></p>
      ${R('Dockerfile Best Practices (official Docker)', 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/')}
      ${R('Dockerfile Reference — all instructions', 'https://docs.docker.com/engine/reference/builder/')}
      ${R('Docker Best Practices (SFEIR)', 'https://institute.sfeir.com/fr/formation-kubernetes/bonnes-pratiques-conteneurisation-et-docker/')}
      ${R('Google: Best Practices for Building Containers', 'https://cloud.google.com/architecture/best-practices-for-building-containers')}
      ${R('Sysdig: Dockerfile Best Practices (security)', 'https://sysdig.com/blog/dockerfile-best-practices/')}
      <p><strong>📚 Deep Dive:</strong></p>
      ${R('Docker Multi-Stage Build Guide', 'https://docs.docker.com/build/building/multi-stage/')}
      ${R('Distroless Images (Google)', 'https://github.com/GoogleContainerTools/distroless')}
      ${R('Hadolint — Dockerfile Linter', 'https://github.com/hadolint/hadolint')}
      ${R('Dive — analyze Docker image layers', 'https://github.com/wagoodman/dive')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Multi‑stage builds: separate build-time from runtime dependencies</li>
        <li>Layer caching: order instructions for max cache hits</li>
        <li>.dockerignore: exclude unnecessary files from build context</li>
        <li>Non-root users: always run as non-privileged user</li>
        <li>Image size optimization: alpine/slim/distroless base images</li>
        <li>COPY vs ADD — prefer COPY for transparency</li>
        <li>Health checks with HEALTHCHECK instruction</li>
        <li>Labels for metadata (OCI image spec)</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Write a multi-stage Dockerfile for a Node.js app (build → runtime)</li>
        <li>Compare image sizes: ubuntu vs alpine vs distroless</li>
        <li>Use Dive to analyze and optimize layer sizes</li>
        <li>Run Hadolint on your Dockerfile to fix all warnings</li>
      </ul>`,

    'compose': `<h3>🧩 Day 45 · Docker Compose</h3>
      <p><strong>📄 Official & Guides:</strong></p>
      ${R('Docker Compose Getting Started', 'https://docs.docker.com/compose/gettingstarted/')}
      ${R('Compose File Reference (v3)', 'https://docs.docker.com/compose/compose-file/compose-file-v3/')}
      ${R('Awesome Compose — curated examples', 'https://github.com/docker/awesome-compose')}
      ${R('Docker Compose in 12 Minutes (video)', 'https://www.youtube.com/watch?v=Qw9zlE3t8Ko')}
      <p><strong>📚 Deep Dive:</strong></p>
      ${R('DigitalOcean: Docker Compose Tutorial', 'https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04')}
      ${R('Docker Compose Networking Guide', 'https://docs.docker.com/compose/networking/')}
      ${R('Compose profiles for dev/test/prod', 'https://docs.docker.com/compose/profiles/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Services, networks, volumes in compose.yaml</li>
        <li>depends_on with health check conditions</li>
        <li>Environment variables: .env files, variable substitution</li>
        <li>Health checks for service readiness</li>
        <li>Compose profiles for multi-environment setups</li>
        <li>Compose watch for development hot-reload</li>
        <li>Resource limits (cpu, memory) per service</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Build a 3-tier app: React frontend + Node API + PostgreSQL</li>
        <li>Add health checks and depends_on with conditions</li>
        <li>Use named volumes for database persistence</li>
        <li>Configure .env files for dev vs prod settings</li>
      </ul>`,

    'docker-proj': `<h3>🛠️ Days 46‑47 · Docker Project</h3>
      <p><strong>📦 Project Inspiration & References:</strong></p>
      ${R('Awesome Compose — 50+ sample projects', 'https://github.com/docker/awesome-compose')}
      ${R('Docker Samples on GitHub', 'https://github.com/dockersamples')}
      ${R('Voting App — Docker official microservices demo', 'https://github.com/dockersamples/example-voting-app')}
      ${R('Docker Security Cheat Sheet (OWASP)', 'https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html')}
      <p><strong>🛠️ Useful Tools:</strong></p>
      ${R('Portainer — Docker GUI management', 'https://www.portainer.io/')}
      ${R('Lazydocker — terminal UI for Docker', 'https://github.com/jesseduffield/lazydocker')}
      ${R('Watchtower — auto-update containers', 'https://github.com/containrrr/watchtower')}
      ${R('ctop — top-like interface for containers', 'https://github.com/bcicen/ctop')}
      <p><strong>🎯 Capstone Project:</strong> Full-stack containerized application</p>
      <ul>
        <li><strong>Frontend:</strong> React/Vue served by NGINX</li>
        <li><strong>Backend:</strong> Node.js or Python API with health endpoint</li>
        <li><strong>Database:</strong> PostgreSQL with init scripts and volume</li>
        <li><strong>Reverse Proxy:</strong> NGINX with SSL termination</li>
        <li><strong>Monitoring:</strong> Add cAdvisor for container metrics</li>
      </ul>
      <p><strong>📝 Checklist:</strong></p>
      <ul>
        <li>Multi-stage Dockerfiles for all services</li>
        <li>Non-root users in all containers</li>
        <li>.dockerignore configured for each service</li>
        <li>Health checks on all services</li>
        <li>Environment variables via .env file</li>
        <li>docker compose up -d runs everything in one command</li>
      </ul>`,

    'k8s-arch': `<h3>☸️ Days 48‑49 · K8s Architecture</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('Kubernetes Components (official)', 'https://kubernetes.io/docs/concepts/overview/components/')}
      ${R('K8s the Hard Way (Kelsey Hightower)', 'https://github.com/kelseyhightower/kubernetes-the-hard-way')}
      ${R('Kubernetes Architecture Explained', 'https://kubernetes.io/docs/concepts/architecture/')}
      ${R('Learnk8s: Kubernetes in Production', 'https://learnk8s.io/')}
      <p><strong>🧪 Interactive Labs:</strong></p>
      ${R('Play with Kubernetes — browser-based K8s', 'https://labs.play-with-k8s.com/')}
      ${R('KodeKloud: Kubernetes for Beginners', 'https://kodekloud.com/courses/kubernetes-for-the-absolute-beginners-hands-on/')}
      ${R('Killer.sh — CKA/CKAD practice environment', 'https://killer.sh/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('TechWorld with Nana: K8s Full Course (4hr)', 'https://www.youtube.com/watch?v=X48VuDVv0do')}
      ${R('FreeCodeCamp: Kubernetes Course', 'https://www.youtube.com/watch?v=d6WC5n9G_sM')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Control plane: API server, etcd, scheduler, controller manager</li>
        <li>Worker nodes: kubelet, kube-proxy, container runtime</li>
        <li>kubectl: the K8s CLI — get, describe, apply, delete, logs</li>
        <li>Declarative vs imperative management</li>
        <li>Namespaces for resource isolation</li>
        <li>minikube / kind / k3s for local development</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Set up a local cluster with minikube or kind</li>
        <li>Deploy nginx with kubectl run and kubectl expose</li>
        <li>Explore the cluster: kubectl get nodes, pods, services</li>
      </ul>`,

    'k8s-obj': `<h3>📦 Days 50‑51 · Pods, Services, Deployments</h3>
      <p><strong>📄 Documentation:</strong></p>
      ${R('K8s Basics Tutorial (official)', 'https://kubernetes.io/docs/tutorials/kubernetes-basics/')}
      ${R('Pods Documentation', 'https://kubernetes.io/docs/concepts/workloads/pods/')}
      ${R('Deployments Documentation', 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/')}
      ${R('Services & Networking', 'https://kubernetes.io/docs/concepts/services-networking/service/')}
      <p><strong>📋 Cheatsheets:</strong></p>
      ${R('kubectl Cheatsheet (official)', 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/')}
      ${R('Kubernetes YAML Templates (GitHub)', 'https://github.com/dennyzhang/kubernetes-yaml-templates')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Pod lifecycle: Pending → Running → Succeeded/Failed</li>
        <li>ReplicaSets: ensure desired number of pod replicas</li>
        <li>Deployments: rolling updates, rollback, scale</li>
        <li>Services: ClusterIP, NodePort, LoadBalancer, ExternalName</li>
        <li>Labels & selectors: how K8s links objects together</li>
        <li>Resource requests & limits (CPU, memory)</li>
        <li>Liveness & readiness probes</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Write a Deployment YAML for a web app with 3 replicas</li>
        <li>Expose it with a Service and test with port-forward</li>
        <li>Perform a rolling update and then rollback</li>
        <li>Add resource limits and readiness probes</li>
      </ul>`,

    'k8s-net': `<h3>🌐 Days 52‑53 · Ingress & Storage</h3>
      <p><strong>📄 Documentation:</strong></p>
      ${R('Kubernetes Ingress', 'https://kubernetes.io/docs/concepts/services-networking/ingress/')}
      ${R('NGINX Ingress Controller', 'https://kubernetes.github.io/ingress-nginx/')}
      ${R('Persistent Volumes', 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/')}
      ${R('ConfigMaps & Secrets', 'https://kubernetes.io/docs/concepts/configuration/')}
      ${R('cert-manager — automated TLS certificates', 'https://cert-manager.io/docs/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Ingress controllers (NGINX, Traefik) — L7 routing</li>
        <li>TLS termination with cert-manager + Let's Encrypt</li>
        <li>PV (PersistentVolume) & PVC (PersistentVolumeClaim)</li>
        <li>StorageClasses: dynamic provisioning</li>
        <li>ConfigMaps: externalize configuration</li>
        <li>Secrets: manage sensitive data (base64, not encrypted!)</li>
        <li>Network Policies: control pod-to-pod traffic</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Deploy NGINX Ingress Controller and route traffic to 2 services</li>
        <li>Create a PVC and mount it in a pod for persistent data</li>
        <li>Use ConfigMaps for app config and Secrets for DB passwords</li>
      </ul>`,

    'helm': `<h3>⎈ Days 54‑55 · Helm Charts</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('Helm Quickstart', 'https://helm.sh/docs/intro/quickstart/')}
      ${R('Helm Chart Template Guide', 'https://helm.sh/docs/chart_template_guide/')}
      ${R('Artifact Hub — chart registry', 'https://artifacthub.io/')}
      ${R('Helmfile — declarative Helm', 'https://github.com/helmfile/helmfile')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('TechWorld with Nana: Helm Tutorial', 'https://www.youtube.com/watch?v=-ykwb1d0DXU')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Charts: directory structure, Chart.yaml, values.yaml</li>
        <li>Templates: Go template syntax, {{ .Values.xxx }}</li>
        <li>Releases: install, upgrade, rollback, uninstall</li>
        <li>Repositories: adding, updating, searching</li>
        <li>Chart dependencies & subcharts</li>
        <li>Helm hooks for lifecycle management</li>
        <li>helm lint, helm template for local testing</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Create a custom Helm chart for your web app</li>
        <li>Use values.yaml for environment-specific overrides</li>
        <li>Deploy a chart, upgrade it, then rollback</li>
      </ul>`,

    'k8s-proj': `<h3>🚀 Days 56‑57 · Microservices Project</h3>
      <p><strong>📦 Reference Projects:</strong></p>
      ${R('Online Boutique — Google microservices demo', 'https://github.com/GoogleCloudPlatform/microservices-demo')}
      ${R('Podinfo — Go microservice for K8s', 'https://github.com/stefanprodan/podinfo')}
      ${R('Sock Shop — Weaveworks microservices demo', 'https://microservices-demo.github.io/')}
      <p><strong>🛠️ Useful K8s Tools:</strong></p>
      ${R('k9s — terminal UI for K8s', 'https://k9scli.io/')}
      ${R('Lens — K8s IDE (GUI)', 'https://k8slens.dev/')}
      ${R('kubectx/kubens — fast context switching', 'https://github.com/ahmetb/kubectx')}
      ${R('stern — multi-pod log tailing', 'https://github.com/stern/stern')}
      <p><strong>🎯 Capstone Project:</strong></p>
      <ul>
        <li>Deploy Online Boutique to a local cluster</li>
        <li>Customize one service: change code, rebuild image, redeploy</li>
        <li>Add HPA (Horizontal Pod Autoscaler) to a service</li>
        <li>Set up NGINX Ingress for external access</li>
        <li>Add Prometheus ServiceMonitor for metrics</li>
      </ul>`,

    'cicd-concepts': `<h3>🔄 Days 58‑59 · CI/CD Concepts</h3>
      <p><strong>📄 Articles & Guides:</strong></p>
      ${R('Red Hat: What is CI/CD?', 'https://www.redhat.com/en/topics/devops/what-is-ci-cd')}
      ${R('Martin Fowler: Continuous Integration', 'https://martinfowler.com/articles/continuousIntegration.html')}
      ${R('Martin Fowler: Continuous Delivery', 'https://martinfowler.com/bliki/ContinuousDelivery.html')}
      ${R('Atlassian: CI/CD Pipeline Guide', 'https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment')}
      ${R('CI/CD Pipeline: A Gentle Introduction (Semaphore)', 'https://semaphoreci.com/blog/cicd-pipeline')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('TechWorld with Nana: CI/CD Explained', 'https://www.youtube.com/watch?v=scEDHsr3APg')}
      ${R('IBM: CI/CD Pipeline', 'https://www.youtube.com/watch?v=S7K4zt0ZxWU')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>CI: Continuous Integration — build & test on every commit</li>
        <li>CD: Continuous Delivery vs Continuous Deployment</li>
        <li>Pipeline stages: Build → Test → Package → Deploy</li>
        <li>Artifact management: Docker registries, artifact repos</li>
        <li>Environment promotion: dev → staging → production</li>
        <li>Trunk-based development & feature flags</li>
        <li>Testing pyramid: unit → integration → E2E</li>
      </ul>`,

    'gha': `<h3>⚡ Days 60‑62 · GitHub Actions</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('GitHub Actions Documentation', 'https://docs.github.com/en/actions/learn-github-actions')}
      ${R('GitHub Actions Marketplace', 'https://github.com/marketplace?type=actions')}
      ${R('GitHub Actions Starter Workflows', 'https://github.com/actions/starter-workflows')}
      ${R('Awesome GitHub Actions (curated list)', 'https://github.com/sdras/awesome-actions')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('FreeCodeCamp: GitHub Actions Tutorial', 'https://www.youtube.com/watch?v=R8_veQiYBjI')}
      ${R('TechWorld with Nana: GitHub Actions CI/CD', 'https://www.youtube.com/watch?v=R8_veQiYBjI')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Workflow YAML syntax: on, jobs, steps, uses, run</li>
        <li>Triggers: push, pull_request, schedule, workflow_dispatch</li>
        <li>Runners: GitHub-hosted vs self-hosted</li>
        <li>Secrets & environment variables management</li>
        <li>Matrix builds for multi-version testing</li>
        <li>Reusable workflows & composite actions</li>
        <li>Caching dependencies for faster builds</li>
        <li>Artifacts: upload/download between jobs</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Build a CI pipeline: lint → test → build → push Docker image</li>
        <li>Add a matrix strategy for Node 18, 20, 22</li>
        <li>Set up caching for npm/pip dependencies</li>
        <li>Create a reusable workflow for Docker build + push</li>
      </ul>`,

    'argocd': `<h3>🔁 Days 63‑64 · GitOps with ArgoCD</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('ArgoCD Getting Started', 'https://argo-cd.readthedocs.io/en/stable/getting_started/')}
      ${R('ArgoCD User Guide', 'https://argo-cd.readthedocs.io/en/stable/user-guide/')}
      ${R('ArgoCD Best Practices', 'https://argo-cd.readthedocs.io/en/stable/user-guide/best_practices/')}
      ${R('Codefresh: ArgoCD Tutorial', 'https://codefresh.io/learn/argo-cd/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('TechWorld with Nana: ArgoCD Tutorial', 'https://www.youtube.com/watch?v=MeU5_k9ssrs')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Application CRD: define what to deploy from Git</li>
        <li>Sync policies: automated vs manual sync</li>
        <li>Auto-heal: revert manual cluster changes</li>
        <li>App-of-apps pattern: manage multiple apps</li>
        <li>ApplicationSet: template-based multi-cluster deploy</li>
        <li>RBAC: role-based access control in ArgoCD</li>
        <li>Health checks & sync status monitoring</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Install ArgoCD on a local cluster</li>
        <li>Deploy an app from a Git repo using the ArgoCD UI</li>
        <li>Enable auto-sync and test drift detection</li>
      </ul>`,

    'cicd-opt': `<h3>📈 Day 65 · Deployment Strategies</h3>
      <p><strong>📄 Articles & Guides:</strong></p>
      ${R('Martin Fowler: Blue/Green Deployment', 'https://martinfowler.com/bliki/BlueGreenDeployment.html')}
      ${R('Martin Fowler: Canary Release', 'https://martinfowler.com/bliki/CanaryRelease.html')}
      ${R('Flagger — progressive delivery for K8s', 'https://flagger.app/')}
      ${R('LaunchDarkly: Feature Flags Guide', 'https://launchdarkly.com/blog/what-are-feature-flags/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Blue/green: switch traffic between two environments</li>
        <li>Canary: gradually roll out to a percentage of users</li>
        <li>Rolling updates: replace pods incrementally (K8s default)</li>
        <li>Feature flags: decouple deployment from release</li>
        <li>A/B testing: data-driven feature validation</li>
        <li>Rollback strategies: automated vs manual</li>
      </ul>`,

    'tf': `<h3>🏗️ Days 66‑68 · Terraform</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('Terraform AWS Tutorial (official)', 'https://developer.hashicorp.com/terraform/tutorials/aws-get-started')}
      ${R('Terraform Best Practices', 'https://www.terraform-best-practices.com/')}
      ${R('Terraform Registry — providers & modules', 'https://registry.terraform.io/')}
      ${R('Terraform Associate Exam Study Guide', 'https://developer.hashicorp.com/terraform/tutorials/certification/associate-study')}
      <p><strong>🛠️ Tools:</strong></p>
      ${R('tflint — Terraform linter', 'https://github.com/terraform-linters/tflint')}
      ${R('Terragrunt — Terraform wrapper for DRY config', 'https://terragrunt.gruntwork.io/')}
      ${R('Infracost — cost estimation for Terraform', 'https://www.infracost.io/')}
      ${R('Checkov — IaC security scanner', 'https://www.checkov.io/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('FreeCodeCamp: Terraform Course (2.5hr)', 'https://www.youtube.com/watch?v=SLB_c_ayRMo')}
      ${R('TechWorld with Nana: Terraform Tutorial', 'https://www.youtube.com/watch?v=l5k1ai_GBDE')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>HCL syntax: resources, variables, outputs, locals</li>
        <li>Providers: AWS, Azure, GCP, Kubernetes</li>
        <li>State management: local vs remote (S3 + DynamoDB)</li>
        <li>Modules: reusable infrastructure components</li>
        <li>Workspaces: manage multiple environments</li>
        <li>terraform plan → apply → destroy lifecycle</li>
        <li>Data sources: query existing infrastructure</li>
        <li>count, for_each: dynamic resource creation</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Provision a VPC with public/private subnets in AWS</li>
        <li>Create a reusable module for EC2 instances</li>
        <li>Set up remote state with S3 backend</li>
        <li>Run tflint and Checkov on your Terraform code</li>
      </ul>`,

    'ansible': `<h3>📋 Days 69‑70 · Ansible</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('Ansible Getting Started (official)', 'https://docs.ansible.com/ansible/latest/getting_started/index.html')}
      ${R('Ansible Galaxy — reusable roles', 'https://galaxy.ansible.com/')}
      ${R('Ansible Best Practices', 'https://docs.ansible.com/ansible/latest/tips_tricks/ansible_tips_tricks.html')}
      ${R('Jeff Geerling: Ansible for DevOps (book)', 'https://www.ansiblefordevops.com/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('TechWorld with Nana: Ansible Tutorial', 'https://www.youtube.com/watch?v=1id6ERvfozo')}
      ${R('Jeff Geerling: Ansible 101 series', 'https://www.youtube.com/playlist?list=PL2_OBreMn7FqZkvMYt6ATFgC4MSPh-RMZ')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Playbooks: YAML-based automation scripts</li>
        <li>Inventory: static files or dynamic (AWS, GCP)</li>
        <li>Roles: reusable, modular playbook components</li>
        <li>Modules: apt, yum, copy, template, service, docker</li>
        <li>Variables: group_vars, host_vars, vault-encrypted</li>
        <li>Templates: Jinja2 for dynamic config generation</li>
        <li>Handlers: triggered tasks (restart services)</li>
        <li>Idempotency: run multiple times, same result</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Write a playbook to install nginx on 3 servers</li>
        <li>Use roles to organize your playbook</li>
        <li>Encrypt sensitive vars with ansible-vault</li>
        <li>Use a Jinja2 template for nginx.conf</li>
      </ul>`,

    'iac-proj': `<h3>🔧 Days 71‑72 · IaC Project</h3>
      <p><strong>📦 References:</strong></p>
      ${R('Terraform AWS Modules (community)', 'https://registry.terraform.io/namespaces/terraform-aws-modules')}
      ${R('Ansible + Terraform Integration Guide', 'https://developer.hashicorp.com/terraform/tutorials/provision/packer')}
      <p><strong>🎯 Full IaC Project:</strong></p>
      <ul>
        <li><strong>Terraform</strong>: VPC + subnets + EC2 + RDS + Security Groups</li>
        <li><strong>Ansible</strong>: install nginx + deploy app + configure monitoring</li>
        <li><strong>Integration</strong>: Terraform outputs → Ansible dynamic inventory</li>
      </ul>
      <p><strong>📝 Checklist:</strong></p>
      <ul>
        <li>Remote state in S3 with DynamoDB locking</li>
        <li>Modular Terraform: networking, compute, database modules</li>
        <li>Ansible roles: common, webserver, monitoring</li>
        <li>Secrets managed with ansible-vault</li>
        <li>README with architecture diagram</li>
        <li>Makefile or scripts for plan/apply/configure workflow</li>
      </ul>`,

    'prom': `<h3>📊 Days 73‑74 · Prometheus</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('Prometheus Overview (official)', 'https://prometheus.io/docs/introduction/overview/')}
      ${R('PromQL Examples', 'https://prometheus.io/docs/prometheus/latest/querying/examples/')}
      ${R('Prometheus Operator for K8s', 'https://github.com/prometheus-operator/prometheus-operator')}
      ${R('PromQL Cheatsheet', 'https://promlabs.com/promql-cheat-sheet/')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('TechWorld with Nana: Prometheus Tutorial', 'https://www.youtube.com/watch?v=QoDqxm7ybLc')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Metric types: counter, gauge, histogram, summary</li>
        <li>Scraping: pull-based model, scrape configs</li>
        <li>PromQL: rate(), increase(), histogram_quantile()</li>
        <li>Alerting rules & Alertmanager routing</li>
        <li>Recording rules for expensive queries</li>
        <li>Service discovery: static, K8s, consul</li>
        <li>Exporters: node-exporter, blackbox, custom metrics</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Deploy Prometheus with docker-compose or Helm</li>
        <li>Scrape node-exporter metrics for system monitoring</li>
        <li>Write 3 PromQL queries for CPU, memory, and errors</li>
        <li>Create an alerting rule for high CPU usage</li>
      </ul>`,

    'grafana': `<h3>📈 Day 75 · Grafana Dashboards</h3>
      <p><strong>📄 Documentation & Resources:</strong></p>
      ${R('Grafana Getting Started', 'https://grafana.com/docs/grafana/latest/getting-started/')}
      ${R('Grafana Dashboard Gallery', 'https://grafana.com/grafana/dashboards/')}
      ${R('Grafana Provisioning', 'https://grafana.com/docs/grafana/latest/administration/provisioning/')}
      ${R('Grafana as Code — Grafonnet/Jsonnet', 'https://grafana.github.io/grafonnet/index.html')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('TechWorld with Nana: Grafana Tutorial', 'https://www.youtube.com/watch?v=lILY8eSspEo')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Data sources: Prometheus, Loki, Elasticsearch, CloudWatch</li>
        <li>Panel types: time series, gauge, stat, table, heatmap</li>
        <li>Variables: dynamic dropdowns for filtering</li>
        <li>Alerting: Grafana Alerting rules with notification channels</li>
        <li>Dashboard provisioning: dashboards as code (JSON/YAML)</li>
        <li>Organizations, folders, permissions</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Build a Node Exporter dashboard with CPU, memory, disk</li>
        <li>Add template variables for server/namespace selection</li>
        <li>Import a community dashboard from Grafana Gallery</li>
        <li>Set up a Slack/email alert for disk usage > 80%</li>
      </ul>`,

    'loki': `<h3>📜 Days 76‑77 · Loki Log Aggregation</h3>
      <p><strong>📄 Documentation:</strong></p>
      ${R('Loki Quickstart (official)', 'https://grafana.com/docs/loki/latest/get-started/')}
      ${R('LogQL Query Language', 'https://grafana.com/docs/loki/latest/query/')}
      ${R('Promtail Configuration', 'https://grafana.com/docs/loki/latest/send-data/promtail/')}
      ${R('Grafana: Explore Logs', 'https://grafana.com/docs/grafana/latest/explore/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Log labels: how Loki indexes logs (like Prometheus labels)</li>
        <li>LogQL: {job="nginx"} |= "error" | json | rate()</li>
        <li>Promtail agent: ships logs from files to Loki</li>
        <li>Grafana integration: Explore view for log search</li>
        <li>Log-based alerting via Grafana or ruler</li>
        <li>Loki vs ELK: cost-effective, label-based indexing</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Deploy Loki + Promtail with docker-compose</li>
        <li>Ship nginx access/error logs to Loki</li>
        <li>Write LogQL queries to find errors, slow requests</li>
        <li>Create a Grafana dashboard combining metrics + logs</li>
      </ul>`,

    'sec-scan': `<h3>🔍 Days 78‑79 · Container Scanning</h3>
      <p><strong>📄 Documentation & Tools:</strong></p>
      ${R('Trivy Documentation', 'https://aquasecurity.github.io/trivy/latest/')}
      ${R('Snyk Container Security', 'https://snyk.io/product/container-vulnerability-management/')}
      ${R('Grype — vulnerability scanner', 'https://github.com/anchore/grype')}
      ${R('Syft — SBOM generator', 'https://github.com/anchore/syft')}
      ${R('Docker Scout — image analysis', 'https://docs.docker.com/scout/')}
      ${R('OWASP Docker Security Guide', 'https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>CVE scanning: find known vulnerabilities in images</li>
        <li>SBOM (Software Bill of Materials): know what's in your image</li>
        <li>CI/CD integration: scan before deploy, fail on critical CVEs</li>
        <li>Base image selection: minimal images reduce attack surface</li>
        <li>Distroless, Alpine, scratch: secure base images</li>
        <li>Image signing with cosign/Notary</li>
        <li>Runtime security: Falco for runtime threat detection</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Scan your Docker images with Trivy and fix critical CVEs</li>
        <li>Generate an SBOM with Syft</li>
        <li>Add Trivy to your GitHub Actions CI pipeline</li>
        <li>Compare scan results: ubuntu vs alpine vs distroless</li>
      </ul>`,

    'vault': `<h3>🔐 Day 80 · HashiCorp Vault</h3>
      <p><strong>📄 Documentation & Guides:</strong></p>
      ${R('Vault Getting Started (official)', 'https://developer.hashicorp.com/vault/tutorials/getting-started')}
      ${R('Vault Architecture', 'https://developer.hashicorp.com/vault/docs/internals/architecture')}
      ${R('External Secrets Operator for K8s', 'https://external-secrets.io/')}
      ${R('Mozilla SOPS — secrets in Git', 'https://github.com/getsops/sops')}
      <p><strong>🎬 Videos:</strong></p>
      ${R('TechWorld with Nana: Vault Tutorial', 'https://www.youtube.com/watch?v=E2_p4LKX3UM')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Secret engines: KV, database, AWS, transit</li>
        <li>Auth methods: token, LDAP, K8s, OIDC</li>
        <li>Policies: fine-grained access control (HCL)</li>
        <li>Dynamic secrets: short-lived DB credentials</li>
        <li>Transit encryption: encrypt data without storing it</li>
        <li>K8s integration: injector sidecar, CSI driver</li>
        <li>Seal/unseal process, auto-unseal</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Run Vault in dev mode and store/retrieve secrets</li>
        <li>Write a policy that grants read-only access to a path</li>
        <li>Set up K8s auth method for pod-based access</li>
      </ul>`,

    'policy': `<h3>📜 Days 81‑82 · Policy as Code</h3>
      <p><strong>📄 Documentation & Tools:</strong></p>
      ${R('OPA Documentation (official)', 'https://www.openpolicyagent.org/docs/latest/')}
      ${R('OPA Playground — test policies online', 'https://play.openpolicyagent.org/')}
      ${R('Kyverno (K8s-native policies)', 'https://kyverno.io/')}
      ${R('Gatekeeper — OPA for K8s', 'https://open-policy-agent.github.io/gatekeeper/')}
      ${R('Datree — K8s policy enforcement', 'https://www.datree.io/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>OPA: general-purpose policy engine</li>
        <li>Rego: OPA's policy language</li>
        <li>Kyverno: K8s-native policies (YAML-based, no Rego needed)</li>
        <li>Admission controllers: validate/mutate K8s resources</li>
        <li>Common policies: resource limits, labels, image registries</li>
        <li>Compliance as code: PCI-DSS, SOC2, HIPAA rules</li>
        <li>Policy testing and CI integration</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Write a Kyverno policy requiring resource limits on all pods</li>
        <li>Block images from untrusted registries</li>
        <li>Require specific labels on all deployments</li>
      </ul>`,

    'ai-copilot': `<h3>🤖 Day 83 · AI Copilots for DevOps</h3>
      <p><strong>📄 Tools & Resources:</strong></p>
      ${R('GitHub Copilot Docs', 'https://docs.github.com/en/copilot')}
      ${R('Amazon Q Developer (AWS AI assistant)', 'https://aws.amazon.com/q/developer/')}
      ${R('Google Gemini Code Assist', 'https://cloud.google.com/gemini/docs/code-assist/overview')}
      ${R('Cursor — AI-first code editor', 'https://cursor.sh/')}
      ${R('Aider — AI pair programming in terminal', 'https://aider.chat/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>AI-assisted Dockerfile & Terraform generation</li>
        <li>Prompt engineering for infrastructure code</li>
        <li>AI-powered log analysis and incident triage</li>
        <li>Code review with AI: security, performance, best practices</li>
        <li>Natural language to kubectl/terraform commands</li>
        <li>AI for writing runbooks and documentation</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Use Copilot to generate a Terraform module from comments</li>
        <li>Ask AI to review your Dockerfile for security issues</li>
        <li>Generate Ansible playbooks from natural language descriptions</li>
      </ul>`,

    'ai-infra': `<h3>🏗️ Day 84 · AI‑Assisted Infrastructure</h3>
      <p><strong>📄 Resources:</strong></p>
      ${R('K8sGPT — AI for Kubernetes debugging', 'https://k8sgpt.ai/')}
      ${R('Kubecost — K8s cost management', 'https://www.kubecost.com/')}
      ${R('Robusta — K8s observability with AI', 'https://home.robusta.dev/')}
      <p><strong>🎯 Practice Projects:</strong></p>
      <ul>
        <li>Generate Terraform modules with AI prompts — then validate and fix</li>
        <li>Auto-generate Ansible playbooks from natural language requirements</li>
        <li>Use K8sGPT to diagnose cluster issues automatically</li>
        <li>AI-driven cost optimization: review infrastructure for waste</li>
        <li>Create a troubleshooting runbook with AI assistance</li>
      </ul>
      <p><strong>💡 Best Practices:</strong></p>
      <ul>
        <li>Always review AI-generated code — never deploy blindly</li>
        <li>Use AI as a starting point, then iterate and customize</li>
        <li>Combine AI output with linters (tflint, hadolint, shellcheck)</li>
      </ul>`,

    'ai-opt': `<h3>⚡ Day 85 · Pipeline Optimization with AI</h3>
      <p><strong>📄 Resources:</strong></p>
      ${R('KEDA — event-driven autoscaling', 'https://keda.sh/')}
      ${R('Datadog: AIOps Features', 'https://www.datadoghq.com/solutions/aiops/')}
      ${R('PagerDuty: AIOps for Incident Management', 'https://www.pagerduty.com/platform/aiops/')}
      <p><strong>🧠 Key Concepts:</strong></p>
      <ul>
        <li>Detect flaky tests with ML-based analysis</li>
        <li>Predictive autoscaling using historical metrics (KEDA, VPA)</li>
        <li>AI-powered anomaly detection in production metrics/logs</li>
        <li>Intelligent alert routing and noise reduction (AIOps)</li>
        <li>Automated incident response runbooks</li>
        <li>ChatOps: AI bots for Slack/Teams incident management</li>
      </ul>
      <p><strong>🎯 Practice:</strong></p>
      <ul>
        <li>Set up KEDA to autoscale based on queue depth</li>
        <li>Configure intelligent alerting to reduce noise by 50%</li>
        <li>Build a ChatOps bot that reports deployment status</li>
      </ul>`,

    'capstone': `<h3>🎯 Days 86‑90 · Capstone Project</h3>
      <p><strong>📦 Reference Architectures:</strong></p>
      ${R('AWS EKS Best Practices', 'https://aws.github.io/aws-eks-best-practices/')}
      ${R('Kubernetes Production Best Practices', 'https://learnk8s.io/production-best-practices')}
      ${R('The Twelve-Factor App', 'https://12factor.net/')}
      ${R('draw.io — free architecture diagrams', 'https://app.diagrams.net/')}
      <p><strong>🏗️ Day-by-Day Plan:</strong></p>
      <ul>
        <li><strong>Day 86:</strong> Design architecture diagram (draw.io), define requirements, choose tech stack</li>
        <li><strong>Day 87:</strong> Terraform: provision VPC, EKS cluster, RDS, S3 with remote state</li>
        <li><strong>Day 88:</strong> Docker: containerize app with multi-stage builds, write Helm charts</li>
        <li><strong>Day 89:</strong> CI/CD: GitHub Actions pipeline → Docker build → ArgoCD deploy to K8s</li>
        <li><strong>Day 90:</strong> Monitoring: Prometheus + Grafana dashboards + Loki logs + PagerDuty alerting</li>
      </ul>
      <p><strong>📝 Deliverables Checklist:</strong></p>
      <ul>
        <li>Architecture diagram (cloud + K8s + CI/CD flow)</li>
        <li>GitHub repo with clean README and documentation</li>
        <li>Working demo: app deployed, accessible via Ingress</li>
        <li>Monitoring dashboard with metrics + logs</li>
        <li>CI/CD pipeline: commit → deploy in under 10 minutes</li>
        <li>Security scan results: Trivy report with no critical CVEs</li>
        <li>Cost estimate using Infracost or AWS Calculator</li>
        <li>5-minute presentation: architecture, decisions, lessons learned</li>
      </ul>
      <p><strong>💡 Tips for Success:</strong></p>
      <ul>
        <li>Start simple, iterate — don't try to build everything at once</li>
        <li>Document decisions and trade-offs in your README</li>
        <li>Use Git tags for milestones (v0.1, v0.2, v1.0)</li>
        <li>This project IS your portfolio — make it shine!</li>
      </ul>`
  };

  // ═══════════════════════════════════════════════
  //  STATE  (localStorage)
  // ═══════════════════════════════════════════════
  const STORAGE_KEY = 'devops90_progress';
  const THEME_KEY = 'devops90_theme';

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  }
  function saveProgress(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  let completed = loadProgress();
  let currentDayKey = null;

  // ═══════════════════════════════════════════════
  //  DOM REFERENCES
  // ═══════════════════════════════════════════════
  const modal = document.getElementById('dayModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = document.getElementById('closeModalBtn');
  const completeBtn = document.getElementById('markCompleteBtn');
  const prevBtn = document.getElementById('prevDayBtn');
  const nextBtn = document.getElementById('nextDayBtn');
  const searchInput = document.getElementById('searchInput');
  const themeToggle = document.getElementById('themeToggle');

  // ═══════════════════════════════════════════════
  //  THEME
  // ═══════════════════════════════════════════════
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem(THEME_KEY, theme);
  }
  const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ═══════════════════════════════════════════════
  //  SIDEBAR NAVIGATION
  // ═══════════════════════════════════════════════
  const sidebarItems = document.querySelectorAll('.sidebar-nav-item[data-target]');

  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        const headerOffset = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }

      // Update active state
      sidebarItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Track scroll to highlight current sidebar section
  const sectionTargets = [];
  sidebarItems.forEach(item => {
    const targetId = item.getAttribute('data-target');
    const el = document.getElementById(targetId);
    if (el) sectionTargets.push({ item, el });
  });

  let scrollTimeout;
  document.querySelector('.main-content')?.addEventListener('scroll', () => {
    // Not needed since we use window scroll
  });

  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      let currentSection = null;
      for (const section of sectionTargets) {
        const rect = section.el.getBoundingClientRect();
        if (rect.top <= 120) {
          currentSection = section;
        }
      }
      if (currentSection) {
        sidebarItems.forEach(i => i.classList.remove('active'));
        currentSection.item.classList.add('active');
      }
    }, 50);
  });

  // ═══════════════════════════════════════════════
  //  PROGRESS CALCULATIONS
  // ═══════════════════════════════════════════════
  function updateProgressUI() {
    let totalDone = 0;
    Object.keys(completed).forEach(k => { if (completed[k] && dayCount[k]) totalDone += dayCount[k]; });

    const pct = Math.round((totalDone / 90) * 100);
    document.getElementById('daysCompleted').textContent = totalDone;
    document.getElementById('percentComplete').textContent = pct + '%';
    document.getElementById('overallFill').style.width = pct + '%';

    // Modules completed
    let modDone = 0;
    Object.keys(modules).forEach(mod => {
      const keys = modules[mod];
      const allDone = keys.every(k => completed[k]);
      if (allDone) modDone++;
    });
    document.getElementById('modulesCompleted').textContent = modDone;

    // Per‑module progress bars + module card completed state
    document.querySelectorAll('.module-card').forEach(card => {
      const mod = card.getAttribute('data-module');
      if (!modules[mod]) return;
      const keys = modules[mod];
      const done = keys.filter(k => completed[k]).length;
      const fill = card.querySelector('.module-progress-fill');
      if (fill) fill.style.width = (done / keys.length * 100) + '%';

      // Add completed state to card
      card.classList.toggle('all-done', keys.every(k => completed[k]));
    });

    // Month progress
    Object.keys(monthKeys).forEach(mId => {
      const mods = monthKeys[mId];
      let mDone = 0, mTotal = 0;
      mods.forEach(mod => {
        modules[mod].forEach(k => {
          mTotal += dayCount[k];
          if (completed[k]) mDone += dayCount[k];
        });
      });
      const el = document.getElementById(mId.replace('month', 'm') + 'Progress');
      if (el) el.textContent = `${mDone}/${mTotal}`;
    });

    // Badge classes
    document.querySelectorAll('.day-badge').forEach(b => {
      const key = b.getAttribute('data-day');
      b.classList.toggle('completed', !!completed[key]);
    });

    // Update sidebar badges
    updateSidebarBadges();
  }

  function updateSidebarBadges() {
    const sidebarModules = document.querySelectorAll('.sidebar-nav-item[data-target^="mod-"]');
    sidebarModules.forEach(item => {
      const targetId = item.getAttribute('data-target');
      const modName = targetId.replace('mod-', '');
      if (!modules[modName]) return;

      const keys = modules[modName];
      const done = keys.filter(k => completed[k]).length;
      const total = keys.length;
      const badge = item.querySelector('.nav-badge');
      if (badge) {
        badge.textContent = `${done}/${total}`;
      }

      // Mark completed modules in sidebar
      item.classList.toggle('completed-module', done === total && total > 0);
    });
  }

  // ═══════════════════════════════════════════════
  //  MODAL
  // ═══════════════════════════════════════════════
  function openModal(key) {
    currentDayKey = key;
    const html = resourceDB[key] || `<h3>📌 Coming Soon</h3><p>Resources for this section are being curated. Check back soon!</p>`;
    modalBody.innerHTML = html;
    const badge = document.querySelector(`.day-badge[data-day="${key}"]`);
    modalTitle.textContent = badge ? badge.textContent : key;
    updateCompleteBtn();
    updateNavBtns();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentDayKey = null;
  }

  function updateCompleteBtn() {
    if (!currentDayKey) return;
    const done = !!completed[currentDayKey];
    completeBtn.textContent = done ? '✓ Completed' : '✓ Mark Complete';
    completeBtn.classList.toggle('is-done', done);
  }

  function updateNavBtns() {
    const idx = allKeys.indexOf(currentDayKey);
    prevBtn.style.visibility = idx <= 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = idx >= allKeys.length - 1 ? 'hidden' : 'visible';
  }

  // ═══════════════════════════════════════════════
  //  EVENT LISTENERS
  // ═══════════════════════════════════════════════
  // Day badge clicks
  document.querySelectorAll('.day-badge').forEach(el => {
    el.addEventListener('click', () => openModal(el.getAttribute('data-day')));
  });

  // Close modal
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

  // Mark complete
  completeBtn.addEventListener('click', () => {
    if (!currentDayKey) return;
    completed[currentDayKey] = !completed[currentDayKey];
    saveProgress(completed);
    updateCompleteBtn();
    updateProgressUI();
  });

  // Prev / Next
  prevBtn.addEventListener('click', () => {
    const idx = allKeys.indexOf(currentDayKey);
    if (idx > 0) openModal(allKeys[idx - 1]);
  });
  nextBtn.addEventListener('click', () => {
    const idx = allKeys.indexOf(currentDayKey);
    if (idx < allKeys.length - 1) openModal(allKeys[idx + 1]);
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });

  // ═══════════════════════════════════════════════
  //  SEARCH
  // ═══════════════════════════════════════════════
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase().trim();
    document.querySelectorAll('.module-card').forEach(card => {
      const text = card.textContent.toLowerCase();
      card.classList.toggle('search-hidden', q.length > 0 && !text.includes(q));
    });
    document.querySelectorAll('.concept-table tbody tr').forEach(row => {
      const text = row.textContent.toLowerCase();
      row.classList.toggle('search-hidden', q.length > 0 && !text.includes(q));
    });
  });

  // ═══════════════════════════════════════════════
  //  SCROLL REVEAL ANIMATION
  // ═══════════════════════════════════════════════
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.03) + 's';
    revealObserver.observe(el);
  });

  // ═══════════════════════════════════════════════
  //  SIDEBAR COLLAPSIBLE SECTIONS
  // ═══════════════════════════════════════════════
  document.querySelectorAll('.sidebar-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-collapse');
      const targetUl = document.getElementById(targetId);
      if (!targetUl) return;

      const isCollapsed = targetUl.classList.contains('collapsed');
      if (isCollapsed) {
        targetUl.classList.remove('collapsed');
        toggle.classList.add('expanded');
      } else {
        targetUl.classList.add('collapsed');
        toggle.classList.remove('expanded');
      }
    });
  });

  // Auto-expand the section when a sidebar nav item is clicked
  document.querySelectorAll('.sidebar-nav-item[data-target]').forEach(item => {
    item.addEventListener('click', () => {
      const parentUl = item.closest('.sidebar-nav.collapsible');
      if (parentUl && parentUl.classList.contains('collapsed')) {
        parentUl.classList.remove('collapsed');
        const toggle = document.querySelector(`[data-collapse="${parentUl.id}"]`);
        if (toggle) toggle.classList.add('expanded');
      }
    });
  });

  // ═══════════════════════════════════════════════
  //  INIT
  // ═══════════════════════════════════════════════
  updateProgressUI();
})();

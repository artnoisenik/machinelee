# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Contribution Guidelines

We welcome contributions.

What kind of contributions are we looking for?

- content suggestions
- translation
- content/copy contributions
- typos :)


## Local Development

First, install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [node](https://nodejs.org/en/download/).

Make sure you are using Node 18.0.0 or higher (`node -v`). Then, run the following commands in a terminal:
```
# download the website code with git
git clone https://github.com/trigaten/Learn_Prompting.git
# enter the project directory
cd Learn_Prompting
# install node modules
npm i
# run the website locally
npm start
```

If you get an error related to the node version, you probably are using an older version of node.

Make sure the newer version appears higher in your path than any older versions. 

Alternatively, you can use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to install the latest version of node. Install nvm, then do the following:
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
nvm install-latest-npm
```

`npm start` starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

We are hosted on [Vercel](https://vercel.com/).

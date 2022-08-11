# Github Profiles

Implemented a react Github profiles app named github-profiles-v1 that you can search a username and find the information related to that profile, such as nuumber of followers, followings and repositories. You are able to sort the repositories based on stars, forks and latest updates. Aside from these, you can see the top 10 repositories that have gained the highest stars.

Project link:
https://github-profiles-v1.netlify.app/

## Screenshots

![App Screenshot](https://s6.uupload.ir/files/demo_github_jk5c.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/abolfazl-jmd/github-profile.git
```

Go to the project directory

```bash
  cd github-profile
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Build command

Get a build project with this command

```bash
  npm run build
```

## API Reference

#### Base url

```http
  GET https://api.github.com/
```

#### Get profile

```http
  GET  https://api.github.com/users/${username}
```

#### Top repositories API

```http
  GET https://api.github.com/search/repositories?q=stars:>1&sort=stars
```

## Features

- Search through profiles with username
- See details of the Github account like number of repositories
- Sort the profile repositories based on forks, stars and latest update
- See top 10 repositories in Github with highest stars

## Tech Stack

**Client:** JavaScript, React, Modular CSS

## Packages

Here is the list of packages used to develope this project:

- Lodash
- React-select
- React-router-dom v6
- axios

## License

[MIT](https://choosealicense.com/licenses/mit/)

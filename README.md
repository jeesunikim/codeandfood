# codeandfood.com
This is my personal [portfolio and blog](http://codeandfood.com) where I'll be sharing projects, codes, recipes, and travel blogs. Why did I use Jekyll for my blog? Because [Dan Eden](https://github.com/daneden/daneden.me/) used Jekyll.
 
## Installation
If you want to run this site locally:

- `git clone` it somewhere
- Create a file called `_config_local.yml` with the following contents:
  ```
  production: false
  ```
- Run `npm install` and then `gulp`
- Party.

If you're running this site in production, you'll obviously need to change `_config_local.yml` to read `production: true`.

## Who This Repo is For
This repo is mostly for me. I, like many of you, host my code on GitHub for reasons of portability, ease of work, and peace of mind. Beyond my own needs, I have also open-sourced this repo for you, the reader (and most likely developer), to explore the things that make my site tick.
## Skyport Systems Landing Page

Site built with [Hugo](http://gohugo.io/) static webpage generator.

## Running site locally

* [install Hugo](http://gohugo.io/overview/installing/)
* $ cd repository directory
* $ hugo server --watch
* navigate browser to http://localhost:1313

## Build a site for deployment

Build script is responsible for creating github-page compatible static page into `./dist` folder. following is the instruction:

* $ cd repository directory
* $ ./build.sh

## Deployment Script 
Deployment script is to help out cumbersom hugo-generated page deployment process to github page easy and nice
There are a few variables that needs to be setup before excuting the deployment script.

### CNAME
CNAME file needs to be pointing www.skyportsystems.com

### deploy.sh
- default_username: change username to skyportsystems admin 
- default_email: change email to skyportsystems admin
- repo: git remote name that the github-page will be deployed to 

### Prerequisite
- make sure `./build.sh` is called before deploying
- make sure that CNAME and variables are correct

### Default css section responsive size
```
pure-u-1 pure-u-sm-22-24 pure-u-md-20-24 pure-u-lg-16-24 pure-u-xl-14-24
```

## TODO
* [x] Hugo Set-up
* [x] New Style sets
* [x] New Contents
* [x] New Layouts
* [x] Documentation


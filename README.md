#Marching Mountains SEAN Stack app 

[![Build Status](https://travis-ci.org/MarchingMountains/MarchingMountains.Node.svg?branch=prime-dev)](https://travis-ci.org/MarchingMountains/MarchingMountains.Node)
[![Coverage Status](https://coveralls.io/repos/github/MarchingMountains/MarchingMountains.Node/badge.svg?branch=prime-dev)](https://coveralls.io/github/MarchingMountains/MarchingMountains.Node?branch=prime-dev)


##Installation
###External Dependencies
1. Postgres (database)
2. NodeJS 

###NPM 
```
npm install
bower install
```

##Running the app
1. Create tables using queries listed in the database.txt file.  The first list of tables is with all
   all appropriate references and dependencies.
2. Postgres server needs to be running prior to starting Node server in order for app to function.
3. Admin privileges are hard coded to be user 1. (i.e., the first user listed in the users table)


```
npm start
```

##Testing
The app uses Karma to run the suite of unit tests. Coverage should remain at 100% on the client app. To run the tests type:
```
npm test
```
This will first clean-up test-related directories, run jshint and jscs against the files and then run the tests so long as there are no linting issues.

###End-to-end tests
The app uses Nightwatch for end-to-end-testing.
```
npm run uat
npm run uat-dev
```

##Marching Mountains' Goal

The organization's goal is to create a network to supply public school band programs in distressed
areas of Appalachia and Minnesota with donated new and used musical instruments.
About the Project

##This project is designed to accomplish several things:

1. Get an instrument into the hands of kids that don't have one to play.
2. Give developers, content writers, UX professionals, graphic artists and other professionals a chance to contribute their time to something they care about and sharpen their skills at the same time. It feels incredibly meaningful to use awesome technology simply to help a kid you will never meet have a better life.
3. Prove that most of us have more time than we realize to make the world a better place.

##What We've Already Accomplished

Marching Mountains has already provided more than 500 years of band to kids in Appalachia and Minnesota by donating instruments to schools in rural Kentucky and urban Minneapolis. Check out a couple videos of work we've done in the past: http://www.marchingmountains.org/video or read about us on Huffington Post at http://www.huffingtonpost.com/2010/09/02/post_509_n_704029.html
Technology Goals

In April 2016, a team from Prime Academy in Minneapolis, MN, took on creating the core features of the app as well as a new design. They are currently in the process of completing the features and integrating it with the cloud. We're excited to see their efforts hopefully become the new platform for the organization.

###Prime Academy Team
* Gwen Williams @gwendolynwilliams
* Kat Traxler @katirene
* Kailey Colestock @KaileyJo
* Luis De La Espriella @luisdelae


We want this to be a fun project to work on and also one that's valuable for contributor's resumes. We want you to get something else out of it beyond just the meaningfulness of volunteering. The project is primarily built in Node.js and AngularJS. Along the way, other fun, new technologies will be used appropriately to solve problems.
How to contribute

1. Check out the project on http://www.marchingmountains.org and https://github.com/MarchingMountains/MarchingMountains.Node
2. Contact me about being a collaborator by emailing me at ianfelton@marchingmountains.org.
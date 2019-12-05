# webdriverio-boilerplate

a front-end test automation framework using webdriverio and mocha, designed with high portability as a priority.

## Prerequisites
* Node.js (node, npm)
* some browsers

## Getting started (Local setup)

* Install Node.js
    * Recommended: Use `nvm` to manage multiple versions of Node.js on your box. install using the following command in your terminal:
    ```
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    ```
    * Install at least node 10 on your machine
    ```
    nvm install 10
    ```
* Generate & Add SSH key:
    * [Generating an SSH Key](https://confluence.atlassian.com/bitbucketserver/creating-ssh-keys-776639788.html)
    * [Adding your SSH Key to Stash](https://confluence.atlassian.com/bitbucketserver/ssh-user-keys-for-personal-use-776639793.html)

* Install your dependencies
  ```
  npm install
  ```
* Copy the `.envschema` file to `.env` and fill your BrowserStack credentials into the two keys. **if you need credentials reach out to your tech/qa lead**
  ```
  cp .envschema .env
  ```
* once you've specified valid BrowserStack credentials, run `npm google` to execute some tests and see what happens.
  ```
  npm run google
  ```
* If you don't have BrowserStack credentials: 
  ```
  npm run google:local
  ```
feel free to check the `package.json` for available scripts. and their configs

## Newbie Tutorial

This is a tutorial aimed at non technical people to get their very first test running, regard it as a springboard for diving into Automated Testing using this boilerplate: 

[Tutorial Link](./tutorial.md)

## Working with the webdriverio boilerplate
* This boilerplate:
    * Standardizes the organization of your tests.
    * Simplifies the use of Selenium webdriver through the Page Object pattern.
    * Demonstrates preferred test code and patterns.
* Use the examples under the listed directories to better understand how to write your tests.
    * `examples/Amazon`: Sample tests against [https://www.amazon.com](https://www.amazon.com).  Uses Page Object pattern.
    * `examples/Google`: Sample tests against [https://www.google.com](https://www.google.com).  Uses Page Object pattern.
    * `examples/antipatterns`: Suggested practices to NOT follow.
* For your own tests, use the `test` folder as your scaffolding.
    * `test`: contains example code running against [https://www.hugeinc.com](https://www.hugeinc.com).
    * Feel free to add/modify/remove tests as needed from this folder.
* Configure WebdriverIO using the files at `test/wdio.conf*.js`.
    * `test/wdio.conf.js`: Uses a remote testing service such as BrowserStack or LambdaTest.
    * `test/wdio.conf.local.js`: Uses your local browsers and webdriver installations.    
* Write your tests under `test/specs`, `test/E2E`, or `test/Integration`.
    * You may use any folder name under `test` that you like to organize your tests.
* Isolate any webdriver interactions inside page/component objects under `test/page_objects`, `test/component_objects`, etc.

## Questions!

If you've made it this far down the readme, i'm assuming you seek more than just the above `tl;dr`, you can reach out to the #wdio-boilerplate room on Huge Slack for any guidance or conversation.
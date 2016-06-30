# friendlycode.org

Based on the Code for Virginia Beach landing page (http://code4hr.org/)

[![Build Status](https://travis-ci.org/friendlycode/homepage.svg?branch=master)](https://travis-ci.org/friendlycode/homepage)

## Getting Started

### Requirements

* Ruby 2.1.2: `$ rbenv install 2.1.2`
* Bundler: `$ gem install bundler`
* Node: [Download Node](https://nodejs.org/en/)

### Running locally

```
$ make build
$ make run
```

### Running with Vagrant
1. Install [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
2. Install [Vagrant](https://www.vagrantup.com/downloads.html)
3. Install [Git](https://git-scm.com/downloads) or [GitHub Desktop](https://desktop.github.com/)
4. `git clone https://github.com/friendlycode/homepage.git`
5. `cd homepage`
6. `vagrant up` (This will take a while to run the first time)
7. `vagrant ssh` (This will SSH you into the Vagrant virtual machine)
8. `cd /vagrant`
9. `make run`
10. Access the homepage with the web browser at http://localhost:4000


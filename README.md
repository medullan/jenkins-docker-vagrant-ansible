README!
=======================

### Requirements:
- `Vagrant - latest`
- `Ansible >= v1.7.1` (will most likely get errors if version is lower)
- `Packer - latest`

Two vagrant plugins are required. To install these plugins, please run:
```shell
vagrant plugin install vagrant-vbguest
vagrant plugin install vagrant-aws
```

## How to use

To see detailed documentation please view the [wiki](https://github.com/medullan/vagrant-ansible-jenkins/wiki).


## Development

#### Rules
- Please do not push to the master branch of this repository with code/tasks that have not been peer reviewed.
- Please branch from master and make pull requests to submit changes
- A conversation/pull request needs to happen before anything is merged into master
- Always do a `vagrant destroy` then `vagrant up` for a final test to ensure that additions work properly end to end

## TODOs

- Add ability to turn off overwrite of config files. This will be smart enough to see if the file exists then simply update the required XML nodes.

##### Happy hacking away!

## Credits

This repository was inspired and designed around ansible-jenkins:

https://github.com/ICTO/ansible-jenkins

=============================
made with :sparkling_heart: by the Medullan Automation Team

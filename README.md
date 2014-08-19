Readme
=======================


to pull this repository and submodules

`git clone https://github.com/lwhiteley/vagrant-ansible-jenkins.git --recursive`

### Requirements:
- `Vagrant - latest`
- `Ansible >= v1.7.1`

## What's Installed?

### Major Apt Packages
`jenkins`, `ansible`, `docker`, `jmeter`, `python-setuptools`, `git`, `jre-7`, `jdk-7`, `curl`

### Major pip Packages
`jenkins-autojobs`, `dotcloud`

## How to use

### Setup
- run `vagrant up` to get the environment going
- Get a drink, this will take approx. 30 mins for the first time you do `vagrant up` (excluding the time to retrieve the base box image)

### Configure
- To edit the list of plugins to install and jobs to create when provisioning look for the following file
`provisioners/ansible/host_vars/127.0.0.1`

- If the jobs list is edited then a corresponding xml file should be placed in the following directory:
`provisioners/ansible/roles/post-install/files/jenkins/jobs`

- To override the time it waits (seconds) for jenkins to start please edit the `Vagrantfile`
```yaml
# override ansible vars here
ansible.extra_vars = {
  startup_delay_s: 40
}
```

## TODOs
- add a task to install plugins by a file or find a way to reuse whats there for this purpose
- Configure language pack
- Add docker build flow
- Configure Security
- Add AWS integration

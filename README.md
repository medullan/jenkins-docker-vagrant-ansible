Readme
=======================

To pull this repository and submodules

`git clone https://github.com/lwhiteley/vagrant-ansible-jenkins.git --recursive`

### Requirements:
- `Vagrant - latest`
- `Ansible >= v1.7.1`

### Features
- Setup jenkins
- Setup jenkins security (github strategy)
- Install plugins
- Update plugins
- Create defined list of jobs from xml
- Restarts jenkins if needed after provisioning

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
# override/set ansible vars here
ansible.extra_vars = {
  startup_delay_s: 50
}
```
- To setup jenkins security please edit the `Vagrantfile` script
eg.
```yaml
# override/set ansible vars here
ansible.extra_vars = {
  enable_security: true,
  jenkins_admins: "admin1,admin2", #comma delimited list (no spaces) eg. "admin1,admin2"
  github_orgNames: "medullan", #comma delimited list (no spaces) eg. "medullan,google"
  github_clientId: "532534253fw3245",
  github_clientSecret: "32refwdfs324rewf343q4rwqr32qr"
}
```
To get the information from github, [create an application](https://github.com/settings/applications/new) that will provide the `clientid` and `clientsecret`.

Authorization Callback URL: `http://<jenkins-server>:<port>/securityRealm/finishLogin`

## What's already Inside?

### Major Apt Packages
`jenkins`, `ansible`, `docker`, `jmeter`, `python-setuptools`, `git`, `jre-7`, `jdk-7`, `curl`

### Major pip Packages
`jenkins-autojobs`, `dotcloud`, `robotframework-selenium2library`


## TODOs
- Add AWS integration
- default config for plugins

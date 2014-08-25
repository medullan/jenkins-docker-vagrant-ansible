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
- To edit the list of plugins to install and jobs to create when provisioning, look for the following file
`provisioners/ansible/host_vars/127.0.0.1`

- If the jobs list is edited then a corresponding xml file, with the same name as the file, should be placed in the following directory:
`provisioners/ansible/files/jenkins/jobs`

- To override the time it waits (seconds) for jenkins to start please edit the `Vagrantfile`
```yaml
# override/set ansible vars here
ansible.extra_vars = {
  startup_delay_s: 50
}
```
- To setup jenkins security please edit the `Vagrantfile` script

#### Settings:

- `enable_security`: This flag tells the playbook to enable security for the jenkins instance. If false, the playbook will skip enabling security.
- `jenkins_admins`: This is a list of github usernames that will have admin right in the Jenkins instance
- `github_orgNames`: This is a list of organisations that will have access to the jenkins instance, including non-admin users. If omitted then only admins will have access.
- `github_clientId`: This is a github application Client ID
- `github_clientSecret`: This is a github application Client Secret

To get the information from github:
- [create an application](https://github.com/settings/applications/new) that will provide the `clientid` and `clientsecret`.
- Set Authorization Callback URL: `http://<jenkins-server>:<port>/securityRealm/finishLogin`

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

## What's already Inside?

### Major Apt Packages
`jenkins`, `ansible`, `docker`, `jmeter`, `python-setuptools`, `git`, `jre-7`, `jdk-7`, `curl`

### Major pip Packages
`jenkins-autojobs`, `dotcloud`, `robotframework-selenium2library`


## TODOs
- Add AWS integration
- default config for plugins

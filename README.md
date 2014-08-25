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
- Install/Update Plugins
- Pre Configured Plugins eg. git, GitHub Webhook, Rally (Some plugins such as rally cannot be fully configured in the playbook due to password encryptions)
- Create defined list of jobs from xml
- Restarts jenkins if needed after provisioning

## How to use

### Step 1: Configure
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
- Set Git Credentials

Update the git name and email to the credentials specific to your Jenkins setup

eg.
```yaml
# override/set ansible vars here
ansible.extra_vars = {
  git_email: 'noreply@gmail.com',
  git_name: 'Jenkins CI',
}
```
- To setup Jenkins security please edit the `Vagrantfile`

#### Settings:

- `enable_security`: This flag tells the playbook to enable security for the Jenkins instance. If false, the playbook will skip enabling security.
- `jenkins_admins`: This is a list of github usernames that will have admin rights in the Jenkins instance
- `github_orgNames`: This is a list of organisations that will have access to the Jenkins instance, including non-admin users. If omitted then only admins will have access.
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
  jenkins_admins: "admin1,admin2", #comma delimited list eg. "admin1,admin2"
  github_orgNames: "medullan", #comma delimited list eg. "medullan,google"
  github_clientId: "532534253fw3245",
  github_clientSecret: "32refwdfs324rewf343q4rwqr32qr"
}
```

### Step 2: Run Playbook

#### Normal provisioning
- run `vagrant up` to get the environment going
- Get a drink, this will take approx. 30 mins for the first time you do `vagrant up` (excluding the time to retrieve the base box image)

#### Provision with AWS (Amazon Web Service)
To provision with AWS please view the following repository:

https://github.com/mitchellh/vagrant-aws

## What's already Inside?

### Major Apt Packages
`jenkins`, `ansible`, `docker`, `jmeter`, `python-setuptools`, `git`, `jre-7`, `jdk-7`, `curl`

### Major pip Packages
`jenkins-autojobs`, `dotcloud`, `robotframework-selenium2library`

Readme
=======================

If interested in pushing to this Repository please see the `Development` section below.

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

#### 1.1: Check/Edit Plugin/Jobs to be Installed
To edit the list of plugins to install and jobs to create when provisioning, look for the following file
`provisioners/ansible/host_vars/127.0.0.1`

If the jobs list is edited then a corresponding xml file, with the same name as the job, should be placed in the following directory:
`provisioners/ansible/files/jenkins/jobs`

eg.
`- 'ExampleJob'`
goes with
`provisioners/ansible/files/jenkins/jobs/ExampleJob.xml`


If there are extra files needed to be shared from Ansible to Jenkins, place them in the following folder:
`provisioners/ansible/files/jenkins/shared`. This will create and copy these files to a folder in Jenkins home:
`{jenkins_home}/shared_ansible`. The jenkins user will be the owner of these files once copied over.

#### 1.2: Check/Update Waiting time for jenkins restarts
To override the time it waits (in seconds) for Jenkins to start please edit the `Vagrantfile`
```yaml
# override/set ansible vars here
ansible.extra_vars = {
  startup_delay_s: 50
}
```
#### 1.3: Set Git Credentials

Update the git name and email to the credentials specific to your Jenkins setup
##### Settings:
- `enable_configure`: This enables the configuration of this plugin. When `false` will skip the configuration
- `email`: This is the email of the Jenkins git user, will be used when the ci makes commits to git repositories
- `name`: This is the full name of the Jenkins git user, will be used when the ci makes commits to git repositories

eg.
```yaml
# override/set ansible vars here
ansible.extra_vars = {
  git:{
    enable_configure: true,
    email: 'noreply@gmail.com',
    name: 'Jenkins CI',
  }
}
```
#### 1.4: Set Rally Variables to Preconfigure Plugin

##### Settings:
- `enable_configure`: This enables the configuration of this plugin. When `false` will skip the configuration
- `server`: This is rally's website address
- `email`: Email (username) registered with rally
- `jenkins_machine`: This is the domain name and port of the Jenkins server

eg.
```yaml
# override/set ansible vars here
ansible.extra_vars = {
  rally:{
    enable_configure: true,
    server:"rally1.rallydev.com",
    email: "",
    jenkins_machine: "localhost:8080"
  }
}
```
Please note that this step does not fully configure the rally plugin. You will have to navigate to `configure system` when Jenkins goes live and enter the password for the rally user/email


#### 1.5: Edit GitHub Security Settings
To setup Jenkins security please edit the `Vagrantfile` with the necessary variables

##### Settings:

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
  security:{
    enable_security: true,
    jenkins_admins: "admin1,admin2", #comma delimited list eg. "admin1,admin2"
    github_orgNames: "medullan", #comma delimited list eg. "medullan,google"
    github_clientId: "532534253fw3245",
    github_clientSecret: "32refwdfs324rewf343q4rwqr32qr"
  }  
}
```
#### Things to Note:
If there are raw xml config files that you want to be copied to Jenkins. Then simply adding them to the `provisioners/ansible/files/jenkins/config` directory will get them to jenkins for pre-configuration.

#### 1.6 Configure Jenkins Memory

Configure the heap size Jenkins will be assigned on startup.

- `enable_configure`: This flag tells the playbook to enable security for the Jenkins instance. If false, the playbook will skip enabling security.
- `maxPermSize`: Assign the MaxPermSize that jenkins will be assigned ("-XX:MaxPermSize=512m")
- `memory`: sets the heap size assigned to jenkins ('-Xmx1024m')

eg.

```yaml
# override/set ansible vars here
ansible.extra_vars = {
  jenkins_opts:{
    enable_configure: true,
    maxPermSize: 512, # cannot be less than 512
    memory: 1024 # cannot be less than 256
  }
}
```

#### 1.7 Install global npm packages

- `global_packages`: This is a space delimited list of npm packges eg. 'bower grunt-cli'


eg.

```yaml
# override/set ansible vars here
ansible.extra_vars = {
  npm:{
    # packages is a space delimited list eg. 'bower grunt-cli'
    # bower, grunt-cli and istanbul are installed by default
    global_packages: "doxx npm-check-updates"
  }
}
```

#### 1.8 Optional Installs

* ansible.extra_vars.mongo.install (Boolean): `Default: false`

### Step 2: Run Playbook

#### Normal provisioning
- run `vagrant up` to get the environment going
- Get a drink :tropical_drink:, this will take approx. 30 mins for the first time you do `vagrant up` (excluding the time to retrieve the base box image)

#### Provision with AWS (Amazon Web Service)
To provision with AWS please view the following repository:

https://github.com/mitchellh/vagrant-aws

## What's already Inside?

### Major Apt Packages
`jenkins`, `ansible`, `docker`, `jmeter`, `python-setuptools`, `git`, `jre-7`, `jdk-7`, `curl`,
`groovy`, `nodejs-legacy`, `npm`

### Pip Packages
`jenkins-autojobs`, `dotcloud`, `robotframework-selenium2library`

### NPM Global Packages
`istanbul`, `bower`, `grunt-cli`

## Known Issues

#### Issue 1

> The github-oauth@0.19 plugin doesnt play well with the shared-workspace plugin.
> At version 0.19, the github-oauth plugin checks each job for a git url and if this url is null then an exception is thrown. This happens when the ${SHAREDSPACE_SCM_URL} is used.
This variable is null until a job is executed, hence the github-oauth plugin will throw a fit.

>***Resolution***

>Just avoid using that variable and everything will be ok.

#### Issue 2
> With `VirtualBox v4.3.14`, when doing `vagrant up`, an error (or similar error) sometimes occurs saying:

> ***Exception:***

> The guest machine entered an invalid state while waiting for it
> to boot. Valid states are 'starting, running'. The machine is in the
> 'poweroff' state. Please verify everything is configured
> properly and try again.

> If the provider you're using has a GUI that comes with it,
> it is often helpful to open that and watch the machine, since the
> GUI often has more helpful error messages than Vagrant can retrieve.
> For example, if you're using VirtualBox, run `vagrant up` while the
> VirtualBox GUI is open.

> ***Resolution***:

> To resolve the issue, downgrading to version `VirtualBox v4.3.12` worked

## Development

#### Rules
- Please do not push to the master branch of this repository with code/tasks that have not been peer reviewed.
- Please branch from master and make pull requests to submit changes
- A conversation/pull request needs to happen before anything is merged into master
- Always do a `vagrant destroy` then `vagrant up` for a final test to ensure that additions work properly end to end

##### Happy hacking away!

## TODOs

- Add ability to turn off overwrite of config files. This will be smart enough to see if the file exists then simply update the required XML nodes.


## Credits

This repository was inspired and designed around ansible-jenkins:

https://github.com/ICTO/ansible-jenkins

=============================
made with :sparkling_heart: by the Medullan Automation Team

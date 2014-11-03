
var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["home.html#home"] = "Home";
index.add({
    url: "home.html#home",
    title: "Home",
    body: "# Home  Welcome to the vagrant-ansible-jenkins documentation!  To get started view the Introduction page,  otherwise, select the specific topic that you require.  Jump right in!   ![github](http://ciembor.github.io/4bit/images/github.png)  [Repository](https://github.com/medullan/vagrant-ansible-jenkins)   ![wiki](http://www.altera.com/common/template/08/icon-wiki.gif)  [Edit On Guthub](https://github.com/medullan/vagrant-ansible-jenkins/wiki)   "
});

documentTitles["home.html#useful-links"] = "Useful Links:";
index.add({
    url: "home.html#useful-links",
    title: "Useful Links:",
    body: "### Useful Links: - [Ansible](http://docs.ansible.com/) - [Packer](http://www.packer.io/docs) - [Vagrant](http://docs.vagrantup.com/v2/) - [DropBox Direct Link Creation](http://techapple.net/2014/04/trick-obtain-direct-download-links-dropbox-files-dropbox-direct-link-maker-tool-cloudlinker/)"
});



documentTitles["01-intro.html#introduction"] = "Introduction";
index.add({
    url: "01-intro.html#introduction",
    title: "Introduction",
    body: "# Introduction   This repository was created to provide a new team with a pre configured Jenkins master and slave environment. The Jenkins master is configured with all the essential tools needed to run Jenkins right out of the box. The Jenkins slave machine is pre-configured with docker installed, to support the provisioning of docker on demand slaves.  Vagrant and Ansible is being used to provision these environments, on either Amazon Web Services or by using a local virtual environment such as Virtual Box. With the tools provided, this will enable any team to provision these environments with little effort and in a repeatable fashion.  * If interested in pushing to this Repository please see the `Development` section. * If problems occur, Please check the `Known Issues` page first. If there are no resolutions for your problem then feel free to submit an [issue](https://github.com/medullan/vagrant-ansible-jenkins/issues). * Most Instructions and problem resolutions were tested for Mac OS X. Cannot guarantee this process will work on other operating systems  &lt;br/&gt; "
});

documentTitles["01-intro.html#credits"] = "Credits";
index.add({
    url: "01-intro.html#credits",
    title: "Credits",
    body: "### Credits  This repository was inspired and designed around ansible-jenkins:  https://github.com/ICTO/ansible-jenkins "
});



documentTitles["02-requirements-and-features.html#requirements"] = "Requirements";
index.add({
    url: "02-requirements-and-features.html#requirements",
    title: "Requirements",
    body: "# Requirements - `Vagrant - latest` - `Ansible &gt;= v1.7.1` (will most likely get errors if version is lower) - `Virtual box - latest` or any virtual environment (If provisioning is being done locally)  Two vagrant plugins are required. To install these plugins, please run: ```shell vagrant plugin install vagrant-vbguest vagrant plugin install vagrant-aws ```  "
});

documentTitles["02-requirements-and-features.html#features"] = "Features";
index.add({
    url: "02-requirements-and-features.html#features",
    title: "Features",
    body: "# Features - Setup Jenkins - Setup Jenkins security (github strategy) - Install/Update Plugins - Pre Configured Plugins eg. git, GitHub Webhook, Rally (Some plugins such as rally cannot be fully configured in the playbook due to password encryptions) - Create defined list of jobs from xml "
});



documentTitles["03-whats-already-inside.html#whats-already-inside"] = "Whats already inside";
index.add({
    url: "03-whats-already-inside.html#whats-already-inside",
    title: "Whats already inside",
    body: "# Whats already inside  "
});

documentTitles["03-whats-already-inside.html#major-apt-packages"] = "Major Apt Packages";
index.add({
    url: "03-whats-already-inside.html#major-apt-packages",
    title: "Major Apt Packages",
    body: "### Major Apt Packages `jenkins`, `docker`, `jmeter`, `git`, `jre-7`, `jdk-7`, `groovy`   To see a full list of **apt** packages installed, see the following file:  [Shared Vars](https://github.com/medullan/jenkins-docker-vagrant-ansible/blob/master/provisioners/ansible/roles/shared/vars/main.yml)  *Note: Most of the tools that will be need to run builds are expected to be installed on the Docker containers, which will be used as Jenkins slaves in this setup.* "
});



documentTitles["031-checkurl-groovy-script.html#checkurl-groovy-script"] = "CheckUrl Groovy Script";
index.add({
    url: "031-checkurl-groovy-script.html#checkurl-groovy-script",
    title: "CheckUrl Groovy Script",
    body: "## CheckUrl Groovy Script  "
});

documentTitles["031-checkurl-groovy-script.html#what-is-checkurl"] = "What is CheckUrl?";
index.add({
    url: "031-checkurl-groovy-script.html#what-is-checkurl",
    title: "What is CheckUrl?",
    body: "### What is CheckUrl? CheckUrl is a script created to ping a website to check if it is giving a `200` response in a favorable response time.  "
});

documentTitles["031-checkurl-groovy-script.html#use-case"] = "Use Case";
index.add({
    url: "031-checkurl-groovy-script.html#use-case",
    title: "Use Case",
    body: "### Use Case The perfect use case for this script is to check until a site comes online after a deploy. If it doesn't get a 200 response after a specified interval, then the deploy can be considered a failure. Works great for deploying a test or production site.  "
});

documentTitles["031-checkurl-groovy-script.html#where-is-it"] = "Where is it?";
index.add({
    url: "031-checkurl-groovy-script.html#where-is-it",
    title: "Where is it?",
    body: "### Where is it? The script is transferred to the ***/var/lib/jenkins/shared_ansible*** location on each machine provisioned. This ensures there is a consistent location on Jenkins Master and all slaves to enable seamless builds across the environment. The script does not run indefinitely; it runs for a specified amount of tries and will exit with a failure or success depending on the `Final Response`.  "
});

documentTitles["031-checkurl-groovy-script.html#how-to-use"] = "How to Use";
index.add({
    url: "031-checkurl-groovy-script.html#how-to-use",
    title: "How to Use",
    body: "### How to Use  ***groovy*** and ***curl*** must be installed to run the script. Luckily these are already installed when provisioning with Ansible.  To get help with figuring out the arguments to pass when running the script, you can use the ***-h*** argument to see instructions.  ```bash $ groovy checkurl.groovy -h  usage: checkurl.groovy -[hmst] [url]  -h,--help                 Show usage information  -m,--max-time &lt;maxTime&gt;   max time in seconds before killing a curl                            command, Default: 20  -s,--sleep &lt;sleep&gt;        time in seconds before next retry, Default: 4  -t,--tries &lt;tries&gt;        number of tries before exit, Default: 3 ```  "
});

documentTitles["031-checkurl-groovy-script.html#example"] = "Example";
index.add({
    url: "031-checkurl-groovy-script.html#example",
    title: "Example",
    body: "### Example The example below pings a site every minute and attempts 12 tries before exiting.  ```bash $ groovy /var/lib/jenkins/shared_ansible/checkurl.groovy -m 30 -s 60 -t 12 http://ec2-54-221-51-114.compute-1.amazonaws.com  Checking 'http://ec2-54-221-51-114.compute-1.amazonaws.com' with:    12 tries    30 seconds timeout per try    60 seconds interval before next try   LETS ROCK! Response is 404: not satisfactory ... executing retry (11 left) elapsed time: 0.359 seconds   Response is 404: not satisfactory ... executing retry (10 left) elapsed time: 1 minutes, 0.480 seconds   Response is 404: not satisfactory ... executing retry (9 left) elapsed time: 2 minutes, 0.512 seconds    (0) Final Response is 200: site is ready! elapsed time: 3 minutes, 4.586 seconds   ```  The **(0)** in this line **(0) Final Response is 200: site is ready!** is the exit code. - An exit code of **0** means **&lt;span style=\&quot;color: #65b042;\&quot;&gt;Success&lt;/span&gt;** - An exit code of **1** means **&lt;span style=\&quot;color: #B80000;\&quot;&gt;Failure&lt;/span&gt;**"
});



documentTitles["032-saucelabs-python-script.html#saucelabs-python-script"] = "SauceLabs Python Script";
index.add({
    url: "032-saucelabs-python-script.html#saucelabs-python-script",
    title: "SauceLabs Python Script",
    body: "## SauceLabs Python Script  The `SauceLabs.py` script, discovered in a [blog](http://datakurre.pandala.org/2014/03/cross-browser-selenium-testing-with.html), is used to run robotframework tests on SauceLabs while creating the outputs on the machine that executed the command.  This Requires the following pip packages:  - `robotframework-selenium2library` - `simplejson` - `requests`  "
});

documentTitles["032-saucelabs-python-script.html#where-is-it"] = "Where is it?";
index.add({
    url: "032-saucelabs-python-script.html#where-is-it",
    title: "Where is it?",
    body: "### Where is it?  The script is copied to the ***/usr/local/bin*** directory where it can be referenced by python when a script is run that imports the SauceLabs library"
});



documentTitles["04-how-to-setup.html#how-to-setup"] = "How to Setup";
index.add({
    url: "04-how-to-setup.html#how-to-setup",
    title: "How to Setup",
    body: "# How to Setup There are several steps that are required and some may be optional that will get you going with this repository. The following Pages will give you detailed information on these setup steps."
});



documentTitles["041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#install-plugins"] = "Install Plugins";
index.add({
    url: "041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#install-plugins",
    title: "Install Plugins",
    body: "## Install Plugins To edit the list of plugins to install when provisioning, look for the following file and edit the plugins section as necessary [provisioners/ansible/roles/shared/vars/main.yml](https://github.com/medullan/vagrant-ansible-jenkins/blob/master/provisioners/ansible/roles/shared/vars/main.yml)  ```yaml plugins: # Jenkins Plugins   - 'ldap'   - 'translation' [...] ```  "
});

documentTitles["041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#create-jobs"] = "Create Jobs";
index.add({
    url: "041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#create-jobs",
    title: "Create Jobs",
    body: "## Create Jobs To have a job be created by the Ansible Provisioning then a job xml should be placed in the following directory: ***provisioners/ansible/files/jenkins/jobs***  The job created will match the name of the file  eg.  The file: ***provisioners/ansible/files/jenkins/jobs/ExampleJob.xml***  Will create a job called: ***ExampleJob***  "
});

documentTitles["041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#share-files-with-the-imagebox"] = "Share Files with the Image/Box";
index.add({
    url: "041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#share-files-with-the-imagebox",
    title: "Share Files with the Image/Box",
    body: "## Share Files with the Image/Box If there are extra files needed to be shared from Ansible to Jenkins, place them in the following folder: ***provisioners/ansible/files/jenkins/shared***. This will create and copy these files to a folder in Jenkins home: ***{jenkins_home}/shared_ansible***. The default user will be the owner of these files once copied over but will be accessible to any user of the machine. "
});



documentTitles["042-update-override-variables.html#update-override-variables"] = "Update Override Variables";
index.add({
    url: "042-update-override-variables.html#update-override-variables",
    title: "Update Override Variables",
    body: "## Update Override Variables  ###Where to find these? These variables are located in different files in the ***provisioners/ansible/extra_vars*** folder. The file to change will depend on the environment you are provisioning.  "
});

documentTitles["042-update-override-variables.html#checkupdate-waiting-time-for-jenkins-restarts"] = "Check/Update Waiting time for jenkins restarts";
index.add({
    url: "042-update-override-variables.html#checkupdate-waiting-time-for-jenkins-restarts",
    title: "Check/Update Waiting time for jenkins restarts",
    body: "#### Check/Update Waiting time for jenkins restarts To override the time it waits (in seconds) for Jenkins to start please edit the respective file in the ***provisioners/ansible/extra_vars*** folder ```yaml startup_delay_s: 50 ``` "
});

documentTitles["042-update-override-variables.html#set-git-credentials"] = "Set Git Credentials";
index.add({
    url: "042-update-override-variables.html#set-git-credentials",
    title: "Set Git Credentials",
    body: "#### Set Git Credentials  Update the git name and email to the credentials specific to your Jenkins setup "
});

documentTitles["042-update-override-variables.html#settings"] = "Settings:";
index.add({
    url: "042-update-override-variables.html#settings",
    title: "Settings:",
    body: "##### Settings: - ***enable_configure:*** This enables the configuration of this plugin. When `false` will skip the configuration - ***email:*** This is the email of the Jenkins git user, will be used when the ci makes commits to git repositories - ***name:*** This is the full name of the Jenkins git user, will be used when the ci makes commits to git repositories  eg. ```yaml git:   enable_configure: true   email: 'noreply@gmail.com'   name: 'Jenkins CI' ``` "
});

documentTitles["042-update-override-variables.html#set-rally-variables-to-preconfigure-plugin"] = "Set Rally Variables to Preconfigure Plugin";
index.add({
    url: "042-update-override-variables.html#set-rally-variables-to-preconfigure-plugin",
    title: "Set Rally Variables to Preconfigure Plugin",
    body: "#### Set Rally Variables to Preconfigure Plugin  "
});

documentTitles["042-update-override-variables.html#settings"] = "Settings:";
index.add({
    url: "042-update-override-variables.html#settings",
    title: "Settings:",
    body: "##### Settings: - ***enable_configure:*** This enables the configuration of this plugin. When `false` will skip the configuration - ***server:*** This is rally's website address - ***email:*** Email (username) registered with rally - ***jenkins_machine:*** This is the domain name and port of the Jenkins server  eg. ```yaml rally:   enable_configure: true   server: \&quot;rally1.rallydev.com\&quot;   email: \&quot;\&quot;   jenkins_machine: \&quot;localhost:8080\&quot; ``` Please note that this step does not fully configure the rally plugin. You will have to navigate to ***configure system*** when Jenkins goes live and enter the password for the rally user/email   "
});

documentTitles["042-update-override-variables.html#edit-github-security-settings"] = "Edit GitHub Security Settings";
index.add({
    url: "042-update-override-variables.html#edit-github-security-settings",
    title: "Edit GitHub Security Settings",
    body: "#### Edit GitHub Security Settings To setup Jenkins security please edit the respective file in the ***provisioners/ansible/extra_vars*** folder with the necessary variables  "
});

documentTitles["042-update-override-variables.html#settings"] = "Settings:";
index.add({
    url: "042-update-override-variables.html#settings",
    title: "Settings:",
    body: "##### Settings:  - ***enable_security:*** This flag tells the playbook to enable security for the Jenkins instance. If false, the playbook will skip enabling security. - ***jenkins_admins:*** This is a list of github usernames that will have admin rights in the Jenkins instance - ***github_orgNames:*** This is a list of organisations that will have access to the Jenkins instance, including non-admin users. If omitted then only admins will have access. - ***github_clientId:*** This is a github application Client ID - ***github_clientSecret:*** This is a github application Client Secret  To get the information from github: - [Create a GitHub Application](https://github.com/settings/applications/new) that will provide the ***clientid*** and ***clientsecret***. - Set Authorization Callback URL:   ***http://{jenkins-server}:{port}/securityRealm/finishLogin***  eg. ```yaml security:   enable_security: true,   jenkins_admins: \&quot;admin1,admin2\&quot;, #comma delimited list eg. \&quot;admin1,admin2\&quot;   github_orgNames: \&quot;medullan\&quot;, #comma delimited list eg. \&quot;medullan,google\&quot;   github_clientId: \&quot;532534253fw3245\&quot;,   github_clientSecret: \&quot;32refwdfs324rewf343q4rwqr32qr\&quot; ``` "
});

documentTitles["042-update-override-variables.html#things-to-note"] = "Things to Note:";
index.add({
    url: "042-update-override-variables.html#things-to-note",
    title: "Things to Note:",
    body: "#### Things to Note: If there are raw xml config files that you want to be copied to Jenkins. Then simply adding them to the ***provisioners/ansible/files/jenkins/config*** directory will get them to Jenkins for pre-configuration.  "
});

documentTitles["042-update-override-variables.html#configure-jenkins-memory"] = "Configure Jenkins Memory";
index.add({
    url: "042-update-override-variables.html#configure-jenkins-memory",
    title: "Configure Jenkins Memory",
    body: "#### Configure Jenkins Memory  Configure the heap size Jenkins will be assigned on startup.  - ***enable_configure:*** This flag tells the playbook to enable security for the Jenkins instance. If false, the playbook will skip enabling security. - ***maxPermSize:*** Assign the MaxPermSize that jenkins will be assigned (\&quot;-XX:MaxPermSize=512m\&quot;) - ***memory:*** sets the heap size assigned to jenkins ('-Xmx1024m')  eg.  ```yaml jenkins_opts:   enable_configure: true,   maxPermSize: 512, # cannot be less than 512   memory: 1024 # cannot be less than 256 ```  "
});

documentTitles["042-update-override-variables.html#install-global-npm-packages"] = "Install global npm packages";
index.add({
    url: "042-update-override-variables.html#install-global-npm-packages",
    title: "Install global npm packages",
    body: "#### Install global npm packages  - ***global_packages:*** This is a space delimited list of npm packges eg. 'bower grunt-cli'  eg.  ```yaml npm:   # bower, grunt-cli and istanbul are installed by default   global_packages: \&quot;doxx npm-check-updates\&quot; # global_packages is a space delimited list eg. 'bower grunt-cli' ```"
});



documentTitles["05-create-jenkins-environment-with-vagrant.html#create-jenkins-environment-with-vagrant"] = "Create Jenkins Environment with Vagrant";
index.add({
    url: "05-create-jenkins-environment-with-vagrant.html#create-jenkins-environment-with-vagrant",
    title: "Create Jenkins Environment with Vagrant",
    body: "# Create Jenkins Environment with Vagrant  There are currently two options for creating a Jenkins environment with Vagrant: - Locally with VirtualBox - Remotely in AWS (Amazon Web Services)"
});



documentTitles["051-provision-with-virtualbox.html#local-provisioning-with-virtualbox"] = "Local provisioning with VirtualBox";
index.add({
    url: "051-provision-with-virtualbox.html#local-provisioning-with-virtualbox",
    title: "Local provisioning with VirtualBox",
    body: "## Local provisioning with VirtualBox  By default, the Vagrantfile is setup to provision using VirtualBox and a clean ubuntu box from VagrantCloud  To provision: - run ***vagrant up*** to get the environment going - Get a drink, this will take approx. 30 mins for the first time you do **vagrant up** (excluding the time to retrieve the base box image) "
});



documentTitles["052-provision-jenkins-with-aws.html#provision-with-aws-amazon-web-service"] = "Provision with AWS (Amazon Web Service)";
index.add({
    url: "052-provision-jenkins-with-aws.html#provision-with-aws-amazon-web-service",
    title: "Provision with AWS (Amazon Web Service)",
    body: "## Provision with AWS (Amazon Web Service)  "
});

documentTitles["052-provision-jenkins-with-aws.html#step-1-change-the-vm-box-to-be-used"] = "Step 1 - Change the vm box to be used";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-1-change-the-vm-box-to-be-used",
    title: "Step 1 - Change the vm box to be used",
    body: "### Step 1 - Change the vm box to be used  To provision with AWS, the AWS box built with ***packer*** or a referenced AWS vagrant box from some archive must be used. If the box was built update the base box in the Vagrantfile  for eg.  ```yaml config.vm.box = \&quot;dummy.box\&quot; ``` "
});

documentTitles["052-provision-jenkins-with-aws.html#step-2-change-ansible-override-variables"] = "Step 2 - Change Ansible Override Variables";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-2-change-ansible-override-variables",
    title: "Step 2 - Change Ansible Override Variables",
    body: "### Step 2 - Change Ansible Override Variables  from: ```yaml ansible.extra_vars = \&quot;provisioners/ansible/extra_vars/jenkins-master-playbook-vars.yml\&quot; ``` to: ```yaml ansible.extra_vars = \&quot;provisioners/ansible/extra_vars/jenkins-master-aws-playbook-vars.yml\&quot; ```  "
});

documentTitles["052-provision-jenkins-with-aws.html#step-3-fill-in-required-aws-info"] = "Step 3 - Fill in required AWS info";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-3-fill-in-required-aws-info",
    title: "Step 3 - Fill in required AWS info",
    body: "### Step 3 - Fill in required AWS info  Inorder to provision environments within AWS, it is a requirement to provide sensitive AWS information such as the `access_key_id` and `secret_access_key`. Since this code is being committed to a github repository where other persons can view the code base, environment variables are being used to set this information in a local terminal, for e.g. `export AWS_SECRET_ACCESS_KEY=SOMEKEYHASH`.  ```ruby   def aws_provider_configs(config)     config.vm.provider :aws do |aws, override|         override.ssh.username = ENV[\&quot;AWS_SSH_USER\&quot;]         override.ssh.private_key_path = ENV[\&quot;AWS_KEY_LOCATION\&quot;]          aws.keypair_name = ENV[\&quot;AWS_KEYPAIR_NAME\&quot;]         aws.access_key_id = ENV[\&quot;AWS_ACCESS_KEY_ID\&quot;]         aws.secret_access_key = ENV[\&quot;AWS_SECRET_ACCESS_KEY\&quot;]         aws.ami = ENV[\&quot;AMI\&quot;]         aws.security_groups = [ENV['AWS_SECURITY_GROUP']]          aws.region = \&quot;us-east-1\&quot;         aws.tags = {           'Name' =&gt; 'jenkins-docker-master',           'Provisioner' =&gt; 'Medullan',           'OS_Version' =&gt; 'Ubuntu',           'Release' =&gt; 'Latest'         }     end   end ``` "
});

documentTitles["052-provision-jenkins-with-aws.html#step-4-uncomment-rsync-folder-sharing"] = "Step 4 - Uncomment Rsync Folder sharing";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-4-uncomment-rsync-folder-sharing",
    title: "Step 4 - Uncomment Rsync Folder sharing",
    body: "### Step 4 - Uncomment Rsync Folder sharing  This step is important. The rsync line lists files that should be ignore when syncing files on the local machine with the AWS machine. If these are not ignore then the process will attempt to transfer very huge files and you may wait a very long time before seeing any progress.  ```yaml config.vm.synced_folder \&quot;.\&quot;, \&quot;/vagrant\&quot;, type: \&quot;rsync\&quot;, :rsync_excludes =&gt; ['packer_cache/', 'http/', ... ] ```  then run: ``` $ vagrant up --provider=aws ```  This will create and run an AWS instance in your account.  For more information on provisioning with AWS please view the following repository:  https://github.com/mitchellh/vagrant-aws  "
});

documentTitles["052-provision-jenkins-with-aws.html#extras"] = "Extras";
index.add({
    url: "052-provision-jenkins-with-aws.html#extras",
    title: "Extras",
    body: "### Extras There are some Ansible roles that are shared when provisioning the base image and the Jenkins environments. One such role would be **setup**. If you wat to ignore this role when provisioning the Jenkins environments, Then uncomment the following line in the Vagrantfile:  ```yaml ansible.skip_tags = ['setup'] ```  "
});

documentTitles["052-provision-jenkins-with-aws.html#caveats"] = "Caveats";
index.add({
    url: "052-provision-jenkins-with-aws.html#caveats",
    title: "Caveats",
    body: "### Caveats  When provisioning the Jenkins environment with AWS for the first time, the provisioning will fail for SSH reasons. To see how to resolve, please see the [Known Issues](http://medullan.github.io/vagrant-ansible-jenkins/known-issues.html#issue-ansible-provisioning-with-aws-fails-with-ssh-exception) section for this topic "
});



documentTitles["06-docker-build-pipelines.html#docker-build-pipeline"] = "Docker Build Pipeline";
index.add({
    url: "06-docker-build-pipelines.html#docker-build-pipeline",
    title: "Docker Build Pipeline",
    body: "# Docker Build Pipeline  Currently, the ansible scripts provision a generic Docker build pipeline, with the following layout.  1. **Phase 1**     * GetLatestFromSCM 2. **Phase 2**     * IntegrationTesting     * UnitTesting 3. **Phase 3**     * PushToDockerHub 4. **Phase 4**     * FunctionalTesting 5. **Phase 5**     * PushToDockerHub-QA 6. **Phase 6**     * DeployToQA  Key Jenkins plugin used:  - docker-plugin - docker-build-step - build-pipeline-plugin - clone-workspace-scm   NB. All plugins and dependencies listed above are all installed using Ansible by default. Also, most of the tools need to run builds are installed on the docker slaves.  To provision the Jenkins environment with your pipeline of choice, the **target_jenkins_env** variable should be overridden.  * Set it to **docker** to create a docker pipeline  To override, locate the desired override variable file in the **provisioners/ansible/roles/shared/vars** folder and place the following within the yaml file.  "
});

documentTitles["06-docker-build-pipelines.html#example"] = "Example";
index.add({
    url: "06-docker-build-pipelines.html#example",
    title: "Example",
    body: "#### Example  ```yaml target_jenkins_env: docker # creates a docker pipeline ``` "
});



documentTitles["07-documentation.html#documentation"] = "Documentation";
index.add({
    url: "07-documentation.html#documentation",
    title: "Documentation",
    body: "# Documentation "
});

documentTitles["07-documentation.html#about"] = "About";
index.add({
    url: "07-documentation.html#about",
    title: "About",
    body: "## About This documentation is hosted for editing on Github wiki and parsed into HTML for the gh-pages. These pages are parsed in the order of how they appear and will be displayed on the website in the same order. The **Home** Page is an exception to this rule however, it always appears first in the generated documentation. This is so because of the globbling pattern used in the **gruntfile**:  ```js var markdown = [       'vagrant-ansible-jenkins.wiki/Home.md',       'vagrant-ansible-jenkins.wiki/*.md',       '!vagrant-ansible-jenkins.wiki/_Footer.md'     ]; ```  This pattern includes the Home page first, includes all other files and then ignores the Footer page used in the wiki.  &lt;br/&gt; "
});

documentTitles["07-documentation.html#editing-the-docs"] = "Editing the Docs";
index.add({
    url: "07-documentation.html#editing-the-docs",
    title: "Editing the Docs",
    body: "## Editing the Docs You can edit the documentation by visiting the [Github wiki](https://github.com/medullan/vagrant-ansible-jenkins/wiki) of this repository. The wiki is parsed and used to generate the documentation for the [website](http://medullan.github.io/vagrant-ansible-jenkins).  &lt;br/&gt; "
});

documentTitles["07-documentation.html#generate-documentation-website"] = "Generate Documentation Website";
index.add({
    url: "07-documentation.html#generate-documentation-website",
    title: "Generate Documentation Website",
    body: "## Generate Documentation Website  To get started with generating the documentation, you must have already cloned the [git repository](https://github.com/medullan/vagrant-ansible-jenkins) and be inside the root directory with your console.  The tools needed to get you started are all powered by:  - [Nodejs](http://nodejs.org/) - [npm](https://www.npmjs.org/)  - [Grunt](http://gruntjs.com/)   Therefore, you must have **Nodejs** and **npm** installed with [grunt](http://gruntjs.com/getting-started#installing-the-cli) installed globally as a **npm** package  Assuming all the dependencies above are installed and ready to use, the following steps will show you how to generate documentation for the repository. &lt;br/&gt; "
});

documentTitles["07-documentation.html#step-1"] = "Step 1";
index.add({
    url: "07-documentation.html#step-1",
    title: "Step 1",
    body: "### Step 1  run ```bash $ npm install ```  This will install all **npm** modules/dependencies needed within the project to generate the documentation.  "
});

documentTitles["07-documentation.html#step-2"] = "Step 2";
index.add({
    url: "07-documentation.html#step-2",
    title: "Step 2",
    body: "### Step 2 run ```bash $ grunt docs ``` This will then generate the documentation locally to the **docs** folder.  &lt;br/&gt; "
});

documentTitles["07-documentation.html#deploy-docs-to-gh-pages"] = "Deploy Docs to GH-Pages";
index.add({
    url: "07-documentation.html#deploy-docs-to-gh-pages",
    title: "Deploy Docs to GH-Pages",
    body: "## Deploy Docs to GH-Pages  When the documentation is generated and parsed properly then you can deploy to the [website](http://medullan.github.io/vagrant-ansible-jenkins)  **NB.** Please review generated docs locally before deploying  You can deploy by running: ```bash $ grunt deploy ``` "
});



documentTitles["08-development.html#development"] = "Development";
index.add({
    url: "08-development.html#development",
    title: "Development",
    body: "# Development  "
});

documentTitles["08-development.html#rules"] = "Rules";
index.add({
    url: "08-development.html#rules",
    title: "Rules",
    body: "### Rules  - Please do not push to the master branch of this repository with code/tasks that have not been peer reviewed. - Please branch from master and make pull requests to submit changes - A conversation/pull request needs to happen before anything is merged into master - Always do a **vagrant destroy** then **vagrant up** for a final test to ensure that additions work properly end to end"
});



documentTitles["known-issues.html#known-issues"] = "Known Issues";
index.add({
    url: "known-issues.html#known-issues",
    title: "Known Issues",
    body: "# Known Issues  "
});

documentTitles["known-issues.html#issue-shared-workspace-jenkins-plugin-woes"] = "Issue: shared-workspace Jenkins Plugin woes";
index.add({
    url: "known-issues.html#issue-shared-workspace-jenkins-plugin-woes",
    title: "Issue: shared-workspace Jenkins Plugin woes",
    body: "## Issue: shared-workspace Jenkins Plugin woes  The github-oauth@0.19 plugin doesnt play well with the shared-workspace plugin. At version 0.19, the github-oauth plugin checks each job for a git url and if this url is null then an exception is thrown. This happens when the ${SHAREDSPACE_SCM_URL} is used. This variable is null until a job is executed, hence the github-oauth plugin will throw a fit.  "
});

documentTitles["known-issues.html#resolution"] = "Resolution";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution",
    body: "#### Resolution Just avoid using that variable and everything will be ok.  &lt;br/&gt; "
});

documentTitles["known-issues.html#issue-invalid-machine-state-when-provisioning"] = "Issue: Invalid machine state when provisioning";
index.add({
    url: "known-issues.html#issue-invalid-machine-state-when-provisioning",
    title: "Issue: Invalid machine state when provisioning",
    body: "## Issue: Invalid machine state when provisioning  With `VirtualBox v4.3.14`, when doing `vagrant up`, an error (or similar error) sometimes occurs saying: "
});

documentTitles["known-issues.html#exception"] = "Exception";
index.add({
    url: "known-issues.html#exception",
    title: "Exception",
    body: "#### Exception The guest machine entered an invalid state while waiting for it to boot. Valid states are 'starting, running'. The machine is in the 'poweroff' state. Please verify everything is configured properly and try again. If the provider you're using has a GUI that comes with it, it is often helpful to open that and watch the machine, since the GUI often has more helpful error messages than Vagrant can retrieve. For example, if you're using VirtualBox, run `vagrant up` while the VirtualBox GUI is open. "
});

documentTitles["known-issues.html#resolution"] = "Resolution:";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution:",
    body: "#### Resolution: To resolve the issue, downgrading to version `VirtualBox v4.3.12` worked  &lt;br/&gt; "
});

documentTitles["known-issues.html#issue-ansiblehost-turned-into-executable-file"] = "Issue: ansible.host turned into executable file";
index.add({
    url: "known-issues.html#issue-ansiblehost-turned-into-executable-file",
    title: "Issue: ansible.host turned into executable file",
    body: "## Issue: ansible.host turned into executable file Sometimes pulling the repository down will make `ansible.host` an executable file and will produce the following error:  ####Exception  ERROR: The file provisioners/ansible/ansible.host is marked as executable, but failed to execute correctly. If this is not supposed to be an executable script, correct this with `chmod -x provisioners/ansible/ansible.host`.  "
});

documentTitles["known-issues.html#resolution"] = "Resolution";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution",
    body: "#### Resolution To resolve the issue, run `chmod -x provisioners/ansible/ansible.host`  &lt;br/&gt; "
});

documentTitles["known-issues.html#issue-ansible-provisioning-fails-when-using-jenkins-cli"] = "Issue: Ansible Provisioning fails when using Jenkins CLI";
index.add({
    url: "known-issues.html#issue-ansible-provisioning-fails-when-using-jenkins-cli",
    title: "Issue: Ansible Provisioning fails when using Jenkins CLI",
    body: "## Issue: Ansible Provisioning fails when using Jenkins CLI Sometimes this will happen because Jenkins is not fully online after a restart during provisioning. This is either because the sleep time isn't long enough or Jenkins takes a little longer to start.  ####Exception ```java failed: [54.69.156.112] =&gt; {\&quot;changed\&quot;: true, \&quot;cmd\&quot;: \&quot;java -jar /opt/jenkins/jenkins-cli.jar -s http://localhost:8080 list-jobs All\&quot;, \&quot;delta\&quot;: \&quot;0:00:06.720559\&quot;, \&quot;end\&quot;: \&quot;2014-09-30 14:49:18.306571\&quot;, \&quot;rc\&quot;: 1, \&quot;start\&quot;: \&quot;2014-09-30 14:49:11.586012\&quot;} stderr: Exception in thread \&quot;main\&quot; java.io.IOException: No X-Jenkins-CLI2-Port among [X-Jenkins, null, X-Hudson, X-Hudson-Theme, Content-Length, Expires, X-Jenkins-Session, Set-Cookie, Content-Type, Server, Cache-Control] 	at hudson.cli.CLI.getCliTcpPort(CLI.java:283) 	at hudson.cli.CLI.&lt;init&gt;(CLI.java:126) 	at hudson.cli.CLIConnectionFactory.connect(CLIConnectionFactory.java:72) 	at hudson.cli.CLI._main(CLI.java:466) 	at hudson.cli.CLI.main(CLI.java:382) 	Suppressed: java.io.IOException: Server returned HTTP response code: 503 for URL: http://localhost:8080/cli 		at sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1626) 		at hudson.cli.FullDuplexHttpStream.&lt;init&gt;(FullDuplexHttpStream.java:78) 		at hudson.cli.CLI.connectViaHttp(CLI.java:156) 		at hudson.cli.CLI.&lt;init&gt;(CLI.java:130) 		... 3 more  FATAL: all hosts have already failed -- aborting ```  "
});

documentTitles["known-issues.html#resolution"] = "Resolution";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution",
    body: "#### Resolution To resolve this just run **vagrant provision** again and it will should resolve the issue  &lt;br/&gt; "
});

documentTitles["known-issues.html#issue-ansible-provisioning-with-aws-fails-with-ssh-exception"] = "Issue: Ansible Provisioning with AWS fails with SSH Exception";
index.add({
    url: "known-issues.html#issue-ansible-provisioning-with-aws-fails-with-ssh-exception",
    title: "Issue: Ansible Provisioning with AWS fails with SSH Exception",
    body: "## Issue: Ansible Provisioning with AWS fails with SSH Exception  When provisioning the Jenkins environment with AWS for the first time, the provisioning will fail for SSH reasons.  This can be resolved by getting the **Public IP Address** of the created instance in your **EC2 Console** and replacing the Public IP Address within the **/provisioners/ansible/ansible.host** file. ####Exception ```bash GATHERING FACTS ***************************************************************  fatal: [127.0.0.1] =&gt; SSH encountered an unknown error during the connection.  We recommend you re-run the command using -vvvv, which will enable SSH  debugging output to help diagnose the issue ```  "
});

documentTitles["known-issues.html#resolution"] = "Resolution";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution",
    body: "#### Resolution Current File **( /provisioners/ansible/ansible.host )** ``` [jenkins] 127.0.0.1 ansible_ssh_port=2222 ```  Eg. of what to be updated to: ``` [jenkins] 54.69.58.64 ```  then run: ``` $ vagrant provision ```  This will now provision the machine properly (given the IP address you put is correct).   **NB.** Note that the machine is already running and we do not need to run **vagrant up** again. Thus running **vagrant provision** will work just fine "
});



documentTitles["license.html#license"] = "License";
index.add({
    url: "license.html#license",
    title: "License",
    body: "# License  The MIT License  Copyright (c) 2014. https://github.com/medullan/vagrant-ansible-jenkins  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \&quot;Software\&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  THE SOFTWARE IS PROVIDED \&quot;AS IS\&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
});




var index = lunr(function () {
    this.field('body');
    this.ref('url');
});

var documentTitles = {};



documentTitles["home.html#home"] = "Home";
index.add({
    url: "home.html#home",
    title: "Home",
    body: "# Home
});

documentTitles["home.html#useful-links"] = "Useful Links:";
index.add({
    url: "home.html#useful-links",
    title: "Useful Links:",
    body: "### Useful Links:
});



documentTitles["01-intro.html#introduction"] = "Introduction";
index.add({
    url: "01-intro.html#introduction",
    title: "Introduction",
    body: "# Introduction
});

documentTitles["01-intro.html#credits"] = "Credits";
index.add({
    url: "01-intro.html#credits",
    title: "Credits",
    body: "### Credits
});



documentTitles["02-requirements-and-features.html#requirements"] = "Requirements";
index.add({
    url: "02-requirements-and-features.html#requirements",
    title: "Requirements",
    body: "# Requirements
});

documentTitles["02-requirements-and-features.html#features"] = "Features";
index.add({
    url: "02-requirements-and-features.html#features",
    title: "Features",
    body: "# Features
});



documentTitles["03-whats-already-inside.html#whats-already-inside"] = "Whats already inside";
index.add({
    url: "03-whats-already-inside.html#whats-already-inside",
    title: "Whats already inside",
    body: "# Whats already inside
});

documentTitles["03-whats-already-inside.html#major-apt-packages"] = "Major Apt Packages";
index.add({
    url: "03-whats-already-inside.html#major-apt-packages",
    title: "Major Apt Packages",
    body: "### Major Apt Packages
});



documentTitles["031-checkurl-groovy-script.html#checkurl-groovy-script"] = "CheckUrl Groovy Script";
index.add({
    url: "031-checkurl-groovy-script.html#checkurl-groovy-script",
    title: "CheckUrl Groovy Script",
    body: "## CheckUrl Groovy Script
});

documentTitles["031-checkurl-groovy-script.html#what-is-checkurl"] = "What is CheckUrl?";
index.add({
    url: "031-checkurl-groovy-script.html#what-is-checkurl",
    title: "What is CheckUrl?",
    body: "### What is CheckUrl?
});

documentTitles["031-checkurl-groovy-script.html#use-case"] = "Use Case";
index.add({
    url: "031-checkurl-groovy-script.html#use-case",
    title: "Use Case",
    body: "### Use Case
});

documentTitles["031-checkurl-groovy-script.html#where-is-it"] = "Where is it?";
index.add({
    url: "031-checkurl-groovy-script.html#where-is-it",
    title: "Where is it?",
    body: "### Where is it?
});

documentTitles["031-checkurl-groovy-script.html#how-to-use"] = "How to Use";
index.add({
    url: "031-checkurl-groovy-script.html#how-to-use",
    title: "How to Use",
    body: "### How to Use
});

documentTitles["031-checkurl-groovy-script.html#example"] = "Example";
index.add({
    url: "031-checkurl-groovy-script.html#example",
    title: "Example",
    body: "### Example
});



documentTitles["032-saucelabs-python-script.html#saucelabs-python-script"] = "SauceLabs Python Script";
index.add({
    url: "032-saucelabs-python-script.html#saucelabs-python-script",
    title: "SauceLabs Python Script",
    body: "## SauceLabs Python Script
});

documentTitles["032-saucelabs-python-script.html#where-is-it"] = "Where is it?";
index.add({
    url: "032-saucelabs-python-script.html#where-is-it",
    title: "Where is it?",
    body: "### Where is it?
});



documentTitles["04-how-to-setup.html#how-to-setup"] = "How to Setup";
index.add({
    url: "04-how-to-setup.html#how-to-setup",
    title: "How to Setup",
    body: "# How to Setup
});



documentTitles["041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#install-plugins"] = "Install Plugins";
index.add({
    url: "041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#install-plugins",
    title: "Install Plugins",
    body: "## Install Plugins
});

documentTitles["041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#create-jobs"] = "Create Jobs";
index.add({
    url: "041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#create-jobs",
    title: "Create Jobs",
    body: "## Create Jobs
});

documentTitles["041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#share-files-with-the-imagebox"] = "Share Files with the Image/Box";
index.add({
    url: "041-verify-list-of-jenkins-plugins-and-jobs-to-be-installed.html#share-files-with-the-imagebox",
    title: "Share Files with the Image/Box",
    body: "## Share Files with the Image/Box
});



documentTitles["042-update-override-variables.html#update-override-variables"] = "Update Override Variables";
index.add({
    url: "042-update-override-variables.html#update-override-variables",
    title: "Update Override Variables",
    body: "## Update Override Variables
});

documentTitles["042-update-override-variables.html#checkupdate-waiting-time-for-jenkins-restarts"] = "Check/Update Waiting time for jenkins restarts";
index.add({
    url: "042-update-override-variables.html#checkupdate-waiting-time-for-jenkins-restarts",
    title: "Check/Update Waiting time for jenkins restarts",
    body: "#### Check/Update Waiting time for jenkins restarts
});

documentTitles["042-update-override-variables.html#set-git-credentials"] = "Set Git Credentials";
index.add({
    url: "042-update-override-variables.html#set-git-credentials",
    title: "Set Git Credentials",
    body: "#### Set Git Credentials
});

documentTitles["042-update-override-variables.html#settings"] = "Settings:";
index.add({
    url: "042-update-override-variables.html#settings",
    title: "Settings:",
    body: "##### Settings:
});

documentTitles["042-update-override-variables.html#set-rally-variables-to-preconfigure-plugin"] = "Set Rally Variables to Preconfigure Plugin";
index.add({
    url: "042-update-override-variables.html#set-rally-variables-to-preconfigure-plugin",
    title: "Set Rally Variables to Preconfigure Plugin",
    body: "#### Set Rally Variables to Preconfigure Plugin
});

documentTitles["042-update-override-variables.html#settings"] = "Settings:";
index.add({
    url: "042-update-override-variables.html#settings",
    title: "Settings:",
    body: "##### Settings:
});

documentTitles["042-update-override-variables.html#edit-github-security-settings"] = "Edit GitHub Security Settings";
index.add({
    url: "042-update-override-variables.html#edit-github-security-settings",
    title: "Edit GitHub Security Settings",
    body: "#### Edit GitHub Security Settings
});

documentTitles["042-update-override-variables.html#settings"] = "Settings:";
index.add({
    url: "042-update-override-variables.html#settings",
    title: "Settings:",
    body: "##### Settings:
});

documentTitles["042-update-override-variables.html#things-to-note"] = "Things to Note:";
index.add({
    url: "042-update-override-variables.html#things-to-note",
    title: "Things to Note:",
    body: "#### Things to Note:
});

documentTitles["042-update-override-variables.html#configure-jenkins-memory"] = "Configure Jenkins Memory";
index.add({
    url: "042-update-override-variables.html#configure-jenkins-memory",
    title: "Configure Jenkins Memory",
    body: "#### Configure Jenkins Memory
});

documentTitles["042-update-override-variables.html#install-global-npm-packages"] = "Install global npm packages";
index.add({
    url: "042-update-override-variables.html#install-global-npm-packages",
    title: "Install global npm packages",
    body: "#### Install global npm packages
});



documentTitles["05-create-jenkins-environment-with-vagrant.html#create-jenkins-environment-with-vagrant"] = "Create Jenkins Environment with Vagrant";
index.add({
    url: "05-create-jenkins-environment-with-vagrant.html#create-jenkins-environment-with-vagrant",
    title: "Create Jenkins Environment with Vagrant",
    body: "# Create Jenkins Environment with Vagrant
});



documentTitles["051-provision-with-virtualbox.html#local-provisioning-with-virtualbox"] = "Local provisioning with VirtualBox";
index.add({
    url: "051-provision-with-virtualbox.html#local-provisioning-with-virtualbox",
    title: "Local provisioning with VirtualBox",
    body: "## Local provisioning with VirtualBox
});



documentTitles["052-provision-jenkins-with-aws.html#provision-with-aws-amazon-web-service"] = "Provision with AWS (Amazon Web Service)";
index.add({
    url: "052-provision-jenkins-with-aws.html#provision-with-aws-amazon-web-service",
    title: "Provision with AWS (Amazon Web Service)",
    body: "## Provision with AWS (Amazon Web Service)
});

documentTitles["052-provision-jenkins-with-aws.html#step-1-change-the-vm-box-to-be-used"] = "Step 1 - Change the vm box to be used";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-1-change-the-vm-box-to-be-used",
    title: "Step 1 - Change the vm box to be used",
    body: "### Step 1 - Change the vm box to be used
});

documentTitles["052-provision-jenkins-with-aws.html#step-2-change-ansible-override-variables"] = "Step 2 - Change Ansible Override Variables";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-2-change-ansible-override-variables",
    title: "Step 2 - Change Ansible Override Variables",
    body: "### Step 2 - Change Ansible Override Variables
});

documentTitles["052-provision-jenkins-with-aws.html#step-3-fill-in-required-aws-info"] = "Step 3 - Fill in required AWS info";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-3-fill-in-required-aws-info",
    title: "Step 3 - Fill in required AWS info",
    body: "### Step 3 - Fill in required AWS info
});

documentTitles["052-provision-jenkins-with-aws.html#step-4-uncomment-rsync-folder-sharing"] = "Step 4 - Uncomment Rsync Folder sharing";
index.add({
    url: "052-provision-jenkins-with-aws.html#step-4-uncomment-rsync-folder-sharing",
    title: "Step 4 - Uncomment Rsync Folder sharing",
    body: "### Step 4 - Uncomment Rsync Folder sharing
});

documentTitles["052-provision-jenkins-with-aws.html#extras"] = "Extras";
index.add({
    url: "052-provision-jenkins-with-aws.html#extras",
    title: "Extras",
    body: "### Extras
});

documentTitles["052-provision-jenkins-with-aws.html#caveats"] = "Caveats";
index.add({
    url: "052-provision-jenkins-with-aws.html#caveats",
    title: "Caveats",
    body: "### Caveats
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
    body: "# Documentation
});

documentTitles["07-documentation.html#about"] = "About";
index.add({
    url: "07-documentation.html#about",
    title: "About",
    body: "## About
});

documentTitles["07-documentation.html#editing-the-docs"] = "Editing the Docs";
index.add({
    url: "07-documentation.html#editing-the-docs",
    title: "Editing the Docs",
    body: "## Editing the Docs
});

documentTitles["07-documentation.html#generate-documentation-website"] = "Generate Documentation Website";
index.add({
    url: "07-documentation.html#generate-documentation-website",
    title: "Generate Documentation Website",
    body: "## Generate Documentation Website
});

documentTitles["07-documentation.html#step-1"] = "Step 1";
index.add({
    url: "07-documentation.html#step-1",
    title: "Step 1",
    body: "### Step 1
});

documentTitles["07-documentation.html#step-2"] = "Step 2";
index.add({
    url: "07-documentation.html#step-2",
    title: "Step 2",
    body: "### Step 2
});

documentTitles["07-documentation.html#deploy-docs-to-gh-pages"] = "Deploy Docs to GH-Pages";
index.add({
    url: "07-documentation.html#deploy-docs-to-gh-pages",
    title: "Deploy Docs to GH-Pages",
    body: "## Deploy Docs to GH-Pages
});



documentTitles["08-development.html#development"] = "Development";
index.add({
    url: "08-development.html#development",
    title: "Development",
    body: "# Development
});

documentTitles["08-development.html#rules"] = "Rules";
index.add({
    url: "08-development.html#rules",
    title: "Rules",
    body: "### Rules
});



documentTitles["known-issues.html#known-issues"] = "Known Issues";
index.add({
    url: "known-issues.html#known-issues",
    title: "Known Issues",
    body: "# Known Issues
});

documentTitles["known-issues.html#issue-shared-workspace-jenkins-plugin-woes"] = "Issue: shared-workspace Jenkins Plugin woes";
index.add({
    url: "known-issues.html#issue-shared-workspace-jenkins-plugin-woes",
    title: "Issue: shared-workspace Jenkins Plugin woes",
    body: "## Issue: shared-workspace Jenkins Plugin woes
});

documentTitles["known-issues.html#resolution"] = "Resolution";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution",
    body: "#### Resolution
});

documentTitles["known-issues.html#issue-invalid-machine-state-when-provisioning"] = "Issue: Invalid machine state when provisioning";
index.add({
    url: "known-issues.html#issue-invalid-machine-state-when-provisioning",
    title: "Issue: Invalid machine state when provisioning",
    body: "## Issue: Invalid machine state when provisioning 
});

documentTitles["known-issues.html#exception"] = "Exception";
index.add({
    url: "known-issues.html#exception",
    title: "Exception",
    body: "#### Exception
});

documentTitles["known-issues.html#resolution"] = "Resolution:";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution:",
    body: "#### Resolution:
});

documentTitles["known-issues.html#issue-ansiblehost-turned-into-executable-file"] = "Issue: ansible.host turned into executable file";
index.add({
    url: "known-issues.html#issue-ansiblehost-turned-into-executable-file",
    title: "Issue: ansible.host turned into executable file",
    body: "## Issue: ansible.host turned into executable file
});

documentTitles["known-issues.html#resolution"] = "Resolution";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution",
    body: "#### Resolution
});

documentTitles["known-issues.html#issue-ansible-provisioning-fails-when-using-jenkins-cli"] = "Issue: Ansible Provisioning fails when using Jenkins CLI";
index.add({
    url: "known-issues.html#issue-ansible-provisioning-fails-when-using-jenkins-cli",
    title: "Issue: Ansible Provisioning fails when using Jenkins CLI",
    body: "## Issue: Ansible Provisioning fails when using Jenkins CLI
});

documentTitles["known-issues.html#resolution"] = "Resolution";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution",
    body: "#### Resolution
});

documentTitles["known-issues.html#issue-ansible-provisioning-with-aws-fails-with-ssh-exception"] = "Issue: Ansible Provisioning with AWS fails with SSH Exception";
index.add({
    url: "known-issues.html#issue-ansible-provisioning-with-aws-fails-with-ssh-exception",
    title: "Issue: Ansible Provisioning with AWS fails with SSH Exception",
    body: "## Issue: Ansible Provisioning with AWS fails with SSH Exception
});

documentTitles["known-issues.html#resolution"] = "Resolution";
index.add({
    url: "known-issues.html#resolution",
    title: "Resolution",
    body: "#### Resolution
});



documentTitles["license.html#license"] = "License";
index.add({
    url: "license.html#license",
    title: "License",
    body: "# License
});


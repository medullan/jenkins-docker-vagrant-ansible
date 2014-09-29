# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  # Every Vagrant virtual environment requires a box to build off of. Choose one!

  # box built by packer to provision with AWS
  # config.vm.box = "packer_amazon-ebs_aws.box"

  # box built by packer to provision with VirtualBox
  # config.vm.box = "packer_virtualbox-iso_virtualbox.box"

  # box from VagrantCloud to provision with VirtualBox (clean ubuntu)
  config.vm.box = "ubuntu/trusty64"

  # Name for vagrant box to be created
  config.vm.define "jenkinsMaster" do |jenkinsMaster|
  end

  # Provisioning for jenkins master using Ansible
  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "provisioners/ansible/jenkins-master-playbook.yml"
    ansible.inventory_path = "provisioners/ansible/ansible.host"
    ansible.limit = 'all'

    # can be used to skip reprovisioning dependencies
    # ansible.skip_tags = ['setup']

    # Ansible variables; select one for provision type:
    # override/set ansible vars here for VirtualBox
    ansible.extra_vars = "provisioners/ansible/extra_vars/jenkins-master-playbook-vars.yml"

    # override/set ansible vars here for AWS
    # ansible.extra_vars = "provisioners/ansible/extra_vars/jenkins-master-aws-playbook-vars.yml"

    # turn on verbose mode to see logging/debug (can be up to four v's eg. ('vvvv'))
    # ansible.verbose = 'vvvv'
  end

  config.vm.provider :aws do |aws, override|
      override.ssh.username = "ubuntu"
      override.ssh.private_key_path = "" # location of rsa private key file here

      aws.keypair_name = ""
      aws.access_key_id = "" # Your access key id here
      aws.secret_access_key = "" # Your secret access key here

      aws.ami = "ami-8bda99bb" # replace with AMI id generated with packer if necessary
      aws.security_groups = ["launch-wizard-1"] # replace with preferred security group, must have an ssh port
      aws.region = "us-west-2"
  end

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 8080 on the guest machine.
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 5000, host: 5000


  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.

  #Shared Folder for Virtual box
  #Shared Folder for AWS
  # config.vm.synced_folder ".", "/vagrant", type: "rsync", :rsync_excludes => ['packer_cache/', 'http/', 'output-*/', '*.box', '*.pem', 'vagrant-ansible-jenkins.wiki', 'docs', '*.cer', 'node_modules', '*.js', '*.json', '.grunt']


  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
    # Don't boot with headless mode
    # vb.gui = true

    # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "2048"]
  end

end

# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  environment = "aws" #TODO: consider configure to read from yaml file

  config.vm.define "jenkinsSlave" do |jenkinsSlave|

      jenkinsSlave.vm.hostname="jenkinsSlave"

      jenkinsSlave.vm.network "forwarded_port", guest: 22, host: 22

      jenkinsSlave.vm.provision "ansible" do |ansible|

        ansible.playbook = "provisioners/ansible/jenkins-slave-playbook.yml"
        ansible.inventory_path = "provisioners/ansible/ansible.host"

        ansible.limit = 'all'


        if environment == "virtual_box" then
          jenkinsSlave.vm.box = "ubuntu/trusty64"
          ansible.extra_vars = "provisioners/ansible/extra_vars/jenkins-master-playbook-vars.yml"
        end

        if environment == "aws" then
          jenkinsSlave.vm.box = "dummy"
          aws_ansible(jenkinsSlave, ansible)
        end
      end
  end

  config.vm.define "jenkinsMaster" do |jenkinsMaster|

      jenkinsMaster.vm.hostname = 'jenkinsMaster'

      jenkinsMaster.vm.network "forwarded_port", guest: 8080, host: 8080
      jenkinsMaster.vm.network "forwarded_port", guest: 22, host: 22

      jenkinsMaster.vm.provision "ansible" do |ansible|

        ansible.playbook = "provisioners/ansible/jenkins-master-playbook.yml"
        ansible.inventory_path = "provisioners/ansible/ansible.host"
        ansible.limit = 'all'

        if environment == "virtual_box" then
          jenkinsMaster.vm.box = "ubuntu/trusty64"
          ansible.extra_vars = "provisioners/ansible/extra_vars/jenkins-master-playbook-vars.yml"
        end

        if environment == "aws" then
          jenkinsMaster.vm.box = "dummy"
          aws_ansible(jenkinsMaster, ansible)
      end
    end
  end


  #Method definitions

  def aws_ansible(config, ansible)
    ansible.extra_vars = "provisioners/ansible/extra_vars/jenkins-master-aws-playbook-vars.yml"
    aws_provider_configs(config)
    config.vm.synced_folder ".", "/vagrant", type: "rsync", :rsync_excludes => ['packer_cache/', 'http/', 'output-*/', '*.box', '*.pem', 'vagrant-ansible-jenkins.wiki', 'docs', '*.cer', 'node_modules', '*.js', '*.json', '.grunt']
  end


  def aws_provider_configs(config)
    config.vm.provider :aws do |aws, override|
        override.ssh.username = ENV["AWS_SSH_USER"]
        override.ssh.private_key_path = ENV["AWS_KEY_LOCATION"]

        aws.keypair_name = ENV["AWS_KEYPAIR_NAME"]
        aws.access_key_id = ENV["AWS_ACCESS_KEY_ID"]
        aws.secret_access_key = ENV["AWS_SECRET_ACCESS_KEY"]
        aws.ami = ENV["AMI"]
        aws.security_groups = [ENV['AWS_SECURITY_GROUP']]

        aws.region = "us-east-1"
        aws.tags = {
          'Name' => 'jenkins-docker-master',
          'Provisioner' => 'Medullan',
          'OS_Version' => 'Ubuntu',
          'Release' => 'Latest'
        }
    end
  end

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  config.vm.provider "virtualbox" do |vb|
    # Don't boot with headless mode
    # vb.gui = true

    # Use VBoxManage to customize the VM. For example to change memory:
    vb.customize ["modifyvm", :id, "--memory", "2048"]
  end

end

# -*- mode: ruby -*-
# vi: set ft=ruby :
require 'yaml'

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  # Reads environment variable from config.yml file
  configs = YAML.load_file('config.yml')

  environment = configs['main']['environment']

  config.vm.define "jenkinsSlave" do |jenkinsSlave|

      jenkinsSlave.vm.hostname="jenkinsSlave"

      jenkinsSlave.vm.network "forwarded_port", guest: 22, host: 22

      jenkinsSlave.vm.provision "ansible" do |ansible|

        ansible.playbook = "provisioners/ansible/jenkins-slave-playbook.yml"

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

        # Reads environment variable from config.yml file
        configs = YAML.load_file('config.yml')

        aws_configs = configs["main"]["aws"]

        override.ssh.username = ENV["AWS_SSH_USER"] || aws_configs["ssh_user"]
        override.ssh.private_key_path = ENV["AWS_KEY_LOCATION"] || aws_configs["key_location"]
        aws.keypair_name = ENV["AWS_KEYPAIR_NAME"] || aws_configs["keypair_name"]
        aws.access_key_id = ENV["AWS_ACCESS_KEY_ID"] || aws_configs["access_key_id"]
        aws.secret_access_key = ENV["AWS_SECRET_ACCESS_KEY"] || aws_configs["secret_access_key"]
        aws.ami = ENV["AMI"] || aws_configs["ami"]
        aws.security_groups = [ENV['AWS_SECURITY_GROUP']] || aws_configs["security_group"]
        aws.region = ENV["AWS_REGION"] || aws_configs["region"]

        aws.tags = {
          'Name' => 'jenkins-docker-master',
          'Provisioner' => 'Medullan',
          'OS_Version' => 'Ubuntu',
          'Release' => 'Latest'
        }
    end
  end

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--memory", "2048"]
  end

end

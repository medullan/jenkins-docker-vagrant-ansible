# Updating and Upgrading dependencies
echo "**************** Updating dependencies ****************"
sudo apt-get update -y -qq > /dev/null
sudo apt-get -y -q install linux-headers-$(uname -r)

echo "**************** Installing ansible ****************"
sudo apt-get -y -q install software-properties-common
sudo apt-add-repository -y  ppa:ansible/ansible
sudo apt-get update -y -qq
sudo apt-get install -y -q ansible

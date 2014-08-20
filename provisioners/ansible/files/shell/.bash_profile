export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

function parse_git_branch () {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

RED="\[\033[0;31m\]"
YELLOW="\[\033[0;33m\]"
NO_COLOR="\[\033[0m\]"
Blue='\[\e[01;34m\]'
White='\[\e[01;37m\]'
Red='\[\e[01;31m\]'
GREEN='\[\e[01;32m\]'

PS1="$NO_COLOR\u@\h$NO_COLOR:\W$YELLOW\$(parse_git_branch)$NO_COLOR\$ "

/**
* Sets up the GitHub Security strategy for Jenkins
* @author: Layton Whiteley
* @date: Aug 19, 2014
* @usage:  This is designed to work with the groovy command of the Jenkins CLI
*          There is no guarantee that this script works without the Jenkins CLI
* @example: java -jar jenkins-cli.jar -s http://localhost:8080 groovy security.groovy admins='{jenkins_admins}' orgs='{github_orgNames}' clientid='{github_clientId}' clientsecret='{github_clientSecret}'
* @note: Please note in the example above {jenkins_admins} is a string to be replaced with the actual value
*        the actual implementation will look like => admins='admin1,admin2'
* @see runCli() below to see the flow of execution
**/
def isValidString ={ value ->
  if(value != null && value instanceof String && value.trim() != ""){
    return true
  }
  return false
}

def setupGitHubSecurity = {clientId, clientSecret, admins, orgNames  ->
  if(isValidString(orgNames) && isValidString(clientId) && isValidString(clientSecret) && isValidString(admins)){
    println "All dependencies set. Proceeding!"
    def githubSecurityRealm = new org.jenkinsci.plugins.GithubSecurityRealm(
      "https://github.com",
      "https://api.github.com",
      clientId,
      clientSecret)

    /**
    * GithubAuthorizationStrategy constructor params
    * source: https://github.com/jenkinsci/github-oauth-plugin/blob/master/src/main/java/org/jenkinsci/plugins/GithubAuthorizationStrategy.java
    * ==============================================
    * String adminUserNames,
    * boolean authenticatedUserReadPermission,
    * boolean useRepositoryPermissions,
    * boolean authenticatedUserCreateJobPermission,
    * String organizationNames,
    * boolean allowGithubWebHookPermission,
    * boolean allowCcTrayPermission,
    * boolean allowAnonymousReadPermission
    * ==============================================
    * Please see source for latest code if this throws errors
    **/
    def authorizationStrategy = new org.jenkinsci.plugins.GithubAuthorizationStrategy(
      admins, /*adminUserNames*/
      false, /*authenticatedUserReadPermission*/
      true, /*useRepositoryPermissions*/
      true, /*authenticatedUserCreateJobPermission*/
      orgNames, /*organizationNames*/
      true, /*allowGithubWebHookPermission*/
      false, /*allowCcTrayPermission*/
      false) /*allowAnonymousReadPermission*/

    jenkins.model.Jenkins.instance.setSecurityRealm(githubSecurityRealm)
    jenkins.model.Jenkins.instance.setAuthorizationStrategy(authorizationStrategy)
    jenkins.model.Jenkins.instance.save()
    println "process success"
    println "Security setup. Complete!"
  }else{
    println "nothing done"
    println "Required strings were not set. cannot setup security!"
  }
}

def parseArgs = { keys, cliArgs ->
  def options = new LinkedHashMap();
  keys.each() {
    def identifier = "${it}="
    for (int i = 0; i < cliArgs.length; i++) {
      if(cliArgs[i].contains(identifier)){
        options[it] = cliArgs[i].minus(identifier)
        break;
      }
    }

  }
  return options
}

def runCli = { args ->
  def keys = ["admins", "orgs", "clientid", "clientsecret"]
  def options = parseArgs(keys, args)
  println " Setting up security with the following parameters =>"
  println " clientid: ${options.clientid}"
  println " clientsecret: ${options.clientsecret}"
  println " admins: ${options.admins}"
  println " orgs: ${options.orgs}"
  setupGitHubSecurity(options.clientid, options.clientsecret, options.admins, options.orgs)
}

runCli(args)

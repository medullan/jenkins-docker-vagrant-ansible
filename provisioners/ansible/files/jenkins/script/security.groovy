/**
* compiled by: Layton Whiteley
* Date: Aug 19, 2014
**/

def orgName = ""
def clientId = ""
def clientSecret = ""
// comma delimited usernames
def admins = ""

def isValidString(value){
  if(value != null && value instanceof String && value != ""){
    return true
  }
  return false
}

if(isValidString(orgName) && isValidString(clientId) && isValidString(clientSecret) && isValidString(admins)){
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
    orgName, /*organizationNames*/
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
  //throw new GroovyRuntimeException("required strings were not set. cannot setup security!")
}

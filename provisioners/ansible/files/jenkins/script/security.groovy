/**
* compiled by: Layton Whiteley
* Date: Aug 19, 2014
**/

def orgName = "medullan"
def clientId = "02320dbdc3b20a428642"
def clientSecret = "1a1c672cb765aa89b2c2296551adbd0a9635284d"
// comma delimited usernames
def admins = "lwhiteley,carepass-ci"

def githubSecurityRealm = new org.jenkinsci.plugins.GithubSecurityRealm("https://github.com", "https://api.github.com", clientId, clientSecret)

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
def authorizationStrategy = new org.jenkinsci.plugins.GithubAuthorizationStrategy(admins,true, true, true,orgName,true,false,false)

jenkins.model.Jenkins.instance.setSecurityRealm(githubSecurityRealm)
jenkins.model.Jenkins.instance.setAuthorizationStrategy(authorizationStrategy)
jenkins.model.Jenkins.instance.save()

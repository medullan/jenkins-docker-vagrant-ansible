import java.text.*
def isValidString (value){
  if(value != null && value instanceof String && value.trim() != ""){
    return true
  }
  return false
}

def runCommand(packages){

  if(isValidString(packages)){
    def result = "sudo npm install -g ${packages}".execute().text
    println result
  }else{
    println "nothing done"
    println "packages may be empty: ${packages}"
  }
}

/**
* Closure that
* runs the CLI (command line interface) Logic
*/
def runCli = { args ->
    def cli = new CliBuilder(usage: 'npm.groovy -[hp] ')
    // Create the list of options.
    cli.with {
        h longOpt: 'help', 'Show usage information'
          p longOpt: 'packages', args: 1, argName: 'packages', 'npm packages'
    }

    def options = cli.parse(args)
    if (!options) {
        return
    }
    // Show usage text when -h or --help option is used.
    if (options.h) {
        cli.usage()
        return
    }

    //def extraArguments = options.arguments()
    if (options.p) {
        //def fileName = extraArguments[0]
        runCommand(options.p)
    }else{
      println "nothing done"
      println "Required options are not found"
      cli.usage()
    }
}

runCli(args)

import java.text.*

def isValidString(value){
  if(value != null && value instanceof String && value.trim() != ""){
    return true
  }
  return false
}

def changeValue(fileName, memory, _perm){
  if(isValidString(fileName)){
    fileName = fileName.trim()
    File file = new File(fileName)
    def _memoryString = ""
    def _maxPermSizeString = ""

    if(file.exists()){

      if(memory && isValidString(memory) && memory.isInteger() && memory.toInteger() >= 256){
        memory = memory.trim()
        _memoryString = "-Xmx${memory}m"
      }else{
        println "either no memory set or size is less than 256"
      }
      if(_perm && isValidString(memory) && _perm.trim().isInteger() && _perm.trim().toInteger() >= 512){
        memory = memory.trim()
        _maxPermSizeString = "-XX:MaxPermSize=${_perm}m"
      }else{
        println "either no permSize set or size is less than 512"
      }

      def toReplace = "JAVA_ARGS=\"([^\"]+)\""
      def newValue = "JAVA_ARGS=\"-Djava.awt.headless=true ${_memoryString} ${_maxPermSizeString}\""
      def fileContents = file.text
      println "found file (${fileName}). Proceeding!"
      def newFileContents = fileContents.replaceFirst(toReplace, newValue)
      new File( fileName ).withWriter { out ->
        printWriter = new PrintWriter(out)
        printWriter.println(newFileContents)
        printWriter.close()
        println "process success"
        println "Changing value => Completed!"
      }
    }else{
      println "nothing done"
      println "file does not exist!  => L2 - ${fileName}"
    }
  }else{
    println "nothing done"
    println "file does not exist! => L1 - ${fileName}"
  }

}

/**
* Closure that
* runs the CLI (command line interface) Logic
*/
def runCli = { args ->
    def cli = new CliBuilder(usage: 'jenkinsargs.groovy -[hmp] [filePath] ')
    // Create the list of options.
    cli.with {
        h longOpt: 'help', 'Show usage information'
        m longOpt: 'memory', args: 1, argName: 'memory', 'memory size Value to insert'
        p longOpt: 'maxpermsize', args: 1, argName: 'maxpermsize', 'perm size Value to insert'
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

    def extraArguments = options.arguments()
    if (extraArguments) {
        def fileName = extraArguments[0]
        changeValue(fileName, options.m, options.p)
    }else{
      println "nothing done"
      println "Required options are not found"
      cli.usage()
    }
}

runCli(args)

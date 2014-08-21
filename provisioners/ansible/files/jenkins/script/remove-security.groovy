import java.text.*
/**
* This script replaces a value in a singular xml node
* @author Layton Whiteley
* @date Aug 20, 2014
**/

def changeValue(fileName,node, newValue, header){

  if(fileName.indexOf('.xml') == -1){
    println "nothing done"
    println "${fileName} is not a xml file. Cannot Proceed!"
    return
  }
  File file = new File(fileName)
  if(file.exists()){
    println "found xml file (${fileName}). Proceeding!"
    def fileContents = file.text
    def config = new XmlParser().parseText(fileContents)

    if(config[node]){
      println "found ${node} node. Changing value!"
      println "Value Before => ${config[node]}"
      config[node][0].value = newValue
      println "Value After => ${config[node]}"

      new File( fileName ).withWriter { out ->
        printWriter = new PrintWriter(out)
        printWriter.println(header)
        printer = new XmlNodePrinter( printWriter )
        printer.preserveWhitespace = true
        printer.print( config )
        printWriter.close()
        println "process success"
        println "Changing value => Completed!"
      }
    }else{
      println "nothing done"
      println "Could not find ${node} node. Cannot change value!"
    }
  }else{
    println "nothing done"
    println "file does not exist!"
  }
}

/**
* Closure that
* runs the CLI (command line interface) Logic
*/
def runCli = { args ->
  //default file location
  def fileName //= '/var/lib/jenkins/config.xml'
  def node //= 'useSecurity'
  def newValue //= false
  def header = "<?xml version='1.0' encoding='UTF-8'?>"


    def cli = new CliBuilder(usage: '{CMD: update-node.groovy -[hnv] [xmlFilePath] }, Required Options: -[nv]')
    // Create the list of options.
    cli.with {
        h longOpt: 'help', 'Show usage information'
        n longOpt: 'node', args: 1, argName: 'node',   'XML Node Name eg. the Node <useSecurity>true</useSecurity> name is useSecurity'
        v longOpt: 'value', args: 1, argName: 'value', 'Value to insert'
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
    if (options.n){
      node = options.n
    }
    if (options.v){
      newValue = options.v
    }

    def extraArguments = options.arguments()
    if (extraArguments && options.v && options.n) {
        fileName = extraArguments[0]
        changeValue(fileName,node, newValue, header)
    }else{
      println "nothing done"
      println "Required options are not found"
    }

}

runCli(args)

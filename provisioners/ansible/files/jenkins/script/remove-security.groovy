import java.text.*
/**
* This script replaces a value in a singular xml node
* @author Layton Whiteley
* @date Aug 20, 2014
**/

def changeValue(fileName,node, newValue, header){

  if(fileName.indexOf('.xml') == -1){
    println "nothing done"
    println "not an xml file. Cannot Proceed!"
    return
  }
  File file = new File(fileName)
  if(file.exists()){
    println "found xml file. Proceeding!"
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
  def fileName = '/var/lib/jenkins/config.xml'
  def node = 'useSecurity'
  def newValue = false
  def header = "<?xml version='1.0' encoding='UTF-8'?>"

  changeValue(fileName,node, newValue, header)
}

runCli(args)

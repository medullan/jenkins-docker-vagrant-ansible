/**
* compiled by: Layton Whiteley
* Date: Aug 20, 2014
**/

def fileName = '/var/lib/jenkins/config.xml'
File file = new File(fileName)

if(file.exists()){
  println "found config file. Proceeding!"
  def fileContents = file.text
  def config = new XmlParser().parseText(fileContents)

  if(config.useSecurity){
    println "found useSecurity node. Turning security off!"
    config.useSecurity[0].value = false
    println config.useSecurity
    def header = "<?xml version='1.0' encoding='UTF-8'?>"

    new File( fileName ).withWriter { out ->
      printWriter = new PrintWriter(out)
      printWriter.println(header)
      printer = new XmlNodePrinter( printWriter )
      printer.preserveWhitespace = true
      printer.print( config )
      printWriter.close()
      println "process success"
      println "Turning security off => Completed!"
    }
  }else{
    println "nothing done"
    println "Could not find useSecurity node. Cannot turn security off!"
  }
}else{
  println "nothing done"
  println "file does not exist!"
}

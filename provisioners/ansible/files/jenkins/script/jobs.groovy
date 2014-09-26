import groovy.io.FileType
import java.text.*

/**
* List all job xmls in the jenkins/jobs folder to be picked up  by Ansible
* This removes the need to manually list all job names to be installed in
* an ansible variable
* @author Layton Whiteley
* @date Sept 26, 2014
*/

def createJobs(jobsLocation){
  def dir = new File(jobsLocation)
  dir.eachFileRecurse (FileType.FILES) { file ->
    def fileName = file.name
    def extension = ".xml"
    if(fileName.indexOf(extension)){
      def jobName = fileName.replace(extension, "")
      println jobName
    }
  }
}

/**
* Closure that
* runs the CLI (command line interface) Logic
*/
def runCli = { args ->
    def cli = new CliBuilder(usage: 'groovy jobs.groovy -[hj] ')
    // Create the list of options.
    cli.with {
        h longOpt: 'help', 'Show usage information'
        j longOpt: 'jobsLocation', args: 1, argName: 'jobsLocation', 'jenkins jobs xml Location'
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
    if (options.j) {
        //def fileName = extraArguments[0]
        createJobs(options.j)
    }else{
      println "\nnothing done"
      println "Required options are not found\n"
      cli.usage()
    }
}

runCli(args)

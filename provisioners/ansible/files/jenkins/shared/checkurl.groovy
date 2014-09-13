import java.text.*
import java.util.concurrent.locks.ReentrantLock
import groovy.time.*

/**
* This scripts checks a url using curl to see if the website is ready to be used
* This script has the ability to set retry intervals to ping the site.
* Usage:
*   groovy checkurl.groovy -[hmst] [url]
        -h,--help                 Show usage information
        -m,--max-time <maxTime>   max time in seconds before killing a curl command, Default: 20
        -s,--sleep <sleep>        time in seconds before next retry, Default: 10
        -t,--tries <tries>        number of tries before exit, Default: 3
*
* @author Layton Whiteley
* @date Sept 12 2014
*/

def runCommand(options, url){

  // if(true){
    def start = new Date()
    long secondInMillis = 1000;
    def defaultString = "(Default)"
    println "\nChecking '${url}' with: "

    def tries = 3
    if(options.t && options.t.isInteger()){
      tries = options.t.toInteger()
      println "   ${tries} tries "
    }else{
      println "   ${tries} tries ${defaultString}"
    }

    def timeout = 20
    if(options.m && options.m.isInteger()){
      timeout = options.m.toInteger()
      println "   ${timeout} seconds timeout per try "
    }else{
      println "   ${timeout} seconds timeout per try ${defaultString}"
    }

    def sleepSeconds = 10;
    def retrySleep
    if(options.s && options.s.isInteger()){
      retrySleep = options.s.toInteger() * secondInMillis
      println "   ${options.s} seconds interval before next try "
    }else{
      retrySleep = sleepSeconds * secondInMillis
      println "   ${sleepSeconds} seconds interval before next try ${defaultString}"
    }

    def command = "curl -sL -I --max-time ${timeout} -w \"%{http_code}\" ${url}"

  ReentrantLock.metaClass.withLock = {
      lock()
      try {
        it()
      }
      finally {
          unlock()
      }
    }

    def lock = new ReentrantLock()

    def worker = { threadNum ->
      tries.times { count ->
        lock.withLock {
            def result = command.execute().text.split()
            def response = result[result.length - 1].replaceAll("\"", "")
            if(response.isInteger()){
              responseCode = response.toInteger()
              def now = new Date()
              long diff = now - start;
              TimeDuration duration = TimeCategory.minus(now, start)
              def seconds = duration.getSeconds()
              def badResponse = (responseCode >= 400 && responseCode <= 600) || responseCode < 100
              def goodResponse = responseCode < 400 && responseCode >= 100

              if(goodResponse){
                println "\n(0) Final Response is ${response}: site is ready!"
                println "elapsed time: ${duration} \n"
                System.exit(0)
              }
              if(badResponse && tries == (count+1)){
                println "\n(1) Final Response is ${response}: checkurl FAILED to see if the site is ready!"
                println "elapsed time: ${duration} \n"
                System.exit(1)
              }
              if((count+1) < tries ){
                println "Response is ${response}: not satisfactory... executing retry (${tries - (count+1)} left)"
                Thread.sleep(retrySleep);
              }

            }
        }

      }
    }

    // kick off worker
    1.times {
      Thread.start worker.curry(it)
      if(tries > 0){
        println "\nLETS ROCK!"
      }else{
        println "\nTHIS TRAIN WONT MOVE ON EMPTY FUEL! - tries = ${options.t}\n"
      }

    }

  }

/**
* Closure that
* runs the CLI (command line interface) Logic
*/
def runCli = { args ->
    def cli = new CliBuilder(usage: 'checkurl.groovy -[hmst] [url] ')
    // Create the list of options.
    cli.with {
        h longOpt: 'help', 'Show usage information'
        t longOpt: 'tries', args: 1, argName: 'tries', 'number of tries before exit, Default: 3'
        s longOpt: 'sleep', args: 1, argName: 'sleep', 'time in seconds before next retry, Default: 10'
        m longOpt: 'max-time', args: 1, argName: 'maxTime', 'max time in seconds before killing a curl command, Default: 20'
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
    if (extraArguments && extraArguments[0]) {
        def url = extraArguments[0]
        runCommand(options, url)
    }else{
      println "nothing done"
      println "url is required to continue!"
      cli.usage()
      System.exit(1) //fail the build
    }
}

runCli(args)

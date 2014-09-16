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
        -s,--sleep <sleep>        time in seconds before next retry, Default: 4
        -t,--tries <tries>        number of tries before exit, Default: 3
*
* @author Layton Whiteley
* @date Sept 12 2014
*/


def getIntegerOption(value, defaultValue, descriptor){
  def result = defaultValue
  if(value && value.isInteger()){
    result = value.toInteger()
    println "   ${result} ${descriptor} "
  }else{
    println "   ${result} ${descriptor} (Default)"
  }
  return result
}

def getSleepOption(value, defaultValue, descriptor){
  long secondInMillis = 1000;
  def result
  if(value && value.isInteger()){
    result = value.toInteger() * secondInMillis
    println "   ${value} ${descriptor} "
  }else{
    result = defaultValue * secondInMillis
    println "   ${defaultValue} ${descriptor} (Default)"
  }
  return result
}

def handleValidResponse(response, tries, retrySleep, count, duration){
  responseCode = response.toInteger()
  def badResponse = (responseCode >= 400 && responseCode <= 600) || responseCode < 100
  def goodResponse = responseCode < 400 && responseCode >= 100
  def subMsg = (responseCode < 100)? "cannot resolve" : "not satisfactory"

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
    println "Response is ${response}: ${subMsg} ... executing retry (${tries - (count+1)} left)"
    println "elapsed time: ${duration} \n"
    Thread.sleep(retrySleep);
  }
}

def handleInvalidResponse(response, tries, retrySleep, count, duration){
  if(tries == (count+1)){
    println "\n(1) Final Response is not valid ('${response}'): checkurl FAILED to see if the site is ready!"
    println "elapsed time: ${duration} \n"
    System.exit(1)
  }else{
    println "Response is not valid ('${response}'): cannot resolve ... executing retry (${tries - (count+1)} left)"
    println "elapsed time: ${duration} \n"
    Thread.sleep(retrySleep);
  }
}

def runCommand(options, url){

    def start = new Date()

    println "\nChecking '${url}' with: "
    def tries = getIntegerOption(options.t, 3, "tries")
    def timeout = getIntegerOption(options.m, 20, "seconds timeout per try")
    def retrySleep = getSleepOption(options.s, 4, "seconds interval before next try")

    def command = "curl -sL --max-time ${timeout} --connect-timeout ${timeout} -w \"%{http_code}\" ${url}"

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
          def commandText = command.execute().text
          def result = commandText[-5..-1]
          def response = result.replaceAll("\"", "")

          def now = new Date()
          long diff = now - start;
          TimeDuration duration = TimeCategory.minus(now, start)

          if(response.isInteger()){
            handleValidResponse(response, tries, retrySleep, count, duration)
          }else{
            handleInvalidResponse(response, tries, retrySleep, count, duration)
          }
        }

      }
    }

    // kick off worker
    if(tries > 0){
      1.times {
        Thread.start worker.curry(it)
      }
      println "\nLETS ROCK!"
    }else{
      println "\nTHIS TRAIN WON'T MOVE ON EMPTY FUEL! - tries = ${tries}\n"
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
        s longOpt: 'sleep', args: 1, argName: 'sleep', 'time in seconds before next retry, Default: 4'
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
      println "\nnothing done"
      println "url is required to continue!\n"
      cli.usage()
      println ""
      System.exit(1) //fail the build
    }
}

runCli(args)

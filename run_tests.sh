#!/bin/sh -eu

export begin=$(date +"%s")


show_help()
{
   # Display Help
   echo "options:"
   echo "s     Start Dashboard default: false"
   echo "h     display help"
}


# Default values
START_DASHBOARD=false

# read options from cli
 while getopts s:h: opt; do
       case $opt in
           s) START_DASHBOARD=true ;;
           h) show_help
              exit 0 ;;
           *) show_help
              exit 0 ;;
       esac
 done

# to start load tests grafana dashboard
if [ $START_DASHBOARD = true ]
then
  docker-compose -f load-test-dashboard.yml up -d
fi

# start building tests and
docker-compose up --build --force-recreate
docker-compose down

# close grafana dashboard
if [ $START_DASHBOARD = true ]
then
  docker-compose -f load-test-dashboard.yml down --remove-orphans
fi

termin=$(date +"%s")
difftimelps=$(($termin-$begin))
echo "$(($difftimelps / 60)) minutes and $(($difftimelps % 60)) seconds elapsed for Script Execution."
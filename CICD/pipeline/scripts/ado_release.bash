#!/bin/bash
# Need the following environment variables
#   [ HOSTNAME, MACHINES ]
#   HOSTNAME - hostname
#   MACHINES - all the tomcat servers in the environment
echo "PWD:"$PWD
echo "HOSTNAME:"${HOSTNAME}
echo "MACHINES:"${MACHINES}
    (IFS=',';
        for servername in ${MACHINES}; do
        shopt -s nocasematch
            if [[ ${servername} != $HOSTNAME ]]; then
                echo "Copying files to ${servername} ..."
                scp  -pr /app/$USER_ID/tmp/storybook ${servername}:/app/${USER_ID}/deployed/htdocs/
                scp  -pr /app/$USER_ID/tmp/documentation ${servername}:/app/${USER_ID}/deployed/htdocs/
            else
                echo "Copying files to localhost ..."
                cp  -r /app/$USER_ID/tmp/storybook /app/${USER_ID}/deployed/htdocs/
                cp  -r /app/$USER_ID/tmp/documentation /app/${USER_ID}/deployed/htdocs/
            fi
        shopt -u nocasematch
        done
    )

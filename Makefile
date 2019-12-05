default:

#run:
#	./node_modules/.bin/wdio test/wdio.conf.js

#run-local:
#	./node_modules/.bin/wdio test/wdio.conf.local.js

run-docker:
	docker-compose run webdriverio bash -c "make init-dockershell && wdio test/wdio.conf.hub.js"

run-dockershell:
	docker-compose run webdriverio bash

init-dockershell:
	[ -d /install/ ] && \
		cd /install/ && \
		cp /app/package.json /install/ && \
		npm install

stop-docker:
	docker-compose stop

remove-docker: stop-docker
	docker-compose rm

URL := "friendlycode.org"

.PHONY: all
all: build

.PHONY: ci
ci: build

# INSTALL ######################################################################

VENDOR_DIR := ~/.vendor/homepage
INSTALLED_FLAG := $(VENDOR_DIR)/.installed

.PHONY: install
install: $(INSTALLED_FLAG)
$(INSTALLED_FLAG): Gemfile Gemfile.lock Makefile
	bundle install --path $(VENDOR_DIR)
	npm install -g webpack
	npm install
	@ touch $(INSTALLED_FLAG)  # indicate that dependencies are installed

.PHONY: update
update: install
	bundle update
	npm update webpack
	npm update
	@ touch $(INSTALLED_FLAG)  # indicate that dependencies are installed

# BUILD ########################################################################

.PHONY: build
build: install
	webpack
	bundle exec jekyll build --quiet
	echo ${URL} > _site/CNAME
	bundle exec htmlproof _site --href-ignore "#"

# RUN ##########################################################################

.PHONY: run
run: install
	bundle exec jekyll serve --host 0.0.0.0 --port 4000

.PHONY: launch
launch: build
	eval "sleep 5; open http://localhost:4000" & make run

# CLEAN ########################################################################

.PHONY: clean
clean:
	rm -rf .bundle $(VENDOR_DIR)
	rm -rf _site
	rm -rf node_modules
	rm -rf dist

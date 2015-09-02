.PHONY: all
all: build

.PHONY: run
run: depends
	bundle exec jekyll serve --baseurl ""

.PHONY: launch
launch:
	eval "sleep 5; open http://localhost:4000" & make run

.PHONY: ci
ci: build

.PHONY: build
build: depends
	bundle exec jekyll build
	echo "friendlycode.org" > _site/CNAME
	# TODO: enable this after fixing links
	# bundle exec htmlproof ./_site

.PHONY: depends
depends: vendor/*
vendor/*: Gemfile*
	bundle install --path vendor
	@ touch vendor/*

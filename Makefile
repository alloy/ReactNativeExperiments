ROOT = $(shell pwd)

embed-in-existing-navigation-stack:
	cd node_modules/react-native; npm run start -- --root "$(ROOT)/EmbedInExistingNavigationStack/EmbedInExistingNavigationStack/Components"

bootstrap:
	brew install node flow
	brew install pcre
	brew link pcre
	brew install --HEAD watchman

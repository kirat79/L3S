arbitrum_up:
	  rm -rf nitro-testnode && docker ps -q | xargs docker stop && git clone -b release --recurse-submodules https://github.com/OffchainLabs/nitro-testnode.git && cd nitro-testnode && ./test-node.bash --init && ./test-node.bash



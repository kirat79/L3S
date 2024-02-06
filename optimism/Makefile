optimism_up:
	chmod -fR 777 . && openssl rand -hex 32 > jwt.txt && rm -rf optimism && rm -rf op-geth && docker ps -q | xargs docker stop && git clone https://github.com/ethereum-optimism/optimism.git && git clone https://github.com/ethereum-optimism/op-geth.git && chmod -fR 777 op-geth && chmod -fR 777 optimism/op-node
	cp jwt.txt ./optimism/op-node/ && cp jwt.txt ./op-geth/
	make -j 2 run_geth run_node

run_geth:
	cd op-geth && make geth && ./build/bin/geth --http --http.port=8545 --http.addr=localhost --authrpc.addr=localhost --authrpc.jwtsecret=./jwt.txt --verbosity=3 --rollup.sequencerhttp=https://sepolia-sequencer.optimism.io/ --op-network=op-sepolia --datadir=./

run_node:
	cd optimism && cd op-node && make op-node && ./bin/op-node --l1=https://eth-sepolia.g.alchemy.com/v2/V8jE_9MOtUTNhqaihu-u_vqp3XAPrIWM --l1.rpckind=alchemy --l1.beacon=https://eth-sepolia.g.alchemy.com/v2/V8jE_9MOtUTNhqaihu-u_vqp3XAPrIWM --l2=ws://localhost:8551 --l2.jwt-secret=./jwt.txt --network=op-sepolia --syncmode=execution-layer

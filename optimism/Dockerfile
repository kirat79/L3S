# Base image
FROM ubuntu:20.04

# Install prerequisites
RUN apt-get update && apt-get install -y \
    git \
    openssl \
    build-essential \
    curl \
    wget \
    && rm -rf /var/lib/apt/lists/*

# Configure Git compression
RUN git config --global core.compression 9

# Install Go for ARM64
RUN wget https://golang.org/dl/go1.22.5.linux-arm64.tar.gz
RUN tar -C /usr/local -xzf go1.22.5.linux-arm64.tar.gz
ENV PATH=$PATH:/usr/local/go/bin

# Create work directory
WORKDIR /root

# Clone repositories
RUN git clone https://github.com/ethereum-optimism/optimism.git
RUN git clone https://github.com/ethereum-optimism/op-geth.git

# Set permissions
RUN chmod -fR 777 /root/op-geth && chmod -fR 777 /root/optimism/op-node

# Copy JWT secret
RUN openssl rand -hex 32 > jwt.txt
RUN cp jwt.txt /root/optimism/op-node/
RUN cp jwt.txt /root/op-geth/

# Build and run geth
WORKDIR /root/op-geth
RUN make geth
EXPOSE 8545
CMD ["./build/bin/geth", "--http", "--http.port=8545", "--http.addr=0.0.0.0", "--authrpc.addr=localhost", "--authrpc.jwtsecret=./jwt.txt", "--verbosity=3", "--rollup.sequencerhttp=https://sepolia-sequencer.optimism.io/", "--op-network=op-sepolia", "--datadir=./"]

# Build and run op-node
WORKDIR /root/optimism/op-node
RUN make op-node
EXPOSE 8551
CMD ["./bin/op-node", "--l1=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY", "--l1.rpckind=alchemy", "--l1.beacon=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY", "--l2=ws://localhost:8551", "--l2.jwt-secret=./jwt.txt", "--network=op-sepolia", "--syncmode=execution-layer"]

# Final step to start both services
CMD ["sh", "-c", "cd /root/op-geth && ./build/bin/geth --http --http.port=8545 --http.addr=0.0.0.0 --authrpc.addr=localhost --authrpc.jwtsecret=./jwt.txt --verbosity=3 --rollup.sequencerhttp=https://sepolia-sequencer.optimism.io/ --op-network=op-sepolia --datadir=./ & cd /root/optimism/op-node && ./bin/op-node --l1=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY --l1.rpckind=alchemy --l1.beacon=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY --l2=ws://localhost:8551 --l2.jwt-secret=./jwt.txt --network=op-sepolia --syncmode=execution-layer"]


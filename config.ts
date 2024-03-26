import { ethers } from 'ethers'

// 90% of Geth's 128KB tx size limit, leaving ~13KB for proving
// This need to be adjusted for Orbit chains
export const maxDataSize = 117964

export const config = {
  rollupConfig: {
    confirmPeriodBlocks: ethers.BigNumber.from('45818'),
    extraChallengeTimeBlocks: ethers.BigNumber.from('200'),
    stakeToken: ethers.constants.AddressZero,
    baseStake: ethers.utils.parseEther('1'),
    wasmModuleRoot:
      '0xba5ff5ddc46b5c63fa02168819b8e236fa18b4b551f20eba378e3543477298bf',
    owner: '0xff9004d37B27e7cd66c08f439198d54D68bD4eE0',
    loserStakeEscrow: ethers.constants.AddressZero,
    chainId: ethers.BigNumber.from('14531773'),
    chainConfig:
      '{"chainId":14531773,"homesteadBlock":0,"daoForkBlock":null,"daoForkSupport":true,"eip150Block":0,"eip150Hash":"0x0000000000000000000000000000000000000000000000000000000000000000","eip155Block":0,"eip158Block":0,"byzantiumBlock":0,"constantinopleBlock":0,"petersburgBlock":0,"istanbulBlock":0,"muirGlacierBlock":0,"berlinBlock":0,"londonBlock":0,"clique":{"period":0,"epoch":0},"arbitrum":{"EnableArbOS":true,"AllowDebugPrecompiles":false,"DataAvailabilityCommittee":false,"InitialArbOSVersion":10,"InitialChainOwner":"0x1234123412341234123412341234123412341234","GenesisBlockNum":0}}',
    genesisBlockNum: ethers.BigNumber.from('0'),
    sequencerInboxMaxTimeVariation: {
      delayBlocks: ethers.BigNumber.from('5760'),
      futureBlocks: ethers.BigNumber.from('12'),
      delaySeconds: ethers.BigNumber.from('86400'),
      futureSeconds: ethers.BigNumber.from('3600'),
    },
  },
  validators: [
    '0x95437A74D748cE3870e8Fa3d7c1AA5002EC82c04',
  ],
  batchPosters: ['0xBe28E1a1c5eeC1d839A48fa569805149aE8Cc98F'],
  batchPosterManager: '0xff9004d37B27e7cd66c08f439198d54D68bD4eE0',
}

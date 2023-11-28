export interface Staking {
  bondDenom: string;
  unbondingTime: number;
  maxEntries: number;
  historicalEntries: number;
  maxValidators: number;
}

export interface Slashing {
  downtimeJailDuration: number;
  minSignedPerWindow: number;
  signedBlockWindow: number;
  slashFractionDoubleSign: number;
  slashFractionDowntime: number;
}

export interface Minting {
  blocksPerYear: number;
  goalBonded: number;
  inflationMax: number;
  inflationMin: number;
  inflationRateChange: number;
  mintDenom: string;
}

export interface Distribution {
  baseProposerReward: number;
  bonusProposerReward: number;
  communityTax: number;
  withdrawAddressEnabled: boolean;
}

export interface Gov {
  quorum: number;
  threshold: number;
  minDeposit: TokenUnit;
  votingPeriod: number;
  burnVoteVeto: boolean;
  vetoThreshold: number;
  maxDepositPeriod: number;
  minInitialDepositRatio: string;
  burnProposalDepositPrevote: boolean;
}

export interface ParamsState {
  loading: boolean;
  exists: boolean;
  staking: Staking | null;
  slashing: Slashing | null;
  minting: Minting | null;
  distribution: Distribution | null;
  gov: Gov | null;
}

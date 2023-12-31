import { DexFactory } from '../../typechain/contracts/swap/DexFactory';
import { DexPair } from '../../typechain/contracts/swap/DexPair';
import { KIP7Mock } from '../../typechain/contracts/mocks/KIP7TestMock.sol/KIP7Mock';
import { DexRouter } from '../../typechain/contracts/swap/DexRouter';
import { WKLAY } from '../../typechain/contracts/tokens/WKLAY.sol/WKLAY';

export interface FactoryFixture {
  factory: DexFactory
}

export interface PairFixture extends FactoryFixture {
  token0: KIP7Mock
  token1: KIP7Mock
  pair: DexPair
}

export interface RouterFixture {
  token0: KIP7Mock
  token1: KIP7Mock
  WKLAY: WKLAY
  WKLAYPartner: KIP7Mock
  factory: DexFactory
  router: DexRouter
  pair: DexPair
  WKLAYPair: DexPair
}

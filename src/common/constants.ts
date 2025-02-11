import { BigNumber } from '@0x/utils';

import { Network } from '../util/types';

export const ERC20_APP_BASE_PATH = '/erc20';
export const ERC721_APP_BASE_PATH = '/erc721';
export const DEFAULT_BASE_PATH = process.env.REACT_APP_DEFAULT_BASE_PATH || ERC20_APP_BASE_PATH;

export const RELAYER_URL = 'https://api.0x.org/sra/v3'
export const RELAYER_WS_URL = 'wss://api.0x.org/sra/v3'

export const TX_DEFAULTS = {
    gas: 300000,
};

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const UNLIMITED_ALLOWANCE_IN_BASE_UNITS = new BigNumber(2).pow(256).minus(1);

export const ZERO = new BigNumber(0);

export const FEE_RECIPIENT = process.env.REACT_APP_FEE_RECIPIENT || ZERO_ADDRESS;

export const FEE_PERCENTAGE = new BigNumber(process.env.REACT_APP_FEE_PERCENTAGE || ZERO);

export const ETH_DECIMALS = 18;

export const PROTOCOL_FEE_MULTIPLIER = 150000;

export const RELAYER_RPS = 5;

export const SECONDS_IN_A_DAY = new BigNumber(60 * 60 * 24);

export const DEFAULT_ORDER_EXPIRY_SECONDS = process.env.REACT_APP_DEFAULT_ORDER_EXPIRY_SECONDS
    ? new BigNumber(process.env.REACT_APP_DEFAULT_ORDER_EXPIRY_SECONDS)
    : SECONDS_IN_A_DAY;

export const UI_DECIMALS_DISPLAYED_ON_STEP_MODALS = 3;
export const UI_DECIMALS_DISPLAYED_SPREAD_PERCENT = 2;
export const UI_DECIMALS_DISPLAYED_DEFAULT_PRECISION = 2;
export const UI_DECIMALS_DISPLAYED_ORDER_SIZE = 4;
export const UI_DECIMALS_DISPLAYED_PRICE_ETH = 7;
export const UI_GENERAL_TITLE = 'Curio ERC20 Exchange';

export const METAMASK_EXTENSION_URL = 'https://metamask.io/';
export const METAMASK_CHROME_EXTENSION_DOWNLOAD_URL =
    'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

// Default value is enabled, 0 is disabled
export const UI_UPDATE_CHECK_INTERVAL: number = process.env.REACT_APP_UI_UPDATE_CHECK_INTERVAL
    ? Number.parseInt(process.env.REACT_APP_UI_UPDATE_CHECK_INTERVAL as string, 10)
    : 5000;

// Default value is enabled, 0 is disabled
export const UPDATE_ETHER_PRICE_INTERVAL: number = process.env.REACT_APP_UPDATE_ETHER_PRICE_INTERVAL
    ? Number.parseInt(process.env.REACT_APP_UPDATE_ETHER_PRICE_INTERVAL as string, 10)
    : 3600000;

export const NOTIFICATIONS_LIMIT: number =
    Number.parseInt(process.env.REACT_APP_NOTIFICATIONS_LIMIT as string, 10) || 20;

export const GWEI_IN_WEI = new BigNumber(1000000000);

export const ONE_MINUTE_MS = 1000 * 60;

export const DEFAULT_GAS_PRICE = GWEI_IN_WEI.multipliedBy(6);

export const DEFAULT_ESTIMATED_TRANSACTION_TIME_MS = ONE_MINUTE_MS * 2;

export const GIT_COMMIT: string = process.env.REACT_APP_GIT_COMMIT || '';

export const START_BLOCK_LIMIT: number = Number.parseInt(process.env.REACT_APP_START_BLOCK_LIMIT as string, 10) || 1000;

export const LOGGER_ID: string = process.env.REACT_APP_LOGGER_ID || '0x-launch-kit-frontend';

export const ERC20_THEME_NAME: string = process.env.REACT_APP_ERC20_THEME_NAME || 'DARK_THEME';

export const ERC721_THEME_NAME: string = process.env.REACT_APP_ERC721_THEME_NAME || 'LIGHT_THEME';

export const COLLECTIBLES_SOURCE: string = process.env.REACT_APP_COLLECTIBLES_SOURCE || 'mocked';

export const COLLECTIBLE_NAME: string = process.env.REACT_APP_COLLECTIBLE_NAME || 'Unknown';
export const COLLECTIBLE_DESCRIPTION: string = process.env.REACT_APP_COLLECTIBLE_DESCRIPTION || 'Unknown';

const mockERC721Address = '0x07f96aa816c1f244cbc6ef114bb2b023ba54a2eb'; // Mock ERC721 in ganache
export const COLLECTIBLE_ADDRESS = process.env.REACT_APP_COLLECTIBLE_ADDRESS || mockERC721Address;

export const STEP_MODAL_DONE_STATUS_VISIBILITY_TIME: number =
    Number.parseInt(process.env.REACT_APP_STEP_MODAL_DONE_STATUS_VISIBILITY_TIME as string, 10) || 3500;

export const OPENSEA_API_KEY = process.env.REACT_APP_OPENSEA_API_KEY;

export const NETWORK_ID: number = Number.parseInt(process.env.REACT_APP_NETWORK_ID as string, 10) || Network.Mainnet;
// HACK(dekz): re-write the Ganache chain id which isn't network id
export const CHAIN_ID: number = process.env.REACT_APP_CHAIN_ID
    ? Number.parseInt(process.env.REACT_APP_CHAIN_ID as string, 10)
    : NETWORK_ID === 50
    ? 1337
    : NETWORK_ID;

export const NETWORK_NAME: string = Network[NETWORK_ID];

import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://saltswap.finance'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
        icon: "ExchangeIcon"
      },
      {
        label: 'Liquidity',
        href: '/pool',
        icon: 'LiquidityIcon'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://saltswap.finance/farms'
  },
  {
    label: 'Salty Pools',
    icon: 'PoolIcon',
    href: 'https://saltswap.finance/pools'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://saltswap.finance/lottery'
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'SaltSwap',
  //       href: 'https://saltswap.info/token/TODO',
  //     },
  //   ]
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.saltswap.finance',
      // },
      {
        label: "Github",
        href: "https://github.com/saltswap/",
        icon: 'GithubIcon'
      },
      {
        label: "Docs",
        href: "https://saltswap.gitbook.io/salt-swap",
        icon: 'GitbookIcon'
      },
      {
        label: "Blog",
        href: "https://saltswap.medium.com",
        icon: 'MediumIcon'
      },
    ],
  },
]

export default config

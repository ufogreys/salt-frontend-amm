import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.saltswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://www.saltswap.finance/farms'
  },
  {
    label: 'Salty Pools',
    icon: 'PoolIcon',
    href: 'https://www.saltswap.finance/pools'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.saltswap.finance/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'SaltSwap',
        href: 'https://saltswap.info/token/TODO',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: "Github",
        href: "https://github.com/saltswap/",
      },
      {
        label: "Docs",
        href: "https://saltswap.gitbook.io/salt-swap",
      },
      {
        label: "Blog",
        href: "https://medium.com/@saltswap",
      },
    ],
  }
]

export default config

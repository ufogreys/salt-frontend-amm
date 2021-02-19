import { MenuEntry } from '@saltswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://salt-frontend-farms.netlify.app/'
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
    href: 'https://salt-frontend-farms.netlify.app/farms'
  },
  {
    label: 'Salty Pools',
    icon: 'PoolIcon',
    href: 'https://salt-frontend-farms.netlify.app/pools'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://salt-frontend-farms.netlify.app/lottery'
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
      //   href: 'https://voting.saltswap.finance',
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
        href: "https://saltswap.medium.com",
      },
    ],
  }
]

export default config

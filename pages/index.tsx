import { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import ThemeSwitcher from 'components/ThemeSwitcher'
import Link from 'next/link'

const Index: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        width: '100%',
        gap: 12,
        padding: 24,
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <ConnectButton />
      <ThemeSwitcher />

      <h2>Modals</h2>
      <nav style={{ display: 'flex', gap: 15 }}>
        <Link href="/modal/buy" legacyBehavior>
          <a>BuyModal</a>
        </Link>
        <Link href="/modal/list" legacyBehavior>
          <a>ListModal</a>
        </Link>
        <Link href="/modal/bid" legacyBehavior>
          <a>BidModal</a>
        </Link>
        <Link href="/modal/acceptBid" legacyBehavior>
          <a>AcceptBidModal</a>
        </Link>
        <Link href="/modal/cancelBid" legacyBehavior>
          <a>CancelBidModal</a>
        </Link>
        <Link href="/modal/cancelListing" legacyBehavior>
          <a>CancelListingModal</a>
        </Link>
      </nav>
      <h2>Hooks</h2>
      <nav style={{ display: 'flex', gap: 15 }}>
        <Link href="/hook/collections" legacyBehavior>
          <a>useCollections</a>
        </Link>
        <Link href="/hook/bids" legacyBehavior>
          <a>useBids</a>
        </Link>
        <Link href="/hook/collectionActivity" legacyBehavior>
          <a>useCollectionActivity</a>
        </Link>
        <Link href="/hook/listings" legacyBehavior>
          <a>useListings</a>
        </Link>
        <Link href="/hook/tokens" legacyBehavior>
          <a>useTokens</a>
        </Link>
        <Link href="/hook/userActivity" legacyBehavior>
          <a>useUserActivity</a>
        </Link>
        <Link href="/hook/userTokens" legacyBehavior>
          <a>useUserTokens</a>
        </Link>
        <Link href="/hook/userTopBids" legacyBehavior>
          <a>useUserTopBids</a>
        </Link>
        <Link href="/hook/userCollections" legacyBehavior>
          <a>useUserCollections</a>
        </Link>
      </nav>
      <h2>UI Components</h2>
      <nav style={{ display: 'flex', gap: 15 }}>
        <Link href="/ui/tokenMedia" legacyBehavior>
          <a>TokenMedia</a>
        </Link>
        <Link href="/ui/cart" legacyBehavior>
          <a>Cart</a>
        </Link>
      </nav>
    </div>
  )
}

export default Index

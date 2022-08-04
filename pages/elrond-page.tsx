import type { NextPage } from 'next'
import * as DappUI from '@elrondnetwork/dapp-core/UI'
  
const Elrond: NextPage = () => {
    const { WebWalletLoginButton } = DappUI
    return (
        <div>
            <WebWalletLoginButton
              callbackRoute='/'
              loginButtonText={'Web wallet'}
            />
        </div>
    )
}

export default Elrond
# Nextjs app with dapp-core
Using [dapp-core](https://github.com/ElrondNetwork/dapp-core) components in a [nextjs](https://nextjs.org/) app
## Steps
1. Create nextjs app
```sh
npx create-next-app@latest --typescript
npm run build
```
2. Add dapp-core dependencies
```sh
npm install @types/react@18.0.14 @types/react-dom@18.0.5 --save-dev
npm install @elrondnetwork/dapp-core @elrondnetwork/erdjs @elrondnetwork/erdjs-network-providers
```
3. Use a dapp-core component in a page
```javascript
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
```
4. Build app
```sh
npm run build
```

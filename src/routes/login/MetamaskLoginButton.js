/* eslint-disable no-undef */
import { useState, useEffect, useRef } from 'react';
import MetaMaskOnboarding from '@metamask/onboarding';
import { useLazyGetMetamaskNonceQuery } from '../../app/services/auth';
export default function MetamaskLoginButton({ login }) {
 const [requesting, setRequesting] = useState(false);
 const [getNonce] = useLazyGetMetamaskNonceQuery();
 const onboarding = useRef();

 useEffect(() => {
  if (!onboarding.current) {
   onboarding.current = new MetaMaskOnboarding();
  }
 }, []);
 const getSignature = async (address, nonce) => {
  console.log('get sn');
  const signature = await ethereum.request({
   method: 'personal_sign',
   params: [nonce, address, 'hello from rustchat']
  });
  return signature;
 };
 const handleMetamaskLogin = async () => {
  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
   setRequesting(true);
   const [address] = await ethereum.request({
    method: 'eth_requestAccounts'
   });
   const { data: nonce, isSuccess } = await getNonce(address);
   if (isSuccess) {
    const signature = await getSignature(address, nonce);
    login({
     public_address: address,
     nonce,
     signature,
     type: 'metamask'
    });
    setRequesting(false);
   }
  } else {
   onboarding.current.startOnboarding();
  }
 };
 return (
  <button disabled={requesting} onClick={handleMetamaskLogin} href="#" className="btn social">
   <img
    className="icon"
    src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
    alt="meta mask icon"
   />
   Sign in with MetaMask
  </button>
 );
}
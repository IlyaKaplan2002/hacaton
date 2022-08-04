import getProvider from './getProvider';

const connectWallet = async () => {
  const provider = getProvider();
  try {
    const resp = await provider.connect();
    return { wallet: resp.publicKey.toString(), error: null };
  } catch (err) {
    console.log('error', err);
    return { wallet: null, error: err.message };
  }
};

export default connectWallet;

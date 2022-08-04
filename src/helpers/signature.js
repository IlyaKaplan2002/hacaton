import base58 from 'bs58';
import getProvider from './getProvider';

const signature = async message => {
  const provider = getProvider();
  try {
    const { signature, publicKey } = await provider.signMessage(
      new TextEncoder().encode(message),
      'utf8'
    );
    const data = {
      publicKey: publicKey.toBase58(),
      signature: base58.encode(signature),
    };
    return { error: null, data };
  } catch (error) {
    return { error: error.message, data: null };
  }
};

export default signature;

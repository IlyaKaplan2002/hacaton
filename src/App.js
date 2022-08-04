import Button from 'components/Button';
import DepositForm from 'components/DepositForm';
import MainTitle from 'components/MainTitle';
import SafeboxForm from 'components/SafeboxForm';
import WithdrawForm from 'components/WithdrawForm';
import { connectWallet } from 'helpers';
import { Notify } from 'notiflix';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [wallet, setWallet] = useState('');

  const onConnectWallet = async () => {
    const { wallet, error } = await connectWallet();
    if (error) {
      Notify.failure(error);
      return;
    }
    if (wallet) {
      setWallet(wallet);
      Notify.success('Your wallet connected');
    }
  };

  return (
    <App.Wrapper>
      <App.Container>
        <Button
          type="button"
          className="connectButton"
          onClick={onConnectWallet}
        >
          Connect
        </Button>
        <MainTitle className="mainTitle">AlphaGuilty Safebox</MainTitle>
        <App.FormsContainer>
          <SafeboxForm className="safeboxForm" wallet={wallet} />
          <App.BottomFormsContainer>
            <DepositForm className="depositForm" wallet={wallet} />
            <WithdrawForm className="withdrawForm" wallet={wallet} />
          </App.BottomFormsContainer>
        </App.FormsContainer>
      </App.Container>
    </App.Wrapper>
  );
}

App.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

App.Container = styled.div`
  width: 400px;
  height: 518px;
  background: #d9d9d9;
  position: relative;
  padding-top: 29px;

  @media screen and (min-width: 700px) {
    width: 606px;
  }

  .connectButton {
    position: absolute;
    right: 16px;
    top: 34px;
  }

  .mainTitle {
    margin: 0 auto;
    margin-bottom: 37px;
  }

  .safeboxForm {
    height: 131px;
    margin-bottom: 15px;
  }

  .depositForm {
    width: calc(50% - 14px);
    height: 225px;
  }

  .withdrawForm {
    width: calc(50% - 14px);
    height: 225px;
  }
`;

App.FormsContainer = styled.div`
  width: 350px;
  margin: 0 auto;
`;

App.BottomFormsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default App;

import HeaderBox from '@/components/HeaderBox'
// import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Deobaba', lastName: 'JSM', email: 'contact@jsmastery.pro', amount:1250,};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={loggedIn?.amount  || 0}

          />
        </header>

       
      </div>

    
    </section>
  )
}

export default Home
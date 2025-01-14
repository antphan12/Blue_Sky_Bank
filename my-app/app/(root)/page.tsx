import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Dashboard = () => {
const loggedIn = {firstName: "Anthony", lastName: "Phan", email: "example@gmail.com"};

  return (
    <section className="dashboard">
      <div className="dashboard-content">
        <header className="dashboard-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions to the sky."  
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 123.50},{currentBalance: 500.00}]}
      />
    </section>
  )
}

export default Dashboard
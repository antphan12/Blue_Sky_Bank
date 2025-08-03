
# Blue Sky Bank - Modern Banking Dashboard

A modern SaaS banking dashboard built with Next.js, designed to help users manage their finances efficiently. The platform offers secure bank connections through Plaid, enabling users to link real bank accounts and make secure money transfers with Dwolla. Administrative management is streamlined using Appwrite for user authentication and backend operations. The platform provides comprehensive financial tools, allowing users to view account balances, track transactions, and analyze spending with interactive charts and categorized insights. With a responsive design optimized for both desktop and mobile devices, the app delivers a seamless, secure, and user-friendly experience for personal financial management.

## Features

- 🏦 **Real Bank Account Integration** - Connect multiple bank accounts securely via Plaid
- 💸 **Money Transfers** - Send money between accounts using Dwolla
- 📊 **Financial Analytics** - Interactive charts and spending categorization
- 📱 **Responsive Design** - Optimized for desktop and mobile
- 🔐 **Secure Authentication** - User management with Appwrite
- 💳 **Transaction History** - Detailed transaction tracking and history
- 🎯 **Account Management** - Multi-account dashboard with balance overview

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Appwrite
- **Banking Integration:** Plaid API
- **Payment Processing:** Dwolla
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Plaid account and API keys
- Dwolla account and API keys
- Appwrite account and project setup

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Blue_Sky_Bank.git
cd Blue_Sky_Bank
```

2. Navigate to the app directory:
```bash
cd my-app
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Create a `.env.local` file in the root directory and add your environment variables:
```env
# Plaid
PLAID_CLIENT_ID=your_plaid_client_id
PLAID_SECRET=your_plaid_secret
PLAID_ENV=sandbox

# Dwolla
DWOLLA_KEY=your_dwolla_key
DWOLLA_SECRET=your_dwolla_secret
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com

# Appwrite
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT=your_appwrite_project_id
APPWRITE_DATABASE_ID=your_database_id
APPWRITE_USER_COLLECTION_ID=your_user_collection_id
APPWRITE_BANK_COLLECTION_ID=your_bank_collection_id
APPWRITE_TRANSACTION_COLLECTION_ID=your_transaction_collection_id

# Other
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
Blue_Sky_Bank/
├── my-app/
│   ├── app/                    # Next.js app directory
│   ├── components/            # Reusable React components
│   │   ├── Sidebar.tsx       # Navigation sidebar
│   │   ├── Footer.tsx        # Footer component
│   │   └── PlaidLink.tsx     # Plaid integration component
│   ├── constants/            # Application constants
│   ├── lib/                  # Utility functions and configurations
│   ├── public/              # Static assets
│   └── types/               # TypeScript type definitions
└── README.md
```

## Key Components

- **Sidebar**: Navigation component with dynamic route highlighting
- **PlaidLink**: Component for connecting bank accounts via Plaid
- **Footer**: User information and logout functionality
- **Dashboard**: Main financial overview with account balances and charts
- **Transaction History**: Detailed transaction listing and filtering

## API Integration

### Plaid
- Account linking and verification
- Transaction data retrieval
- Account balance updates

### Dwolla
- ACH transfers between accounts
- Payment processing
- Transfer status tracking

### Appwrite
- User authentication and session management
- Database operations for user data
- Real-time data synchronization

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@blueskybank.com or open an issue on GitHub.

## Acknowledgments

- [Plaid](https://plaid.com/) for banking API
- [Dwolla](https://www.dwolla.com/) for payment processing
- [Appwrite](https://appwrite.io/) for backend services
- [Next.js](https://nextjs.org/) for the React framework
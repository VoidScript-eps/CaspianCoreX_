import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Account {
  id: string;
  name: string;
  balance: number;
  currency: string;
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: "income" | "expense" | "transfer" | "deposit" | "payment";
  accountId: string;
  fromAccount?: string;
  toAccount?: string;
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
}

export interface BankUser {
  isLoggedIn: boolean;
  username: string;
  cards: string[];
  hasLoan: boolean;
  loanAmount?: number;
}

interface BankContextType {
  accounts: Account[];
  transactions: Transaction[];
  goals: FinancialGoal[];
  user: BankUser;
  updateAccountBalance: (accountId: string, amount: number) => void;
  addTransaction: (transaction: Omit<Transaction, "id" | "date">) => void;
  login: (username: string) => void;
  logout: () => void;
  updateGoal: (goalId: string, amount: number) => void;
  addGoal: (goal: Omit<FinancialGoal, "id" | "currentAmount">) => void;
}

const BankContext = createContext<BankContextType | undefined>(undefined);

const defaultAccounts: Account[] = [
  { id: "current", name: "Current Account", balance: 15234.50, currency: "AZN" },
  { id: "savings", name: "Savings Account", balance: 48920.00, currency: "AZN" },
  { id: "usd", name: "USD Account", balance: 5430.00, currency: "USD" },
];

const defaultTransactions: Transaction[] = [
  { id: "1", date: new Date().toISOString(), description: "Salary Deposit", amount: 3500.00, type: "income", accountId: "current" },
  { id: "2", date: new Date(Date.now() - 86400000).toISOString(), description: "Grocery Store", amount: -87.50, type: "expense", accountId: "current" },
];

const defaultGoals: FinancialGoal[] = [
  { id: "1", name: "Emergency Fund", targetAmount: 10000, currentAmount: 6500, deadline: "2026-12-31" },
  { id: "2", name: "Vacation", targetAmount: 5000, currentAmount: 2300, deadline: "2026-06-30" },
];

const defaultUser: BankUser = {
  isLoggedIn: false,
  username: "",
  cards: ["4532 **** **** 8923", "5412 **** **** 1234"],
  hasLoan: false,
};

export const BankProvider = ({ children }: { children: ReactNode }) => {
  const [accounts, setAccounts] = useState<Account[]>(() => {
    const saved = localStorage.getItem("cgf_accounts");
    return saved ? JSON.parse(saved) : defaultAccounts;
  });

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("cgf_transactions");
    return saved ? JSON.parse(saved) : defaultTransactions;
  });

  const [goals, setGoals] = useState<FinancialGoal[]>(() => {
    const saved = localStorage.getItem("cgf_goals");
    return saved ? JSON.parse(saved) : defaultGoals;
  });

  const [user, setUser] = useState<BankUser>(() => {
    const saved = localStorage.getItem("cgf_user");
    return saved ? JSON.parse(saved) : defaultUser;
  });

  useEffect(() => {
    localStorage.setItem("cgf_accounts", JSON.stringify(accounts));
  }, [accounts]);

  useEffect(() => {
    localStorage.setItem("cgf_transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("cgf_goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("cgf_user", JSON.stringify(user));
  }, [user]);

  const updateAccountBalance = (accountId: string, amount: number) => {
    setAccounts((prev) =>
      prev.map((acc) =>
        acc.id === accountId ? { ...acc, balance: acc.balance + amount } : acc
      )
    );
  };

  const addTransaction = (transaction: Omit<Transaction, "id" | "date">) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const login = (username: string) => {
    setUser({ ...user, isLoggedIn: true, username });
  };

  const logout = () => {
    setUser({ ...user, isLoggedIn: false, username: "" });
  };

  const updateGoal = (goalId: string, amount: number) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === goalId ? { ...goal, currentAmount: Math.min(goal.currentAmount + amount, goal.targetAmount) } : goal
      )
    );
  };

  const addGoal = (goal: Omit<FinancialGoal, "id" | "currentAmount">) => {
    const newGoal: FinancialGoal = {
      ...goal,
      id: Date.now().toString(),
      currentAmount: 0,
    };
    setGoals((prev) => [...prev, newGoal]);
  };

  return (
    <BankContext.Provider
      value={{
        accounts,
        transactions,
        goals,
        user,
        updateAccountBalance,
        addTransaction,
        login,
        logout,
        updateGoal,
        addGoal,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};

export const useBankContext = () => {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error("useBankContext must be used within BankProvider");
  }
  return context;
};

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {

    const { total } = this.transactionsRepository.getBalance();

    if (!['income', 'outcome'].includes(type)) {
      throw Error('Transaction is invalid');

    }

    if (type === 'outcome' && total < value) {
      throw Error('Impossible to withdraw, the amount is greater than the total');
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    })

    return transaction
  }
}

export default CreateTransactionService;

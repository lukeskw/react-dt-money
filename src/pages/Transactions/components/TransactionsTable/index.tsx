import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { SearchForm } from '../SearchForm'
import {
  PriceHighlight,
  SpinnerDiv,
  TransactionTable,
  TransactionTableContainer,
} from './styles'
import { dateFormatter, priceFormatter } from '../../../../utils/formatter'
import { CircleNotch } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'

export function TransactionsTable() {
  const { transactions } = useContextSelector(
    TransactionsContext,
    (context) => {
      return { transactions: context.transactions }
    },
  )
  return (
    <TransactionTableContainer>
      <SearchForm />
      {transactions.length === 0 ? (
        <SpinnerDiv>
          <CircleNotch className="animate-spin" />
        </SpinnerDiv>
      ) : (
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionTable>
      )}
    </TransactionTableContainer>
  )
}

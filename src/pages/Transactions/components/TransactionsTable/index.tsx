import { SearchForm } from '../SearchForm'
import {
  PriceHighlight,
  TransactionTable,
  TransactionTableContainer,
} from './styles'

export function TransactionsTable() {
  return (
    <TransactionTableContainer>
      <SearchForm />
      <TransactionTable>
        <tbody>
          <tr>
            <td width="50%">Website Development</td>
            <td>
              <PriceHighlight variant="income">$12,000.00</PriceHighlight>
            </td>
            <td>Sell</td>
            <td>30/03/2024</td>
          </tr>
          <tr>
            <td width="50%">Good Burguer's</td>
            <td>
              <PriceHighlight variant="outcome">- $59.00</PriceHighlight>
            </td>
            <td>Food</td>
            <td>30/03/2024</td>
          </tr>
        </tbody>
      </TransactionTable>
    </TransactionTableContainer>
  )
}

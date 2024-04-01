import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, CircleNotch, X } from 'phosphor-react'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  type: z.enum(['income', 'outcome']),
  category: z.string(),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        createTransaction: context.createTransaction,
      }
    },
  )
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { category, description, price, type } = data
    await createTransaction({
      category,
      description,
      price,
      type,
    })

    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            {...register('description')}
            type="text"
            id="description"
            placeholder="Description"
            required
          />

          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            id="price"
            placeholder="Price"
            required
          />

          <input
            {...register('category')}
            type="text"
            id="category"
            placeholder="Category"
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} /> Income
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} /> Outcome
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <CircleNotch className="animate-spin" />
            ) : (
              <>Register</>
            )}
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}

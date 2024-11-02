'use client'

import Button from '@/components/ui/button'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className='flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div className='text-center'>
          <h1 className='mb-2 text-3xl font-bold'>
            Oops! Something went wrong
          </h1>
          <div className='mb-4 text-lg text-orange-600'>
            {error.message || 'An unexpected error occurred'}
          </div>
          <Button onClick={reset}>Try again</Button>
        </div>
      </div>
    </div>
  )
}

export default Error

import { useState } from 'react'
import type { AuthState } from '@/types/auth'

export const useEmailLink = () => {
  const [state, setState] = useState<AuthState>({
    isLoading: false,
    error: null,
    success: false
  })

  const sendEmailLink = async (email: string) => {
    setState({ isLoading: true, error: null, success: false })

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      if (email.endsWith('@prepare.com')) {
        setState(prev => ({ ...prev, success: true }))
        return true
      } else {
        throw new Error('Please use a valid @prepare.com email address')
      }
    } catch (error) {
      setState(prev => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : 'An unexpected error occurred' 
      }))
      return false
    } finally {
      setState(prev => ({ ...prev, isLoading: false }))
    }
  }

  return {
    ...state,
    sendEmailLink
  }
}
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { EmailLinkForm } from '@/features/auth/components/EmailLinkForm'
import { Banner } from '@/components/Banner'
import { VerificationDialog } from '@/features/auth/components/VerificationDialog'
import { useEmailLink } from '@/features/auth/hooks/useEmailLink'
import { useCountdown } from '@/hooks/useCountdown'

export default function LoginPage() {
  const router = useRouter()
  const { isLoading, error, success, sendEmailLink } = useEmailLink()
  const { countdown, startCountdown, isActive } = useCountdown()
  const [showErrorBanner, setShowErrorBanner] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = async (email: string) => {
    setIsDialogOpen(true)
    const success = await sendEmailLink(email)
    
    if (success) {
      startCountdown(60)
      setTimeout(() => {
        setIsDialogOpen(false)
        router.push('/auth/check-email')
      }, 2000)
    } else {
      setIsDialogOpen(false)
      setShowErrorBanner(true)
      setTimeout(() => setShowErrorBanner(false), 5000)
    }
  }

  const getButtonText = () => {
    if (isLoading) return 'Sending...'
    if (isActive) return `Resend in ${countdown}s`
    return 'Send Login Link'
  }

  return (
    <>
      <EmailLinkForm
        onSubmit={handleSubmit}
        isDisabled={isLoading || isActive}
        buttonText={getButtonText()}
      />
      <VerificationDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        isLoading={isLoading}
        isSuccess={success}
      />
      {showErrorBanner && error && (
        <Banner 
          message={error} 
          type='error'
          onClose={() => setShowErrorBanner(false)} 
        />
      )}
    </>
  )
}
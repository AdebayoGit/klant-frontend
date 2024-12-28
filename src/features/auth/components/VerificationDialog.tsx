import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Loader2, CheckCircle2 } from 'lucide-react'
import { cn } from "@/lib/utils"

const VisuallyHidden = ({ children }: { children: React.ReactNode }) => (
  <span className="sr-only">{children}</span>
)

interface VerificationDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  isLoading: boolean
  isSuccess: boolean
}

export const VerificationDialog = ({
  isOpen,
  onOpenChange,
  isLoading,
  isSuccess
}: VerificationDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogTitle>
          <VisuallyHidden>Email Verification Status</VisuallyHidden>
        </DialogTitle>
        <div className="flex flex-col items-center justify-center space-y-4 py-8">
          {isLoading ? (
            <>
              <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-primary mb-3 sm:mb-4" />
              <p className="text-base sm:text-lg font-semibold">Verifying...</p>
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 mb-3 sm:mb-4" />
              <p className="text-base sm:text-lg font-semibold">Verification Successful!</p>
            </>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
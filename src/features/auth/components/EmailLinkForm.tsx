import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface EmailLinkFormProps {
  onSubmit: (email: string) => Promise<void>
  isDisabled: boolean
  buttonText: string
}

export const EmailLinkForm = ({
  onSubmit,
  isDisabled,
  buttonText
}: EmailLinkFormProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    await onSubmit(email)
  }

  return (
    <Card className="w-full max-w-[350px] sm:max-w-[400px]">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold text-center text-primary">
          Welcome to Prepare
        </CardTitle>
        <CardDescription className="text-center text-sm sm:text-base">
          Enter your email to receive a login link
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                placeholder="name@prepare.com"
                required
                className="text-sm sm:text-base"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full text-sm sm:text-base" 
            type="submit" 
            disabled={isDisabled}
          >
            {buttonText}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
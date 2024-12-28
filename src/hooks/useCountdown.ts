import { useState, useEffect } from 'react'

export const useCountdown = (initialTime: number = 0) => {
  const [countdown, setCountdown] = useState(initialTime)

  useEffect(() => {
    let timer: NodeJS.Timeout
    
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1)
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [countdown])

  const startCountdown = (seconds: number) => {
    setCountdown(seconds)
  }

  return {
    countdown,
    startCountdown,
    isActive: countdown > 0
  }
}
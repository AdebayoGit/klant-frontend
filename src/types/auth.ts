export interface AuthState {
    isLoading: boolean
    error: string | null
    success: boolean
  }
  
  export interface EmailLinkPayload {
    email: string
  }
  
  export interface AuthResponse {
    success: boolean
    message: string
  }
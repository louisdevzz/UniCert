import Dashboard from "@/components/Dashboard";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "BlockCertify",
  description: "Transparent verification of university diplomas in a seconds"
}

export default function App(){
  return(
    <Dashboard/>
  )
}
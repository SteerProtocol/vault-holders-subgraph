import { VaultCreated } from '../generated/Factory/Factory'
import { ERC20 } from '../generated/templates'

export function handleVaultCreated(event: VaultCreated): void {
  // ... your existing vault creation logic ...

  // Create new ERC20 data source instance
  ERC20.create(event.params.vault)
} 
variable "container_registry_sku" {
  description = "The SKU of the Azure Container Registry"
  type        = string

  validation {
    condition     = contains(["Basic", "Standard", "Premium"], var.container_registry_sku)
    error_message = "ERROR: The variable \"container_registry_sku\" must be one of the following values: \"Basic\", \"Standard\", \"Premium\"."
  }
}

variable "container_registry_admin_enabled" {
  description = "Enable admin user for the Azure Container Registry"
  type        = bool
  default     = true
}

variable "container_registry_public_network_access_enabled" {
  description = "Enable public network access for the Azure Container Registry"
  type        = bool
  default     = true
}

variable "container_registry_quarantine_policy_enabled" {
  description = "Enable quarantine policy for the Azure Container Registry"
  type        = bool
  default     = false
}

variable "container_registry_retention_policy" {
  description = "The retention policy for the Azure Container Registry"
  type = object({
    days    = optional(number)
    enabled = optional(bool)
  })
  default = {}
}

variable "container_registry_zone_redudancy_enabled" {
  description = "Enable zone redundancy for the Azure Container Registry"
  type        = bool
  default     = false
}

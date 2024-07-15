# Azure Container App Environment Variables
# variable "infrastructure_subnet_id" {
#   description = "(Optional) The existing Subnet to use for the Container Apps Control Plane."
#   type        = string
#   default     = null
# }

variable "vnet_rg_name" {
  description = "(Optional) The name of the resource group where the virtual network is located."
  type        = string
  default     = null
}

variable "vnet_name" {
  description = "(Optional) The name of the virtual network."
  type        = string
  default     = null
}

variable "subnet_name" {
  description = "(Optional) The name of the subnet."
  type        = string
  default     = null
}

variable "internal_load_balancer_enabled" {
  description = "(Optional) Should the Container Environment operate in Internal Load Balancing Mode?"
  type        = bool
  default     = false

  validation {
    condition = (
      (var.internal_load_balancer_enabled == false && var.subnet_name == null) ||
      (var.internal_load_balancer_enabled == false && var.subnet_name != null) || # Internal Load Balancer can be false, while still having a subnet reference (ie. for other network related configurations)
      (var.internal_load_balancer_enabled == true && var.subnet_name != null)
    )
    error_message = "ERROR: The variable 'internal_load_balancer_enabled' cannot be set to true if the variable 'subnet_name' is not set."
  }
}

variable "zone_redundancy_enabled" {
  description = "(Optional) Should the Container App Environment be created with Zone Redundancy enabled?"
  type        = bool
  default     = false

  validation {
    condition = (
      (var.zone_redundancy_enabled == false && var.subnet_name == null) ||
      (var.zone_redundancy_enabled == false && var.subnet_name != null) || # Zone redundancy can be false, while still having a subnet reference (ie. for other network related configurations)
      (var.zone_redundancy_enabled == true && var.subnet_name != null)
    )
    error_message = "ERROR: The variable 'zone_redundancy_enabled' cannot be set to true if the variable 'subnet_name' is not set."
  }
}

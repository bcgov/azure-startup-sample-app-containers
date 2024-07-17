# Azure Container App Environment Variables
variable "infrastructure_subnet_id" {
  description = "(Optional) The existing Subnet to use for the Container Apps Control Plane."
  type        = string
  default     = null
}

variable "internal_load_balancer_enabled" {
  description = "(Optional) Should the Container Environment operate in Internal Load Balancing Mode?"
  type        = bool
  default     = false

  # validation {
  #   condition = (var.internal_load_balancer_enabled == true && var.infrastructure_subnet_id == null)
  #   error_message = "ERROR: The variable \"internal_load_balancer_enabled\" cannot be set to true if the variable \"infrastructure_subnet_id\" is not set."
  # }
}

variable "zone_redundancy_enabled" {
  description = "(Optional) Should the Container App Environment be created with Zone Redundancy enabled?"
  type        = bool
  default     = false

  validation {
    condition     = (var.zone_redundancy_enabled == false && var.infrastructure_subnet_id == null)
    error_message = "ERROR: The variable \"zone_redundancy_enabled\" cannot be set to true if the variable \"infrastructure_subnet_id\" is not set."
  }
}

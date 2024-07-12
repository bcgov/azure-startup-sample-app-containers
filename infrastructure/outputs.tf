output "resource_group_id" {
  description = "The ID of the Resource Group"
  value       = azurerm_resource_group.rg.id
}

output "resource_group_name" {
  description = "The Name of the Resource Group"
  value       = azurerm_resource_group.rg.name
}

// MARK: Azure Container Registry Outputs
output "container_registry_id" {
  description = "The ID of the Azure Container Registry"
  value       = azurerm_container_registry.acr.id
}

output "container_registry_name" {
  description = "The Name of the Azure Container Registry"
  value       = azurerm_container_registry.acr.name
}

output "container_registry_login_server" {
  description = "The Login Server of the Azure Container Registry"
  value       = azurerm_container_registry.acr.login_server
}

// MARK: Azure Container App Environment Outputs
output "container_app_env_id" {
  description = "The ID of the Azure Container App Environment"
  value       = azurerm_container_app_environment.example.id
}

output "container_app_env_name" {
  description = "The Name of the Azure Container App Environment"
  value       = azurerm_container_app_environment.example.name
}

output "container_app_env_infrastructure_subnet_id" {
  description = "The Infrastructure Subnet ID of the Azure Container App Environment"
  value       = azurerm_container_app_environment.example.infrastructure_subnet_id
}

output "container_app_env_custom_domain_verification_id" {
  description = "The ID of the Custom Domain Verification for the Azure Container App Environment"
  value       = azurerm_container_app_environment.example.custom_domain_verification_id
}

output "container_app_env_default_domain" {
  description = "The Default Domain of the Azure Container App Environment"
  value       = azurerm_container_app_environment.example.default_domain
}

output "container_app_env_docker_bridge_cidr" {
  description = "The Docker Bridge CIDR of the Azure Container App Environment"
  value       = azurerm_container_app_environment.example.docker_bridge_cidr
}

output "container_app_env_platform_reserved_cidr" {
  description = "The Platform Reserved CIDR of the Azure Container App Environment"
  value       = azurerm_container_app_environment.example.platform_reserved_cidr
}

output "container_app_env_platform_reserved_dns_ip_address" {
  description = "The Platform Reserved DNS IP Addresses of the Azure Container App Environment"
  value       = azurerm_container_app_environment.example.platform_reserved_dns_ip_address
}

output "container_app_env_static_ip_address" {
  description = "The Static IP Address of the Azure Container App Environment"
  value       = azurerm_container_app_environment.example.static_ip_address
}

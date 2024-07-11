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

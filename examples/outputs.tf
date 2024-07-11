output "resource_group_id" {
  description = "The ID of the Resource Group"
  value       = module.container_app.resource_group_id
}

output "resource_group_name" {
  description = "The Name of the Resource Group"
  value       = module.container_app.resource_group_name
}

// MARK: Azure Container Registry Outputs
output "container_registry_id" {
  description = "The ID of the Azure Container Registry"
  value       = module.container_app.container_registry_id
}

output "container_registry_name" {
  description = "The Name of the Azure Container Registry"
  value       = module.container_app.container_registry_name
}

output "container_registry_login_server" {
  description = "The Login Server of the Azure Container Registry"
  value       = module.container_app.container_registry_login_server
}

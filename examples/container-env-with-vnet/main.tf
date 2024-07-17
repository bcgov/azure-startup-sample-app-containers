module "container_app" {
  source = "../../infrastructure"

  service_name = var.service_name
  location     = lower(var.location)
  env          = var.env

  container_registry_sku                           = var.container_registry_sku
  container_registry_admin_enabled                 = var.container_registry_admin_enabled
  container_registry_retention_policy              = var.container_registry_retention_policy
  container_registry_public_network_access_enabled = var.container_registry_public_network_access_enabled
  container_registry_quarantine_policy_enabled     = var.container_registry_quarantine_policy_enabled
  container_registry_zone_redudancy_enabled        = var.container_registry_zone_redudancy_enabled

  vnet_rg_name                   = var.vnet_rg_name
  vnet_name                      = var.vnet_name
  subnet_name                    = var.subnet_name
  internal_load_balancer_enabled = var.internal_load_balancer_enabled
  zone_redundancy_enabled        = var.zone_redundancy_enabled

  tags = var.tags
}

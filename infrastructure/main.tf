# Resources Needed:
# - Resource Group
# - Azure Container registry
# - Azure Container Instances


resource "azurerm_resource_group" "rg" {
  name     = "${local.name_prefix}-rg"
  location = var.location

  tags = merge(
    var.required_tags,
    var.tags
  )
}

resource "azurerm_container_registry" "acr" {
  name                = "${local.name_prefix}acr"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.location

  sku           = var.container_registry_sku
  admin_enabled = var.container_registry_admin_enabled

  dynamic "retention_policy" {
    for_each = [var.container_registry_retention_policy]
    content {
      days    = retention_policy.value.days
      enabled = retention_policy.value.enabled
    }
  }

  public_network_access_enabled = var.container_registry_public_network_access_enabled
  quarantine_policy_enabled     = var.container_registry_quarantine_policy_enabled
  zone_redundancy_enabled       = var.container_registry_zone_redudancy_enabled

  tags = merge(
    var.required_tags,
    var.tags
  )
}

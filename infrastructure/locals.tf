locals {
  # Environment
  env = var.env == "lab" ? "lab" : length(regexall("dev|qa|npe", var.env)) > 0 ? "npe" : "prd"

  # Location Short Name is "cac" if location is canadacentral, otherwise "cae"
  location_sn = var.location == "canadacentral" ? "cac" : "cae"

  # Naming prefix for resources (ie. abc123-dev-lab)
  name_prefix = "${var.service_name}${local.location_sn}${var.env}"

  # Logic: If subnet_name is not set, then infrastructure_subnet_id is null, and the infrastructure_subnet_id does not try to create the path using variables that are null (which throws an error)
  infrastructure_subnet_id = var.subnet_name == null ? null : format("/subscriptions/%s/resourceGroups/%s/providers/Microsoft.Network/virtualNetworks/%s/subnets/%s",
    data.azurerm_subscription.current.subscription_id, var.vnet_rg_name, var.vnet_name, var.subnet_name
  )
}

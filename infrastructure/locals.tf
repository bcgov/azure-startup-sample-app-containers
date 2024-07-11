locals {
  # Environment
  env = var.env == "lab" ? "lab" : length(regexall("dev|qa|npe", var.env)) > 0 ? "npe" : "prd"

  # Location Short Name is "cac" if location is canadacentral, otherwise "cae"
  location_sn = var.location == "canadacentral" ? "cac" : "cae"

  # Naming prefix for resources (ie. abc123-dev-lab)
  name_prefix = "${var.service_name}${local.location_sn}${var.env}"


  #client_id       = var.client_id != "" ? var.client_id : env.ARM_CLIENT_ID
  #client_secret   = var.client_secret != "" ? var.client_secret : env.ARM_CLIENT_SECRET
  #tenant_id       = var.tenant_id != "" ? var.tenant_id : env.ARM_TENANT_ID
  #subscription_id = var.subscription_id != "" ? var.subscription_id : env.ARM_SUBSCRIPTION_ID
}

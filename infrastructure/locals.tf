locals {
  # Environment
  env = var.env == "lab" ? "lab" : length(regexall("dev|qa|npe", var.env)) > 0 ? "npe" : "prd"

  # Location Short Name is "cac" if location is canadacentral, otherwise "cae"
  location_sn = var.location == "canadacentral" ? "cac" : "cae"

  # Naming prefix for resources (ie. abc123-dev-lab)
  name_prefix = "${var.service_name}${local.location_sn}${var.env}"
}
